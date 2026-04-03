export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0f14]/90 backdrop-blur-sm border-b border-[#1e2330] h-16">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-6 h-full">
        <a href="#" className="font-serif font-semibold text-[#eeeae0]">
          Non-Profit
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-xs tracking-widest uppercase text-[#7a8099] hover:text-[#eeeae0] transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#programs"
            className="text-xs tracking-widest uppercase text-[#7a8099] hover:text-[#eeeae0] transition-colors duration-200"
          >
            Programs
          </a>
          <a
            href="#contact"
            className="text-xs tracking-widest uppercase text-[#7a8099] hover:text-[#eeeae0] transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="relative overflow-hidden group border border-[#c9a84c] text-[#c9a84c] text-xs tracking-widest uppercase px-4 py-2 transition-colors duration-200"
        >
          <span className="relative z-10">Get Started</span>
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </a>
      </div>
    </nav>
  );
}
