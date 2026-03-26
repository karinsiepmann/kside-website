import Image from "next/image";

export default function Ansatz() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-green-dark">
              Unser Ansatz
            </p>
            <h2 className="text-4xl font-bold mb-8 leading-tight text-burgundy">
              Künstliche Intelligenz verstehen und anwenden
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong><span className="text-burgundy">[kside]</span><span className="text-green-dark">//openlabs</span></strong>{" "}
              steht für neue und offene Formate des{" "}
              <strong>individuellen und gemeinsamen Lernens</strong> rund um Künstliche Intelligenz.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Im Zentrum steht die <strong>Frage nach dem Wozu des Lernens</strong>:{" "}
              Was wollen wir mit dem Gelernten bewirken – individuell, organisatorisch, gesellschaftlich?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wir machen KI-Wissen zugänglich – für Einzelpersonen, gemeinnützige Organisationen und kommunale Einrichtungen wie Bibliotheken oder Zukunftslabore.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Unsere Formate verbinden <strong>Impulsvorträge, interaktive Workshops, offene Lernlabore</strong> und{" "}
              <strong>individuelle Lernbegleitung</strong>. So entsteht ein geschützter Raum zum Experimentieren und Lernen.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/ansatz-lernraum.jpg"
              alt="Moderner Lernraum"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
