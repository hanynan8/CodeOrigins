'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, Maximize2, X } from 'lucide-react';
import { useI18n } from '@/app/(components)/LocaleProvider';

/**
 * Browser-window mock-up that shows the project's full-page screenshot.
 * The screenshot scrolls inside the frame, so visitors can look through the whole page.
 * If the full-page shot is missing it falls back to the project's original image.
 */
export default function ProjectShot({ src, fallback, alt, host, visitUrl, staticImage = false }) {
  const { dictionary } = useI18n();
  const d = dictionary.projectDetail;
  const [useFallback, setUseFallback] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [zoomed, setZoomed] = useState(false); // enlarged view open?
  const imgRef = useRef(null);

  // The server-rendered <img> can finish loading before React attaches onLoad/onError,
  // so check its state once on mount (otherwise it would stay hidden forever).
  useEffect(() => {
    const el = imgRef.current;
    if (!el || !el.complete) return;
    if (el.naturalWidth > 0) setLoaded(true);
    else if (fallback && !useFallback) setUseFallback(true);
    else setLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e) => { if (e.key === 'Escape') setZoomed(false); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [zoomed]);

  const shown = useFallback && fallback ? fallback : src;

  return (
    <>
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

      {/* scrollable screenshot (the wrapper keeps the buttons pinned while the image scrolls) */}
      <div className="relative">
        {visitUrl && (
          <a
            href={visitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group absolute start-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-glow hover:from-brand-sky hover:to-brand-cyan transition-all"
          >
            {d.visit}
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        )}
        {/* enlarge (kept clear of the scrollbar on the right edge) */}
        <button
          type="button"
          onClick={() => setZoomed(true)}
          aria-label={d.enlarge}
          title={d.enlargeTitle}
          className="absolute end-5 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-glow hover:from-brand-sky hover:to-brand-cyan hover:scale-110 transition-all"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        <div className={`relative bg-brand-bg ${staticImage ? '' : 'max-h-[60vh] sm:max-h-[70vh] overflow-y-auto [scrollbar-width:thin]'}`}>
          {!loaded && <div className="pointer-events-none absolute inset-0 animate-pulse bg-brand-card2/40" aria-hidden="true" />}
          <img
            ref={imgRef}
            src={shown}
            alt={alt}
            onLoad={() => setLoaded(true)}
            onError={() => (fallback && !useFallback ? setUseFallback(true) : setLoaded(true))}
            className={`relative block w-full h-auto ${staticImage ? '' : 'min-h-[16rem] object-cover object-top'}`}
          />
        </div>
      </div>
      {!staticImage && (
        <p className="px-3 sm:px-4 py-2 text-center text-[11px] sm:text-xs text-gray-400 bg-brand-alt border-t border-brand-line/70">
          {d.scrollHint}
        </p>
      )}
    </div>

    {zoomed && (
      <div
        className="theme-dark fixed inset-0 z-[60] flex items-center justify-center bg-black/85 backdrop-blur-sm px-2 sm:px-6 py-4"
        onClick={() => setZoomed(false)}
        role="dialog"
        aria-modal="true"
        aria-label={alt}
      >
        <button
          type="button"
          onClick={() => setZoomed(false)}
          aria-label={d.close}
          className="absolute top-3 end-3 sm:top-5 sm:end-5 z-10 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan p-2 text-white shadow-glow hover:from-brand-sky hover:to-brand-cyan transition-all"
        >
          <X className="w-5 h-5" />
        </button>
        {/* the whole page, scrolling inside a large window */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="h-full max-h-[94vh] w-full max-w-6xl overflow-y-auto rounded-lg border border-brand-line/70 bg-brand-bg [scrollbar-width:thin]"
        >
          <img src={shown} alt={alt} className="block w-full h-auto" />
        </div>
      </div>
    )}
    </>
  );
}
