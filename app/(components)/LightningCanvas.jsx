'use client';
// Physically-based lightning for the hero — PixiJS v8 (WebGL) + pixi-filters bloom.
//
// Geometry comes from lightningModel.js (dielectric-breakdown growth), so every strike
// is a real fractal, branching discharge. Playback follows the real sequence:
//   stepped leader (light advances in bursts, leaving a fading trail)
//   -> return stroke (very bright wave up the channel)
//   -> afterglow (the channel cools; the places it lit stay lit, then fade out).
// Light is also transported to its surroundings: glow sprites along the channel, a
// light map that makes the nearby circuit traces glow, a soft scene flash.
// Lazy-loaded by <HeroLightning/>.
import { useEffect, useRef } from 'react';
import { LEFT, RIGHT, buildLines } from './circuitGeometry';
import { makeLine } from './circuitPulse';
import { createGrowth, buildStrike, evaluate, groundFlash } from './lightningModel';

const CFG = {
  deep: 0x0a3a8f, blue: 0x1c6cf0, glow: 0x2a8cff, hero: 0x5fd0ff,
  B: 12,                 // brightness levels drawn per frame
  growthPerFrame: 14,    // DBM steps computed per frame (a strike is built while idle)
  gap: [0.5, 2.2],       // quiet time after a strike, per bolt (s)
  perSide: 1,            // independent bolts per side
  lightCell: 14,         // light-map resolution (px)
  lightRadius: 8,        // light-map spread (cells)
  segPx: 8,
  maxDpr: 1.5,
};
const NEAR_PX = 300; // how far off-screen (above/below) the effect keeps running
const rnd = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
// cool blue -> white-cyan as heat rises (same palette as the rest of the site)
const heatColor = (h) => {
  const lo = [0x1c, 0x86, 0xff], hi = [0xe4, 0xf8, 0xff];
  return (Math.round(lo[0] + (hi[0] - lo[0]) * h * h) << 16) | (Math.round(lo[1] + (hi[1] - lo[1]) * h) << 8) | Math.round(lo[2] + (hi[2] - lo[2]) * h);
};
const WM = [0.55, 0.95, 1.4]; // thickness per current class

function canvasTex(Texture, size, paint) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  paint(c.getContext('2d'), size); return Texture.from(c);
}

