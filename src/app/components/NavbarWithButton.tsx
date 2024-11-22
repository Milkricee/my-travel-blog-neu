"use client";

import { useState } from "react";

interface NavbarWithButtonProps {
    links: { href: string; label: string }[]; // Links für die Navigation
    buttonTop?: string; // Optionale Anpassung der Button-Position
    navBackgroundColor?: string; // Hintergrundfarbe der Navigationsleiste
    navOpacity?: string; // Transparenz der Navigationsleiste
}

export default function NavbarWithButton({
    links,
    buttonTop = "10%",
    navBackgroundColor = "rgba(88,80,80,0.8)",
    navOpacity = "0.8",
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
                className="fixed left-0 p-3 bg-gray-500 bg-opacity-50 text-white rounded-r-lg z-50"
                style={{
                    top: buttonTop,
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40px", // Größe des Buttons
                    height: "40px", // Größe des Buttons
                }}
            >
                <span className="text-2xl">&#9660;</span>
            </button>

            {/* Navigationsleiste */}
            {isNavVisible && (
                <div
                    className="fixed left-0 shadow-md z-50 transition-transform duration-300 ease-in-out"
                    style={{
                        backgroundColor: navBackgroundColor,
                        opacity: navOpacity,
                        top: `calc(${buttonTop} + 50px)`, // Direkt unter dem Button
                        width: "auto", // Breite passt sich dem Inhalt an
                    }}
                >
                    <div className="flex flex-col p-6 space-y-6">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-blue-700 hover:text-blue-700"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
