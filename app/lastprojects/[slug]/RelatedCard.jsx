'use client';

import React from 'react';
import Link from 'next/link';
import { ScrollImage } from '../../(components)/(realComponents)/ScrollImage';

/** Related-project card: the project image scrolls on hover (same behaviour as the portfolio cards). */
export default function RelatedCard({ href, title, label, description, image, fallback }) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-xl border border-brand-line/70 bg-brand-card hover:border-brand-cyan hover:shadow-glow transition-all"
    >
      {image && <ScrollImage src={image} fallback={fallback} alt={title} />}
      <div className="p-4 flex flex-col flex-1">
        <div className="text-xs text-brand-cyan font-semibold mb-1.5">{label}</div>
        <h3 className="font-semibold mb-2 group-hover:text-brand-cyan transition-colors line-clamp-1">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-300 line-clamp-3">{description}</p>
      </div>
    </Link>
  );
}
