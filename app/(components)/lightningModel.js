// Physically-motivated model of a cloud-to-ground lightning strike (no rendering deps).
//
//  1. GEOMETRY — Dielectric Breakdown Model (Niemeyer, Pietronero & Wiesmann, 1984).
//     We solve Laplace's equation for the electric potential around the growing
//     discharge (the discharge tree is an equipotential at 1, the ground is 0) and
//     extend the tree into a neighbouring site with probability ∝ φ^η. This is what
//     gives real lightning its fractal, downward-seeking, branching shape — nothing
//     here is hand drawn, and every strike is different.
//
//  2. TIMELINE — the real sequence of a strike:
//       stepped leader   faint channel advancing in bursts; every tip competes
//       attachment       leader meets the ground
//       return stroke    very bright wave racing back UP the channel. Its brightness
//                        follows the current: channel carrying the charge of the
//                        whole tree (near the ground) is brightest, twigs are dim
//       dart leader +    optional re-strikes down/up the same hot channel (flicker)
//       restrikes
//       afterglow        the plasma cools: fast core decay + slow tail, so the place
//                        the light passed through stays lit for a while, then fades
//
//  3. heat(t) per channel node in 0..1 (0 = dark, 1 = white-hot).

const DX = [1, -1, 0, 0, 1, -1, 1, -1];
const DY = [0, 0, 1, -1, 1, 1, -1, -1];
const lerp = (a, b, t) => a + (b - a) * t;
const gauss = (rnd) => {
  let u = 0;
  while (u === 0) u = rnd();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * rnd());
};

// ───────────────────────────── 1. geometry (DBM) ─────────────────────────────
// Grid is `cols x rows`; row 0 is the cloud side, the row below `rows-1` is ground (0 V).
// Side walls and the top are insulating (zero normal field).
export function createGrowth({ cols, rows, rootX, eta = 3, rnd = Math.random }) {
  const n = cols * rows;
  const phi = new Float32Array(n);
  for (let y = 0; y < rows; y++) phi.fill(1 - (y + 1) / (rows + 1), y * cols, (y + 1) * cols);
  const inCl = new Uint8Array(n);
  const slot = new Int32Array(n).fill(-1);
  const isCand = new Uint8Array(n);
  const cand = [];
  const wts = [];
  const G = { cols, rows, order: [], parent: [], done: false, ground: -1, run };
  const maxSteps = Math.floor(n * 0.4);

  function relax(sweeps) {
    const w = 1.7; // successive over-relaxation
    for (let s = 0; s < sweeps; s++) {
      for (let y = 0; y < rows; y++) {
        const row = y * cols;
        for (let x = 0; x < cols; x++) {
          const i = row + x;
          if (inCl[i]) continue;
          const up = y > 0 ? phi[i - cols] : phi[i];
          const dn = y < rows - 1 ? phi[i + cols] : 0; // ground
          const lf = x > 0 ? phi[i - 1] : phi[i];
          const rt = x < cols - 1 ? phi[i + 1] : phi[i];
          phi[i] += w * ((up + dn + lf + rt) * 0.25 - phi[i]);
        }
      }
    }
  }

  function add(c, par) {
    inCl[c] = 1;
    phi[c] = 1;
    slot[c] = G.order.length;
    G.order.push(c);
    G.parent.push(par);
    if (isCand[c]) {
      isCand[c] = 0;
      const i = cand.indexOf(c);
      cand[i] = cand[cand.length - 1];
      cand.pop();
    }
    const x = c % cols, y = (c / cols) | 0;
    for (let d = 0; d < 8; d++) {
      const nx = x + DX[d], ny = y + DY[d];
      if (nx < 0 || ny < 0 || nx >= cols || ny >= rows) continue;
      const j = ny * cols + nx;
      if (!inCl[j] && !isCand[j]) { isCand[j] = 1; cand.push(j); }
    }
    if (y >= rows - 1) { G.done = true; G.ground = G.order.length - 1; }
  }

  function stepOnce() {
    // growth probability ∝ (normalised φ)^η. Every site next to the discharge sits close to
    // the channel potential, so φ is rescaled between the weakest and strongest candidate:
    // the tips that feel the strongest field win, which keeps the tree a sparse bolt
    // instead of a bush.
    // The driving quantity is the potential DIFFERENCE between a site and the channel
    // (channel = 1, so 1 - φ): protruding tips see the biggest difference, i.e. the
    // strongest field, and are the ones that grow.
    let mn = Infinity, mx = -Infinity;
    for (let i = 0; i < cand.length; i++) { const p = 1 - phi[cand[i]]; if (p < mn) mn = p; if (p > mx) mx = p; }
    const span = mx - mn + 1e-9;
    let sum = 0;
    for (let i = 0; i < cand.length; i++) {
      const w = Math.pow((1 - phi[cand[i]] - mn) / span + 0.03, eta);
      wts[i] = w; sum += w;
    }
    let r = rnd() * sum, k = 0;
    while (k < cand.length - 1 && (r -= wts[k]) > 0) k++;
    const c = cand[k];
    // attach to the newest orthogonal neighbour already in the discharge (else newest diagonal)
    const x = c % cols, y = (c / cols) | 0;
    let par = -1, best = -1;
    for (let d = 0; d < 8; d++) {
      const nx = x + DX[d], ny = y + DY[d];
      if (nx < 0 || ny < 0 || nx >= cols || ny >= rows) continue;
      const j = ny * cols + nx;
      if (!inCl[j]) continue;
      const score = slot[j] + (d < 4 ? 1e6 : 0);
      if (score > best) { best = score; par = slot[j]; }
    }
    add(c, par);
    relax(3);
  }

  function run(steps) {
    for (let i = 0; i < steps && !G.done; i++) {
      if (G.order.length >= maxSteps) { G.done = true; break; }
      stepOnce();
    }
    return G.done;
  }

  add(Math.max(0, Math.min(cols - 1, Math.round(rootX))), -1);
  relax(40);
  return G;
}

