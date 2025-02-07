import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dan-travels.com/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://dan-travels.com/about",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://dan-travels.com/kolumbien",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://dan-travels.com/senegal",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://dan-travels.com/marokko",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://dan-travels.com/nicaragua",
      lastModified: new Date().toISOString(),
    },
     {
      url: "https://dan-travels.com/datenschutz",
      lastModified: new Date().toISOString(),
    },
  ];
}
