/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: false, // Using pages directory
  },
  images: {
    domains: [],
    formats: ["image/webp", "image/avif"],
  },
  // Enable TypeScript
  typescript: {
    ignoreBuildErrors: false,
  },
  // Enable ESLint
  eslint: {
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
