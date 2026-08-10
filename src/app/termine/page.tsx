'use client';

import { useState } from "react";

interface OnlineTerm {
  date: string;
  day: string;
  time: string;
  zoomLink: string;
}

export default function TerminePage() {
  const [showZoomModal, setShowZoomModal] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState<OnlineTerm | null>(null);

  const openZoomModal = (term: OnlineTerm) => {
    setSelectedTerm(term);
    setShowZoomModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-700 to-orange-500 text-white p-12 text-center">
          <h1 className="text-4xl font-bold mb-2">Aktuelle Termine 2026</h1>
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
                {[
                  { date: "03.08", day: "Mo" },
                  { date: "10.08", day: "Mo", special: true, title: "Usability Testessen: KI & Führerscheinantrag", link: "https://anny.eu/book/usability-testessen" },
                  { date: "17.08", day: "Mo" },
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
                  { date: "24.08", day: "Mo", time: "18:00 – 19:30", zoomLink: "https://us02web.zoom.us/j/81062781038" },
                  { date: "21.09", day: "Mo", time: "18:00 – 19:30", zoomLink: "https://us02web.zoom.us/j/81062781038" },
                  { date: "28.09", day: "Mo", time: "18:00 – 19:30", zoomLink: "https://us02web.zoom.us/j/81062781038" },
                ].map((item) => (
                  <div
                    key={item.date}
                    className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 hover:bg-orange-100 transition"
                  >
                    <div className="text-lg font-bold text-gray-900">
                      {item.date}
                    </div>
                    <div className="text-sm text-gray-600">{item.day}</div>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
                        Online
                      </span>
                      <button
                        onClick={() => openZoomModal(item)}
                        className="inline-block bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full hover:bg-orange-700 transition"
                      >
                        Zoom →
                      </button>
                    </div>
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
                  { date: "11.08", day: "Di", time: "18:00 – 19:30", zoomLink: "https://us02web.zoom.us/j/81062781038" },
                  { date: "08.09", day: "Di", time: "18:00 – 19:30", zoomLink: "https://us02web.zoom.us/j/81062781038" },
                ].map((item) => (
                  <div
                    key={item.date}
                    className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 hover:bg-orange-100 transition"
                  >
                    <div className="text-lg font-bold text-gray-900">
                      {item.date}
                    </div>
                    <div className="text-sm text-gray-600">{item.day}</div>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      <span className="inline-block bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
                        Online
                      </span>
                      <button
                        onClick={() => openZoomModal(item)}
                        className="inline-block bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full hover:bg-orange-700 transition"
                      >
                        Zoom →
                      </button>
                    </div>
                  </div>
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

          {/* SkalaCampus Teaser */}
          <div className="border-t-2 border-gray-200 pt-8">
            <a
              href="/skala-campus"
              className="block p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl hover:shadow-md hover:from-blue-100 hover:to-indigo-100 transition group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">🎤</div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition">
                      SKalaCAMPUS Morgenimpulse
                    </h2>
                    <p className="text-sm text-gray-600 mt-1">
                      4 Termine · Aug – Okt 2026 · Die Lern-Plattform für sozial Engagierte
                    </p>
                  </div>
                </div>
                <span className="text-blue-600 font-bold text-xl group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
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
    </div>
  );
}
