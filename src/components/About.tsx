export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-48 h-48 rounded-full mx-auto md:mx-0 flex items-center justify-center text-7xl"
              style={{ backgroundColor: "#e7f1da" }}>
              👩‍💻
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#6e9339" }}>
              Über mich
            </p>
            <h2 className="font-['Montserrat'] text-3xl font-bold mb-6" style={{ color: "#1a1a1a" }}>
              Karin Siepmann
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Gründerin von [kside]//openlabs. Dipl.-Ing. Chemie mit über 30 Jahren Erfahrung
              in Bildung, internationaler Zusammenarbeit und — seit einigen Jahren — KI-Bildung
              und digitaler Teilhabe.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Ich glaube daran, dass gutes Lernen auf Augenhöhe stattfindet — und dass
              KI kein Werkzeug für Expertinnen ist, sondern für alle.
            </p>
            <div className="flex flex-wrap gap-2">
              {["KI-Bildung", "Erasmus+", "Scrum Master", "Erwachsenenbildung", "Impact"].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ backgroundColor: "#e7f1da", color: "#6e9339" }}>
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
