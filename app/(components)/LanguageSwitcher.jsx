'use client';
// Switches language while staying on the same page (path, query and hash are kept).
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Languages } from 'lucide-react';
import { LOCALES, localePath, stripLocale } from '@/lib/i18n';
import { useI18n } from './LocaleProvider';

export default function LanguageSwitcher({ className = '' }) {
  const { lang, t } = useI18n();
  const pathname = usePathname();
  const [suffix, setSuffix] = useState('');

  // query + hash are only known in the browser
  useEffect(() => {
    setSuffix(window.location.search + window.location.hash);
  }, [pathname]);

  const other = LOCALES.find((l) => l !== lang) ?? lang;
  const { path } = stripLocale(pathname);
  const href = localePath(other, path) + suffix;

  return (
    <Link
      href={href}
      hrefLang={other}
      lang={other}
      prefetch={false}
      aria-label={`${t('language.switchTo')}: ${t(`language.${other}`)}`}
      className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-brand-card2 hover:text-brand-cyan ${className}`}
    >
      <Languages className="h-4 w-4" aria-hidden="true" />
      <span>{t(`language.short.${other}`)}</span>
    </Link>
  );
}
