// app/pricing/page.jsx
import React from 'react';
import { siteIcons } from '@/app/(components)/brand';
import PricingPageClient from './_client';

export const COMPANY_NAME = 'CodeLegacy';
export const SITE_DOMAIN = 'https://code-origins.vercel.app';

export const metadata = {
  title: 'Pricing',
  description:
    'Transparent pricing for websites, ecommerce stores and web applications. See starting prices, what is included, milestone-linked payment terms, annual running costs, hosting plans and an interactive project cost estimator.',
  keywords: [
    'web development pricing', 'website design pricing', 'website design cost in egypt',
    'ecommerce store cost', 'web application cost', 'landing page price',
    'web hosting plans', 'project cost estimator', 'request a project quote',
    'hire web developer egypt',
  ],
  authors: [{ name: `${COMPANY_NAME} Team`, url: SITE_DOMAIN }],
  alternates: { canonical: `${SITE_DOMAIN}/pricing` },
  openGraph: {
    title: `Pricing — ${COMPANY_NAME}`,
    description: 'Clear pricing and scope before work begins: project prices, payment milestones, hosting plans and a cost estimator.',
    url: `${SITE_DOMAIN}/pricing`,
    siteName: COMPANY_NAME,
    locale: 'en_US',
    type: 'website',
  },
  icons: siteIcons,
  robots: 'index, follow',
};

export default function PricingPage() {
  return <PricingPageClient />;
}
