export default function PantheonSection() {
  return (
    <section
      id="network"
      className="border-t border-[#1e2330] py-28 md:py-36 px-6 text-center"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-[#c9a84c]">
          Our Network
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#eeeae0] mt-3">
          In Partnership with Pantheon Prep
        </h2>
        <p className="text-[#7a8099] text-sm max-w-lg mx-auto mt-4 leading-relaxed">
          NextGen STEM operates in partnership with Pantheon Prep, a nationally
          recognized education infrastructure organization serving 23 countries
          and over 11,000 students.
        </p>
        <a
          href="https://pantheonprep.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden group inline-block mt-8 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-widest uppercase px-6 py-3 transition-colors duration-200"
        >
          <span className="relative z-10">Visit Pantheon Prep &rarr;</span>
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </a>
      </div>
    </section>
  );
}
