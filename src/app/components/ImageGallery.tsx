"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null); // Startpunkt der Swipe-Geste

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

  // Touch-Event für Swipe (Mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX) return;

    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      // Swipe nach links → nächstes Bild
      handleNext();
      setTouchStartX(null);
    } else if (diff < -50) {
      // Swipe nach rechts → vorheriges Bild
      handlePrev();
      setTouchStartX(null);
    }
  };

  useEffect(() => {
    if (isFullscreen) {
      document.addEventListener("keydown", handleKeyPress);
    } else {
      document.removeEventListener("keydown", handleKeyPress);
    }
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isFullscreen, currentIndex]);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Vollbildansicht */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50"
          onClick={() => setIsFullscreen(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white rounded-full p-2 hover:bg-gray-900"
            style={{ width: "40px", height: "40px" }}
          >
            {"<"}
          </button>

          {/* Bildbeschreibung im Vollbildmodus */}
          <div className="absolute bottom-8 w-full text-center bg-gray-800 bg-opacity-70 text-white py-2 px-4 rounded-md max-w-lg mx-auto">
            {images[currentIndex].alt}
          </div>

          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={1200}
            height={800}
            className="rounded-lg shadow-lg object-contain max-w-full max-h-full"
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white rounded-full p-2 hover:bg-gray-900"
            style={{ width: "40px", height: "40px" }}
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
      <br />

      {/* Navigationsbuttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white rounded-full p-2 hover:bg-gray-900"
        style={{ width: "40px", height: "40px" }}
      >
        {"<"}
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white rounded-full p-2 hover:bg-gray-900"
        style={{ width: "40px", height: "40px" }}
      >
        {">"}
      </button>
    </div>
  );
}
