import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.ctfassets.net"], // Erlaube Bilder von Contentful
  },
  webpack: (config) => {
    config.resolve.modules.push("node_modules");
    return config;
  },
};

export default nextConfig;
