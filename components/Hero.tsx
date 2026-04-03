export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{
        background:
          "linear-gradient(to bottom, #0d0f14 0%, #0f1f2e 50%, #0d0f14 100%)",
      }}
    >
      <p className="text-xs tracking-[0.2em] uppercase text-[#c9a84c] mb-6">
        Trusted. Proven. Elite.
      </p>
      <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#eeeae0] leading-tight">
        Shaping the Next Generation
      </h1>
      <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#eeeae0] leading-tight italic">
        of Leaders.
      </h1>
      <p className="text-base md:text-lg text-[#7a8099] max-w-xl mt-5 leading-relaxed">
        We partner with schools to deliver world-class extracurricular programs
        in debate, business, STEM, and more.
      </p>
      <a
        href="#about"
        className="relative overflow-hidden group mt-8 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-widest uppercase px-6 py-3 transition-colors duration-200"
      >
        <span className="relative z-10">Learn More</span>
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </a>
    </section>
  );
}
