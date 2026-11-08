// app/[lang]/services/[slug]/page.jsx
// One SEO landing page per service (e.g. /en/services/ecommerce-website-development).
// Content comes from lib/serviceLandings.js (keyword copy + FAQ) and ServiceData.jsx (features, tech, image).
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle } from 'lucide-react';
import CircuitBolts from '@/app/(components)/CircuitBolts';
import HeroWave from '@/app/(components)/HeroWave';
import JsonLd from '@/app/(components)/JsonLd';
import { servicesData } from '@/app/(components)/(realComponents)/ServiceData';
import { LOCALES, isLocale, localePath, localized } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { fillTemplate, inquiryMessage, whatsappLink } from '@/lib/whatsapp';
import { keywordsFor } from '@/lib/seoKeywords';
import { pageAlternates, pageSocial, breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/seo';
import { REGIONS, regionPath } from '@/lib/regionPages';
import {
  SERVICE_LANDINGS,
  SERVICE_UI,
  findServiceBySlug,
  serviceLandingPath,
  serviceSlugs,
} from '@/lib/serviceLandings';

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => serviceSlugs().map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const found = findServiceBySlug(servicesData, slug);
  if (!found) return {};
  const c = found.landing[lang];
  const path = `/services/${found.landing.slug}`;
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    keywords: keywordsFor(lang, 'services'),
    alternates: pageAlternates(lang, path),
    ...pageSocial(lang, path, { title: c.metaTitle, description: c.metaDescription }),
  };
}

export default async function ServiceLandingPage({ params }) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const found = findServiceBySlug(servicesData, slug);
  if (!found) notFound();

  const { service, landing } = found;
  const c = landing[lang];
  const ui = SERVICE_UI[lang];
  const dictionary = await getDictionary(lang);
  const href = (path) => localePath(lang, path);
  const title = localized(service.title, lang);
  const path = `/services/${landing.slug}`;
  const chatUrl = whatsappLink(inquiryMessage(dictionary, lang, service));
  const others = servicesData.filter((s) => s.id !== service.id && SERVICE_LANDINGS[s.id]);

  const jsonLd = [
    breadcrumbJsonLd(lang, [
      [ui.home, '/'],
      [ui.services, '/services'],
      [title, path],
    ]),
    serviceJsonLd(lang, { name: c.h1, description: c.metaDescription, path }),
    faqJsonLd(c.faq),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative min-h-[80vh] sm:min-h-[70vh] circuit-bg flex items-center justify-center text-center text-ink overflow-hidden">
          <CircuitBolts />
          <div className="relative z-10 w-full max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-24 pb-16">
            <nav aria-label="Breadcrumb" className="mb-4 text-xs sm:text-sm text-gray-300">
              <Link href={href('/')} className="hover:text-brand-cyan transition-colors">{ui.home}</Link>
              <span className="mx-2">/</span>
              <Link href={href('/services')} className="hover:text-brand-cyan transition-colors">{ui.services}</Link>
              <span className="mx-2">/</span>
              <span className="text-ink">{title}</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 leading-tight">
              {c.h1}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
              {localized(service.shortDescription, lang)}
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
                href={href('/lastprojects#portfolio')}
                className="border-2 border-white/30 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                {ui.viewWork}
              </Link>
            </div>
          </div>
          <HeroWave />
        </section>

        {/* Overview */}
        <section className="py-10 sm:py-16 md:py-20 bg-brand-bg text-ink">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">{title}</h2>
              {c.intro.map((paragraph) => (
                <p key={paragraph} className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
            {service.image && (
              <img
                src={service.image}
                alt={fillTemplate(ui.imageAlt, { title })}
                loading="lazy"
                className="w-full h-auto rounded-2xl shadow-glow object-cover"
              />
            )}
          </div>
        </section>

        {/* Features */}
        <section className="py-10 sm:py-16 md:py-20 bg-brand-alt text-ink">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-10 text-center">
              {ui.whatsIncluded}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {service.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-brand-line/70 bg-brand-card p-4 text-sm sm:text-base text-gray-200"
                >
                  <CheckCircle className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <span>{localized(feature, lang)}</span>
                </li>
              ))}
            </ul>

            {service.technologies?.length > 0 && (
              <div className="mt-8 sm:mt-12 text-center">
                <h3 className="text-base sm:text-lg font-semibold mb-3">{ui.technologies}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-brand-line bg-brand-card px-3 py-1 text-xs sm:text-sm text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 sm:py-16 md:py-20 bg-brand-bg text-ink">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-10 text-center">
              {ui.faq}
            </h2>
            <div className="space-y-3">
              {c.faq.map((item) => (
                <details
                  key={item.question}
                  className="rounded-xl border border-brand-line/70 bg-brand-card p-4 sm:p-5"
                >
                  <summary className="cursor-pointer font-semibold text-sm sm:text-base">{item.question}</summary>
                  <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Other services + CTA */}
        <section className="py-10 sm:py-16 md:py-20 bg-brand-alt text-ink">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">{ui.otherServices}</h2>
            <div className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-14">
              {others.map((s) => (
                <Link
                  key={s.id}
                  href={href(serviceLandingPath(s.id))}
                  className="rounded-full border border-brand-line bg-brand-card px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-gray-200 hover:text-brand-cyan hover:border-brand-cyan/50 transition-colors"
                >
                  {localized(s.title, lang)}
                </Link>
              ))}
              <Link
                href={href('/services')}
                className="rounded-full border border-brand-cyan/40 bg-brand-blue/10 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand-cyan"
              >
                {ui.allServices}
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-14">
              {Object.keys(REGIONS).map((k) => (
                <Link
                  key={k}
                  href={href(regionPath(k))}
                  className="rounded-full border border-brand-line bg-brand-card px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-gray-200 hover:text-brand-cyan hover:border-brand-cyan/50 transition-colors"
                >
                  {REGIONS[k][lang].h1}
                </Link>
              ))}
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">{ui.ctaTitle}</h2>
            <p className="text-sm sm:text-base text-gray-300 mb-6 max-w-2xl mx-auto">{ui.ctaText}</p>
            <a
              href={chatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue to-brand-cyan px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-semibold text-white transition-all hover:scale-105"
            >
              {ui.requestQuote}
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
