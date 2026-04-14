"use client";

import Link from "next/link";
import { useState } from "react";
import type { TeamMember } from "@/data/team";

/**
 * Client-side team card. Route-private (under `_components`) so it does
 * not become part of any public export surface. Kept co-located with the
 * team route to avoid touching shared `components/` used by PR #3.
 */
export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="group bg-[#13161e] border border-[#1e2330] hover:border-[#c9a84c]/30 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(201,168,76,0.15)]">
      <div className="w-full h-64 overflow-hidden">
        {member.image ? (
          // eslint-disable-next-line @next/next/no-img-element -- matches existing team-page pattern; PR #3 handles next/image migration
          <img
            src={member.image}
            alt={member.name}
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
        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="relative overflow-hidden w-full border border-[#c9a84c] text-[#c9a84c] text-xs tracking-widest uppercase px-6 py-3 transition-colors duration-200 group/btn"
          >
            <span className="relative z-10">
              {open ? "CLOSE \u2190" : "MORE INFO \u2192"}
            </span>
            <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </button>
          <Link
            href={`/team/${member.slug}`}
            className="w-full text-center text-xs tracking-widest uppercase text-[#7a8099] hover:text-[#c9a84c] transition-colors duration-200 py-2"
          >
            View Profile &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
