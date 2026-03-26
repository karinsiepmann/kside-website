"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-6xl mx-auto px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
          Diese Website verwendet technisch notwendige Cookies für den Betrieb.
          Weitere Informationen finden Sie in unserer{" "}
          <Link href="/datenschutz" className="text-green-dark underline hover:no-underline">
            Datenschutzerklärung
          </Link>.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2 rounded-full text-sm font-semibold border-2 border-gray-300 text-gray-600 hover:border-gray-500 transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-green-dark hover:opacity-90 transition-opacity"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
