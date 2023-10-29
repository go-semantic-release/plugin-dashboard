/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    VERSION: process.env.VERSION || "0.0.0-dev",
  },
};

module.exports = nextConfig;
