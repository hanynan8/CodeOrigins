/* ───────────────────────────────────────────────
   Tourism websites — previous work
   ───────────────────────────────────────────────
   To change which hero screenshot belongs to which site,
   just edit the `image` line of that site below.
─────────────────────────────────────────────── */
const CLOUD = 'https://res.cloudinary.com/t9lxvplw/image/upload';

const make = ({ title, link, image, description, tech }) => ({
  title,
  link,
  category: 'Website',
  filter: 'tourism',
  fullImage: true, // show the whole hero screenshot, no cropping
  description,
  image,
  tech: tech || [],
});

const tourismProjects = [
  make({
    title: 'Overcoast Tourism',
    link: 'https://overcoasttourism.com/',
    image: `${CLOUD}/v1793727359/Screenshot_3094.png`,
    description:
      'A modern travel website showcasing tours and experiences with attractive visuals, easy browsing of packages, and quick contact options to turn visitors into bookings.',
  }),
  make({
    title: 'Noble Tourism Qatar',
    link: 'https://nobletourismqatar.com/',
    image: `${CLOUD}/v1793723146/Screenshot_3089.png`,
    description:
      'A professional tourism website for a Qatar-based company presenting its tours and travel services with a refined design and easy contact and booking options.',
  }),
  make({
    title: 'Sand Dunes Tours',
    link: 'https://sanddunestoursim.com/',
    image: `${CLOUD}/v1793723132/Screenshot_3084.png`,
    description:
      'A tourism website for a desert tours company, built around a striking hero section, clear tour listings, and a fast enquiry and booking experience that works smoothly on mobile and desktop.',
  }),
  make({
    title: 'POV Tourism',
    link: 'https://povtourism.com/',
    image: `${CLOUD}/v1793723131/Screenshot_3092.png`,
    description:
      'A tourism website showcasing curated tours and experiences with a visual-first design and simple, conversion-focused enquiry paths.',
  }),
  make({
    title: 'Qawafil Tourism',
    link: 'https://qawafiltourism.com/',
    image: `${CLOUD}/v1793723134/Screenshot_3086.png`,
    description:
      'A tourism company website presenting travel packages and destinations in a clean, responsive layout, with clear calls to action for inquiries and trip planning.',
  }),
  make({
    title: 'Nomad Arabia Travels',
    link: 'https://nomadsarabia.com',
    image: `${CLOUD}/v1793723138/Screenshot_3083.png`,
    description:
      'A premium website for a Riyadh-based private tour operator. It presents desert escapes, heritage villages and regional journeys with filtering by region, detailed itinerary pages with pricing, traveller stories, and a bespoke enquiry flow with direct WhatsApp contact.',
  }),
  make({
    title: 'Zahrat Muscat Tours',
    link: 'https://zahratmuscattours.com/',
    image: `${CLOUD}/v1793723146/Screenshot_3087.png`,
    description:
      'A tourism website for an Oman-based tour company highlighting Muscat excursions and local experiences with a visual-first design and a simple path to book or enquire.',
  }),
  make({
    title: 'Star of the Sea Oman',
    link: 'https://staroftheseaoman.com/',
    image: `${CLOUD}/v1793723133/Screenshot_3088.png`,
    description:
      'A tourism website for sea and coastal experiences in Oman, with an immersive hero section, clear trip details, and fast, mobile-friendly booking enquiries.',
  }),
  make({
    title: 'Canyon Adventures Tours',
    link: 'https://canyonadventurestours.com/',
    image: `${CLOUD}/v1793723152/Screenshot_3090.png`,
    description:
      'An adventure tourism website for canyon and outdoor trips, featuring bold imagery, organized tour listings, and a direct enquiry flow built for mobile travellers.',
  }),
  make({
    title: 'JLT Travels',
    link: 'https://jlttravels.com/',
    image: `${CLOUD}/v1793723143/Screenshot_3091.png`,
    description:
      'A travel services website designed to present tours and travel offers clearly, with a responsive layout and quick contact options.',
  }),
];

export default tourismProjects;
