/* ───────────────────────────────────────────────
   Restaurants & cafés — previous work
   ───────────────────────────────────────────────
   To change which hero screenshot belongs to which site,
   just edit the `image` line of that site below.
─────────────────────────────────────────────── */
const CLOUD = 'https://res.cloudinary.com/t9lxvplw/image/upload';

const make = ({ title, link, image, description, tech }) => ({
  title,
  link,
  category: 'Website',
  filter: 'restaurants',
  fullImage: true, // show the whole hero screenshot, no cropping
  description,
  image,
  tech: tech || [],
});

const restaurantProjects = [
  make({
    title: 'Olivitta Qatar',
    link: 'https://olivittaqatar.com/',
    image: `${CLOUD}/v1793728488/Screenshot_3054.png`,
    description:
      'A refined restaurant and café website in Qatar with an elegant design, a well-organized menu and a responsive layout that makes it easy for guests to browse and reach out.',
  }),
  make({
    title: 'Sami Cafe',
    link: 'https://samicafe.com.sa/',
    image: `${CLOUD}/v1793728726/Screenshot_3059.png`,
    description:
      'A warm and inviting café website showcasing drinks and treats with a clean menu layout, fast loading and a mobile-friendly design.',
  }),
  make({
    title: "Eataliano",
    link: 'https://eataliano.ae/',
    image: `${CLOUD}/v1793729095/Screenshot_3021.png`,
    description:
      'An Italian restaurant website with an appetizing menu presentation, simple navigation and a responsive design that makes it easy for guests to explore dishes and get in touch.',
  }),
  make({
    title: 'Zamzam Mandi',
    link: 'https://www.zamzammandi.om/',
    image: `${CLOUD}/v1793728741/Screenshot_3065.png`,
    description:
      'A restaurant website in Oman specialising in mandi, with a clear menu, appetising visuals and quick contact and ordering options.',
  }),
  make({
    title: 'Abu Arab Kuwait',
    link: 'https://www.abuarabkuwait.com/',
    image: `${CLOUD}/v1793728726/Screenshot_3060.png`,
    description:
      'A restaurant website in Kuwait with a rich visual menu, easy category filtering and a responsive layout built for quick ordering and enquiries.',
  }),
  make({
    title: 'Black Rabbit Kuwait',
    link: 'https://www.blackrabbitkw.com/',
    image: `${CLOUD}/v1793728701/Screenshot_3061.png`,
    description:
      'A stylish restaurant and café website with a distinctive brand look, an easy-to-browse menu and a smooth experience across all devices.',
  }),
  make({
    title: "Frank's a Lot",
    link: 'https://franksalotbah.com/',
    image: `${CLOUD}/v1793728725/Screenshot_3056.png`,
    description:
      'A bold, modern restaurant website that dynamically displays the menu with categories and fast search, designed to give a smooth experience on any device.',
  }),
  make({
    title: 'Waheed Restaurant',
    link: 'https://www.waheedrestaurant.com/',
    image: `https://res.cloudinary.com/t9lxvplw/image/upload/v1793729935/Screenshot_3053.png`,
    description:
      'A restaurant website that presents the menu clearly with appealing visuals, easy navigation and simple contact and ordering options for customers.',
  }),
  make({
    title: 'UmKhater Kitchen',
    link: 'https://umkhater.com/',
    image: `${CLOUD}/v1793728733/Screenshot_3058.png`,
    description:
      'A professional restaurant website that dynamically displays the menu with meal categories and quick search, supports online orders, and comes with a full dashboard to manage the menu, prices and orders in real time.',
  }),
  make({
    title: 'Abdoun Gourmet',
    link: 'https://www.abdoungourmet.com/',
    image: `${CLOUD}/v1793728742/Screenshot_3063.png`,
    description:
      'A gourmet restaurant website with an elegant look, a clearly organized menu and fast, mobile-friendly pages that highlight the food and the brand.',
  }),
  make({
    title: 'Al Malqa',
    link: 'https://almalqa.com/',
    image: `${CLOUD}/v1793728736/Screenshot_3064.png`,
    description:
      'A restaurant website that presents the menu with attractive imagery, easy browsing by category and a responsive layout for customers on any device.',
  }),
];

export default restaurantProjects;
