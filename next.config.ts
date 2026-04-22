import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '13.60.204.10',
        pathname: '/**',
      },
    ],
  },

  generateBuildId: async () => {
    return Date.now().toString();
  },
};

export default nextConfig;