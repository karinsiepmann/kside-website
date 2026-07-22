import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aktuelle Termine — [kside]//openlabs",
  description:
    "Alle kommenden Termine für das AI Open Learning Lab for Women und SkalaCampus Morgenimpulse",
};

export default function TerminePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div
          className="bg-gradient-to-r from-rose-700 to-orange-500 text-white p-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-2">Aktuelle Termine 2026</h1>
          <p className="text-lg opacity-95">AI Open Learning Lab & SkalaCampus</p>
          <div className="inline-block bg-white/25 backdrop-blur px-4 py-2 rounded-full text-sm mt-4">
            Wiesbaden · Online
          </div>
        </div>

        {/* Content */}
        <div className="p-12">
          {/* AI Open Learning Lab Section */}
          <div className="mb-12">
            <div className="flex items-center mb-6 pb-4 border-b-2 border-slate-100">
              <div className="text-2xl mr-4">🏢</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  AI Open Learning Lab for Women
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Wiesbaden · Zukunftswerk
                </p>
              </div>
            </div>

            {/* Live im Zukunftswerk */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  🏢 Live im Zukunftswerk
                </h3>
                <span className="text-sm text-gray-600 font-medium">
                  17:00 – 20:00 Uhr
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { date: "03.08", day: "Mo" },
                  { date: "17.08", day: "Mo" },
                  { date: "24.08", day: "Mo" },
                  { date: "31.08", day: "Mo" },
                  { date: "07.09", day: "Mo" },
                  { date: "14.09", day: "Mo" },
                ].map((item) => (
                  <div
                    key={item.date}
                    className="bg-slate-50 p-4 rounded-lg border-l-4 border-rose-700 hover:bg-slate-100 transition"
                  >
                    <div className="text-lg font-bold text-gray-900">
                      {item.date}
                    </div>
                    <div className="text-sm text-gray-600">{item.day}</div>
                    <span className="inline-block bg-rose-100 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full mt-2">
                      Präsenz
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Montags Online */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  💻 Montags Online
                </h3>
                <span className="text-sm text-gray-600 font-medium">
                  18:00 – 19:30 Uhr
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { date: "10.08", day: "Mo" },
                  { date: "21.09", day: "Mo" },
                  { date: "28.09", day: "Mo" },
                ].map((item) => (
                  <div
                    key={item.date}
                    className="bg-slate-50 p-4 rounded-lg border-l-4 border-orange-500 hover:bg-slate-100 transition"
                  >
                    <div className="text-lg font-bold text-gray-900">
                      {item.date}
                    </div>
                    <div className="text-sm text-gray-600">{item.day}</div>
                    <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full mt-2">
                      Online
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dienstags Online */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  💻 Dienstags Online
                </h3>
                <span className="text-sm text-gray-600 font-medium">
                  18:00 – 19:30 Uhr
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { date: "11.08", day: "Di" },
                  { date: "08.09", day: "Di" },
                ].map((item) => (
                  <div
                    key={item.date}
                    className="bg-slate-50 p-4 rounded-lg border-l-4 border-emerald-600 hover:bg-slate-100 transition"
                  >
                    <div className="text-lg font-bold text-gray-900">
                      {item.date}
                    </div>
                    <div className="text-sm text-gray-600">{item.day}</div>
                    <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mt-2">
                      Online
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Grid */}
            <div className="bg-slate-50 p-6 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                  📍 Ort
                </h4>
                <p className="text-gray-900">
                  Zukunftswerk Wiesbaden
                  <br />
                  Luisenforum, Kirchgasse 6
                  <br />
                  65185 Wiesbaden
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                  💰 Kosten
                </h4>
                <p className="text-gray-900">
                  Kostenfrei!
                  <br />
                  Bringt euer Endgerät mit
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                  👥 Format
                </h4>
                <p className="text-gray-900">
                  Community of Practice
                  <br />
                  Peer-Learning & Austausch
                  <br />
                  Für KI-Erfahrene
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-gray-200 py-8"></div>

          {/* SkalaCampus Section */}
          <div>
            <div className="flex items-center mb-6 pb-4 border-b-2 border-slate-100">
              <div className="text-2xl mr-4">🎤</div>
              <h2 className="text-2xl font-bold text-gray-900">
                SkalaCampus Morgenimpulse
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  date: "20.08.2026",
                  title: "KI Tools im Arbeitsalltag",
                  time: "9:00 – 10:00 Uhr",
                  link: "https://www.skala-campus.org/event/ki-tools-arbeitsalltag/",
                },
                {
                  date: "22.09.2026",
                  title: "KI Skills",
                  time: "9:00 – 10:00 Uhr",
                  link: "https://www.skala-campus.org/event/ki-skills/",
                },
                {
                  date: "06.10.2026",
                  title:
                    "Komplexe & spröde Themen mittels KI greifbar machen – DSGVO & EU-AI-Act",
                  time: "9:00 – 10:00 Uhr",
                  link: "https://www.skala-campus.org",
                },
                {
                  date: "27.10.2026",
                  title: "AI-OS: KI Operating System",
                  time: "9:00 – 10:00 Uhr",
                  link: "https://www.skala-campus.org",
                },
              ].map((event, idx) => (
                <a
                  key={idx}
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg hover:shadow-md hover:from-blue-100 hover:to-indigo-100 transition"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-blue-900">
                        {event.date}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mt-1">
                        {event.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">{event.time}</p>
                    </div>
                    <span className="text-blue-600 font-semibold">→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="bg-gradient-to-r from-emerald-500 to-orange-500 text-white p-8 text-center"
        >
          <h3 className="text-2xl font-semibold mb-3">Interessiert?</h3>
          <p className="mb-6 opacity-95">
            Sichert euch euren Platz im AI Open Learning Lab
          </p>
          <a
            href="https://anny.eu/book/lab-for-women"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-rose-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Zur Anmeldung
          </a>
        </div>
      </div>
    </div>
  );
}
