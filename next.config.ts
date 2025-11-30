import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
   // Allow all local network IPs (10.x.x.x, 192.168.x.x, etc.)
  allowedDevOrigins: ['*'],
};

export default nextConfig;
