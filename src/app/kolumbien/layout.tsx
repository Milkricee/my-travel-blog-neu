import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reisebericht Kolumbien: Tipps & Highlights für Backpacker",
  description:
    "Erfahre alles über Kolumbien: Tipps zu Budget, Sicherheit, Highlights, und Sehenswürdigkeiten. Besuche Bogotá, Medellín, Karibikküste und mehr!",
  openGraph: {
    title: "Reisebericht Kolumbien: Backpacker Guide",
    description:
      "Kolumbien entdecken: Von den besten Sehenswürdigkeiten in Bogotá bis zu den abgelegenen Orten in der Amazonas-Region. Dein Guide für das Abenteuer!",
    url: "https://dan-travels.com/kolumbien",
    type: "article",
    images: [
      {
        url: "/images/columbien-cover-q.jpg",
        width: 1200,
        height: 630,
        alt: "Kolumbien Backpacking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolumbien Backpacking: Reisebericht und Tipps",
    description:
      "Erfahre alles über Kolumbien: Sehenswürdigkeiten, Tipps und Tricks für Backpacker, und deine perfekte Reiseplanung.",
    images: ["/images/columbien-cover-q.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://dan-travels.com/kolumbien",
  },
};

export default function KolumbienLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
