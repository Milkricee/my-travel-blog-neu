import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./components/Footer"; // Importiere den Footer
import Header from "./components/Header"; // Importiere den Header
import "./globals.css";

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
  title: "Dan's Travelblog",
  description: "Erlebe spannende Reiseberichte und Abenteuer weltweit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full flex flex-col`}
      >
        <Header /> {/* Header oben */}
        <main className="flex-grow">{children}</main> {/* Hauptinhalt */}
        <Footer /> {/* Footer unten */}
      </body>
    </html>
  );
}
