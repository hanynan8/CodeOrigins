// app/page.js  (Homepage)
import React from 'react';
import {
  Globe,
  Smartphone,
  Palette,
  Search,
  Shield,
  Users,
} from 'lucide-react';
import SendEmail from '../(components)/(realComponents)/SendEmail';
import Tech from '../(components)/(realComponents)/tech';
import CodeLegacyClient from './_client';
import { servicesData } from '../(components)/(realComponents)/ServiceData';

// ─────────────────────────────────────────────────────────────────────────────
// Metadata
// ─────────────────────────────────────────────────────────────────────────────
export const COMPANY_NAME = 'CodeLegacy';
export const SITE_DOMAIN = 'https://codelegacy.tech';

export const metadata = {
  title: `Home`,
  description:
    'CodeLegacy — your partner in building fast and secure websites, scalable ecommerce stores, and SaaS platforms. UX/UI design services, performance optimization, security, and professional cloud deployment.',
  keywords: [
    'web development company', 'CodeLegacy', 'website development in cairo', 'web development company egypt',
    'website design', 'ecommerce store development', 'ecommerce development', 'saas development',
    'UX UI design', 'Next.js', 'React', 'Node.js', 'TypeScript', 'Docker', 'Kubernetes',
    'performance optimization', 'improve LCP', 'core web vitals', 'web application security',
    'cloud migration', 'AWS migration', 'DevOps services', 'CI/CD pipeline',
    'web agency cairo', 'hire web developer egypt', 'request a free consultation',
    'technical SEO', 'seo for ecommerce', 'local seo cairo',
  ],
  authors: [{ name: `${COMPANY_NAME} Team`, url: SITE_DOMAIN }],
  alternates: { canonical: `${SITE_DOMAIN}/` },
  openGraph: {
    title: `${COMPANY_NAME} | Web Development Company in Cairo`,
    description: 'See our services and portfolio: website development, ecommerce stores, SaaS platforms, performance optimization, and application security.',
    url: `${SITE_DOMAIN}/`,
    siteName: COMPANY_NAME,
    images: [{ url: `${SITE_DOMAIN}/og-home.jpg`, width: 1200, height: 630, alt: `${COMPANY_NAME} — Web & SaaS Development` }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_NAME} — Web Development & Ecommerce Stores`,
    description: 'Your partner in building fast, scalable web applications. Get a free consultation now.',
    images: [`${SITE_DOMAIN}/twitter-home.jpg`],
  },
  icons: {
    icon: '/icons/code.svg',
    shortcut: '/icons/favicon-16x16.png',
    apple: '/icons/apple-touch-icon.png',
    other: [{ rel: 'manifest', url: '/site.webmanifest' }],
  },
  robots: 'index, follow',
  themeColor: '#0ea5a4',
  verification: { google: 'GOOGLE_SITE_VERIFICATION_TOKEN' },
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD
// ─────────────────────────────────────────────────────────────────────────────
export const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_DOMAIN}#organization`,
      name: COMPANY_NAME,
      url: SITE_DOMAIN,
      logo: `${SITE_DOMAIN}/logo.png`,
      sameAs: [`${SITE_DOMAIN}/facebook`, `${SITE_DOMAIN}/twitter`, `${SITE_DOMAIN}/linkedin`],
      contactPoint: [{ '@type': 'ContactPoint', telephone: '+20-100-000-0000', contactType: 'customer support', areaServed: 'EG', availableLanguage: ['Arabic', 'English'] }],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_DOMAIN}#website`,
      url: SITE_DOMAIN,
      name: COMPANY_NAME,
      publisher: { '@id': `${SITE_DOMAIN}#organization` },
      potentialAction: [{ '@type': 'SearchAction', target: `${SITE_DOMAIN}/search?q={search_term_string}`, 'query-input': 'required name=search_term_string' }],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_DOMAIN}#localbusiness`,
      name: COMPANY_NAME,
      url: SITE_DOMAIN,
      telephone: '+20-100-000-0000',
      address: { '@type': 'PostalAddress', addressLocality: 'Cairo', addressCountry: 'EG' },
      openingHours: 'Mo,Tu,We,Th,Fr 09:00-18:00',
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Data specific to the homepage only
// ─────────────────────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: 'Ahmed El-Sayed',
    company: 'Marketing Manager, Tech Company',
    content: 'Working with CodeLegacy was a fantastic experience — a professional and creative team that delivered solutions exceeding our expectations and helped us achieve our digital goals successfully.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    name: 'Sara Mohamed',
    company: 'Ecommerce Store Owner',
    content: 'The ecommerce platform built by the CodeLegacy team helped double my sales and improve the customer experience. Thank you for the great work.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    name: 'Khaled Abdullah',
    company: 'IT Manager, Learning Institute',
    content: 'The learning management system CodeLegacy built was a dream come true — easy to use and provides everything we need to manage remote learning efficiently.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
];

const webServices = [
  { icon: <Globe className="w-8 h-8" />,      title: 'Website Development',   description: 'Building responsive, fast websites using the latest technologies like React and Next.js.' },
  { icon: <Smartphone className="w-8 h-8" />, title: 'Responsive Design',     description: 'Designing websites that work perfectly on all devices, from phones to desktop computers.' },
  { icon: <Palette className="w-8 h-8" />,    title: 'UI/UX Design',          description: 'Designing attractive interfaces and an outstanding user experience that increases conversion rates.' },
  { icon: <Search className="w-8 h-8" />,     title: 'SEO Optimization',      description: 'Search engine optimization to ensure your site ranks at the top of search results.' },
  { icon: <Shield className="w-8 h-8" />,     title: 'Security & Protection', description: 'Implementing the highest security standards to protect your site and your customers\' data.' },
  { icon: <Users className="w-8 h-8" />,      title: 'Support & Maintenance', description: 'Ongoing technical support and regular maintenance to ensure your site runs efficiently after delivery.' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────
const CodeLegacyHomepage = () => {
  return (
    <div className="min-h-screen">
      <CodeLegacyClient
        services={servicesData}        // ← from the shared data file (first 9 services)
        testimonials={testimonials}
        webServices={webServices}
      />
      <Tech />
      <SendEmail />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
    </div>
  );
};

export default CodeLegacyHomepage;