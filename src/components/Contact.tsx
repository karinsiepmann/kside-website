export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-green">
      <div className="max-w-6xl mx-auto px-8">
        <div className="max-w-2xl mx-auto text-center">

          <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-white/80">Kontakt</p>
          <h2 className="text-4xl font-bold mb-6 text-white">
            Gemeinsam KI entdecken
          </h2>
          <p className="text-white/90 leading-relaxed mb-4 text-lg">
            Du interessierst dich für eines unserer Formate, möchtest ein eigenes Lernlabor oder
            eine Community of Practice ins Leben rufen? Dann nimm Kontakt auf.
          </p>
          <p className="text-white/80 leading-relaxed mb-10">
            Das Lernlabor-Konzept ist als „The Guide" frei verfügbar. Wir können bei der Ein- und Durchführung begleiten.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:info@kside.de" className="px-8 py-3 rounded-full font-semibold bg-white text-green-dark hover:bg-gray-100 transition-colors">
              Kontakt aufnehmen
            </a>
            <a href="#portfolio" className="px-8 py-3 rounded-full font-semibold border-2 border-white text-white hover:bg-white/10 transition-colors">
              Alle Angebote
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
