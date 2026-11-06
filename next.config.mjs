/** @type {import('next').NextConfig} */
const nextConfig = {
  // Lets app/global-not-found.jsx render the 404 page (needed because the root layout is app/[lang]/layout.jsx).
  experimental: { globalNotFound: true },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'postimg.cc',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;
