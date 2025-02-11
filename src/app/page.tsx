"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const totalImagesPC = 8; // Anzahl der Bilder im Querformat (PC)
  const totalImagesMobile = 3; // Anzahl der Bilder im Hochformat (Mobile)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // **Optimierter Resize-Listener mit Debounce**
  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateScreenSize(); // Initial aufrufen

    const resizeListener = () => {
      const win = window as unknown as {
        resizeTimer?: ReturnType<typeof setTimeout>;
      };
      clearTimeout(win.resizeTimer);
      win.resizeTimer = setTimeout(updateScreenSize, 200);
    };

    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  const totalImages = isMobile ? totalImagesMobile : totalImagesPC;
  const currentImage = `/${isMobile ? "background_mobile" : "background"}/${
    (currentImageIndex % totalImages) + 1
  }.avif`;

  // **Optimierter Bildwechsel mit Cleanup**
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 7000); // Wechsel alle 7 Sekunden

    return () => clearInterval(intervalId);
  }, [totalImages]);

  // **Preload für das erste Bild → FIX: Berechnung im useEffect selbst**
  useEffect(() => {
    const img = new Image();
    img.src = currentImage;
    img.onload = () => {
      const backgroundElement = document.querySelector(".background");
      if (backgroundElement) {
        (
          backgroundElement as HTMLElement
        ).style.backgroundImage = `url('${currentImage}')`;
      }
    };
  }, [currentImage]);

  return (
    <div
      className="background"
      style={{
        position: "relative",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Begrüßungstext mit halbtransparentem Hintergrund */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          padding: "2rem",
          borderRadius: "10px",
          textAlign: "center",
          maxWidth: "90%", // Begrenzt die Breite auf kleineren Bildschirmen
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Willkommen bei Dan&apos;s Travelblog!
        </h1>
        <p style={{ fontSize: "1.2rem" }}>
          Hier erzähle ich von meinen Trips und gebe Ratschläge und Empfehlungen
          zu Ländern, die ich bereist habe. Viel Spaß beim Erkunden!
        </p>
      </div>

      {/* Navigation für Hintergrundwechsel */}
      <button
        onClick={() =>
          setCurrentImageIndex((prev) =>
            prev === 0 ? totalImages - 1 : prev - 1
          )
        }
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
        onClick={() => setCurrentImageIndex((prev) => (prev + 1) % totalImages)}
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
