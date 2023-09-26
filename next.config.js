/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'la-leyenda.com',
      },
    ],
  },
}

module.exports = nextConfig
