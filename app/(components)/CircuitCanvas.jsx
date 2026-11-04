'use client';
// Electric discharge with afterglow — PixiJS v8 (WebGL 2D) + pixi-filters bloom.
// Lazy-loaded by <CircuitBolts/> on capable desktops; the light SVG is the fallback.
import { useEffect, useRef } from 'react';
import { LEFT, RIGHT, buildLines, pointAt } from './circuitGeometry';
import { makeLine, launch, step } from './circuitPulse';

const CFG = {
  deep: 0x0a3a8f, blue: 0x1c6cf0, glowBlue: 0x2a8cff, hero: 0x5fd0ff,
  bloom: { threshold: 0.2, bloomScale: 1.15, brightness: 1.0, blur: 7, quality: 3 },
  speed: [320, 470],   // pulse speed, design px / second
  afterglow: 0.85,     // seconds for the lit trail to cool (time constant)
  every: [0.45, 1.5],  // seconds between discharges, per side
  segPx: 6,            // trace resolution (design px)
  buckets: 10,         // brightness levels drawn per frame
  parallax: 8,
  maxDpr: 1.5,
};
const rnd = (a, b) => a + Math.random() * (b - a);
// cool blue -> white-cyan as heat rises
const heatColor = (h) => {
  const lo = [0x1c, 0x86, 0xff], hi = [0xe4, 0xf8, 0xff];
  return (Math.round(lo[0] + (hi[0] - lo[0]) * h * h) << 16) | (Math.round(lo[1] + (hi[1] - lo[1]) * h) << 8) | Math.round(lo[2] + (hi[2] - lo[2]) * h);
};

function canvasTex(Texture, size, paint) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  paint(c.getContext('2d'), size); return Texture.from(c);
}

