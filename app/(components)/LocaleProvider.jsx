'use client';
// Gives client components the current language + dictionary.
//   const { lang, dir, t, href } = useI18n();
//   t('nav.home')            -> translated string (falls back to the key itself)
//   href('/pricing')         -> '/ar/pricing'
import React, { createContext, useCallback, useContext, useMemo } from 'react';
import { dirOf, localePath } from '@/lib/i18n';

const LocaleContext = createContext(null);

export function LocaleProvider({ lang, dictionary, children }) {
  const value = useMemo(() => ({ lang, dir: dirOf(lang), dictionary }), [lang, dictionary]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used inside <LocaleProvider>');
  return ctx;
}

export const useDictionary = () => useLocale().dictionary;

export function useI18n() {
  const { lang, dir, dictionary } = useLocale();
  const t = useCallback(
    (key) => {
      const value = key.split('.').reduce((o, k) => (o == null ? o : o[k]), dictionary);
      return typeof value === 'string' ? value : key;
    },
    [dictionary]
  );
  const href = useCallback((path) => localePath(lang, path), [lang]);
  return { lang, dir, dictionary, t, href };
}