// ─────────────────────── 2. strike (tree + timeline) ────────────────────────
// Maps a finished growth into pixel space and attaches the full time-line.
export function buildStrike(G, { x0, y0, cs, rnd = Math.random }) {
  const { order, parent, cols, rows } = G;
  const N0 = order.length;

  // subtree sizes (parents always have smaller indices than their children)
  const sub0 = new Int32Array(N0).fill(1);
  for (let k = N0 - 1; k > 0; k--) sub0[parent[k]] += sub0[k];

  // main channel: root -> ground contact (or the lowest cell if growth was cut short)
  let gk = G.ground;
  if (gk < 0) {
    let by = -1;
    for (let k = 0; k < N0; k++) { const y = (order[k] / cols) | 0; if (y > by) { by = y; gk = k; } }
  }
  const main0 = new Uint8Array(N0);
  for (let k = gk; k >= 0; k = parent[k]) main0[k] = 1;

  // prune tiny twigs
  const map = new Int32Array(N0).fill(-1);
  let N = 0;
  for (let k = 0; k < N0; k++) if (main0[k] || sub0[k] >= 3) map[k] = N++;

  const par = new Int32Array(N), px = new Float32Array(N), py = new Float32Array(N), isMain = new Uint8Array(N);
  for (let k = 0; k < N0; k++) {
    const i = map[k];
    if (i < 0) continue;
    par[i] = k === 0 ? -1 : map[parent[k]];
    const c = order[k], cx = c % cols, cy = (c / cols) | 0;
    px[i] = x0 + (cx + 0.5 + (rnd() - 0.5) * 0.64) * cs;
    py[i] = y0 + (cy + 0.5 + (rnd() - 0.5) * 0.64) * cs;
    isMain[i] = main0[k];
  }
  const gi = map[gk];
  py[0] = y0;
  if (G.ground >= 0) py[gi] = y0 + rows * cs; // the strike point sits on the ground line

  // current carried by each channel segment (drives brightness + thickness)
  const subK = new Int32Array(N).fill(1);
  for (let i = N - 1; i > 0; i--) subK[par[i]] += subK[i];
  const mc = new Int32Array(N).fill(-1);
  for (let i = 1; i < N; i++) if (isMain[i]) mc[par[i]] = i;
  const In = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    const I = isMain[i] ? N - (mc[i] >= 0 ? subK[mc[i]] : 0) : subK[i];
    In[i] = Math.min(1, I / N);
    if (isMain[i]) In[i] = Math.max(In[i], 0.28); // the main channel is always clearly visible
  }
  const wcls = new Uint8Array(N); // thickness class 0..2
  for (let i = 0; i < N; i++) wcls[i] = isMain[i] ? (In[i] >= 0.45 ? 2 : 1) : In[i] >= 0.12 ? 1 : 0;

  // distance to the ground along the channel (return stroke travel path)
  const len = new Float32Array(N), dG = new Float32Array(N);
  for (let i = 1; i < N; i++) len[i] = Math.hypot(px[i] - px[par[i]], py[i] - py[par[i]]);
  for (let i = gi; par[i] >= 0; i = par[i]) dG[par[i]] = dG[i] + len[i];
  for (let i = 1; i < N; i++) if (!isMain[i]) dG[i] = dG[par[i]] + len[i];
  const Lmain = dG[0] || 1;

  // jagged segments: every edge gets a mid-point kink
  const nSeg = (N - 1) * 2;
  const seg = new Float32Array(nSeg * 4), segNode = new Int32Array(nSeg), segHalf = new Uint8Array(nSeg);
  for (let i = 1, s = 0; i < N; i++) {
    const p = par[i];
    const dx = px[i] - px[p], dy = py[i] - py[p], L = Math.hypot(dx, dy) || 1;
    const off = gauss(rnd) * 0.16 * L;
    const mx = (px[p] + px[i]) / 2 - (dy / L) * off, my = (py[p] + py[i]) / 2 + (dx / L) * off;
    seg.set([px[p], py[p], mx, my], s * 4); segNode[s] = i; segHalf[s] = 0; s++;
    seg.set([mx, my, px[i], py[i]], s * 4); segNode[s] = i; segHalf[s] = 1; s++;
  }

  // ── time-line ──
  // stepped leader: growth order = real propagation order, revealed in bursts
  const tl = new Float32Array(N);
  const T_L = lerp(0.6, 0.95, rnd());
  const perStep = Math.max(1, N / (T_L / 0.03));
  let t = 0, k = 1;
  while (k < N) {
    t += 0.03 * lerp(0.6, 1.5, rnd());
    const nb = Math.max(1, Math.round(perStep * lerp(0.5, 1.6, rnd())));
    for (let j = 0; j < nb && k < N; j++) tl[k++] = t;
  }
  const tA = t + 0.035; // attachment
  const vRS = Lmain / lerp(0.09, 0.15, rnd()); // return-stroke speed (px/s)

  const strokes = [];
  const darts = [];
  const makeStroke = (t0, scale, mainOnly) => {
    const T = new Float32Array(N).fill(1e9), P = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      if (mainOnly && !isMain[i] && In[i] < 0.2) continue;
      T[i] = t0 + dG[i] / vRS;
      P[i] = Math.min(1, (0.35 + 0.65 * Math.sqrt(In[i])) * scale * (mainOnly && !isMain[i] ? 0.7 : 1));
    }
    strokes.push({ T, P, t0, scale });
  };
  makeStroke(tA, 1, false);
  let ts = tA;
  const r = rnd(), extra = r < 0.3 ? 0 : r < 0.72 ? 1 : 2;
  for (let e = 0; e < extra; e++) {
    ts += lerp(0.1, 0.22, rnd());
    const D = new Float32Array(N).fill(1e9);
    for (let i = 0; i < N; i++) if (isMain[i]) D[i] = ts - 0.05 + ((Lmain - dG[i]) / Lmain) * 0.05;
    darts.push(D);
    makeStroke(ts, lerp(0.55, 0.85, rnd()), true);
  }

  // light sources used for local illumination (sub-sampled channel nodes)
  let lights = [];
  let mi = 0, si = 0;
  for (let i = 0; i < N; i++) {
    if (isMain[i]) { if (mi++ % 2 === 0) lights.push(i); } else if (si++ % 3 === 0) lights.push(i);
  }
  if (lights.length > 170) { const st = lights.length / 170; lights = Array.from({ length: 170 }, (_, j) => lights[Math.floor(j * st)]); }
  const lw = lights.map((i) => 0.4 + 0.9 * In[i]);

  return {
    N, par, px, py, isMain, In, wcls,
    nSeg, seg, segNode, segHalf,
    tl, strokes, darts, lights, lw,
    ground: { x: px[gi], y: py[gi] }, root: { x: px[0], y: py[0] },
    mainCount: isMain.reduce((a, b) => a + b, 0),
    duration: ts + 2.2,
  };
}

