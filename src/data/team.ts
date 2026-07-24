export type TeamMember = {
  name: string;
  slug: string;
  role: string;
  image: string;
  bio: string;
  extendedBio: string;
  focus: string[];
  highlights: { label: string; value: string }[];
  qualifications: string[];
  services: string[];
};

export const team: TeamMember[] = [
  {
    name: "N. K. Sethi",
    slug: "nk-sethi",
    role: "Founder & Registered IP Attorney",
    image: "/team/nk-sethi.jpg",
    bio: "N. K. Sethi is the Founder of IP Rani. A Registered IP Attorney and SIPP Facilitator, he mainly practices in Civil, Criminal, Corporate, and Matrimonial law.",
    extendedBio:
      "N. K. Sethi is the Founder of IP Rani. Enrolled as an advocate in 1990, he is a Registered IP Attorney and SIPP Facilitator who mainly practices in Civil, Criminal, Corporate, and Matrimonial law.",
    focus: ["Civil Litigation", "Criminal Litigation", "Corporate Law", "Matrimonial Law"],
    highlights: [
      { label: "Enrolled Advocate", value: "1990" },
      { label: "Role", value: "Founder" },
      { label: "Status", value: "Registered IP Attorney" },
      { label: "SIPP", value: "SIPP Facilitator" },
    ],
    qualifications: [
      "LL.B",
      "Registered Trademark Attorney",
      "Official SIPP Facilitator",
      "Enrolled Advocate (1990) — Bar Council of India",
    ],
    services: [
      "Civil & Criminal Litigation",
      "Corporate Legal Advisory",
      "Matrimonial & Family Disputes",
      "Intellectual Property Strategy",
    ],
  },
  {
    name: "Sushant Shekhar",
    slug: "sushant-shekhar",
    role: "Co-Founder & Registered IP Attorney",
    image: "/team/sushant-shekhar.jpg",
    bio: "Sushant Shekhar is the Co-Founder of IP Rani. A Registered IP Attorney and SIPP Facilitator, he mainly practices in litigation of commercial disputes, Banking (3,500+ cases), DRT, and NCLT.",
    extendedBio:
      "Sushant Shekhar is the Co-Founder of IP Rani. Enrolled as an advocate in 2012, he is a Registered IP Attorney and SIPP Facilitator practicing mainly in litigation of commercial disputes, Banking litigation, DRT, and NCLT matters. Over his career, he has handled more than 3,500+ bank litigation cases.",
    focus: ["Banking Litigation", "Commercial Disputes", "DRT Proceedings", "NCLT Matters"],
    highlights: [
      { label: "Bank Cases", value: "3500+" },
      { label: "Enrolled Advocate", value: "2012" },
      { label: "Role", value: "Co-Founder" },
      { label: "Status", value: "Registered IP Attorney" },
    ],
    qualifications: [
      "LL.M",
      "B.A. LL.B",
      "Registered Trademark Attorney",
      "Official SIPP Facilitator",
      "Enrolled Advocate (2012) — Bar Council of India",
    ],
    services: [
      "Banking & Recovery Litigation",
      "Commercial Disputes Litigation",
      "DRT Proceedings & Appeals",
      "NCLT & Insolvency Matters",
    ],
  },
  {
    name: "Prashant Sethi",
    slug: "prashant-sethi",
    role: "Managing Partner & Registered IP Attorney",
    image: "/team/prashant-sethi.jpg",
    bio: "Prashant Sethi is the Managing Partner of IP Rani. A Registered IP Attorney, he has expertise in IP & Commercial Litigation and Prosecution, including Drafting, Hearings, Oppositions, IP licensing, and International Filings.",
    extendedBio:
      "Prashant Sethi is the Managing Partner of IP Rani and a Registered IP Attorney. Enrolled as an advocate in 2022, he has expertise in IP & Commercial Litigation and Prosecution. His practice includes Drafting, Hearings, Oppositions, IP licensing, and International Filings of Trademark, Patent, and Designs.",
    focus: ["IP & Commercial Litigation", "IP Prosecution & Hearings", "International Filings & Licensing"],
    highlights: [
      { label: "Enrolled Advocate", value: "2022" },
      { label: "Role", value: "Managing Partner" },
      { label: "Status", value: "Registered IP Attorney" },
      { label: "Focus", value: "IP & Commercial" },
    ],
    qualifications: [
      "B.A. LL.B",
      "Registered Trademark Attorney",
      "Official SIPP Facilitator",
      "Enrolled Advocate (2022) — Bar Council of India",
    ],
    services: [
      "Trademark, Patent & Design Prosecution & Drafting",
      "IP & Commercial Litigation",
      "Registry Hearings & Oppositions",
      "International Filings (Trademark, Patent & Designs)",
      "IP Licensing & Assignment",
    ],
  },
  {
    name: "Mohit Gautam",
    slug: "mohit-gautam",
    role: "Associate Advocate",
    image: "/team/mohit-gautam.jpg",
    bio: "Mohit Gautam is an Associate Advocate at IP Rani, enrolled as an advocate in 2024.",
    extendedBio:
      "Mohit Gautam is an Associate Advocate at IP Rani. Enrolled as an advocate in 2024, he works across intellectual property and legal practice matters.",
    focus: ["IP Prosecution", "Legal Practice"],
    highlights: [
      { label: "Designation", value: "Associate Advocate" },
      { label: "Enrolled Advocate", value: "2024" },
    ],
    qualifications: [
      "B.A. LL.B",
      "Enrolled Advocate (2024) — Bar Council of India",
    ],
    services: [
      "Intellectual Property Support",
      "Legal Practice Support",
    ],
  },
  {
    name: "Sujal Joshi",
    slug: "sujal-joshi",
    role: "Associate Advocate",
    image: "/team/sujal-joshi.jpg",
    bio: "Sujal Joshi is an Associate Advocate at IP Rani, enrolled as an advocate in 2026.",
    extendedBio:
      "Sujal Joshi is an Associate Advocate at IP Rani. Enrolled as an advocate in 2026, he works across legal practice matters.",
    focus: ["Litigation & Legal Practice"],
    highlights: [
      { label: "Designation", value: "Associate Advocate" },
      { label: "Enrolled Advocate", value: "2026" },
    ],
    qualifications: [
      "LL.B",
      "Enrolled Advocate (2026) — Bar Council of India",
    ],
    services: [
      "Litigation Support",
      "Legal Practice Support",
    ],
  },
  {
    name: "Shiyanc Kumar Singh",
    slug: "shiyanc-singh",
    role: "Associate Advocate",
    image: "/team/shiyanc-singh.jpg",
    bio: "Shiyanc Kumar Singh is an Associate Advocate at IP Rani, enrolled as an advocate in 2024.",
    extendedBio:
      "Shiyanc Kumar Singh is an Associate Advocate at IP Rani. Enrolled as an advocate in 2024, he works across civil litigation and legal practice matters.",
    focus: ["Civil Litigation & Legal Practice"],
    highlights: [
      { label: "Designation", value: "Associate Advocate" },
      { label: "Enrolled Advocate", value: "2024" },
    ],
    qualifications: [
      "B.A. LL.B",
      "Enrolled Advocate (2024) — Bar Council of India",
    ],
    services: [
      "Civil Litigation Support",
      "Legal Practice Support",
    ],
  },
];

export function findTeamMember(slug: string) {
  return team.find((t) => t.slug === slug);
}
