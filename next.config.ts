import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net", // Erlaube Bilder von Contentful
        pathname: "/**", // Erlaubt alle Bilder von dieser Domain
      },
    ],
  },
  webpack: (config) => {
    config.resolve.modules.push("node_modules");
    return config;
  },
};

export default nextConfig;
