"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white py-4 px-8 flex items-center justify-between">
      {/* Linke Seite: Logo und Titel */}
      <div className="flex items-center gap-4">
        <Image src="/imgs/cat.png" alt="Logo" width={60} height={60} />
        <h1 className="text-2xl font-bold">
          <Link href="/">Dan&apos;s Travelblog</Link>
        </h1>
      </div>

      {/* Navigation: Dynamisch anzeigen/verstecken */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex flex-wrap md:flex-nowrap gap-4 md:gap-8 items-center`}
      >
        <Link href="/about" className="hover:underline">
          About Me
        </Link>
        <div className="relative group">
          <button className="hover:underline">Afrika</button>
          <ul className="absolute hidden group-hover:block bg-white text-black py-2 rounded shadow-lg">
            <li className="px-4 py-1 hover:bg-gray-200">
              <Link href="/afrika/marokko">Marokko</Link>
            </li>
            <li className="px-4 py-1 hover:bg-gray-200">
              <Link href="/afrika/senegal">Senegal</Link>
            </li>
          </ul>
        </div>
        <div className="relative group">
          <button className="hover:underline">Asien</button>
          <ul className="absolute hidden group-hover:block bg-white text-black py-2 rounded shadow-lg">
            <li className="px-4 py-1 hover:bg-gray-200">
              <Link href="/asien/philippinen">Philippinen</Link>
            </li>
            <li className="px-4 py-1 hover:bg-gray-200">
              <Link href="/asien/vietnam">Vietnam</Link>
            </li>
          </ul>
        </div>
        <div className="relative group">
          <button className="hover:underline">Amerika</button>
          <ul className="absolute hidden group-hover:block bg-white text-black py-2 rounded shadow-lg">
            <li className="px-4 py-1 hover:bg-gray-200">
              <Link href="/amerika/nicaragua">Nicaragua</Link>
            </li>
            <li className="px-4 py-1 hover:bg-gray-200">
              <Link href="/amerika/kolumbien">Kolumbien</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Rechte Seite: Login und Registrieren */}
      <div className="hidden md:flex gap-4">
        <Link
          href="/login"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Registrieren
        </Link>
      </div>

      {/* Hamburger-Menü für kleine Bildschirme */}
      <button
        className="md:hidden bg-gray-700 px-4 py-2 rounded"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Menü
      </button>
    </header>
  );
}
