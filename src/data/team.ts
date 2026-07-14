export type TeamMember = {
  name: string;
  slug: string;
  role: string;
  image: string;
  bio: string;
  focus: string[];
};

export const team: TeamMember[] = [
  {
    name: "NK Sethi",
    slug: "nk-sethi",
    role: "Founder",
    image: "/team/nk-sethi.jpg",
    bio: "NK Sethi founded IP Rani with a vision to provide world-class intellectual property and corporate legal solutions. With decades of litigation and advisory experience, he guides the firm's overall direction and major enforcement strategies.",
    focus: ["IP Enforcement", "Commercial Litigation", "Corporate Law"],
  },
  {
    name: "Prashant Sethi",
    slug: "prashant-sethi",
    role: "Managing Partner",
    image: "/team/prashant-sethi.jpg",
    bio: "Prashant leads the firm's client operations and portfolio growth strategy. He specializes in corporate structuring, complex trademark prosecution, and patent strategy for high-growth tech companies and startup ecosystems.",
    focus: ["Trademark Prosecution", "Patent Strategy", "Startup Legal"],
  },
  {
    name: "Sushant Shekhar",
    slug: "sushant-shekhar",
    role: "Co-Founder",
    image: "/team/sushant-shekhar.jpg",
    bio: "Sushant co-founded IP Rani to bridge the gap between complex legal regulations and business execution. He specializes in commercial contract drafting, IP licensing agreements, technology transfer, and statutory corporate compliance.",
    focus: ["Contracts & Agreements", "ROC Compliance", "IP Licensing"],
  },
];

export function findTeamMember(slug: string) {
  return team.find((t) => t.slug === slug);
}
