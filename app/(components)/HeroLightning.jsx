'use client';
import React, { useEffect, useRef, useState } from 'react';

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
  const root = useRef(null);

  // Strict visibility: the effect exists ONLY while the hero is actually on screen.
  // When the user scrolls down to the next section it is unmounted completely
  // (ticker stopped, WebGL context + textures + buffers destroyed => RAM/GPU/CPU freed).
  // Scrolling back up mounts it again.
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = root.current;
    if (!el || !('IntersectionObserver' in window)) { setVisible(true); return; }
    // Entering: mount at once. Leaving: the animation pauses immediately (inside the canvas),
    // and the whole thing is torn down a moment later, so quick scrolling never thrashes WebGL.
    let timer = 0;
    const io = new IntersectionObserver(([e]) => {
      clearTimeout(timer);
      if (e.isIntersecting) setVisible(true);
      else timer = setTimeout(() => { setVisible(false); setReady(false); }, 500);
    }, { rootMargin: '0px', threshold: 0 });
    io.observe(el);
    return () => { clearTimeout(timer); io.disconnect(); };
  }, []);

  // Download/prepare the heavy module only the first time the hero becomes visible.
  useEffect(() => {
    if (!visible || Live) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let gl = false;
    try { const c = document.createElement('canvas'); gl = !!(c.getContext('webgl2') || c.getContext('webgl')); } catch {}
    if (!gl) return;
    const run = () => import('./LightningCanvas').then((m) => setLive(() => m.default)).catch(() => {});
    const id = 'requestIdleCallback' in window ? requestIdleCallback(run, { timeout: 1500 }) : setTimeout(run, 600);
    return () => ('cancelIdleCallback' in window ? cancelIdleCallback(id) : clearTimeout(id));
  }, [visible, Live]);

  return (
    <div
      ref={root}
      aria-hidden="true"
      className={`circuit-bolts ${ready ? 'circuit-bolts--live' : ''} ${className}`}
    >
      {Live && visible && <Live side={side} onReady={() => setReady(true)} />}
    </div>
  );
}
