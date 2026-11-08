// file: app/[lang]/layout.jsx
// Contains: RootLayout component (Next.js app dir, one per language), metadata export, and seo keywords bundle

import React from 'react';
import { Rubik, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { notFound } from 'next/navigation';
import Navbar from '@/app/(components)/navbar';
import Script from 'next/script';
import Footer from '@/app/(components)/footer';
import PageTransition from '@/app/(components)/PageTransition';
import ThemeSync from '@/app/(components)/ThemeSync';
import MotionEffects from '@/app/(components)/MotionEffects';
import SmoothScroll from '@/app/(components)/SmoothScroll';
import { LocaleProvider } from '@/app/(components)/LocaleProvider';
import { siteIcons, LOGO_ICON, logoUrl } from '@/app/(components)/brand';
import { LOCALES, dirOf, isLocale } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { whatsappLink } from '@/lib/whatsapp';
import JsonLd from '@/app/(components)/JsonLd';
import { COMPANY_NAME, SITE_DOMAIN, pageAlternates, pageSocial, siteJsonLd } from '@/lib/seo';
import { allKeywords } from '@/lib/seoKeywords';

const rubik = Rubik({
  variable: '--font-rubik-sans',
  subsets: ['latin', 'arabic'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// ---------------------------
// SEO bundle
// ---------------------------
// COMPANY_NAME / SITE_DOMAIN live in lib/seo.js (set NEXT_PUBLIC_SITE_URL to your real domain);
// keyword sets live in lib/seoKeywords.js; the Google Search Console token is read from
// NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION (see the end of this file's metadata block).
export { COMPANY_NAME, SITE_DOMAIN };

// ---------------------------
// Viewport configuration
// ---------------------------
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#01061a',
};

// ---------------------------
// Next.js metadata export (app dir)
// ---------------------------
// Language-aware: title/description come from dictionaries/*.json -> "meta". Pages override
// title/description/alternates/openGraph with their own generateMetadata.
export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const m = (await getDictionary(lang)).meta;
  const fullTitle = `${COMPANY_NAME} | ${m.title}`;
  const verification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const bing = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

  return {
    metadataBase: new URL(SITE_DOMAIN),
    applicationName: COMPANY_NAME,
    title: { default: fullTitle, template: `%s | ${COMPANY_NAME}` },
    description: m.description,
    keywords: allKeywords(lang),
    authors: [{ name: `${COMPANY_NAME} Team`, url: SITE_DOMAIN }],
    creator: COMPANY_NAME,
    publisher: COMPANY_NAME,
    category: 'technology',
    formatDetection: { telephone: false, email: false, address: false },
    alternates: pageAlternates(lang, '/'),
    ...pageSocial(lang, '/', { title: fullTitle, description: m.description }),
    icons: { ...siteIcons, other: [{ rel: 'manifest', url: '/site.webmanifest' }] },
    manifest: '/site.webmanifest',
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    },
    // Only emitted when the token exists, so no placeholder text ever ships.
    ...(verification || bing
      ? { verification: { ...(verification ? { google: verification } : {}), ...(bing ? { other: { 'msvalidate.01': bing } } : {}) } }
      : {}),
  };
}

const FB_PIXEL_ID = '891356743903601';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ---------------------------
// RootLayout component
// ---------------------------
export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dictionary = await getDictionary(lang);

  return (
    <html lang={lang} dir={dirOf(lang)} data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Apply the saved theme before first paint (dark is the default) */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')==='light'){document.documentElement.setAttribute('data-theme','light');var m=document.querySelector('meta[name=theme-color]');if(m)m.setAttribute('content','#f5f8ff')}}catch(e){}",
          }}
        />
        <link rel="icon" type="image/png" href={LOGO_ICON} />
        <meta name="facebook-domain-verification" content="d13bgz1ob2fbw3y3hv32ufn6o2p7ec" />

        {/* Meta Pixel Script */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Meta Pixel noscript fallback (for users with JavaScript disabled) */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt="facebook pixel"
          />
        </noscript>
      </head>

      <body className={`${rubik.className} ${geistMono.variable} antialiased bg-brand-bg text-ink`}>
        <JsonLd data={siteJsonLd(lang, { logo: logoUrl(512), description: dictionary.meta.description })} />
        <LocaleProvider lang={lang} dictionary={dictionary}>
          <ThemeSync />
          <MotionEffects />
          <SmoothScroll />
          <PageTransition />
          <Navbar />
          {children}
          <Footer />
        </LocaleProvider>

        {/* ── WhatsApp Floating Button ── */}
          <a
          href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 start-2 md:start-6 z-50 flex items-center justify-center rounded-full shadow-glow bg-[#25D366] hover:bg-[#1ebe5d] hover:scale-110 transition-all duration-300 w-14 h-14 md:w-20 md:h-20"
            aria-label={dictionary.common.whatsapp}
          >
          <svg viewBox="0 0 32 32" className="w-9 h-9 md:w-14 md:h-14 fill-white">
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.647 4.83 1.78 6.86L2 30l7.34-1.74A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.83-1.594l-.418-.248-4.332 1.028 1.054-4.228-.272-.434A11.47 11.47 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.29-8.61c-.344-.172-2.036-1.004-2.352-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.402.258-.746.086-.344-.172-1.452-.536-2.766-1.708-1.022-.912-1.712-2.038-1.912-2.382-.2-.344-.022-.53.15-.702.155-.154.344-.402.516-.603.172-.2.23-.344.344-.574.115-.23.058-.431-.028-.603-.086-.172-.776-1.87-1.064-2.56-.28-.672-.564-.58-.776-.59l-.66-.012c-.23 0-.603.086-.918.431-.316.344-1.204 1.176-1.204 2.868s1.232 3.326 1.404 3.556c.172.23 2.424 3.7 5.872 5.19.82.354 1.46.566 1.958.724.823.262 1.572.225 2.164.137.66-.099 2.036-.832 2.322-1.636.287-.804.287-1.492.2-1.636-.085-.143-.315-.23-.659-.402z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
