const stats = [
  { value: "3", label: "Founding Members" },
  { value: "AMC", label: "Math Competition" },
  { value: "USACO", label: "CS Olympiad" },
  { value: "SciOly", label: "Science Olympiad" },
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
            Student-Led. Competition-Proven. Built for Impact.
          </h2>
          <p className="text-[#7a8099] leading-relaxed mt-4 text-sm">
            NextGen STEM is a student-led organization dedicated to helping
            middle and high school students excel in competitive STEM fields.
            Our team works with experienced competitors from AMC, Science
            Olympiad, and USACO who bring firsthand knowledge of what it takes
            to succeed at the highest level.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className={`font-serif font-bold text-[#eeeae0] ${/^\d/.test(stat.value) ? "text-4xl" : "text-2xl"}`}>
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
