"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleImageClick = () => {
    setIsFullscreen(true);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsFullscreen(false);
    } else if (e.key === "ArrowRight") {
      handleNext();
    } else if (e.key === "ArrowLeft") {
      handlePrev();
    }
  };

  // Touch-Event für Swipe-Geste (Mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX) return;

    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      handleNext();
      setTouchStartX(null);
    } else if (diff < -50) {
      handlePrev();
      setTouchStartX(null);
    }
  };

  useEffect(() => {
    if (isFullscreen) {
      document.addEventListener("keydown", handleKeyPress);
      document.body.style.overflow = "hidden"; // Scrolling im Hintergrund verhindern
    } else {
      document.removeEventListener("keydown", handleKeyPress);
      document.body.style.overflow = "auto"; // Scrolling wieder aktivieren
    }
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isFullscreen, currentIndex]);
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Vollbildmodus (nimmt die gesamte Bildschirmbreite ein, Höhe passt sich an) */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-[99999] backdrop-blur-md"
          onClick={() => setIsFullscreen(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {/* Pfeil links */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-3 hover:bg-gray-900"
          >
            {"<"}
          </button>

          {/* Hochwertiges Bild im Vollbildmodus */}
          <div className="relative w-full h-full flex justify-center items-center">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={1920} // Maximale Auflösung für Schärfe
              height={1080} // Höhe wird automatisch angepasst
              className="w-full h-auto max-w-screen max-h-screen object-contain cursor-pointer"
              onClick={() => setIsFullscreen(false)}
            />
          </div>

          {/* Pfeil rechts */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-3 hover:bg-gray-900"
          >
            {">"}
          </button>
        </div>
      )}

      {/* Standardansicht: Bild passt sich der Bildschirmbreite an, Höhe skaliert automatisch */}
      <div className="w-full flex justify-center items-center">
        <Image
          onClick={handleImageClick}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={800} // Fest definierte Breite für schärfere Darstellung
          height={500} // Höhe wird proportional angepasst
          className="w-full h-auto rounded-lg shadow-lg object-cover cursor-pointer"
        />
      </div>

      <p className="text-sm text-gray-500 mt-2 text-center">
        {images[currentIndex].alt}
      </p>

      {/* Pfeile für Desktop */}
      <button
        onClick={handlePrev}
        className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 hover:bg-gray-900"
      >
        {"<"}
      </button>

      <button
        onClick={handleNext}
        className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 hover:bg-gray-900"
      >
        {">"}
      </button>
    </div>
  );
}
