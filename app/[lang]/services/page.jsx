// app/services/page.js
import { siteIcons } from '@/app/(components)/brand';
import React from 'react';
import ServicesPageClient from './_client';
import { servicesData } from '@/app/(components)/(realComponents)/ServiceData';
import { getDictionary } from '@/lib/dictionaries';

// ─────────────────────────────────────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────────────────────────────────────
export const COMPANY_NAME = 'CodeLegacy';
export const SITE_DOMAIN = 'https://code-origins.vercel.app';

const baseMetadata = {
  title: `Our Services`,
  description:
    'Our services include website and ecommerce store design & development, SaaS application development, DevOps and cloud services, performance optimization and technical SEO, UX/UI design, product strategy, and full maintenance & technical support.',
  keywords: [
    'web development services', 'software services', 'website development services', 'website design services', 'SaaS services',
    'Next.js development', 'Next.js development', 'React development', 'Node.js development',
    'TypeScript development', 'PWA development', 'Progressive Web App', 'headless ecommerce',
    'ecommerce store development', 'ecommerce development', 'WooCommerce development', 'Shopify development',
    'payment gateway integration', 'cloud migration', 'AWS migration', 'DevOps services',
    'CI/CD pipeline', 'performance optimization', 'core web vitals optimization',
    'technical SEO', 'hire web developer egypt', 'request a service quote',
  ],
  authors: [{ name: `${COMPANY_NAME} Team`, url: SITE_DOMAIN }],
  alternates: { canonical: `${SITE_DOMAIN}/services` },
  openGraph: {
    title: `Our Services — ${COMPANY_NAME}`,
    description: 'A complete set of services: website and store development, SaaS solutions, performance optimization, security, DevOps and cloud.',
    url: `${SITE_DOMAIN}/services`,
    siteName: COMPANY_NAME,
    images: [{ url: `${SITE_DOMAIN}/og-services.jpg`, width: 1200, height: 630, alt: `${COMPANY_NAME} — Web Development Services` }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Our Services — ${COMPANY_NAME}`,
    description: 'Learn about our services: design, development, cloud, performance, security, and maintenance.',
    images: [`${SITE_DOMAIN}/twitter-services.jpg`],
  },
  icons: siteIcons,
  robots: 'index, follow',
};

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const m = (await getDictionary(lang)).servicesPage.meta;
  return {
    ...baseMetadata,
    title: m.title,
    description: m.description,
    openGraph: { ...baseMetadata.openGraph, title: m.ogTitle, description: m.ogDescription, locale: lang === 'ar' ? 'ar_EG' : 'en_US' },
    twitter: { ...baseMetadata.twitter, title: m.ogTitle, description: m.twitterDescription },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────────────────────
export const servicesItemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: `${COMPANY_NAME} — Web Development Services`,
  description: 'List of technical services offered by CodeLegacy.',
  itemListElement: [
    { '@type': 'ListItem', position: 1, url: `${SITE_DOMAIN}/services/web-development`, item: { '@type': 'Service', name: 'Website & Web App Development', description: 'Professional website development using Next.js, React, Node.js.', provider: { '@type': 'Organization', name: COMPANY_NAME, url: SITE_DOMAIN } } },
    { '@type': 'ListItem', position: 2, url: `${SITE_DOMAIN}/services/ecommerce-development`, item: { '@type': 'Service', name: 'Ecommerce Store Development', description: 'Building scalable ecommerce stores with local and global payment gateway integration.', provider: { '@type': 'Organization', name: COMPANY_NAME, url: SITE_DOMAIN } } },
    { '@type': 'ListItem', position: 3, url: `${SITE_DOMAIN}/services/saas-development`, item: { '@type': 'Service', name: 'SaaS & MVP Development', description: 'Designing and building multi-tenant SaaS solutions.', provider: { '@type': 'Organization', name: COMPANY_NAME, url: SITE_DOMAIN } } },
  ],
};

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
const ServicesPage = () => {
  return (
    <ServicesPageClient
      services={servicesData}          // ← from the shared data file
      processSteps={processSteps}
      whyChooseUs={whyChooseUs}
      technologiesData={technologiesData}
    />
  );
};

export default ServicesPage;