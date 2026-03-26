import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — [kside]//openlabs",
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <Link href="/" className="text-sm text-green-dark hover:underline mb-8 inline-block">
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-bold mb-12 text-text">Impressum</h1>

        <div className="prose max-w-2xl space-y-8 text-gray-700">

          <section>
            <h2 className="text-xl font-bold mb-3 text-text">Angaben gemäß § 5 TMG</h2>
            <p>Karin Siepmann Consulting<br />
            Fritz-Reuter-Strasse 1<br />
            65189 Wiesbaden</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-text">Kontakt</h2>
            <p>Telefon: +49 (0) 1577 3551 777<br />
            E-Mail: <a href="mailto:info@kside.de" className="text-green-dark hover:underline">info@kside.de</a></p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-text">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
            DE 70 384 191 565</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-text">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>Karin Siepmann<br />
            Karin Siepmann Consulting<br />
            Fritz-Reuter-Strasse 1<br />
            65189 Wiesbaden</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-text">Streitschlichtung</h2>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-green-dark hover:underline ml-1">
              https://ec.europa.eu/consumers/odr/
            </a></p>
            <p className="mt-2">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-text">Haftung für Inhalte</h2>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
            <p className="mt-2">Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-text">Haftung für Links</h2>
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 text-text">Urheberrecht</h2>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
          </section>

        </div>
      </div>
    </div>
  );
}
