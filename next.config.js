/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  redirects: async () => [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.be-spics.com' }],
      destination: 'https://be-spics.com/:path*',
      permanent: true
    }
  ]
};

module.exports = nextConfig;
