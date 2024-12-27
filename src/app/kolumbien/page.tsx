"use client";

import dynamic from "next/dynamic";
import Accordion from "@/app/components/Akkordeon";

// Dynamische Importe
const NavbarWithButton = dynamic(() => import("../components/NavbarWithButton"), { ssr: false });
const Comments = dynamic(() => import("../components/comments"), { ssr: false });
const ImageGallery = dynamic(() => import("../components/ImageGallery"), { ssr: false });

export default function Kolumbien() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8" style={{ paddingTop: "var(--header-height)" }}>
      {/* Header-Bereich */}
      <NavbarWithButton
        links={[
          { href: "#map-kolumbien", label: "Route" },
          { href: "#Bogota", label: "Bogota" },
          { href: "#stadt2", label: "Zweite Stadt" },
          { href: "#stadt3", label: "Dritte Stadt" },
          { href: "#highlights", label: "Highlights" },
          { href: "#comments", label: "Kommentare" },
        ]}
      />

      <header className="text-center mb-8" style={{ color: "black" }}>
        <h1 className="text-4xl font-bold mb-4">Entdecke Kolumbien</h1>
        <p>
            Kolumbien ist eines meiner absoluten Lieblingsländer. Ähnlich divers wie Marokko. Von karibischen Stränden, über Regenwälder, bis hin zu Wüsten und Hochgebirgen.
        <br />
         Hier habe ich 2,5 Monate verbracht (Juli-Sept. 2022), deshalb würde es den Rahmen sprengen von allen meinen Erlebnissen zu berichten.
         Ich werde hier nur allgemein zu sehensewerten Locations berichten und einige Ratschläge teilen.
        </p>
      </header>

      {/* Artikel-Inhalt */}
      <article className="container-style">
        {/* Abschnitt 1 */}
        <section id="map-kolumbien">
          <h2>Route</h2>
          <p>Hier wird eine Karte oder Beschreibung der Route eingefügt.</p>
        </section>

     {/* Abschnitt 2 */}
     <section id="Bogota">
  <h2>Bogota</h2>
  <p>
    Höchstwahrscheinlich startest du in Bogota.
    <br />
    Bogota liegt 2600m über dem Meeresspiegel und ist die Hauptstadt Kolumbiens. Es ist etwas kühler aufgrund der Höhe, doch darf man die Sonne nicht unterschätzen. Schön eincremen und eher im Schatten sein, sonst ist ein Sonnenbrand oder sogar ein Sonnenstich garantiert. Ich war ein paar Stunden Fahrrad fahren bei 20 Grad und das hat für einen Sonnenstich gereicht. Bogota ist übrigens eine der am besten für Fahrräder ausgebauten Städte in Südamerika.
    <br />
    Hostels gibt es hier schon ab 5€ und die sind nicht mal schlecht. Nach SIM-Karten fragt ihr am besten im Hostel nach und kauft sie vor Ort. Online oder am Flughafen ist deutlich teurer.
    <br />
    Bogota hat einen gut ausgebauten Nahverkehr. Google Maps auf dem Handy hilft euch gut weiter, in der Stadt von A nach B zu kommen. Generell heißt es, dass Bogota keine ganz so sichere Stadt sein soll, allerdings habe ich in den 9 Tagen, die ich hier verbracht habe, keine schlechten Erfahrungen gemacht. Wie in den meisten Städten in Südamerika heißt es: nicht alleine betrunken irgendwo herumtorkeln, nicht mit dem Handy in der Hand spazieren gehen und ein bisschen auf die Umgebung achten.
  </p>

  <hr className="my-4 border-t border-gray-300" />

  <h2 className="text-xl font-semibold mt-4">Must Sees:</h2>
  <Accordion title="Plaza de Bolívar">
    <p>
      Der Plaza de Bolívar ist das historische Zentrum von Bogota und beherbergt wichtige Gebäude wie den Kongress und die Kathedrale.
    </p>
  </Accordion>
  <Accordion title="Viewpoint Monserrate">
    <p>
      Ein berühmter Aussichtspunkt, der mit einer Seilbahn oder zu Fuß erreicht werden kann. Von hier aus hast du eine atemberaubende Aussicht über die Stadt.
    </p>
  </Accordion>
  <Accordion title="La Candelaria">
    <p>
      Das kulturelle Herz der Stadt mit kolonialen Gebäuden, bunten Straßen und Museen.
    </p>
  </Accordion>
  <Accordion title="Goldmuseum (Museo del Oro)">
    <p>
      Eines der wichtigsten Museen in Bogota, das eine beeindruckende Sammlung von präkolumbianischem Goldschmuck zeigt.
    </p>
  </Accordion>

  <ImageGallery
    images={[
      { src: "/kolumbien/stadt1/bild1.jpg", alt: "Bild 1" },
      { src: "/kolumbien/stadt1/bild2.jpg", alt: "Bild 2" },
      { src: "/kolumbien/stadt1/bild3.jpg", alt: "Bild 3" },
    ]}
  />
</section>


        {/* Abschnitt 3 */}
        <section id="stadt2">
          <h2>Zweite Stadt</h2>
          <p>Beschreibung zur zweiten Stadt.</p>
          <ImageGallery
            images={[
              { src: "/kolumbien/stadt2/bild1.jpg", alt: "Bild 1" },
              { src: "/kolumbien/stadt2/bild2.jpg", alt: "Bild 2" },
              { src: "/kolumbien/stadt2/bild3.jpg", alt: "Bild 3" },
            ]}
          />
        </section>

        {/* Abschnitt 4 */}
        <section id="stadt3">
          <h2>Dritte Stadt</h2>
          <p>Beschreibung zur dritten Stadt.</p>
          <ImageGallery
            images={[
              { src: "/kolumbien/stadt3/bild1.jpg", alt: "Bild 1" },
              { src: "/kolumbien/stadt3/bild2.jpg", alt: "Bild 2" },
              { src: "/kolumbien/stadt3/bild3.jpg", alt: "Bild 3" },
            ]}
          />
        </section>

        {/* Abschnitt 5 */}
        <section id="highlights">
          <h2>Highlights</h2>
          <p>Hier werden die Highlights der Reise beschrieben.</p>
          <ImageGallery
            images={[
              { src: "/kolumbien/highlights/bild1.jpg", alt: "Highlight 1" },
              { src: "/kolumbien/highlights/bild2.jpg", alt: "Highlight 2" },
              { src: "/kolumbien/highlights/bild3.jpg", alt: "Highlight 3" },
            ]}
          />
        </section>
      </article>

      <Comments pageId="kolumbien" />

      {/* Footer-Bereich */}
      <footer className="text-center mt-12">
        <p className="text-gray-500">
          Dieser Reisebericht basiert auf meinen persönlichen Erfahrungen. 
          Ich hoffe, er inspiriert dich dazu, Kolumbien selbst zu entdecken!
        </p>
      </footer>
    </div>
  );
}
