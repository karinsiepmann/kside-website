import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "SKalaCAMPUS Morgenimpulse — [kside]//openlabs",
  description:
    "KI-Morgenimpulse auf dem SKalaCAMPUS – der Lern-Plattform für sozial Engagierte. Alle Termine 2026.",
};

export default function SkalaCampusPage() {
  const events = [
    {
      date: "20.08.2026",
      title: "KI-Tools im Arbeitsalltag",
      time: "9:00 – 10:00 Uhr",
      link: "https://www.skala-campus.org/event/ki-tools-arbeitsalltag/",
    },
    {
      date: "22.09.2026",
      title: "KI-Skills: Wie du deine KI individuell anpassen kannst",
      time: "9:00 – 10:00 Uhr",
      link: "https://www.skala-campus.org/event/ki-skills/",
    },
    {
      date: "06.10.2026",
      title: "Von kompliziert zu verständlich: KI als Wissensübersetzer",
      time: "9:00 – 10:00 Uhr",
      link: "https://www.skala-campus.org/event/komplexes-wissen-mit-ki-greifbar-machen/",
    },
    {
      date: "27.10.2026",
      title: "AI-OS: Was ist ein KI Operating System?",
      time: "9:00 – 10:00 Uhr",
      link: "https://www.skala-campus.org/event/ai-os/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white p-12 text-center">
          <h1 className="text-4xl font-bold mb-2">SKalaCAMPUS Morgenimpulse</h1>
          <p className="text-lg opacity-95">KI-Impulse für sozial Engagierte</p>
          <div className="inline-block bg-white/25 backdrop-blur px-4 py-2 rounded-full text-sm mt-4">
            Online · Aug – Okt 2026
          </div>
        </div>

        {/* Content */}
        <div className="p-12">
          {/* Intro */}
          <div className="mb-10">
            <div className="flex items-center mb-6 pb-4 border-b-2 border-slate-100">
              <div className="text-2xl mr-4">🎤</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Alle Termine 2026
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Die Lern-Plattform für sozial Engagierte · Anmeldung direkt über SKalaCAMPUS
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {events.map((event, idx) => (
                <a
                  key={idx}
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl hover:shadow-md hover:from-blue-100 hover:to-indigo-100 transition group"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-blue-900 text-sm">
                        {event.date}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mt-1">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{event.time} · Online</p>
                    </div>
                    <span className="text-blue-600 font-bold text-lg group-hover:translate-x-1 transition-transform mt-1">→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="bg-blue-50 p-6 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                📍 Format
              </h4>
              <p className="text-gray-900">
                Online-Morgenimpuls
                <br />
                60 Minuten
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                💰 Kosten
              </h4>
              <p className="text-gray-900">
                Kostenfrei
                <br />
                Anmeldung erforderlich
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                👥 Zielgruppe
              </h4>
              <p className="text-gray-900">
                Sozial Engagierte
                <br />
                NGOs & Non-Profits
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-200 p-8 text-center flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="/termine"
            className="inline-block text-blue-700 font-semibold hover:text-blue-800 transition"
          >
            ← Alle Termine
          </a>
          <a
            href="https://kside.de/"
            className="inline-block text-rose-700 font-semibold hover:text-rose-800 transition"
          >
            Zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
}
