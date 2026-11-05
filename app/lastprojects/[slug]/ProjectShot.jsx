'use client';

import React, { useState } from 'react';

/**
 * Browser-window mock-up that shows the project's full-page screenshot.
 * The screenshot scrolls inside the frame, so visitors can look through the whole page.
 * If the full-page shot is missing it falls back to the project's original image.
 */
export default function ProjectShot({ src, fallback, alt, host }) {
  const [useFallback, setUseFallback] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-brand-line/70 bg-brand-card shadow-glow">
      {/* window bar */}
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 bg-brand-alt border-b border-brand-line/70">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        </span>
        {host && (
          <span className="mx-auto max-w-[70%] truncate rounded-full bg-brand-bg/80 px-3 py-0.5 text-[11px] sm:text-xs text-gray-300">
            {host}
          </span>
        )}
      </div>

      {/* scrollable screenshot */}
      <div className="relative max-h-[60vh] sm:max-h-[70vh] overflow-y-auto bg-brand-bg [scrollbar-width:thin]">
        {!loaded && <div className="absolute inset-0 animate-pulse bg-brand-card2/40" aria-hidden="true" />}
        <img
          src={useFallback && fallback ? fallback : src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => (fallback && !useFallback ? setUseFallback(true) : setLoaded(true))}
          className={`block w-full h-auto min-h-[16rem] object-cover object-top transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
      <p className="px-3 sm:px-4 py-2 text-center text-[11px] sm:text-xs text-gray-400 bg-brand-alt border-t border-brand-line/70">
        Scroll inside the window to see the whole page
      </p>
    </div>
  );
}
