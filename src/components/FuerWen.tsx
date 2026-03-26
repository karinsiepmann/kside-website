import { UserRound, Heart, Building2 } from "lucide-react";

const targets = [
  {
    Icon: UserRound,
    title: "Einzelpersonen",
    text: "Neugierige, die KI verstehen und nutzen möchten",
  },
  {
    Icon: Heart,
    title: "Gemeinnützige Organisationen",
    text: "Alle Organisationen, die digitale Kompetenzen aufbauen wollen",
  },
  {
    Icon: Building2,
    title: "Kommunale Einrichtungen",
    text: "Bibliotheken, Zukunftslabore, öffentliche Träger",
  },
];

export default function FuerWen() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <h3 className="text-3xl font-bold mb-12 text-burgundy">Für wen wir arbeiten</h3>
        <div className="grid md:grid-cols-3 gap-10">
          {targets.map(({ Icon, title, text }) => (
            <div key={title}>
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <Icon size={36} strokeWidth={1.5} className="text-green-dark" />
              </div>
              <h4 className="font-bold text-text mb-2">{title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
