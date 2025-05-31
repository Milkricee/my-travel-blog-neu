"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const totalImagesPC = 8; // Anzahl der Bilder im Querformat (PC)
  const totalImagesMobile = 3; // Anzahl der Bilder im Hochformat (Mobile)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Optimierter Resize-Listener mit Debounce
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

  // Optimierter Bildwechsel mit Cleanup
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 7000); // Wechsel alle 7 Sekunden

    return () => clearInterval(intervalId);
  }, [totalImages]);

  // Preload für das erste Bild
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
    <>
      <div className="background home-background">
        {/* Begrüßungstext mit halbtransparentem Hintergrund */}
        <div className="welcome-container">
          <h2 className="welcome-title">
            Willkommen bei Dan&apos;s Travelblog!
          </h2>
          <p className="welcome-text">
            Hier erzähle ich von meinen Trips und gebe Ratschläge und
            Empfehlungen zu Ländern, die ich bereist habe. Viel Spaß beim
            Erkunden!
          </p>
        </div>

        {/* Navigation für Hintergrundwechsel */}
        <button
          onClick={() =>
            setCurrentImageIndex((prev) =>
              prev === 0 ? totalImages - 1 : prev - 1
            )
          }
          className="nav-button nav-button-left"
        >
          &#8249; {/* Pfeil nach links */}
        </button>

        <button
          onClick={() =>
            setCurrentImageIndex((prev) => (prev + 1) % totalImages)
          }
          className="nav-button nav-button-right"
        >
          &#8250; {/* Pfeil nach rechts */}
        </button>
      </div>
    </>
  );
}
