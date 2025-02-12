import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    // swcMinify: false // it should be false by default 
    eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
