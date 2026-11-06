'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useI18n } from '@/app/(components)/LocaleProvider';
import { fillTemplate } from '@/lib/whatsapp';

/** Screenshot grid with a simple lightbox (Esc / arrow keys), for projects that have photos instead of a live link. */
export default function ProjectGallery({ images, title }) {
  const { dictionary } = useI18n();
  const d = dictionary.projectDetail;
  const [open, setOpen] = useState(null); // index or null

  const prev = useCallback(() => setOpen((i) => (i === null ? i : (i - 1 + images.length) % images.length)), [images.length]);
  const next = useCallback(() => setOpen((i) => (i === null ? i : (i + 1) % images.length)), [images.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open, prev, next]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpen(i)}
            className="group overflow-hidden rounded-xl border border-brand-line/70 bg-brand-card hover:border-brand-cyan hover:shadow-glow transition-all"
            aria-label={fillTemplate(d.openPhoto, { n: i + 1, total: images.length })}
          >
            <img
              src={src}
              alt={fillTemplate(d.photoAlt, { title, n: i + 1 })}
              loading="lazy"
              className="block w-full h-auto transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="theme-dark fixed inset-0 z-[60] flex items-center justify-center bg-black/85 backdrop-blur-sm px-2 sm:px-6"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <button type="button" onClick={() => setOpen(null)} aria-label={d.close} className="absolute top-3 end-3 sm:top-5 sm:end-5 rounded-full bg-brand-card/80 p-2 text-ink hover:text-brand-cyan">
            <X className="w-5 h-5" />
          </button>
          {images.length > 1 && (
            <>
              <button type="button" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label={d.prevPhoto} className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 rounded-full bg-brand-card/80 p-2 sm:p-3 text-ink hover:text-brand-cyan">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} aria-label={d.nextPhoto} className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 rounded-full bg-brand-card/80 p-2 sm:p-3 text-ink hover:text-brand-cyan">
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
          <img
            src={images[open]}
            alt={fillTemplate(d.photoAlt, { title, n: open + 1 })}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] max-w-full rounded-lg object-contain"
          />
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
            {open + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
