"use client";

import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-white-100 p-8 mt-9">
      <h1 className="text-4xl font-bold text-rebeccapurple mb-6">
        404 - Seite nicht gefunden
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Diese Seite befindet sich vermutlich in Bearbeitung. Bitte noch etwas Geduld!
      </p>
      {/* GIF mit deaktivierter Interaktion */}
      <div className="relative w-full max-w-md aspect-square mb-8">
        <iframe
          src="https://giphy.com/embed/vR1dPIYzQmkRzLZk2w"
          className="w-full h-full border-none rounded-lg pointer-events-none"
          allowFullScreen
        ></iframe>
      </div>
      <Link
        href="/"
        className="px-6 py-2 bg-blue-500 text-white rounded-lg text-base hover:bg-blue-600 transition duration-300 mb-5"
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}
