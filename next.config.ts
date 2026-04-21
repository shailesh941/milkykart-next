import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.dummyjson.com', 'picsum.photos'],
  },
  remotePatterns: [
    {
      protocol: 'http',
      hostname: '13.60.211.114',
      port: '', // optional (leave empty unless using custom port)
      pathname: '/**',
    },
  ],
};

export default nextConfig;
