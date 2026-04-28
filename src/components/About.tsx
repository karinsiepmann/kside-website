import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg max-w-sm mx-auto md:mx-0">
            <Image src="/karin-foto.png" alt="Karin Siepmann" fill className="object-cover object-top" />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-green-dark">Über mich</p>
            <h2 className="text-4xl font-bold mb-6 text-burgundy">Karin Siepmann</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Gründerin von [kside]//openlabs. Über 30 Jahre Erfahrung in Bildung, internationaler
              Zusammenarbeit und Erwachsenenbildung — seit 2020 mit Schwerpunkt KI-Bildung und digitale Teilhabe.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              KI-Workshops für die Bundeszentrale für politische Bildung, Skala Campus,
              BerufsWege für Frauen und weitere Organisationen. Leitung des FemAiLab Wiesbaden
              in Kooperation mit der Landeshauptstadt Wiesbaden.
            </p>
            <div className="flex flex-wrap gap-2">
              {["KI-Bildung", "Erwachsenenbildung", "FemAiLab", "Erasmus+", "Scrum Master"].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full text-sm font-medium bg-green-light text-green-dark">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
