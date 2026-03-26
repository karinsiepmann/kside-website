import Image from "next/image";

export default function FemAiLab() {
  return (
    <section id="femailab" className="py-24 bg-green-light">
      <div className="max-w-6xl mx-auto px-8">

        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-green-dark">Praxisbeispiel</p>
        <h2 className="text-4xl font-bold mb-12 text-burgundy">FemAiLab im Zukunftswerk</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/femailab-foto.jpg"
              alt="FemAiLab im Zukunftswerk Wiesbaden"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-text">KI-Kompetenz für Frauen</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Das FemAiLab ist ein <strong>offenes Lernlabor</strong> speziell für Frauen, die KI-Anwendungen in einem geschützten Rahmen erkunden möchten.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wir treffen uns jeden Montag ab 16 Uhr im Zukunftswerk der Stadt Wiesbaden (SmartCity Referat).
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Jede ist willkommen mit ihren individuellen Lernzielen und die Teilnehmerinnen lernen mit und voneinander praktische Fähigkeiten und bauen <strong>individuelle Kompetenzen</strong> im Umgang mit neuen Technologien auf.
            </p>
            <a
              href="https://www.linkedin.com/groups/13202295/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity bg-burgundy"
            >
              Weitere Informationen
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
