import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./components/Footer";
import "./globals.css";
import HeaderWrapper from "./components/HeaderWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Daniel's Travelblog – Backpacking weltweit",
  description:
    "Reisetipps, Erfahrungen und Empfehlungen für Backpacking und günstiges Reisen in Vietnam, Kolumbien, Marokko und mehr. Entdecke die Welt als Budget-Reisender!",
  keywords:
    "Backpacking, günstiges Reisen, Travelblog, Reisetipps, Vietnam, Kolumbien, Marokko, Zentralamerika, Asien, Südamerika, Afrika",
  openGraph: {
    title: "Daniel's Travelblog – Backpacking weltweit",
    description:
      "Erfahre alles über günstiges Backpacking, spannende Länder wie Vietnam, Kolumbien und Marokko, und erhalte die besten Reisetipps!",
    url: "https://deintravelblog.com",
    type: "website",
    images: [
      {
        url: "/imgs/sea.jpg",
        width: 1200,
        height: 630,
        alt: "Daniel's Travelblog – Backpacking weltweit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@deintravelblog",
    title: "Daniel's Travelblog – Backpacking weltweit",
    description:
      "Budget-Reisetipps für Vietnam, Kolumbien, Marokko und mehr. Perfekt für Backpacker und Abenteurer!",
    images: "/imgs/sea.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          margin: 0,
          padding: 0,
          overflowX: "hidden", // Verhindert horizontales Scrollen
        }}
      >
        <HeaderWrapper />
        <main
  style={{
    minHeight: "100vh",
    position: "relative",
    paddingTop: "var(--header-height)", // Dynamisch anhand der CSS-Variable
  }}
>
  {children}
</main>

        <Footer />
      </body>
    </html>
  );
}
