import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // server proxy
      {
        source: '/api/:path*',
        // destination: 'http://localhost:8000/api/:path*', 
        destination: 'https://sakshammaggu-corrviz-backend.onrender.com/api/:path*', 
      },
    ];
  },
};

export default nextConfig;
