// Writes public/brand/circuit-bolts.svg (standalone artwork, left edge) from the
// same data the <CircuitBolts/> component uses.  Run:  node scripts/build-circuit-svg.mjs
import { writeFileSync } from 'node:fs';
import { buildCircuit, VIEW_W, VIEW_H } from '../app/(components)/circuitData.js';

const { lines, nodes, pixels, bars } = buildCircuit();
const p = (l, a) => `<path d="${l.d}" ${a}/>`;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VIEW_W} ${VIEW_H}" width="${VIEW_W}" height="${VIEW_H}">
<defs>
<filter id="glow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
<linearGradient id="fade" x1="0" x2="1"><stop offset="0" stop-color="#fff"/><stop offset=".65" stop-color="#fff" stop-opacity=".9"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
<mask id="m" maskUnits="userSpaceOnUse" x="0" y="0" width="${VIEW_W + 80}" height="${VIEW_H}"><rect width="${VIEW_W + 80}" height="${VIEW_H}" fill="url(#fade)"/></mask>
</defs>
<g mask="url(#m)" fill="none" stroke-linecap="round" stroke-linejoin="round">
<g stroke="#1e5bff" stroke-width="1.3" opacity=".6">${lines.filter(l => !l.hot && !l.ghost).map(l => p(l, '')).join('')}</g>
<g stroke="#1e5bff" stroke-width="1" stroke-dasharray="2 5" opacity=".35">${lines.filter(l => l.ghost).map(l => p(l, '')).join('')}</g>
<g filter="url(#glow)">${lines.filter(l => l.hot).map(l => p(l, 'stroke="#2f8bff" stroke-width="2.2"') + p(l, 'stroke="#aeeaff" stroke-width="1.4"')).join('')}
${nodes.map(n => `<circle cx="${n.x}" cy="${n.y}" r="${n.r}" fill="${n.hot ? '#30d8f8' : '#2f8bff'}" stroke="none"/>`).join('')}</g>
<g fill="#1e5bff" stroke="none" opacity=".65">${pixels.flatMap(q => [0,1,2].flatMap(r => [0,1,2].map(c => `<rect x="${q.x + c * 6}" y="${q.y + r * 6}" width="3.4" height="3.4" rx=".6"/>`))).join('')}${bars.map(b => `<rect x="${b.x}" y="${b.y}" width="${b.w}" height="3.4" rx=".6"/>`).join('')}</g>
</g>
</svg>
`;
writeFileSync(new URL('../public/brand/circuit-bolts.svg', import.meta.url), svg);
console.log('wrote public/brand/circuit-bolts.svg', svg.length, 'bytes');
