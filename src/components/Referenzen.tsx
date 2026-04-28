import Image from "next/image";

const logos = [
  { src: "/referenzen/zukunftswerk.svg", alt: "ZukunftsWerk Wiesbaden", w: 150, h: 50 },
  { src: "/referenzen/skala-campus.png", alt: "Skala Campus", w: 170, h: 50 },
  { src: "/referenzen/bwff-lang.jpg", alt: "BerufsWege für Frauen", w: 160, h: 50 },
  { src: "/referenzen/bpb.png", alt: "Bundeszentrale für politische Bildung", w: 150, h: 50 },
  { src: "/referenzen/sogehtdigital.png", alt: "so.geht.digital", w: 150, h: 50 },
  { src: "/referenzen/lernen-digital.svg", alt: "Kompetenzverbund lernen:digital", w: 150, h: 50 },
  { src: "/referenzen/weisse-bruecke.png", alt: "Weiße Brücke", w: 130, h: 50 },
  { src: "/referenzen/step-institute.png", alt: "Step Institute", w: 120, h: 50 },
  { src: "/referenzen/wi-bit.png", alt: "Wi-Bit", w: 120, h: 50 },
  { src: "/referenzen/srs.png", alt: "SRS", w: 100, h: 50 },
  { src: "/referenzen/laureus.svg", alt: "Laureus Sport for Good", w: 150, h: 50 },
  { src: "/referenzen/mega-bildungsstiftung.svg", alt: "Mega Bildungsstiftung", w: 150, h: 50 },
];

export default function Referenzen() {
  return (
    <section className="py-20 bg-bg-alt">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-bold mb-12 text-text">Referenzen</h2>
        <div className="flex flex-wrap items-center gap-x-12 gap-y-8">
          {logos.map(l => (
            <Image
              key={l.alt}
              src={l.src}
              alt={l.alt}
              width={l.w}
              height={l.h}
              className="object-contain max-h-12 w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
