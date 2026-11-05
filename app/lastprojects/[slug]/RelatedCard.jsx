'use client';

import React from 'react';
import Link from 'next/link';
import { ScrollImage, FRAME_HEIGHT } from '../../(components)/(realComponents)/ScrollImage';

/** Related-project card: the image scrolls on hover (same as the portfolio cards), or stays a plain static image when `staticImage` is set. */
export default function RelatedCard({ href, title, label, description, image, fallback, staticImage = false }) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-xl border border-brand-line/70 bg-brand-card hover:border-brand-cyan hover:shadow-glow transition-all"
    >
      {image && (staticImage ? (
        <div className={`relative overflow-hidden bg-brand-bg ${FRAME_HEIGHT}`}>
          <img src={image} alt={title} loading="lazy" className="block h-full w-full object-cover object-top" />
        </div>
      ) : (
        <ScrollImage src={image} fallback={fallback} alt={title} />
      ))}
      <div className="p-4 flex flex-col flex-1">
        <div className="text-xs text-brand-cyan font-semibold mb-1.5">{label}</div>
        <h3 className="font-semibold mb-2 group-hover:text-brand-cyan transition-colors line-clamp-1">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-300 line-clamp-3">{description}</p>
      </div>
    </Link>
  );
}
