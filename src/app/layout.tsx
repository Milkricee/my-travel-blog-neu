import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./components/Footer";
import "./globals.css";
import HeaderWrapper from "./components/HeaderWrapper";
import ClientAnalytics from "./components/ClientAnalytics";
import CookieBanner from "./components/CookieBanner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap", // Verbessert Ladezeit
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap", // Verbessert Ladezeit
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dan-travels.com";

export const metadata: Metadata = {
  title: "Daniel's Travelblog – Backpacking weltweit",
  description:
    "Low-Budget-Backpacking weltweit: Reisetipps, Erfahrungen und Empfehlungen für Länder wie Senegal, Kolumbien, Marokko und mehr. Perfekt für Abenteurer und Sparfüchse!",
  keywords:
    "Backpacking, solo, solobackpacker, low budget, backpacker, hostels, hostel, günstiges Reisen, Travelblog, Reisetipps, Vietnam, Kolumbien, Senegal, Marokko, Zentralamerika, Asien, Südamerika, Afrika",
  openGraph: {
    title: "Daniel's Travelblog – Backpacking weltweit",
    description:
      "Erfahre alles über günstiges Backpacking, spannende Länder wie Vietnam, Kolumbien und Marokko, und erhalte die besten Reisetipps!",
    url: siteUrl,
    type: "website",
    images: [
      {
        url: `${siteUrl}/imgs/sea.jpg`,
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
    images: [
      {
        url: `${siteUrl}/imgs/sea.jpg`,
        alt: "Daniel's Travelblog – Backpacking weltweit",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <HeaderWrapper />
        <main className="relative pt-[var(--header-height)] min-h-screen">
          {children}
        </main>
        <Footer />
        <ClientAnalytics />
        <CookieBanner />
      </body>
    </html>
  );
}
