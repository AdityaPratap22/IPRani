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
    name: "Rani Gupta",
    slug: "rani-gupta",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Rani founded IP Rani to give growing businesses access to the same calibre of IP and legal counsel as large enterprises. She leads the firm's IP strategy and advisory practice.",
    focus: ["IP Advisory", "Trademark", "Startup Legal"],
  },
  {
    name: "Amit Verma",
    slug: "amit-verma",
    role: "Head of Practice",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    bio: "Amit heads the firm's Corporate Legal practice, advising founders on company formation, contracts and compliance from incorporation through scale.",
    focus: ["Corporate Legal", "Contract Drafting", "Company Formation"],
  },
  {
    name: "Neha Sharma",
    slug: "neha-sharma",
    role: "Head - Legal",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    bio: "Neha leads the Litigation practice, representing clients across IP enforcement, commercial disputes and banking recovery matters.",
    focus: ["Litigation", "IP Enforcement", "Banking & Finance"],
  },
  {
    name: "Karan Mehta",
    slug: "karan-mehta",
    role: "Senior Associate - IP",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    bio: "Karan works across patent and design filings, helping product and R&D teams build defensible IP portfolios.",
    focus: ["Patent", "Design", "IP Advisory"],
  },
  {
    name: "Priya Nair",
    slug: "priya-nair",
    role: "Senior Associate - Corporate",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    bio: "Priya advises startups and SMEs on incorporation, ROC compliance and day-to-day contract drafting needs.",
    focus: ["Company Formation", "ROC & Compliance", "Contract Drafting"],
  },
  {
    name: "Rohan Kapoor",
    slug: "rohan-kapoor",
    role: "Associate - Litigation",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    bio: "Rohan represents clients in civil, criminal and property litigation matters, with a focus on clear case strategy.",
    focus: ["Civil / Criminal Litigation", "Property Litigation", "Matrimonial"],
  },
];

export function findTeamMember(slug: string) {
  return team.find((t) => t.slug === slug);
}
