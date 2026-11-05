'use client';

import React, { useState, useEffect, useRef } from 'react';

/* ───────────────────────────────────────────────
   Scroll-on-hover image
   Fixed-height frame; the screenshot keeps its natural proportions and, on hover,
   scrolls inside the frame until its full length has been shown (and back on leave).
─────────────────────────────────────────────── */
export const FRAME_HEIGHT = 'h-64 sm:h-72 lg:h-96'; // taller frame (was h-52 sm:h-60 lg:h-80)
const SCROLL_PX_PER_SEC = 220; // cruising speed: the final constant speed (px / second)
const RAMP_SECONDS = 2.5;      // how long the speed takes to climb from ~0 to the cruising speed

// Speed follows a smooth S-curve (smoothstep): it starts almost still, builds up gradually
// over RAMP_SECONDS, then stays constant at SCROLL_PX_PER_SEC until the end of the screenshot.
// Distance travelled after t seconds = integral of that speed:
//   ramp  (u = t / RAMP < 1): V * RAMP * (u^3 - u^4 / 2)
//   after the ramp:           V * RAMP / 2 + V * (t - RAMP)
const travelled = (t) => {
  if (t >= RAMP_SECONDS) return (SCROLL_PX_PER_SEC * RAMP_SECONDS) / 2 + SCROLL_PX_PER_SEC * (t - RAMP_SECONDS);
  const u = t / RAMP_SECONDS;
  return SCROLL_PX_PER_SEC * RAMP_SECONDS * (u ** 3 - (u ** 4) / 2);
};

export const ScrollImage = ({ src, fallback, alt, onClick, className = '', children }) => {
  const frame = useRef(null);
  const img = useRef(null);
  const shadow = useRef(null);
  const raf = useRef(0);
  const hovering = useRef(false);
  const [useFallback, setUseFallback] = useState(false);

  // soft shadow along the bottom edge: visible while there is still more image below
  const setShadow = (value) => {
    if (shadow.current) shadow.current.style.opacity = value;
  };

  const start = () => {
    hovering.current = true;
    const el = img.current;
    const fr = frame.current;
    if (!el || !fr) return;
    const distance = el.offsetHeight - fr.clientHeight;
    if (distance <= 8) return; // the whole image already fits in the frame
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    cancelAnimationFrame(raf.current);
    // continue from where the image currently is (it may still be gliding back)
    const from = Math.min(distance, Math.max(0, -new DOMMatrix(getComputedStyle(el).transform).m42));
    el.style.transition = 'none';
    el.style.transform = `scaleX(1.05) translateY(-${from}px)`;
    setShadow(1);

    const t0 = performance.now();
    const tick = (now) => {
      const y = Math.min(distance, from + travelled((now - t0) / 1000));
      el.style.transform = `scaleX(1.05) translateY(-${y}px)`;
      if (y < distance) raf.current = requestAnimationFrame(tick);
      else setShadow(0); // reached the end: nothing more below
    };
    raf.current = requestAnimationFrame(tick);
  };

  const stop = () => {
    hovering.current = false;
    cancelAnimationFrame(raf.current);
    setShadow(0);
    const el = img.current;
    if (!el) return;
    el.style.transition = 'transform 0.6s ease-out';
    el.style.transform = 'scaleX(1.05) translateY(0px)';
  };

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  return (
    <div
      ref={frame}
      onClick={onClick}
      onMouseEnter={start}
      onMouseLeave={stop}
      className={`relative overflow-hidden ${FRAME_HEIGHT} bg-brand-bg ${className}`}
    >
      <img
        ref={img}
        src={useFallback && fallback ? fallback : src}
        alt={alt}
        loading="lazy"
        // if the image finishes loading while the mouse is already over it, start scrolling then
        onLoad={() => hovering.current && start()}
        // the full-page shot is missing: show the original image instead
        onError={() => fallback && !useFallback && setUseFallback(true)}
        className="block w-full h-auto min-h-full object-cover object-top"
        style={{
          transform: 'scaleX(1.05)',
          transformOrigin: 'top',
          clipPath: 'inset(0 2.5% 0 2.5%)',
        }}
      />
      <div
        ref={shadow}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-black/55 to-transparent opacity-0 transition-opacity duration-300"
      />
      {children}
    </div>
  );
};

export default ScrollImage;
