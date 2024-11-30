"use client";

import ImageGallery from "@/app/components/ImageGallery";

export default function Senegal() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8" style={{ paddingTop: "var(--header-height)" }}>
      {/* Header-Bereich */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Entdecke den Senegal</h1>
        <p className="text-gray-600">
          Ich berichte von meinem 16-Tägigen Solotrip nach Senegal und gebe generelle Tipps und meine Reiseroute, aber keine konkreten Reiseempfehlungen. Lass dich von diesem Bericht inspirieren und gucke, wo die Reise hingeht ;)
          Der Trip ist vom 15. Okt. 2021. Es war der erste Monat, nachdem wieder Touristen ins Land gelassen worden sind (Corona). Deshalb können sich meine Reiseerlebnisse etwas von deinen unterscheiden.
        </p>
      </header>

      {/* Artikel-Inhalt */}
      <article className="space-y-8">
        {/* Abschnitt 1 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Die Hauptstadt Dakar</h2>
          <div>
          <p>
            So wie ich, wirst du höchstwahrscheinlich in Dakar starten. Vom Flughafen ist es ein bisschen Pain in the Ass zur Stadt zu kommen (wenn man nicht bereit ist 50€ für ein Taxi zu zahlen).
          </p>
          <p>
            Aber es gibt Collectivos (Sammeltaxen), die dich relativ günstig in die Stadt bringen.
            Die Hauptstadt sieht noch relativ &quot;europäisch&quot; aus, aber das ändert sich schnell, sobald du dich außerhalb der Stadt begibst.
          </p>
          <p>
            Ich hatte eine Unterkunft direkt am Wasser, etwas außerhalb des Zentrums. In der Stadt bekommst du recht günstig eine SIM-Karte mit Internet.
            Zur Fortbewegung in der Stadt kannst du Taxen nehmen. Einfach ein bisschen verhandeln vorher, bis dich der Preis zufriedenstellt.
          </p>
          </div>
          <ImageGallery
            images={[
              { src: "/senegal/dakar1.jpg", alt: "Der Blick von meiner Unterkunft" },
              { src: "/senegal/dakar2.jpg", alt: "Straßen in Dakar" },
            ]}
          />
        </section>

        {/* Abschnitt 2 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Insel der Sklaven</h2>
        <div>
            <p>
            Wenn man sich schon in Dakar aufhält, ist der Besuch der Insel ein absoluter Muss. Man erreicht die Insel recht einfach vom Hafen aus.
          </p>
          <p>
            Wenn ihr etwas mehr über die Geschichte der Insel erfahren wollt, holt euch einen Reiseführer, den man vor Ort easy finden kann. Verhandelt den Preis <strong>vorher</strong> und lasst euch nicht abzocken.
          </p>
          <p>
            Mich hat ein Reiseführer begleitet, der mir anschließend 50$ abknöpfen wollte, die nicht abgemacht waren. Nachdem ich ihm 15$ getippt habe (er hat schon ganz gut erzählt), habe ich ihn nicht wieder gesehen.
          </p>
          </div>
          <ImageGallery
            images={[
              { src: "/senegal/insel1.jpg", alt: "Die Insel der Sklaven" },
              { src: "/senegal/insel2.jpg", alt: "Historische Gebäude auf der Insel" },
              { src: "/senegal/insel3.jpg", alt: "Eine Sklavenzelle" },
              { src: "/senegal/insel4.jpg", alt: "Die Insel wird auch von einigen Einheimischen bewohnt" },
              { src: "/senegal/insel5.jpg", alt: "Viele Gebäude hatten die Form eines Rumpfes, um die Sklaven schon vorzubereiten.." },
              { src: "/senegal/insel6.jpg", alt: "Der Geschichte hat ordentlich auf mein Gemüt geschlagen" },
            ]}
          />
          <p>Ein traumhaft schöner Ort mit einer sehr traurigen Vergangenheit.</p>
        </section>

        {/* Abschnitt 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Nächster Stopp M&apos;bour</h2>
         <div>
          <p>
            Puh, die Trips zwischen den Städten waren immer ein Erlebnis und ohne Sprachkenntnisse auch nicht immer einfach.
          </p>
          <p>
            Gott sei Dank hatte ich eine SIM-Karte mit Internet und konnte einen Übersetzer nutzen, der mir so halbwegs weitergeholfen hat. (Aktuell würde ich ChatGPT als Übersetzer nutzen.)
          </p>
          <p>
            Meist gibt es zwischen den Städten Sammeltaxen, die dich für wenig Geld mitnehmen, aber erst losfahren, wenn sie voll sind.            
          </p>
          <p>
          In M&apos;bour habe ich mir für 2 Tage einen Scooter gemietet und habe die Umgebung erkundet.
            Unterwegs habe ich einen Einheimischen mit Motorrad kennengelernt, der mir den Fischereihafen gezeigt hat. Das war das erste Highlight, welches mir vor Augen geführt hat, dass ich verdammt noch mal <strong>in Afrika</strong> bin.
          </p>
          <p>
            Während er mir die Gegend gezeigt hat, hat mein Scooter den Geist aufgegeben, natürlich pünktlich zur Dunkelheit. Lange Rede, kurzer Sinn: Er hat einen random Scooterfahrer angehalten, der dann mitten auf der Straße und im Dunkeln, damit eine Stunde beschäftigt war, meinen Scooter zu reparieren.
          </p>
          <p>
            Während ich da dämlich rumstand, hat er meinen ganzen Scooter zerlegt, den Vergaser gereinigt und wieder zusammengebaut. Danach fuhr der Scooter wieder. Ich habe mich mit 10€ bedankt. Hätte er auf einmal keine Lust mehr gehabt, würde ich da stehen, im Dunkeln, mit einem zerlegten Scooter.
          </p>
          </div>
          <ImageGallery
            images={[
              { src: "/senegal/fischerei1.jpg", alt: "Hier herrschte ein reges Treiben" },
              { src: "/senegal/fischerei2.jpg", alt: "Der Geruch war auch dementsprechend" },
              { src: "/senegal/fischerei3.jpg", alt: "Aber dennoch ein sehr interessanter Einblick in deren Leben" },
              { src: "/senegal/reparatur1.jpg", alt: "Da standen wir.. einer repariert, der andere leuchtet und der Dritte läuft nervös auf und ab" },
              { src: "/senegal/reparatur2.jpg", alt: "Da issa - der Vergaser. Hab mich leider nicht getraut, während der Reparatur mehr Fotos zu machen." },
            ]}
          />
        </section>

        {/* Abschnitt 4 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Die Weiterfahrt</h2>
         
         <div>
           <p>
            Von M&apos;bour aus bin ich weiter ins Saloum-Delta gefahren. Der Typ, den ich kennengelernt habe, hat mich netterweise 2 Stunden bis zum Flussbeginn gefahren.
          </p>
          <p>
            Ich habe mich mit einem Mittagessen bedankt. (Fun Story: Ich hab vergessen, Bargeld abzuheben, was mir natürlich erst aufgefallen ist, als wir am Fluss angekommen sind.
            Und der nächste ATM war 1 Stunde entfertnt. Genau in der Richtung aus der wir gerade gekommen sind.)
            Also sind wir noch eine Stunde zum nächsten Bankautomaten zurückgefahren. Da es langsam dunkel wurde, habe ich mir vor Ort eine Unterkunft genommen
            und bin dann am nächsten Tag wieder irgendwie zur Anlegestelle Zurückgekommen.
          </p>
          </div>
          <ImageGallery
            images={[
              { src: "/senegal/motorrad.jpg", alt: "Mit dem Gerät sind wir los" },
              { src: "/senegal/trip.jpg", alt: "Helm gab es nur für den Fahrer" },
              { src: "/senegal/straße.jpg", alt: "Oft sahen die Straßen so aus" },
            ]}
          />
        </section>
          
          {/* Abschnitt 5 */}
          <section>
          <h2 className="text-2xl font-semibold mb-4">Das Saloum Delta</h2>
         
         <div>
           <p>
            Das Saloum-Delta ist ein Naturschutzgebiet und ein UNESCO-Weltkulturerbe. Das war mein absoluter Lieblingsorte in Senegal. 
          </p>
          <p>
            Ich war war in dem Örtchen Mar Lodj,
            in dieser Unterkunft.
            (Boa, seitdem hat sich der Preis aber deutlich erhöht, wenn ich mir die Preise mal so angucke.. 
            ich habe nie mehr als 20-25€ pro Nacht bezahlt.)
            Die Unterkünfte sind hier eher einfach gehalten, aber das ist ja auch das, was es aus macht. Was mich an der Insel begeistert 
            hat, ist, dass die Menschen hier noch sehr einfach Leben und die Natur noch sehr ursprünglich ist
            und es auf der Insel keine Autos gibt, sondern Pferde- und Eseltaxen rumfahren. Zudem stehen Kirchen und Moscheen diret beieinander und die Menschen 
            leben friedlich miteinander.
       
              Hier habe ich insgesamt 3 Tage verbracht. Ich habe eine Bootstour durch das Delta gemacht, bin durch die Insel gewandert und habe mir unterschiedliche Dörfer angeguckt.
              Alles in allem, ein wirklich sehr ruhiger und idyllischer Ort.
            </p>
          </div>
          <ImageGallery
            images={[
              { src: "/senegal/sine-saloum/taxiBoot.jpg", alt: "So bewegt man sich zwischen den Inseln" },
              { src: "/senegal/sine-saloum/booking.jpg", alt: "Unterkunft" },
              { src: "/senegal/sine-saloum/eseltaxi.jpg", alt: "Auf der Insel gab es keine Autos. Nur Pferde und Eseltaxen" },
              { src: "/senegal/sine-saloum/kinder.jpg", alt: "Mein Lieblingsfoto. Es gibt super viele Kinder auf der Insel" },
              { src: "/senegal/sine-saloum/kinder.jpg", alt: "Mein Lieblingsfoto. Es gibt super viele Kinder auf der Insel" },
              { src: "/senegal/sine-saloum/sinesaloum4.jpg", alt: "Die Insel war super grün" },
              { src: "/senegal/sine-saloum/sunset.jpg", alt: "Es gab wunderschöne Sunsets zu beobachten" },
              { src: "/senegal/sine-saloum/einkaufsladen.jpg", alt: "So sieht ein Typischer Kiosk aus, wo man so allerlei kaufen kann. Sie sind recht gut verbreitet in Senegal" },
             
            ]}
          />
        </section>

        {/* Abschnitt 6 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Die Einreise nach Gambia</h2>
          <div>
            <p>
           Von Mar Lodj aus bin ich mit unterschiedlichen Sammeltaxen weiter nach Gambia gefahren. 
           Die Einreise war relativ einfach, aber  die Reise an sich war schon hart anstrengend.
           Zum einen wegen der Sprachbariere, zum anderen weil man bei 30 Grad, Schulter an Schulter, den Schlaglöchern mit der größe eines Smarts, 
           ausweichend, mit anderen Leuten in einem Sammeltaxi ausm 18 Jahrhundert sitzt 
            (zumindest vom Zustand des Wagens),und ohne Klimaanlage (logisch).
          Das Sammeltaxi hat mich an der Greze rausgelassen und ist dann zurück gefahren. Nach der Immigration
          stehen da dann schon die nächsten Sammeltaxen, die dich weiter nach Gambia bringen. Aber nicht bis nach Banjul, sondern 
          bis zur Fähre. Nach der Fähre sollte man sich ein Taxi suche, welches dich dann in die Hauptstadt bringt.) 
          Lustige Geschichte: kaum bist du über die grenze, sprechen alle auf einmal Englisch. Und das Sammeltaxi von der Grenze
          bis in die nächste Stadt hat 50 Dalasi gekostet. Aufgrund des Dialekts, habe ich 50 Dollar(s) verstanden, und war schon ganz enttäuscht, dass man an der Grenze so abgezogen wird.
          Aber egal wen ich gefragt habe, alle haben bestätigt, dass es 50 Dollar/Dallas sind. Zum Glück habe ich dann irgendwann gecheckt, dass es 50 Dalasi sind, 
          was umgerechnet aktuell nicht mal 70 Cent sind. Der Taxifahrer hat sich sehr gefreut, als ich ihm 100 Dalasi gegeben habe
          und hat mir erklärt wo es zur Fähre geht, wo man Tickets kauft und hat mir ein Taxi organisiert, (noch vor der Fähre) welches mich dann in die Hauptstadt gebracht hat.
          </p>
          
          </div>
            <ImageGallery
            images={[
              { src: "/senegal/taxi1.jpg", alt: "Vollgestopft bei 30 Grad." },
            ]}
          />
        </section>


        {/* Abschnitt 7 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Banjul</h2>
          <div>
            <p>
            Banjul ist die Hauptstadt von Gambia. Ich habe mich hier 3 Tage aufgehalten.
          </p>
          </div>
            <ImageGallery
            images={[
              { src: "/senegal/taxi1.jpg", alt: "Vollgestopft bei 30 Grad." },
            ]}
          />
        </section>
      </article>

      {/* Footer-Bereich */}
      <footer className="text-center mt-12">
        <p className="text-gray-500">
          Dieser Reisebericht basiert auf meinen persönlichen Erfahrungen. 
          Ich hoffe, er inspiriert dich dazu, den Senegal selbst zu entdecken!
        </p>
      </footer>
    </div>
  );
}