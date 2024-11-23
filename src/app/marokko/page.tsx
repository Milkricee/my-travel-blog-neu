"use client";

import { useState } from "react";
import Image from "next/image";

export default function Marokko() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

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
            {/* Inhaltsverzeichnis Button */}
            <button
                onClick={toggleNav}
                className="fixed top-[10%] left-0 p-3 bg-gray-500 bg-opacity-50 text-white rounded-r-lg z-50"
                style={{
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40px",
                    height: "40px",
                }}
            >
                <span className="text-2xl">&#9660;</span>
            </button>

            {/* Navigationsleiste */}
            {isNavVisible && (
                <div
                    className="fixed left-0 bg-[rgba(88,80,80,0.8)] shadow-md z-50 transition-transform duration-300 ease-in-out"
                    style={{
                        height: "auto",
                        top: "calc(10% + 50px)",
                        width: "auto",
                    }}
                >
                    <div className="flex flex-col p-6 space-y-6">
                        <a href="#intro" className="text-blue-700 hover:text-blue-700">Einführung</a>
                        <a href="#pro-contra" className="text-blue-700 hover:text-blue-700">Pro & Contra</a>
                        <a href="#bildergalerie" className="text-blue-700 hover:text-blue-700">Bildergalerie</a>
                        <a href="#highlights" className="text-blue-700 hover:text-blue-700">Highlights</a>
                    </div>
                </div>
            )}

            {/* Einführung */}
            <div id="intro" className="border border-gray-300 bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h1 className="text-4xl font-bold text-center mb-8">Mein Marokko-Urlaub</h1>
                <p className="text-lg text-center mb-8">
                    Marokko ist eines meiner Lieblingsreiseziele. Die Vielfalt des Landes ist einfach unglaublich. <br />
                    Es ist nicht so weit weg, es hat eine erstaunlich krasse Vielfalt an Kultur und Landschaft und es ist auch recht günstig. 
                    Und selbst im Winter ist es dort noch angenehm warm. <br />
                    Das war mein 2. Trip. <br />
                    Zum 1. Trip geht&apos;s <a href="/1-trip" className="text-blue-500 underline hover:text-blue-700">hier lang</a>.
                </p>
            </div>

            {/* Pro und Contra */}
            <div id="pro-contra" className="border border-gray-300 bg-white p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold text-center mt-12 mb-4">Gründe nach Marokko zu reisen</h2>
                <div className="border-t border-gray-300 my-6"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Pro</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Nicht so weit weg</li>
                            <li>Selbst im Winter warm</li>
                            <li>Sehr günstig</li>
                            <li>Sicher (ja, Marokko ist tatsächlich ein sehr sicheres Reiseland)</li>
                            <li>Erstaunlich gute Straßenverhältnisse</li>
                            <li>Gutes Essen</li>
                            <li>Perfekt zum Surfen</li>
                            <li>Sehr gastfreudige Menschen</li>
                            <li>Günstiges Haschisch (ich kiffe leider nicht)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contra</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Der Verkehr, vor allem in den großen Städten, ist sehr chaotisch</li>
                            <li>Sehr großes Land (in 2 Wochen kann man viel sehen, sieht aber bei weitem nicht alles)</li>
                            <li>Die Straßenhändler in den touristischen Regionen können sehr aufdringlich sein</li>
                        </ul>
                    </div>
                </div>
            </div>

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

            {/* Meine Route */}
            <div id="highlights" className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Meine Route</h2>
                <ul className="list-disc pl-6">
                    <li className="mb-2">Die geschäftigen Märkte und farbenfrohen Souks in Marrakesch.</li>
                    <li className="mb-2">Eine Wanderung durch das Atlasgebirge – atemberaubende Aussichten!</li>
                    <li className="mb-2">Die Ruhe und Gelassenheit an den Stränden von Essaouira.</li>
                    <li className="mb-2">Abenteuerliche Fahrten durch die Wüste und Nächte unter den Sternen.</li>
                </ul>
            </div>
        </div>
    );
}
