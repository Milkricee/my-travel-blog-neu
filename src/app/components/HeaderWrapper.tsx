"use client";

import { useEffect, useState } from "react";
import Header from "./Header"; // PC-Version
import MobileHeader from "./MobileHeader"; // Mobile-Version

export default function HeaderWrapper() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Funktion zur Prüfung der Bildschirmbreite
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768); // Mobile: Breite kleiner als 768px
    };

    checkViewport(); // Direkt beim Laden ausführen
    window.addEventListener("resize", checkViewport); // Auf Änderungen reagieren

    return () => window.removeEventListener("resize", checkViewport); // Eventlistener entfernen
  }, []);

  return isMobile ? <MobileHeader /> : <Header />;
}
