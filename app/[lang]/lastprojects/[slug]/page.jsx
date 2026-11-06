// app/lastprojects/[slug]/page.jsx — detail page of one previous-work project
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Tag, Globe } from 'lucide-react';
import { everyProject, getProjectBySlug, typeLabel, filterLabel, projectDescription, withFullShot, isStaticShot, FILTERS } from '@/app/(components)/(realComponents)/projectsData';
import ProjectShot from './ProjectShot';
import ProjectGallery from './ProjectGallery';
import RelatedCard from './RelatedCard';
import { getDictionary } from '@/lib/dictionaries';
import { similarProjectMessage, fillTemplate, whatsappLink } from '@/lib/whatsapp';
import { localePath } from '@/lib/i18n';

const COMPANY_NAME = 'CodeLegacy';
const SITE_DOMAIN = 'https://codelegacy.tech';

export const dynamicParams = false; // only the known projects exist

export function generateStaticParams() {
  return everyProject.map(({ slug }) => ({ slug }));
}

const hostOf = (url) => {
  try { return new URL(url).host.replace(/^www\./, ''); } catch { return ''; }
};

export async function generateMetadata({ params }) {
  const { slug, lang } = await params;
  const dictionary = await getDictionary(lang);
  const project = getProjectBySlug(slug);
  if (!project) return { title: dictionary.projectDetail.notFound };

  const label = typeLabel(project, dictionary);
  const full = projectDescription(project, dictionary);
  const description = full.length > 160 ? `${full.slice(0, 157).trimEnd()}...` : full;
  const ogImage = project.fallbackImage || project.image || project.images?.[0];
  const url = `${SITE_DOMAIN}${localePath(lang, `/lastprojects/${project.slug}`)}`;

  return {
    title: `${project.title} — ${label}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} — ${label} | ${COMPANY_NAME}`,
      description,
      url,
      type: 'article',
      locale: lang === 'ar' ? 'ar_EG' : 'en_US',
      ...(ogImage ? { images: [{ url: ogImage, alt: project.title }] } : {}),
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug, lang } = await params;
  const dictionary = await getDictionary(lang);
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const d = dictionary.projectDetail;
  const href = (path) => localePath(lang, path);
  const label = typeLabel(project, dictionary);
  const host = project.link ? hostOf(project.link) : '';
  const hasGallery = Array.isArray(project.images) && project.images.length > 0;
  const related = everyProject
    .filter((p) => p.slug !== project.slug && p.filter === project.filter && !p.hideFromRelated)
    .slice(0, 3)
    .map(withFullShot);
  const currentFilter = FILTERS.find((f) => f.id === project.filter);
  const categoryLabel = currentFilter ? filterLabel(currentFilter, dictionary) : '';

  const chatUrl = whatsappLink(similarProjectMessage(dictionary, project.title));

  return (
    <div className="min-h-screen bg-brand-bg text-ink">
      {/* Preview */}
      <section className="pt-28 sm:pt-32 pb-8 sm:pb-12">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
          {project.link && project.image ? (
            <ProjectShot
              src={project.image}
              fallback={project.fallbackImage}
              alt={fillTemplate(d.previewAlt, { title: project.title })}
              host={host}
              visitUrl={project.link}
              staticImage={isStaticShot(project)}
            />
          ) : hasGallery ? (
            <ProjectGallery images={project.images} title={project.title} />
          ) : null}
        </div>
      </section>

      {/* Details */}
      <section className="pb-10 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="md:col-span-2">
            <Link
              href={href('/lastprojects#portfolio')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-300 hover:text-brand-cyan transition-colors mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" />
              {d.back}
            </Link>

            <div className="block w-fit rounded-full border border-brand-cyan/40 bg-brand-blue/10 px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold text-brand-cyan mb-2 sm:mb-3">
              {label}
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-2 sm:mb-3">
              {project.title}
            </h1>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{projectDescription(project, dictionary)}</p>

            <a
              href={chatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 sm:mt-5 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue to-brand-cyan px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-semibold text-white shadow-glow hover:from-brand-sky hover:to-brand-cyan transition-all transform hover:scale-105"
            >
              {d.similar}
            </a>

            {project.tech?.length > 0 && (
              <div className="mt-6 sm:mt-8">
                <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold mb-3">
                  <Tag className="w-4 h-4 text-brand-cyan" />
                  {d.technologies}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-full border border-brand-line bg-brand-card px-3 py-1 text-xs sm:text-sm text-gray-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="rounded-xl sm:rounded-2xl border border-brand-line/70 bg-brand-card p-4 sm:p-6 h-fit">
            <h3 className="text-base sm:text-lg font-semibold mb-4">{d.info}</h3>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-gray-400">{d.type}</dt>
                <dd className="font-medium text-ink">{label}</dd>
              </div>
              {host && (
                <div>
                  <dt className="text-gray-400">{d.website}</dt>
                  <dd className="font-medium text-brand-cyan break-all">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:underline">
                      <Globe className="w-3.5 h-3.5" />
                      {host}
                    </a>
                  </dd>
                </div>
              )}
              {hasGallery && !project.link && (
                <div>
                  <dt className="text-gray-400">{d.photos}</dt>
                  <dd className="font-medium text-ink">{project.images.length}</dd>
                </div>
              )}
            </dl>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="pb-10 sm:pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">
              {d.moreBefore} <span className="text-brand-cyan">{label}</span> {d.moreAfter}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {related.map((p) => (
                <RelatedCard
                  key={p.slug}
                  href={href(`/lastprojects/${p.slug}`)}
                  title={p.title}
                  label={typeLabel(p, dictionary)}
                  description={projectDescription(p, dictionary)}
                  image={p.link ? p.image : p.images?.[0]}
                  staticImage={isStaticShot(p)}
                  fallback={p.fallbackImage}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="pb-16 sm:pb-24 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          {categoryLabel && project.filter && (
            <Link
              href={href(`/lastprojects?filter=${project.filter}#portfolio`)}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue to-brand-cyan px-6 sm:px-8 py-3 rounded-full font-semibold hover:from-brand-sky hover:to-brand-cyan transition-all transform hover:scale-105 shadow-glow w-full sm:w-auto"
            >
              {fillTemplate(d.seeAll, { category: categoryLabel })}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          )}
          <Link
            href={href('/lastprojects#portfolio')}
            className="inline-flex items-center justify-center gap-2 border border-brand-cyan text-brand-cyan hover:bg-brand-cyan/10 hover:shadow-glow px-6 sm:px-8 py-3 rounded-full font-semibold transition-all w-full sm:w-auto"
          >
            {d.allProjects}
          </Link>
        </div>
      </section>
    </div>
  );
}
