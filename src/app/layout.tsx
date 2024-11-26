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
  title: "Dan's Travelblog",
  description: "Erlebe spannende Reiseberichte und Abenteuer weltweit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
