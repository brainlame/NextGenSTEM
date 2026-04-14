/**
 * Program data — single source of truth for `/programs/[slug]`,
 * sitemap, and the Course JSON-LD on each program page.
 */

export type ProgramSection = Readonly<{
  heading: string;
  body: string;
}>;

export type Program = Readonly<{
  slug: "amc" | "science-olympiad" | "usaco";
  label: string;
  title: string;
  tagline: string;
  summary: string;
  teaches: readonly string[];
  competencyRequired: readonly string[];
  providerSameAs: string;
  sections: readonly ProgramSection[];
}>;

export const PROGRAMS: readonly Program[] = Object.freeze([
  {
    slug: "amc",
    label: "AMC PREP",
    title: "AMC Preparation",
    tagline: "Problem-solving that compounds.",
    summary:
      "Structured preparation for the AMC 8, AMC 10, and AMC 12, plus a path into AIME and beyond. Mentors with firsthand competition experience coach students on technique, pacing, and the intuition that separates honor-roll scores from top percentiles.",
    teaches: [
      "Number theory and modular arithmetic",
      "Combinatorics and counting strategies",
      "Geometry and coordinate bash techniques",
      "Algebraic manipulation under time pressure",
    ],
    competencyRequired: [
      "Algebra I fluency",
      "Comfort with geometry proofs",
    ],
    providerSameAs: "https://maa.org/",
    sections: [
      {
        heading: "What you will cover",
        body: "Weekly problem sets drawn from past AMC contests, timed mock rounds, and debrief sessions where mentors walk through the elegant solution, the brute-force solution, and the one you can actually reproduce under pressure.",
      },
      {
        heading: "Who it is for",
        body: "Middle-school through high-school students aiming for AMC qualification, AIME, and eventual USAMO consideration.",
      },
    ],
  },
  {
    slug: "science-olympiad",
    label: "SCIENCE OLYMPIAD",
    title: "Science Olympiad Support",
    tagline: "Team-level execution, event-level depth.",
    summary:
      "Coaching and resources for Science Olympiad competitors led by former team captains with national tournament experience. Students build the technical knowledge, study workflow, and team dynamics needed to win regionals and push into the national conversation.",
    teaches: [
      "Event-specific content mastery across biology, chemistry, physics, and engineering",
      "Lab practical skills and timed-test strategy",
      "Build-event design, prototyping, and documentation",
      "Team captaincy and roster-management fundamentals",
    ],
    competencyRequired: [
      "Curiosity across multiple science disciplines",
      "Willingness to specialize in 2\u20133 events per season",
    ],
    providerSameAs: "https://www.soinc.org/",
    sections: [
      {
        heading: "What you will cover",
        body: "Per-event study guides, cheat-sheet construction, and practice with retired regional and state tests. Build events get design reviews and iteration support from mentors who have competed nationally.",
      },
      {
        heading: "Who it is for",
        body: "Division B and Division C competitors looking to advance past regionals and place at state or nationals.",
      },
    ],
  },
  {
    slug: "usaco",
    label: "USACO",
    title: "USACO Training",
    tagline: "From Bronze to Platinum, one algorithm at a time.",
    summary:
      "Algorithmic training for USACO Bronze through Platinum. Mentors with hands-on competitive programming experience help students work through classic problem patterns and the division-specific techniques that drive promotion.",
    teaches: [
      "Ad-hoc and simulation patterns (Bronze)",
      "Greedy, sorting, and complete search (Silver)",
      "Dynamic programming and graph algorithms (Gold)",
      "Segment trees, flows, and advanced DP (Platinum)",
    ],
    competencyRequired: [
      "Working knowledge of C++, Java, or Python",
      "Comfort reading problem statements and writing solutions under contest rules",
    ],
    providerSameAs: "https://usaco.org/",
    sections: [
      {
        heading: "What you will cover",
        body: "Weekly problem assignments aligned to the current USACO division, contest post-mortems, and targeted drills on the specific patterns blocking promotion.",
      },
      {
        heading: "Who it is for",
        body: "Students at any USACO division who want a structured path to the next tier, plus beginners who want a guided on-ramp into competitive programming.",
      },
    ],
  },
]);

export function findProgram(slug: string): Program | undefined {
  return PROGRAMS.find((p) => p.slug === slug);
}
