import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dan-travels.com/",
      lastModified: new Date().toISOString(),
    },
  ];
}
