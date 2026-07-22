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
    bio: "N. K. Sethi founded IP Rani with a vision to provide world-class intellectual property and corporate legal solutions. He mainly practices in Civil, Criminal, Corporate, and Matrimonial law.",
    extendedBio:
      "With over three decades of experience in Indian courts and tribunals, N. K. Sethi is the founder of IP Rani. Enrolled as an advocate in 1990, he is a Registered IP Attorney and SIPP Facilitator who mainly practices in Civil, Criminal, Corporate, and Matrimonial law. He has successfully represented corporate and private clients before the Supreme Court of India, the Delhi High Court, and various district courts. His deep expertise in civil disputes, corporate compliance, trials, and matrimonial proceedings has earned him a stellar reputation. He also advises boards on brand protection and enforcement strategies in India.",
    focus: ["Civil & Criminal Litigation", "Corporate & Matrimonial Law", "IP Enforcement"],
    highlights: [
      { label: "Experience", value: "35+ Years" },
      { label: "Cases Led", value: "500+" },
      { label: "Courts Practiced", value: "15+" },
      { label: "Countries Served", value: "50+" },
    ],
    qualifications: [
      "LL.B",
      "Registered Trademark Attorney",
      "Official SIPP Facilitator (Startups IP Protection)",
      "Enrolled Advocate (1990) — Bar Council of India",
      "Member — International Trademark Association (INTA)",
    ],
    services: [
      "Civil & Commercial Litigation Representation",
      "IP Infringement & Enforcement Strategy",
      "Criminal Defense & Trial Representation",
      "Matrimonial & Family Dispute Resolution",
      "Trademark & Patent Litigation",
      "Corporate Legal Board Advisory",
    ],
  },
  {
    name: "Prashant Sethi",
    slug: "prashant-sethi",
    role: "Managing Partner & Registered IP Attorney",
    image: "/team/prashant-sethi.jpg",
    bio: "Prashant Sethi is the Managing Partner of IP Rani. A Registered IP Attorney, he specializes in IP & Commercial Litigation and Prosecution, including trademark, patent, and design filings.",
    extendedBio:
      "Prashant Sethi is the Managing Partner of IP Rani and a Registered IP Attorney. Enrolled as an advocate in 2022, he has expertise in IP & Commercial Litigation and Prosecution, including drafting, hearings, oppositions, IP licensing, and international filings of Trademark, Patent, and Designs. He also advises startups on brand protection strategies and business contracts.",
    focus: ["IP Prosecution", "IP & Commercial Litigation", "Startup Advisory"],
    highlights: [
      { label: "Trademarks Filed", value: "1000+" },
      { label: "Startups Advised", value: "200+" },
      { label: "Patents Drafted", value: "150+" },
      { label: "Success Rate", value: "95%" },
    ],
    qualifications: [
      "B.A. LL.B",
      "Registered Trademark Attorney",
      "Official SIPP Facilitator (Startups IP Protection)",
      "Enrolled Advocate (2022) — Bar Council of India",
    ],
    services: [
      "Trademark & Patent Search, Filing & Prosecution",
      "IP & Commercial Contract Litigation",
      "Trademark Objection & Opposition Hearings",
      "Startup Entity Incorporation & ESOP Design",
      "Founder Agreements & DPIIT Registrations",
      "Patent Claims Drafting & Office Action Responses",
    ],
  },
  {
    name: "Sushant Shekhar",
    slug: "sushant-shekhar",
    role: "Co-Founder & Registered IP Attorney",
    image: "/team/sushant-shekhar.jpg",
    bio: "Sushant Shekhar is the Co-Founder of IP Rani. A Registered IP Attorney and SIPP Facilitator, he mainly practices in commercial disputes, banking litigation, and matters before the DRT and NCLT.",
    extendedBio:
      "Sushant Shekhar is the Co-Founder of IP Rani. Enrolled as an advocate in 2012, he is a Registered IP Attorney and SIPP Facilitator practicing mainly in commercial disputes, banking litigation, and insolvency matters. He regularly represents financial institutions and corporate clients before the Debt Recovery Tribunal (DRT) and the National Company Law Tribunal (NCLT). In addition to litigation, he advises businesses on commercial contracts, licensing agreements, and corporate compliance.",
    focus: ["Contracts & IP Licensing", "Banking & DRT/NCLT Litigation", "ROC Compliance"],
    highlights: [
      { label: "Contracts Drafted", value: "800+" },
      { label: "Compliance Filings", value: "500+" },
      { label: "DRT/NCLT Cases", value: "120+" },
      { label: "Licensing Deals", value: "100+" },
    ],
    qualifications: [
      "LL.M",
      "B.A. LL.B",
      "Registered Trademark Attorney",
      "Official SIPP Facilitator (Startups IP Protection)",
      "Enrolled Advocate (2012) — Bar Council of India",
    ],
    services: [
      "Commercial Contract & Technology Agreement Drafting",
      "Banking Litigation (DRT, DRAT, NCLT proceedings)",
      "IP Licensing & Technology Transfer Deals",
      "ROC & Statutory Annual Company Filings",
      "SARFAESI Recovery Advisory",
      "Data Protection & DPDP Act Compliance Frameworks",
    ],
  },
  {
    name: "Mohit Gautam",
    slug: "mohit-gautam",
    role: "Associate Advocate",
    image: "/team/mohit-gautam.jpg",
    bio: "Mohit Gautam is an Associate Advocate specializing in trademark filings, clearance searches, and official prosecution before the Trademark Registry.",
    extendedBio:
      "Mohit Gautam is a dedicated intellectual property specialist at IP Rani. With a deep focus on trademark law and prosecution, he manages brand clearance operations, filings, and official objection replies. Mohit works closely with startups and D2C brands to secure trademark protection in India and international markets, representing clients during registry show-cause hearings and opposition proceedings.",
    focus: ["Trademark Filings", "IP Prosecution", "Brand Clearance"],
    highlights: [
      { label: "Trademarks Filed", value: "300+" },
      { label: "Hearings Attended", value: "80+" },
      { label: "Clearance Searches", value: "400+" },
      { label: "Client Rating", value: "4.9/5" },
    ],
    qualifications: [
      "B.A. LL.B",
      "Registered Trademark Attorney",
      "Enrolled Advocate (2024) — Bar Council of India",
    ],
    services: [
      "Trademark Public Clearance Searches",
      "Trademark Application Filing & Drafting",
      "Objection Response & Hearing Representations",
      "Brand Risk Assessment & Portfolio Audit",
      "IP India Portal filings & liaison",
    ],
  },
  {
    name: "Sujal Joshi",
    slug: "sujal-joshi",
    role: "Associate Advocate",
    image: "/team/sujal-joshi.jpg",
    bio: "Sujal Joshi specializes in Criminal and Commercial Litigation, representing clients in district courts, High Courts, and commercial tribunals.",
    extendedBio:
      "Sujal Joshi is a key member of IP Rani's litigation department. He represents corporate and individual clients in civil disputes, breach of contract suits, and commercial litigation, as well as complex criminal defense matters. Sujal is experienced in drafting pleadings, petitions, and evidence affidavits, executing recovery decrees, and navigating alternative dispute resolution channels.",
    focus: ["Criminal Litigation", "Commercial Disputes", "Civil Disputes"],
    highlights: [
      { label: "Cases Represented", value: "150+" },
      { label: "Courts Practiced", value: "8+" },
      { label: "Disputes Settled", value: "50+" },
      { label: "Client Rating", value: "4.8/5" },
    ],
    qualifications: [
      "LL.B",
      "Enrolled Advocate (2026) — Bar Council of India",
      "Member — Delhi High Court Bar Association",
    ],
    services: [
      "Civil & Commercial Suit Filings",
      "Criminal Defense & Bail Representation",
      "Matrimonial & Family Dispute Resolution",
      "Summary Suit Filing & Debt Recovery",
      "Arbitration & Mediation Support",
    ],
  },
  {
    name: "Shiyanc Kumar Singh",
    slug: "shiyanc-singh",
    role: "Associate Advocate",
    image: "/team/shiyanc-singh.jpg",
    bio: "Shiyanc Kumar Singh is an Associate Advocate specializing in Civil Litigation, Human Rights, International Law, and Labour Law disputes.",
    extendedBio:
      "Shiyanc Kumar Singh is a dedicated advocate representing clients in civil litigation, human rights protection, labor disputes, and international law compliance. He handles civil trials, labor union disputes, worker compensations, and statutory compliance audits for industrial employers, representing clients before District Courts and labor tribunals across India.",
    focus: ["Civil Litigation", "Human Rights", "Labour & Employment Law"],
    highlights: [
      { label: "Cases Handled", value: "110+" },
      { label: "Tribunals Represented", value: "5+" },
      { label: "Arbitrations", value: "30+" },
      { label: "Client Rating", value: "4.8/5" },
    ],
    qualifications: [
      "B.A. LL.B",
      "Enrolled Advocate (2024) — Bar Council of India",
      "Member — District Court Bar Association",
    ],
    services: [
      "Civil Dispute & Land Suit Representation",
      "Human Rights Advocacy & Writ Petitions",
      "Labour Court & Industrial Tribunal Filings",
      "Employment Contract Audits & Disputes",
      "International Law Regulatory Advice",
    ],
  },
];

export function findTeamMember(slug: string) {
  return team.find((t) => t.slug === slug);
}
