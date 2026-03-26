export default function Nav() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 flex items-center justify-end gap-3 px-8 py-4">
      <a href="#femailab" className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-burgundy hover:opacity-90 transition-opacity">
        FemAiLab
      </a>
      <a href="#portfolio" className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-green-dark hover:opacity-90 transition-opacity">
        Portfolio
      </a>
    </nav>
  );
}
