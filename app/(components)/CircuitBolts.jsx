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
 *   <CircuitBolts speed={0.5} />      slower pulses (1 = default)
 *   <CircuitBolts scale={0.6} />      smaller artwork (1 = default)
 */
export default function CircuitBolts({ side = 'both', intensity = 'full', speed = 1, scale = 1, className = '' }) {
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
      {/* Static SVG edge art removed from hero ("full") – only the live physical canvas remains there.
          Soft bands (CTA / footer) keep the light SVG. */}
      {intensity !== 'full' && (side === 'both' || side === 'left') && <span className="circuit-bolts__side circuit-bolts__side--left" />}
      {intensity !== 'full' && (side === 'both' || side === 'right') && <span className="circuit-bolts__side circuit-bolts__side--right" />}
      {Live && <Live side={side} speed={speed} scale={scale} onReady={() => setReady(true)} />}
    </div>
  );
}
