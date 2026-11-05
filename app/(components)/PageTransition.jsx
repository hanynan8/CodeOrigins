'use client';
// Route-change "curtain": a fluid, wavy sheet drops from the top and covers the
// whole screen (showing the page name), the new page loads underneath, then the
// sheet is pulled back up from the bottom to the top.
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

// ── Timings (ms) — raise the numbers to make it slower ──────────────────
const COVER = 1000;    // curtain falling
const LIFT = 1100;     // curtain rising
const TEXT_MIN = 1300; // minimum time the page name stays visible
const TEXT_OUT = 550;  // page name leaving, right before the curtain lifts
const MAX_WAIT = 8000; // safety: never leave the curtain stuck on screen
const AMP = 150;       // how far the wave bulges (px)
const SHEET_COLOR = 'rgb(var(--c-bg))';   // main curtain colour (same as the site background, follows the theme)
const EDGE_COLOR = 'rgb(var(--c-blue))'; // thin edge colour (electric blue)
const BAND = 16;       // thickness of the thin blue edge (px) - lower = thinner
const SAMPLES = 48;    // smoothness of the wavy edge

// Page names shown on the curtain. First match wins.
const PAGE_NAMES = [
  ['/lastprojects/', 'Project Details'],
  ['/lastprojects', 'Our Work'],
  ['/services', 'Services'],
  ['/pricing', 'Pricing'],
  ['/about', 'About Us'],
  ['/contact', 'Contact Us'],
  ['/privacy-policy', 'Privacy Policy'],
  ['/terms-and-conditions', 'Terms & Conditions'],
];

function nameFor(pathname) {
  if (pathname === '/') return 'Home';
  const hit = PAGE_NAMES.find(([p]) => pathname.startsWith(p));
  if (hit) return hit[1];
  return (
    pathname.split('/').filter(Boolean).pop()?.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) || ''
  );
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const easeInOut = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

// Builds the wavy bottom edge of the sheet.
// p = 0..1 progress. cover: edge goes 0 -> bottom. lift: edge goes bottom -> 0.
function edgePoints(W, H, p, dir, phase, amp) {
  const travel = H + 6;
  const Y = dir === 'cover' ? p * travel : (1 - p) * travel;
  const A = amp * Math.sin(Math.PI * p) * (dir === 'cover' ? 1 : -1);
  const pts = [];
  for (let i = 0; i <= SAMPLES; i++) {
    const u = i / SAMPLES;
    const env = Math.sin(Math.PI * u); // corners trail, centre leads
    const shape = env * (0.7 + 0.3 * Math.sin(3 * Math.PI * u + phase));
    pts.push([u * W, Y + A * shape]);
  }
  return pts;
}

function sheetPath(W, pts) {
  let d = `M0,-20 L${W},-20 L${pts[pts.length - 1][0]},${pts[pts.length - 1][1]}`;
  for (let i = pts.length - 2; i >= 0; i--) d += ` L${pts[i][0].toFixed(1)},${pts[i][1].toFixed(1)}`;
  return d + ' Z';
}

function linePath(pts) {
  return pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
}

