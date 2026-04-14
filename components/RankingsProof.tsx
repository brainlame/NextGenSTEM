import { RANKINGS, type Ranking } from "@/data/rankings";

function formatRank(n: number): string {
  if (n === 1) return "1st";
  if (n === 2) return "2nd";
  if (n === 3) return "3rd";
  return `${n}th`;
}

function Row({ r }: { r: Ranking }) {
  const baseCell = "py-5 px-4 md:px-6 align-baseline";
  const featured = r.featured;
  return (
    <tr
      className={
        "border-b border-[#1e2330] last:border-b-0 " +
        (featured
          ? "bg-gradient-to-r from-[#c9a84c]/10 via-[#c9a84c]/5 to-transparent"
          : "hover:bg-[#12151d]/60 transition-colors")
      }
    >
      <td className={baseCell}>
        <span
          className={
            "font-serif italic text-2xl md:text-3xl " +
            (featured ? "text-[#c9a84c]" : "text-[#eeeae0]")
          }
        >
          {formatRank(r.rank)}
        </span>
      </td>
      <td className={baseCell}>
        <p className="text-[#eeeae0] text-sm md:text-base">{r.competition}</p>
        <p className="text-[10px] md:text-xs tracking-[0.22em] uppercase text-[#7a8099] mt-1">
          {r.division} · {r.year}
        </p>
      </td>
      <td className={baseCell}>
        <p className="text-[#eeeae0] text-sm md:text-base">{r.team}</p>
        <p className="text-[11px] md:text-xs text-[#7a8099] mt-1">{r.school}</p>
      </td>
    </tr>
  );
}

export default function RankingsProof() {
  return (
    <section
      id="rankings"
      aria-labelledby="rankings-title"
      className="px-6 py-28 md:py-36 border-t border-[#1e2330]"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] tracking-[0.3em] uppercase text-[#c9a84c] mb-3">
          <span className="inline-block align-middle mr-3 h-px w-8 bg-[#c9a84c]/60" />
          Proof
        </p>
        <h2
          id="rankings-title"
          className="font-serif italic text-3xl md:text-5xl text-[#eeeae0] leading-tight"
        >
          Recent Results
        </h2>
        <p className="text-[#7a8099] text-sm md:text-base max-w-xl leading-relaxed mt-4">
          A small sample of recent finishes from teams and students our mentors
          have coached or competed alongside.
        </p>

        <div className="mt-12 border border-[#1e2330] bg-[#0f1220] overflow-hidden">
          <table className="w-full text-left border-collapse">
            <caption className="sr-only">
              Recent competition results by NextGen STEM mentors and their
              students.
            </caption>
            <thead>
              <tr className="border-b border-[#1e2330] bg-[#0c0e16]">
                <th
                  scope="col"
                  className="py-4 px-4 md:px-6 text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-[#7a8099] font-medium"
                >
                  Rank
                </th>
                <th
                  scope="col"
                  className="py-4 px-4 md:px-6 text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-[#7a8099] font-medium"
                >
                  Competition
                </th>
                <th
                  scope="col"
                  className="py-4 px-4 md:px-6 text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-[#7a8099] font-medium"
                >
                  Team / School
                </th>
              </tr>
            </thead>
            <tbody>
              {RANKINGS.map((r) => (
                <Row key={`${r.competition}-${r.year}-${r.team}`} r={r} />
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[10px] tracking-[0.22em] uppercase text-[#7a8099] mt-6">
          Highlighted rows denote featured results.
        </p>
      </div>
    </section>
  );
}
