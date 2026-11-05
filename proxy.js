// Next.js 16 "proxy" (formerly middleware): sends every URL without a language
// prefix to /en/... or /ar/... (saved choice -> browser language -> default).
import { NextResponse } from 'next/server';
import { DEFAULT_LOCALE, LOCALE_COOKIE, isLocale, matchAcceptLanguage, stripLocale } from './lib/i18n';

const ONE_YEAR = 60 * 60 * 24 * 365;

function preferredLocale(request) {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(saved)) return saved;
  return matchAcceptLanguage(request.headers.get('accept-language') ?? '') ?? DEFAULT_LOCALE;
}

export function proxy(request) {
  const { pathname, search } = request.nextUrl;
  const { lang } = stripLocale(pathname);

  if (lang) {
    // Already localised: just remember the choice (so the switcher sticks next visit).
    const response = NextResponse.next();
    if (request.cookies.get(LOCALE_COOKIE)?.value !== lang) {
      response.cookies.set(LOCALE_COOKIE, lang, { path: '/', maxAge: ONE_YEAR, sameSite: 'lax' });
    }
    return response;
  }

  // '/' -> '/en', '/pricing' -> '/en/pricing'. 307 because the target depends on the visitor.
  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === '/' ? '' : pathname}`;
  url.search = search;
  return NextResponse.redirect(url);
}

export const config = {
  // skip Next internals, API routes, and any file with an extension (images, manifest, fonts, ...)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
