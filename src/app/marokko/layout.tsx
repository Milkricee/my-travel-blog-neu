import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backpacking Marokko – Dein ultimativer Reiseführer",
  description:
    "Erkunde Marokko: Highlights von Marrakesch, Atlasgebirge, Sahara & mehr. Tipps zu Kosten, Sicherheit, Mietwagen & günstigen Unterkünften für Backpacker!",
  openGraph: {
    title: "Backpacking Marokko – Dein ultimativer Reiseführer",
    description:
      "Marokko erleben: Die beste Route für Backpacker! Highlights, Kosten, Sicherheit & Transport-Tipps für dein Abenteuer.",
    url: "https://deintravelblog.com/marokko",
    type: "article",
    images: [
      {
        url: "/images/marokko-cover-q.jpg",
        width: 1200,
        height: 630,
        alt: "Marokko Backpacking Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Backpacking Marokko – Dein ultimativer Reiseführer",
    description:
      "Marokko für Backpacker: Tipps zu Kosten, Transport, Sicherheit & Highlights. Perfekt für deine Reiseplanung!",
    images: ["/images/marokko-cover-q.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://deintravelblog.com/marokko",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
