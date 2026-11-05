// app/(components)/(realComponents)/servicesData.js
// ====================================================
// Shared data for the services section — used on the homepage and services page
// ====================================================

export const servicesData = [
  {
    id: 13,
    title: 'E-Commerce Website',
    shortDescription:
      'Fully integrated ecommerce platforms with secure payment systems and advanced inventory management',
    fullDescription:
      'We develop professional ecommerce stores with an exceptional shopping experience and comprehensive management systems that support the growth of your business.',
    icon: 'ShoppingCart',
    features: [
      'Responsive design for all devices',
      'Multiple secure payment systems (Visa, Mastercard, Vodafone Cash)',
      'Automated inventory and order management',
      'Comprehensive seller dashboard',
      'Detailed sales reports and analytics',
      'Integration with local shipping companies',
      'Coupon and customer loyalty points system',
      'Arabic and English language support',
    ],
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'PayPal'],
    color: 'from-green-500 to-emerald-500',
    image: '/services/ecommerce.webp',
  },
  {
    id: 4,
    title: 'Landing Page',
    shortDescription:
      'High-conversion landing pages designed to increase sales and leads',
    fullDescription:
      'We design professional, conversion-optimized landing pages with advanced analytics and performance tracking tools.',
    icon: 'Rocket',
    features: [
      'Design optimized for conversion rate (CRO)',
      'Ultra-fast load speed',
      'Search engine optimization (SEO)',
      'Lead-capture forms',
      'Integration with digital marketing tools',
      'Detailed visitor and conversion analytics',
      'A/B testing for different elements',
      'Responsive design for all devices',
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Google Analytics', 'Hotjar'],
    color: 'from-brand-blue to-brand-cyan',
    image: '/services/landing-pages.webp',
  },

  {
    id: 5,
    title: 'Restaurant Website',
    shortDescription:
      'Interactive restaurant websites with digital menus and table booking systems',
    fullDescription:
      'We develop comprehensive restaurant websites with attractive digital menus and online booking and ordering systems.',
    icon: 'Utensils',
    features: [
      'Interactive digital menu with photos',
      'Online table booking system',
      'Order and delivery system',
      'Photo gallery of the restaurant and dishes',
      'Google Maps integration for location',
      'Customer review and rating system',
      'Special offers and menus',
      'Social media integration',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
    color: 'from-brand-blue to-brand-cyan',
    image: '/services/restaurant.webp',
  },

  {
    id: 6,
    title: 'Medical Website',
    shortDescription: 'Digital medical solutions with appointment booking and patient management systems',
    fullDescription:
      'We design specialized medical websites that make it easy for patients to book appointments and help doctors manage their clinics.',
    icon: 'Stethoscope',
    features: [
      'Smart appointment booking system',
      'Electronic patient records',
      'Appointment reminder system',
      'Doctor and specialty information',
      'Online consultation system',
      'Integration with medical payment systems',
      'Medical reports and statistics',
      'High-level data privacy protection',
    ],
    technologies: ['Next.js', 'MongoDB', 'Tailwind CSS', 'HIPAA Compliance'],
    color: 'from-teal-500 to-green-500',
    image: '/services/clinic.webp',
  },

  {
    id: 3,
    title: 'SaaS Platform',
    shortDescription:
      'Scalable software-as-a-service solutions with multi-tier subscriptions',
    fullDescription:
      'We develop integrated SaaS platforms with flexible subscription systems and advanced dashboards for managing customers and services.',
    icon: 'Cloud',
    features: [
      'Multi-tier subscription system',
      'Separate dashboards for admins and customers',
      'Powerful API for integration with other applications',
      'Automated billing and collection system',
      'Real-time analytics and reports',
      'Integrated technical support system',
      'Advanced security and data protection',
      'Cloud scalability',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    color: 'from-brand-sky to-brand-cyan',
    image: '/services/saas.webp',
  },
  {
    id: 2,
    title: 'Educational Platform',
    shortDescription:
      'Advanced e-learning platforms with interactive tools and content management',
    fullDescription:
      'We design comprehensive educational platforms that support interactive learning with advanced tools for managing courses and students.',
    icon: 'GraduationCap',
    features: [
      'Course and lesson management system',
      'Advanced video player with content protection',
      'Automated exam and assessment system',
      'Discussion forums and student interaction',
      'Student progress tracking and detailed statistics',
      'Digital completion certificates',
      'Payment system for paid courses',
      'Mobile app for learning on the go',
    ],
    technologies: ['Next.js', 'MongoDB', 'Node.js', 'AWS S3', 'Socket.io'],
    color: 'from-brand-blue to-cyan-500',
    image: '/services/education.webp',
  },

  {
    id: 7,
    title: 'Business Website',
    shortDescription:
      'Professional company websites that reflect brand identity and build trust',
    fullDescription:
      'We develop distinguished corporate websites that showcase your services professionally and build trust with your customers.',
    icon: 'Building',
    features: [
      'Design that reflects brand identity',
      'Detailed service and project pages',
      'Contact forms and quote requests',
      'Blog for content and news',
      'Team and company pages',
      'Client testimonials and reviews',
      'Portfolio of previous work and projects',
      'Advanced search engine optimization',
    ],
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'AWS'],
    color: 'from-brand-blue to-brand-sky',
    image: '/services/corporate.webp',
  },
  {
    id: 8,
    title: 'Portfolio Website',
    shortDescription: 'Professional personal websites and portfolios for creatives and specialists',
    fullDescription:
      'We design distinctive personal websites that showcase your skills and work in an attractive, professional way.',
    icon: 'Camera',
    features: [
      'Interactive portfolio with filters',
      'Comprehensive digital resume',
      'Personal blog for writing and sharing',
      'Direct contact forms',
      'Social network integration',
      'Testimonials and recommendations',
      'Experience and skills section',
      'Search engine visibility optimization',
    ],
    technologies: ['React', 'Tailwind', 'MongoDB', 'Netlify'],
    color: 'from-pink-500 to-rose-500',
    image: '/services/portfolio.webp',
  },

  {
    id: 10,
    title: 'Booking Platform',
    shortDescription: 'Advanced booking systems for services and appointments with customer management',
    fullDescription:
      'We develop comprehensive booking platforms that make it easy for your customers to book your services and help you manage your business.',
    icon: 'Calendar',
    features: [
      'Flexible booking system with an interactive calendar',
      'Management of service providers and time slots',
      'Integrated payment and collection system',
      'Automated reminders for customers',
      'Customer reviews and ratings',
      'Detailed booking reports',
      'Mobile app integration',
      'Flexible cancellation and rescheduling system',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Calendar APIs'],
    color: 'from-emerald-500 to-teal-500',
    image: '/services/booking.webp',
  },
  {
    id: 12,
    title: 'Event Website',
    shortDescription: 'Specialized event management platforms with registration and ticketing systems',
    fullDescription:
      'We develop comprehensive event websites that cover every need for organizing conferences and events.',
    icon: 'Award',
    features: [
      'Attractive, informative event page',
      'Registration and ticket sales system',
      'Interactive agendas',
      'Speaker and sponsor information',
      'Digital check-in system',
      'Event app for attendees',
      'Live streaming and recordings',
      'Networking platform for attendees',
    ],
    technologies: ['React', 'Node.js', 'Stripe', 'WebRTC', 'Socket.io'],
    color: 'from-brand-cyan to-brand-blue',
    image: '/services/events.webp',
  },

  {
    id: 9,
    title: 'News Website',
    shortDescription: 'Advanced media platforms with content management and flexible publishing systems',
    fullDescription:
      'We develop comprehensive news websites with advanced publishing tools and easy content management.',
    icon: 'FileText',
    features: [
      'Advanced content management system',
      'Rich text editor with advanced capabilities',
      'Article categorization and tagging system',
      'Reader comments and social interaction',
      'Newsletter subscription system',
      'Advanced content search',
      'Ads and monetization systems',
      'Detailed reading analytics',
    ],
    technologies: ['Next.js', 'Sanity CMS', 'MongoDB', 'Algolia Search'],
    color: 'from-brand-sky to-brand-blue',
    image: '/services/news.webp',
  },

  {
    id: 11,
    title: 'Community Platform',
    shortDescription: 'Interactive community platforms with content and member management tools',
    fullDescription:
      'We build vibrant digital communities with advanced interaction tools and smart content management.',
    icon: 'Users',
    features: [
      'Flexible, tiered membership system',
      'Specialized discussion forums',
      'Points and rating system for members',
      'Private messages and notifications',
      'Content management and comment moderation',
      'Advanced topic search',
      'Social network integration',
      'Mobile app for staying connected',
    ],
    technologies: ['Next.js', 'Socket.io', 'MongoDB', 'Redis'],
    color: 'from-violet-500 to-brand-cyan',
    image: '/services/forums.webp',
  },
];