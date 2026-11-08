// app/page.js  (Homepage)
import React from 'react';
import {
  Globe,
  Smartphone,
  Palette,
  Search,
  Shield,
  Users,
} from 'lucide-react';
import SendEmail from '@/app/(components)/(realComponents)/SendEmail';
import Tech from '@/app/(components)/(realComponents)/tech';
import CodeLegacyClient from './_client';
import { servicesData } from '@/app/(components)/(realComponents)/ServiceData';
import { getDictionary } from '@/lib/dictionaries';
// ─────────────────────────────────────────────────────────────────────────────
// Metadata (site-wide JSON-LD for the organization / website lives in app/[lang]/layout.jsx)
// ─────────────────────────────────────────────────────────────────────────────
import { pageAlternates, pageSocial } from '@/lib/seo';
import { keywordsFor } from '@/lib/seoKeywords';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const m = (await getDictionary(lang)).home.meta;
  return {
    title: m.title,
    description: m.description,
    keywords: keywordsFor(lang, 'home'),
    alternates: pageAlternates(lang, '/'),
    ...pageSocial(lang, '/', { title: m.ogTitle, description: m.ogDescription }),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Data specific to the homepage only
// ─────────────────────────────────────────────────────────────────────────────
// Only the non-text parts live here (avatars, ratings, icons). The texts come from
// dictionaries/*.json -> home.testimonials.items / home.benefits.items, matched by index.
const testimonials = [
  { avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', rating: 5 },
  { avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', rating: 5 },
  { avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', rating: 5 },
];

const webServices = [
  { icon: <Globe className="w-8 h-8" /> },
  { icon: <Smartphone className="w-8 h-8" /> },
  { icon: <Palette className="w-8 h-8" /> },
  { icon: <Search className="w-8 h-8" /> },
  { icon: <Shield className="w-8 h-8" /> },
  { icon: <Users className="w-8 h-8" /> },
];

// ─────────────────────────────────────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────────────────────────────────────
const CodeLegacyHomepage = () => {
  return (
    <div className="min-h-screen">
      <CodeLegacyClient
        services={servicesData}        // ← from the shared data file (first 9 services)
        testimonials={testimonials}
        webServices={webServices}
      />
      <Tech />
      <SendEmail />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
    </div>
  );
};

export default CodeLegacyHomepage;