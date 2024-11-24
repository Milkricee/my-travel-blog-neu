"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Aktuelles Bild */}
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        width={800}
        height={500}
        className="rounded-lg shadow-lg object-contain max-w-full max-h-[70vh]" // Passt die Größe an
      />
      <p className="text-sm text-gray-500 mt-2 text-center">
        {images[currentIndex].alt}
      </p>

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
