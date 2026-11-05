// Server-side dictionary loader: const dict = await getDictionary(lang)
import { DEFAULT_LOCALE, isLocale } from './i18n';

const loaders = {
  en: () => import('../dictionaries/en.json').then((m) => m.default),
  ar: () => import('../dictionaries/ar.json').then((m) => m.default),
};

export const getDictionary = async (lang) => loaders[isLocale(lang) ? lang : DEFAULT_LOCALE]();
