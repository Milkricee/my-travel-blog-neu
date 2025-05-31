"use client";

import dynamic from "next/dynamic";
import Accordion from "@/app/components/Akkordeon";
import "./module.css";

// Dynamic imports for client components
const NavbarWithButton = dynamic(
  () => import("../../components/NavbarWithButton"),
  { ssr: false }
);
const Comments = dynamic(() => import("../../components/comments"), {
  ssr: false,
});

export default function Philippinen() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 philippinen-padding">
      {/* Header-Bereich */}
      <NavbarWithButton
        links={[
          { href: "#zusammenfassung", label: "Zusammenfassung" },
          { href: "#manila", label: "Manila" },
          { href: "#palawan", label: "Palawan" },
          { href: "#bohol", label: "Bohol" },
          { href: "#siargao", label: "Siargao" },
          { href: "#boracay", label: "Boracay" },
          { href: "#cebu", label: "Cebu" },
          { href: "#comments", label: "Kommentare" },
        ]}
      />

      <header className="text-center mb-8 header-black">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 bg-clip-text text-transparent">
          Entdecke die Philippinen
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed mb-4">
            Die Philippinen - ein tropisches Paradies aus über 7.000 Inseln im
            Herzen Südostasiens. Von kristallklaren Gewässern und weißen
            Sandstränden bis hin zu üppigen Regenwäldern und beeindruckenden
            Reisterrassen bieten die Philippinen eine unglaubliche Vielfalt an
            Naturschönheiten und kulturellen Erlebnissen.
          </p>
          <p className="text-lg leading-relaxed">
            Hier teile ich meine Erfahrungen und gebe dir praktische Tipps für
            deine Reise durch dieses faszinierende Inselparadies. Von den
            pulsierenden Straßen Manilas bis zu den versteckten Lagunen von
            Palawan - lass dich inspirieren!
          </p>
        </div>
      </header>

      {/* Hero Section mit modernem Design */}
      <div className="philippines-hero mb-12">
        <div className="hero-content">
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">7,641</span>
              <span className="stat-label">Inseln</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">300+</span>
              <span className="stat-label">Sprachen</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">110M</span>
              <span className="stat-label">Einwohner</span>
            </div>
          </div>
        </div>
      </div>

      {/* Artikel-Inhalt */}
      <article className="container-style">
        {/* Zusammenfassung */}
        <section id="zusammenfassung" className="summary-box">
          <h2>Zusammenfassung</h2>
          <p>
            Die wichtigsten Informationen für deine Philippinen-Reise auf einen
            Blick:
          </p>

          <h3>Reisekosten pro Tag</h3>
          <ul>
            <li>
              <strong>Budget-Backpacker:</strong> 20-30 € (Hostels, lokales
              Essen, öffentliche Verkehrsmittel)
            </li>
            <li>
              <strong>Mittelklasse:</strong> 40-60 € (Hotels, Restaurants,
              private Transfers)
            </li>
            <li>
              <strong>Luxus:</strong> 80+ € (Resorts, gehobene Restaurants,
              private Touren)
            </li>
          </ul>

          <h3>Beste Reisezeit</h3>
          <ul>
            <li>
              <strong>Trockenzeit:</strong> Dezember - Mai (beste Zeit für
              Inselhopping)
            </li>
            <li>
              <strong>Regenzeit:</strong> Juni - November (günstigere Preise,
              aber mehr Regen)
            </li>
            <li>
              <strong>Taifun-Saison:</strong> Juli - Oktober (besonders im
              Norden)
            </li>
          </ul>

          <h3>Transport zwischen den Inseln</h3>
          <ul>
            <li>
              ✈️ <strong>Inlandsflüge:</strong> Schnell aber teurer (Cebu
              Pacific, Philippine Airlines)
            </li>
            <li>
              🚢 <strong>Fähren:</strong> Günstiger aber zeitaufwendiger (2GO
              Travel, FastCat)
            </li>
            <li>
              🛥️ <strong>Bangka-Boote:</strong> Für kurze Strecken zwischen
              nahegelegenen Inseln
            </li>
          </ul>

          <h3>Wichtige Tipps</h3>
          <ul>
            <li>
              💰 <strong>Währung:</strong> Philippinischer Peso (PHP) - Bargeld
              ist wichtig!
            </li>
            <li>
              🗣️ <strong>Sprachen:</strong> Filipino und Englisch (Englisch ist
              weit verbreitet)
            </li>
            <li>
              🏥 <strong>Gesundheit:</strong> Hepatitis A/B und Typhus-Impfung
              empfohlen
            </li>
            <li>
              📱 <strong>Internet:</strong> Globe oder Smart SIM-Karten vor Ort
              kaufen
            </li>
            <li>
              🌊 <strong>Sicherheit:</strong> Auf Strömungen beim Schwimmen
              achten
            </li>
          </ul>
        </section>

        {/* Manila */}
        <section id="manila">
          <h2>Manila - Das pulsierende Herz der Philippinen</h2>
          <p>
            Manila, die Hauptstadt der Philippinen, ist oft der erste
            Berührungspunkt mit dem Land. Die Metropolregion Metro Manila ist
            eine der bevölkerungsreichsten der Welt und bietet einen
            faszinierenden Mix aus Geschichte, Kultur und modernem Stadtleben.
          </p>

          <p>
            Während viele Reisende Manila nur als Durchgangsstation nutzen,
            lohnt es sich, mindestens 1-2 Tage hier zu verbringen, um die reiche
            Geschichte und das lebendige Nachtleben zu erleben.
          </p>

          <h3>Must-See Attraktionen:</h3>

          <Accordion title="Intramuros - Die historische Altstadt">
            <p>
              Die von den Spaniern im 16. Jahrhundert erbaute ummauerte Stadt
              ist das historische Herz Manilas. Hier findest du koloniale
              Architektur, Museen und die berühmte San Agustin Kirche - ein
              UNESCO-Weltkulturerbe.
            </p>
          </Accordion>

          <Accordion title="Rizal Park">
            <p>
              Ein großer Stadtpark im Herzen Manilas, benannt nach dem
              Nationalhelden José Rizal. Perfekt für einen entspannten
              Spaziergang und um das lokale Leben zu beobachten.
            </p>
          </Accordion>

          <Accordion title="Binondo - Chinatown">
            <p>
              Die älteste Chinatown der Welt bietet authentisches chinesisches
              Essen und einen Einblick in die chinesisch-philippinische Kultur.
              Probiere unbedingt die berühmten Dumplings!
            </p>
          </Accordion>

          <Accordion title="Makati Business District">
            <p>
              Das moderne Geschäftsviertel mit Wolkenkratzern, Shopping Malls
              und gehobenen Restaurants. Hier pulsiert das moderne Manila.
            </p>
          </Accordion>
        </section>

        {/* Palawan */}
        <section id="palawan">
          <h2>Palawan - Das letzte Paradies</h2>
          <p>
            Palawan wird oft als &ldquo;das letzte Paradies&rdquo; bezeichnet
            und das völlig zu Recht. Diese lange, schmale Insel im Westen der
            Philippinen beherbergt einige der schönsten Landschaften des Landes,
            darunter die berühmten Underground River und die atemberaubenden
            Kalksteinfelsen von El Nido.
          </p>

          <h3>El Nido - Inselhopping vom Feinsten</h3>
          <p>
            El Nido ist der Ausgangspunkt für spektakuläre Inselhopping-Touren.
            Die vier Standard-Touren (A, B, C, D) führen zu verschiedenen
            Lagunen, Stränden und Schnorchelplätzen. Besonders empfehlenswert
            sind die Big Lagoon und Small Lagoon.
          </p>

          <Accordion title="Tour A - Lagoons and Beaches">
            <p>
              Die beliebteste Tour führt zur Big Lagoon, Small Lagoon, Secret
              Lagoon und Shimizu Island. Perfekt für Einsteiger und bietet die
              klassischen El Nido Erlebnisse.
            </p>
          </Accordion>

          <Accordion title="Tour C - Hidden Beaches">
            <p>
              Weniger überlaufen als Tour A, führt zu versteckten Stränden wie
              Hidden Beach und Helicopter Island. Ideal für alle, die etwas mehr
              Ruhe suchen.
            </p>
          </Accordion>

          <h3>Coron - Wrack-Tauchen und heiße Quellen</h3>
          <p>
            Coron ist berühmt für seine japanischen Schiffswracks aus dem
            Zweiten Weltkrieg, die heute zu den besten Tauchplätzen der Welt
            gehören. Auch für Nicht-Taucher bietet Coron mit seinen heißen
            Quellen und kristallklaren Seen viel zu entdecken.
          </p>
        </section>

        {/* Bohol */}
        <section id="bohol">
          <h2>Bohol - Chocolate Hills und Koboldmakis</h2>
          <p>
            Bohol ist berühmt für seine einzigartigen Chocolate Hills - über
            1.200 kegelförmige Hügel, die in der Trockenzeit braun werden und
            wie Schokoladenhügel aussehen. Die Insel beherbergt auch die
            winzigen Koboldmakis (Tarsier), eine der kleinsten Primatenarten der
            Welt.
          </p>

          <Accordion title="Chocolate Hills Complex">
            <p>
              Der beste Aussichtspunkt auf die berühmten Chocolate Hills. Am
              schönsten bei Sonnenaufgang oder Sonnenuntergang, wenn das Licht
              die Hügel in warme Farben taucht.
            </p>
          </Accordion>

          <Accordion title="Tarsier Sanctuary">
            <p>
              Ein Schutzgebiet für die bedrohten Koboldmakis. Diese nachtaktiven
              Primaten haben riesige Augen und sind nur etwa so groß wie eine
              Faust. Bitte respektiere die Ruhe der Tiere - sie sind sehr
              stressempfindlich.
            </p>
          </Accordion>

          <Accordion title="Loboc River Cruise">
            <p>
              Eine entspannte Bootsfahrt auf dem Loboc River mit traditioneller
              Musik und lokalem Buffet. Ein kulturelles Erlebnis, das Einblicke
              in das ländliche Leben auf Bohol bietet.
            </p>
          </Accordion>

          <h3>Panglao Island</h3>
          <p>
            Die kleine Insel Panglao ist über eine Brücke mit Bohol verbunden
            und bietet einige der schönsten Strände der Region. Alona Beach ist
            der Hauptstrand mit vielen Restaurants und Bars, während andere
            Strände ruhiger und weniger entwickelt sind.
          </p>
        </section>

        {/* Siargao */}
        <section id="siargao">
          <h2>Siargao - Surferparadies und Insel-Vibes</h2>
          <p>
            Siargao hat sich in den letzten Jahren von einem Geheimtipp zu einem
            der angesagtesten Reiseziele der Philippinen entwickelt. Die
            tränenförmige Insel ist berühmt für ihre Surfspots, entspannte
            Atmosphäre und Instagram-würdigen Kokosnusspalmen-Landschaften.
          </p>

          <Accordion title="Cloud 9 - Weltklasse Surfspot">
            <p>
              Der berühmteste Surfspot der Philippinen zieht Surfer aus aller
              Welt an. Auch für Nicht-Surfer ist der Boardwalk ein toller Ort,
              um den Sonnenuntergang zu genießen und Surfer zu beobachten.
            </p>
          </Accordion>

          <Accordion title="Magpupungko Rock Pools">
            <p>
              Natürliche Gezeitenpools in Felsformationen, die bei Ebbe
              zugänglich werden. Ein beliebter Spot für Fotos und zum Schwimmen
              in kristallklarem Wasser.
            </p>
          </Accordion>

          <Accordion title="Sugba Lagoon">
            <p>
              Eine versteckte Lagune, umgeben von Mangroven. Perfekt für
              Kayaking und Stand-up Paddling. Das türkisfarbene Wasser und die
              ruhige Atmosphäre machen es zu einem magischen Ort.
            </p>
          </Accordion>

          <h3>Island Hopping Touren</h3>
          <p>
            Von Siargao aus kannst du verschiedene Island Hopping Touren
            unternehmen, die zu nahegelegenen Inseln wie Naked Island, Daku
            Island und Guyam Island führen. Jede Insel hat ihren eigenen
            Charakter - von völlig unberührten Sandbänken bis hin zu Inseln mit
            lokalen Gemeinden.
          </p>
        </section>

        {/* Boracay */}
        <section id="boracay">
          <h2>Boracay - White Beach und Nachtleben</h2>
          <p>
            Boracay ist wohl die bekannteste Insel der Philippinen und berühmt
            für ihren 4 Kilometer langen White Beach mit puderzuckerweißem Sand.
            Nach einer sechsmonatigen Schließung 2018 zur Umweltsanierung ist
            die Insel heute sauberer und nachhaltiger als je zuvor.
          </p>

          <Accordion title="White Beach - Stations 1, 2 & 3">
            <p>
              Der berühmte White Beach ist in drei Stationen unterteilt. Station
              1 ist am ruhigsten mit den luxuriösesten Resorts, Station 2 ist
              das lebendige Zentrum mit Restaurants und Bars, und Station 3 ist
              günstiger und weniger überlaufen.
            </p>
          </Accordion>

          <Accordion title="Puka Beach">
            <p>
              Ein ruhigerer Strand im Norden der Insel, bekannt für seine
              Puka-Muscheln. Weniger entwickelt als White Beach und perfekt für
              alle, die etwas mehr Ruhe suchen.
            </p>
          </Accordion>

          <Accordion title="Mount Luho Viewpoint">
            <p>
              Der höchste Punkt der Insel bietet einen spektakulären
              360-Grad-Blick über Boracay. Besonders schön bei Sonnenuntergang.
            </p>
          </Accordion>

          <h3>Wassersport und Aktivitäten</h3>
          <p>
            Boracay bietet eine Vielzahl von Wassersportaktivitäten: Kitesurfing
            und Windsurfing (besonders gut von November bis April), Parasailing,
            Jetski, und die berühmten Paraw-Segelboote für romantische
            Sonnenuntergangsfahrten.
          </p>
        </section>

        {/* Cebu */}
        <section id="cebu">
          <h2>Cebu - Geschichte und Abenteuer</h2>
          <p>
            Cebu ist sowohl eine historisch bedeutsame Stadt als auch ein Tor zu
            unglaublichen Naturerlebnissen. Als eine der ältesten Städte der
            Philippinen bietet Cebu City reiche Geschichte, während die Provinz
            Cebu einige der besten Abenteueraktivitäten des Landes beherbergt.
          </p>

          <h3>Cebu City - Historisches Zentrum</h3>

          <Accordion title="Magellan's Cross">
            <p>
              Das Kreuz, das angeblich von Ferdinand Magellan 1521 gepflanzt
              wurde, markiert die Einführung des Christentums auf den
              Philippinen. Ein wichtiger historischer Ort in einer kleinen
              Kapelle im Stadtzentrum.
            </p>
          </Accordion>

          <Accordion title="Basilica del Santo Niño">
            <p>
              Die älteste römisch-katholische Kirche der Philippinen, die das
              heilige Bild des Santo Niño (Jesuskind) beherbergt. Ein wichtiger
              Pilgerort für philippinische Katholiken.
            </p>
          </Accordion>

          <h3>Oslob - Walhai-Schwimmen</h3>
          <p>
            Oslob ist weltberühmt für die Möglichkeit, mit Walhaien zu
            schwimmen. Jeden Morgen kommen diese sanften Riesen in die Bucht, um
            gefüttert zu werden. Obwohl umstritten, ist es ein unvergessliches
            Erlebnis - bitte wähle verantwortungsvolle Anbieter.
          </p>

          <h3>Kawasan Falls</h3>
          <p>
            Ein mehrstufiger Wasserfall im Dschungel von Cebu, berühmt für
            Canyoning-Abenteuer. Du kannst von Wasserfall zu Wasserfall
            springen, rutschen und schwimmen - ein Adrenalinstoß inmitten
            tropischer Natur.
          </p>

          <Accordion title="Siquijor Island">
            <p>
              Eine mystische Insel vor der Küste von Cebu, bekannt für ihre
              Heiler und magischen Traditionen. Perfekt für alle, die abseits
              der ausgetretenen Pfade reisen möchten. Wunderschöne Strände und
              eine entspannte Atmosphäre.
            </p>
          </Accordion>
        </section>

        {/* Praktische Tipps */}
        <section className="tips-section">
          <h2>Praktische Reisetipps</h2>

          <div className="tips-grid">
            <div className="tip-card">
              <h3>🍽️ Essen & Trinken</h3>
              <ul>
                <li>
                  <strong>Adobo:</strong> Das Nationalgericht - Fleisch in
                  Sojasauce und Essig
                </li>
                <li>
                  <strong>Lechon:</strong> Knuspriges Spanferkel, besonders auf
                  Cebu
                </li>
                <li>
                  <strong>Halo-Halo:</strong> Buntes Dessert mit Eis und
                  verschiedenen Toppings
                </li>
                <li>
                  <strong>Fresh Buko:</strong> Frisches Kokoswasser direkt aus
                  der Nuss
                </li>
                <li>
                  <strong>San Miguel Beer:</strong> Das lokale Bier der
                  Philippinen
                </li>
              </ul>
            </div>

            <div className="tip-card">
              <h3>💡 Insider-Tipps</h3>
              <ul>
                <li>Verhandle immer bei Tricycle- und Habal-Habal-Fahrten</li>
                <li>Lade Grab (wie Uber) für städtische Gebiete herunter</li>
                <li>
                  Packe immer eine Regenjacke ein - tropische Schauer kommen
                  schnell
                </li>
                <li>
                  Respektiere lokale Bräuche, besonders in ländlichen Gebieten
                </li>
                <li>
                  Lerne ein paar Wörter Tagalog - die Locals freuen sich sehr!
                </li>
              </ul>
            </div>

            <div className="tip-card">
              <h3>⚠️ Sicherheit</h3>
              <ul>
                <li>
                  Meide bestimmte Gebiete in Mindanao aufgrund von Konflikten
                </li>
                <li>Achte auf starke Strömungen beim Schwimmen</li>
                <li>Trinke nur Wasser aus Flaschen oder gekochtes Wasser</li>
                <li>Verwende Mückenschutz - Dengue-Fieber ist verbreitet</li>
                <li>Bewahre Kopien wichtiger Dokumente separat auf</li>
              </ul>
            </div>
          </div>
        </section>
      </article>

      <Comments pageId="philippinen" />

      {/* Footer */}
      <footer className="text-center mt-12">
        <p className="text-gray-500">
          Die Philippinen bieten unendliche Möglichkeiten für Abenteuer und
          Entspannung. Jede Insel hat ihren eigenen Charakter - lass dich
          überraschen von der Vielfalt dieses tropischen Paradieses! Salamat
          (Danke) fürs Lesen!
        </p>
      </footer>
    </div>
  );
}