export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();

  const [active, setActive] = useState(false);
  const [label, setLabel] = useState('');
  const [textPhase, setTextPhase] = useState('pre'); // 'pre' (below) -> 'in' -> 'out' (above)

  const busy = useRef(false);
  const pending = useRef(null);
  const fromPath = useRef(pathname);
  const routeResolver = useRef(null);
  const rafId = useRef(0);
  const lastDraw = useRef(null);

  const svgRef = useRef(null);
  const darkRef = useRef(null);
  const accentRef = useRef(null);
  const rimRef = useRef(null);

  // Paint one frame. dark = the dark sheet (carries the text), accent = blue wave in front.
  const draw = useCallback((dir, t) => {
    const svg = svgRef.current;
    if (!svg) return;
    const W = svg.clientWidth;
    const H = svg.clientHeight;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const amp = reduce ? 0 : Math.min(AMP, H * 0.2);
    const dur = dir === 'cover' ? COVER : LIFT;
    const phase = performance.now() * 0.003;

    const p = easeInOut(clamp01(t / dur));
    const dark = edgePoints(W, H, p, dir, phase, amp);

    // thin blue edge hugging the bottom of the dark sheet (fades to 0 at both ends)
    const bell = Math.sin(Math.PI * p);
    const accent = dark.map(([x, y], i) => {
      const u = i / SAMPLES;
      return [x, y + BAND * bell * (0.55 + 0.45 * Math.sin(4 * Math.PI * u + phase * 1.3))];
    });
    const dDark = sheetPath(W, dark);

    darkRef.current?.setAttribute('d', dDark);
    accentRef.current?.setAttribute('d', sheetPath(W, accent));
    rimRef.current?.setAttribute('d', linePath(accent));
    lastDraw.current = [dir, t];
  }, []);

  const animate = useCallback(
    (dir) =>
      new Promise((resolve) => {
        const total = dir === 'cover' ? COVER : LIFT;
        const start = performance.now();
        const step = (now) => {
          const t = now - start;
          if (t >= total) {
            draw(dir, total);
            resolve();
            return;
          }
          draw(dir, t);
          rafId.current = requestAnimationFrame(step);
        };
        rafId.current = requestAnimationFrame(step);
      }),
    [draw]
  );

  const run = useCallback(
    async (href) => {
      await animate('cover');

      // page name slides in once the sheet fully covers the screen
      setTextPhase('in');
      const textStart = performance.now();

      const routed = new Promise((r) => {
        routeResolver.current = r;
      });
      router.push(href);
      await Promise.race([routed, sleep(MAX_WAIT)]);
      routeResolver.current = null;

      // keep the name on screen for a moment, then let it leave before the lift
      await sleep(Math.max(0, TEXT_MIN - (performance.now() - textStart)));
      setTextPhase('out');
      await sleep(TEXT_OUT);

      await animate('lift');

      setActive(false);
      setTextPhase('pre');
      busy.current = false;
    },
    [animate, router]
  );

  // Start the sequence once the curtain layer is mounted
  useEffect(() => {
    if (active && pending.current) {
      const href = pending.current;
      pending.current = null;
      run(href);
    }
  }, [active, run]);

  // Intercept clicks on internal links
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const a = e.target.closest?.('a[href]');
      if (!a) return;
      if (a.target && a.target !== '_self') return;
      if (a.hasAttribute('download')) return;

      let url;
      try {
        url = new URL(a.href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;       // external link
      if (url.pathname === window.location.pathname) return;   // same page / hash only

      e.preventDefault();
      if (busy.current) return;
      busy.current = true;

      fromPath.current = window.location.pathname;
      pending.current = url.pathname + url.search + url.hash;
      setLabel(nameFor(url.pathname));
      setActive(true);
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  // New route is rendered -> let the sequence continue
  useEffect(() => {
    if (routeResolver.current && pathname !== fromPath.current) routeResolver.current();
  }, [pathname]);

  // Keep the sheet correct if the window is resized while it is showing
  useEffect(() => {
    if (!active) return;
    const onResize = () => lastDraw.current && draw(...lastDraw.current);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [active, draw]);

  // Lock page scroll while the curtain is up
  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [active]);

  useEffect(() => () => cancelAnimationFrame(rafId.current), []);

  if (!active) return null;

  const letters = Array.from(label);
  const lift = textPhase === 'out';

  return (
    <div className="fixed inset-0 z-[100]" aria-hidden="true">
      <svg ref={svgRef} className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        {/* thin dark edge (the water-like rim) */}
        <path ref={accentRef} d="" style={{ fill: EDGE_COLOR }} />
        <path ref={rimRef} d="" fill="none" strokeWidth="2" strokeOpacity="0.9" style={{ stroke: 'rgb(var(--c-cyan))' }} />
        {/* blue sheet */}
        <path ref={darkRef} d="" style={{ fill: SHEET_COLOR }} />
      </svg>

      {/* page name: letters rise one by one, then leave upward */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <h2
          className="flex flex-wrap justify-center overflow-hidden px-8 py-6 text-center font-bold text-ink"
          style={{
            fontSize: 'clamp(2.5rem, 9vw, 6.5rem)',
            letterSpacing: '0.03em',
            lineHeight: 1.15,
            textShadow: 'var(--neon-glow)',
          }}
        >
          {letters.map((ch, i) => (
            <span
              key={i}
              className="inline-block"
              style={{
                whiteSpace: 'pre',
                opacity: textPhase === 'in' ? 1 : 0,
                transform:
                  textPhase === 'pre' ? 'translateY(110%)' : textPhase === 'in' ? 'translateY(0)' : 'translateY(-110%)',
                transition: lift
                  ? `transform ${TEXT_OUT}ms cubic-bezier(0.55, 0, 0.8, 0.3) ${i * 25}ms, opacity ${TEXT_OUT}ms ease ${i * 25}ms`
                  : `transform 800ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 55}ms, opacity 600ms ease ${i * 55}ms`,
              }}
            >
              {ch}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
}
