import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Configure the base path for GitHub Pages
  basePath: '/hsliu-website',
};

export default nextConfig;