// ─────────────────────── 3. luminosity over time ────────────────────────────
// Fills `heat[k]` (0..1) for every channel node at strike-time t. Returns the
// channel-wide energy (0..1), used to light the surroundings.
export function evaluate(K, t, heat) {
  const { N, tl, strokes, darts, isMain } = K;
  let e = 0;
  for (let k = 0; k < N; k++) {
    let h = 0;
    const dl = t - tl[k];
    // leader: short bright tip flash at every step, dim channel behind it
    if (dl >= 0) h = 0.72 * Math.exp(-dl / 0.05) + 0.2 * Math.exp(-dl / 0.35);
    for (let s = 0; s < strokes.length; s++) {
      const d = t - strokes[s].T[k];
      if (d < 0) continue;
      // fast rise, then plasma cooling: fast core decay + slow tail (the lingering glow)
      const v = strokes[s].P[k] * (1 - Math.exp(-d / 0.007)) * (0.6 * Math.exp(-d / 0.11) + 0.4 * Math.exp(-d / 0.75));
      if (v > h) h = v;
    }
    for (let s = 0; s < darts.length; s++) {
      const d = t - darts[s][k];
      if (d < 0) continue;
      const v = 0.5 * Math.exp(-d / 0.05);
      if (v > h) h = v;
    }
    heat[k] = h < 0.02 ? 0 : h;
    if (isMain[k]) e += heat[k];
  }
  return e / K.mainCount;
}

// brightness of the flash at the strike point
export function groundFlash(K, t) {
  let g = 0;
  for (const s of K.strokes) {
    const d = t - s.t0;
    if (d >= 0) g = Math.max(g, s.scale * Math.exp(-d / 0.22));
  }
  return g;
}
