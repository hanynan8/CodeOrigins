'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronRight, ChevronLeft, X, Eye, ExternalLink } from 'lucide-react';
import tourismProjects from './tourismProjects';
import educationProjects from './educationProjects';
import storeProjects from './storeProjects';
import restaurantProjects from './restaurantProjects';
import CircuitBolts from '../CircuitBolts';

// Label shown above each card title: the type of website (instead of the generic "Website")
const TYPE_LABELS = {
  ecommerce: 'E-commerce Store',
  restaurants: 'Restaurant',
  tourism: 'Tourism Website',
  education: 'Educational Platform',
  '3d': '3D Website',
  portfolio: 'Portfolio',
};
const typeLabel = (project) => TYPE_LABELS[project.filter] || project.category;

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
          <h3 className="text-xs sm:text-base font-semibold text-white truncate max-w-[75%] text-left">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-1 sm:p-1.5 rounded-full hover:bg-brand-card2 transition-colors text-gray-400 hover:text-white flex-shrink-0"
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
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-brand-card/80 hover:bg-brand-card2 border border-brand-blue/50 text-white hover:text-brand-cyan rounded-full p-1.5 sm:p-3 shadow-glow transition-colors"
          >
            <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>
          <button
            onClick={goRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-brand-card/80 hover:bg-brand-card2 border border-brand-blue/50 text-white hover:text-brand-cyan rounded-full p-1.5 sm:p-3 shadow-glow transition-colors"
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
   Scroll-on-hover image
   Fixed-height frame; the screenshot keeps its natural proportions and, on hover,
   scrolls inside the frame until its full length has been shown (and back on leave).
─────────────────────────────────────────────── */
const FRAME_HEIGHT = 'h-52 sm:h-60 lg:h-80'; // taller than before (was h-44 sm:h-52 lg:h-64)
const SCROLL_PX_PER_SEC = 160;               // scroll speed on hover

const ScrollImage = ({ src, alt, onClick, className = '', children }) => {
  const frame = useRef(null);
  const img = useRef(null);
  const [anim, setAnim] = useState({ shift: 0, seconds: 0.6 });

  const start = () => {
    if (!frame.current || !img.current) return;
    const distance = img.current.offsetHeight - frame.current.clientHeight;
    if (distance > 8) {
      setAnim({ shift: distance, seconds: Math.min(8, Math.max(1.5, distance / SCROLL_PX_PER_SEC)) });
    }
  };
  const stop = () => setAnim({ shift: 0, seconds: 0.6 });

  return (
    <div
      ref={frame}
      onClick={onClick}
      onMouseEnter={start}
      onMouseLeave={stop}
      className={`relative overflow-hidden ${FRAME_HEIGHT} bg-brand-bg ${className}`}
    >
      <img
        ref={img}
        src={src}
        alt={alt}
        loading="lazy"
        className="block w-full h-auto min-h-full object-cover object-top"
        style={{
          transform: `scaleX(1.05) translateY(-${anim.shift}px)`,
          transformOrigin: 'top',
          clipPath: 'inset(0 2.5% 0 2.5%)',
          transition: `transform ${anim.seconds}s ${anim.shift ? 'linear' : 'ease-out'}`,
        }}
      />
      {children}
    </div>
  );
};

/* ───────────────────────────────────────────────
   Slider Project Card Component
─────────────────────────────────────────────── */
const SliderProjectCard = ({ project }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="group bg-brand-card rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-300 border border-brand-line/70 hover:border-brand-cyan hover:scale-105">
        <ScrollImage
          src={project.images[0]}
          alt={project.title || 'Project image'}
          className="cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-brand-blue text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <span>📷</span>
            <span>{project.images.length} photos</span>
          </div>
        </ScrollImage>

        <div className="p-3 sm:p-4 lg:p-6">
          <div className="text-xs sm:text-sm text-brand-cyan font-semibold mb-1.5 sm:mb-2">
            {typeLabel(project)}
          </div>
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-white group-hover:text-brand-cyan transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
            {project.description}
          </p>
          {project.tech?.length > 0 && (
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-brand-blue/20 text-brand-cyan text-xs px-2 py-0.5 sm:py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-1.5 sm:gap-2 text-brand-cyan font-medium hover:text-brand-cyan transition-colors text-xs sm:text-sm"
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
const RegularProjectCard = ({ project }) => (
  <div className="group bg-brand-card rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-300 border border-brand-line/70 hover:border-brand-cyan hover:scale-105">
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      {!project.image ? (
        <div className="flex items-center justify-center aspect-video bg-gradient-to-br from-brand-blue via-brand-sky to-brand-cyan text-white text-center px-4 text-lg font-bold">
          {project.title}
        </div>
      ) : project.fullImage ? (
        <div className="relative overflow-hidden bg-brand-bg">
          <img
            src={project.image}
            alt={project.title || 'Project image'}
            className="block w-full h-auto"
            loading="lazy"
          />
        </div>
      ) : (
        <ScrollImage src={project.image} alt={project.title || 'Project image'} />
      )}
    </a>

    <div className="p-3 sm:p-4 lg:p-6">
      <div className="text-xs sm:text-sm text-brand-cyan font-semibold mb-1.5 sm:mb-2">
        {typeLabel(project)}
      </div>
      <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-white group-hover:text-brand-cyan transition-colors leading-snug">
        {project.title}
      </h3>
      <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
        {project.description}
      </p>
      {project.tech?.length > 0 && (
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-brand-blue/20 text-brand-cyan text-xs px-2 py-0.5 sm:py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 sm:gap-2 text-brand-cyan font-medium group-hover:text-brand-cyan transition-colors text-xs sm:text-sm"
      >
        <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        View Website
      </a>
    </div>
  </div>
);

/* ───────────────────────────────────────────────
   Data — Projects with IMAGE SLIDER
─────────────────────────────────────────────── */
const sliderProjects = [
  {
    title: 'Ecommerce Store for an Electronics Retailer — LapTech',
    category: 'Website',
    filter: 'ecommerce',
    description:
      'A fully integrated ecommerce store for showcasing and selling tech devices and accessories (capacity for 5,000+ products). Equipped with an advanced filtering system, precise search, and fast performance. Includes a free admin dashboard for the owner to easily manage products (add, edit, delete) and inventory.',
    tech: [],
    images: [
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(786).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(817).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(816).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(818).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(820).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(822).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(825).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(827).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(828).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(829).png?raw=true',
    ],
  },
  {
    title: 'Your Restaurant Website — Online Menu, Booking & Ordering System',
    category: 'Website',
    filter: 'restaurants',
    description:
      'A modern restaurant website that showcases menus and dishes in an attractive way, with an online ordering and booking system and filters for quick access to dishes. Includes a dashboard for managing menus and offers.',
    tech: ['Tailwind', 'Node.js', 'MongoDB', 'React'],
    images: [
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(729).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(730).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(731).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(736).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(737).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(735).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(732).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(734).png?raw=true',
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(733).png?raw=true',
    ],
  },
];

/* ───────────────────────────────────────────────
   Data — Regular projects
─────────────────────────────────────────────── */
const regularProjects = [
  {
    title: 'Website for Dada Projects, a female-led 3D motion design studio in London, UK.',
    link: 'https://dada-projects.com',
    category: 'Website',
    filter: '3d',
    description:
      'A bold one-page portfolio for an award-winning, female-led 3D motion and CGI studio. The site is built around immersive hover-reveal project thumbnails, playful animated 3D shapes representing each case study, and smooth border-transition effects that give the whole experience a distinctly experimental, design-forward feel. It showcases campaign work for major brands such as Adidas, Nike, and Calvin Klein, with a fully responsive layout that keeps the animations fluid across desktop and mobile.',
    image: '/1 (1).png',
    tech: ['Next.js', 'Three.js', 'Framer Motion', 'Tailwind'],
  },
  {
    title: 'Website for Rumfoords, an AI and Web3 strategic consultancy in New York.',
    link: 'https://rumfoords.com',
    category: 'Website',
    filter: '3d',
    description:
      'A sleek consultancy website presenting Rumfoords\' dual offering in Artificial Intelligence and Web3/Metaverse strategy. The site walks visitors through the studio\'s process with cinematic full-bleed video sections, and highlights flagship case studies (including campaigns for adidas, Ralph Lauren, and JD Sports) in a clean, editorial-style work section. Built with a headless CMS to let the team update case studies and client logos without touching code.',
    image: '/1 (2).png',
    tech: ['Next.js', 'Prismic CMS', 'Node.js', 'Framer Motion'],
  },
  {
    title: 'Official ecommerce store for Sarah Eisman Studio, a fine jewelry brand in New York.',
    link: 'https://saraheismanstudio.com',
    category: 'Website',
    filter: 'ecommerce',
    description:
      'A refined ecommerce experience for a fine jewelry label crafted from gold and precious gemstones. Collections are organized around the human body (ear, hand, neck, wrist) instead of typical product categories, paired with striking black-and-white photography and 3D product renders. The store supports full catalog browsing, collection filtering, a smooth checkout flow, and a custom-branded shopping experience that matches the studio\'s minimalist, engineered aesthetic.',
    image: '/1.png',
    tech: ['Shopify', 'React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Official website for Matcha Ren, a matcha dessert and beverage shop in California, USA.',
    link: 'https://matcharen.com',
    category: 'Website',
    filter: 'restaurants',
    description:
      'A vibrant, green-and-white branded website for a matcha-focused dessert and drinks shop with multiple California locations. The site presents the full menu, brand story, and store locations in a playful, modern layout, with smooth scroll-triggered animations that keep the browsing experience light and appetizing. Built to convert casual visitors into in-store customers with clear calls to action for directions and ordering.',
    image: '/1 (3).png',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Official website for Alter Geneva, a bespoke luxury watchmaking studio in Geneva, Switzerland.',
    link: 'https://altergeneva.com',
    category: 'Website',
    filter: 'ecommerce',
    description:
      'An ultra-minimalist landing page for a Swiss bespoke watch customization studio, built around a restrained palette of Swiss-snow white and deep black. The design leans on generous whitespace, a bold sans-serif wordmark, and a numbered project gallery (Project 001, 002, 003...) to communicate exclusivity without ever feeling cluttered. Sections walk clients through the customization process, past projects, and warranty details in a calm, editorial rhythm that mirrors the precision of the watches themselves.',
    image: '/1 (4).png',
    tech: ['Webflow', 'GSAP', 'Framer Motion'],
  },
  {
    title: 'Official website for Revitin, a prebiotic oral care brand in New York, USA.',
    link: 'https://revitin.com',
    category: 'Website',
    filter: 'ecommerce',
    description:
      'An ecommerce storefront for a prebiotic, fluoride-free and SLS-free toothpaste brand focused on supporting a healthy oral microbiome. The site presents the product line (toothpaste, sonic toothbrushes, water flossers) with clean, health-forward visuals, subscription options for recurring deliveries, and educational content on oral microbiome health, all wrapped in a smooth, conversion-focused shopping experience.',
    image: '/1 (5).png',
    tech: ['Shopify', 'React', 'Tailwind'],
  },
  {
    title: 'Official ecommerce store for DOHA Bazaar accessories retailer',
    link: 'https://bazardoha.vercel.app/',
    category: 'Website',
    filter: 'ecommerce',
    description:
      'A fully integrated ecommerce store for selling clothing that dynamically displays products with an advanced filtering and search system to make shopping easier. Supports efficient management of a large number of products, and is equipped with a powerful dashboard that makes it easy to add, edit, and delete products, with a modern design and fast performance that suits all devices.',
    image:
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(1972).png?raw=true',
    tech: [],
  },
  // {
  //   title: 'Our Own Company Website, CodeLegacy — About Page & Services Network',
  //   link: 'https://codelegacy.tech',
  //   category: 'Website',
  //   description:
  //     "CodeLegacy's official website: showcasing services, our projects, our team, and quick contact. A clean design to present the brand identity, testimonials, and technical service offerings.",
  //   image:
  //     'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(791).png?raw=true',
  //   tech: ['Next.js', 'Node.js', 'MongoDB', 'Mapbox'],
  // },
  // {
  //   title: 'Kremora — Online Sweets Store',
  //   link: 'https://hanynan8.github.io/test-Sweety/',
  //   category: 'Website',
  //   description:
  //     'An online sweets store showcasing multiple categories of sweets with detailed product pages, a shopping cart, and an order/booking form. A lovely design focused on photos and seasonal products.',
  //   image:
  //     'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(794).png?raw=true',
  //   tech: ['React', 'Django (API-ready)', 'PostgreSQL', 'OAuth (optional)'],
  // },
  {
    title: 'Personal Portfolio — Showcasing Skills and Work',
    link: 'https://my-portfolio-tau-six-33.vercel.app/',
    category: 'Website',
    filter: 'portfolio',
    description:
      'A personal portfolio for showcasing projects, skills, resume, and contact links. A simple, fast design for visitors and employers to view experience and practical examples.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(483).png?raw=true',
    tech: ['React', 'Django (forms/blog)', 'PostgreSQL', 'OAuth'],
  },


];
/* ───────────────────────────────────────────────
   Filters
   Each project has a `filter` field matching one of these ids.
   To move a project to another category, just change its `filter`.
─────────────────────────────────────────────── */
const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'ecommerce', label: 'E-commerce Stores' },
  { id: 'restaurants', label: 'Restaurants' },
  { id: 'tourism', label: 'Tourism Websites' },
  { id: 'education', label: 'Educational Platforms' },
  { id: '3d', label: '3D Websites' },
  { id: 'portfolio', label: 'Portfolio' },
];

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
  ...regularProjects.slice(0, 7).map((project) => ({ type: 'regular', project })),
  ...sliderProjects.map((project) => ({ type: 'slider', project })),
  ...regularProjects.slice(7).map((project) => ({ type: 'regular', project })),
];
// the rest, in their original order
const baseProjects = [
  ...tourismProjects.map((project) => ({ type: 'regular', project })),
  ...educationProjects.map((project) => ({ type: 'regular', project })),
  ...storeProjects.map((project) => ({ type: 'regular', project })),
  ...restaurantProjects.map((project) => ({ type: 'regular', project })),
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
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

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
          <h2 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-white px-2">
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
              href="https://wa.me/201213819102?text=Hi, I'd like to develop a website with you and get the full details"
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