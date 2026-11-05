'use client';

import React from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Shield,
  Star,
} from 'lucide-react';
import Link from 'next/link';
import CircuitBolts from './CircuitBolts';
import { logoUrl } from './brand';
import { useI18n } from './LocaleProvider';
import { fillTemplate } from '@/lib/whatsapp';

const COPYRIGHT_YEAR = 2025;

// href = route without the language prefix (href() from useI18n adds '/en' or '/ar').
// NB: the old links "//#clients", "//#feat" and "/lastprojects//#tech" started with '//'
// (= external link) and pointed at the wrong page; the anchors really live on:
//   #clients / #feat -> home, #tech / #faq -> services, #portfolio -> lastprojects, #mail -> contact
const WEBSITE_TYPES = ['saas', 'landing', 'ecommerce', 'restaurant', 'clinic', 'portfolio'];

const COMPANY_LINKS = [
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  { key: 'work', href: '/lastprojects' },
  { key: 'contact', href: '/contact' },
  { key: 'faq', href: '/services#faq' },
];

const SUPPORT_LINKS = [
  { key: 'technologies', href: '/services#tech' },
  { key: 'reviews', href: '/#clients' },
  { key: 'features', href: '/#feat' },
  { key: 'message', href: '/contact#mail' },
];

const SOCIAL = [
  { key: 'facebook', Icon: Facebook, href: 'https://www.facebook.com/hany.nan.752/' },
  { key: 'instagram', Icon: Instagram, href: 'https://www.instagram.com/hany._younan/?__pwa=1' },
  { key: 'linkedin', Icon: Linkedin, href: 'https://www.linkedin.com/in/hany-younan-5b7466372' },
];

const linkClass = 'hover:text-brand-cyan transition-colors';
const listClass =
  'space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base text-center sm:text-start';
const headingClass = 'text-ink font-semibold mb-4 sm:mb-6 text-base sm:text-lg';

const Footer = () => {
  const { t, href } = useI18n();

  return (
    <footer className="relative overflow-hidden bg-[#00020f] py-6 sm:py-10 md:py-12 lg:py-16 border-t border-brand-line">
      <CircuitBolts intensity="soft" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Logo and Company Intro */}
          <div className="lg:col-span-1 flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logoUrl(96)}
                alt="CodeLegacy logo"
                width={40}
                height={40}
                className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border-2 border-brand-cyan object-cover shadow-glow-cyan"
              />
              {/* brand name stays Latin in every language; dir="ltr" keeps "CodeLegacy" in order inside RTL pages */}
              <span dir="ltr" className="brand-name text-lg sm:text-xl font-bold">
                <span className="text-ink">Code</span>
                <span className="text-neon">Legacy</span>
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base text-center sm:text-start max-w-xs sm:max-w-none">
              {t('footer.intro')}
            </p>
            <div className="flex gap-3">
              {SOCIAL.map(({ key, Icon, href: url }) => (
                <Link
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t(`footer.social.${key}`)}
                  className="bg-brand-blue hover:bg-brand-sky p-2 sm:p-3 rounded-full transition-colors"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-ink" />
                </Link>
              ))}
            </div>
          </div>

          {/* Website Types */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className={headingClass}>{t('footer.websiteTypes')}</h4>
            <ul className={listClass}>
              {WEBSITE_TYPES.map((type) => (
                <li key={type}>
                  <Link href={href('/lastprojects#portfolio')} className={linkClass}>
                    {t(`footer.types.${type}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className={headingClass}>{t('footer.company')}</h4>
            <ul className={listClass}>
              {COMPANY_LINKS.map(({ key, href: path }) => (
                <li key={key}>
                  <Link href={href(path)} className={linkClass}>
                    {t(`footer.companyLinks.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className={headingClass}>{t('footer.support')}</h4>
            <ul className={listClass}>
              {SUPPORT_LINKS.map(({ key, href: path }) => (
                <li key={key}>
                  <Link href={href(path)} className={linkClass}>
                    {t(`footer.supportLinks.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empty column for layout balance on larger screens */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 sm:gap-x-6 gap-y-3 sm:gap-y-4">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-brand-cyan" />
                <span className="text-gray-300 text-sm">{t('footer.security')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-brand-cyan" />
                <span className="text-gray-300 text-sm">{t('footer.rating')}</span>
              </div>
            </div>

            <div className="flex flex-col sm:items-end items-center gap-2">
              <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-300">
                <Link href={href('/privacy-policy')} className={linkClass}>
                  {t('footer.privacy')}
                </Link>
                <span className="text-gray-600">|</span>
                <Link href={href('/terms-and-conditions')} className={linkClass}>
                  {t('footer.terms')}
                </Link>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-end">
                {fillTemplate(t('footer.rights'), { year: COPYRIGHT_YEAR })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
