"use client";

import { useState } from "react";

interface NavbarWithButtonProps {
    links: { href: string; label: string }[]; // Links für die Navigation
    buttonTop?: string; // Optionale Anpassung der Button-Position
    buttonSize?: string; // Größe der Buttons
    navButtonColor?: string; // Farbe der Buttons
}

export default function NavbarWithButton({
    links,
    buttonSize = "40px", // Standardgröße der Buttons
    navButtonColor = "bg-gray-800", // Standardfarbe der Buttons
}: NavbarWithButtonProps) {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible); // Navigationsleiste ein- oder ausblenden
    };

    // Dynamischer Abstand des Buttons (60px für mobile, 90px für Desktop)
    const buttonTop = typeof window !== "undefined" && window.innerWidth <= 768 ? "60px" : "90px";

    return (
        <>
            {/* Inhaltsverzeichnis Button */}
            <button
                onClick={toggleNav}
                className="fixed left-0 bg-gray-400 text-white rounded-r-lg z-50 shadow-md transition-transform duration-300"
                style={{
                    top: buttonTop,
                    width: buttonSize,
                    height: buttonSize,
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transform: `rotate(${isNavVisible ? "180deg" : "0deg"})`, // Animation für den Pfeil
                }}
            >
                <span className="text-xl">&#9660;</span>
            </button>

            {/* Navigationsleiste */}
            <div
                className={`fixed left-0 z-40 overflow-y-auto transition-all duration-300 ${
                    isNavVisible ? "max-h-[80vh]" : "max-h-0"
                }`}
                style={{
                    top: `calc(${buttonTop} + ${buttonSize})`, // Kein Abstand zwischen Button und Leiste
                    width: "150px", // Breite des Containers
                }}
            >
                {isNavVisible && (
                    <div className="flex flex-col gap-2 p-2">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className={`${navButtonColor} text-white text-center rounded-lg shadow-md p-2 hover:bg-blue-700 transition`}
                                style={{
                                    borderRadius: "10px", // Abgerundete Buttons
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
