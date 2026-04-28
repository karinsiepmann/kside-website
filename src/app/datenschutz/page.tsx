import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz — [kside]//openlabs",
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <Link href="/" className="text-sm text-green-dark hover:underline mb-8 inline-block">
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-bold mb-4 text-text">Datenschutzerklärung</h1>
        <p className="text-gray-500 text-sm mb-12">Stand: März 2026</p>

        <div className="max-w-2xl space-y-10 text-gray-700">

          <section>
            <h2 className="text-xl font-bold mb-3 text-text">1. Verantwortliche Stelle</h2>
            <p>Verantwortliche Stelle im Sinne der Datenschutzgesetze ist:</p>
            <p className="mt-2">Karin Siepmann Consulting<br />
            Fritz-Reuter-Strasse 1<br />
            65189 Wiesbaden<br />
            E-Mail: <a href="mailto:karin.siepmann@gmail.com" className="text-green-dark hover:underline">info@kside.de</a><br />
            Telefon: +49 (0) 1577 3551 777</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-text">2. Grundsätze der Datenverarbeitung</h2>
            <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO, BDSG) sowie dieser
            Datenschutzerklärung.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-text">3. Datenerfassung auf dieser Website</h2>

            <h3 className="font-semibold mt-4 mb-2">Server-Log-Dateien</h3>
            <p>Der Hosting-Anbieter dieser Website (Hostinger) erhebt und speichert automatisch Informationen in
            sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und
            -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der
            Serveranfrage sowie IP-Adresse.</p>
            <p className="mt-2">Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten
            mit anderen Datenquellen wird nicht vorgenommen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse am sicheren Betrieb der Website).</p>

            <h3 className="font-semibold mt-4 mb-2">Kontaktformular und E-Mail-Kontakt</h3>
            <p>Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben (E-Mail-Adresse, ggf. Name und Nachricht)
            zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
            geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-text">4. Cookies</h2>
            <p>Diese Website verwendet technisch notwendige Cookies, die für den Betrieb der Website erforderlich
            sind. Diese Cookies speichern keine personenbezogenen Daten und werden nach dem Schließen des
            Browsers gelöscht.</p>
            <p className="mt-2">Sofern Sie in die Verwendung optionaler Cookies eingewilligt haben, werden diese auf
            Basis von Art. 6 Abs. 1 lit. a DSGVO verarbeitet. Sie können Ihre Einwilligung jederzeit widerrufen,
            indem Sie die Cookie-Einstellungen über den Link im Footer aufrufen.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-text">5. Externe Dienste und Verlinkungen</h2>

            <h3 className="font-semibold mt-4 mb-2">LinkedIn</h3>
            <p>Diese Website enthält Links zum sozialen Netzwerk LinkedIn (LinkedIn Ireland Unlimited Company,
            Wilton Place, Dublin 2, Irland). Die Datenschutzerklärung von LinkedIn finden Sie unter:
            <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer"
              className="text-green-dark hover:underline ml-1">
              linkedin.com/legal/privacy-policy
            </a></p>
            <p className="mt-2">Beim Klick auf einen LinkedIn-Link verlassen Sie unsere Website. LinkedIn kann dann
            Daten über Ihren Besuch erheben. Wir haben keinen Einfluss auf diese Datenerhebung.</p>

            <h3 className="font-semibold mt-4 mb-2">Google Fonts</h3>
            <p>Diese Website verwendet Schriftarten von Google Fonts (Google LLC, 1600 Amphitheatre Parkway,
            Mountain View, CA 94043, USA). Die Schriftarten werden lokal eingebunden, sodass keine Verbindung
            zu Google-Servern hergestellt wird.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-text">6. Hosting</h2>
            <p>Diese Website wird bei Hostinger (Hostinger International Ltd., 61 Lordou Vironos Street, 6023
            Larnaca, Zypern) gehostet. Details zur Datenverarbeitung durch Hostinger finden Sie unter:
            <a href="https://www.hostinger.de/rechtliches/datenschutzrichtlinie" target="_blank" rel="noopener noreferrer"
              className="text-green-dark hover:underline ml-1">
              hostinger.de/rechtliches/datenschutzrichtlinie
            </a></p>
            <p className="mt-2">Es besteht ein Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-text">7. Ihre Rechte</h2>
            <p>Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
              <li>Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p className="mt-3">Zur Ausübung Ihrer Rechte wenden Sie sich an:
            <a href="mailto:karin.siepmann@gmail.com" className="text-green-dark hover:underline ml-1">info@kside.de</a></p>
            <p className="mt-2">Sie haben außerdem das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren.
            In Hessen ist dies der Hessische Beauftragte für Datenschutz und Informationsfreiheit,
            Postfach 3163, 65021 Wiesbaden.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
