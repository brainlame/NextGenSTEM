type Stat = {
  figure: string;
  caption: string;
  source: string;
};

const STATS: readonly Stat[] = [
  {
    figure: "#1 Overall",
    caption: "Carnegie Mellon Invitational",
    source: "Science Olympiad Div C · 2026",
  },
  {
    figure: "Top 10",
    caption: "Science Olympiad Nationals",
    source: "Div B · 2025",
  },
  {
    figure: "USAMO Gold",
    caption: "Top 6% nationally",
    source: "MAA · 2024",
  },
];

export default function StatsBlock() {
  return (
    <section
      aria-labelledby="stats-title"
      className="relative px-6 py-24 md:py-36"
    >
      <h2 id="stats-title" className="sr-only">
        Competitive record
      </h2>
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#c9a84c] mb-14 md:mb-20">
          <span className="inline-block align-middle mr-3 h-px w-8 bg-[#c9a84c]/60" />
          Track Record
        </p>

        {/* Asymmetric 12-col grid: top-left, mid-right, bottom-left with offset */}
        <div className="grid grid-cols-12 gap-y-16 md:gap-y-24">
          {/* Stat 1 — top left, wide */}
          <figure className="col-span-12 md:col-span-7">
            <p className="font-serif italic text-[#eeeae0] leading-none text-6xl md:text-8xl tracking-tight">
              {STATS[0].figure}
            </p>
            <figcaption className="mt-5 text-[11px] tracking-[0.28em] uppercase text-[#a9b0c3]">
              {STATS[0].caption}
              <span className="block mt-1 text-[10px] tracking-[0.24em] text-[#7a8099] normal-case">
                {STATS[0].source}
              </span>
            </figcaption>
          </figure>

          {/* Stat 2 — mid right, offset */}
          <figure className="col-span-12 md:col-start-7 md:col-span-6 md:text-right">
            <p className="font-serif italic text-[#eeeae0] leading-none text-6xl md:text-8xl tracking-tight">
              {STATS[1].figure}
            </p>
            <figcaption className="mt-5 text-[11px] tracking-[0.28em] uppercase text-[#a9b0c3]">
              {STATS[1].caption}
              <span className="block mt-1 text-[10px] tracking-[0.24em] text-[#7a8099] normal-case">
                {STATS[1].source}
              </span>
            </figcaption>
          </figure>

          {/* Stat 3 — bottom left, slight offset */}
          <figure className="col-span-12 md:col-start-2 md:col-span-7">
            <p className="font-serif italic text-[#eeeae0] leading-none text-6xl md:text-8xl tracking-tight">
              {STATS[2].figure}
            </p>
            <figcaption className="mt-5 text-[11px] tracking-[0.28em] uppercase text-[#a9b0c3]">
              {STATS[2].caption}
              <span className="block mt-1 text-[10px] tracking-[0.24em] text-[#7a8099] normal-case">
                {STATS[2].source}
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
