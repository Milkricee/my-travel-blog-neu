"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamische Importe
const NavbarWithButton = dynamic(
  () => import("../components/NavbarWithButton"),
  { ssr: false }
);
export default function Pakistan() {
  return (
    <div
      className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8"
      style={{ paddingTop: "var(--header-height)" }}
    >
      {/* Header-Bereich */}
      <NavbarWithButton links={[{ href: "#pakistan", label: "Pakistan" }]} />

      <header className="text-center mb-8" style={{ color: "black" }}>
        <h2 className="text-4xl font-bold mb-4">Pakistan</h2>
        <p>
          Aktuell befinde ich mich für ein paar Wochen in Pakistan.
          <br />
          Sobald ich zurück bin, werde ich den Inhalt dieser Seite aktualisieren
          und über meine Erlebnisse berichten.
          <br />
          <br />
          Bleibt gespannt!
        </p>
      </header>

      <article className="container-style">
        {/* Abschnitt */}
        <section id="pakistan">
          <h2 className="text-xl font-semibold mt-4">Demnächst mehr...</h2>
          <p>Weitere Inhalte folgen nach meiner Rückkehr.</p>
        </section>
      </article>
      {/* Button zum Startmenü */}
      <div className="text-center mt-6">
        <Link href="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Zurück zum Startmenü
          </button>
        </Link>
      </div>
    </div>
  );
}
