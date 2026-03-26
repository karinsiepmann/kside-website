import Image from "next/image";

export default function Community() {
  return (
    <section id="community" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-green-dark">Community</p>
            <h2 className="text-4xl font-bold mb-6 text-text">
              Community of Practice – offene Online Gruppe
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg font-medium">
              Nach dem Lernlabor ist vor dem Lernen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Unsere etablierte <strong>Community of Practice</strong> verbindet Lernende und Interessierte.
              Hier tauschen sich Praktizierende regelmäßig aus, teilen Erfahrungen und entwickeln
              gemeinsam neue Ideen für den KI-Einsatz im Alltag.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Werdet Teil unserer Community und kommt in unsere offene LinkedIn Gruppe des FemAiLabs.
            </p>
            <a
              href="https://www.linkedin.com/groups/13202295/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 rounded-full font-semibold border-2 border-green-dark text-green-dark bg-white hover:bg-green-light transition-colors"
            >
              Zur offenen LinkedIn-Gruppe
            </a>
          </div>

          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/community-foto.jpg"
              alt="Community of Practice"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
