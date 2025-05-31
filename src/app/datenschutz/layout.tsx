import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung - Dan's Travelblog",
  description:
    "Hier findest du alle Informationen zum Datenschutz auf Dan's Travelblog gemäß DSGVO.",
  robots: "index, follow",
  alternates: {
    canonical: "https://dan-travels.com/datenschutz",
  },
};

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
