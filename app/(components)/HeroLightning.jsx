'use client';
import React, { useEffect, useState } from 'react';

/**
 * Hero lightning.
 *
 * Replaces the old pulses that slid along the circuit traces (a rigid white dash at a
 * constant speed) with physically-based lightning: fractal branching channels grown
 * with the dielectric breakdown model, played back as stepped leader -> return stroke
 * -> afterglow, with real light spill onto the surroundings (see LightningCanvas.jsx).
 *
 *  - Needs WebGL and normal motion preferences; loaded lazily after idle so it never
 *    blocks first paint.
 *  - Until it is ready (or when it can't run) the static circuit art is shown, with no
 *    animation at all.
 *
 *   <HeroLightning />                both edges
 *   <HeroLightning side="left" />    one edge
 */
export default function HeroLightning({ side = 'both', className = '' }) {
  const [Live, setLive] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let gl = false;
    try { const c = document.createElement('canvas'); gl = !!(c.getContext('webgl2') || c.getContext('webgl')); } catch {}
    if (!gl) return;
    const run = () => import('./LightningCanvas').then((m) => setLive(() => m.default)).catch(() => {});
    const id = 'requestIdleCallback' in window ? requestIdleCallback(run, { timeout: 1500 }) : setTimeout(run, 600);
    return () => ('cancelIdleCallback' in window ? cancelIdleCallback(id) : clearTimeout(id));
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`circuit-bolts ${ready ? 'circuit-bolts--live' : ''} ${className}`}
    >
      {Live && <Live side={side} onReady={() => setReady(true)} />}
    </div>
  );
}
