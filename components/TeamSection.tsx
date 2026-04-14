import { officers } from "@/data/officers";
import MonogramAvatar from "@/components/MonogramAvatar";

export default function TeamSection() {
  return (
    <section
      id="team"
      className="border-t border-[#1e2330] py-28 md:py-36 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-[#c9a84c]">
          Our Team
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#eeeae0] mt-3">
          Meet the Founders
        </h2>
        <p className="text-[#7a8099] text-sm leading-relaxed mt-4 max-w-lg">
          NextGen STEM was founded by three students at Western Reserve Academy
          who believe every student deserves access to the kind of mentorship
          that drives real results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {officers.map((member) => (
            <div
              key={member.slug}
              className="bg-[#13161e] border border-[#1e2330] p-6 rounded-sm"
            >
              {member.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-48 w-full object-cover rounded-sm mb-4"
                />
              ) : (
                <MonogramAvatar
                  initials={member.initials}
                  className="h-48 w-full rounded-sm mb-4"
                />
              )}
              <h3 className="font-serif text-xl text-[#eeeae0]">
                {member.name}
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#c9a84c] mt-1">
                {member.role}
              </p>
              <p className="text-[#7a8099] text-sm leading-relaxed mt-4">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
