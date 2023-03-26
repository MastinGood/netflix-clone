/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'about.netflix.com', 'bit.ly'],
  },
}

module.exports = nextConfig
