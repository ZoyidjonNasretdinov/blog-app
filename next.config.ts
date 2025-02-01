/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // App Router yoqilgan bo‘lishi kerak
  },
  compiler: {
    emotion: true, // Emotion ni qo'llab-quvvatlash
  },
  images: {
    domains: ['via.placeholder.com'], // Rasm domenini qo'shish
  },
};

module.exports = nextConfig;
