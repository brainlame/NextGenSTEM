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
    image: null,
    bio: "Arav is developing a cancer research project focused on A375 cancer cells. He is president and founder of the WRA chess team and has provided over 20 hours of chess tutoring to Western Reserve students. He holds multiple varsity positions, demonstrating strong balance of athletics and academics.",
  },
  {
    name: "Ronit Arora",
    role: "Chief Strategy & Research Officer",
    image: null,
    bio: "Ronit has founded multiple clubs and tutored hundreds of hours through WRA\u2019s Peer Tutoring program. He has won multiple 1st place state Math Field Day titles in West Virginia and previously managed a reselling business where he gained early experience in entrepreneurship and market research.",
  },
];

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
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-[#13161e] border border-[#1e2330] p-6 rounded-sm"
            >
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-48 w-full object-cover rounded-sm mb-4"
                />
              ) : (
                <div className="bg-[#1a1e2a] border border-[#2a3040] h-48 w-full rounded-sm mb-4 flex items-center justify-center">
                  <span className="text-xs text-[#7a8099] uppercase tracking-widest">
                    Photo coming soon
                  </span>
                </div>
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
