'use client';

import { useState } from "react";

interface Term {
  date: string;
  day: string;
  time: string;
  type?: "online" | "guest";
  zoomLink?: string;
  locationName?: string;
  locationAddress?: string;
}

export default function TerminePage() {
  const [showZoomModal, setShowZoomModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-700 to-orange-500 text-white p-12 text-center">
          <h1 className="text-4xl font-bold mb-2">Aktuelle Termine 2026/2027</h1>
          <p className="text-lg opacity-95">AI Open Learning Lab for Women</p>
          <div className="inline-block bg-white/25 backdrop-blur px-4 py-2 rounded-full text-sm mt-4">
            Wiesbaden · Zukunftswerk
          </div>
        </div>

        {/* Content */}
        <div className="p-12">
          {/* AI Open Learning Lab Section */}
          <div className="mb-12">
            {/* Live im Zukunftswerk */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  🏢 Live im Zukunftswerk
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 font-medium">
                    17:00 – 20:00 Uhr
                  </span>
                  <a
                    href="https://anny.eu/book/lab-for-women"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-white bg-rose-700 px-3 py-1 rounded-full hover:opacity-90 transition-opacity"
                  >
                    Anmelden →
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {([
                  { date: "16.11", day: "Mo" },
                  { date: "23.11", day: "Mo" },
                  { date: "30.11", day: "Mo" },
                  { date: "07.12", day: "Mo" },
                  { date: "14.12", day: "Mo" },
                ] as Array<{ date: string; day: string; special?: boolean; title?: string; link?: string }>).map((item) => (
                  <div
                    key={item.date}
                    className="bg-slate-50 p-4 rounded-lg border-l-4 border-rose-700 hover:bg-slate-100 transition"
                  >
                    <div className="text-lg font-bold text-gray-900">
                      {item.date}
                    </div>
                    <div className="text-sm text-gray-600">{item.day}</div>
                    {item.special ? (
                      <>
                        <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full mt-2 mr-2">
                          Sondertermin
                        </span>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-rose-100 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full mt-2 hover:bg-rose-200 transition"
                        >
                          Anmelden →
                        </a>
                        <p className="text-xs text-gray-700 mt-2 font-medium">{item.title}</p>
                      </>
                    ) : (
                      <span className="inline-block bg-rose-100 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full mt-2">
                        Präsenz
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* SkalaCampus Morgenimpulse Frühjahr 2027 */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  🎤 SKalaCAMPUS Morgenimpulse
                </h3>
                <span className="text-sm text-gray-600 font-medium">
                  9:00 – 10:00 Uhr · online
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  {
                    date: "Mi, 20.01.2027",
                    title: "KI-Tools für den Arbeitsalltag",
                    link: "https://www.skala-campus.org/event/ki-tools-arbeitsalltag-2/",
                  },
                  {
                    date: "Do, 11.02.2027",
                    title: "Präsentationen und Animationen mit KI",
                    link: "https://www.skala-campus.org/event/praesentationen-mit-ki/",
                  },
                ].map((item) => (
                  <a
                    key={item.date}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600 hover:bg-blue-100 transition"
                  >
                    <div className="text-lg font-bold text-gray-900">
                      {item.date}
                    </div>
                    <div className="text-sm text-gray-700 mt-1 font-medium">
                      {item.title}
                    </div>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                        Online
                      </span>
                      <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Anmelden →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Info Grid */}
            <div className="bg-slate-50 p-6 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-8">
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

            {/* Anmeldungs-CTA */}
            <div className="bg-gradient-to-r from-emerald-500 to-rose-500 rounded-lg p-8 text-center text-white mb-8">
              <h3 className="text-2xl font-semibold mb-3">Bereit dabei zu sein?</h3>
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

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-200 p-8 text-center">
          <a
            href="https://kside.de/"
            className="inline-block text-rose-700 font-semibold hover:text-rose-800 transition"
          >
            ← Zurück zur Startseite
          </a>
        </div>
      </div>

      {/* Zoom Modal */}
      {showZoomModal && selectedTerm && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowZoomModal(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🎥</div>
              <h2 className="text-2xl font-bold text-gray-900">Online Termin</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Termin: <span className="font-semibold text-orange-700">{selectedTerm.date}.2026 ({selectedTerm.day})</span>
              <br/>
              Uhrzeit: <span className="font-semibold">{selectedTerm.time} Uhr</span>
              <br/>
              Format: <span className="font-semibold text-emerald-600">🌐 Online (Zoom)</span>
            </p>

            <div className="bg-orange-50 rounded-lg p-4 mb-6 border border-orange-200">
              <p className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-2">Zoom-Meeting Link:</p>
              <a
                href={selectedTerm.zoomLink}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-sm font-mono bg-white p-3 rounded border border-orange-300 text-orange-700 hover:bg-orange-50 transition block"
              >
                {selectedTerm.zoomLink}
              </a>
            </div>

            <div className="flex gap-3">
              <a
                href={selectedTerm.zoomLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-orange-700 transition text-center"
              >
                Zum Meeting →
              </a>
              <button
                onClick={() => setShowZoomModal(false)}
                className="flex-1 bg-gray-200 text-gray-900 font-semibold py-3 px-4 rounded-lg hover:bg-gray-300 transition"
              >
                Schließen
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              Zoom-Link wird zum Veranstaltungszeitpunkt aktiv
            </p>
          </div>
        </div>
      )}

      {/* Info Modal für Zu Gast bei */}
      {showInfoModal && selectedTerm && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowInfoModal(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🤝</div>
              <h2 className="text-2xl font-bold text-gray-900">Zu Gast bei</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Termin: <span className="font-semibold text-indigo-700">{selectedTerm.date}.2026 ({selectedTerm.day})</span>
              <br/>
              Uhrzeit: <span className="font-semibold">{selectedTerm.time} Uhr</span>
              <br/>
              Format: <span className="font-semibold text-indigo-600">📍 Präsenz</span>
            </p>

            <div className="bg-indigo-50 rounded-lg p-4 mb-6 border border-indigo-200">
              <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-2">Ort:</p>
              <p className="text-sm font-semibold text-gray-900">{selectedTerm.locationName}</p>
              <a
                href="https://de.seibert.group/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-indigo-700 hover:text-indigo-900 mt-1 inline-block"
              >
                {selectedTerm.locationName} ↗
              </a>
              <p className="text-sm text-gray-700 mt-2">{selectedTerm.locationAddress}</p>
            </div>

            <div className="flex gap-3">
              <a
                href="https://de.seibert.group/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-indigo-700 transition text-center"
              >
                Zum Unternehmen →
              </a>
              <button
                onClick={() => setShowInfoModal(false)}
                className="flex-1 bg-gray-200 text-gray-900 font-semibold py-3 px-4 rounded-lg hover:bg-gray-300 transition"
              >
                Schließen
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              Treffpunkt: {selectedTerm.locationName}, {selectedTerm.locationAddress}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
