"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { auth } from "@/app/firebaseConfig"; // Firebase Config importieren
import { onAuthStateChanged, signOut, User } from "firebase/auth";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null); // Benutzerstatus

  // Überwache Authentifizierungsstatus
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Setze Benutzerstatus
    });
    return () => unsubscribe(); // Aufräumen
  }, []);

  // Logout-Funktion
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Erfolgreich abgemeldet!");
    } catch (error) {
      console.error("Fehler beim Logout:", error);
    }
  };

  return (
    <header className="bg-gray-800 text-white py-4 px-8 flex flex-col md:flex-row md:items-center md:justify-between z-20 relative">
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
        } md:flex flex-wrap md:flex-nowrap gap-4 md:gap-8 items-center mt-4 md:mt-0`}
      >
        <Link href="/about" className="hover:underline">
          About Me
        </Link>
        <div className="relative group">
          <button className="hover:underline">Afrika</button>
          <ul className="absolute hidden group-hover:block bg-white text-black py-2 rounded shadow-lg">
            <li className="px-4 py-1 hover:bg-gray-200">
              <Link href="/marokko">Marokko</Link>
            </li>
            <li className="px-4 py-1 hover:bg-gray-200">
              <Link href="/senegal">Senegal</Link>
            </li>
          </ul>
        </div>
        <div className="relative group">
          <button className="hover:underline">Asien</button>
          <ul className="absolute hidden group-hover:block bg-white text-black py-2 rounded shadow-lg">
            <li className="px-4 py-1 hover:bg-gray-200">
              <Link href="/philippinen">Philippinen</Link>
            </li>
            <li className="px-4 py-1 hover:bg-gray-200">
              <Link href="/vietnam">Vietnam</Link>
            </li>
          </ul>
        </div>
        <div className="relative group">
          <button className="hover:underline">Amerika</button>
          <ul className="absolute hidden group-hover:block bg-white text-black py-2 rounded shadow-lg">
            <li className="px-4 py-1 hover:bg-gray-200">
              <Link href="/nicaragua">Nicaragua</Link>
            </li>
            <li className="px-4 py-1 hover:bg-gray-200">
              <Link href="/kolumbien">Kolumbien</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Rechte Seite: Login/Logout und Registrieren */}
      <div
        className={`flex items-center gap-4 mt-4 md:mt-0 ${
          isMenuOpen ? "flex-col" : "flex-row"
        }`}
      >
        {user ? (
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="text-gray-300 text-sm md:text-base break-words">
              Willkommen, {user.email}
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </Link>
        )}
      </div>

      {/* Hamburger-Menü für kleine Bildschirme */}
      <button
        className="md:hidden bg-gray-700 px-4 py-2 rounded mt-4 md:mt-0"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Menü
      </button>
    </header>
  );
}
