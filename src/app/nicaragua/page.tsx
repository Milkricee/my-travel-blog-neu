"use client";

import dynamic from "next/dynamic";
import NicaraguaRoute from "../maps/nicaragua";
import Accordion from "@/app/components/Akkordeon";
import "./module.css";

// Dynamische Importe
const NavbarWithButton = dynamic(
  () => import("../components/NavbarWithButton"),
  { ssr: false }
);
const Comments = dynamic(() => import("../components/comments"), {
  ssr: false,
});
// const ImageGallery = dynamic(() => import("../components/ImageGallery"), {
//   ssr: false,
// });

export default function Nicaragua() {
  return (
    <div
      className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8"
      style={{ paddingTop: "var(--header-height)" }}
    >
      {/* Header-Bereich */}
      <NavbarWithButton
        links={[
          { href: "#map-nicaragua", label: "Route" },
          { href: "#zusammenfassung", label: "Zusammenfassung" },
          { href: "#managua", label: "Managua" },
          { href: "#sanjuandelsur", label: "San Juan del Sur" },
          { href: "#ometepe", label: "Ometepe" },
          { href: "#pazifikkueste", label: "Pazifikküste" },
          { href: "#granada", label: "Granada" },
          { href: "#treehouse", label: "Treehouse Nicaragua" },
          { href: "#comments", label: "Kommentare" },
        ]}
      />

      <header className="text-center mb-8" style={{ color: "black" }}>
        <h1 className="text-4xl font-bold mb-4">Entdecke Nicaragua</h1>
        <p>
          Nicaragua war für mich eine echte Überraschung und hat mich mit seinen
          traumhaften Stränden, unberührter Natur und einer entspannten
          Atmosphäre begeistert. Ich habe das Land vom 7. bis 23. September 2024
          bereist, in der Low Season. Dadurch war es nicht überlaufen, das
          Wetter war meist gut und die Kosten blieben niedrig. Besonders das
          Erkunden per Motorrad hat mir unglaublich viel Spaß gemacht und
          ermöglichte es mir, abgelegene Strände und Orte zu entdecken, die
          sonst nicht so leicht erreichbar sind.
        </p>
      </header>
      <div className="map-container">
        <NicaraguaRoute />
      </div>

      {/* Artikel-Inhalt */}
      <article className="container-style">
        {/* Abschnitt 1 */}
        <section id="zusammenfassung" className="summary-box ">
          <h2>Zusammenfassung</h2>
          <p>
            Bevor du den ganzen Bericht durchliest, hier die wichtigsten Punkte:
          </p>
          <h3>Minimale Reisekosten pro Tag</h3>
          <ul>
            <li>
              <strong>Budget-Backpacker:</strong> ab. 30 €
            </li>
            <li>
              <strong>Mittelklasse:</strong> 30-50 €
            </li>
            <li>
              <strong>Komfortabel:</strong> 50+ €
            </li>
          </ul>
          <h3>Empfohlene Reisedauer</h3>
          <ul>
            <li>
              <strong>2 Wochen:</strong> Managua, San Juan del Sur, Ometepe,
              Granada
            </li>
            <li>
              <strong>3-4 Wochen:</strong> Zusätzliche Erkundung der
              Pazifikküste
            </li>
            <li>
              <strong>4+ Wochen:</strong> Nicaragua in vollem Umfang erleben,
              mit Abstechern in den Norden und zur Karibikküste
            </li>
          </ul>
          <h3>Sicherheit</h3>
          <p>
            Nicaragua hat sich sicher angefühlt, doch einige Sicherheitsregeln,
            wie in jedem anderen Land in Zentralamerika, sollten beachtet
            werden:
          </p>
          <ul>
            <li>
              ✅ Nachts, vor allem in größeren Städten aufpassen wo man sich
              rumtreibt
            </li>
            <li>
              ✅ Wertsachen nicht offen tragen oder unbeaufsichtigt lassen
            </li>
            <li>✅ Als Scooter- Motorradfahrer besonders vorsichtig sein</li>
          </ul>

          <h3>Weitere Tipps für Backpacker</h3>
          <ul>
            <li>
              📱 SIM-Karten: Vor Ort kaufen (Claro oder Movistar), gute
              Netzabdeckung in den meisten Regionen
            </li>
            <li>
              🏍 Motorrad o. Scooter mieten: recht Preisgünstig und absolut
              empfehlenswert. (Für Scooter reicht ein Autoführerschein)
            </li>
            <li>
              🌊 Beste Reisezeit: Trockenzeit von Dezember - April, aber auch
              die Regenzeit kann angenehm sein, da besonders wenig Touristen
            </li>
          </ul>
        </section>

        {/* Abschnitt Managua */}
        <section id="managua">
          <h2>Managua</h2>
          <p>
            Hauptstadt Nicaraguas. Ich habe hier Einheimische kennen gelernt,
            weshalb ich länger geblieben bin, ansonsten einen Aufenthalt nicht
            wirklich Wert. Es bietet sich an direkt weiter nach Granada zu
            reisen.
          </p>
        </section>

        {/* Abschnitt San Juan del Sur */}
        <section id="sanjuandelsur">
          <h2>San Juan del Sur</h2>
          <p>
            Nach zwei Tagen in Managua nahm ich den Bus nach San Juan del Sur,
            einem beliebten Ort an der Pazifikküste. Es war einer der wenigen
            Orte, die selbst in der Low Season noch gut besucht waren. Die Stadt
            hat einen sehr entspannten Surfer-Vibe, viele Backpacker, und eine
            nette Auswahl an Bars und Restaurants. Ich blieb hier vier Tage und
            nutzte die Gelegenheit, um mir ein Motorrad für 10 Tage zu mieten.
          </p>
          <h3>Highlights:</h3>
          <ul>
            <li>🏄 Playa Maderas: Perfekter Surfspot</li>
            <li>🌅 Sunset Viewpoints: Epische Sonnenuntergänge</li>
            <li>
              🌊 🍹 Sunday Funday: Bekanntes Barcrawling. Hat mir persönlich
              absolut nicht gefallen.
              <br />
              Evlt eher was für jüngeres Publikum. Wenn man in einem der 2
              Hostels übernachtet (SOHLA ROOFTOP HOSTEL o. Hostel Pachamama),
              ist der Eintritt 5 oder 10€ günstiger. Lasst euch nicht abzocken.
            </li>
          </ul>
        </section>

        {/* Abschnitt Ometepe */}
        <section id="ometepe">
          <h2>Ometepe – Vulkaninsel im Nicaragua-See</h2>
          <p>
            Mit dem Motorrad und der Fähre ging es weiter nach Ometepe, einer
            Insel im großen Nicaragua-See. Da es Low Season war, waren kaum
            Touristen dort. Die Insel besteht aus zwei Vulkanen (Concepción &
            Maderas), die durch eine schmale Landbrücke verbunden sind. Ich habe
            hier 2 Nächte übernachtet eine in Moyogalpa (im Hostel &quot;Hostal
            Y Mirador Papasito &quot;. Es hat eine geniale Aussicht und ist
            wärmstens zu empfehlen) und eine Nacht auf der anderen Seite der
            Insel- in Balgue.
            <br />
            Auf der Insel kann man sich Scooter mieten.
          </p>
        </section>

        {/* Abschnitt Pazifikküste */}
        <section id="pazifikkueste">
          <h2>Pazifikküste – Von Playa Coco bis Playa Escondida</h2>
          <p>
            Nach Ometepe führ ich mit dem Motorrad zurück zur Küste und
            verbrachte einige Tage an abgelegenen Stränden zwischen Playa Coco
            und Playa Escondida. Die Küste von Nicaragua ist ein Traum für alle,
            die Ruhe und Natur suchen. Ich habe einige Nächte in der El Gigante
            Area verbracht, wo es entspannte Unterkünfte gibt.
            <Accordion title="Highlights">
              <ul>
                <li>
                  🏖 <strong>Playa Coco</strong>: Ruhiger Strand mit wenigen
                  Menschen
                </li>
                <li>
                  🏝 <strong>Playa Escondida</strong>: Der Name sagt alles –
                  verstecktes Paradies
                </li>
                <li>
                  🏍 <strong>Motorradtour entlang der Küste</strong>: Eine der
                  besten Entscheidungen der Reise.
                </li>
              </ul>
            </Accordion>
            <br />
            Generell war es eins meiner Favorites, einfach mit dem Motorrad der
            Küste entlang zu brettern und versteckte Strände zu erkunden.
          </p>
        </section>

        {/* Abschnitt Granada */}
        <section id="granada">
          <h2>Granada – Koloniale Perle Nicaraguas</h2>
          <p>
            Nach zehn Tagen auf dem Motorrad brachte ich es zurück nach San Juan
            del Sur und fuhr mit dem Bus weiter nach Granada. Die Stadt ist
            bekannt für ihre wunderschöne koloniale Architektur, lebhafte Märkte
            und ein pulsierendes Nachtleben. Ich verbrachte hier zwei Tage und
            erkundete die Stadt.
            <br />
            <Accordion title="Must-Sees in Granada">
              <ul>
                <li>
                  🏛 <strong>Kathedrale von Granada</strong> - mit Blick auf die
                  Stadt
                </li>
                <li>
                  🚤 <strong>Las Isletas</strong> - Kleine Inseln im
                  Nicaragua-See erkunden
                </li>
                <li>
                  🛶 <strong>Laguna de Apoyo</strong> - Perfekter Tagesausflug
                  zum Schwimmen & Entspannen.
                </li>
              </ul>
            </Accordion>
          </p>
        </section>

        {/* Abschnitt Treehouse Nicaragua */}
        <section id="treehouse">
          <h2>Treehouse Nicaragua</h2>
          <p>
            Nach Granada verbrachte ich zwei Nächte im Treehouse Nicaragua,
            einem Hostel mitten im Dschungel, bekannt für seinen Rave mitten im
            Dschungel. Normalerweise kommen hier bis zu 400 Leute, aber weil Low
            Season war, waren es nur 100. Trotzdem hatte die Party richtig gute
            Berliner Rave-Vibes. Die Location mitten in den Bäumen war einmalig,
            man hatte eine schöne Aussicht und hat sich mit den anderen Leuten
            aus dem Hostel wunderbar verstanden. Normalerweise muss man das im
            Vorraus buchen, da es sonnst ausgebucht ist.
            <br />
            Zum Schluss ging es zurück nach Managua, von wo aus ich mit dem Bus
            nach Costa Rica gefahren bin.
          </p>
        </section>
      </article>

      <Comments pageId="nicaragua" />

      <footer className="text-center mt-12">
        <p className="text-gray-500">
          Wie immer.. Dieser Artikel basiert auf persönlichen Erfahrungen.
          Blabla... Ich hoffe, er hat dich inspiriert.. Blabla...
          <br />
          Danke fürs lesen und ciao Kakao
        </p>
      </footer>
    </div>
  );
}
