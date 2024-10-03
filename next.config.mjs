/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eloquent-freedom-d513154e73.media.strapiapp.com',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
