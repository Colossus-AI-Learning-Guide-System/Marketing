/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  images: {
    domains: ["images.unsplash.com", "i.imgur.com"],
    unoptimized: true, // Disable image optimization for static export
  },
};

module.exports = nextConfig;