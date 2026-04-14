"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MonogramAvatar from "@/components/MonogramAvatar";
import { officers, type Officer } from "@/data/officers";

function TeamCard({ member }: { member: Officer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group bg-[#13161e] border border-[#1e2330] hover:border-[#c9a84c]/30 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(201,168,76,0.15)]">
      <div className="w-full h-64 overflow-hidden">
        {member.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <MonogramAvatar
            initials={member.initials}
            className="w-full h-full"
          />
        )}
      </div>
      <div className="p-6 flex flex-col">
        <h3 className="font-serif text-xl font-bold text-[#eeeae0]">
          {member.name}
        </h3>
        <p className="text-xs uppercase tracking-widest text-[#c9a84c] mt-1 mb-6 h-8">
          {member.role}
        </p>
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: open ? "500px" : "0px", opacity: open ? 1 : 0 }}
        >
          <p className="text-[#7a8099] text-sm leading-relaxed mb-6">
            {member.bio}
          </p>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="relative overflow-hidden w-full border border-[#c9a84c] text-[#c9a84c] text-xs tracking-widest uppercase px-6 py-3 transition-colors duration-200 group/btn"
        >
          <span className="relative z-10">
            {open ? "CLOSE \u2190" : "MORE INFO \u2192"}
          </span>
          <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </button>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#c9a84c] mb-3">
            OUR TEAM
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#eeeae0] mb-4">
            Meet the Founders
          </h1>
          <p className="text-[#7a8099] text-sm max-w-xl leading-relaxed mb-16">
            NextGen STEM was founded by three students at Western Reserve
            Academy who believe every student deserves access to the kind of
            mentorship that drives real results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {officers.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
