import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configure the base path for GitHub Pages if needed
  // basePath: '/hsliu-website', // Uncomment if your repo is not named 'username.github.io'
};

export default nextConfig;
