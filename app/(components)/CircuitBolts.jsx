'use client';
import React, { useEffect, useState } from 'react';

/**
 * CodeLegacy electric-circuit artwork.
 *  - Everywhere: ultra-light SVG (public/brand/circuit-*.svg, ~7KB).
 *  - Hero ("full" intensity) on capable desktops: upgraded after idle to a
 *    PixiJS/WebGL scene with real bloom, depth, parallax and travelling pulses
 *    (loaded lazily, so it never blocks first paint). SVG stays as the fallback.
 *
 *   <CircuitBolts />                  both edges
 *   <CircuitBolts side="left" />      one edge
 *   <CircuitBolts intensity="soft" /> dimmer, SVG only (CTA bands / footer)
 */
export default function CircuitBolts({ side = 'both', intensity = 'full', className = '' }) {
  const [Live, setLive] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (intensity !== 'full') return;
    let gl = false;
    try { const c = document.createElement('canvas'); gl = !!(c.getContext('webgl2') || c.getContext('webgl')); } catch {}
    if (!gl || !window.matchMedia('(min-width: 768px)').matches || (navigator.hardwareConcurrency || 4) < 4) return;
    const run = () => import('./CircuitCanvas').then((m) => setLive(() => m.default)).catch(() => {});
    const id = 'requestIdleCallback' in window ? requestIdleCallback(run, { timeout: 2500 }) : setTimeout(run, 1200);
    return () => ('cancelIdleCallback' in window ? cancelIdleCallback(id) : clearTimeout(id));
  }, [intensity]);

  return (
    <div
      aria-hidden="true"
      className={`circuit-bolts ${intensity === 'soft' ? 'circuit-bolts--soft' : ''} ${ready ? 'circuit-bolts--live' : ''} ${className}`}
    >
      {(side === 'both' || side === 'left') && <span className="circuit-bolts__side circuit-bolts__side--left" />}
      {(side === 'both' || side === 'right') && <span className="circuit-bolts__side circuit-bolts__side--right" />}
      {Live && <Live side={side} onReady={() => setReady(true)} />}
    </div>
  );
}
