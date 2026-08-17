export default function LivingLearningLab() {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-50 to-purple-100">
      <div className="max-w-6xl mx-auto px-8">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-purple-600">
              Aus unserer Community entstanden
            </p>
            <h2 className="text-4xl font-bold mb-6 text-text">
              Living Learning Lab – Deine offene Lernreise
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Das <strong>Living Learning Lab</strong> ist eine regelmäßig aktualisierte Lernplattform für alle, die KI praktisch erkunden möchten – ohne Druck, ohne feste Agenda.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wähle dir spontan die Mission aus, die dich gerade reizt. Von KI-Basics bis zu spannenden Experimenten – alles auf deinem Tempo, in deiner Reihenfolge.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Entwickelt von der Community – für die Community. Neue Lernimpulse entstehen regelmäßig, um dich zu neuen Fragen zu inspirieren.
            </p>
            <a
              href="/livinglearninglab/"
              className="inline-block px-7 py-3 rounded-full font-semibold text-white bg-purple-600 hover:opacity-90 transition-opacity"
            >
              Zur Lernreise
            </a>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <h3 className="font-bold text-text mb-1">Selbstbestimmt lernen</h3>
                  <p className="text-sm text-gray-600">Keine feste Reihenfolge – wähle die Missionen, die dich interessieren.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">🔄</div>
                <div>
                  <h3 className="font-bold text-text mb-1">Regelmäßig neue Impulse</h3>
                  <p className="text-sm text-gray-600">Neue Missionen entstehen laufend – es gibt immer was Neues zu entdecken.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-3xl">👥</div>
                <div>
                  <h3 className="font-bold text-text mb-1">Community-getrieben</h3>
                  <p className="text-sm text-gray-600">Entstanden aus unserer Community – unterstützt durch die Community.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
