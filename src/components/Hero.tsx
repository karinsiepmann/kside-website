import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-bg-alt py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div className="pt-0">
            <Image
              src="/logo-kside.png"
              alt="[kside]//openlabs"
              width={560}
              height={185}
              className="h-auto w-full max-w-lg mb-10"
              priority
            />
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-md">
              KI-Wissen für alle –<br />praxisnah, gemeinschaftlich, offen.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#portfolio" className="px-7 py-3 rounded-full font-semibold text-white bg-green-dark hover:opacity-90 transition-opacity">
                Angebote entdecken
              </a>
              <a href="mailto:info@kside.de" className="px-7 py-3 rounded-full font-semibold text-gray-600 border-2 border-gray-300 bg-white hover:border-gray-500 transition-colors">
                Kontakt
              </a>
            </div>
          </div>

          <div className="relative aspect-[3/2] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/hero-lernraum.jpg"
              alt="Offener Lernraum"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
