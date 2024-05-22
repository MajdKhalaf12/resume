/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  distDir: "out",
  output: "export",
};

module.exports = nextConfig;
