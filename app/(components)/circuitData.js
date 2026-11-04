// Single source of truth for the CodeLegacy "electric circuit" artwork.
// Modeled on the brand banner: bundles of parallel traces that run in from the
// screen edge, bend 45°, fan out, and end in glowing nodes. Left side only –
// the right side is the same drawing mirrored.
// ViewBox: 300 x 1024. The edge of the screen is x = 0.

export const VIEW_W = 300;
export const VIEW_H = 1024;

// y: start of the bundle · dir: +1 bends down / -1 bends up · n: traces
// gap: vertical spacing · x1: where the bend starts · h: size of the 45° run
// st: horizontal stagger per trace · len: end of the first trace
// hot: indexes of bright traces · nodes: indexes that end in a glowing dot
const BUNDLES = [
  { y: 70,  dir: 1,  n: 3, gap: 8, x1: 20, h: 50, st: 8,  len: 120, hot: [],  nodes: [2] },
  { y: 200, dir: 1,  n: 5, gap: 7, x1: 40, h: 80, st: 7,  len: 170, hot: [],  nodes: [4] },
  { y: 340, dir: -1, n: 4, gap: 8, x1: 10, h: 60, st: 10, len: 140, hot: [1], nodes: [1] },
  { y: 480, dir: 1,  n: 6, gap: 7, x1: 50, h: 70, st: 8,  len: 190, hot: [],  nodes: [5] },
  { y: 610, dir: -1, n: 6, gap: 7, x1: 30, h: 90, st: 9,  len: 180, hot: [2], nodes: [2, 5] },
  { y: 770, dir: -1, n: 5, gap: 8, x1: 20, h: 60, st: 10, len: 150, hot: [],  nodes: [0] },
  { y: 910, dir: 1,  n: 4, gap: 8, x1: 30, h: 70, st: 8,  len: 130, hot: [3], nodes: [3] },
];

// Small square "pixel" clusters (3x3 chips) and thin bars, like the banner.
const PIXELS = [
  { x: 118, y: 150 }, { x: 70, y: 530 }, { x: 96, y: 705 }, { x: 74, y: 975 },
];
const BARS = [{ x: 122, y: 214, w: 62 }];

export function buildCircuit() {
  const lines = [];
  const nodes = [];

  BUNDLES.forEach((b, bi) => {
    for (let i = 0; i < b.n; i++) {
      const y0 = b.y + i * b.gap;
      const xa = b.x1 + i * b.st;          // bend starts
      const xb = xa + b.h;                  // bend ends
      const y1 = y0 + b.dir * b.h;
      const end = b.len + i * 10;
      const d = `M0 ${y0} H${xa} L${xb} ${y1} H${end}`;
      const hot = b.hot.includes(i);
      lines.push({ id: `b${bi}l${i}`, d, hot });

      if (b.nodes.includes(i)) {
        nodes.push({ x: end, y: y1, r: hot ? 3.6 : 3, hot });
        // faint ghost tail continuing past the node
        lines.push({ id: `b${bi}t${i}`, d: `M${end} ${y1} H${end + 70}`, ghost: true });
      }
    }
  });

  return { lines, nodes, pixels: PIXELS, bars: BARS };
}
