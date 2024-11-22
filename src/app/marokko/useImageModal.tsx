"use client";

import { useState } from "react";
import Image from "next/image";

export default function Marokko() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        "/marokko/atlas1.jpg",
        "/marokko/dünen.jpg",
        "/marokko/paradise.jpg",
        "/marokko/atlas3.jpg",
        "/marokko/fischereihafen.jpg",
    ];

    const openModal = (imageSrc: string, index: number) => {
        setModalImage(imageSrc);
        setCurrentIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const navigateImages = (direction: "next" | "prev") => {
        const newIndex =
            direction === "next"
                ? (currentIndex + 1) % images.length
                : (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
        setModalImage(images[newIndex]);
    };

    return (
        <div className="p-8 bg-gray-100 relative">
            {/* Bildergalerie */}
            <div id="bildergalerie" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer"
                        onClick={() => openModal(image, index)}
                    >
                        <Image
                            src={image}
                            alt={`Bild ${index + 1}`}
                            width={400}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                        <p className="text-center mt-2 text-sm text-gray-700">{`Bild ${index + 1}`}</p>
                    </div>
                ))}
            </div>

            {/* Modal für Vollbildmodus */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <button
                        onClick={closeModal}
                        className="absolute top-5 right-5 text-white text-xl"
                    >
                        X
                    </button>
                    <button
                        onClick={() => navigateImages("prev")}
                        className="absolute left-5 text-white text-3xl"
                    >
                        {"<"}
                    </button>
                    <button
                        onClick={() => navigateImages("next")}
                        className="absolute right-5 text-white text-3xl"
                    >
                        {">"}
                    </button>
                    <Image
                        src={modalImage}
                        alt="Vollbild"
                        width={1000}
                        height={750}
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            )}
        </div>
    );
}
