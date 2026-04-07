export default function SlidesSection() {
  return (
    <section
      id="deck"
      className="border-t border-[#1e2330] py-28 md:py-36 px-6 text-center"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-[#c9a84c]">
          Program Overview
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#eeeae0] mt-3">
          Read Our Full Program Deck
        </h2>
        <p className="text-[#7a8099] text-sm max-w-md mx-auto mt-4">
          Explore our programs, team, and approach in our full program
          overview.
        </p>
        <a
          href="https://docs.google.com/presentation/d/1MQ9h2y6Y3mzGxGr1Syy-WrF-khW44vD2S92BOS49QN0/edit?slide=id.g35a4699e027_0_999#slide=id.g35a4699e027_0_999"
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden group inline-block mt-8 border border-[#c9a84c] text-[#c9a84c] text-xs tracking-widest uppercase px-6 py-3 transition-colors duration-200"
        >
          <span className="relative z-10">View Full Deck &rarr;</span>
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </a>
        <p className="text-xs text-[#7a8099] mt-3">Opens in Google Slides</p>
      </div>
    </section>
  );
}
