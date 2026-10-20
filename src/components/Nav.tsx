export default function Nav() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 flex items-center justify-end gap-3 px-8 py-4">
      <a href="/weihnachten2026/" className="px-5 py-2 rounded-full text-sm font-semibold text-[#141413] bg-[#A3C770] hover:opacity-90 transition-opacity inline-flex items-center gap-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#141413" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2 L5 10 h3 l-4 6 h6 v4 h4 v-4 h6 l-4 -6 h3 z" />
        </svg>
        KI-Adventskalender
      </a>
      <a href="/livinglearninglab/" className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-[#F0762B] hover:opacity-90 transition-opacity">
        Living Learning Lab
      </a>
      <a href="#femailab" className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-burgundy hover:opacity-90 transition-opacity">
        AIOpenLab
      </a>
      <a href="#portfolio" className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-green-dark hover:opacity-90 transition-opacity">
        Portfolio
      </a>
      <a href="/termine" className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-rose-700 hover:opacity-90 transition-opacity">
        Aktuelle Termine
      </a>
    </nav>
  );
}
