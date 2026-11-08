/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  // apex -> www in one hop (the canonical host used by the sitemap, canonicals and hreflang)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'codelegacy.tech' }],
        destination: 'https://www.codelegacy.tech/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        // images in /public keep their names when replaced, so cache for a week (not "immutable")
        source: '/:all*(webp|jpg|jpeg|png|svg|avif|woff2)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' }],
      },
    ];
  },
  // Lets app/global-not-found.jsx render the 404 page (needed because the root layout is app/[lang]/layout.jsx).
  experimental: { globalNotFound: true },
    images: {
    formats: ['image/avif', 'image/webp'],
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
