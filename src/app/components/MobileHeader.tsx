"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<Record<string, boolean>>(
    {}
  );

  // Funktion zum Öffnen/Schließen des Menüs
  const handleSwipe = useCallback(
    (direction: "left" | "right") => {
      if (direction === "left") {
        setIsMenuOpen(true);
      } else if (direction === "right" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    },
    [isMenuOpen]
  );

  // Funktion zum Umschalten von Dropdowns
  const handleDropdownToggle = (continent: string) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [continent]: !prevState[continent],
    }));
  };

  // Touch-Ereignisse behandeln
  useEffect(() => {
    let startX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touchX = e.touches[0].clientX;
      const direction = touchX - startX > 30 ? "right" : "left";
      handleSwipe(direction);
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleSwipe]);

  const closeMenuOnNavigate = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/imgs/cat.png"
            alt="Logo"
            width={36}
            height={36}
            className="rounded"
          />
          <h1 className="text-lg font-bold">
            <Link href="/">Dan&apos;s Travelblog</Link>
          </h1>
        </div>

        {/* Burger-Menü Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="text-white text-2xl focus:outline-none"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navigationsmenü */}
      <div
        className={`fixed top-[60px] right-0 bg-gray-700 text-white shadow-lg rounded-l-xl transition-transform duration-1000 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "Auto", height: "Auto" }}
      >
        <nav className="p-6">
          <ul className="space-y-4">
          <li className=" border-b border-white">
              <Link
                href="/about"
                className="block hover:text-blue-400"
                onClick={closeMenuOnNavigate}
              >
                Über mich
              </Link>
            </li>
            <li className=" border-b border-white ">
              <button
                className="block w-full text-left hover:text-blue-400"
                onClick={() => handleDropdownToggle("Afrika")}
              >
                Afrika
              </button>
              {isDropdownOpen["Afrika"] && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      href="/marokko"
                      className="block hover:text-blue-400"
                      onClick={closeMenuOnNavigate}
                    >
                      Marokko
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/senegal"
                      className="block hover:text-blue-400"
                      onClick={closeMenuOnNavigate}
                    >
                      Senegal
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="border-b border-white ">
              <button
                className="block w-full text-left hover:text-blue-400"
                onClick={() => handleDropdownToggle("Asien")}
              >
                Asien
              </button>
              {isDropdownOpen["Asien"] && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      href="/philippinen"
                      className="block hover:text-blue-400"
                      onClick={closeMenuOnNavigate}
                    >
                      Philippinen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/vietnam"
                      className="block hover:text-blue-400"
                      onClick={closeMenuOnNavigate}
                    >
                      Vietnam
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className=" border-b border-white">
              <button
                className="block w-full text-left hover:text-blue-400"
                onClick={() => handleDropdownToggle("Amerika")}
              >
                Amerika
              </button>
              {isDropdownOpen["Amerika"] && (
                <ul className="ml-4 space-y-2">
                  <li>
                    <Link
                      href="/nicaragua"
                      className="block hover:text-blue-400"
                      onClick={closeMenuOnNavigate}
                    >
                      Nicaragua
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/kolumbien"
                      className="block hover:text-blue-400"
                      onClick={closeMenuOnNavigate}
                    >
                      Kolumbien
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
