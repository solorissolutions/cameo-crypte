/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true,
    turbo: {
      rules: {
        include: [],
        exclude: [
          /thread-stream\/test/,
          /thread-stream\/bench/,
          /pino\/.*test/,
        ],
      },
    },
  },
};

