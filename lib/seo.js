// Shared SEO constants and helpers (no React: safe for pages, layouts, sitemap and robots).
import { LOCALES, DEFAULT_LOCALE, localePath } from './i18n';

export const COMPANY_NAME = 'CodeLegacy';
export const SITE_DOMAIN = 'https://codelegacy.tech'; // change to the actual domain

export const OG_LOCALE = { en: 'en_US', ar: 'ar_EG' };

// Absolute URL of a page in a language:  pageUrl('ar', '/pricing') -> https://codelegacy.tech/ar/pricing
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
