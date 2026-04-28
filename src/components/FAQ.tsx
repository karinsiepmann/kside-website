const faqs = [
  {
    q: "Für wen sind die Angebote geeignet?",
    a: "Die Workshops, Lernlabore und Coachings richten sich an Erwachsene ohne Tech-Hintergrund — Einzelpersonen, die KI im Alltag nutzen möchten, sowie Teams und Einrichtungen aus Bildung, Sozialwirtschaft oder kommunalen Organisationen. Technisches Vorwissen ist nicht erforderlich.",
  },
  {
    q: "Was ist der Unterschied zwischen einem Workshop und dem Open Learning Lab?",
    a: "Ein Workshop hat ein festes Thema und eine klare Struktur — ideal für Organisationen, die ihr Team gezielt zu einem KI-Thema schulen möchten. Das Open Learning Lab ist ein offenes Format: keine Agenda, kein Frontalunterricht — stattdessen kollaboratives Erkunden und gemeinsames Ausprobieren in der Gruppe.",
  },
  {
    q: "Was bringt mir das Personal AI Coaching?",
    a: "Im 1:1 Coaching finden wir gemeinsam heraus, welche KI-Tools wirklich zu deinem Alltag passen. Nach dem Coaching kannst du sie eigenständig einsetzen. Es beginnt mit einem kostenlosen 30-minütigen Orientierungsgespräch — ohne Verpflichtung.",
  },
  {
    q: "Wie starte ich?",
    a: "Schreib eine kurze E-Mail an info@kside.de und beschreibe, was dich beschäftigt oder was du dir vorstellst. Wir klären gemeinsam, welches Format zu dir oder deiner Organisation passt.",
  },
  {
    q: "Was ist das FemAiLab?",
    a: "Das FemAiLab ist ein wöchentliches offenes Lernlabor in Wiesbaden — speziell für Frauen, die KI in einem geschützten Rahmen erkunden möchten. Es findet montags statt, ist kostenlos zugänglich und folgt dem World-Café-Prinzip: kein Frontalunterricht, sondern Austausch, Neugier und gemeinsames Ausprobieren.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-green-dark">FAQ</p>
        <h2 className="text-4xl font-bold mb-12 text-burgundy">Häufige Fragen</h2>

        <div className="flex flex-col divide-y divide-gray-200 border-t border-gray-200">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group py-6">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <span className="font-semibold text-text group-open:text-burgundy transition-colors">{q}</span>
                <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-300 group-open:border-burgundy flex items-center justify-center transition-colors">
                  <svg className="w-3 h-3 text-gray-400 group-open:text-burgundy group-open:rotate-45 transition-transform" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" d="M6 1v10M1 6h10" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
