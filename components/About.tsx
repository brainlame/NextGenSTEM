const stats = [
  { value: "11,000+", label: "Students Taught" },
  { value: "23", label: "Countries" },
  { value: "50+", label: "National Awards" },
  { value: "98%", label: "School Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="pt-28 md:pt-36 pb-28 md:pb-36 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-[#c9a84c]">
            Who We Are
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#eeeae0] mt-3 leading-snug">
            Built for Schools. Designed for Impact.
          </h2>
          <p className="text-[#7a8099] leading-relaxed mt-4 text-sm">
            We believe every student deserves access to elite-level academic
            mentorship — regardless of their zip code. Our team of mentors from
            top universities works directly with schools to build sustainable,
            results-driven programs.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-4xl font-bold text-[#eeeae0]">
                {stat.value}
              </p>
              <p className="text-xs text-[#7a8099] uppercase tracking-widest mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
