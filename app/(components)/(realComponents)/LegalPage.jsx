// app/(components)/(realComponents)/LegalPage.jsx
// Shared layout for the legal pages (Privacy Policy / Terms & Conditions)

import React from 'react';
import Link from 'next/link';
import { localePath } from '@/lib/i18n';

const LegalPage = ({ lang, labels, title, intro, updated, sections }) => (
  <main className="bg-brand-bg text-ink min-h-[100svh] w-full overflow-x-hidden [overflow-wrap:anywhere] pt-24 sm:pt-32 pb-24 sm:pb-20">
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl min-[380px]:text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4">
          <span className="text-brand-cyan">{title}</span>
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm">{labels.lastUpdated.replace('{date}', updated)}</p>
      </div>

      {/* Intro */}
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">{intro}</p>

      {/* Sections */}
      <div className="space-y-5 sm:space-y-6">
        {sections.map((section, i) => (
          <section
            key={section.heading}
            className="bg-brand-card rounded-xl sm:rounded-2xl border border-brand-line/70 p-4 sm:p-6 min-w-0"
          >
            <h2 className="text-base min-[380px]:text-lg sm:text-xl font-semibold text-ink mb-3 leading-snug">
              <span className="text-brand-cyan me-2">{i + 1}.</span>
              {section.heading}
            </h2>
            {section.paragraphs?.map((p, idx) => (
              <p key={idx} className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 last:mb-0">
                {p}
              </p>
            ))}
            {section.items && (
              <ul className="list-disc ps-4 sm:ps-5 space-y-2 text-gray-300 text-sm sm:text-base leading-relaxed">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {/* Contact */}
      <div className="mt-8 sm:mt-10 text-center text-gray-300 text-sm sm:text-base">
        {labels.questions}{' '}
        <Link href={localePath(lang, '/contact')} className="text-brand-cyan hover:underline py-2 inline-block">
          {labels.contactLink}
        </Link>
        .
      </div>
    </div>
  </main>
);

export default LegalPage;
