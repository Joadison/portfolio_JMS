/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dis",
  output: "out",
  basePath: "/portfolio_JMS",
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
