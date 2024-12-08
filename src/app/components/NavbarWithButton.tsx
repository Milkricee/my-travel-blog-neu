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
    buttonTop = "10%",
    buttonSize = "40px", // Standardgröße der Buttons
    navButtonColor = "bg-gray-800", // Standardfarbe der Buttons
}: NavbarWithButtonProps) {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible); // Navigationsleiste ein- oder ausblenden
    };

    return (
        <>
            {/* Inhaltsverzeichnis Button */}
            <button
                onClick={toggleNav}
                className="fixed left-0 bg-gray-400 text-white rounded-r-lg z-50 shadow-md"
                style={{
                    top: buttonTop,
                    width: buttonSize,
                    height: buttonSize,
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <span className="text-xl">&#9660;</span>
            </button>

            {/* Navigationsleiste */}
            {isNavVisible && (
                <div
                    className="fixed left-0 z-50 transition-transform duration-300 ease-in-out"
                    style={{
                        top: `calc(${buttonTop} + ${buttonSize} + 20px)`, // Abstand zum Button erhöht
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px", // Abstand zwischen den Buttons
                    }}
                >
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className={`${navButtonColor} text-white text-center rounded-lg shadow-md p-2 hover:bg-blue-700 transition`}
                            style={{
                                borderRadius: "10px", // Abgerundete Buttons
                                width: "150px", // Button-Breite
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </>
    );
}
