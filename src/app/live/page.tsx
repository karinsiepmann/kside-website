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
      {/* Inhalts-Panel: ~55% Breite / 16:9 Verhältnis */}
      <div className="w-[55%] aspect-video rounded-xl border border-amber-400/60 bg-black/65 backdrop-blur-sm overflow-hidden">
        <iframe
          src="https://app.heygen.com/embeds/277c4eefde40402e81bf3ea772a6e0d3"
          title="Avatar-IV-Video"
          frameBorder="0"
          allow="encrypted-media; fullscreen;"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
