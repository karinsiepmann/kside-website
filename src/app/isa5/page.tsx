import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Für Isa 5 — [kside]//openlabs",
  robots: { index: false, follow: false },
};

export default function Isa5Page() {
  return (
    <div
      className="w-screen h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: "url('/stage-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[55%] aspect-video rounded-xl border border-amber-400/60 bg-black/65 backdrop-blur-sm overflow-hidden">
        <iframe
          src="https://www.youtube-nocookie.com/embed/oY9k9Kg_sY0"
          title="Für Isa 5 Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
