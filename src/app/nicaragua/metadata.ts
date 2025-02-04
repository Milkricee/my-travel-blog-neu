import type { Metadata } from "next";

// ✅ SEO-Metadaten für die metadata API (Funktioniert jetzt korrekt!)
export const metadata: Metadata = {
  title: "Backpacking Nicaragua – Dein Guide für Abenteuer & Reisen",
  description:
    "Entdecke Nicaragua: Reisebericht zu San Juan del Sur, Ometepe, Granada & der Pazifikküste. Tipps für Transport, Kosten und Sicherheit für Backpacker!",
  keywords: [
    "Nicaragua Reisebericht",
    "Backpacking Nicaragua",
    "San Juan del Sur",
    "Ometepe",
    "Granada",
    "Pazifikküste",
    "Nicaragua Transport",
    "Nicaragua Kosten",
  ],
  openGraph: {
    title: "Backpacking Nicaragua – Dein Guide für Abenteuer & Reisen",
    description:
      "Reisebericht mit Tipps zu Transport, Kosten, Sicherheit und den besten Highlights in Nicaragua.",
    url: "https://deintravelblog.com/nicaragua",
    type: "article",
    images: [
      {
        url: "/images/nicaragua-cover-q.jpg", // Querformat für OpenGraph
        width: 1200,
        height: 630,
        alt: "Nicaragua Backpacking Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Backpacking Nicaragua – Dein Guide für Abenteuer & Reisen",
    description:
      "Reisetipps zu Nicaragua: Kosten, Transport, Sicherheit und Highlights für Backpacker!",
    images: ["/images/nicaragua-cover-q.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://deintravelblog.com/nicaragua",
  },
};