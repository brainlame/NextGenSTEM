"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const team = [
  {
    name: "Maanav Patel",
    role: "Chief Operations Officer",
    image: "/maanav.png",
    bio: "Maanav led his team to the national tournament in Science Olympiad as team captain. He founded a science paper at WRA, volunteers as a coach for Hudson Middle School Science Olympiad, and is working on a melanoma cancer research project. He is also founding ProjectMIND, a mental health and neuroscience awareness chapter at WRA.",
  },
  {
    name: "Arav Mathur",
    role: "Chief Communications Officer",
    image: null as string | null,
    bio: "Arav is developing a cancer research project focused on A375 cancer cells. He is president and founder of the WRA chess team and has provided over 20 hours of chess tutoring to Western Reserve students. He holds multiple varsity positions, demonstrating strong balance of athletics and academics.",
  },
  {
    name: "Ronit Arora",
    role: "Chief Strategy & Research Officer",
    image: null as string | null,
    bio: "Ronit has founded multiple clubs and tutored hundreds of hours through WRA\u2019s Peer Tutoring program. He has won multiple 1st place state Math Field Day titles in West Virginia and previously managed a reselling business where he gained early experience in entrepreneurship and market research.",
  },
];

function TeamCard({
  name,
  role,
  bio,
  image,
}: {
  name: string;
  role: string;
  bio: string;
  image: string | null;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group bg-[#13161e] border border-[#1e2330] hover:border-[#c9a84c]/30 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(201,168,76,0.15)]">
      <div className="w-full h-64 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full bg-[#1a1e2a] flex items-center justify-center">
            <span className="text-xs uppercase tracking-widest text-[#7a8099]">
              Photo Coming Soon
            </span>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col">
        <h3 className="font-serif text-xl font-bold text-[#eeeae0]">
          {name}
        </h3>
        <p className="text-xs uppercase tracking-widest text-[#c9a84c] mt-1 mb-6 h-8">
          {role}
        </p>
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: open ? "500px" : "0px", opacity: open ? 1 : 0 }}
        >
          <p className="text-[#7a8099] text-sm leading-relaxed mb-6">{bio}</p>
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
            {team.map((member) => (
              <TeamCard
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
