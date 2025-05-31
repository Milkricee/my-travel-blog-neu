import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nicaragua Reisebericht: Backpacking Guide & Tipps",
  description:
    "Nicaragua entdecken: Reisebericht mit Tipps zu Kosten, Transport, Sicherheit & Highlights. Von San Juan del Sur über Ometepe bis Granada - dein kompletter Guide!",
  openGraph: {
    title: "Nicaragua Reisebericht: Backpacking Guide & Tipps",
    description:
      "Nicaragua entdecken: Reisebericht mit Tipps zu Kosten, Transport, Sicherheit & Highlights. Von San Juan del Sur über Ometepe bis Granada - dein kompletter Guide!",
    url: "https://dan-travels.com/nicaragua",
    type: "article",
    images: [
      {
        url: "/images/nicaragua-cover-q.jpg",
        width: 1200,
        height: 630,
        alt: "Nicaragua Backpacking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicaragua Backpacking: Reisebericht und Tipps",
    description:
      "Nicaragua entdecken: Reisebericht mit Tipps zu Kosten, Transport, Sicherheit & Highlights. Von San Juan del Sur über Ometepe bis Granada!",
    images: ["/images/nicaragua-cover-q.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://dan-travels.com/nicaragua",
  },
};

export default function NicaraguaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
