"use client";

import dynamic from "next/dynamic";
import SenegalRoute from "../maps/senegal";
import "./module.css";

// ✅ Dynamische Imports für Performance-Optimierung (Client-seitige Komponenten)
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

export default function Senegal() {
  return (
    <div
      className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8"
      style={{ paddingTop: "var(--header-height)" }}
    >
      {/* Header-Bereich */}
      <NavbarWithButton
        links={[
          { href: "#map-senegal", label: "Route" },
          { href: "#dakar", label: "Die Hauptstadt Dakar" },
          { href: "#insel", label: "Insel der Sklaven" },
          { href: "#mbour", label: "Nächster Stopp M'bour" },
          { href: "#saloum", label: "Das Saloum Delta" },
          { href: "#gambia", label: "Die Einreise nach Gambia" },
          { href: "#banjul", label: "Banjul" },
          { href: "#bordercrossing", label: "Bordercrossing Gambia" },
          { href: "#cap-skirring", label: "Cap Skirring" },
          { href: "#comments", label: "Kommentare" },
        ]}
      />

      <header className="text-center mb-8" style={{ color: "black" }}>
        <h2 className="text-4xl font-bold mb-4">Entdecke den Senegal</h2>
        <p>
          Ich berichte von meinem 16-Tägigen Solotrip nach Senegal und gebe
          generelle Tipps und meine Reiseroute, aber keine konkreten
          Reiseempfehlungen. Lass dich von diesem Bericht inspirieren und gucke,
          wo die Reise hingeht ;) Der Trip ist vom 15. Okt. 2021. Es war der
          erste Monat, nachdem wieder Touristen ins Land gelassen worden sind
          (Corona). Deshalb können sich meine Reiseerlebnisse etwas von deinen
          unterscheiden.
        </p>
      </header>

      <SenegalRoute />

      {/* Artikel-Inhalt */}
      <article className="container-style">
        {/* Abschnitt 1 */}
        <section id="dakar" className="senegal-box">
          <h2>Die Hauptstadt Dakar</h2>
          <p>
            So wie ich, wirst du höchstwahrscheinlich in Dakar starten. Vom
            Flughafen ist es ein bisschen Pain in the Ass zur Stadt zu kommen
            (wenn man nicht bereit ist 50€ für ein Taxi zu zahlen).
          </p>
          <p>
            Aber es gibt Collectivos (Sammeltaxen), die dich relativ günstig in
            die Stadt bringen. Die Hauptstadt sieht noch relativ
            &quot;europäisch&quot; aus, aber das ändert sich schnell, sobald du
            dich außerhalb der Stadt begibst.
          </p>
          <p>
            Ich hatte eine Unterkunft direkt am Wasser, etwas außerhalb des
            Zentrums. In der Stadt bekommst du recht günstig eine SIM-Karte mit
            Internet. Zur Fortbewegung in der Stadt kannst du Taxen nehmen.
            Einfach ein bisschen verhandeln vorher, bis dich der Preis
            zufriedenstellt.
          </p>

          <ImageGallery
            images={[
              {
                src: "/senegal/start/verkehr.jpg",
                alt: "Straße auf einer Nahegelegenen Stadt",
              },
              {
                src: "/senegal/start/dakar1.jpg",
                alt: "Der Blick von meiner Unterkunft",
              },
              { src: "/senegal/start/dakar2.jpg", alt: "Straßen in Dakar" },
            ]}
          />
        </section>

        {/* Abschnitt 2 */}
        <section id="insel">
          <h2>Isla de Gore</h2>
          <p>
            Wenn man sich schon in Dakar aufhält, ist der Besuch der ehemaligen
            Sklaveninsel ein absoluter Muss. Man erreicht die Insel recht
            einfach vom Hafen aus.
          </p>
          <p>
            Wenn ihr etwas mehr über die Geschichte der Insel erfahren wollt,
            holt euch einen Reiseführer, den man vor Ort easy finden kann.
            Verhandelt den Preis <strong>vorher</strong> und lasst euch nicht
            abzocken.
          </p>
          <p>
            Mich hat ein Reiseführer begleitet, der mir anschließend 50$
            abknöpfen wollte, die nicht abgemacht waren. Nachdem ich ihm 15$
            getippt habe (er hat schon ganz gut erzählt), habe ich ihn nicht
            wieder gesehen.
          </p>

          <ImageGallery
            images={[
              {
                src: "/senegal/start/insel1.jpg",
                alt: "Die Insel der Sklaven",
              },
              {
                src: "/senegal/start/insel2.jpg",
                alt: "Historische Gebäude auf der Insel",
              },
              {
                src: "/senegal/start/insel3.jpg",
                alt: "Hier wurden Sklaven auf engstem Raum zusammengepfercht",
              },
              {
                src: "/senegal/start/insel4.jpg",
                alt: "Die Insel wird auch von einigen Einheimischen bewohnt",
              },
            ]}
          />
        </section>

        {/* Abschnitt 3 */}
        <section id="mbour" className="senegal-box">
          <h2>Nächster Stopp M&apos;bour</h2>
          <p>
            Puh, die Trips zwischen den Städten waren immer ein Erlebnis und
            ohne Sprachkenntnisse auch nicht immer einfach.
          </p>
          <p>
            Gott sei Dank hatte ich eine SIM-Karte mit Internet und konnte einen
            Übersetzer nutzen, der mir so halbwegs weitergeholfen hat. (Aktuell
            würde ich ChatGPT als Übersetzer nutzen.)
          </p>
          <p>
            Meist gibt es zwischen den Städten Sammeltaxen, die dich für wenig
            Geld mitnehmen, aber erst losfahren, wenn sie voll sind.
          </p>
          <p>
            In M&apos;bour habe ich mir für 2 Tage einen Scooter gemietet und
            habe die Umgebung erkundet. Unterwegs habe ich einen Einheimischen
            mit Motorrad kennengelernt, der mir den Fischereihafen gezeigt hat.
          </p>
          <br />
          <p>
            Hier gibts ne Fun-Story zu erzählen: pünktlich zum Anbruch der
            Dunkelheit, hat mein Scooter plötzlich den Geist aufgegeben. Und
            meine Begleitung hat einen völlig Fremdem, vorbeifahrenden
            Motorradfahrer rangewunken. Er hat dann mitten auf der Straße eine
            Stunde meinen kompletten Scotter zerlegt, mit kaum Werkzeug, und
            nach der Ursache gesucht, während ich blöd daneben stand. Es hat
            sich rausgestellt, dass der Vergaser verdreckt war, er hat es, ich
            wiederhole (nur mit nem Schraubenzieher und mit dem Mund) den
            dreckigen Vergaser gereinigt. Danach lief der Scooter wieder. Ich
            habe mich mit 10 Euro bedankt. Aber es ist krass, das ein völlig
            Fremder sich eine ganze Stunde mit deinem Scooter beschäftigt. Ich
            habe mir zwischendurch gedacht, wenn er kein Bock mehr hat und
            weiterfährt, hätte ich den Scooter nicht mal mehr wieder
            zusammengebaut bekommen.
          </p>

          <ImageGallery
            images={[
              {
                src: "/senegal/start/fischerei1.jpg",
                alt: "Hier herrschte ein reges Treiben",
              },
              {
                src: "/senegal/start/fischerei2.jpg",
                alt: "Der Geruch war auch dementsprechend",
              },
              {
                src: "/senegal/start/fischerei3.jpg",
                alt: "Aber dennoch ein sehr interessanter Einblick in deren Leben",
              },
              {
                src: "/senegal/start/reparatur1.jpg",
                alt: "Während er da gewerkelt hat, stand ich nervös herum und habe mich nur getraut diese 2 Fotos zu machen.",
              },
              {
                src: "/senegal/start/reparatur2.jpg",
                alt: "Da, der Vergaser (glaube ich)",
              },
            ]}
          />
        </section>

        {/* Abschnitt 4 */}
        <section id="saloum">
          <h2 className="text-2xl font-semibold mb-4">Die Weiterfahrt</h2>

          <div>
            <p>
              Von M&apos;bour aus bin ich weiter ins Saloum-Delta gefahren. Der
              Typ, den ich kennengelernt habe, hat mich netterweise 2 Stunden
              bis zum Flussbeginn gefahren.
            </p>
            <p>
              Ich habe mich mit einem Mittagessen bedankt. (Fun Story: Ich hab
              vergessen, Bargeld abzuheben, was mir natürlich erst aufgefallen
              ist, als wir am Fluss angekommen sind. Und der nächste ATM war 1
              Stunde entfertnt. Genau in der Richtung aus der wir gerade
              gekommen sind.) Also sind wir noch eine Stunde zum nächsten
              Bankautomaten zurückgefahren. Da es langsam dunkel wurde, habe ich
              mir vor Ort eine Unterkunft genommen und bin dann am nächsten Tag
              wieder irgendwie zur Anlegestelle Zurückgekommen.
            </p>
          </div>
          <ImageGallery
            images={[
              {
                src: "/senegal/start/motorrad.jpg",
                alt: "Mit dem Gerät sind wir los",
              },
              {
                src: "/senegal/start/trip.jpg",
                alt: "Helm gab es nur für den Fahrer",
              },
              {
                src: "/senegal/start/straße.jpg",
                alt: "Oft sahen die Straßen so aus",
              },
              {
                src: "/senegal/sine-saloum/kaffeestand.jpg",
                alt: "Solche Kaffeestände gibt es an jeder Ecke, wo man sich sehr sehr günstig n kleinen Espresso kaufen konnte",
              },
              {
                src: "/senegal/sine-saloum/einkaufsladen.jpg",
                alt: "So sieht ein Typischer Kiosk aus, wo man so allerlei kaufen kann. Sie sind recht gut verbreitet in Senegal",
              },
            ]}
          />
        </section>

        {/* Abschnitt 5 */}
        <section id="gambia" className="senegal-box">
          <h2 className="text-2xl font-semibold mb-4">Das Saloum Delta</h2>

          <div>
            <p>
              Das Saloum-Delta ist ein Naturschutzgebiet und ein
              UNESCO-Weltkulturerbe. Das war mein absoluter Lieblingsorte in
              Senegal.
            </p>
            <p>
              Ich war war in dem Örtchen Mar Lodj, in dieser Unterkunft. (Boa,
              seitdem hat sich der Preis aber deutlich erhöht, wenn ich mir die
              Preise mal so angucke.. ich habe nie mehr als 20-25€ pro Nacht
              bezahlt.) Die Unterkünfte sind hier eher einfach gehalten, aber
              das ist ja auch das, was es aus macht. Was mich an der Insel
              begeistert hat, ist, dass die Menschen hier noch sehr einfach
              Leben und die Natur noch sehr ursprünglich ist und es auf der
              Insel keine Autos gibt, sondern Pferde- und Eseltaxen rumfahren.
              Zudem stehen Kirchen und Moscheen diret beieinander und die
              Menschen leben friedlich miteinander. Hier habe ich insgesamt 3
              Tage verbracht. Ich habe eine Bootstour durch das Delta gemacht,
              bin durch die Insel gewandert und habe mir unterschiedliche Dörfer
              angeguckt. Alles in allem, ein wirklich sehr ruhiger und
              idyllischer Ort.
            </p>
          </div>
          <ImageGallery
            images={[
              {
                src: "/senegal/sine-saloum/kinder.jpg",
                alt: "Mein Lieblingsfoto. Es gibt super viele Kinder auf der Insel",
              },
              {
                src: "/senegal/sine-saloum/taxiBoot.jpg",
                alt: "So bewegt man sich zwischen den Inseln",
              },
              {
                src: "/senegal/sine-saloum/booking.jpg",
                alt: "Die Unterkunft",
              },
              {
                src: "/senegal/sine-saloum/eseltaxi.jpg",
                alt: "Auf der Insel gab es keine Autos. Nur Pferde und Eseltaxen",
              },

              {
                src: "/senegal/sine-saloum/sinesaloum1.jpg",
                alt: "Zu der Jahreszeit war es sehr grün in Senegal",
              },
              {
                src: "/senegal/sine-saloum/sunset.jpg",
                alt: "Es gab wunderschöne Sunsets zu beobachten",
              },
              {
                src: "/senegal/sine-saloum/reggaebar.jpg",
                alt: "Auf Mar Lodj gab es eine Reggae Bar, wo sich alle getroffen haben",
              },
            ]}
          />
        </section>

        {/* Abschnitt 6 */}
        <section id="gambia">
          <h2 className="text-2xl font-semibold mb-4">
            Die Einreise nach Gambia
          </h2>
          <div>
            <p>
              Von Mar Lodj aus bin ich mit unterschiedlichen Sammeltaxen weiter
              nach Gambia gefahren. Die Einreise war relativ einfach, aber die
              Reise an sich war schon hart anstrengend. Zum einen wegen der
              Sprachbariere, zum anderen, weil man bei 30 Grad, Schulter an
              Schulter, den Schlaglöchern mit der größe eines Smarts,
              ausweichend, in einem Sammeltaxi ausm 18 Jahrhundert sitzt
              (zumindest vom Zustand des Wagens),und das alles natürlich ohne
              Klima (logisch). Der Collectivo hat mich an der Greze rausgelassen
              und ist dann zurück gefahren. Nach der Immigration stehen da dann
              schon die nächsten Sammeltaxen, die dich weiter nach Gambia
              bringen. Aber nicht bis nach Banjul, sondern bis zur Fähre. Nach
              der Fähre sollte man sich ein Taxi suche, welches dich dann in die
              Hauptstadt bringt.)
              <br />
              Lustige Geschichte: kaum bist du über die grenze, sprechen alle
              auf einmal Englisch. Und das Sammeltaxi von der Grenze bis in die
              nächste Stadt hat 50 Dalasi gekostet. Aufgrund des Dialekts, habe
              ich 50 Dollar(s) verstanden, und war schon ganz enttäuscht, dass
              man an der Grenze so abgezogen wird. Aber egal wen ich gefragt
              habe, alle haben bestätigt, dass es 50 &quot;Dollars&quot; sind.
              Zum Glück habe ich dann irgendwann gecheckt, dass es 50 Dalasi
              sind, was umgerechnet aktuell nicht mal 70 Cent sind. Der
              Taxifahrer hat sich sehr gefreut, als ich ihm 100 Dalasi gegeben
              habe und hat mir erklärt wo es zur Fähre geht, wo man Tickets
              kauft und hat mir ein Taxi organisiert, (noch vor der Fähre)
              welches mich dann in die Hauptstadt gebracht hat.
            </p>
          </div>
          <ImageGallery
            images={[
              {
                src: "/senegal/sine-saloum/taxi.jpg",
                alt: "Schulter an Schulter bei 30 Grad.",
              },
              {
                src: "/senegal/sine-saloum/taxi2.jpg",
                alt: "Die Fortbewegung war immer recht anstrengend",
              },
              {
                src: "/senegal/gambia/fähre_g.jpg",
                alt: "Mit dieser Fähre überquert man den Fluss. Blick aus dem Taxi",
              },
              { src: "/senegal/gambia/landschaft_g.jpg", alt: "Unterwegs" },
            ]}
          />
        </section>

        {/* Abschnitt 7 */}
        <section id="banjul" className="senegal-box">
          <h2 className="text-2xl font-semibold mb-4">Banjul</h2>
          <div>
            <p>
              Banjul ist die Hauptstadt von Gambia. Ich habe mich hier 3 Tage
              aufgehalten. Hier gibt es nicht viel zu berichten, außer, dass 3
              Tage natürlich viel zu wenig sind. Ich hatte ein Hotel direkt am
              Strand. Das war ganz angenehm. Einziges Manko, die Leitung hatte
              zu wenig Druck, sodass nicht wirklich Wasser aus der Dusche kam.
              Ich habe mich dann einfach im Badezimmer eingeseift und bin dann
              ins Meer gewatschelt, mich abzuspülen. Ich habe mir einen Scooter
              gemietet und die Stadt und Umgebung erkundet.
              <br />
              Außerdem habe ich eine einheimische kennengelernt und sie hat mir
              die Stadt gezeigt und auch ihr zu Hause, wie ihre Familie lebt.
              Das war wirklich sehr interressant und hat mir einen kleinen
              Einblick in das Leben in Gambia gegeben. Das Essen in Gambia ist
              etwas günstiger als in Senegal. Obwohl es noch so viel mehr zu
              sehen gab (nicht nur die Hauptstadt), musste ich leider weiter
              reisen, da ich nur 16 Tage Zeit hatte.
            </p>
          </div>
          <ImageGallery
            images={[
              { src: "/senegal/gambia/fischerei_g.jpg", alt: "Fischerboote" },
              { src: "/senegal/gambia/strand2_g.jpg", alt: "Schöne Strände" },
              {
                src: "/senegal/gambia/strand1_g.jpg",
                alt: "Kilometerlange Strände laden zum spazieren gehen ein",
              },
            ]}
          />
        </section>

        {/* Abschnitt 8 */}
        <section id="bordercrossing">
          <h2 className="text-2xl font-semibold mb-4">Bordercrossing Gambia</h2>
          <div>
            <p>
              Von Banjul gab es ein Sammeltaxi nach Kartong. Dort gibt es einen
              super kleinen Grenzübergang, den du mit dem Boot erreichst. Keine
              sorge, es ist wirklich ein sehr kleines Flüsschen. Nicht vergessen
              seine Stempel seine Stempel zu holen. Das konnte man alles
              problemlos vor Ort. Nach dem Grenzübertritt stand da schon ein
              Sammeltaxi und viele Motorräder. Ich habe mich für das Motorrad
              entschieden, da ich nicht warten wollte, bis das Taxi voll ist.
              <br />
              Die Fahrt hat ca. 40 Minuten gedauert und ging viel durch den
              Djungel, mit riesen großen alten Bäumen. Ich weiß ehrlich gesagt
              nicht mehr, wo ich rausgelassen worden bin. Aber von dort habe ich
              mich in ein Sammeltaxi gesetzt, welches mich bis Zigunchor
              gebracht hat. Von dort bin ich mit einem anderen Collectivo zu
              meinem letzten Stoppp gefahren- Cap Skirring.
            </p>
          </div>
          <ImageGallery
            images={[
              {
                src: "/senegal/gambia/ziegen_g.jpg",
                alt: "In der Hauptstadt liefen einfach Ziegen über die Straßen",
              },
              {
                src: "/senegal/gambia/tuktuk.jpg",
                alt: " Auch hier gibts Tuktuks",
              },
              {
                src: "/senegal/gambia/essen_g.jpg",
                alt: "Einheimisches Essen hat schon für ein paar Cent bekommen",
              },
              {
                src: "/senegal/gambia/border.jpg",
                alt: "So sieht es an der Grenze aus. Sie wurde kaum genutzt",
              },
              {
                src: "/senegal/gambia/bordercrossing_boot.jpg",
                alt: " Man muss dieses kleine Flüsschen überqueren, um wieder nach Senegal zu kommen",
              },
              {
                src: "/senegal/gambia/bordercrossing_motorrad.jpg",
                alt: " Von der Grenze ging es dann ca 40 min durch schöne Natur, zur nächstgrößten Stadt mit Busanbindung",
              },
            ]}
          />
        </section>

        {/* Abschnitt 9 */}
        <section id="cap-skirring" className="senegal-box">
          <h2 className="text-2xl font-semibold mb-4">Cap Skirring</h2>
          <div>
            <p>
              In Cap Skirring habe ich mich einfach von der ganzen Reise erholt.
              Ich habe vor Ort einige Einheimische kennengelernt und mit ihnen
              die Zeit verbracht. Die ganze Zeit sich mit Händen und Füßen, war
              schon dezent anstrengend. Wer französisch spricht, macht sich das
              ganze deutlich einfacher. Es ist ein schönes kleines Örtchen mit
              wunderschönen Stränden. Hier habe ich meine restliche zeit
              verbracht, bis es wieder zurück ging. Auch hier habe ich mir ein
              Raptor Quad gemietet, statt 50$ auf 25 runtergehandelt, das war
              schon gut günstig. Leider war der Reifen so abgenutzt, dass es ein
              richtiger Rennslick war. Bevor ich den Quad abgegeben habe, musse
              ich ihm am Straßenrand flicken lassen (es waren ca 5
              unterschiedliche Löcher drin). Shops zum Reifenflicken gibts in
              Senegal an jeder Ecke. Das Loch wird vergrößert und dann wird ein
              Stück Schlauch reingesteckt. Voila, schon kann man weitere KM
              schrubben.
              <br />
              Auch hier habe ich ein paar Einheimische getroffen. Ein Musiker
              hat mich zu sich nach Hause eingeladen haben. Sein ganzes Haus war
              nur eine 4x4 m große Wellblechhütte. Außer einem Bett und ein paar
              Instrumenten war da kein Platz für was anderes. Er hatte nicht mal
              fließendes Wasser. Aber er war sooo glücklich, dass ich mich
              gefragt habe, wie man glücklicher sein kann als ich, und das
              obwohl ICH im Urlaub bin.
              <br />
              Letztendlich bin ich von dort aus zurück nach Dakar geflogen und
              dann zurück nach Deutschland. Als ich zum Flughafen gelaufen bin,
              haben ein paar Feuerwehrmänner angehalte und mich in ihrem Pickup
              n kleines Stück mitgenommen. Der Flughafen ist sehr klein und
              übersichtlich. Mit einer alten Propellermaschine ging es dann
              zurück. In Dakar hatte ich einen vollen Tag Zeit, den ich am Retba
              See (Lac Rose) vernrachte. Angeblich ist der See rosa, davon hab
              ich vom Ufer aber nicht so viel gesehen. Die Natur drum herum war
              aber schön.
              <br />
              So, das wars meinerseits. Ich hoffe euch hat der Bericht gefallen,
              lasst gerne ein paar Kommentare da, ich würde mich freuen. Ciao
              Kakao und bis zum nächsten Mal.
            </p>
          </div>
          <ImageGallery
            images={[
              {
                src: "/senegal/cap-skirring/beach_c.jpg",
                alt: "Bilder von Dakar",
              },
              {
                src: "/senegal/cap-skirring/cap_skirring2.jpg",
                alt: "Wellhütten direkt neben einem riesen Termitenhügel",
              },
              {
                src: "/senegal/cap-skirring/fischereihütten_c.jpg",
                alt: "Fischereihütten",
              },
              {
                src: "/senegal/cap-skirring/geier_c.jpg",
                alt: "Es gab viele Geier am Strand",
              },
              {
                src: "/senegal/cap-skirring/landschaft_c.jpg",
                alt: "So sahen oft die Straßen aus",
              },
              {
                src: "/senegal/cap-skirring/landschaft2_c.jpg",
                alt: "Wellhütten direkt neben einem riesen Termitenhügel",
              },
              {
                src: "/senegal/cap-skirring/fufana.jpg",
                alt: "Fufana mir die Gegend und seine Unterkunft gezeigt",
              },
              {
                src: "/senegal/cap-skirring/feuerwehr.jpg",
                alt: "Die Feuerwehrleute haben mich ein kurzes Stück mitgenommen",
              },
              {
                src: "/senegal/cap-skirring/flugzeug.jpg",
                alt: "Mit dem Propellerflugzeug ging es zurück nach Dakar",
              },
            ]}
          />
        </section>
      </article>

      <Comments pageId="senegal" />

      {/* Footer-Bereich */}
      <footer className="text-center mt-12">
        <p className="text-gray-500">
          Dieser Reisebericht basiert auf meinen persönlichen Erfahrungen. Ich
          hoffe, er inspiriert dich dazu, den Senegal selbst zu entdecken!
        </p>
      </footer>
    </div>
  );
}
