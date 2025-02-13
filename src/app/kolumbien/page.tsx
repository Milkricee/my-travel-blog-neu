"use client"; // ✅ Die Datei als Client Component markieren

import dynamic from "next/dynamic";
import Accordion from "@/app/components/Akkordeon";
import "./module.css";

// ✅ Dynamische Imports müssen in einer Client Component verwendet werden
const NavbarWithButton = dynamic(
  () => import("../components/NavbarWithButton"),
  { ssr: false }
);
const Comments = dynamic(() => import("../components/comments"), {
  ssr: false,
});
const ImageGallery = dynamic(() => import("../components/ImageGallery"), {
  ssr: false,
});
const KolumbienRoute = dynamic(() => import("../maps/kolumbien"), {
  ssr: false,
});

export default function Kolumbien() {
  return (
    <div
      className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8"
      style={{ paddingTop: "var(--header-height)" }}
    >
      {/* Header-Bereich */}
      <NavbarWithButton
        links={[
          { href: "#map-kolumbien", label: "Route" },
          { href: "#zusammenfassung", label: "Zusammenfassung" },
          { href: "#Bogota", label: "Bogotá" },
          { href: "#sanandres", label: "San Andrés" },
          { href: "#carthagena", label: "Nordküste" },
          { href: "#medellin", label: "Medellín/Guatapé" },
          { href: "#pacific", label: "Pazifische Küste" },
          { href: "#leticia", label: "Amazonas (Leticia)" },
          { href: "#iquitos", label: "Iquitos" },
          { href: "#macarena", label: "La Macarena Nationalpark" },
          { href: "#comments", label: "Kommentare" },
        ]}
      />

      <header className="text-center mb-8" style={{ color: "black" }}>
        <h1 className="text-4xl font-bold mb-4">Entdecke Kolumbien</h1>
        <p>
          Kolumbien ist eines meiner absoluten Lieblingsländer. Von karibischen
          Stränden, über Regenwälder, bis hin zu Wüsten und Hochgebirgen.
          <br />
          Hier habe ich 2,5 Monate verbracht (Juli-Sept. 2022), deshalb würde es
          den Rahmen sprengen von allen meinen Erlebnissen zu berichten. Ich
          werde hier nur allgemein zu sehensewerten Locations berichten und
          einige Ratschläge teilen. Generell lässt sich Kolumbien in 7 Regionen
          einteilen: Karibikküste, Pazifikküste, Bogotaregion, Amazonas,
          Kafeteriaarea, Medellin und die Inseln. Der bericht ist nach den
          Regionen sortiert in welcher Reihenfolge ich gereist bin. Das ist aber
          keine generelle Reiseempfehlung. Kolumbien ist riesig und die
          Inlandflüge sind super günstig (meist nie mehr als 50€). Ich würde
          empfehlen die Reise nach den Flugpreisen und den Regionen, die man
          besichtigen möchte, zu planen.
        </p>
      </header>

      <div className="map-container">
        <KolumbienRoute />
      </div>

      {/* Artikel-Inhalt */}
      <article className="container-style">
        {/* Abschnitt 1.5 */}
        <section id="zusammenfassung" className="summary-box">
          <h2>Zusammenfassung</h2>
          <p>
            Bevor du den riesen Text durchliest, hier die wichtigsten Punkte:
          </p>

          <h3>Minimale Reisekosten pro Tag</h3>
          <ul>
            <li>
              <strong>Budget-Backpacker:</strong> ca 30 € (günstige Hostels,
              lokales Essen, öffentliche Verkehrsmittel)
            </li>
            <li>
              <strong>Mittelklasse:</strong> 30-50 € (private Zimmer,
              Inlandsflüge, Restaurantbesuche)
            </li>
            <li>
              <strong>Komfortabel:</strong> 50+ € (Hotels, geführte Touren,
              Inlandsflüge)
            </li>
          </ul>

          <h3>Empfohlene Reisedauer</h3>
          <p>
            Je nach Route sollte man mindestens 3-4 Wochen einplanen, um die
            wichtigsten Regionen zu erkunden:
          </p>
          <ul>
            <li>
              <strong>2 Wochen:</strong> Bogotá, Medellín, Karibikküste
              (Cartagena, Tayrona, Palomino)
            </li>
            <li>
              <strong>3-4 Wochen:</strong> Plus Amazonas, Pazifikküste oder
              Kaffeeregion
            </li>
            <li>
              <strong>6+ Wochen:</strong> Vollständiges Eintauchen in Kultur und
              Natur
            </li>
          </ul>

          <h3>Sicherheit</h3>
          <p>
            Kolumbien hat sich stark verbessert, doch einige Sicherheitsregeln
            sollten beachtet werden:
          </p>
          <ul>
            <li>
              ✅ <strong>Große Städte:</strong> In sicheren Vierteln bleiben (z.
              B. Poblado in Medellín, Candelaria in Bogotá).
            </li>
            <li>
              ✅{" "}
              <strong>Nachts nicht allein durch dunkle Straßen laufen.</strong>
            </li>
            <li>
              ✅ <strong>Wertsachen nicht offen tragen</strong> – vor allem in
              Bussen und an touristischen Orten.
            </li>
            <li>
              ✅ <strong>Bargeld nur in Maßen mitnehmen</strong> – viele Orte
              akzeptieren Kreditkarten. (In ländlichen Gegenden würde ich mich
              aber nicht drauf verlassen)
            </li>
            <li>
              ✅ <strong>Inlandsreisen:</strong> Busse mit offiziellen Anbietern
              buchen (z. B. Flota Magdalena, Bolivariano).
            </li>
          </ul>

          <h3>Weitere Tipps für Backpacker</h3>
          <ul>
            <li>
              📱 <strong>SIM-Karten:</strong> Am besten vor Ort kaufen (z. B.
              Claro, Movistar, Tigo) für günstiges Internet.
            </li>
            <li>
              🚍 <strong>Transport:</strong> Günstige Busverbindungen, aber auch
              sehr günstige Inlandsflüge mit Viva Air oder Avianca.
            </li>
            <li>
              🌎 <strong>Sprache:</strong> Wenig Englisch – ein paar
              Spanisch-Grundkenntnisse sind hilfreich.
            </li>
            <li>
              🌴 <strong>Beste Reisezeit:</strong> Dezember – März
              (Trockenzeit), Juni – September ist auch möglich.
            </li>
          </ul>
        </section>

        {/* Abschnitt 2 */}
        <section id="Bogota">
          <h2>Bogota</h2>
          <p>
            Höchstwahrscheinlich startest du in Bogota.
            <br />
            Bogota liegt 2600m über dem Meeresspiegel und ist die Hauptstadt
            Kolumbiens. Es ist etwas kühler aufgrund der Höhe, doch darf man die
            Sonne nicht unterschätzen. Schön eincremen und eher im Schatten
            sein, sonst ist ein Sonnenbrand oder sogar ein Sonnenstich
            garantiert. Ich war ein paar Stunden Fahrrad fahren bei 20 Grad und
            das hat für einen Sonnenstich gereicht. Bogota ist übrigens eine der
            am besten für Fahrräder ausgebauten Städte in Südamerika.
            <br />
            Hostels gibt es hier schon ab 5€ und die sind nicht mal schlecht.
            Streetfood gibt es auch schon ab 1€.
            <br />
            Nach SIM-Karten fragt ihr am besten im Hostel nach und kauft sie vor
            Ort. Online oder am Flughafen ist meist deutlich teurer.
            <br />
            Bogota hat einen gut ausgebauten Nahverkehr. Google Maps auf dem
            Handy hilft euch gut weiter, in der Stadt von A nach B zu kommen.
            Generell heißt es, dass Bogota keine ganz so sichere Stadt sein
            soll, allerdings habe ich in den 9 Tagen, die ich hier verbracht
            habe, keine schlechten Erfahrungen gemacht. Wie in den meisten
            Städten in Südamerika heißt es: nicht alleine betrunken irgendwo
            herumtorkeln, nicht mit dem Handy in der Hand spazieren gehen und
            ein bisschen auf die Umgebung achten.
          </p>
          <hr className="my-4 border-t border-gray-300" />
          <h2 className="text-xl font-semibold mt-4">Must Sees:</h2>
          <Accordion title="Plaza de Bolívar">
            <p>
              Der Plaza de Bolívar ist das historische Zentrum von Bogota und
              beherbergt wichtige Gebäude wie den Kongress und die Kathedrale.
            </p>
          </Accordion>
          <Accordion title="Viewpoint Monserrate">
            <p>
              Ein berühmter Aussichtspunkt, der mit einer Seilbahn oder zu Fuß
              erreicht werden kann. Von hier aus hast du eine atemberaubende
              Aussicht über die Stadt.
            </p>
          </Accordion>
          <Accordion title="La Candelaria">
            <p>
              Das kulturelle Herz der Stadt mit kolonialen Gebäuden, bunten
              Straßen und Museen.
            </p>
          </Accordion>
          <Accordion title="Goldmuseum (Museo del Oro)">
            <p>
              Eines der wichtigsten Museen in Bogota, das eine beeindruckende
              Sammlung von präkolumbianischem Goldschmuck zeigt.
            </p>
          </Accordion>
          <ImageGallery
            images={[
              { src: "/kolumbien/bogota/bolivar.jpg", alt: "Plaza de Bolívar" },
              {
                src: "/kolumbien/bogota/monserate.jpg",
                alt: "Aussicht vom Berg Monserate",
              },
              {
                src: "/kolumbien/bogota/arepa.jpg",
                alt: "Das dürfte eine Arepa sein. Ein lokales Gericht, welches du für lau an jeder Straßenecke kriegst",
              },
              {
                src: "/kolumbien/bogota/slums.jpg",
                alt: "Eine Aussicht auf die Slums im Südwesten der Stadt. Es Fährt eine Gondel hin. Die Gegend zählt als nicht Sicher, aber die Aussicht ist schön",
              },
            ]}
          />
        </section>
        {/* Abschnitt 3 */}
        <section id="sanandres">
          <h2>San Andres</h2>
          <p>
            Mit dem Flugzeug ging es von Bogota direkt in Kolumbiens
            Karibikparadis vor der Küste von Nicaragua. Hier gibt es nicht viel
            zu berichten, aber um so mehr zu erkunden. Die Insel ist so klein,
            dass man in 1,5 Std einmal um die Insel fahren kann. Man kann sich
            relativ günstig überall Scooter leihen, was ich wärmstens Empfehle.
            Nur Helme findest du hier keine. Alle fahren Helmlos und das ist
            völlig normal. Es gibt leider völlig überlaufene, aber dennoch sehr
            schöne Tagesausflüge zu den Inseln Johnny Cay und Acuario.
          </p>
          <ImageGallery
            images={[
              {
                src: "/kolumbien/andres/karibik.jpg",
                alt: "Gebäude im klassischen, karibischen Kolonialstil sieht man überall auf der Insel",
              },
              {
                src: "/kolumbien/andres/plane.jpg",
                alt: "Blick aus dem Flieger",
              },
              {
                src: "/kolumbien/andres/strand.jpg",
                alt: "Überall karibisches Flair und traumhafte Strände",
              },
              {
                src: "/kolumbien/andres/krab.jpg",
                alt: "Nachts laufen solche Krabben auf den Straßen",
              },
              {
                src: "/kolumbien/andres/aligator2.jpg",
                alt: "In der Mitte der Insel gibts einen See mit kleinen Krokodilen (oder Alligatoren kp.)",
              },
            ]}
          />
        </section>
        {/* Abschnitt 4 */}
        <section id="carthagena">
          <h2>Nordküste</h2>
          <p>
            Als nächsten Stopp ging es für mich weiter an die Nordküste, und
            zwar nach Carthagena. Das ist ein guter Ausgansgpunkt um sich die
            Nordküste anzugucken. Carthagena hat eine schöne Altstadt, deshalb
            ist der Besuch empfehlenswert. Es gibt auch viele Touren den vielen
            Inseln an der Küste, die ich aber nicht gemacht habe.
            <br />
            Von Carthagena ging es weiter nach Santa Marta, um von dort aus den
            Tayrona Nationalpark zu besuchen.
            <br />
            <strong className="text-red-600">WICHTIG!</strong>
            <br />
            Es fahren 2 Arten von Bussen nach Santa Marta. Bei einem kann man
            ein Ticket nur mit Reisepass kaufen, bei dem anderen nicht.
            <strong>
              {" "}
              Kauft ausschließlich die Tickets wo man den Reisepass vorzeigen
              muss
            </strong>
            , da die anderen Busse ab und zu überfallen werden. Ich habe
            tatsächlich jemanden im späteren Verlauf der Reise kennengelenrt,
            der auf der Route ausgeraubt wurde. (Nicht nur er, sondern der ganze
            Bus. Und es war kein klassischer Touristenbus). 3 Passagiere sind
            auf einmal aufgestanden mit Pistolen in der Hand und haben allen
            ihre Wertgegenstände abgenommen. Aber keine sorge, das passiert
            nicht so oft. Wie schon gesagt, ich hatte in 2,5 Monaten absolut
            keine Probleme in irgend einer Art und Weise.
            <br />
            <br />
            Santa Marta an sich, ist nicht unbedingt sehenswert, aber von hier
            aus gibt es viele Touren zu den umliegenden Sehenswürdigkeiten.
            Viele machen eine 3 Tagestour zur Lost City, die ich aber nicht
            gemacht habe. Stattdessen haben wir uns ein Auto gemietet und sind
            in den&nbsp;
            <a
              href="https://www.google.com/maps?q=Tayrona+Nationalpark"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-link"
            >
              Tayrona Nationalpark
            </a>
            &nbsp; und nach&nbsp;
            <a
              href="https://www.google.com/maps?q=Minca+Kolumbien"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-link"
            >
              Minca
            </a>
            &nbsp; gefahren.
            <br />
            Beides sehr schöne Orte und definitiv einen Besuch wert. Von Minca
            und Tyrona kommt man gut weiter nach Palomino. Ein kleines
            Hippiörtchen. Leider haben wir hier nur eine Nacht verbracht, und
            mussten am Mittag das Auto in Santa Marta zurückgeben. Für die
            KiteSurfer unter uns bietet
            <a
              href="https://www.google.com/maps?q=Cabo+de+la+Vela"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-link"
            >
              Cabo de la Vela
            </a>
            , was mitten in der Wüste liegt, auch optimale Bedingungen zum
            Kiten.
          </p>
          <ImageGallery
            images={[
              {
                src: "/kolumbien/carthagena/1.jpg",
                alt: "Bilder aus dem Tyrona National Park",
              },
              {
                src: "/kolumbien/carthagena/2.jpg",
                alt: "In dem Park kann man auch kostenlos in Hängematten übernachten",
              },
              {
                src: "/kolumbien/carthagena/3.jpg",
                alt: "Wir waren gefühlt die einzigen hier. Es war himmlisch",
              },
              { src: "/kolumbien/carthagena/4.jpg", alt: "Bilder aus Minca" },
              {
                src: "/kolumbien/carthagena/5.jpg",
                alt: "Wir haben in Minca nicht übernachtet, aber die Hostels in dieser gegen sollen wohl Phänomenal sein",
              },
              {
                src: "/kolumbien/carthagena/6.jpg",
                alt: "Bilder aus Minca",
              },
              {
                src: "/kolumbien/carthagena/7.jpg",
                alt: "Unser Auto hatte auch vorne getönte Scheiben, was das fahren im dunkeln außerordentlich spannend gestaltet hat",
              },
            ]}
          />
        </section>
        {/* Abschnitt 5 */}
        <section id="medellin">
          <h2>Medellin und Guatapé</h2>
          <p>
            Von Santa Marta ging es mit dem Flieger weiter nach Medellin. Die
            meisten mögen Medellin mehr als Bogota, ich persönlich mochte
            Medellin nicht so. In Bogota waren die Hostels deutlich günstiger
            und in der Ganzen Stadt verteilt, und in Medellin waren Sie alle in
            einem Viertel zentriert. Deshalb zieht es alle Bettler und
            Touristenabzocker in dieses Viertel , und da erschien mir der
            Kontrast zwischen Arm und Reich besonders krass und heuchlerisch.
            Auch hier zeigt dir Googlemaps gute Routen mit dem öffentlichen
            Nahverkehr.
            <br />
            Hier eine kleine Liste von Sehenswürdigkeiten in Medellin:
          </p>

          <Accordion title="Comuna 13">
            <p>
              Ein ehemaliges Problemviertel, das heute für seine beeindruckenden
              Graffitis, Kunstinstallationen und Straßenmusik bekannt ist.
              Geführte Touren zeigen die kulturelle Transformation des Viertels.
            </p>
          </Accordion>
          <Accordion title="Plaza Botero">
            <p>
              Ein zentraler Platz mit 23 Skulpturen des berühmten Künstlers
              Fernando Botero. Ideal für Kunstliebhaber und Fotografie.
            </p>
          </Accordion>
          <Accordion title="Museo de Antioquia">
            <p>
              Direkt am Plaza Botero gelegen. Es zeigt eine große Sammlung von
              Boteros Werken und andere Ausstellungen kolumbianischer Kunst.
            </p>
          </Accordion>
          <Accordion title="Metrocable und Parque Arví">
            <p>
              Die Seilbahn bietet atemberaubende Ausblicke auf die Stadt und
              führt zum grünen Naturpark Parque Arví, der ideal für Wanderungen
              und Picknicks ist.
            </p>
          </Accordion>
          <Accordion title="Jardín Botánico">
            <p>
              Ein wunderschöner botanischer Garten mit Orchideen,
              Schmetterlingen und einem großen See. Ein ruhiger Ort zum
              Entspannen inmitten der Stadt.
            </p>
          </Accordion>
          <Accordion title="Pueblito Paisa">
            <p>
              Eine Nachbildung eines traditionellen Dorfes auf dem Cerro
              Nutibara. Von hier aus hat man einen großartigen Panoramablick
              über Medellín.
            </p>
          </Accordion>
          <Accordion title="Cerro El Volador">
            <p>
              Ein Naturpark und Aussichtspunkt, perfekt für Wanderungen und um
              eine Pause vom Stadtleben zu genießen.
            </p>
          </Accordion>
          <Accordion title="Parque Lleras">
            <p>
              Das Herz des Ausgehviertels El Poblado, bekannt für Restaurants,
              Bars und Nachtleben.
            </p>
          </Accordion>

          <ImageGallery
            images={[
              {
                src: "/kolumbien/medellin/pano.jpg",
                alt: "Vor 10-12 Jahren eine absolute no go Area, heute ein Touristenmagnet",
              },
              {
                src: "/kolumbien/medellin/basketball.jpg",
                alt: "Hier sind jeden Tag tausende touristen und ist sehr sicher",
              },
              {
                src: "/kolumbien/medellin/2.jpg",
                alt: "Es gibt viele authentische Touren, von Bewohnern geführt",
              },
              {
                src: "/kolumbien/medellin/close.jpg",
                alt: "Communa 13 ist ein wahres Labyrint",
              },
            ]}
          />
          <h2>Guatape</h2>
          <p>
            <a
              href="https://www.google.com/maps?q=Guatapé"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-link"
            >
              Guatapé
            </a>
            , etwa zwei Stunden mit dem Bus von Medellín entfernt, ist ein
            absolutes Highlight in der Region. Man kann eine Tagestour von
            Medellin machen, oder auch vor Ort übernachten. Der Ort besticht
            durch seine farbenfrohen Häuser und malerischen Gassen, die von der
            Kunst und Kultur der Region erzählen. Der nahegelegene Stausee lädt
            zu Bootstouren oder entspannten Spaziergängen ein. Das Highlight ist
            jedoch La Piedra del Peñol, ein 220 Meter hoher Monolith mit über
            700 Treppenstufen, die zu einer spektakulären Aussicht führen. Von
            oben eröffnet sich ein unvergesslicher Blick auf das Labyrinth aus
            Wasser und Bergen, das die Region prägt. Ein Besuch in Guatape
            verbindet Natur, Kultur und Abenteuer - ideal für eine Auszeit vom
            Stadtleben Medellíns.
          </p>

          <ImageGallery
            images={[
              {
                src: "/kolumbien/guatape/view.jpg",
                alt: "Aussicht vom Felsen",
              },
              {
                src: "/kolumbien/guatape/stairs.jpg",
                alt: "ca 700 Stufen hoch und genau so wieder runter",
              },
              {
                src: "/kolumbien/guatape/streets.jpg",
                alt: "Bunte Straßen in Guatape",
              },
              {
                src: "/kolumbien/guatape/boats.jpg",
                alt: "Von hier aus kann man sich erschwingliche Bootsrouren buchen",
              },
              {
                src: "/kolumbien/guatape/rock.jpg",
                alt: "So sieht der Felsen von weiten aus",
              },
              {
                src: "/kolumbien/guatape/villa.jpg",
                alt: "Die Region ist der Rückzugsort der schönen und reichen",
              },
              {
                src: "/kolumbien/guatape/pablo.jpg",
                alt: "Selbst Pablo Escobar hatte hier eine Villa stehen. Mittlerweile ist sie abgebrannt und verlassen",
              },
            ]}
          />
        </section>
        <section id="pacific">
          <h2>Pazifische Küste</h2>
          <p>
            Die pazifische Küste Kolumbiens war eins der Highlights meiner
            Reise. Die Region ist noch sehr unberührt und außer 2 Städten im
            Süden, wo es 2 Hauptstraßen vom &quot;Festland&quot; zur Küste gibt,
            nur per Flugzeug zu erreichen. Aufgrund der Infrastruktur zum Wasser
            gibt es in der Region viele Machtkämpfe zwischen den Gangs. (Aber
            nicht da, wo ich war)
            <br />
            <br />
            Ich bin von Medellin nach&nbsp;
            <a
              href="https://www.google.com/maps?q=Bahia+Solano"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-link"
            >
              Bahia Solano
            </a>
            &nbsp;geflogen und bin dann über &nbsp;
            <a
              href="https://www.google.com/maps?q=El+Valle+Choco"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-link"
            >
              El Valle
            </a>
            &nbsp;nach&nbsp;
            <a
              href="https://www.google.com/maps?q=Nuqui"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-link"
            >
              Nuqui
            </a>
            &nbsp;weitergereist. Die Region ist bekannt für ihre Wale, die von
            Juni bis Oktober hier ihre Jungen bekommen. Ich war im September
            hier und habe einige Wale gesehen. Die Region ist auch bekannt für
            ihre heißen Quellen und Wasserfälle. Ich habe hier insgesamt 8 Tage
            verbracht.
            <br />
            Die Region ist sehr sicher und die Leute sehr freundlich. Es fühlt
            sich an wie ein anderes Land, durch das Klima, die Natur und die
            Einheimischen. Selbst die Sprache hat hier einen ganz besonderen
            Dialekt.
            <br /> Die Inlandsflüge hierher waren aber verglichen mit dem Rest
            Kolumbiens recht teuer. Pro Flug habe ich ca. 110€ bezahlt. (Lustige
            Story: Das Wetter in der Region ist sehr wechselhaft und feucht.
            Durch die schlechte Sicht konnte unser Flugzeug nicht landen und wir
            sind nach Medellin umgekehrt und konnten erst am nächsten Tag den 2.
            Versuch starten. Das ist scheinbar gar nicht so unüblich)
            <br />
            Zwischen den Dörfern reist man übers Wasser mit kleinen Speedbooten,
            da es einfach keine Infrastruktur durch den Dschungel gibt. Es gibt
            viele naturbelassene Strände, die förmlich zum Wandern einladen.
            Habe ich bereits erwähnt, dass es eins der Highlights meiner Reise
            war?
            <br />
            Hier habe ich super Viele Fotos gemacht, die euch einen guten
            Einblick in die Region geben.
          </p>
          <ImageGallery
            images={[
              {
                src: "/kolumbien/pazifik/flugzeug.jpg",
                alt: "Mit diesem Flugzeug ging es los",
              },
              {
                src: "/kolumbien/pazifik/flughafen.jpg",
                alt: "So sah der Miniflughafen in Bahia Solano aus",
              },
              {
                src: "/kolumbien/pazifik/start.jpg",
                alt: "So empfängt dich die Region. Sehr feucht und grün. Ein ganz anderes Klima.",
              },
              {
                src: "/kolumbien/pazifik/strand2.jpg",
                alt: "Eine menge unberührter Strände",
              },
              {
                src: "/kolumbien/pazifik/strand5.jpg",
                alt: "Strand und Dschungel",
              },
              {
                src: "/kolumbien/pazifik/dorf.jpg",
                alt: "So und ähnlich sehen die Dörfer aus",
              },
              {
                src: "/kolumbien/pazifik/dorf2.jpg",
                alt: "Dörfer",
              },
              {
                src: "/kolumbien/pazifik/dorf3.jpg",
                alt: "Bei Ebbe liegen die Boote auf dem Trockenen",
              },
              {
                src: "/kolumbien/pazifik/friedhof.jpg",
                alt: "Beim Gegend entdecken bin ich auf diesen Friedhof gestoßen",
              },
            ]}
          />
          <br />
          <p className="text-center">Hier weitere Bilder:</p>

          <br />
          <ImageGallery
            images={[
              {
                src: "/kolumbien/pazifik/wal1.jpg",
                alt: "Hier eine gelungene Aufnahme einer Walkuh und ihres Jungen",
              },
              {
                src: "/kolumbien/pazifik/wal2.jpg",
                alt: "Hier sieht man die lange, weiße Flosse des Wals",
              },
              {
                src: "/kolumbien/pazifik/käfer.jpg",
                alt: "Diesen riesen Käfer habe ich auf einem Spaziergang entdeckt",
              },
              {
                src: "/kolumbien/pazifik/transfer.jpg",
                alt: "Die transfere waren sehr aufregend. Die Boote sind immer vollbepackt mit Menschen und Gepäck. Ein wasserfester Beutel ist sehr zu empfehlen.",
              },
              {
                src: "/kolumbien/pazifik/dorf11.jpg",
                alt: "View auf ein Dorf",
              },
              {
                src: "/kolumbien/pazifik/strand7.jpg",
                alt: "Hier habe ich die krassesten Ebbe und Flut Unterschiede erlebt. Bei Ebbe konnte man um diese Insel komplet drumherum laufen",
              },
              {
                src: "/kolumbien/pazifik/sunse1.jpg",
                alt: "Auch Sonnenuntergänge sind hier einfach ein Traum",
              },
              {
                src: "/kolumbien/pazifik/sunset2.jpg",
                alt: "Traumhafte Kulisse",
              },
              {
                src: "/kolumbien/pazifik/dorf9.jpg",
                alt: "Nuqui",
              },
            ]}
          />
          <p>
            Ich habe noch unzählige weiter Bilder aus der Region, aber das würde
            den Rahmen sprengen. Falls ihr Zeit habt und authentische Natur,
            abseits vom Massentourismus sucht, seid ihr hier genau richtig.
            <br />
            Wichtig!
            <br />
            Nehmt für euren Trip hierher genug Bargeld mit, da es in den kleinen
            Dörfern keine Bankautomaten gibt. In Bahia Solano gab es eine Bank.
            Aber das sie immer funktioniert, würde ich mich nicht drauf
            verlassen.
          </p>
          <br />
        </section>
        <section id="iquitos">
          <h2>Im Amazonas. Leticia</h2>
          <p>
            Von der Pazifischen Küste ging es mit dem Flieger über Medellin und
            Bogota ganz in den Süden Kolumbiens – in den Amazonas. Auch hier hat
            es sich wieder wie ein anderes Land angefühlt.&nbsp;
            <a
              href="https://www.google.com/maps?q=Leticia+Kolumbien"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-link"
            >
              Leticia
            </a>
            &nbsp;grenzt an Peru und Brasilien und die Grenzen sind offen
            (zumindest am Anfang. Da man ohne Flugzeug oder Boot eh nicht weit
            kommt). Hier kann man innerhalb von einer Stunde 3 Ländern besuchen.
            Ich habe mir hier einen Roller gemietet und die Gegend erkundet. Von
            hier aus gibt es viele mehrtägige Touren in den Amazonas. Vergleicht
            die Preise der unterschiedlichen Anbieter und vergesst nicht zu
            verhandeln.
            <br />
            Von Leticia aus, kann man mit dem Boot, entweder nach Brasilien
            rein, oder nach Peru. Ich habe mich für Peru entschieden, da ich
            leider nicht mehr so viel Zeit hatte.
            <br />
            Nach Peru fahren 2 Arten von Boote. Ein Speedbot, welches dich
            innerhalb von einigen Stunden nach Iquitos bringt (die größe nicht
            mit Land angebundene Stadt). Oder ein Slowboat, was meist die Lokals
            nutzen. Es ist günstiger, aber dafür ist man auch 3 Tage unterwegs.
            <br />
            Ich habe mich für das Slowboat entschiedenund war der einzige
            Tourist an Board. Das Boot macht zwischendurch viele Stopps auf den
            entlegenen Dörfern, um Menschen und Waren ein- und auszuladen. Das
            hat mir einen guten Einblick in deren Leben gegeben.
            <br />
            Bevor ihr euch entscheidet mit einem der 2 Boote zu fahren, vergesst
            nicht die Immigrationcontroll durchzuführen und holt euch eure
            Stempel ab.
            <br />
            Achso, und falls ihr euch entscheidet mit dem Slowboat zu fahren,
            solltet ihr euch eine Hängematte zu besorgen, denn das wird für die
            nächsten 3 Tage euer Bett. Auf dem Boot kriegt man zwar Essen, mir
            hätte es aber nicht gereicht. Aber man macht genug Stopps unterwegs,
            um sich mit Essen zu versorgen. Außerdem gab es auf dem Boot ein
            Kiosk, wo man sich Bier und Essen Kaufen konnte.
          </p>
          <h2> Kleine Einblicke in Leticia</h2>
          <ImageGallery
            images={[
              {
                src: "/kolumbien/leticia/view1.jpg",
                alt: "Von diesem Kirchturm, hat man diese Aussicht..",
              },
              {
                src: "/kolumbien/leticia/view.jpg",
                alt: "Man sieht fast ganz Leticia von hier aus. Das Klima war hier ganz anders und man hat viele Vögel sehr sehr laut zwitschern Hören",
              },
              {
                src: "/kolumbien/leticia/leticia2.jpg",
                alt: "Mit diesen Booten kommt man auf die Peruanische Seite",
              },
              {
                src: "/kolumbien/leticia/leticia.jpg",
                alt: "Kleiner einblick in die Seitenstraßen",
              },
            ]}
          />

          <h2> Die Fahrt auf dem Amazonas</h2>
          <ImageGallery
            images={[
              {
                src: "/kolumbien/river/slowboat.jpg",
                alt: "Ich bin nicht mit dem Boot gefahren, aber mit einem ähnlichen",
              },
              {
                src: "/kolumbien/river/oben.jpg",
                alt: "Das war mein Zuhause für die nächsten 3 Tage. Das obere Deck war erste Klasse,",
              },
              {
                src: "/kolumbien/river/unten.jpg",
                alt: "Das untere Deck war viel vollgepackter",
              },
              {
                src: "/kolumbien/river/view.jpg",
                alt: "So sah die Aussicht die meiste Zeit aus",
              },
              {
                src: "/kolumbien/river/bett.jpg",
                alt: "Das war mein Bett und so habe ich die meiste Zeit, mein Buch lesen verbracht",
              },
              {
                src: "/kolumbien/river/dorf.jpg",
                alt: "So sieht ein kleines peruanisches Dorf aus",
              },
              {
                src: "/kolumbien/river/dorf2.jpg",
                alt: "Oder so. Durch die ganzen Stopps entlag der Route, hat man einen schönen Einblick bekommen, wie man in den entlegenen Dörfern lebt",
              },
            ]}
          />
          <h2> Iquitos</h2>
          <p>
            In&nbsp;
            <a
              href="https://www.google.com/maps?q=Iquitos+Peru"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-link"
            >
              Iquitos
            </a>
            &nbsp;angekommen, habe ich mir ein Hostel gesucht und habe mir die
            Stadt angeguckt. Die Stadt hat mir zwar nicht so gefallen.Es war
            recht dreckig, aber das hat auch seinen Charme. Hier gibt es viele
            Touren in den Amazonas. Aus der peruanischen Seite sollen die Touren
            etwas günstiger sein, als von Kolumbien aus. Von hier aus habe ich
            eine 3 Tägige Tour in den Amazonas gemacht (Preis weiß ich nicht
            mehr, dürften grob zwischen 90 und 140 Dollar gewesen sein). Man
            fährt in eine entlegene Lodge und macht von dort aus, mit einem
            erfahrenen Guide unterschiedliche Tagestripps. Als ich im September
            da war, war es Dryseason, trotzdessen gab es tausende von Mücken.
            Ich kann mir gar nicht vorstellen, wie es in der Regensaison sein
            muss. Aber ich kann die Touren hier trotzdem voll und ganz
            empfehlen. Wir haben viele unterschiedliche Tiere und Natur gesehen
            und sogar Piranhas geangelt und anschließend gegessen. Ein kleines
            Highlight war im Amazonas mit 2 unterschiedlichen Delfinarten zu
            schwimmen. Eine klassisch grauer Delfin und eine rosa Delfinart, die
            es nur im Amazonas gibt (die sehen by the way echt ugly aus).
          </p>
          <h2>Iquitos</h2>
          <ImageGallery
            images={[
              {
                src: "/kolumbien/iquitos/straßen.jpg",
                alt: "War schon ein bisschen dreckig",
              },
              {
                src: "/kolumbien/iquitos/landschaft.jpg",
                alt: "Aber auch hier gab es schöne Landschaften",
              },
              {
                src: "/kolumbien/iquitos/müll.jpg",
                alt: "Aber auch sowas gab es",
              },
              {
                src: "/kolumbien/iquitos/gebäude.jpg",
                alt: "Es gab auch schöne Gebäude",
              },
              {
                src: "/kolumbien/iquitos/hostel.jpg",
                alt: "In dem Hostel habe ich übernachtet",
              },
            ]}
          />
          <h2>Dschungeltour</h2>
          <ImageGallery
            images={[
              {
                src: "/kolumbien/amazonas/dorffest.jpg",
                alt: "Wenn man eine Dschungeltour macht, kommt man nicht drum herum sich dieses Dorf anzusehen. Wir haben Glück gehabt und ein Dorffest miterlebt. Es gab viel Bier und tanzende Menschen",
              },
              {
                src: "/kolumbien/amazonas/faultier.jpg",
                alt: "Das Dorf zieht einen verlassenes, junges Faultier auf. Ich war sehr happy es mal auf den Arm nehmen zu dürfen",
              },
              {
                src: "/kolumbien/amazonas/boot.jpg",
                alt: "Mit dem Boot ging es in die entlegensten Ecken des Amazonas",
              },
              {
                src: "/kolumbien/amazonas/wanderung.jpg",
                alt: "Es war Trockensaison, normalerweise steht hier alles unter Wasser. Deshalb sind die Häuser hier auf Stelzen",
              },
              {
                src: "/kolumbien/amazonas/baum.jpg",
                alt: "Wir haben unangefassten Dschungel und riesige Bäume gesehen",
              },
              {
                src: "/kolumbien/amazonas/tarantel.jpg",
                alt: "Bei einer Nachtwanderung haben wir viele unterschiedliche Tiere gesehen. Aber ohne unseren erfahrenen Guide, hätte ich kein einziges Tier entdeckt",
              },
              {
                src: "/kolumbien/amazonas/anakonda.jpg",
                alt: "Wir hatten extrem Glück und haben eine schlafende, 2 Meter große Babyanakonda gesehen. Dieses Exemplar war ca. 2 Jahre alt. Ausgewachsene Weibchen können bis zu 9 Meter lang werden",
              },
              {
                src: "/kolumbien/amazonas/sunset.jpg",
                alt: "Wir haben atemberaubende Sonnenuntergänge gesehen. Auch 2 unterschiedliche Delfinarten, aber ich glaube ich habe kein Foto mit denen erwischt",
              },
              {
                src: "/kolumbien/amazonas/view.jpg",
                alt: "So sieht es meist aus, wenn man mit dem Boot durch kleine zuflüsse des Amazonas fährt. Sogar wilde Affen haben wir gesehen.",
              },
            ]}
          />
        </section>
        <section id="macarena">
          <h2>Mesetas. La Macarena Nationalpark</h2>
          <p>
            <a
              href="https://www.google.com/maps?q=Mesetas+Kolumbien"
              target="_blank"
              rel="noopener noreferrer"
              className="animated-link"
            >
              Mesetas
            </a>
            - diese Region ist kaum erschlossen, und die wenigen Touristen die
            man hier trifft, sind alle Kolumbianer. Diese Region war ein kleiner
            Geheimtipp meines Couchsurfing Hosts. Man fährt ca. 6 Stunden von
            Bogota aus über die Berge hin. Die Busse waren übrigens sehr
            komfortabel.
            <br />
            Hier gibt es viele unterschiedliche Touren zu recht akzeptablen
            Preisen. Ich habe 2 unterschiedliche Tagestouren für je 50€ gemacht.
            Einmal Rafting und einmal mit dem Auto und ein bisschen laufen durch
            Teile des riesigen Nationalparks zu unterschiedlichen Wasserfällen.
            In der Region gibt es über 90 unterschiedliche Wasserfälle.
            <br />
            Da es kaum ausländische Touristen gibt, ist man hier auf ein
            bisschen Spanischwissen angewiesen. Aber selbst mit meinen kaum
            vorhandenen Spanischkenntnissen kam ich gut zurecht. Wenn man eine
            Tour bucht, wird sich um alles gekümmert und man kann relaxen. Ich
            fand den Service, den man für das Geld bekommt echt gut. ist ein
            kleines Dörfchen mit netten Menschen. Man bekommt einen guten
            Einblick, wie Menschen in den etwas abseits gelegenen Regionen
            leben.
            <br />
            Vor ca. 10-15 Jahren war das Gebiet noch von der FARC besetzt und
            ein Kriegsgebiet. Aber langsam kommt der Tourismus wieder. Heute ist
            es sicher und man kann die atemberaubende Natur genießen. Mir wurde
            erzählt, dass man manchmal Leichen nach Kämpfen im Fluss treiben
            sehen hat. Aber das ist heute nicht mehr der Fall. Also, falls ihr
            mal in Bogota seid und ein bisschen mehr Zeit habt, kann ich euch
            die Region nur empfehlen.
            <br />
            Auch hier fahren alle ohne Helm, und es war witzig zu sehen, wie ein
            ca. 12-Jähriger seine Mutter auf nem Motorrad rumchauffiert hat. Ein
            kleines Highlight war, als ich eine Horde Affen bei einem
            Spaziergang durchs Dorf gesehen habe.
          </p>
          <ImageGallery
            images={[
              {
                src: "/kolumbien/makarena/1.jpg",
                alt: "Wunderschöne, wilde Natur",
              },
              {
                src: "/kolumbien/makarena/2.jpg",
                alt: "Abseits vom jeglichen Massentourismus",
              },
              {
                src: "/kolumbien/makarena/3.jpg",
                alt: "Ich glaube die wurde nicht mehr genutzt",
              },
              {
                src: "/kolumbien/makarena/4.jpg",
                alt: "Nur einer von vielen vielen Wasserfällen. Nach dem Nationalpark sind die meisten anderen Wasserfälle die ich zu Gesicht bekommen habe, eher uninteressant geworden",
              },
              {
                src: "/kolumbien/makarena/5.jpg",
                alt: "Stille, Ruhe und Natur laden förmlich zu stundenlangen Spaziergängen ein",
              },
            ]}
          />
        </section>
      </article>

      <Comments pageId="kolumbien" />

      {/* Footer-Bereich */}
      <footer className="text-center mt-12">
        <p className="text-gray-500">
          Dieser Artikel basiert auf meinen persönlichen Erfahrungen. Ich hoffe
          der Bericht hat dir gefallen und inspiriert dich dazu, Kolumbien
          selbst zu entdecken! Viel Spaß!
        </p>
      </footer>
    </div>
  );
}
