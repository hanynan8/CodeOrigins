// app/[lang]/blog/page.jsx  - blog index
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import JsonLd from '@/app/(components)/JsonLd';
import { isLocale, localePath } from '@/lib/i18n';
import { pageAlternates, pageSocial, breadcrumbJsonLd } from '@/lib/seo';
import { POSTS, BLOG_UI, formatPostDate } from '@/lib/blogPosts';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const ui = BLOG_UI[lang];
  return {
    title: ui.title,
    description: ui.description,
    alternates: pageAlternates(lang, '/blog'),
    ...pageSocial(lang, '/blog', { title: ui.title, description: ui.description }),
  };
}

export default async function BlogIndexPage({ params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const ui = BLOG_UI[lang];
  const href = (path) => localePath(lang, path);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(lang, [[ui.home, '/'], [ui.blog, '/blog']])} />
      <div className="min-h-screen bg-brand-bg text-ink">
        <section className="pt-28 sm:pt-32 pb-8 sm:pb-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3 sm:mb-4">{ui.h1}</h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">{ui.subtitle}</p>
          </div>
        </section>

        <section className="pb-16 sm:pb-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {POSTS.map((post) => {
              const c = post[lang];
              return (
                <article
                  key={post.slug}
                  className="rounded-xl sm:rounded-2xl border border-brand-line/70 bg-brand-card p-5 sm:p-6 flex flex-col"
                >
                  <time dateTime={post.date} className="text-xs text-gray-400 mb-2">
                    {formatPostDate(post.date, lang)}
                  </time>
                  <h2 className="text-lg sm:text-xl font-bold leading-snug mb-2">
                    <Link href={href(`/blog/${post.slug}`)} className="hover:text-brand-cyan transition-colors">
                      {c.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">{c.description}</p>
                  <Link
                    href={href(`/blog/${post.slug}`)}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan"
                  >
                    {ui.readMore}
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
