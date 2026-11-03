'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft, X, Eye, ExternalLink } from 'lucide-react';
import tourismProjects from './tourismProjects';
import educationProjects from './educationProjects';
import storeProjects from './storeProjects';

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
        className="relative w-full max-w-6xl bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border-b border-gray-200">
          <h3 className="text-xs sm:text-base font-semibold text-gray-800 truncate max-w-[75%] text-left">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-1 sm:p-1.5 rounded-full hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-800 flex-shrink-0"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Image Area */}
        <div
          className="relative bg-gray-900 flex items-center justify-center"
          style={{ height: 'clamp(320px, 80vw, 520px)' }}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
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
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 hover:text-blue-600 rounded-full p-1.5 sm:p-3 shadow-xl transition-colors"
          >
            <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>
          <button
            onClick={goRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 hover:text-blue-600 rounded-full p-1.5 sm:p-3 shadow-xl transition-colors"
          >
            <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 bg-gray-50 flex-wrap px-4">
          {reversedImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(images.length - 1 - i)}
              className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all duration-300 ${
                i === reversedIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
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
      <div className="group bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:scale-105">
        <div
          className="relative overflow-hidden h-44 sm:h-52 lg:h-64 cursor-pointer bg-white"
          onClick={() => setModalOpen(true)}
        >
          <img
            src={project.images[0]}
            alt={project.title || 'Project image'}
            className="w-full h-full object-cover object-top sm:object-center"
            style={{
              transform: 'scaleX(1.05)',
              transformOrigin: 'top',
              clipPath: 'inset(0 2.5% 0 2.5%)',
            }}
          />
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <span>📷</span>
            <span>{project.images.length} photos</span>
          </div>
        </div>

        <div className="p-3 sm:p-4 lg:p-6">
          <div className="text-xs sm:text-sm text-blue-600 font-semibold mb-1.5 sm:mb-2">
            {project.category}
          </div>
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-gray-800 group-hover:text-blue-700 transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 sm:py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-1.5 sm:gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors text-xs sm:text-sm"
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
  <div className="group bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:scale-105">
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      {project.fullImage ? (
        <div className="relative overflow-hidden bg-white">
          <img
            src={project.image}
            alt={project.title || 'Project image'}
            className="block w-full h-auto"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="relative overflow-hidden h-44 sm:h-52 lg:h-64 bg-white">
          <img
            src={project.image}
            alt={project.title || 'Project image'}
            className="w-full h-full object-cover object-top sm:object-center"
            style={{
              transform: 'scaleX(1.05)',
              transformOrigin: 'top',
              clipPath: 'inset(0 2.5% 0 2.5%)',
            }}
          />
        </div>
      )}
    </a>

    <div className="p-3 sm:p-4 lg:p-6">
      <div className="text-xs sm:text-sm text-blue-600 font-semibold mb-1.5 sm:mb-2">
        {project.category}
      </div>
      <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-2 sm:mb-3 text-gray-800 group-hover:text-blue-700 transition-colors leading-snug">
        {project.title}
      </h3>
      <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
        {project.tech.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 sm:py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 sm:gap-2 text-blue-600 font-medium group-hover:text-blue-700 transition-colors text-xs sm:text-sm"
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
    filter: 'other',
    description:
      'A fully integrated ecommerce store for showcasing and selling tech devices and accessories (capacity for 5,000+ products). Equipped with an advanced filtering system, precise search, and fast performance. Includes a free admin dashboard for the owner to easily manage products (add, edit, delete) and inventory.',
    tech: ['Tailwind', 'Node.js', 'MongoDB', 'Next.js'],
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
    filter: 'other',
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
    filter: 'other',
    description:
      'A bold one-page portfolio for an award-winning, female-led 3D motion and CGI studio. The site is built around immersive hover-reveal project thumbnails, playful animated 3D shapes representing each case study, and smooth border-transition effects that give the whole experience a distinctly experimental, design-forward feel. It showcases campaign work for major brands such as Adidas, Nike, and Calvin Klein, with a fully responsive layout that keeps the animations fluid across desktop and mobile.',
    image: '/1 (1).png',
    tech: ['Next.js', 'Three.js', 'Framer Motion', 'Tailwind'],
  },
  {
    title: 'Website for Rumfoords, an AI and Web3 strategic consultancy in New York.',
    link: 'https://rumfoords.com',
    category: 'Website',
    filter: 'other',
    description:
      'A sleek consultancy website presenting Rumfoords\' dual offering in Artificial Intelligence and Web3/Metaverse strategy. The site walks visitors through the studio\'s process with cinematic full-bleed video sections, and highlights flagship case studies (including campaigns for adidas, Ralph Lauren, and JD Sports) in a clean, editorial-style work section. Built with a headless CMS to let the team update case studies and client logos without touching code.',
    image: '/1 (2).png',
    tech: ['Next.js', 'Prismic CMS', 'Node.js', 'Framer Motion'],
  },
  {
    title: 'Official ecommerce store for Sarah Eisman Studio, a fine jewelry brand in New York.',
    link: 'https://saraheismanstudio.com',
    category: 'Website',
    filter: 'other',
    description:
      'A refined ecommerce experience for a fine jewelry label crafted from gold and precious gemstones. Collections are organized around the human body (ear, hand, neck, wrist) instead of typical product categories, paired with striking black-and-white photography and 3D product renders. The store supports full catalog browsing, collection filtering, a smooth checkout flow, and a custom-branded shopping experience that matches the studio\'s minimalist, engineered aesthetic.',
    image: '/1.png',
    tech: ['Shopify', 'React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Official website for Matcha Ren, a matcha dessert and beverage shop in California, USA.',
    link: 'https://matcharen.com',
    category: 'Website',
    filter: 'other',
    description:
      'A vibrant, green-and-white branded website for a matcha-focused dessert and drinks shop with multiple California locations. The site presents the full menu, brand story, and store locations in a playful, modern layout, with smooth scroll-triggered animations that keep the browsing experience light and appetizing. Built to convert casual visitors into in-store customers with clear calls to action for directions and ordering.',
    image: '/1 (3).png',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Official website for Alter Geneva, a bespoke luxury watchmaking studio in Geneva, Switzerland.',
    link: 'https://altergeneva.com',
    category: 'Website',
    filter: 'other',
    description:
      'An ultra-minimalist landing page for a Swiss bespoke watch customization studio, built around a restrained palette of Swiss-snow white and deep black. The design leans on generous whitespace, a bold sans-serif wordmark, and a numbered project gallery (Project 001, 002, 003...) to communicate exclusivity without ever feeling cluttered. Sections walk clients through the customization process, past projects, and warranty details in a calm, editorial rhythm that mirrors the precision of the watches themselves.',
    image: '/1 (4).png',
    tech: ['Webflow', 'GSAP', 'Framer Motion'],
  },
  {
    title: 'Official website for Revitin, a prebiotic oral care brand in New York, USA.',
    link: 'https://revitin.com',
    category: 'Website',
    filter: 'other',
    description:
      'An ecommerce storefront for a prebiotic, fluoride-free and SLS-free toothpaste brand focused on supporting a healthy oral microbiome. The site presents the product line (toothpaste, sonic toothbrushes, water flossers) with clean, health-forward visuals, subscription options for recurring deliveries, and educational content on oral microbiome health, all wrapped in a smooth, conversion-focused shopping experience.',
    image: '/1 (5).png',
    tech: ['Shopify', 'React', 'Tailwind'],
  },
  {
    title: 'Official website for EduMaster, an educational company in Madrid, Spain.',
    link: 'https://edumaster365.com',
    category: 'Website',
    filter: 'education',
    fullImage: true,
    description:
      'A modern educational platform that dynamically displays courses and lessons with a secure login system for users. Students can easily follow the content, while the admin dashboard lets the manager add courses, manage users, and update content at any time. The system was built to deliver high performance and a professional user experience.',
    image:
      'https://res.cloudinary.com/t9lxvplw/image/upload/v1793727754/Screenshot_3047.png',
    tech: ['Tailwind', 'Node.js', 'MongoDB', 'Next.js'],
  },
  {
    title: 'Official website for UmKhater Kitchen restaurant in Dubai, UAE.',
    link: 'https://umkhater.com',
    category: 'Website',
    filter: 'other',
    description:
      'A professional restaurant website that dynamically displays the menu with the ability to categorize meals and search quickly, and supports receiving orders online with ease. Equipped with a full dashboard that lets the restaurant owner manage the menu (add, edit, delete), update prices, and manage orders in real time with fast performance and a smooth user experience.',
    image:
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(1432).png?raw=true',
    tech: ['Tailwind', 'Node.js', 'MongoDB', 'Next.js'],
  },
  {
    title: 'Official ecommerce store for DOHA Bazaar accessories retailer',
    link: 'https://bazardoha.vercel.app/',
    category: 'Website',
    filter: 'other',
    description:
      'A fully integrated ecommerce store for selling clothing that dynamically displays products with an advanced filtering and search system to make shopping easier. Supports efficient management of a large number of products, and is equipped with a powerful dashboard that makes it easy to add, edit, and delete products, with a modern design and fast performance that suits all devices.',
    image:
      'https://github.com/hanynan8/CodeOrigins/blob/main/images/Screenshot%20(1972).png?raw=true',
    tech: ['Tailwind', 'Node.js', 'MongoDB', 'Next.js'],
  },
  {
    title: 'Fully Integrated Clothing Ecommerce Store',
    link: 'https://e-commerce-vert-xi-96.vercel.app/',
    category: 'Website',
    filter: 'other',
    description:
      'An ecommerce platform for showcasing clothing in a modern style. Allows filtering products by size, color, and price, with a professional dashboard for managing inventory and orders and streamlining the buying experience.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(612).png?raw=true',
    tech: ['Tailwind', 'Node.js', 'MongoDB', 'Next.js'],
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
  {
    title: 'Website for MF Group Architectural Facades Company',
    link: 'https://hanynan8.github.io/test-MFGroup/',
    category: 'Website',
    filter: 'other',
    description:
      'A portfolio and services showcase website for architectural facade design, featuring a project photo gallery, service descriptions, and a contact form for consultation and project requests.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(795).png?raw=true',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  },
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
    title: 'Newton — Architectural & Interior Design Website',
    link: 'https://hanywebdev.github.io/Architecture-Interior-Design-Landing-Page--Publi/',
    category: 'Website',
    filter: 'other',
    description:
      'A website showcasing interior and architectural design services with a project gallery, service descriptions (interior design, space planning, material consulting), and a form for booking a consultation.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(522).png?raw=true',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Mapbox'],
  },
  {
    title: 'InvSmart — Financial & Investment Consulting Platform',
    link: 'https://hanynan8.github.io/Financial-Consulting-Landing-Page/',
    category: 'Website',
    filter: 'other',
    description:
      'A financial and consulting services website that supports investment product descriptions, client profiles, simplified financial reports, and initial integration with banking interfaces via API (forms and reports). Suitable for small and medium businesses.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(529).png?raw=true',
    tech: ['React', 'Django (API forms)', 'PostgreSQL', 'OAuth'],
  },
  {
    title: 'WaVer — Task & Project Management Web App (SaaS)',
    link: 'https://saa-s-seven-kappa.vercel.app',
    category: 'Website',
    filter: 'other',
    description:
      'A SaaS platform for managing projects and tasks: kanban boards, teams, time tracking, and notifications. Suitable for small and medium teams with collaboration and file-sharing features.',
    image:
      'https://github.com/hanynan8/forImages/blob/main/Screenshot%20(502).png?raw=true',
    tech: ['WordPress (content layer)', 'PHP', 'MySQL', 'SEO Tools'],
  },
  {
    title: 'Personal Portfolio — Showcasing Skills and Work',
    link: 'https://my-portfolio-tau-six-33.vercel.app/',
    category: 'Website',
    filter: 'other',
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
  { id: 'other', label: 'Other Websites' },
];

/* ───────────────────────────────────────────────
   Main Portfolio Section
─────────────────────────────────────────────── */
const PortfolioSection = ({
  title = 'Web Development Projects',
  showCtaButton = true,
  showFilter = false,
}) => {
  const [activeFilter, setActiveFilter] = useState('all');

  // One combined list, keeping the original display order
  const allProjects = [
    ...regularProjects.slice(0, 7).map((project) => ({ type: 'regular', project })),
    ...sliderProjects.map((project) => ({ type: 'slider', project })),
    ...regularProjects.slice(7).map((project) => ({ type: 'regular', project })),
    ...tourismProjects.map((project) => ({ type: 'regular', project })),
    ...educationProjects.map((project) => ({ type: 'regular', project })),
    ...storeProjects.map((project) => ({ type: 'regular', project })),
  ];

  const visibleProjects =
    showFilter && activeFilter !== 'all'
      ? allProjects.filter(({ project }) => project.filter === activeFilter)
      : allProjects;

  const activeLabel = FILTERS.find((f) => f.id === activeFilter)?.label;

  return (
    <section id="portfolio" className="py-8 sm:py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 text-gray-800 px-2">
            {title.includes('Web Development Projects') ? (
              <>
                Some of <span className="text-blue-600">Our Previous Work</span>
              </>
            ) : (
              title
            )}
          </h2>
          <p className="text-xs sm:text-base lg:text-xl text-gray-600 max-w-4xl mx-auto px-4">
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
                  onClick={() => setActiveFilter(id)}
                  className={`whitespace-nowrap shrink-0 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium border transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-md'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:text-blue-600'
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
            {visibleProjects.map(({ type, project }, index) =>
              type === 'slider' ? (
                <SliderProjectCard key={`slider-${project.title}`} project={project} />
              ) : (
                <RegularProjectCard key={`regular-${project.link}-${index}`} project={project} />
              )
            )}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 mb-8 sm:mb-12 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
            <p className="text-base sm:text-lg font-semibold text-gray-700 mb-1">
              No {activeLabel} projects yet
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              New projects in this category are coming soon.
            </p>
          </div>
        )}

        {showCtaButton && (
          <div className="text-center mb-8 sm:mb-16 px-4">
            <a
              href="https://wa.me/201213819102?text=Hi, I'd like to develop a website with you and get the full details"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 text-sm sm:text-base"
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