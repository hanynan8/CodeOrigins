// Shared i18n helpers (no React, safe to import from server, client and proxy.js).

export const LOCALES = ['en', 'ar'];
export const DEFAULT_LOCALE = 'en'; // used when the visitor has no saved / browser preference
export const LOCALE_COOKIE = 'NEXT_LOCALE';

export const isLocale = (value) => LOCALES.includes(value);
export const dirOf = (lang) => (lang === 'ar' ? 'rtl' : 'ltr');

// '/en/pricing' -> { lang: 'en', path: '/pricing' }   '/ar' -> { lang: 'ar', path: '/' }
// A pathname without a language prefix returns lang: null and the path unchanged.
export function stripLocale(pathname = '/') {
  const [, first = '', ...rest] = pathname.split('/');
  if (!isLocale(first)) return { lang: null, path: pathname || '/' };
  return { lang: first, path: '/' + rest.join('/') };
}

// Builds a language-aware internal link.
//   localePath('ar', '/')                 -> '/ar'
//   localePath('ar', '/pricing')          -> '/ar/pricing'
//   localePath('ar', '/#clients')         -> '/ar#clients'
//   localePath('ar', '/en/pricing')       -> '/ar/pricing'   (existing prefix is replaced)
// External links, mailto:/tel:, '#hash' and protocol-relative '//' links are returned untouched.
export function localePath(lang, href = '/') {
  if (typeof href !== 'string' || !href.startsWith('/') || href.startsWith('//')) return href;
  const hashAt = href.search(/[?#]/);
  const pathname = hashAt === -1 ? href : href.slice(0, hashAt);
  const tail = hashAt === -1 ? '' : href.slice(hashAt);
  const { path } = stripLocale(pathname);
  return (path === '/' ? `/${lang}` : `/${lang}${path}`) + tail;
}

// Picks the best supported language from an Accept-Language header, or null.
export function matchAcceptLanguage(header = '') {
  const ranked = header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const q = parseFloat(params.find((p) => p.trim().startsWith('q='))?.split('=')[1] ?? '1');
      return { base: tag.trim().toLowerCase().split('-')[0], q: Number.isNaN(q) ? 0 : q };
    })
    .filter((x) => x.base && x.q > 0)
    .sort((a, b) => b.q - a.q);
  return ranked.find((x) => isLocale(x.base))?.base ?? null;
}

// Picks the text for a language from data that is either a plain string or { en, ar }.
//   localized('Hello', 'ar')                -> 'Hello'
//   localized({ en: 'Hello', ar: 'مرحبا' }, 'ar') -> 'مرحبا'   (falls back to en, then any string)
export function localized(value, lang) {
  if (value == null || typeof value === 'string') return value ?? '';
  if (typeof value === 'object' && !Array.isArray(value)) {
    return value[lang] ?? value[DEFAULT_LOCALE] ?? Object.values(value).find((v) => typeof v === 'string') ?? '';
  }
  return value;
}
