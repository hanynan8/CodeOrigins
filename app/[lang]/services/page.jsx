// app/services/page.js
import React from 'react';
import ServicesPageClient from './_client';
import { servicesData } from '@/app/(components)/(realComponents)/ServiceData';
import { getDictionary } from '@/lib/dictionaries';

// ─────────────────────────────────────────────────────────────────────────────
// Metadata + structured data
// ─────────────────────────────────────────────────────────────────────────────
import JsonLd from '@/app/(components)/JsonLd';
import { pageAlternates, pageSocial, breadcrumbJsonLd, faqJsonLd, servicesJsonLd } from '@/lib/seo';
import { keywordsFor } from '@/lib/seoKeywords';
import { localized } from '@/lib/i18n';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const m = (await getDictionary(lang)).servicesPage.meta;
  return {
    title: m.title,
    description: m.description,
    keywords: keywordsFor(lang, 'services'),
    alternates: pageAlternates(lang, '/services'),
    ...pageSocial(lang, '/services', { title: m.ogTitle, description: m.ogDescription }),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Data specific to the services page only
// ─────────────────────────────────────────────────────────────────────────────
// Only non-text parts here; titles/descriptions come from dictionaries/*.json
// (servicesPage.process.steps / servicesPage.why.items / servicesPage.faq.items), matched by index.
const processSteps = [
  { step: '01', icon: 'MessageCircle' },
  { step: '02', icon: 'Code' },
  { step: '03', icon: 'CheckCircle' },
  { step: '04', icon: 'Rocket' },
];

const whyChooseUs = [
  { icon: 'Zap',        color: 'from-brand-blue to-brand-cyan' },
  { icon: 'Gauge',      color: 'from-green-500 to-emerald-500' },
  { icon: 'Search',     color: 'from-brand-blue to-cyan-500' },
  { icon: 'TrendingUp', color: 'from-purple-500 to-pink-500' },
  { icon: 'Code',       color: 'from-indigo-500 to-blue-500' },
  { icon: 'Shield',     color: 'from-red-500 to-rose-500' },
  { icon: 'Monitor',    color: 'from-teal-500 to-green-500' },
  { icon: 'Sparkles',   color: 'from-pink-500 to-brand-cyan' },
  { icon: 'Headphones', color: 'from-orange-500 to-red-500' },
];

const technologiesData = [
  { name: 'React',       iconClass: 'devicon-react-original colored' },
  { name: 'Next.js',     iconClass: 'devicon-nextjs-original' },
  { name: 'Vue.js',      iconClass: 'devicon-vuejs-plain colored' },
  { name: 'Node.js',     iconClass: 'devicon-nodejs-plain colored' },
  { name: 'Laravel',     iconClass: 'devicon-laravel-plain colored' },
  { name: 'CSS3',        iconClass: 'devicon-css3-plain colored' },
  { name: 'Python',      iconClass: 'devicon-python-plain colored' },
  { name: 'MongoDB',     iconClass: 'devicon-mongodb-plain colored' },
  { name: 'JavaScript',  iconClass: 'devicon-javascript-plain colored' },
  { name: 'HTML5',       iconClass: 'devicon-html5-plain colored' },
  { name: 'Express.js',  iconClass: 'devicon-express-original' },
  { name: 'TypeScript',  iconClass: 'devicon-typescript-plain colored' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────
const ServicesPage = async ({ params }) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const names = dictionary.pageNames;
  const jsonLd = [
    breadcrumbJsonLd(lang, [[names.home, '/'], [names.services, '/services']]),
    servicesJsonLd(
      lang,
      servicesData.map((service) => ({
        name: localized(service.title, lang),
        description: localized(service.shortDescription, lang),
      }))
    ),
    faqJsonLd(dictionary.servicesPage.faq.items),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <ServicesPageClient
        services={servicesData}          // ← from the shared data file
        processSteps={processSteps}
        whyChooseUs={whyChooseUs}
        technologiesData={technologiesData}
      />
    </>
  );
};

export default ServicesPage;