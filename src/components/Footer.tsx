import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-8">

        {/* Zeile 1: 3 symmetrische Spalten */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <Image src="/logo-kside.png" alt="[kside]//openlabs" width={160} height={53} className="h-12 w-auto mb-4" />
            <p className="text-sm text-gray-500 leading-relaxed">
              KI-Wissen für alle — praxisnah, gemeinschaftlich, offen.
            </p>
          </div>
          <div>
            <p className="font-semibold text-sm mb-3 text-gray-700">Kontakt</p>
            <p className="text-sm text-gray-500">Karin Siepmann Consulting</p>
            <p className="text-sm text-gray-500">Fritz-Reuter-Strasse 1, 65189 Wiesbaden</p>
            <a href="mailto:info@kside.de" className="text-sm text-green-dark hover:underline block mt-1">info@kside.de</a>
            <p className="text-sm text-gray-500">+49 (0) 1577 3551 777</p>
          </div>
          <div>
            <p className="font-semibold text-sm mb-3 text-gray-700">Links</p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="https://www.linkedin.com/in/karinsiepmann/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">LinkedIn</a>
              <a href="/impressum" className="text-gray-500 hover:text-gray-900">Impressum</a>
              <a href="/datenschutz" className="text-gray-500 hover:text-gray-900">Datenschutz</a>
            </div>
          </div>
        </div>

        {/* Zeile 2: Foto + Bio */}
        <div className="flex gap-5 items-start border-t border-gray-100 pt-8 mb-8">
          <div className="relative w-16 h-20 flex-shrink-0 rounded-lg overflow-hidden">
            <Image src="/karin-foto.png" alt="Karin Siepmann" fill className="object-cover object-top" />
          </div>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
            Karin Siepmann – Digitalenthusiastin – erkundet seit über 30 Jahren digitale Entwicklungen und Tools für ihre Tätigkeit in der Entwicklungszusammenarbeit, im Sozialwesen und in der Erwachsenenbildung.
          </p>
        </div>

        <div className="border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} karin siepmann
        </div>
      </div>
    </footer>
  );
}
