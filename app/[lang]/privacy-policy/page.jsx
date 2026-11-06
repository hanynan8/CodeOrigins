// app/privacy-policy/page.jsx
import React from 'react';
import LegalPage from '@/app/(components)/(realComponents)/LegalPage';
import { getDictionary } from '@/lib/dictionaries';
import { localePath } from '@/lib/i18n';

const SITE_DOMAIN = 'https://codelegacy.tech';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const m = (await getDictionary(lang)).legal.privacy.meta;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: `${SITE_DOMAIN}${localePath(lang, '/privacy-policy')}` },
    robots: 'index, follow',
  };
}

export default async function PrivacyPolicyPage({ params }) {
  const { lang } = await params;
  const { legal } = await getDictionary(lang);
  const page = legal.privacy;
  return (
    <LegalPage
      lang={lang}
      labels={legal}
      title={page.title}
      updated={legal.updated}
      intro={page.intro}
      sections={page.sections}
    />
  );
}