export default function CircuitCanvas({ side = 'both', onReady }) {
  const host = useRef(null);

  useEffect(() => {
    let disposed = false, app = null, off = () => {};

    (async () => {
      const [px, { AdvancedBloomFilter }] = await Promise.all([import('pixi.js'), import('pixi-filters')]);
      const { Application, Container, Graphics, Sprite, Texture, BlurFilter } = px;
      const el = host.current; if (!el) return;
      app = new Application();
      await app.init({
        resizeTo: el, backgroundAlpha: 0, antialias: true, autoDensity: true,
        resolution: Math.min(window.devicePixelRatio || 1, CFG.maxDpr),
        powerPreference: 'low-power', preference: 'webgl',
      });
      if (disposed) { try { app.destroy(true, { children: true }); } catch {} return; }
      el.appendChild(app.canvas);

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const halo = canvasTex(Texture, 64, (g, w) => {
        const r = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
        r.addColorStop(0, 'rgba(210,242,255,1)'); r.addColorStop(0.25, 'rgba(60,170,255,.55)'); r.addColorStop(1, 'rgba(8,124,255,0)');
        g.fillStyle = r; g.fillRect(0, 0, w, w);
      });

      const model = { L: buildLines(LEFT), R: buildLines(RIGHT) };
      const wanted = side === 'left' ? ['L'] : side === 'right' ? ['R'] : ['L', 'R'];
      const sides = [], ptr = { x: 0, y: 0, cx: 0, cy: 0 };
      let surgeAt = -99;

      function layout() {
        app.stage.removeChildren().forEach((c) => c.destroy({ children: true }));
        sides.length = 0;
        const W = app.screen.width, H = app.screen.height;
        const s = Math.max(0.5, Math.min(H / 1024, 1.15, (W * 0.34) / 300));
        const oy = (H - 1024 * s) / 2;

        for (const k of wanted) {
          const m = model[k];
          const mapX = k === 'L' ? (x) => x * s : (x) => W - (300 - x) * s;
          const mapY = (y) => oy + y * s;
          const tr = (pts) => pts.map(([x, y]) => [mapX(x), mapY(y)]);

          // dormant traces: deliberately dim, so light is what makes them come alive
          const dim = (g, lines, w, color, alpha) => {
            for (const pts of lines) {
              const p = tr(pts); g.moveTo(p[0][0], p[0][1]);
              for (let i = 1; i < p.length; i++) g.lineTo(p[i][0], p[i][1]);
              g.stroke({ width: Math.max(0.7, w * s), color, alpha, join: 'round', cap: 'round' });
            }
          };
          const root = new Container(), far = new Container(), mid = new Container(), hero = new Container();
          const farG = new Graphics(); far.addChild(farG); // no dormant traces: only live discharges are visible
          far.filters = [new BlurFilter({ strength: 1.3, quality: 2 })];
          const midG = new Graphics(); mid.addChild(midG);
          const heroG = new Graphics(); hero.addChild(heroG);

          // static chip squares removed

          const haze = new Sprite(halo); haze.anchor.set(0.5); haze.blendMode = 'add'; haze.tint = 0x087cff;
          haze.position.set(k === 'L' ? 0 : W, H * (k === 'L' ? 0.42 : 0.58)); haze.width = W * 0.5; haze.height = H * 1.15; haze.alpha = 0;

          const nodes = m.nodes.map(([x, y], i) => {
            const sp = new Sprite(halo); sp.anchor.set(0.5); sp.blendMode = 'add'; sp.position.set(mapX(x), mapY(y));
            const base = (i % 2 ? 20 : 14) * s; sp.width = sp.height = base; sp.alpha = 0; hero.addChild(sp);
            return { sp, base, flash: 0 };
          });

          // the lit layer: additive, redrawn each frame from the heat map
          const lit = new Graphics(); lit.blendMode = 'add'; hero.addChild(lit);
          const lines = m.lines.map((src) => {
            const ln = makeLine({ ...src, pts: tr(src.pts) }, CFG.segPx * s);
            if (src.tier === 'hero') { const f = new Sprite(halo); f.anchor.set(0.5); f.blendMode = 'add'; f.visible = false; hero.addChild(f); ln.flare = f; }
            return ln;
          });
          hero.filters = [new AdvancedBloomFilter(CFG.bloom)];
          root.addChild(haze, far, mid, hero); app.stage.addChild(root);
          sides.push({ far, mid, hero, haze, lit, nodes, lines, groups: m.groups, s, next: rnd(0.2, 1), last: -1 });
        }
      }

      function fire(S, extra = false) {
        let gi; do { gi = Math.floor(Math.random() * S.groups.length); } while (gi === S.last && S.groups.length > 1);
        S.last = gi;
        const dir = Math.random() < 0.78 ? 1 : -1, v = rnd(...CFG.speed) * S.s;
        S.groups[gi].forEach((li, n) => launch(S.lines[li], { delay: n * 0.03 + rnd(0, 0.05), v: v * rnd(0.92, 1.08), dir }));
        if (extra) fire(S);
      }

      layout();
      app.renderer.on('resize', layout);
      const onMove = (e) => { ptr.x = (e.clientX / innerWidth) * 2 - 1; ptr.y = (e.clientY / innerHeight) * 2 - 1; };
      if (!reduce) window.addEventListener('pointermove', onMove, { passive: true });

      const B = CFG.buckets;
      let t = 0;
      const frame = (tk) => {
        const dt = Math.min(tk.deltaMS / 1000, 0.05); t += dt;
        const decay = Math.exp(-dt / CFG.afterglow);
        ptr.cx += (ptr.x - ptr.cx) * 0.05; ptr.cy += (ptr.y - ptr.cy) * 0.05;
        for (const S of sides) {
          S.far.position.set(ptr.cx * CFG.parallax * 0.3, ptr.cy * CFG.parallax * 0.3);
          S.mid.position.set(ptr.cx * CFG.parallax * 0.65, ptr.cy * CFG.parallax * 0.65);
          S.hero.position.set(ptr.cx * CFG.parallax, ptr.cy * CFG.parallax);

          S.next -= dt;
          if (S.next <= 0) { const big = Math.random() < 0.12; fire(S, big); if (big) surgeAt = t; S.next = rnd(...CFG.every); }

          let litCount = 0;
          for (const ln of S.lines) {
            litCount += step(ln, dt, decay, B);
            if (ln.hit && ln.nodeIdx >= 0) S.nodes[ln.nodeIdx].flash = 1;          // pulse arrives -> node flashes
            if (ln.flare) {
              if (ln.st.active) { const p = pointAt(ln.pts, ln.st.d); ln.flare.visible = true; ln.flare.position.set(p.x, p.y); ln.flare.width = ln.flare.height = 26 * S.s; ln.flare.alpha = 0.9; }
              else ln.flare.visible = false;
            }
          }
          // draw only what is lit, grouped by brightness level (one path + two strokes per level)
          S.lit.clear();
          for (let b = 1; b <= B; b++) {
            const h = b / B; let any = false;
            for (const ln of S.lines) for (let i = 0; i < ln.n; i++) if (ln.bk[i] === b) {
              const o = i * 4; S.lit.moveTo(ln.seg[o], ln.seg[o + 1]).lineTo(ln.seg[o + 2], ln.seg[o + 3]); any = true;
            }
            if (!any) continue;
            S.lit.stroke({ width: (3 + 5 * h) * S.s, color: CFG.glowBlue, alpha: 0.18 * h, join: 'round', cap: 'round' });
            S.lit.stroke({ width: (1 + 1.1 * h) * S.s, color: heatColor(h), alpha: Math.min(1, 0.35 + h), join: 'round', cap: 'round' });
          }
          for (const n of S.nodes) { n.flash *= Math.exp(-dt / 0.45); const k = 1 + n.flash * 1.4; n.sp.width = n.sp.height = n.base * k; n.sp.alpha = Math.min(1, n.flash); }
          // the surroundings pick up some of the light
          const surge = Math.exp(-(t - surgeAt) / 0.18) * 0.25;
          S.haze.alpha = 0.2 * Math.min(1, litCount / 220) + surge * 0.3;
          S.hero.alpha = Math.min(1, 0.92 + surge);
        }
      };
      if (reduce) { app.ticker.stop(); app.render(); } else app.ticker.add(frame);

      const io = new IntersectionObserver(([e]) => { if (!reduce) e.isIntersecting ? app.ticker.start() : app.ticker.stop(); });
      io.observe(el);
      const vis = () => { if (!reduce) document.hidden ? app.ticker.stop() : app.ticker.start(); };
      document.addEventListener('visibilitychange', vis);
      off = () => { io.disconnect(); document.removeEventListener('visibilitychange', vis); window.removeEventListener('pointermove', onMove); };

      requestAnimationFrame(() => requestAnimationFrame(() => onReady && onReady()));
    })().catch(() => {});

    return () => {
      disposed = true; off();
      if (app) { try { app.destroy(true, { children: true, texture: true }); } catch {} app = null; }
    };
  }, [side]); // eslint-disable-line react-hooks/exhaustive-deps
  return <div ref={host} className="circuit-bolts__canvas" />;
}
