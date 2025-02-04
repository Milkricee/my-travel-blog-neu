import type { Metadata } from "next";

// ✅ SEO-Metadaten für die metadata API
export const metadata: Metadata = {
  title: "Backpacking Kolumbien – Dein ultimativer Reiseguide",
  description:
    "Erkunde Kolumbien: Highlights von Bogotá, Medellín, Karibikküste & Amazonas. Tipps zu Kosten, Sicherheit, Mietwagen & günstigen Unterkünften für Backpacker!",
  keywords: [
    "Kolumbien Reisebericht",
    "Backpacking Kolumbien",
    "Bogotá",
    "Medellín",
    "Karibikküste",
    "Amazonas Kolumbien",
    "Guatapé",
    "Kolumbien Sicherheit",
    "Günstiges Reisen Kolumbien",
  ],
  openGraph: {
    title: "Backpacking Kolumbien – Dein ultimativer Reiseguide",
    description:
      "Kolumbien entdecken: Die beste Route für Backpacker! Highlights, Kosten, Sicherheit & Transport-Tipps für dein Abenteuer.",
    url: "https://deintravelblog.com/kolumbien",
    type: "article",
    images: [
      {
        url: "/images/columbien-cover-q.jpg",
        width: 1200,
        height: 630,
        alt: "Kolumbien Backpacking Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Backpacking Kolumbien – Dein ultimativer Reiseguide",
    description:
      "Kolumbien für Backpacker: Tipps zu Kosten, Transport, Sicherheit & Highlights. Perfekt für deine Reiseplanung!",
    images: ["/images/columbien-cover-q.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://deintravelblog.com/kolumbien",
  },
};
