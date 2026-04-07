"use client";

import { useState } from "react";

const programs = [
  {
    label: "AMC PREP",
    title: "AMC Preparation",
    body: "Structured preparation for the AMC 8, AMC 10, and AMC 12. Our mentors have competed at the highest levels of math competition and provide targeted practice, strategy, and problem-solving techniques.",
  },
  {
    label: "SCIENCE OLYMPIAD",
    title: "Science Olympiad Support",
    body: "Coaching and resources for Science Olympiad competitors. Led by team captains with national tournament experience, we help students develop the technical knowledge and teamwork needed to win.",
  },
  {
    label: "USACO",
    title: "USACO Training",
    body: "Algorithmic training for USACO Bronze through Platinum. Our mentors bring hands-on competitive programming experience to help students tackle challenging problems and advance through the divisions.",
  },
];

function ProgramCard({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group bg-[#13161e] border border-[#1e2330] hover:border-[#c9a84c]/30 p-6 rounded-sm transition-all duration-300 hover:shadow-[0_0_50px_rgba(201,168,76,0.15)] flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs tracking-widest uppercase text-[#c9a84c]">
          &mdash; {label}
        </span>
        <span className="text-[#7a8099] group-hover:text-[#c9a84c] transition-colors duration-200 text-lg">
          ⬡
        </span>
      </div>
      <h3 className="font-serif text-xl font-bold text-[#eeeae0] mb-4">
        {title}
      </h3>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "300px" : "0px", opacity: open ? 1 : 0 }}
      >
        <p className="text-[#7a8099] text-sm leading-relaxed mb-6">{body}</p>
      </div>
      <div className="mt-auto">
        <button
          onClick={() => setOpen(!open)}
          className="relative overflow-hidden w-full border border-[#c9a84c] text-[#c9a84c] text-xs tracking-widest uppercase px-6 py-3 transition-colors duration-200 group/btn"
        >
          <span className="relative z-10">
            {open ? "CLOSE \u2190" : "LEARN MORE \u2192"}
          </span>
          <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </button>
      </div>
    </div>
  );
}

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
          Our programs are led by experienced competitors who bring firsthand
          knowledge of what it takes to succeed at the highest level.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 items-start">
          {programs.map((program) => (
            <ProgramCard
              key={program.label}
              label={program.label}
              title={program.title}
              body={program.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
