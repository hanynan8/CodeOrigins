/* ───────────────────────────────────────────────
   Online stores — previous work
   To change a store's hero screenshot, edit its `image` line.
─────────────────────────────────────────────── */
const CLOUD = 'https://res.cloudinary.com/t9lxvplw/image/upload';

const make = ({ title, link, image, description, tech }) => ({
  title,
  link,
  category: 'Website',
  filter: 'ecommerce',
  fullImage: true, // show the whole hero screenshot, no cropping
  description,
  image: `${CLOUD}/${image}`,
  tech: tech || [],
});

const storeProjects = [
  make({
    title: '11 Perfumes',
    link: 'https://11perfumes.ae/',
    image: 'v1793728123/Screenshot_3082.png',
    description:
      'An ecommerce store with an attractive, fast storefront, easy product browsing and search, a smooth cart and checkout experience, and a responsive design that works well on mobile and desktop.',
  }),
  make({
    title: 'Shrwaa',
    link: 'https://shrwaa.com/',
    image: 'v1793728085/Screenshot_3069.png',
    description:
      'An ecommerce store with an attractive, fast storefront, easy product browsing and search, a smooth cart and checkout experience, and a responsive design that works well on mobile and desktop.',
  }),
  make({
    title: 'Rehab Corner',
    link: 'https://www.rehabcorner.online/',
    image: 'v1793728107/Screenshot_3073.png',
    description:
      'An ecommerce store with an attractive, fast storefront, easy product browsing and search, a smooth cart and checkout experience, and a responsive design that works well on mobile and desktop.',
  }),
  make({
    title: 'Xhawi',
    link: 'https://www.xhawi.com/',
    image: 'v1793728101/Screenshot_3077.png',
    description:
      'An ecommerce store with an attractive, fast storefront, easy product browsing and search, a smooth cart and checkout experience, and a responsive design that works well on mobile and desktop.',
  }),
  make({
    title: 'Tuzzut',
    link: 'https://tuzzut.com/',
    image: 'v1793728115/Screenshot_3080.png',
    description:
      'An ecommerce store with an attractive, fast storefront, easy product browsing and search, a smooth cart and checkout experience, and a responsive design that works well on mobile and desktop.',
  }),
  make({
    title: 'Lord Oil',
    link: 'https://lordoilsa.com/',
    image: 'v1793728118/Screenshot_3078.png',
    description:
      'An ecommerce store with an attractive, fast storefront, easy product browsing and search, a smooth cart and checkout experience, and a responsive design that works well on mobile and desktop.',
  }),
  make({
    title: '21 Store',
    link: 'https://21store.om',
    image: 'v1793728100/Screenshot_3076.png',
    description:
      'An ecommerce store with an attractive, fast storefront, easy product browsing and search, a smooth cart and checkout experience, and a responsive design that works well on mobile and desktop.',
  }),
  make({
    title: 'Kofah',
    link: 'https://www.kofah.com/',
    image: 'v1793728078/Screenshot_3067.png',
    description:
      'An ecommerce store with an attractive, fast storefront, easy product browsing and search, a smooth cart and checkout experience, and a responsive design that works well on mobile and desktop.',
  }),
  make({
    title: 'Healthana',
    link: 'https://www.healthana.co/',
    image: 'v1793728094/Screenshot_3070.png',
    description:
      'An ecommerce store with an attractive, fast storefront, easy product browsing and search, a smooth cart and checkout experience, and a responsive design that works well on mobile and desktop.',
  }),
  make({
    title: 'Kiddo Store',
    link: 'https://www.kiddostore.qa/',
    image: 'v1793728085/Screenshot_3068.png',
    description:
      'An ecommerce store with an attractive, fast storefront, easy product browsing and search, a smooth cart and checkout experience, and a responsive design that works well on mobile and desktop.',
  }),
  make({
    title: 'Gazal',
    link: 'https://www.gazal.me/',
    image: 'v1793728095/Screenshot_3071.png',
    description:
      'An ecommerce store with an attractive, fast storefront, easy product browsing and search, a smooth cart and checkout experience, and a responsive design that works well on mobile and desktop.',
  }),
  make({
    title: 'Place It',
    link: 'https://placeitkw.com/',
    image: 'v1793728101/Screenshot_3072.png',
    description:
      'An ecommerce store with an attractive, fast storefront, easy product browsing and search, a smooth cart and checkout experience, and a responsive design that works well on mobile and desktop.',
  }),
  make({
    title: 'Jarrah Shop',
    link: 'https://jarrahshop.com/',
    image: 'v1793728117/Screenshot_3074.png',
    description:
      'An ecommerce store with an attractive, fast storefront, easy product browsing and search, a smooth cart and checkout experience, and a responsive design that works well on mobile and desktop.',
  }),
  make({
    title: 'Getat',
    link: 'https://getat.qa/',
    image: 'v1793728116/Screenshot_3075.png',
    description:
      'An ecommerce store with an attractive, fast storefront, easy product browsing and search, a smooth cart and checkout experience, and a responsive design that works well on mobile and desktop.',
  }),
  make({
    title: 'Wafi',
    link: 'https://wafi.com.kw/',
    image: 'v1793728119/Screenshot_3081.png',
    description:
      'An ecommerce store with an attractive, fast storefront, easy product browsing and search, a smooth cart and checkout experience, and a responsive design that works well on mobile and desktop.',
  }),
];

export default storeProjects;
