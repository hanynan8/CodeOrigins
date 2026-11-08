// app/[lang]/web-development-company/[country]/page.jsx
// Market pages (Egypt, Saudi Arabia, UAE, Kuwait, Qatar, Oman). Content: lib/regionPages.js
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CircuitBolts from '@/app/(components)/CircuitBolts';
import HeroWave from '@/app/(components)/HeroWave';
import JsonLd from '@/app/(components)/JsonLd';
import { servicesData } from '@/app/(components)/(realComponents)/ServiceData';
import { everyProject } from '@/app/(components)/(realComponents)/projectsData';
import { LOCALES, isLocale, localePath, localized } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { fillTemplate, inquiryMessage, whatsappLink } from '@/lib/whatsapp';
import { keywordsFor } from '@/lib/seoKeywords';
import { pageAlternates, pageSocial, breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/seo';
import { SERVICE_LANDINGS, serviceLandingPath } from '@/lib/serviceLandings';
import { REGIONS, REGION_UI, regionPath, regionSlugs } from '@/lib/regionPages';

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => regionSlugs().map((country) => ({ lang, country })));
}

export async function generateMetadata({ params }) {
  const { lang, country } = await params;
  if (!isLocale(lang) || !REGIONS[country]) return {};
  const c = REGIONS[country][lang];
  const path = regionPath(country);
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    keywords: keywordsFor(lang, 'home'),
    alternates: pageAlternates(lang, path),
    ...pageSocial(lang, path, { title: c.metaTitle, description: c.metaDescription }),
  };
}

export default async function RegionPage({ params }) {
  const { lang, country } = await params;
  if (!isLocale(lang) || !REGIONS[country]) notFound();

  const region = REGIONS[country];
  const c = region[lang];
  const ui = REGION_UI[lang];
  const dictionary = await getDictionary(lang);
  const href = (path) => localePath(lang, path);
  const path = regionPath(country);
  const chatUrl = whatsappLink(inquiryMessage(dictionary, lang));
  const projects = region.projects
    .map((slug) => everyProject.find((p) => p.slug === slug))
    .filter(Boolean);
  const otherMarkets = Object.keys(REGIONS).filter((k) => k !== country);
  const featured = servicesData.filter((s) => SERVICE_LANDINGS[s.id]).slice(0, 6);

  const jsonLd = [
    breadcrumbJsonLd(lang, [
      [ui.home, '/'],
      [c.h1, path],
    ]),
    serviceJsonLd(lang, { name: c.h1, description: c.metaDescription, path }),
    faqJsonLd(c.faq),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen">
        <section className="relative min-h-[80vh] sm:min-h-[70vh] circuit-bg flex items-center justify-center text-center text-ink overflow-hidden">
          <CircuitBolts />
          <div className="relative z-10 w-full max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-24 pb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 leading-tight">{c.h1}</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
              {c.intro[0]}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <a
                href={chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-brand-blue to-brand-cyan px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-white"
              >
                {ui.requestQuote}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 transition-transform" />
              </a>
              <Link
                href={href('/services')}
                className="border-2 border-white/30 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                {ui.viewServices}
              </Link>
            </div>
          </div>
          <HeroWave />
        </section>

        <section className="py-10 sm:py-16 md:py-20 bg-brand-bg text-ink">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
              {c.intro[1]}
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
              {fillTemplate(ui.builtFor, { name: c.name })}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {c.local.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-brand-line/70 bg-brand-card p-4 text-sm sm:text-base text-gray-200"
                >
                  <CheckCircle className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-10 sm:py-16 md:py-20 bg-brand-alt text-ink">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
              {fillTemplate(ui.whatWeBuild, { name: c.name })}
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {featured.map((s) => (
                <Link
                  key={s.id}
                  href={href(serviceLandingPath(s.id))}
                  className="rounded-full border border-brand-line bg-brand-card px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-gray-200 hover:text-brand-cyan hover:border-brand-cyan/50 transition-colors"
                >
                  {localized(s.title, lang)}
                </Link>
              ))}
            </div>

            {projects.length > 0 && (
              <div className="mt-10 sm:mt-14">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                  {fillTemplate(ui.relatedWork, { name: c.name })}
                </h2>
                <div className="flex flex-wrap justify-center gap-2">
                  {projects.map((p) => (
                    <Link
                      key={p.slug}
                      href={href(`/lastprojects/${p.slug}`)}
                      className="rounded-full border border-brand-cyan/40 bg-brand-blue/10 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand-cyan"
                    >
                      {p.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="py-10 sm:py-16 md:py-20 bg-brand-bg text-ink">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-10 text-center">{ui.faq}</h2>
            <div className="space-y-3">
              {c.faq.map((item) => (
                <details key={item.question} className="rounded-xl border border-brand-line/70 bg-brand-card p-4 sm:p-5">
                  <summary className="cursor-pointer font-semibold text-sm sm:text-base">{item.question}</summary>
                  <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>

            <h2 className="text-lg sm:text-xl font-bold mt-12 mb-3 text-center">{ui.otherMarkets}</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {otherMarkets.map((k) => (
                <Link
                  key={k}
                  href={href(regionPath(k))}
                  className="rounded-full border border-brand-line bg-brand-card px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-gray-200 hover:text-brand-cyan transition-colors"
                >
                  {REGIONS[k][lang].name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
