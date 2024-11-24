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
          <ImageGallery
            images={[
              { src: "/senegal/insel1.jpg", alt: "Die Insel der Sklaven" },
              { src: "/senegal/insel2.jpg", alt: "Historische Gebäude auf der Insel" },
              { src: "/senegal/insel3.jpg", alt: "Eine Sklavenzelle" },
              { src: "/senegal/insel4.jpg", alt: "Die Insel wird auch von einigen Einheimischen bewohnt" },
              { src: "/senegal/insel5.jpg", alt: "Viele Gebäude hatten die Form eines Rumpfes, um die Sklaven schon vorzubereiten.." },
            
            ]}
          />
          
          <p>
            <br/>
          Ein traumhaft schöner Ort, mit einer sehr traurigen Vergangenheit.
          </p>
        </section>

        {/* Abschnitt 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Die Reise entlang der Küste</h2>
          <p>
            Die Küste Senegals ist geprägt von charmanten Fischerdörfern, luxuriösen Strandresorts und unberührten Naturlandschaften. 
            Auf dem Weg von Dakar nach Cap Skirring solltest du unbedingt in M’bour und Saint-Louis stoppen. Beide Orte bieten 
            faszinierende Einblicke in die Geschichte und Kultur des Landes.
          </p>
          <div className="my-6">
            <Image
              src="/senegal/cap-skirring.jpg"
              alt="Die Strände von Cap Skirring"
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">
              Die paradiesischen Strände von Cap Skirring.
            </p>
          </div>
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
