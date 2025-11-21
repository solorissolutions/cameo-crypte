/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // disable Turbopack
    optimizeCss: {
      experimental: {
        dev: true, // enable CSS optimization in dev
      },
    },
  },

  // These belong at the top level, not inside experimental
  serverComponentsExternalPackages: ["pino", "pino-pretty"],

  images: {
    domains: [],
  },
};

module.exports = nextConfig;

