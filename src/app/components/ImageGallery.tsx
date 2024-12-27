"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false); // Vollbildmodus-Status

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleImageClick = () => {
    setIsFullscreen(true); // Vollbildmodus aktivieren
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsFullscreen(false); // Vollbildmodus schließen
    } else if (e.key === "ArrowRight") {
      handleNext(); // Nächstes Bild
    } else if (e.key === "ArrowLeft") {
      handlePrev(); // Vorheriges Bild
    }
  };

  useEffect(() => {
    if (isFullscreen) {
      document.addEventListener("keydown", handleKeyPress);
    } else {
      document.removeEventListener("keydown", handleKeyPress);
    }
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isFullscreen, currentIndex]); // Abhängig von `isFullscreen` und `currentIndex`

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Vollbildansicht */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={() => setIsFullscreen(false)} // Klick schließt Vollbildmodus
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

      {/* Aktuelles Bild */}
      <Image
        onClick={handleImageClick} // Klick öffnet Vollbildmodus
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
      {/* Pfeil links */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white rounded-full p-2 hover:bg-gray-900"
        style={{ width: "40px", height: "40px" }}
      >
        {"<"}
      </button>

      {/* Pfeil rechts */}
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
