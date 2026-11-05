import React from 'react';

/**
 * Animated wave at the bottom of a hero section.
 * Light mode only — hidden in dark mode by CSS (`.hero-wave` in globals.css).
 * The last layer is white so it blends into the white section below.
 */
export default function HeroWave() {
  return (
    <div className="hero-wave absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none" aria-hidden="true">
      <svg
        className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[80px] md:h-[120px]"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path id="gentle-wave" d="m-160,44c30,0 58,-18 88,-18s 58,18 88,18 58,-18 88,-18 58,18 88,18 v44h-352z" />
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.4)" />
          </linearGradient>
        </defs>
        <g>
          <use href="#gentle-wave" x="48" y="0" fill="url(#gradient1)" />
          <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.4)" />
          <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.2)" />
          <use href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
  );
}
