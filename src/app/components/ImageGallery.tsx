"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: { src: string; alt: string; width?: number; height?: number }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsFullscreen(false);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    },
    [handleNext, handlePrev]
  );

  useEffect(() => {
    if (isFullscreen) {
      document.addEventListener("keydown", handleKeyPress);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleKeyPress);
      document.body.style.overflow = "auto";
    }
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isFullscreen, handleKeyPress]);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Vollbildmodus */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-[99999] backdrop-blur-md"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-3 hover:bg-gray-900"
          >
            {"<"}
          </button>

          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            layout="intrinsic"
            width={images[currentIndex].width || 1920}
            height={images[currentIndex].height || 1080}
            className="h-screen w-auto object-contain cursor-pointer"
            onClick={() => setIsFullscreen(false)}
          />

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

      {/* Galerie-Ansicht */}
      <div className="w-full flex justify-center items-center">
        {images.map((image, index) => {
          const isVertical = (image.width || 1) < (image.height || 1);
          return (
            <Image
              key={index}
              onClick={() => setCurrentIndex(index)}
              src={image.src}
              alt={image.alt}
              width={isVertical ? 250 : 800}
              height={isVertical ? 400 : 500}
              className="max-h-[400px] object-contain cursor-pointer"
            />
          );
        })}
      </div>
    </div>
  );
}
