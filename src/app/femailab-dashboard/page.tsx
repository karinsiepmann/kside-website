import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Open Learning Lab Dashboard — [kside]//openlabs",
  robots: { index: false, follow: false },
};

export default function FemAiLabDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">AI Open Learning Lab</h1>
          <p className="text-xl text-gray-600">
            Community of Practice für Frauen in der KI-Bildung
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Wöchentliche Sessions", value: "Montags", subtext: "Zukunftswerk + Online" },
            { label: "Format", value: "Community", subtext: "Open Learning Lab" },
            { label: "Zielgruppe", value: "Frauen", subtext: "KI-Interessierte" },
            { label: "Kosten", value: "Kostenlos", subtext: "Zugänglich für alle" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow-md border-t-4 border-rose-600">
              <div className="text-sm text-gray-600 uppercase font-semibold tracking-wide mb-2">
                {stat.label}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.subtext}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Konzept & Ziele */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Über das AI Open Learning Lab</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Das <strong>AI Open Learning Lab for Women</strong> ist ein offenes Lernlabor speziell für Frauen, die KI-Anwendungen in einem geschützten Rahmen erkunden möchten.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Wir arbeiten nach dem <strong>Community of Practice</strong> Ansatz: Teilnehmerinnen teilen ihre Erfahrungen, lernen voneinander und entwickeln gemeinsam praktische Lösungen für den Einsatz von KI im beruflichen und privaten Alltag.
              </p>
            </div>

            {/* Ablauf */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Wie läuft eine Session ab?</h2>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Thematischer Impuls (15 Min)",
                    description: "Aktuelle Entwicklungen, Methoden und Anwendungsfelder der KI",
                  },
                  {
                    step: "2",
                    title: "Austauschrunde (45 Min)",
                    description: "Gemeinsames Diskutieren und Erfahrungsaustausch in der Gruppe",
                  },
                  {
                    step: "3",
                    title: "Hands-on Arbeitsphase (90 Min)",
                    description: "Teilnehmerinnen arbeiten an eigenen Ideen, Projekten und Fragestellungen — mit Coaching-Unterstützung",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-600 text-white font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Themen */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Bisherige Session-Themen</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "ChatGPT Live Chat & AI Betriebssystem",
                  "Dashboards & Mistral",
                  "WM Spielplan, KI-Bedenken & Planung",
                  "Images, Video & Risikomanagement",
                  "NotebookLM, Bilder & Obsidian",
                  "Lovable, Apps & Dispatch",
                  "CoPilot, KI-Workflow & Netlify",
                  "NotebookLM, Napkin & Events",
                  "Skills, MCP & Excalidraw",
                  "Agenten & Assistenten",
                ].map((theme, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-rose-50 to-orange-50 p-4 rounded-lg border border-rose-200">
                    <p className="text-gray-800 font-medium">{theme}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Schnelleinstiege */}
          <div className="space-y-6">
            {/* Community Links */}
            <div className="bg-gradient-to-br from-rose-600 to-orange-500 rounded-lg p-8 shadow-md text-white">
              <h3 className="text-xl font-bold mb-4">Community beitreten</h3>
              <p className="text-sm mb-6 opacity-95">
                Vernetz dich mit anderen KI-interessierten Frauen
              </p>
              <a
                href="https://www.linkedin.com/groups/13202295/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-white text-rose-700 font-semibold py-3 px-4 rounded-lg text-center hover:bg-gray-100 transition"
              >
                LinkedIn-Gruppe
              </a>
            </div>

            {/* Anmeldung */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-500 rounded-lg p-8 shadow-md text-white">
              <h3 className="text-xl font-bold mb-4">Zum nächsten Termin</h3>
              <p className="text-sm mb-6 opacity-95">
                Sichert euch einen Platz im Labor
              </p>
              <a
                href="https://anny.eu/book/lab-for-women"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-white text-emerald-700 font-semibold py-3 px-4 rounded-lg text-center hover:bg-gray-100 transition"
              >
                Anmelden
              </a>
            </div>

            {/* Info */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-3">📍 Ort</h4>
              <p className="text-sm text-blue-800 leading-relaxed">
                <strong>Zukunftswerk Wiesbaden</strong>
                <br />
                Luisenforum, Kirchgasse 6
                <br />
                65185 Wiesbaden
              </p>
            </div>

            {/* Format Info */}
            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-3">🎯 Für wen?</h4>
              <p className="text-sm text-purple-800 leading-relaxed">
                Frauen mit praktischen KI-Erfahrungen, die ihr Wissen vertiefen und sich mit anderen vernetzen möchten
              </p>
            </div>

            {/* Kontakt */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3">✉️ Kontakt</h4>
              <a href="mailto:info@kside.de" className="text-sm text-rose-600 hover:text-rose-700 font-semibold">
                info@kside.de
              </a>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-12 text-center text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Neugierig?</h2>
          <p className="text-lg mb-8 opacity-90">
            Schaut vorbei – die nächste Session wartet auf euch!
          </p>
          <a
            href="/termine"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-8 rounded-lg transition"
          >
            Alle Termine ansehen
          </a>
        </div>
      </div>
    </div>
  );
}
