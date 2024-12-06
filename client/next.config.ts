import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/routes/:path*',
        destination: 'http://localhost:3001/routes/:path*'
      }
    ];
  },

};

export default nextConfig;