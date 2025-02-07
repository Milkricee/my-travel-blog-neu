export const metadata = {
  title: "Datenschutzerklärung - Dan's Travelblog",
  description:
    "Hier findest du alle Informationen zum Datenschutz auf Dan's Travelblog gemäß DSGVO.",
};

export default function DatenschutzPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold mb-6">Datenschutzerklärung</h2>

      <p className="mb-4">
        Personenbezogene Daten (nachfolgend nur „Daten“ genannt) werden von uns
        nur im Rahmen der Erforderlichkeit sowie zum Zwecke der Bereitstellung
        eines funktionsfähigen und nutzerfreundlichen Internetauftritts,
        inklusive seiner Inhalte und der dort angebotenen Leistungen,
        verarbeitet.
      </p>

      <p className="mb-4">
        Gemäß Art. 4 Ziffer 1 der Verordnung (EU) 2016/679 (DSGVO) gilt als
        „Verarbeitung“ jeder mit oder ohne Hilfe automatisierter Verfahren
        ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit
        personenbezogenen Daten.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        I. Informationen über uns als Verantwortliche
      </h2>
      <p>
        <strong>Verantwortlicher Anbieter:</strong>
        <br />
        DANIEL M. <br />
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        II. Rechte der Nutzer und Betroffenen
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Recht auf Auskunft nach Art. 15 DSGVO</li>
        <li>Recht auf Berichtigung nach Art. 16 DSGVO</li>
        <li>Recht auf Löschung nach Art. 17 DSGVO</li>
        <li>Recht auf Einschränkung der Verarbeitung nach Art. 18 DSGVO</li>
        <li>Recht auf Datenübertragbarkeit nach Art. 20 DSGVO</li>
        <li>Recht auf Widerspruch nach Art. 21 DSGVO</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        III. Informationen zur Datenverarbeitung
      </h2>
      <p className="mb-4">
        Ihre Daten werden gelöscht oder gesperrt, sobald der Zweck der
        Speicherung entfällt und keine gesetzlichen Aufbewahrungspflichten
        bestehen.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Cookie Manager</h3>
      <p className="mb-4">
        Zur Einholung einer Einwilligung zum Einsatz von nicht notwendigen
        Cookies wird ein Cookie-Manager eingesetzt. Dabei wird ein Cookie mit
        den Einstellungen des Nutzers gespeichert, sodass die Einwilligung bei
        einem erneuten Besuch nicht erneut eingeholt werden muss.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Cookies</h3>
      <p className="mb-4">
        Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit zu
        verbessern. Sie können die Speicherung in Ihrem Browser deaktivieren.
      </p>

      <h4 className="text-lg font-semibold mt-4 mb-2">a) Sitzungs-Cookies</h4>
      <p className="mb-4">
        Diese Cookies werden automatisch gelöscht, sobald Sie Ihren Browser
        schließen. Sie speichern lediglich technische Informationen, um die
        Navigation auf der Website zu erleichtern.
      </p>

      <h4 className="text-lg font-semibold mt-4 mb-2">
        b) Drittanbieter-Cookies
      </h4>
      <p className="mb-4">
        Drittanbieter wie Google oder Meta (Facebook & Instagram) setzen unter
        Umständen eigene Cookies, um bestimmte Funktionen oder Analysen
        bereitzustellen. Die genauen Informationen dazu entnehmen Sie den
        Datenschutzrichtlinien der jeweiligen Anbieter.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Facebook & Instagram</h3>
      <p className="mb-2">
        <strong>Facebook:</strong>{" "}
        <a
          href="https://www.facebook.com/policy.php"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://www.facebook.com/policy.php
        </a>
      </p>
      <p className="mb-4">
        <strong>Instagram:</strong>{" "}
        <a
          href="https://help.instagram.com/519522125107875"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://help.instagram.com/519522125107875
        </a>
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Google Maps</h3>
      <p className="mb-4">
        Wir nutzen Google Maps, um unseren Standort anzuzeigen. Durch die
        Nutzung können Daten an Google übertragen werden.
      </p>

      <p className="text-gray-600 text-sm mt-8">
        Letzte Aktualisierung: Februar 2025
      </p>
    </div>
  );
}
