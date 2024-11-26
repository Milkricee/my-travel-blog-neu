"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const totalImagesPC = 8; // Anzahl der Bilder im Querformat (PC)
  const totalImagesMobile = 3; // Anzahl der Bilder im Hochformat (Mobile)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Überwache die Bildschirmgröße
  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Ist true, wenn Breite ≤ 768px (mobile)
    };

    updateScreenSize(); // Initial überprüfen
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize); // Aufräumen
  }, []);

  const totalImages = isMobile ? totalImagesMobile : totalImagesPC; // Bilderanzahl basierend auf Gerätetyp

  // Automatischer Wechsel der Hintergrundbilder
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 5000); // Wechsel alle 5 Sekunden

    return () => clearInterval(interval); // Aufräumen
  }, [totalImages]);

  // Manuelles Navigieren
  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  return (
    <div
    style={{
      position: "relative",
      height: "100vh", // Vollbildhöhe
      backgroundImage: `url('/${
        isMobile ? 'background_mobile' : 'background'
      }/${currentImageIndex + 1}.jpg')`, // Hintergrundbild je nach Gerätetyp und Ordner
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      transition: "background-image 1s ease-in-out", // Weicher Übergang
    }}
    >
      {/* Begrüßungstext mit halbtransparentem Hintergrund */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Schwarzer, halbtransparenter Hintergrund
          color: "white",
          padding: "2rem",
          borderRadius: "10px",
          textAlign: "center",
          maxWidth: "90%", // Begrenzt die Breite auf kleineren Bildschirmen
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Willkommen bei Dan&apos;s Travelblog!
        </h1>
        <p style={{ fontSize: "1.2rem" }}>
          Hier erzähle ich von meinen Trips und gebe Ratschläge und Empfehlungen zu Ländern die ich bereist habe. Viel Spaß beim
          Erkunden!
        </p>
      </div>

      {/* Navigation für Hintergrundwechsel */}
      <button
        onClick={goToPreviousImage}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          color: "white",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          borderRadius: "50%",
        }}
      >
        &#8249; {/* Pfeil nach links */}
      </button>

      <button
        onClick={goToNextImage}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          color: "white",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          borderRadius: "50%",
        }}
      >
        &#8250; {/* Pfeil nach rechts */}
      </button>
    </div>
  );
}
