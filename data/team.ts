/**
 * Team data — single source of truth for `/team`, per-coach routes,
 * sitemap, and per-coach OG images. Content mirrors what currently
 * ships on the team page; edits here flow everywhere.
 */

export type Specialization = "AMC" | "ScienceOlympiad" | "USACO";

export type TeamMember = Readonly<{
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string | null;
  specializations: readonly Specialization[];
  school: string;
  competitions: readonly Readonly<{ name: string; url?: string }>[];
}>;

export const TEAM: readonly TeamMember[] = Object.freeze([
  {
    slug: "maanav-patel",
    name: "Maanav Patel",
    role: "Chief Operations Officer",
    image: "/maanav.png",
    specializations: ["ScienceOlympiad"],
    school: "Western Reserve Academy",
    competitions: [
      { name: "Science Olympiad", url: "https://www.soinc.org/" },
    ],
    bio: "Maanav led his team to the national tournament in Science Olympiad as team captain. He founded a science paper at WRA, volunteers as a coach for Hudson Middle School Science Olympiad, and is working on a melanoma cancer research project. He is also founding ProjectMIND, a mental health and neuroscience awareness chapter at WRA.",
  },
  {
    slug: "arav-mathur",
    name: "Arav Mathur",
    role: "Chief Communications Officer",
    image: null,
    specializations: ["AMC"],
    school: "Western Reserve Academy",
    competitions: [
      { name: "AMC / MAA", url: "https://maa.org/" },
    ],
    bio: "Arav is developing a cancer research project focused on A375 cancer cells. He is president and founder of the WRA chess team and has provided over 20 hours of chess tutoring to Western Reserve students. He holds multiple varsity positions, demonstrating strong balance of athletics and academics.",
  },
  {
    slug: "ronit-arora",
    name: "Ronit Arora",
    role: "Chief Strategy & Research Officer",
    image: null,
    specializations: ["AMC", "USACO"],
    school: "Western Reserve Academy",
    competitions: [
      { name: "Math Field Day", url: "https://maa.org/" },
      { name: "USACO", url: "https://usaco.org/" },
    ],
    bio: "Ronit has founded multiple clubs and tutored hundreds of hours through WRA\u2019s Peer Tutoring program. He has won multiple 1st place state Math Field Day titles in West Virginia and previously managed a reselling business where he gained early experience in entrepreneurship and market research.",
  },
]);

export function findTeamMember(slug: string): TeamMember | undefined {
  return TEAM.find((m) => m.slug === slug);
}

const SPECIALIZATION_LABELS: Readonly<Record<Specialization, string>> =
  Object.freeze({
    AMC: "AMC",
    ScienceOlympiad: "Science Olympiad",
    USACO: "USACO",
  });

export function formatSpecializations(
  specs: readonly Specialization[],
): string {
  return specs.map((s) => SPECIALIZATION_LABELS[s]).join(", ");
}
