import type { Metadata } from "next";

// ✅ SEO-Metadaten für die metadata API
export const metadata: Metadata = {
  title: "Backpacking Senegal – Dein ultimativer Reisebericht",
  description:
    "Erkunde Senegal: Highlights von Dakar, Cap Skirring, Saloum-Delta & mehr. Tipps zu Kosten, Sicherheit, Transport & günstigen Unterkünften für Backpacker!",
  keywords: [
    "Senegal Reisebericht",
    "Backpacking Senegal",
    "Dakar",
    "Cap Skirring",
    "Saloum Delta",
    "M'bour",
    "Senegal Sicherheit",
    "Günstiges Reisen Senegal",
    "Senegal Mietwagen",
  ],
  openGraph: {
    title: "Backpacking Senegal – Dein ultimativer Reisebericht",
    description:
      "Senegal erleben: Die beste Route für Backpacker! Highlights, Kosten, Sicherheit & Transport-Tipps für dein Abenteuer.",
    url: "https://deintravelblog.com/senegal",
    type: "article",
    images: [
      {
        url: "/images/senegal-cover-q.jpg", // Querformat für OpenGraph
        width: 1200,
        height: 630,
        alt: "Senegal Backpacking Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Backpacking Senegal – Dein ultimativer Reisebericht",
    description:
      "Senegal für Backpacker: Tipps zu Kosten, Transport, Sicherheit & Highlights. Perfekt für deine Reiseplanung!",
    images: ["/images/senegal-cover-q.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://deintravelblog.com/senegal",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
