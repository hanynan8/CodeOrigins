/* ───────────────────────────────────────────────
   Educational platforms — previous work
   To change a site's hero screenshot, edit its `image` line.
─────────────────────────────────────────────── */
const CLOUD = 'https://res.cloudinary.com/t9lxvplw/image/upload';

const make = ({ title, link, image, description, tech }) => ({
  title,
  link,
  category: 'Website',
  filter: 'education',
  fullImage: true, // show the whole hero screenshot, no cropping
  description,
  image: `${CLOUD}/${image}`,
  tech: tech || [],
});

const educationProjects = [
  make({
    title: 'Pulse Trainings',
    link: 'https://pulsetrainings.com/',
    image: 'v1793727739/Screenshot_3041.png',
    description:
      'An educational platform presenting training programs and courses in a clean, professional layout, with clear course browsing and easy registration and contact options.',
  }),
  make({
    title: 'EduMaster',
    link: 'https://edumaster365.com',
    image: 'v1793727754/Screenshot_3047.png',
    description:
      'A modern educational platform that dynamically displays courses and lessons with a secure login system for users. Students can easily follow the content, while the admin dashboard lets the manager add courses, manage users, and update content at any time. The system was built to deliver high performance and a professional user experience.',
  }),
  make({
    title: 'Suited',
    link: 'https://www.suited.ae/',
    image: 'v1793727758/Screenshot_3050.png',
    description:
      'A professional education and training website with a refined look, structured content, and simple contact options for prospective learners.',
  }),
  make({
    title: 'Learn.sa',
    link: 'https://learn.sa/',
    image: 'v1793727747/Screenshot_3043.png',
    description:
      'An educational website for presenting learning content and programs, with a modern responsive design and a clear path for learners to get started.',
  }),
  make({
    title: 'Atqen',
    link: 'https://atqen.co/',
    image: 'v1793727755/Screenshot_3048.png',
    description:
      'An educational platform for courses and skill development, featuring a polished landing experience and clear calls to action for enrollment.',
  }),
  make({
    title: 'Nanmo',
    link: 'https://nanmo.org/',
    image: 'v1793727746/Screenshot_3044.png',
    description:
      'A learning and development website presenting programs and content with an attractive, easy-to-use interface and quick access to registration and inquiries.',
  }),
  make({
    title: 'Taleb',
    link: 'https://taleb.run/',
    image: 'v1793727755/Screenshot_3045.png',
    description:
      'A student-focused learning platform with a simple, intuitive design that helps learners find courses and content quickly.',
  }),
  make({
    title: 'Daresni',
    link: 'https://daresni.net',
    image: 'v1793727748/Screenshot_3042.png',
    description:
      'An online learning platform that connects students with lessons and courses, designed for easy navigation and a smooth experience on mobile and desktop.',
  }),
  make({
    title: 'BrainBash',
    link: 'https://brainbash.me/',
    image: 'v1793727755/Screenshot_3049.png',
    description:
      'An engaging learning website with a lively, modern design that makes educational content approachable and easy to explore.',
  }),
  make({
    title: 'Legatos',
    link: 'https://www.legatos.om/',
    image: 'v1793727757/Screenshot_3051.png',
    description:
      'An educational website with a clean, responsive layout that presents programs clearly and makes it easy for visitors to get in touch.',
  }),
];

export default educationProjects;
