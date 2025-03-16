import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [
      // just for strapi cms
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
        search: '',
      },
    ],
  }
};

export default nextConfig;
