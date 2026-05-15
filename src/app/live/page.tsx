import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live — [kside]//openlabs",
  robots: { index: false, follow: false },
};

export default function LivePage() {
  return (
    <div
      className="w-screen h-screen overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: "url('/stage-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Inhalts-Panel: ~55% Breite / ~55% Höhe */}
      <div className="w-[55%] h-[55%] rounded-xl border border-amber-400/60 bg-black/65 backdrop-blur-sm">
        {/* Hier iframe oder Inhalt eintragen, z.B.: */}
        {/* <iframe src="https://..." className="w-full h-full rounded-xl" allow="microphone; camera" /> */}
      </div>
    </div>
  );
}
