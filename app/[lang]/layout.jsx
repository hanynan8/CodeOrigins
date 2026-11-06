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
import { COMPANY_NAME, SITE_DOMAIN, OG_LOCALE, pageAlternates } from '@/lib/seo';

const rubik = Rubik({
  variable: '--font-rubik-sans',
  subsets: ['latin', 'arabic'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ---------------------------
// SEO / Keywords bundle
// ---------------------------
// Change COMPANY_NAME and SITE_DOMAIN according to your project
// (defined once in lib/seo.js so every page, the sitemap and robots use the same values)
export { COMPANY_NAME, SITE_DOMAIN };

export const seoKeywords = {
  primary: [
    'web development company', 'website development', 'website design', 'software company egypt', 'web development services', 'web app development', 'user interface design', 'UI UX design', 'online store', 'ecommerce store development',
    'web development company', 'web app development', 'website design company', 'software company', 'saas development company'
  ],
  technical: [
    'Next.js development', 'Next.js development', 'React developer', 'React developer', 'Node.js development', 'TypeScript developer', 'typescript development', 'Headless CMS', 'headless ecommerce', 'PWA development', 'Progressive Web App', 'serverless architecture', 'Docker deployment', 'Kubernetes deployment', 'microservices architecture', 'graphql api', 'REST API development', 'websocket real-time', 'socket.io development', 'performance optimization', 'core web vitals optimization', 'technical seo'
  ],
  commercial: [
    'website design pricing', 'website design cost in egypt', 'ecommerce store cost 2025', 'hire web developer egypt', 'hire next.js developer', 'best web development company egypt', 'affordable ecommerce development', 'web development cost estimate', 'web development consultation', 'website development plan'
  ],
  local: [
    'web development company in cairo', 'web development company in egypt', 'web development cairo', 'web developer cairo', 'website developer cairo', 'website design in cairo', 'seo services egypt', 'digital agency cairo', 'web design agency egypt'
  ],
  longTail: [
    'how much does an ecommerce store cost in egypt 2025', 'how to choose a web development company in cairo', 'guide to building a woocommerce store with a local payment gateway', 'building a saas mvp step by step', 'Next.js vs React for dynamic websites', 'how to improve LCP on a wordpress site', 'integrating fawry payment gateway with woocommerce', 'how to choose fast hosting for your website', 'how to improve ux for an ecommerce store', 'security audit for small business web applications', 'best practices for SEO on Next.js', 'how to migrate to headless cms', 'how to build pwa for ecommerce', 'guide to scaling web apps on aws', 'cost to build saas in egypt'
  ],
  industry: [
    'real estate website development egypt', 'hotel booking system', 'lms development platform', 'ecommerce solutions for brands', 'custom crm development', 'enterprise web app development', 'hospitality software solutions', 'ecommerce for fashion brands', 'marketplace development'
  ],
  securityInfra: [
    'web application security', 'penetration testing', 'web application penetration testing', 'sre site reliability engineering', 'cloud migration aws', 'gcp cloud migration', 'azure devops services', 'ci cd pipeline', 'continuous integration', 'monitoring and observability'
  ],
  marketingContent: [
    'content marketing for saas', 'seo for ecommerce egypt', 'local seo services cairo', 'social media for startups', 'growth hacking for startups', 'product-led growth', 'conversion rate optimization', 'email marketing for ecommerce'
  ],
  all: [] // will be filled below by concatenation
};

// Build aggregated list (seoKeywords.all) from categories (useful for metadata.keywords)
seoKeywords.all = [
  ...seoKeywords.primary,
  ...seoKeywords.technical,
  ...seoKeywords.commercial,
  ...seoKeywords.local,
  ...seoKeywords.longTail,
  ...seoKeywords.industry,
  ...seoKeywords.securityInfra,
  ...seoKeywords.marketingContent
];

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
const baseMetadata = {
  title: {
    default: `${COMPANY_NAME} | Integrated Web Development & Software Solutions`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    'A company specialized in developing websites and web applications, SaaS, ecommerce stores, attractive user interfaces, performance optimization, and cloud infrastructure setup.',
  keywords: seoKeywords.all,
  authors: [{ name: `${COMPANY_NAME} Team`, url: SITE_DOMAIN }],
  metadataBase: new URL(SITE_DOMAIN),
  openGraph: {
    title: `${COMPANY_NAME} — Integrated Web Development & Software Solutions`,
    description: 'Website development, ecommerce stores, SaaS applications, cloud solutions.',
    url: SITE_DOMAIN,
    siteName: COMPANY_NAME,
    images: [
      {
        url: 'https://raw.githubusercontent.com/hanynan8/forImages/refs/heads/main/Screenshot%20(791).png',
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} — Web & Software Development`
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  icons: {
    ...siteIcons,
    other: [{ rel: 'manifest', url: '/site.webmanifest' }]
  },
  manifest: '/site.webmanifest',
  robots: 'index, follow',
  verification: {
    google: 'GOOGLE_SITE_VERIFICATION_TOKEN'
  },
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_NAME,
    url: SITE_DOMAIN,
    logo: logoUrl(512),
    sameAs: [
      `${SITE_DOMAIN}/facebook`,
      `${SITE_DOMAIN}/twitter`,
      `${SITE_DOMAIN}/linkedin`
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+20-100-000-0000',
        contactType: 'customer support',
        areaServed: 'EG'
      }
    ]
  }
};

// Language-aware metadata: title/description/openGraph come from dictionaries/*.json -> "meta".
// Pages override title/description/alternates with their own generateMetadata.
export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const m = (await getDictionary(lang)).meta;
  return {
    ...baseMetadata,
    title: {
      default: `${COMPANY_NAME} | ${m.title}`,
      template: `%s | ${COMPANY_NAME}`,
    },
    description: m.description,
    alternates: pageAlternates(lang, '/'),
    openGraph: {
      ...baseMetadata.openGraph,
      title: `${COMPANY_NAME} — ${m.title}`,
      description: m.description,
      url: `${SITE_DOMAIN}/${lang}`,
      locale: OG_LOCALE[lang],
    },
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

// ---------------------------
// TODO / Notes:
// - Place the code icon (SVG) at: public/icons/code.svg
// - Place OG/twitter images in public (og-image.jpg, twitter-card.jpg)
// - If you want me to split seoKeywords into a separate file, let me know
// - If you use TypeScript, let me know and I'll set it up