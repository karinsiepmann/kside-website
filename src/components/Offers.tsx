import { Lightbulb, Users, FlaskConical, UserRound } from "lucide-react";

const formats = [
  {
    Icon: Lightbulb,
    title: "Impulse",
    text: "Grundlagen verstehen und erste Anwendungen kennenlernen.",
    outcome: "Danach kannst du einschätzen, was KI kann — und was für dich oder deine Organisation relevant ist.",
  },
  {
    Icon: Users,
    title: "Workshops",
    text: "Praktische Einsatzszenarien für den persönlichen und Organisationsalltag.",
    outcome: "Danach kennst du konkrete Anwendungsfälle und kannst KI-Tools eigenständig auf deinen Alltag übertragen.",
  },
  {
    Icon: FlaskConical,
    title: "Open Learning Lab",
    text: "Offenes Lernlabor: kollaboratives, co-kreatives Peerlearning, timeboxed oder ongoing.",
    outcome: "Danach hast du KI-Anwendungen im eigenen Tempo erkundet und weißt, wo du als nächstes vertiefen möchtest.",
  },
  {
    Icon: UserRound,
    title: "Personal AI Coaching",
    text: "Individuelles 1:1 Coaching — persönliche Begleitung beim Erkunden von KI für deinen Arbeits- und Denkalltag.",
    outcome: "Danach weißt du, welche KI-Tools zu dir passen, und kannst sie eigenständig einsetzen.",
  },
];

const topics = [
  "KI Basics: Grundlagen verstehen und erste Anwendungen kennenlernen",
  "Assistenten, Agenten, Automation",
  "UseCases und Workflows",
];

export default function Offers() {
  return (
    <section id="portfolio" className="py-24 bg-bg-alt">
      <div className="max-w-6xl mx-auto px-8">

        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-green-dark">Portfolio</p>
        <h2 className="text-4xl font-bold mb-3 text-burgundy">
          Vier Formate – mehrere Themen – von Grundlagen bis Automatisierung.
        </h2>
        <p className="text-gray-500 mb-12">KI Impulse, Workshops, OpenLearningLabs, Personal AI Coaching</p>

        {/* Formate — elegante Liste */}
        <div className="flex flex-col divide-y divide-gray-200 mb-14 border-t border-gray-200">
          {formats.map(({ Icon, title, text, outcome }) => (
            <div key={title} className="flex items-start gap-6 py-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-light flex items-center justify-center">
                <Icon size={20} className="text-green-dark" />
              </div>
              <div>
                <h3 className="font-bold text-text mb-1">{title}</h3>
                <p className="text-gray-600 leading-relaxed mb-2">{text}</p>
                <p className="text-sm text-green-dark font-medium">{outcome}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Themen */}
        <div className="mb-14">
          <h3 className="text-xl font-bold mb-5 text-text">Themen</h3>
          <ul className="space-y-3">
            {topics.map(t => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0 bg-green-dark" />
                <span className="text-gray-700">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 1:1 Coaching */}
        <div className="rounded-lg p-8 bg-green-light">
          <div className="flex items-center gap-3 mb-5">
            <h3 className="text-xl font-bold text-text">Individuelles 1:1 Coaching</h3>
            <span className="text-xs font-bold px-2 py-1 rounded-full text-white bg-burgundy">neu!</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <p className="font-semibold text-sm mb-2 uppercase tracking-wide text-green-dark">Worum geht es?</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Du erhältst eine persönliche Begleitung beim Erkunden und praktischen Ausprobieren von KI-Anwendungen für deinen Arbeits- und Denkalltag.
              </p>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2 uppercase tracking-wide text-green-dark">Für wen ist es geeignet?</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Für Menschen, die viele Fragen zur KI haben und sich mehr Klarheit wünschen. Fokus auf Orientierung und Anwendung, nicht auf Tool-Schulungen.
              </p>
            </div>
            <div>
              <p className="font-semibold text-sm mb-2 uppercase tracking-wide text-green-dark">So läuft es ab</p>
              <ol className="text-gray-700 text-sm space-y-1 leading-relaxed">
                <li>1. Kostenloses Orientierungsgespräch (30 Min.)</li>
                <li>2. Gemeinsam Ziele klären</li>
                <li>3. Lernreise starten</li>
              </ol>
            </div>
          </div>
          <a href="mailto:karin.siepmann@gmail.com" className="inline-block px-5 py-2.5 rounded-full text-white text-sm font-semibold hover:opacity-90 transition-opacity bg-burgundy">
            Kostenloses Orientierungsgespräch anfragen
          </a>
        </div>

      </div>
    </section>
  );
}
