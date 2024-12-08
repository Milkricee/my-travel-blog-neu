"use client";

import Link from "next/link";

export default function Custom404() {
  return (
    <div>
      <h1>
        404 - Seite nicht gefunden
      </h1>
      <p>
        Diese Seite befindet sich vermutlich in Bearbeitung. Bitte noch etwas Geduld!
      </p>
      <div>
        <iframe
          src="https://giphy.com/embed/vR1dPIYzQmkRzLZk2w"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <Link
        href="/"
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#007bff",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "0.25rem",
          fontSize: "1rem",
        }}
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}
