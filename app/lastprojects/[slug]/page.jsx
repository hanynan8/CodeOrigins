// app/lastprojects/[slug]/page.jsx — detail page of one previous-work project
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, ArrowRight, Tag, Globe } from 'lucide-react';
import { everyProject, getProjectBySlug, typeLabel, withFullShot, FILTERS } from '../../(components)/(realComponents)/projectsData';
import ProjectShot from './ProjectShot';
import ProjectGallery from './ProjectGallery';
import RelatedCard from './RelatedCard';

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
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project not found' };

  const label = typeLabel(project);
  const description = project.description.length > 160 ? `${project.description.slice(0, 157).trimEnd()}...` : project.description;
  const ogImage = project.fallbackImage || project.image || project.images?.[0];
  const url = `${SITE_DOMAIN}/lastprojects/${project.slug}`;

  return {
    title: `${project.title} — ${label}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} — ${label} | ${COMPANY_NAME}`,
      description,
      url,
      type: 'article',
      ...(ogImage ? { images: [{ url: ogImage, alt: project.title }] } : {}),
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const label = typeLabel(project);
  const host = project.link ? hostOf(project.link) : '';
  // static hero screenshot of the project (original image, not the tall full-page shot)
  const heroImage = project.fallbackImage || project.image || project.images?.[0];
  const hasGallery = Array.isArray(project.images) && project.images.length > 0;
  const related = everyProject
    .filter((p) => p.slug !== project.slug && p.filter === project.filter)
    .slice(0, 3)
    .map(withFullShot);
  const filterLabel = FILTERS.find((f) => f.id === project.filter)?.label;

  const chatUrl = `https://wa.me/201213819102?text=${encodeURIComponent(
    `Hello!\n\nI saw your project "${project.title}" and I'd like a similar website.\n\nCould you tell me about the pricing and available packages?`
  )}`;

  return (
    <div className="min-h-screen bg-brand-bg text-white">
      {/* Header */}
      <section className="relative circuit-bg pt-28 sm:pt-32 pb-10 sm:pb-14 overflow-hidden">
        {heroImage && (
          <>
            {/* the project's own hero screenshot as a static background */}
            <img
              src={heroImage}
              alt=""
              aria-hidden="true"
              fetchPriority="high"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
            />
            {/* dark overlay keeps the text readable and fades into the page below */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-brand-bg/75 to-brand-bg"
            />
          </>
        )}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/lastprojects#portfolio"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-brand-cyan transition-colors mb-6 sm:mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Our Work
          </Link>

          <div className="inline-block rounded-full border border-brand-cyan/40 bg-brand-blue/10 px-3 py-1 text-xs sm:text-sm font-semibold text-brand-cyan mb-3 sm:mb-4">
            {label}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl leading-relaxed">
            {project.description}
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue to-brand-cyan px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-brand-sky hover:to-brand-cyan transition-all transform hover:scale-105 shadow-glow"
              >
                Visit Website
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}
            <a
              href={chatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              I Want a Similar Website
            </a>
          </div>
        </div>
      </section>

      {/* Preview */}
      <section className="py-8 sm:py-12">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
          {project.link && project.image ? (
            <ProjectShot
              src={project.image}
              fallback={project.fallbackImage}
              alt={`${project.title} website preview`}
              host={host}
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
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              About this <span className="text-brand-cyan">project</span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{project.description}</p>

            {project.tech?.length > 0 && (
              <div className="mt-6 sm:mt-8">
                <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold mb-3">
                  <Tag className="w-4 h-4 text-brand-cyan" />
                  Technologies
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
            <h3 className="text-base sm:text-lg font-semibold mb-4">Project info</h3>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-gray-400">Type</dt>
                <dd className="font-medium text-white">{label}</dd>
              </div>
              {host && (
                <div>
                  <dt className="text-gray-400">Website</dt>
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
                  <dt className="text-gray-400">Photos</dt>
                  <dd className="font-medium text-white">{project.images.length}</dd>
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
              More <span className="text-brand-cyan">{label}</span> work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {related.map((p) => (
                <RelatedCard
                  key={p.slug}
                  href={`/lastprojects/${p.slug}`}
                  title={p.title}
                  label={typeLabel(p)}
                  description={p.description}
                  image={p.link ? p.image : p.images?.[0]}
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
          {filterLabel && project.filter && (
            <Link
              href={`/lastprojects?filter=${project.filter}#portfolio`}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue to-brand-cyan px-6 sm:px-8 py-3 rounded-full font-semibold hover:from-brand-sky hover:to-brand-cyan transition-all transform hover:scale-105 shadow-glow w-full sm:w-auto"
            >
              See All {filterLabel}
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
          <Link
            href="/lastprojects#portfolio"
            className="inline-flex items-center justify-center gap-2 border border-brand-cyan text-brand-cyan hover:bg-brand-cyan/10 hover:shadow-glow px-6 sm:px-8 py-3 rounded-full font-semibold transition-all w-full sm:w-auto"
          >
            All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
