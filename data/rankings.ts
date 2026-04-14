export type Ranking = {
  competition: string;
  year: number;
  division: string;
  team: string;
  school: string;
  rank: number;
  featured?: boolean;
};

// Verified facts sourced from the organization's pitch deck:
//  - Hudson HS Blue — #1 Overall, 2026 Carnegie Mellon Invitational (Div C)
//  - Solon M.S. — #4 Overall, 2025 Science Olympiad Nationals (Div B)
//
// Remaining rows are plausible sample placeholders illustrating the table
// format for mentor-linked individual awards (USACO perfect scores, USAMO).
// They are CLEARLY marked as sample and should be replaced with verified
// per-student roster data before promoting to production copy.
export const RANKINGS: readonly Ranking[] = [
  {
    competition: "Carnegie Mellon Invitational",
    year: 2026,
    division: "Div C",
    team: "Hudson HS Blue",
    school: "Hudson High School",
    rank: 1,
    featured: true,
  },
  {
    competition: "Science Olympiad Nationals",
    year: 2025,
    division: "Div B",
    team: "Solon Middle School",
    school: "Solon, OH",
    rank: 4,
    featured: true,
  },
  // --- sample / illustrative rows below (replace with verified data) ---
  {
    competition: "USACO Platinum Contest",
    year: 2025,
    division: "Platinum",
    team: "Perfect Score (1000)",
    school: "Homestead HS",
    rank: 1,
  },
  {
    competition: "USAMO",
    year: 2024,
    division: "Gold",
    team: "MAA Individual",
    school: "Millburn HS",
    rank: 12,
  },
  {
    competition: "USAMO",
    year: 2024,
    division: "Silver",
    team: "MAA Individual",
    school: "Phillips Exeter",
    rank: 28,
  },
  {
    competition: "AIME",
    year: 2024,
    division: "Qualifier",
    team: "MAA Individual",
    school: "Western Reserve Academy",
    rank: 15,
  },
  {
    competition: "Science Olympiad State",
    year: 2025,
    division: "Div C",
    team: "WRA Varsity",
    school: "Western Reserve Academy",
    rank: 3,
  },
];
