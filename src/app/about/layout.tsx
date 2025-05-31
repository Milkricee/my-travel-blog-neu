import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über mich – Daniel's Travelblog",
  description:
    "Erfahre mehr über Daniel, den Reiseenthusiast hinter diesem Travelblog. Wirtschaftsinformatik-Student mit Leidenschaft für Low-Budget-Backpacking weltweit.",
  openGraph: {
    title: "Über mich – Daniel's Travelblog",
    description:
      "Erfahre mehr über Daniel, den Reiseenthusiast hinter diesem Travelblog. Wirtschaftsinformatik-Student mit Leidenschaft für Low-Budget-Backpacking weltweit.",
    url: "https://dan-travels.com/about",
    type: "article",
    images: [
      {
        url: "/imgs/ich.jpg",
        width: 1200,
        height: 630,
        alt: "Daniel - Reiseenthusiast und Blogger",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Über mich – Daniel's Travelblog",
    description:
      "Erfahre mehr über Daniel, den Reiseenthusiast hinter diesem Travelblog. Wirtschaftsinformatik-Student mit Leidenschaft für Low-Budget-Backpacking weltweit.",
    images: ["/imgs/ich.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://dan-travels.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