export default function LightningCanvas({ side = 'both', onReady }) {
  const host = useRef(null);

  useEffect(() => {
    let disposed = false, app = null, off = () => {};

    (async () => {
      const [px, { AdvancedBloomFilter }] = await Promise.all([import('pixi.js'), import('pixi-filters')]);
      const { Application, Container, Graphics, Sprite, Texture, BlurFilter, Rectangle } = px;
      const el = host.current; if (!el) return;
      const weak = (navigator.hardwareConcurrency || 4) < 4;
      app = new Application();
      await app.init({
        resizeTo: el, backgroundAlpha: 0, antialias: true, autoDensity: true,
        resolution: Math.min(window.devicePixelRatio || 1, weak ? 1.25 : CFG.maxDpr),
        powerPreference: 'low-power', preference: 'webgl',
      });
      if (disposed) { try { app.destroy(true, { children: true }); } catch {} return; }
      el.appendChild(app.canvas);

      const halo = canvasTex(Texture, 64, (g, w) => {
        const r = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
        r.addColorStop(0, 'rgba(210,242,255,1)'); r.addColorStop(0.25, 'rgba(60,170,255,.55)'); r.addColorStop(1, 'rgba(8,124,255,0)');
        g.fillStyle = r; g.fillRect(0, 0, w, w);
      });

      // buildLines() gives the traces; the chip pads live in the raw geometry data
      const model = { L: { ...buildLines(LEFT), chips: LEFT.chips }, R: { ...buildLines(RIGHT), chips: RIGHT.chips } };
      const wanted = side === 'left' ? ['L'] : side === 'right' ? ['R'] : ['L', 'R'];
      const sides = [];
      const B = CFG.B;
      const LC = CFG.lightCell, R = CFG.lightRadius;
      let W = 0, H = 0, unit = 1, LW = 0, LH = 0, lm = new Float32Array(1), circLit = null, circDirty = false, fxLayers = null;
      // light kernel: inverse-square-like fall-off with a smooth cut-off
      const ker = new Float32Array((2 * R + 1) ** 2);
      for (let dy = -R; dy <= R; dy++) for (let dx = -R; dx <= R; dx++) {
        const d = Math.hypot(dx, dy);
        ker[(dy + R) * (2 * R + 1) + dx + R] = d > R ? 0 : (1 / (1 + (d / 2.2) ** 2) ** 1.3) * (1 - (d / R) ** 2);
      }
      const splat = (x, y, v) => {
        const cx = Math.floor(x / LC), cy = Math.floor(y / LC);
        for (let dy = -R; dy <= R; dy++) {
          const yy = cy + dy; if (yy < 0 || yy >= LH) continue;
          for (let dx = -R; dx <= R; dx++) {
            const xx = cx + dx; if (xx < 0 || xx >= LW) continue;
            lm[yy * LW + xx] += v * ker[(dy + R) * (2 * R + 1) + dx + R];
          }
        }
      };

      // one brightness level of a set of segments: wide faint halo, glow, hot core
      const flush = (g, arr, h, k, u, halo3) => {
        if (!arr.length) return;
        const trace = () => { for (let i = 0; i < arr.length; i += 4) g.moveTo(arr[i], arr[i + 1]).lineTo(arr[i + 2], arr[i + 3]); };
        if (halo3) { trace(); g.stroke({ width: (10 + 16 * h) * k * u, color: CFG.blue, alpha: 0.05 * h, join: 'round', cap: 'round' }); }
        trace(); g.stroke({ width: (3.5 + 7 * h) * k * u, color: CFG.glow, alpha: 0.17 * h, join: 'round', cap: 'round' });
        trace(); g.stroke({ width: (0.9 + 1.5 * h) * k * u, color: heatColor(h), alpha: Math.min(1, 0.3 + h), join: 'round', cap: 'round' });
        arr.length = 0;
      };
      const boltBk = Array.from({ length: 3 * (B + 1) }, () => []);
      const circBk = Array.from({ length: B + 1 }, () => []);

      function layout() {
        app.stage.removeChildren().forEach((c) => c.destroy({ children: true }));
        sides.length = 0;
        W = app.screen.width; H = app.screen.height;
        unit = clamp(H / 900, 0.8, 1.25);
        LW = Math.ceil(W / LC) + 1; LH = Math.ceil(H / LC) + 1; lm = new Float32Array(LW * LH);
        const s = Math.max(0.5, Math.min(H / 1024, 1.15, (W * 0.34) / 300));
        const oy = (H - 1024 * s) / 2;

        const root = new Container(), base = new Container(), fx = new Container();
        const glowLayer = new Container(), boltLayer = new Container(), flashLayer = new Container();
        circLit = new Graphics(); circLit.blendMode = 'add';
        circDirty = false;
        fx.addChild(circLit);
        const nodeLayer = new Container(); fx.addChild(nodeLayer);
        fx.addChild(glowLayer, boltLayer, flashLayer);
        fx.filterArea = new Rectangle(0, 0, W, H);
        fx.filters = [new AdvancedBloomFilter({ threshold: 0.2, bloomScale: 1.15, brightness: 1.0, blur: weak ? 5 : 7, quality: weak ? 2 : 3 })];
        root.addChild(base, fx); app.stage.addChild(root);
        fxLayers = { glowLayer };

        const mobile = W < 768;
        const bandW = mobile ? W * 0.55 : Math.min(W * 0.36, 560);
        const cs = clamp(H / 110, 6, 9);
        const y0 = -cs;

        for (const [k, copy] of wanted.flatMap((w) => Array.from({ length: CFG.perSide }, (_, c) => [w, c]))) {
          const m = model[k];
          const mapX = k === 'L' ? (x) => x * s : (x) => W - (300 - x) * s;
          const mapY = (y) => oy + y * s;
          const tr = (pts) => pts.map(([x, y]) => [mapX(x), mapY(y)]);

          // (no static/dormant circuit art: only the lightning itself is visible)

          const nodes = m.nodes.map(([x, y], i) => {
            const sp = new Sprite(halo); sp.anchor.set(0.5); sp.blendMode = 'add'; sp.position.set(mapX(x), mapY(y));
            const bs = (i % 2 ? 20 : 14) * s; sp.width = sp.height = bs; sp.alpha = 0; nodeLayer.addChild(sp);
            return { sp, x: mapX(x), y: mapY(y) };
          });
          const lines = m.lines.map((src) => makeLine({ ...src, pts: tr(src.pts) }, CFG.segPx * s));

          const haze = new Sprite(halo); haze.anchor.set(0.5); haze.blendMode = 'add'; haze.tint = 0x087cff;
          haze.position.set(k === 'L' ? 0 : W, H * 0.5); haze.width = W * 0.5; haze.height = H * 1.15; haze.alpha = 0;
          const flash = new Sprite(halo); flash.anchor.set(0.5); flash.blendMode = 'add'; flash.tint = 0x1c6cf0; flash.alpha = 0;
          const gFlash = new Sprite(halo); gFlash.anchor.set(0.5); gFlash.blendMode = 'add'; gFlash.alpha = 0;
          const tFlash = new Sprite(halo); tFlash.anchor.set(0.5); tFlash.blendMode = 'add'; tFlash.alpha = 0;
          flashLayer.addChild(flash, gFlash, tFlash);
          root.addChildAt(haze, 0);

          const bolt = new Graphics(); bolt.blendMode = 'add'; boltLayer.addChild(bolt);
          const cols = Math.floor(bandW / cs), rows = Math.ceil((H - y0) / cs);
          sides.push({
            k, bolt, haze, flash, gFlash, tFlash, nodes, lines, bandW,
            // bolts always fall from the top of the screen downwards (cloud = top edge, ground = bottom)
            dom: { x0: k === 'L' ? 0 : W - cols * cs, y0, cs, cols, rows },
            growth: null, ready: null, strike: null, st: 0,
            next: (k === 'L' ? rnd(0.5, 0.9) : rnd(1.9, 2.5)) + copy * rnd(0.6, 1.3),
          });
        }
      }

      const startGrowth = (S) => {
        // random length: each strike reaches a random depth (50%..100% of the hero height: from the middle down to the very bottom), not always the bottom
        const rows = Math.max(8, Math.round(S.dom.rows * rnd(0.5, 1)));
        S.growth = createGrowth({ cols: S.dom.cols, rows, rootX: S.dom.cols * rnd(0.2, 0.8), eta: rnd(2, 3) });
      };
      const finishGrowth = (S) => {
        const K = buildStrike(S.growth, { x0: S.dom.x0, y0: S.dom.y0, cs: S.dom.cs });
        K.heat = new Float32Array(K.N);
        K.sp = K.lights.map((i) => {
          const sp = new Sprite(halo); sp.anchor.set(0.5); sp.blendMode = 'add'; sp.position.set(K.px[i], K.py[i]); sp.alpha = 0;
          fxLayers.glowLayer.addChild(sp); return sp;
        });
        S.growth = null;
        return K;
      };
      const disposeStrike = (S) => {
        S.strike.sp.forEach((sp) => sp.destroy());
        S.strike = null;
        S.flash.alpha = S.gFlash.alpha = S.tFlash.alpha = 0;
      };

      const update = (dt) => {
        lm.fill(0);
        let any = false;
        for (const S of sides) {
          S.next -= dt;
          if (!S.growth && !S.ready && !S.strike && S.next < 0.9) startGrowth(S);
          if (S.growth && S.growth.run(CFG.growthPerFrame)) S.ready = finishGrowth(S);
          if (S.ready && !S.strike && S.next <= 0) {
            S.strike = S.ready; S.ready = null; S.st = 0;
            S.next = S.strike.duration + rnd(...CFG.gap);
          }
          S.bolt.clear();
          if (!S.strike) { S.haze.alpha += (0 - S.haze.alpha) * 0.1; continue; }
          const K = S.strike;
          S.st += dt;
          if (S.st > K.duration) { disposeStrike(S); continue; }
          any = true;
          const E = evaluate(K, S.st, K.heat);
          const flick = 1 + (Math.random() - 0.5) * 0.14 * Math.min(1, E * 3);

          // channel -> brightness buckets (thickness class x heat level)
          for (let s = 0; s < K.nSeg; s++) {
            const n = K.segNode[s], hk = K.heat[n];
            if (hk <= 0) continue;
            const h = Math.min(1, (K.segHalf[s] === 0 ? 0.5 * (hk + K.heat[K.par[n]]) : hk) * flick);
            const b = Math.min(B, Math.ceil(h * B));
            if (b < 1) continue;
            const o = s * 4, a = boltBk[K.wcls[n] * (B + 1) + b];
            a.push(K.seg[o], K.seg[o + 1], K.seg[o + 2], K.seg[o + 3]);
          }
          for (let wc = 0; wc < 3; wc++) for (let b = 1; b <= B; b++) flush(S.bolt, boltBk[wc * (B + 1) + b], b / B, WM[wc], unit, true);

          // the place the light is in lights up: glow sprites + light map for the surroundings
          for (let j = 0; j < K.lights.length; j++) {
            const i = K.lights[j], h = K.heat[i], sp = K.sp[j];
            if (h < 0.04) { sp.alpha = 0; continue; }
            const w = K.lw[j];
            sp.alpha = Math.min(1, h * 0.24 * w);
            sp.width = sp.height = (70 + 90 * K.In[i]) * unit * (0.75 + 0.5 * h);
          }

          // ambient light from the whole channel + flashes at the cloud end and at the strike point
          const g = groundFlash(K, S.st);
          S.haze.alpha = 0.3 * E;
          S.flash.position.set((K.root.x + K.ground.x) / 2, H * 0.5);
          S.flash.width = S.bandW * 3.4; S.flash.height = H * 1.5; S.flash.alpha = 0.3 * Math.pow(E, 1.3);
          S.gFlash.position.set(K.ground.x, K.ground.y); S.gFlash.width = S.gFlash.height = 220 * unit * (0.6 + g); S.gFlash.alpha = Math.min(1, g * 0.9);
          S.tFlash.position.set(K.root.x, K.root.y + 10); S.tFlash.width = S.tFlash.height = 170 * unit; S.tFlash.alpha = Math.min(1, E * 0.8);
        }
      };

      layout();
      app.renderer.on('resize', layout);
      const tick = (tk) => update(Math.min(tk.deltaMS / 1000, 0.05));
      app.ticker.add(tick);

      // dev-only handles used to inspect the animation deterministically
      if (process.env.NODE_ENV !== 'production') {
        window.__lightning = {
          fire(i = 0) { const S = sides[i % sides.length]; if (S.strike) disposeStrike(S); startGrowth(S); S.growth.run(1e6); S.ready = finishGrowth(S); S.next = 0; update(0); },
          seek(t, i = 0) { app.ticker.stop(); const S = sides[i % sides.length]; if (S.strike) { S.st = t; update(0); } app.render(); },
        };
      }

      // Runs (and uses CPU/GPU) only while the screen is on the hero or within a small distance of it
      // (NEAR_PX above/below); paused otherwise, and while the tab is hidden.
      let inView = false;
      app.ticker.stop(); // stays idle until the observer says the hero is near the screen
      const sync = () => { (inView && !document.hidden) ? app.ticker.start() : app.ticker.stop(); };
      const io = new IntersectionObserver(([e]) => { inView = e.isIntersecting; sync(); }, { rootMargin: `${NEAR_PX}px 0px ${NEAR_PX}px 0px` });
      io.observe(el);
      const vis = () => sync();
      document.addEventListener('visibilitychange', vis);
      off = () => { io.disconnect(); document.removeEventListener('visibilitychange', vis); if (window.__lightning) delete window.__lightning; };

      requestAnimationFrame(() => requestAnimationFrame(() => onReady && onReady()));
    })().catch((e) => { if (process.env.NODE_ENV !== 'production') console.error('[LightningCanvas]', e); });

    return () => {
      disposed = true; off();
      if (app) { try { app.destroy(true, { children: true, texture: true }); } catch {} app = null; }
    };
  }, [side]); // eslint-disable-line react-hooks/exhaustive-deps
  return <div ref={host} className="circuit-bolts__canvas" />;
}
