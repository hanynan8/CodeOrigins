// Pure "light + afterglow" model (no rendering deps).
// Each trace is cut into tiny segments, each holding a heat value 0..1.
// A discharge sets the segments it passes to full brightness; heat then cools
// exponentially, so the trace stays lit behind the pulse and fades out.
import { lineLength, pointAt } from './circuitGeometry';

export const GAIN = { hero: 1, mid: 0.7, far: 0.45 }; // far traces light up dimmer (depth)

export function makeLine(src, segPx) {
  const pts = src.pts, L = lineLength(pts), n = Math.max(2, Math.ceil(L / segPx)), segL = L / n;
  const seg = new Float32Array(n * 4);
  for (let i = 0; i < n; i++) {
    const a = pointAt(pts, i * segL), b = pointAt(pts, (i + 1) * segL);
    seg.set([a.x, a.y, b.x, b.y], i * 4);
  }
  return {
    pts, tier: src.tier, nodeIdx: src.nodeIdx, L, n, segL, seg, gain: GAIN[src.tier],
    heat: new Float32Array(n), bk: new Uint8Array(n), hit: false,
    st: { armed: false, active: false, wait: 0, d: 0, v: 0, dir: 1 },
  };
}

export function launch(ln, { delay, v, dir }) { Object.assign(ln.st, { armed: true, active: false, wait: delay, v, dir }); }

// advance one line; returns number of lit segments. decay = exp(-dt / afterglowSeconds)
export function step(ln, dt, decay, B) {
  const st = ln.st; ln.hit = false;
  if (st.armed) { st.wait -= dt; if (st.wait <= 0) { st.armed = false; st.active = true; st.d = st.dir > 0 ? 0 : ln.L; } }
  if (st.active) {
    const prev = st.d; st.d += st.dir * st.v * dt;
    const lo = Math.min(prev, st.d), hi = Math.max(prev, st.d);
    const a = Math.max(0, Math.floor(lo / ln.segL)), b = Math.min(ln.n - 1, Math.floor(hi / ln.segL));
    for (let i = a; i <= b; i++) ln.heat[i] = 1;            // light switches on where the pulse is
    if ((st.dir > 0 && st.d >= ln.L) || (st.dir < 0 && st.d <= 0)) { st.active = false; ln.hit = st.dir > 0; }
  }
  let lit = 0;
  for (let i = 0; i < ln.n; i++) {
    let h = ln.heat[i];
    if (h > 0) { h *= decay; if (h < 0.03) h = 0; ln.heat[i] = h; }  // ...and it cools down behind it
    const e = Math.min(1, h * ln.gain), b = e > 0 ? Math.max(1, Math.ceil(e * B)) : 0;
    ln.bk[i] = b; if (b) lit++;
  }
  return lit;
}
