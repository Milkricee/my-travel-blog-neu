import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.ctfassets.net"], // Erlaube Bilder von Contentful
  },

  async headers() {
    return [
      {
        source: "/:path*", // Gilt für alle HTML-Seiten
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; img-src 'self' data: https://*; script-src 'self' 'unsafe-inline' https://*; style-src 'self' 'unsafe-inline';",
          },
        ],
      },
      {
        source: "/_next/static/:path*", // Statische Next.js Assets (CSS, JS, Fonts)
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // 1 Jahr Cache für statische Dateien
          },
        ],
      },
      {
        source: "/:path*.ico", // Favicon und Icons
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, immutable", // 1 Woche Cache für Icons
          },
        ],
      },
    ];
  },

  webpack: (config) => {
    config.resolve.modules.push("node_modules");
    return config;
  },
};

export default nextConfig;
