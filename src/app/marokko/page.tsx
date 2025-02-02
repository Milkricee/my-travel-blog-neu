"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image";
import MarokkoRoute from "../maps/marokko";
import "./module.css";

const NavbarWithButton = dynamic(
  () => import("../components/NavbarWithButton"),
  { ssr: false }
);
const Comments = dynamic(() => import("../components/comments"), {
  ssr: false,
});

export default function Marokko() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/marokko/atlas1.jpg",
      description: "Atemberaubende Aussicht im Atlasgebirge",
    },
    {
      src: "/marokko/dacia.jpg",
      description: "Mit dem Dacia durch Marokkos Landschaft",
    },
    { src: "/marokko/dünen.jpg", description: "Dünenlandschaft in der Wüste" },
    {
      src: "/marokko/paradise.jpg",
      description: "Ein paradiesischer Ort zum Entspannen",
    },
    {
      src: "/marokko/atlas3.jpg",
      description: "Eine beeindruckende Sicht auf ein kleines Bergdorf",
    },
    {
      src: "/marokko/fischereihafen.jpg",
      description: "Der geschäftige Fischereihafen von Essaouira",
    },
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
    setModalImage(images[newIndex].src);
  };

  return (
    <div className="container-style">
      {/* Inhaltsverzeichnis mit allgemeiner Komponente */}
      <NavbarWithButton
        links={[
          { href: "#intro", label: "Einführung" },
          { href: "#pro-contra", label: "Pro & Contra" },
          { href: "#bildergalerie", label: "Bildergalerie" },
          { href: "#highlights", label: "Highlights" },
          { href: "#comments", label: "Kommentare" },
        ]}
      />
      {/* Einführung */}
      <article className="container-style">
        <div id="intro">
          <h1 className="text-4xl font-bold text-center mb-8 mt-9">
            Mein Marokko-Trip
          </h1>
          <p className="text-lg text-center mb-8">
            Marokko ist eines meiner Lieblingsreiseziele. Die Vielfalt des
            Landes ist einfach unglaublich. <br />
            Es ist nicht so weit weg, es hat eine erstaunlich krasse Vielfalt an
            Kultur und Landschaft und es ist auch sehr günstig. Und selbst im
            Winter ist es dort noch angenehm warm. <br />
            Das war mein 2. Trip. (Nov. 2024) <br />
            Zum 1. Trip geht&apos;s{" "}
            <a
              href="/1-trip"
              className="text-blue-500 underline hover:text-blue-700"
            >
              hier lang
            </a>
            .
          </p>
        </div>
      </article>

      {/* Pro und Contra */}
      <div
        id="pro-contra"
        className="border border-gray-300 bg-white p-6 rounded-lg shadow-sm mb-8"
      >
        <h2 className="text-2xl font-bold text-center mt-12 mb-4">
          Gründe nach Marokko zu reisen
        </h2>
        <div className="border-t border-gray-300 my-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Pro</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nicht so weit weg</li>
              <li>Selbst im Winter warm</li>
              <li>Sehr günstig</li>
              <li>
                Sicher (ja, Marokko ist tatsächlich ein sehr sicheres Reiseland)
              </li>
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
              <li>
                Der Verkehr, vor allem in den großen Städten, ist sehr chaotisch
              </li>
              <li>
                Sehr großes Land (in 2 Wochen kann man viel sehen, sieht aber
                bei weitem nicht alles)
              </li>
              <li>
                Die Verkäufer in den touristischen Regionen können sehr
                aufdringlich sein
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="map-container">
        <MarokkoRoute />
      </div>

      {/* Artikel-Inhalt */}
      <article className="container-style">
        {/* Abschnitt 1 */}
        <section id="start" className="marokko-box">
          <h2>Unser Trip</h2>
          <p>
            Wir haben uns für 10 Tage ein Auto gemietet und sind die abgebildete
            Route gefahren. Mit Start und Ziel in Marrakesch.{" "}
          </p>
        </section>

        <section id="zusammenfassung" className="marokko-summary">
          <h2>Zusammenfassung</h2>
          <p>
            Bevor du dich in die Details stürzt, hier die wichtigsten Punkte für
            eine Reise nach Marokko:
          </p>

          <h3>Minimale Reisekosten pro Tag</h3>
          <ul>
            <li>
              <strong>Budget-Backpacker:</strong> ca. 25-40 € (Hostels,
              günstiges Essen, öffentliche Verkehrsmittel)
            </li>
            <li>
              <strong>Mittelklasse:</strong> 40-60 € (Mittelklasse-Hotels,
              Restaurants, kleinere Touren)
            </li>
            <li>
              <strong>Komfortabel:</strong> Nach Oben gibs keine Grenzen
              (Riad-Hotels, geführte Touren, luxuriöse Unterkünfte)
            </li>
          </ul>

          <h3>Empfohlene Reisedauer</h3>
          <p>Je nach Route empfiehlt sich:</p>
          <ul>
            <li>
              <strong>1-2 Wochen:</strong> Marrakesch, Essaouira und das
              Atlasgebirge
            </li>
            <li>
              <strong>2-3 Wochen:</strong> Plus Wüste (Merzouga) und Agadir
            </li>
            <li>
              <strong>3-4 Wochen:</strong> Von Agadir bis nach Tanger. Oder
              umgekehrt. Über Fes, Chefchaouen und Rabat.
            </li>
          </ul>

          <h3>Sicherheit</h3>
          <ul>
            <li>
              ✅ <strong>Allgemein sehr sicher</strong>, vor allem in
              touristischen Gebieten.
            </li>
            <li>
              ✅ <strong>Aufpassen vor Taschendiebstahl</strong> wie in jedem
              anderen Land auch.
            </li>
            <li>
              ✅ <strong>Nicht zu viel Bargeld</strong>, einfach um
              Taschendiebstahl vorzubeugen.
            </li>
            <li>
              ✅ <strong>Aufdringliche Händler </strong> Einige Händler können
              recht aufdringlich werden. Aber niemand wird dir Geld aus der
              Tasche ziehen. Deshalb, wenn man nichts kaufen möchte, bestimmt
              aber höflich abweisen.
            </li>
          </ul>

          <h3>Beste Reisezeit</h3>
          <ul>
            <li>
              🌞 Frühling (März - Mai) und Herbst (September - November) sind
              ideal.
            </li>
            <li>
              🔥 Sommer (Juni - August) kann in der Wüste sehr heiß werden.
            </li>
            <li>
              ❄️ Winter (Dezember - Februar) ist gut für die Küstenregion
              (surfen). Tagsüber angenehme Temperaturen, Nachts kann es kühler
              werden.
            </li>
          </ul>

          <h3>SIM-Karten</h3>
          <p>
            Günstige SIM-Karten gibt es bei <strong>Maroc Telecom</strong>,{" "}
            <strong>Inwi</strong> und <strong>Orange</strong>. Sie kosten ca. 10
            € und mehr. Ich hab für 2 Wochen <strong>Orange</strong> genutzt und
            habe für 10GB oder 20GB (auf jeden Fall mehr als genug Datenvolumen
            für 2 Wochen) 10€ bezahlt.
          </p>

          <h3>Transport & Autovermietung</h3>
          <ul>
            <li>
              🚆 <strong>Zug:</strong> Zwischen großen Städten wie Marrakesch,
              Fès und Tanger bequem.
            </li>
            <li>
              🚕 <strong>Busse:</strong> Zwischen großen (aber auch kleineren
              Städten) fahren Busse und Minibusse. Sehr günstig. Kann bei
              frequentierten Strecken aber auch mal voller werden.
            </li>
            <li>
              🚗 <strong>Mietwagen:</strong> Kosten ab 20 €/Tag.
              <br />
              Sehr empfehlenswert um das Gebirge zu erkunden.
              <br />
              Wir haben das Auto direkt am Flughafen bei AirCar gemietet und
              hatten absolut keine Probleme. Die Rückgabe war schnell und
              unkompliziert. (Das ist keine Werbung für den Anbieter, sondern
              meine Erfahrung. Ich schätze alle Anbieter am Flughafen sind
              ähnlich.) Einziges <strong>Manko</strong> ist, dass man eine
              relativ <strong>hohe Kaution</strong>
              (ausschließlich mit Kreditkarte) hinterlegen muss. Wir haben für
              unseren Dacia Duster ca. 1400€ hinterlegt, bekamen es nach der
              Rückgabe aber schnell zurückerstattet.
              <br />
              Für 10 Tage haben wir ca. 280€ bezahlt.
            </li>
          </ul>
        </section>
        <br />
        <br />
        {/* Bildergalerie */}
        <h2 className="text-2xl font-bold text-center mt-12 mb-4">
          Kleine Eindrücke
        </h2>

        <div
          id="bildergalerie"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 justify-items-center"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer"
              onClick={() => openModal(image.src, index)}
            >
              <Image
                src={image.src}
                alt={image.description}
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <p className="text-center mt-2 text-sm text-gray-700">
                {image.description}
              </p>
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

        <div id="highlights" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Highlights</h2>
          <ul className="list-disc pl-6">
            <li className="mb-2">
              <strong>🕌 Marrakesh:</strong> Die pulsierende Stadt mit vielen
              Märkten, Touristen, historischen Palästen und einer einzigartigen
              Atmosphäre – ein Muss für jeden Marokko-Besucher.
            </li>
            <li className="mb-2">
              <strong>⛰️ Atlasgebirge:</strong> Mein absoluter Favorit! Die
              Fahrt durch die gewaltige Berglandschaft, vorbei an traditionellen
              Berberdörfern und spektakulären Schluchten, war einfach
              atemberaubend.
            </li>
            <li className="mb-2">
              <strong>🏄‍♂️ Taghazout:</strong> Ein kleines, aber sehr
              touristisches Surferörtchen an der Atlantikküste. Der perfekte Ort
              zum Leute kennen zu lernen oder zu Surfen.
            </li>
            <li className="mb-2">
              <strong>🌊 Essaouira:</strong> Eine charmante Hafenstadt mit
              portugiesischem Flair, starken Winden und einer beeindruckenden
              Medina. Die frischen Meeresfrüchte, die Stadtmauern und die
              Sonnenuntergänge am Strand sind einfach unvergesslich.
            </li>
          </ul>
        </div>

        <div id="highlights2" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">
            Weitere Highlights aus dem vorherigen Trip
          </h2>
          <ul className="list-disc pl-6">
            <li className="mb-2">
              <strong>🏜️ Merzouga Wüste:</strong>Mein persönlicher Favorit! Die
              Fahrt durch die spektakuläre Berglandschaft, vorbei an
              traditionellen Berberdörfern und tiefen Schluchten, war einfach
              atemberaubend. In der unendlichen Weite der Sanddünen einen
              Sonnenuntergang zu erleben, war ein magischer Moment.
            </li>
            <li className="mb-2">
              <strong>🏂 Ifrane:</strong> Überraschung in Marokko! Diese Stadt
              wird wegen ihrer alpinen Architektur oft als „die Schweiz
              Marokkos“ bezeichnet. Ein beliebtes Ziel für Wintertouristen, da
              man hier tatsächlich auch Ski fahren kann.
            </li>
            <li className="mb-2">
              <strong>🏰Fes:</strong> Die älteste der vier Königsstädte
              Marokkos. Die Medina ist ein Labyrinth aus verwinkelten Gassen,
              die von Gewürzständen, Handwerkskunst und historischen Gebäuden
              geprägt sind. Mir hat Marrakesh aber deutlich mehr gefallen.
            </li>
            <li className="mb-2">
              <strong>🏛️Rabat:</strong> Die moderne Hauptstadt Marokkos
              beeindruckt mit einer Mischung aus Geschichte und Moderne. Die
              Kasbah des Oudaïas mit ihren weiß-blauen Häusern bietet einen
              wunderschönen Ausblick auf den Atlantik. Hier spürt man eine
              entspannte Atmosphäre, weit entfernt vom Trubel anderer Städte.
            </li>
            <li className="mb-2">
              <strong>💙Chefchaouen:</strong> Ein Ort wie aus einem Märchen!
              Auch eines meiner Favoriten. Die „blaue Perle“ Marokkos liegt
              eingebettet in die Rif-Berge und begeistert mit ihren leuchtend
              blauen Fassaden und engen Gassen. Ein perfekter Ort für
              marokkanische Kultur oder wanderungen in den Bergen.
            </li>
          </ul>
        </div>
      </article>
      <Comments pageId="marokko" />
    </div>
  );
}
