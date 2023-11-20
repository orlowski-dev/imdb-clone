/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //domains: ["m.media-amazon.com"],
    minimumCacheTTL: 3600,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
    ],
  },
};

module.exports = nextConfig;
