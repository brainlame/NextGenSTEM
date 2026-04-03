const programs = [
  { label: "PROGRAM 01", title: "Debate & Public Speaking" },
  { label: "PROGRAM 02", title: "Business & Entrepreneurship" },
  { label: "PROGRAM 03", title: "STEM & Computing" },
  { label: "PROGRAM 04", title: "Leadership Development" },
];

export default function ProgramsSection() {
  return (
    <section
      id="programs"
      className="border-t border-[#1e2330] py-28 md:py-36 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-[#c9a84c]">
          Our Programs
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#eeeae0] mt-3">
          Programs Built for Excellence
        </h2>
        <p className="text-[#7a8099] text-sm leading-relaxed mt-4 max-w-lg">
          Our programs are developed in partnership with Pantheon Prep&apos;s
          national network of mentors. Specific offerings coming soon.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {programs.map((program) => (
            <div
              key={program.label}
              className="group bg-[#13161e] border border-[#1e2330] p-6 rounded-sm transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.07)]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs tracking-widest uppercase text-[#c9a84c]">
                  &mdash; {program.label}
                </span>
                <span className="text-[#7a8099] group-hover:text-[#c9a84c] transition-colors duration-200">
                  ⬡
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#eeeae0] mb-3">
                {program.title}
              </h3>
              <p className="text-[#7a8099] text-sm leading-relaxed mb-6">
                Program description placeholder. Details about this program will
                be added once confirmed.
              </p>
              <button className="relative overflow-hidden w-full border border-[#c9a84c] text-[#c9a84c] text-xs tracking-widest uppercase px-6 py-3 transition-colors duration-200 group/btn">
                <span className="relative z-10">Learn More &rarr;</span>
                <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
