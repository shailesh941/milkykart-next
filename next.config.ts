import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:'standalone',
  /* config options here */
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
    ],
  },
  
};

export default nextConfig;
