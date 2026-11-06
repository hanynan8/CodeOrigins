// Global 404 page. The root layout is app/[lang]/layout.jsx (a dynamic segment), so Next cannot
// wrap a 404 in it; this file renders the whole document itself.
import './globals.css';
import Link from 'next/link';
import { headers } from 'next/headers';
import { Rubik } from 'next/font/google';
import { ArrowRight } from 'lucide-react';
import { DEFAULT_LOCALE, dirOf, isLocale, localePath } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';

const rubik = Rubik({ subsets: ['latin', 'arabic'] });

export const metadata = { title: '404', robots: 'noindex' };

export default async function GlobalNotFound() {
  const h = await headers();
  const header = h.get('x-locale');
  const lang = isLocale(header) ? header : DEFAULT_LOCALE;
  const { notFound: n, nav } = await getDictionary(lang);

  return (
    <html lang={lang} dir={dirOf(lang)} data-theme="dark">
      <body className={`${rubik.className} antialiased bg-brand-bg text-ink`}>
        <main className="min-h-screen circuit-bg flex items-center justify-center text-center px-4 py-24">
          <div className="max-w-xl">
            <p className="text-7xl sm:text-9xl font-bold bg-gradient-to-r from-brand-cyan to-brand-sky bg-clip-text text-transparent">
              {n.code}
            </p>
            <h1 className="mt-4 text-2xl sm:text-4xl font-semibold">{n.heading}</h1>
            <p className="mt-3 text-base sm:text-lg text-gray-300 leading-relaxed">{n.text}</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={localePath(lang, '/')}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-brand-blue to-brand-cyan px-6 py-3 rounded-full font-semibold text-white shadow-glow"
              >
                {n.home}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
              <Link
                href={localePath(lang, '/contact')}
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-full border border-brand-line hover:border-brand-cyan transition-colors"
              >
                {nav.contact}
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
