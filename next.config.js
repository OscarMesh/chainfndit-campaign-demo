/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "chainfundit.com",
      "chainfundit-campaign-demo.vercel.app",
      "www.midsouthfcu.org",
    ],
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
