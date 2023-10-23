/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  target: 'experimental-serverless-trace',
  future: {
    webpack5: true,
  },
};

module.exports = nextConfig;
