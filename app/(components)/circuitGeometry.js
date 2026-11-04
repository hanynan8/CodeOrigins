// Pure geometry for the circuit art (design space 300 x 1024, no rendering deps).
// bundle = [points, lineCount, brightLineIndexes, endNode]
const SP = 5.5; // gap between parallel traces

export const LEFT = {
  bundles: [
    [[[-10,40],[50,40],[100,90],[100,130]], 5, [1, 3], true],
    [[[-10,150],[30,150],[120,240],[196,240]], 8, [1, 4, 7], true],
    [[[-10,330],[30,330],[110,410],[214,410]], 10, [2, 6, 9], true],
    [[[-10,560],[40,560],[110,630],[110,690],[170,750],[256,750]], 8, [3, 7], true],
    [[[-10,820],[30,820],[90,880],[190,880]], 7, [2, 5], true],
    [[[-10,960],[40,960],[110,1030]], 5, [1], false],
  ],
  singles: [[[-10,293],[166,293]], [[-10,325],[188,325]], [[-10,696],[136,696]], [[-10,764],[130,764]]],
  chips: [[134,178],[46,530],[58,852]],
};
export const RIGHT = {
  bundles: [
    [[[310,96],[282,96],[204,174],[150,174]], 8, [1, 5], true],
    [[[310,330],[272,330],[204,398],[204,468],[156,516],[100,516]], 9, [2, 6, 8], true],
    [[[310,640],[262,640],[184,718],[112,718]], 10, [2, 5, 9], true],
    [[[310,860],[272,860],[222,910],[222,968],[262,1008]], 6, [1, 4], true],
    [[[310,0],[262,0],[236,26],[236,70]], 4, [2], false],
  ],
  singles: [[[310,336],[190,336]], [[310,418],[120,418]], [[310,742],[150,742]], [[310,880],[110,880]]],
  chips: [[236,232],[236,540]],
};

// miter-offset a polyline by o (keeps 45°/90° bends crisp)
function offset(P, o) {
  const n = [];
  for (let i = 0; i < P.length - 1; i++) {
    const dx = P[i + 1][0] - P[i][0], dy = P[i + 1][1] - P[i][1], L = Math.hypot(dx, dy);
    n.push([-dy / L, dx / L]);
  }
  const out = [[P[0][0] + o * n[0][0], P[0][1] + o * n[0][1]]];
  for (let i = 1; i < P.length - 1; i++) {
    const a = n[i - 1], b = n[i], k = o / (1 + a[0] * b[0] + a[1] * b[1]);
    out.push([P[i][0] + k * (a[0] + b[0]), P[i][1] + k * (a[1] + b[1])]);
  }
  const l = P.length - 2;
  out.push([P[l + 1][0] + o * n[l][0], P[l + 1][1] + o * n[l][1]]);
  return out;
}

// ragged line ends, like the reference
function trim(pts, t) {
  const [x1, y1] = pts[pts.length - 2], [x2, y2] = pts[pts.length - 1];
  const L = Math.hypot(x2 - x1, y2 - y1);
  if (t <= 0 || L < t + 16) return pts;
  const r = (L - t) / L;
  return [...pts.slice(0, -1), [x1 + (x2 - x1) * r, y1 + (y2 - y1) * r]];
}

export function buildLines({ bundles, singles }) {
  const far = [], mid = [], hero = [], nodes = [], lines = [], groups = [];
  for (const [P, n, bright, node] of bundles) {
    const g = [];
    for (let k = 0; k < n; k++) {
      const pts = trim(offset(P, (k - (n - 1) / 2) * SP), (k * 9) % 54);
      const tier = bright.includes(k) ? 'hero' : k % 2 ? 'mid' : 'far';
      (tier === 'hero' ? hero : tier === 'mid' ? mid : far).push(pts);
      const ln = { pts, tier, nodeIdx: -1 };
      if (tier === 'hero' && node) { ln.nodeIdx = nodes.length; nodes.push(pts[pts.length - 1]); }
      g.push(lines.length); lines.push(ln);
    }
    groups.push(g);
  }
  for (const [a, b] of singles) {
    mid.push([a, b]); groups.push([lines.length]);
    lines.push({ pts: [a, b], tier: 'mid', nodeIdx: nodes.length }); nodes.push(b);
  }
  return { far, mid, hero, nodes, lines, groups };
}

export function lineLength(pts) {
  let L = 0; for (let i = 1; i < pts.length; i++) L += Math.hypot(pts[i][0] - pts[i-1][0], pts[i][1] - pts[i-1][1]);
  return L;
}

// point + direction angle at distance d along the polyline
export function pointAt(pts, d) {
  let rem = Math.max(0, d);
  for (let i = 1; i < pts.length; i++) {
    const [x1, y1] = pts[i - 1], [x2, y2] = pts[i], seg = Math.hypot(x2 - x1, y2 - y1);
    if (rem <= seg || i === pts.length - 1) {
      const t = seg ? Math.min(rem / seg, 1) : 0;
      return { x: x1 + (x2 - x1) * t, y: y1 + (y2 - y1) * t, a: Math.atan2(y2 - y1, x2 - x1) };
    }
    rem -= seg;
  }
}
