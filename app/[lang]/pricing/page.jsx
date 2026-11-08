// app/pricing/page.jsx
import React from 'react';
import PricingPageClient from './_client';
import { getDictionary } from '@/lib/dictionaries';

import JsonLd from '@/app/(components)/JsonLd';
import { pageAlternates, pageSocial, breadcrumbJsonLd } from '@/lib/seo';
import { keywordsFor } from '@/lib/seoKeywords';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const m = (await getDictionary(lang)).pricingPage.meta;
  return {
    title: m.title,
    description: m.description,
    keywords: keywordsFor(lang, 'pricing'),
    alternates: pageAlternates(lang, '/pricing'),
    ...pageSocial(lang, '/pricing', { title: m.ogTitle, description: m.ogDescription }),
  };
}

export default async function PricingPage({ params }) {
  const { lang } = await params;
  const names = (await getDictionary(lang)).pageNames;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(lang, [[names.home, '/'], [names.pricing, '/pricing']])} />
      <PricingPageClient />
    </>
  );
}
