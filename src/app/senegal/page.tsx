"use client";

import Image from "next/image";
import ImageGallery from "@/app/components/ImageGallery";

export default function Senegal() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header-Bereich */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Entdecke den Senegal</h1>
        <p className="text-gray-600">
        Disclaimer: Ich berichte von meinem 16-Tägigen Solotrip nach Senegal und gebe generele Tipps und meine  Reiseroute, aber keine konkreten Reiseempfehlungen. Lass dich von diesem Bericht inspirieren und gucke wo die Reise hingeht ;)
        Der Trip ist vom 15.Okt.2021. Es war der erste Monat, nachdem wieder Touristen ins Land gelassen worden sind.(Corona) Deshalb können sich meine Reiseerlebnisse etwas von deinen unterscheiden.
    
        </p>
      </header>

      {/* Artikel-Inhalt */}
      <article className="space-y-8">
        {/* Abschnitt 1 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Die Hauptstadt Dakar</h2>
          <p>
            So wie ich, wirst du höchstwahrscheinlich in Dakar starten. Vom Flughafen ist es ein bisschen Pain in the Ass zur Stadt zu kommen (wenn man keine 50€ bereit ist für ein Taxi zu zahlen).
            Aber es gibt Collectivos (Sammeltaxen), die dich relativ günstig in die Stadt bringen.
            <br/>
            Die Hauptstadt sieht noch relativ &quot;europäisch&quot; aus, aber das ändert sich schnell, sobald du dich in den außerhalb der Stadt begibst.
            Ich hatte eine Unterkunft direkt am Wasser, etwas außerhalb des Zentrums. In der Stadt bekommst du recht günstig eine Simkarte mit Internet. 
            Zur fortbewegung in der Stadt kannst du Taxen nehmen, einfach bisschen verhandeln vorher, bis dich der Preis zufrieden stellt.
          </p>
          <ImageGallery
            images={[
              { src: "/senegal/dakar1.jpg", alt: "Der Blick von meiner Unterkunft" },
              { src: "/senegal/dakar2.jpg", alt: "Straßen in Dakar" },
            ]}
          />
        </section>

        {/* Abschnitt 2 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Insel der Sklaven</h2>
          <p>
            Wenn man sich schon in Dakar aufhält ist der Besuch der Insel ein absoluter muss. 
            Man erreicht die Insel recht einfach vom Hafen aus. 
            Wenn ihr etwas mehr über die Geschichte der Insel erfahren wollt, holt euch einen Reiseführer den man vor Ort easy finden kann.
            Verhandelt den Preis <strong>vorher</strong> und lasst euch nicht abzocken. 
            Mich hat ein Reiseführer begleitet, der mir anschließen 50$ abknöpfen wollte, die nicht abgemacht waren. Nachdem ich ihm 15$ getippt habe (er hat schon ganz gut erzählt), habe ich ihn nicht wieder gesehen.
            <br/>
            Die Insel war ein Ort, an dem Sklaven gehalten wurden, bevor sie nach Amerika verschifft wurden.
           
          </p>
          <br/>
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

          <p>
            <br/>
          Ein traumhaft schöner Ort, mit einer sehr traurigen Vergangenheit.
          </p>
        </section>

        {/* Abschnitt 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Nächster Stopp M&apos;bour</h2>
          <p>
            Puh, die Trips zwischen den Städten waren immer ein Erlebnis und ohne Sprachkenntnisse auch nicht immer einfach.
             Gott sei Dank hatte ich ne Simkarte mit Internet und konnte nen Übersetzer nutzen, 
             der mir so halbwegs weitergeholfen hat. 
             (Aktuell würde ich ChatGPT als übersetzer nutzen)
            <br/> Meist gibt es zwischen den Städten Sammeltaxen, die dich für wenig Geld mitnehmen, aber erst losfahren, 
             wenn sie voll sind.
             In M&apos;bour habe ich mir für 2 Tage ein Scooter gemietet und habe die Umgebung erkundet.
             Unterwegs habe ich einen Einheimischen mit Motorrad kennengelernt, der mir den Fischereihafen gezeigt hat.
            Das war das erste Highlight, welches mir vor Augen geführt hat, dass ich verdammt noch mal <strong>in Afrika</strong>  bin.
            <br/>
            Während er mir die Gegend gezeigt hat, hat mein Scooter den Geist aufgegeben, natürlich pünktlich zur Dunkelheit.
            Lange Rede- kurzer Sinn, er hat einen random Scooterfahrer angehalten, der dann
            mitten auf der Straße und im dunkeln, damit eine Stunde beschäftigt war meinen Scooter zu reparieren.
            Während ich da dämlich rumstand, hat er meinen ganzen Scooter zerlegt, den Vergaser gereinigt und wieder zusammengebaut.
            Danach führ der Scooter wieder. Ich habe mich mit 10€ bedankt. Hätte er auf einmal keine Lust mehr gehabt, würde ich da stehen, im dunkeln,
            mit nem zerlegten Scooter.
          </p>
          <br/>
          <ImageGallery
            images={[
              { src: "/senegal/fischerei1.jpg", alt: "Hier herschte ein reges Treiben" },
              { src: "/senegal/fischerei2.jpg", alt: "Der Geruch war auch demensprechend" },
              { src: "/senegal/fischerei3.jpg", alt: "Aber dennoch ein sehr interessanter Einblick in deren Leben" },
              { src: "/senegal/reparatur1.jpg", alt: "Da standen wir.. einer repariert, der andere leuchtet und der Dritte läuft nervös auf und ab" },
              { src: "/senegal/reparatur2.jpg", alt: "Da issa - der Vergaser. Hab mich leider nicht getraut während der Reparatur mehr Fotos zu machen." },

            ]}
          />
        </section>

        {/* Abschnitt 4 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Kulinarische Highlights</h2>
          <p>
            Die senegalesische Küche ist ein wahres Fest für die Sinne. Das Nationalgericht Thieboudienne, ein gewürzter Fisch 
            mit Reis und Gemüse, ist ein Muss. Probier auch Yassa, ein zitronen- und zwiebelbasiertes Gericht, das mit Hühnchen 
            oder Fisch serviert wird.
          </p>
          <div className="my-6">
            <Image
              src="/senegal/thieboudienne.jpg"
              alt="Thieboudienne, das Nationalgericht Senegals"
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">
              Thieboudienne, das Nationalgericht Senegals.
            </p>
          </div>
        </section>
      </article>

      {/* Footer-Bereich */}
      <footer className="text-center mt-12">
        <p className="text-gray-500">
          Dieser Reisebericht basiert auf meinen persönlichen Erfahrungen und Recherchen. Ich hoffe, er inspiriert dich dazu, 
          den Senegal selbst zu entdecken!
        </p>
      </footer>
    </div>
  );
}
