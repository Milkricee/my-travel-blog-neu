"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSmiley, setShowSmiley] = useState(false); // 😢 Trauriger Smiley
  const [showHappySmiley, setShowHappySmiley] = useState(false); // 🥳 Jubel Smiley

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("analyticsConsent", "true"); // Analytics aktivieren
    setShowBanner(false);

    // 🥳 Jubel Smiley anzeigen
    setShowHappySmiley(true);
    setTimeout(() => {
      setShowHappySmiley(false);
      window.location.reload(); // 🚀 Reload erst NACH Anzeige
    }, 2000);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    localStorage.setItem("analyticsConsent", "false"); // Analytics blockieren
    setShowBanner(false);

    // 😢 Trauriges Smiley-Banner anzeigen
    setShowSmiley(true);
    setTimeout(() => {
      setShowSmiley(false);
    }, 2000);
  };

  return (
    <>
      {/* 😢 Trauriger Smiley bei Ablehnung */}
      <div
        className={`fixed bottom-10 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg transition-transform duration-500 ${
          showSmiley
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        😢 Schade, du willst keine Kekse...
      </div>

      {/* 🥳 Jubelnder Smiley bei Zustimmung */}
      <div
        className={`fixed bottom-10 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-transform duration-500 ${
          showHappySmiley
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        🥳 Dankööö!
      </div>

      {/* 🍪 Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 w-full bg-transparent text-white p-4 flex flex-col items-center text-center gap-4">
          <p className="text-sm bg-black bg-opacity-60 px-3 py-2 rounded-lg">
            Die Website nutzt Cookies 🍪. Wenn du zustimmst, hilfst du mir, das
            Nutzverhalten der Seite zu verbessern. Danke ❤️
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleAccept}
              className="bg-green-500 bg-opacity-70 text-sm px-3 py-1 rounded hover:bg-opacity-100 transition"
            >
              Akzeptieren
            </button>
            <button
              onClick={handleDecline}
              className="bg-red-500 bg-opacity-50 text-sm px-3 py-1 rounded hover:bg-opacity-100 transition"
            >
              Ablehnen
            </button>
          </div>
        </div>
      )}
    </>
  );
}
