'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronRight, ChevronLeft, X, Eye, ExternalLink, ArrowUpRight } from 'lucide-react';
import {
  FILTERS, typeLabel, withFullShot,
  sliderProjects, regularProjects, tourismProjects, educationProjects, storeProjects, restaurantProjects,
} from './projectsData';
import CircuitBolts from '../CircuitBolts';
import { ScrollImage, FRAME_HEIGHT } from './ScrollImage';
import { useI18n } from '../LocaleProvider';
import { ctaMessage, whatsappLink } from '@/lib/whatsapp';

const INITIAL_COUNT = 9; // projects shown first
const LOAD_STEP = 6;     // projects added by each "Show More" click

/* ───────────────────────────────────────────────
   Image Slider Modal Component
─────────────────────────────────────────────── */
const ImageSliderModal = ({ images, title, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const goLeft = useCallback(
    (e) => {
      e?.stopPropagation();
      setIsLoading(true);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    },
    [images.length],
  );

  const goRight = useCallback(
    (e) => {
      e?.stopPropagation();
      setIsLoading(true);
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    },
    [images.length],
  );

  useEffect(() => {
    if (!isOpen) {
      setCurrentIndex(0);
      return;
    }
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') goLeft();
      if (e.key === 'ArrowRight') goRight();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, goLeft, goRight, onClose]);

  if (!isOpen) return null;

  const reversedImages = [...images].reverse();
  const reversedIndex = images.length - 1 - currentIndex;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-1 sm:px-4"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        className="relative w-full max-w-6xl bg-brand-card rounded-xl sm:rounded-2xl overflow-hidden shadow-glow"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-brand-alt border-b border-brand-line/70">
          <h3 className="text-xs sm:text-base font-semibold text-ink truncate max-w-[75%] text-left">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-1 sm:p-1.5 rounded-full hover:bg-brand-card2 transition-colors text-gray-400 hover:text-ink flex-shrink-0"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Image Area */}
        <div
          className="relative bg-brand-bg flex items-center justify-center"
          style={{ height: 'clamp(320px, 80vw, 520px)' }}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-brand-bg z-10">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin" />
                <span className="text-gray-400 text-xs sm:text-sm">Loading...</span>
              </div>
            </div>
          )}
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setIsLoading(false)}
          />

          {/* Arrows over the image */}
          <button
            onClick={goLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-brand-card/80 hover:bg-brand-card2 border border-brand-blue/50 text-ink hover:text-brand-cyan rounded-full p-1.5 sm:p-3 shadow-glow transition-colors"
          >
            <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>
          <button
            onClick={goRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-brand-card/80 hover:bg-brand-card2 border border-brand-blue/50 text-ink hover:text-brand-cyan rounded-full p-1.5 sm:p-3 shadow-glow transition-colors"
          >
            <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 bg-brand-alt flex-wrap px-4">
          {reversedImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(images.length - 1 - i)}
              className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all duration-300 ${
                i === reversedIndex ? 'bg-brand-blue' : 'bg-brand-line hover:bg-brand-blue'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/* ───────────────────────────────────────────────
   Card navigation + visit arrow
─────────────────────────────────────────────── */
// Clicking anywhere on a card opens that project's detail page.
// (Inner links/buttons call stopPropagation so they keep their own action.)
const useCardNav = (slug) => {
  const router = useRouter();
  const href = `/lastprojects/${slug}`;
  const onClick = (e) => {
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey) { window.open(href, '_blank'); return; }
    router.push(href);
  };
  return { href, onClick };
};

const CARD_CLASS =
  'group bg-brand-card rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-300 border border-brand-line/70 hover:border-brand-cyan flex flex-col h-full cursor-pointer';

// Small arrow in the bottom-right corner of the image: opens the live website itself.
const VisitArrow = ({ project }) => (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    aria-label={`Open ${project.title} website`}
    title="Open website"
    className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 z-10 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-glow hover:from-brand-sky hover:to-brand-cyan hover:scale-110 transition-all"
  >
    <ArrowUpRight className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
  </a>
);

/* ───────────────────────────────────────────────
   Image Slider Project Card Component
─────────────────────────────────────────────── */
const SliderProjectCard = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { href, onClick } = useCardNav(project.slug);

  return (
    <>
      <div onClick={onClick} className={CARD_CLASS}>
        <ScrollImage
          src={project.images[0]}
          alt={project.title || 'Project image'}
        >
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-brand-blue text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <span>📷</span>
            <span>{project.images.length} photos</span>
          </div>
        </ScrollImage>

        <div className="p-3 sm:p-4 lg:p-6 flex flex-col flex-1">
          <div className="text-xs sm:text-sm text-brand-cyan font-semibold mb-1.5 sm:mb-2">
            {typeLabel(project)}
          </div>
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-ink group-hover:text-brand-cyan transition-colors leading-snug line-clamp-1">
            <Link href={href} onClick={(e) => e.stopPropagation()}>{project.title}</Link>
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3 flex-1">
            {project.description}
          </p>
          <button
            onClick={(e) => { e.stopPropagation(); setModalOpen(true); }}
            className="flex items-center gap-1.5 sm:gap-2 text-brand-cyan font-medium hover:text-brand-cyan transition-colors text-xs sm:text-sm self-start"
          >
            <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            View Photos
          </button>
        </div>
      </div>

      <ImageSliderModal
        images={project.images}
        title={project.title}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

/* ───────────────────────────────────────────────
   Regular Project Card Component
─────────────────────────────────────────────── */
const RegularProjectCard = ({ project }) => {
  const { href, onClick } = useCardNav(project.slug);

  return (
    <div onClick={onClick} className={CARD_CLASS}>
      <div className="relative">
        {!project.image ? (
          <div className={`flex items-center justify-center ${FRAME_HEIGHT} bg-gradient-to-br from-brand-blue via-brand-sky to-brand-cyan text-white text-center px-4 text-lg font-bold`}>
            {project.title}
          </div>
        ) : project.fullImage ? (
          <div className={`relative overflow-hidden bg-brand-bg ${FRAME_HEIGHT}`}>
            <img
              src={project.image}
              alt={project.title || 'Project image'}
              className="block w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
        ) : (
          <ScrollImage
            src={project.image}
            fallback={project.fallbackImage}
            alt={project.title || 'Project image'}
          />
        )}
        {project.link && <VisitArrow project={project} />}
      </div>

      <div className="p-3 sm:p-4 lg:p-6 flex flex-col flex-1">
        <div className="text-xs sm:text-sm text-brand-cyan font-semibold mb-1.5 sm:mb-2">
          {typeLabel(project)}
        </div>
        <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-ink group-hover:text-brand-cyan transition-colors leading-snug line-clamp-1">
          <Link href={href} onClick={(e) => e.stopPropagation()}>{project.title}</Link>
        </h3>
        <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 sm:gap-2 text-brand-cyan font-medium group-hover:text-brand-cyan transition-colors text-xs sm:text-sm self-start"
        >
          <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          View Website
        </a>
      </div>
    </div>
  );
};

/* ───────────────────────────────────────────────
   Combined list, shuffled once with a fixed seed.
   A seeded shuffle gives a mixed order that is identical on the server and the
   client (no hydration mismatch) and stays the same between visits.
   Change SHUFFLE_SEED to get a different mix.
─────────────────────────────────────────────── */
const SHUFFLE_SEED = 20261105;

const seededShuffle = (items, seed) => {
  const arr = [...items];
  let a = seed >>> 0;
  const rand = () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// the recently re-categorised projects (original relative order)
const addedProjects = [
  ...regularProjects.slice(0, 7).map((project) => ({ type: 'regular', project: withFullShot(project) })),
  ...sliderProjects.map((project) => ({ type: 'slider', project })),
  ...regularProjects.slice(7).map((project) => ({ type: 'regular', project: withFullShot(project) })),
];
// the rest, in their original order
const baseProjects = [
  ...tourismProjects.map((project) => ({ type: 'regular', project: withFullShot(project) })),
  ...educationProjects.map((project) => ({ type: 'regular', project: withFullShot(project) })),
  ...storeProjects.map((project) => ({ type: 'regular', project: withFullShot(project) })),
  ...restaurantProjects.map((project) => ({ type: 'regular', project: withFullShot(project) })),
];

// "All": everything mixed (seeded shuffle)
const LAST_IN_ALL = 'https://bazardoha.vercel.app/'; // DOHA Bazaar: always the very last one in "All"
const shuffled = seededShuffle([...addedProjects, ...baseProjects], SHUFFLE_SEED);
const allProjects = [
  ...shuffled.filter(({ project }) => project.link !== LAST_IN_ALL),
  ...shuffled.filter(({ project }) => project.link === LAST_IN_ALL),
];
// A specific filter: the original projects first (original order), the added ones at the very end
const orderedProjects = [...baseProjects, ...addedProjects];

/* ───────────────────────────────────────────────
   Main Portfolio Section
─────────────────────────────────────────────── */
const PortfolioSection = ({
  title = 'Web Development Projects',
  showCtaButton = true,
  showFilter = false,
}) => {
  const { dictionary } = useI18n();
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  // /lastprojects?filter=restaurants#portfolio opens with that category pre-selected
  useEffect(() => {
    if (!showFilter) return;
    const wanted = new URLSearchParams(window.location.search).get('filter');
    if (wanted && FILTERS.some((f) => f.id === wanted)) setActiveFilter(wanted);
  }, [showFilter]);

  const visibleProjects =
    showFilter && activeFilter !== 'all'
      ? orderedProjects.filter(({ project }) => project.filter === activeFilter)
      : allProjects;

  const shownProjects = visibleProjects.slice(0, visibleCount);
  const hasMore = visibleCount < visibleProjects.length;

  const activeLabel = FILTERS.find((f) => f.id === activeFilter)?.label;

  return (
    <section id="portfolio" className="relative overflow-hidden py-8 sm:py-12 lg:py-20 bg-brand-bg">
      <CircuitBolts speed={0.5} scale={0.6} />
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-ink px-2">
            {title.includes('Web Development Projects') ? (
              <>
                Some of <span className="text-brand-cyan">Our Previous Work</span>
              </>
            ) : (
              title
            )}
          </h2>
          <p className="text-xs sm:text-base lg:text-xl text-gray-300 max-w-4xl mx-auto px-4">
            Here we present a collection of our web development work, where we
            focused on delivering advanced, fast, and secure web solutions
            that meet our clients' diverse needs.
          </p>
        </div>

        {/* Filter chips */}
        {showFilter && (
          <div
            className="flex flex-nowrap sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 overflow-x-auto pb-2 -mx-3 px-3 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {FILTERS.map(({ id, label }) => {
              const isActive = activeFilter === id;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => { setActiveFilter(id); setVisibleCount(INITIAL_COUNT); }}
                  className={`whitespace-nowrap shrink-0 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium border transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white border-transparent shadow-glow'
                      : 'bg-brand-bg text-gray-200 border-brand-line hover:border-brand-cyan hover:text-brand-cyan'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        )}

        {visibleProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            {shownProjects.map(({ type, project }, index) =>
              type === 'slider' ? (
                <SliderProjectCard key={`slider-${project.title}`} project={project} />
              ) : (
                <RegularProjectCard key={`regular-${project.link}-${index}`} project={project} />
              )
            )}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 mb-8 sm:mb-12 bg-brand-card rounded-2xl border border-dashed border-brand-line">
            <p className="text-base sm:text-lg font-semibold text-gray-200 mb-1">
              No {activeLabel} projects yet
            </p>
            <p className="text-xs sm:text-sm text-gray-400">
              New projects in this category are coming soon.
            </p>
          </div>
        )}

        {hasMore && (
          <div className="text-center mb-8 sm:mb-12 px-4">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + LOAD_STEP)}
              className="inline-flex items-center gap-2 border border-brand-cyan text-brand-cyan hover:bg-brand-cyan/10 hover:shadow-glow px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all text-sm sm:text-base"
            >
              Show More
            </button>
          </div>
        )}

        {showCtaButton && (
          <div className="text-center mb-8 sm:mb-16 px-4">
            <a
              href={whatsappLink(ctaMessage(dictionary))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-5 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-brand-sky hover:to-brand-cyan transition-all transform hover:scale-105 text-sm sm:text-base"
            >
              Contact Us for Your Next Project
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;