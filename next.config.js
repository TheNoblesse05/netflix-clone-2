/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['upload.wikimedia.org','uhdtv.io', 'mango.blender.org', 'commondatastorage.googleapis.com', 'download.blender.org'],
    },
  }

module.exports = nextConfig
