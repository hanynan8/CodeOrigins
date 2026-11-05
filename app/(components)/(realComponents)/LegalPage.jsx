// app/(components)/(realComponents)/LegalPage.jsx
// Shared layout for the legal pages (Privacy Policy / Terms & Conditions)

import React from 'react';
import Link from 'next/link';

const LegalPage = ({ title, intro, updated, sections }) => (
  <main className="bg-brand-bg text-white min-h-screen pt-28 sm:pt-32 pb-12 sm:pb-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
          <span className="text-brand-cyan">{title}</span>
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm">Last updated: {updated}</p>
      </div>

      {/* Intro */}
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">{intro}</p>

      {/* Sections */}
      <div className="space-y-5 sm:space-y-6">
        {sections.map((section, i) => (
          <section
            key={section.heading}
            className="bg-brand-card rounded-xl sm:rounded-2xl border border-brand-line/70 p-4 sm:p-6"
          >
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-3">
              <span className="text-brand-cyan mr-2">{i + 1}.</span>
              {section.heading}
            </h2>
            {section.paragraphs?.map((p, idx) => (
              <p key={idx} className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3 last:mb-0">
                {p}
              </p>
            ))}
            {section.items && (
              <ul className="list-disc pl-5 space-y-1.5 text-gray-300 text-sm sm:text-base leading-relaxed">
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
        Questions? Reach us through the{' '}
        <Link href="/contact" className="text-brand-cyan hover:underline">
          contact page
        </Link>
        .
      </div>
    </div>
  </main>
);

export default LegalPage;
