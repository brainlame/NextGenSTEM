import { officers } from "@/data/officers";

export default function TeamTeaser() {
  return (
    <section
      id="team-teaser"
      className="border-t border-[#1e2330] py-20 md:py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#c9a84c]">
              Founders
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#eeeae0] mt-3">
              The students behind the work.
            </h2>
          </div>
          <a
            href="/team"
            className="text-xs tracking-widest uppercase text-[#c9a84c] hover:text-[#eeeae0] transition-colors duration-200 self-start md:self-auto"
          >
            Meet the team &rarr;
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-8">
          {officers.map((o) => (
            <li key={o.slug} className="flex flex-col">
              <p className="font-serif text-lg text-[#eeeae0]">{o.name}</p>
              <p className="text-xs uppercase tracking-widest text-[#7a8099] mt-1">
                {o.shortRole}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
