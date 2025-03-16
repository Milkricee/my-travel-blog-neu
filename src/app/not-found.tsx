"use client";

import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      {/* Meta-Tags für Suchmaschinen hinzufügen */}
      <Head>
        <title>404 - Seite nicht gefunden</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* Inhalt der 404-Seite */}
      <div className="flex flex-col items-center justify-center h-screen text-center bg-white-100 p-8 mt-9">
        <h2 className="text-4xl font-bold text-rebeccapurple mb-6">
          404 - Seite nicht gefunden
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Diese Seite befindet sich vermutlich in Bearbeitung. Bitte noch etwas
          Geduld!
        </p>
        {/* GIF mit deaktivierter Interaktion */}
        <div className="relative w-full max-w-md aspect-square mb-8">
          <iframe
            src="https://giphy.com/embed/vR1dPIYzQmkRzLZk2w"
            className="w-full h-full border-none rounded-lg pointer-events-none"
            allowFullScreen
            title="404 GIF"
          ></iframe>
        </div>
        <Link
          href="/"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg text-base hover:bg-blue-600 transition duration-300 mb-5"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </>
  );
}
