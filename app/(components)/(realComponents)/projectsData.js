// Shared project data (plain module: usable from both server and client components).
import tourismRaw from './tourismProjects';
import educationRaw from './educationProjects';
import storeRaw from './storeProjects';
import restaurantRaw from './restaurantProjects';

// Label shown above each card title: the type of website (instead of the generic "Website")
export const TYPE_LABELS = {
  ecommerce: 'E-Commerce Store',
  restaurants: 'Restaurant',
  tourism: 'Tourism Website',
  education: 'Educational Platform',
  '3d': '3D Website',
  portfolio: 'Portfolio',
};
export const typeLabel = (project) => TYPE_LABELS[project.filter] || project.category;

/* Full-page screenshots made by scripts/fullpage-shots.mjs -> public/full/<host>.webp
   A project with a `link` automatically uses its full-page shot, so the card can scroll
   through the whole page on hover. If a shot file is missing (or fails to load), the card falls
   back to the project's original image automatically (`fallbackImage`). */
export const shotSlug = (url) =>
  new URL(url).host.replace(/^www\./, '').replace(/[^a-z0-9]+/gi, '-').toLowerCase();
// Project types shown as a plain static image: no full-page shot and no scroll-on-hover.
const STATIC_FILTERS = ['3d'];
export const isStaticShot = (project) => STATIC_FILTERS.includes(project.filter);
export const withFullShot = (project) => {
  if (!project.link) return project;
  if (isStaticShot(project)) return { ...project, fullImage: true }; // keep the original image, static
  return {
    ...project,
    image: `/full/${shotSlug(project.link)}.webp`,
    fallbackImage: project.image,
    fullImage: false,
  };
};


/* ───────────────────────────────────────────────
   Data — Projects with IMAGE SLIDER
─────────────────────────────────────────────── */
const sliderRaw = []; // no slider-style projects at the moment

/* ───────────────────────────────────────────────
   Data — Regular projects
─────────────────────────────────────────────── */
const regularRaw = [
  {
    title: 'Dada Projects',
    link: 'https://dada-projects.com',
    category: 'Website',
    filter: '3d',
    description:
      'A bold one-page portfolio for an award-winning, female-led 3D motion and CGI studio. The site is built around immersive hover-reveal project thumbnails, playful animated 3D shapes representing each case study, and smooth border-transition effects that give the whole experience a distinctly experimental, design-forward feel. It showcases campaign work for major brands such as Adidas, Nike, and Calvin Klein, with a fully responsive layout that keeps the animations fluid across desktop and mobile.',
    image: '/1 (1).png',
    tech: ['Next.js', 'Three.js', 'Framer Motion', 'Tailwind'],
  },
  {
    title: 'Rumfoords',
    link: 'https://rumfoords.com',
    category: 'Website',
    filter: '3d',
    description:
      'A sleek consultancy website presenting Rumfoords\' dual offering in Artificial Intelligence and Web3/Metaverse strategy. The site walks visitors through the studio\'s process with cinematic full-bleed video sections, and highlights flagship case studies (including campaigns for adidas, Ralph Lauren, and JD Sports) in a clean, editorial-style work section. Built with a headless CMS to let the team update case studies and client logos without touching code.',
    image: '/1 (2).png',
    tech: ['Next.js', 'Prismic CMS', 'Node.js', 'Framer Motion'],
  },
  {
    title: 'Sarah Eisman Studio',
    link: 'https://saraheismanstudio.com',
    category: 'Website',
    filter: 'ecommerce',
    description:
      'A refined ecommerce experience for a fine jewelry label crafted from gold and precious gemstones. Collections are organized around the human body (ear, hand, neck, wrist) instead of typical product categories, paired with striking black-and-white photography and 3D product renders. The store supports full catalog browsing, collection filtering, a smooth checkout flow, and a custom-branded shopping experience that matches the studio\'s minimalist, engineered aesthetic.',
    image: '/1.png',
    tech: ['Shopify', 'React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Matcha Ren',
    link: 'https://matcharen.com',
    category: 'Website',
    filter: 'restaurants',
    hideFromRelated: true, // not listed under "More … work" on other projects' detail pages
    description:
      'A vibrant, green-and-white branded website for a matcha-focused dessert and drinks shop with multiple California locations. The site presents the full menu, brand story, and store locations in a playful, modern layout, with smooth scroll-triggered animations that keep the browsing experience light and appetizing. Built to convert casual visitors into in-store customers with clear calls to action for directions and ordering.',
    image: '/1 (3).png',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Alter Geneva',
    link: 'https://altergeneva.com',
    category: 'Website',
    filter: 'ecommerce',
    description:
      'An ultra-minimalist landing page for a Swiss bespoke watch customization studio, built around a restrained palette of Swiss-snow white and deep black. The design leans on generous whitespace, a bold sans-serif wordmark, and a numbered project gallery (Project 001, 002, 003...) to communicate exclusivity without ever feeling cluttered. Sections walk clients through the customization process, past projects, and warranty details in a calm, editorial rhythm that mirrors the precision of the watches themselves.',
    image: '/1 (4).png',
    tech: ['Webflow', 'GSAP', 'Framer Motion'],
  },
  {
    title: 'Revitin',
    link: 'https://revitin.com',
    category: 'Website',
    filter: 'ecommerce',
    description:
      'An ecommerce storefront for a prebiotic, fluoride-free and SLS-free toothpaste brand focused on supporting a healthy oral microbiome. The site presents the product line (toothpaste, sonic toothbrushes, water flossers) with clean, health-forward visuals, subscription options for recurring deliveries, and educational content on oral microbiome health, all wrapped in a smooth, conversion-focused shopping experience.',
    image: '/1 (5).png',
    tech: ['Shopify', 'React', 'Tailwind'],
  },
  {
    title: 'DOHA Bazaar',
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
    title: 'Personal Portfolio',
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
export const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'ecommerce', label: 'E-Commerce Store' },
  { id: 'restaurants', label: 'Restaurants' },
  { id: 'tourism', label: 'Tourism Websites' },
  { id: 'education', label: 'Educational Platforms' },
  { id: '3d', label: '3D Websites' },
  { id: 'portfolio', label: 'Portfolio' },
];


/* ───────────────────────────────────────────────
   Slugs — one unique, URL-friendly slug per project (used by /lastprojects/[slug]).
   Assigned in a fixed order, duplicates get -2, -3 ...
─────────────────────────────────────────────── */
const slugify = (text) =>
  String(text || 'project')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'project';

const usedSlugs = new Set();
const withSlugs = (list) =>
  list.map((project) => {
    const base = slugify(project.title);
    let slug = base;
    for (let n = 2; usedSlugs.has(slug); n++) slug = `${base}-${n}`;
    usedSlugs.add(slug);
    return { ...project, slug };
  });

export const sliderProjects = withSlugs(sliderRaw);
export const regularProjects = withSlugs(regularRaw);
export const tourismProjects = withSlugs(tourismRaw);
export const educationProjects = withSlugs(educationRaw);
export const storeProjects = withSlugs(storeRaw);
export const restaurantProjects = withSlugs(restaurantRaw);

export const everyProject = [
  ...sliderProjects, ...regularProjects, ...tourismProjects,
  ...educationProjects, ...storeProjects, ...restaurantProjects,
];

// The project as the detail page shows it (full-page screenshot for projects with a link).
export const getProjectBySlug = (slug) => {
  const project = everyProject.find((p) => p.slug === slug);
  return project ? withFullShot(project) : null;
};
