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
          { href: "#sanandres", label: "San Andres" },
          { href: "#carthagena", label: "Carthagena" },
          { href: "#highlights", label: "Highlights" },
          { href: "#comments", label: "Kommentare" },
        ]}
      />

      <header className="text-center mb-8" style={{ color: "black" }}>
        <h1 className="text-4xl font-bold mb-4">Entdecke Kolumbien</h1>
        <p>
            Kolumbien ist eines meiner absoluten Lieblingsländer. Von karibischen Stränden, über Regenwälder, bis hin zu Wüsten und Hochgebirgen.
        <br />
         Hier habe ich 2,5 Monate verbracht (Juli-Sept. 2022), deshalb würde es den Rahmen sprengen von allen meinen Erlebnissen zu berichten.
         Ich werde hier nur allgemein zu sehensewerten Locations berichten und einige Ratschläge teilen.
         Generell lässt sich Kolumbien in 7 Regionen einteilen: Karibikküste, Pazifikküste, Bogotaregion, Amazonas, Kafeteriaarea, Medellin und die Inseln. 
         Der bericht ist nach den Regionen sortiert in welcher Reihenfolge ich gereist bin. Das ist aber keine generelle Reiseempfehlung. Kolumbien ist riesig
         und die Inlandflüge sind super günstig (meist nie mehr als 50€). Ich würde empfehlen die Reise nach den Flugpreisen und den Regionen, die man besichtigen möchte, zu planen.
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
    Hostels gibt es hier schon ab 5€ und die sind nicht mal schlecht. Streetfood gibt es auch schon ab 1€.
    <br/>
    Nach SIM-Karten fragt ihr am besten im Hostel nach und kauft sie vor Ort. Online oder am Flughafen ist meist deutlich teurer.
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
      { src: "/kolumbien/bogota/bolivar.jpg", alt: "Plaza de Bolívar" },
      { src: "/kolumbien/bogota/monserate.jpg", alt: "Aussicht vom Berg Monserate" },
      { src: "/kolumbien/bogota/arepa.jpg", alt: "Das dürfte eine Arepa sein. Ein lokales Gericht, welches du für lau an jeder Straßenecke kriegst" },
      { src: "/kolumbien/bogota/slums.jpg", alt: "Eine Aussicht auf die Slums im Südwesten der Stadt. Es Fährt eine Gondel hin. Die Gegend zählt als nicht Sicher, aber die Aussicht ist schön" },
    ]}
  />
</section>


        {/* Abschnitt 3 */}
        <section id="sanandres">
          <h2>San Andres</h2>
          <p>Mit dem Flugzeug ging es von Bogota direkt in Kolumbiens Karibikparadis vor der Küste von Nicaragua.
            Hier gibt es nicht viel zu berichten, aber um so mehr zu erkunden. Die Insel ist so klein, dass man in 1,5 Std einmal um die Insel fahren kann.
            Man kann sich relativ günstig überall Scooter leihen, was ich wärmstens Empfehle. Nur Helme findest du hier keine. Alle fahren Helmlos und das ist völlig normal.
            Es gibt leider völlig überlaufene, aber dennoch sehr schöne Tagesausflüge zu den Inseln Johnny Cay und Acuario.
          </p>
          <ImageGallery
            images={[
              { src: "/kolumbien/andres/karibik.jpg", alt: "Gebäude im klassischen, karibischen Kolonialstil sieht man überall auf der Insel" },
              { src: "/kolumbien/andres/plane.jpg", alt: "Blick aus dem Flieger" },
              { src: "/kolumbien/andres/strand.jpg", alt: "Überall karibisches Flair und traumhafte Strände" },
              { src: "/kolumbien/andres/krab.jpg", alt: "Nachts laufen solche Krabben auf den Straßen" },
              { src: "/kolumbien/andres/aligator2.jpg", alt: "In der Mitte der Insel gibts einen See mit kleinen Krokodilen (oder Alligatoren kp.)" },
            ]}
          />
        </section>

        {/* Abschnitt 4 */}
        <section id="carthagena">
          <h2>Nordküste</h2>
          <p>Als nächsten Stopp ging es für mich weiter an die Nordküste, und zwar nach Carthagena. 
            Das ist ein guter Ausgansgpunkt um sich die Nordküste anzugucken. Carthagena hat eine schöne Altstadt, deshalb ist der Besuch empfehlenswert. Es gibt auch viele Touren zu einen der vielen
            Inseln vor Ort, die ich aber nicht gemacht habe. 
            <br/>
            Von Carthagena ging es weiter nach Santa Marta, um von dort aus den Tayrona Nationalpark zu besuchen. 
            <br/>
            WICHTIG! 
            <br/>
            Es fahren 2 Arten von Bussen nach Santa Marta. Bei einem kann man ein Ticket nur mit Reisepass kaufen, bei dem anderen nicht.
            Kauft ausschließlich die Tickets mit Reisepass, da die anderen Busse ab und zu überfallen werden. Ich habe tatsächlich jemanden im späteren Verlauf der Reise kennengelenrt, der auf der Route ausgeraubt wurde.
            <br/>
            <br/>

            Santa Marta an sich, ist nicht unbedingt sehenswert, aber von hier aus gibt es viele Touren zu den umliegenden Sehenswürdigkeiten. Viele machen eine 3 Tagestour zur Lost City, die ich aber nicht gemacht habe.
            Stattdessen haben wir uns ein Auto gemietet und sind in den Tyrona Nationalpark und Minca gefahren. Beides sehr schöne Orte und definitiv einen Besuch wert.  
            
            
            </p>
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
