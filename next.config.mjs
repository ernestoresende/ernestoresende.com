/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    swcMinify: true
  },
  images: {
    formats: ['image/avif', 'image/webp']
  }
}

export default config
