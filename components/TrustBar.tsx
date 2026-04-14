const PARTNERS = ["Science Olympiad", "MAA / AMC", "USACO"] as const;

export default function TrustBar() {
  return (
    <section
      aria-labelledby="trustbar-title"
      className="border-y border-[#1e2330] bg-[#0d0f14]"
    >
      <div className="max-w-6xl mx-auto px-6 py-6 md:py-7">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-8">
          <p
            id="trustbar-title"
            className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#7a8099]"
          >
            Our students compete in
          </p>
          <ul
            className="flex flex-wrap items-center justify-center gap-x-4 md:gap-x-8 gap-y-2"
            aria-label="Partner competitions"
          >
            {PARTNERS.map((name, i) => (
              <li key={name} className="flex items-center gap-4 md:gap-8">
                <span className="text-[11px] md:text-xs tracking-[0.32em] uppercase text-[#eeeae0]/90">
                  {name}
                </span>
                {i < PARTNERS.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="text-[#c9a84c]/70 text-sm"
                  >
                    ·
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
