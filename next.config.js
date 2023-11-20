/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["m.media-amazon.com"],
    minimumCacheTTL: 3600,
  },
};

module.exports = nextConfig;
