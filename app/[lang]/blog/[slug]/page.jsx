// app/[lang]/blog/[slug]/page.jsx  - a single article
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import JsonLd from '@/app/(components)/JsonLd';
import { LOCALES, isLocale, localePath } from '@/lib/i18n';
import { getDictionary } from '@/lib/dictionaries';
import { whatsappLink, inquiryMessage } from '@/lib/whatsapp';
import { pageAlternates, pageSocial, breadcrumbJsonLd, articleJsonLd } from '@/lib/seo';
import { POSTS, BLOG_UI, blogSlugs, findPost, formatPostDate } from '@/lib/blogPosts';

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => blogSlugs().map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};
  const post = findPost(slug);
  if (!post) return {};
  const c = post[lang];
  const path = `/blog/${post.slug}`;
  return {
    title: c.title,
    description: c.description,
    alternates: pageAlternates(lang, path),
    ...pageSocial(lang, path, { title: c.title, description: c.description, type: 'article' }),
  };
}

export default async function BlogPostPage({ params }) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();
  const post = findPost(slug);
  if (!post) notFound();

  const c = post[lang];
  const ui = BLOG_UI[lang];
  const href = (path) => localePath(lang, path);
  const path = `/blog/${post.slug}`;
  const dictionary = await getDictionary(lang);
  const chatUrl = whatsappLink(inquiryMessage(dictionary, lang));
  const more = POSTS.filter((p) => p.slug !== post.slug);

  const jsonLd = [
    breadcrumbJsonLd(lang, [
      [ui.home, '/'],
      [ui.blog, '/blog'],
      [c.title, path],
    ]),
    articleJsonLd(lang, { title: c.title, description: c.description, path, datePublished: post.date }),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-brand-bg text-ink">
        <article className="pt-28 sm:pt-32 pb-10 sm:pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={href('/blog')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-300 hover:text-brand-cyan transition-colors mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" />
              {ui.back}
            </Link>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3">{c.title}</h1>
            <p className="text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8">
              {ui.published}{' '}
              <time dateTime={post.date}>{formatPostDate(post.date, lang)}</time>
            </p>

            <div className="space-y-4 text-sm sm:text-base text-gray-200 leading-relaxed">
              {c.body.map((block, i) => {
                if (block.h) {
                  return (
                    <h2 key={i} className="text-xl sm:text-2xl font-bold text-ink pt-4">
                      {block.h}
                    </h2>
                  );
                }
                if (block.ul) {
                  return (
                    <ul key={i} className="list-disc ps-5 space-y-2">
                      {block.ul.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={i}>{block.p}</p>;
              })}
            </div>

            <div className="mt-10 sm:mt-14 rounded-xl sm:rounded-2xl border border-brand-line/70 bg-brand-card p-5 sm:p-8 text-center">
              <h2 className="text-lg sm:text-2xl font-bold mb-2">{ui.ctaTitle}</h2>
              <p className="text-sm sm:text-base text-gray-300 mb-5">{ui.ctaText}</p>
              <a
                href={chatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue to-brand-cyan px-6 py-2.5 rounded-full text-sm font-semibold text-white"
              >
                {ui.ctaButton}
              </a>
            </div>

            {more.length > 0 && (
              <div className="mt-10 sm:mt-14">
                <h2 className="text-lg sm:text-xl font-bold mb-4">{ui.more}</h2>
                <ul className="space-y-2">
                  {more.map((p) => (
                    <li key={p.slug}>
                      <Link href={href(`/blog/${p.slug}`)} className="text-brand-cyan hover:underline">
                        {p[lang].title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </article>
      </div>
    </>
  );
}
