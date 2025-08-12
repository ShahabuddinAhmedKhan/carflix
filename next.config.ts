import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  poweredByHeader: false,
  images: {
    domains: ['sxgame.ddns.net',"car-wash-backend.signalsmind.com"], // Add the domain here
  },
};

export default nextConfig;
