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

  // Funktion zur Ermittlung, ob das Gerät mobil ist
  const isMobile = () => window.innerWidth <= 768;

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Vollbildansicht */}
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

          {/* Bildcontainer: sorgt für exakte Zentrierung */}
          <div
            className={`relative flex justify-center items-center w-[80vw] ${
              isMobile() ? "h-auto w-full" : "h-[80vh]"
            }`}
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className={`object-contain ${
                isMobile() ? "w-full" : "w-full h-full scale-95"
              } transition-all duration-300 ease-in-out`}
            />
          </div>

          {/* Bildbeschreibung AM UNTEREN RAND FEST POSITIONIERT */}
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 bg-opacity-80 text-white text-lg px-5 py-3 rounded-lg shadow-lg max-w-[80%] text-center">
            {images[currentIndex].alt}
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

      {/* Standard-Bildanzeige */}
      <Image
        onClick={handleImageClick}
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        width={800}
        height={500}
        className="rounded-lg shadow-lg object-contain max-w-full max-h-[70vh] cursor-pointer"
      />
      <p className="text-sm text-gray-500 mt-2 text-center">
        {images[currentIndex].alt}
      </p>

      {/* Pfeil links */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 hover:bg-gray-900"
      >
        {"<"}
      </button>

      {/* Pfeil rechts */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 hover:bg-gray-900"
      >
        {">"}
      </button>
    </div>
  );
}
