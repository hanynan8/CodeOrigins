// Shared SEO constants and helpers (no React: safe for pages, layouts, sitemap and robots).
import { LOCALES, DEFAULT_LOCALE, localePath } from './i18n';
import { WHATSAPP_PHONE } from './whatsapp';

export const COMPANY_NAME = 'CodeLegacy';

// Set NEXT_PUBLIC_SITE_URL in the hosting dashboard (e.g. https://yourdomain.com) and every canonical,
// hreflang, sitemap, robots and structured-data URL follows it. The fallback is the previous placeholder.
export const SITE_DOMAIN = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.codelegacy.tech').replace(/\/+$/, '');

export const OG_LOCALE = { en: 'en_US', ar: 'ar_EG' };

// Default social-share picture (1200x630). Pages without a picture of their own use this one.
export const OG_IMAGE = {
  url: 'https://raw.githubusercontent.com/hanynan8/forImages/refs/heads/main/Screenshot%20(791).png',
  width: 1200,
  height: 630,
  alt: `${COMPANY_NAME} — Web & Software Development`,
};

// Real contact points (the same ones shown on the site).
export const CONTACT_EMAIL = 'CodeLegacy1@gmail.com';
export const CONTACT_PHONE = `+${WHATSAPP_PHONE.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})$/, '$1 $2 $3 $4')}`; // +20 121 381 9102
export const SOCIAL_LINKS = [
  'https://www.facebook.com/hany.nan.752/',
  'https://www.instagram.com/hany._younan/',
  'https://www.linkedin.com/in/hany-younan-5b7466372',
];

// Absolute URL of a page in a language:  pageUrl('ar', '/pricing') -> https://<domain>/ar/pricing
export const pageUrl = (lang, path = '/') => `${SITE_DOMAIN}${localePath(lang, path)}`;

// `alternates` for generateMetadata: canonical for this language + hreflang for every language.
//   pageAlternates('ar', '/pricing')
export function pageAlternates(lang, path = '/') {
  return {
    canonical: pageUrl(lang, path),
    languages: {
      ...Object.fromEntries(LOCALES.map((l) => [l, pageUrl(l, path)])),
      'x-default': pageUrl(DEFAULT_LOCALE, path),
    },
  };
}

// openGraph + twitter blocks for a page, so every page shares one image and consistent tags.
//   pageSocial('ar', '/pricing', { title, description })
export function pageSocial(lang, path, { title, description, image = OG_IMAGE, type = 'website' }) {
  return {
    openGraph: {
      title,
      description,
      url: pageUrl(lang, path),
      siteName: COMPANY_NAME,
      locale: OG_LOCALE[lang],
      alternateLocale: LOCALES.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      type,
      images: [image],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image.url] },
  };
}

// ── Structured data (JSON-LD) builders ───────────────────────────────────────────────────────────
const orgId = `${SITE_DOMAIN}/#organization`;
const siteId = `${SITE_DOMAIN}/#website`;

// Site-wide graph: who the company is, the website, and the professional service it sells.
export function siteJsonLd(lang, { logo, description }) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: COMPANY_NAME,
        url: SITE_DOMAIN,
        logo,
        image: logo,
        email: CONTACT_EMAIL,
        sameAs: SOCIAL_LINKS,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: CONTACT_PHONE,
            email: CONTACT_EMAIL,
            contactType: 'sales',
            areaServed: ['EG', 'SA', 'AE', 'KW', 'QA', 'OM'],
            availableLanguage: ['Arabic', 'English'],
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': siteId,
        url: SITE_DOMAIN,
        name: COMPANY_NAME,
        inLanguage: lang,
        publisher: { '@id': orgId },
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE_DOMAIN}/#service`,
        name: COMPANY_NAME,
        url: pageUrl(lang, '/'),
        description,
        image: logo,
        telephone: CONTACT_PHONE,
        email: CONTACT_EMAIL,
        priceRange: '$$',
        areaServed: [
          { '@type': 'Country', name: 'Egypt' },
          { '@type': 'Country', name: 'Saudi Arabia' },
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Country', name: 'Kuwait' },
          { '@type': 'Country', name: 'Qatar' },
        ],
        parentOrganization: { '@id': orgId },
      },
    ],
  };
}

// BreadcrumbList: breadcrumbJsonLd('ar', [['الرئيسية', '/'], ['الأسعار', '/pricing']])
export function breadcrumbJsonLd(lang, trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: pageUrl(lang, path),
    })),
  };
}

// FAQPage from [{ question, answer }]
export function faqJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
}

// ItemList of Service entries: services = [{ name, description }]
export function servicesJsonLd(lang, services) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${COMPANY_NAME} — ${lang === 'ar' ? 'خدمات تطوير المواقع' : 'Web Development Services'}`,
    itemListElement: services.map(({ name, description }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name,
        description,
        serviceType: name,
        provider: { '@id': orgId },
        url: pageUrl(lang, '/services'),
      },
    })),
  };
}
