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
    bio: "N. K. Sethi founded IP Rani with a vision to provide world-class intellectual property and corporate legal solutions. He specializes in Civil & Commercial Litigation, Criminal Matters, and Matrimonial Cases.",
    extendedBio:
      "With over two decades of experience in Indian courts and tribunals, N. K. Sethi is the visionary founder of IP Rani. He has successfully represented corporate and private clients before the Delhi High Court, Supreme Court of India, IPAB (now the High Court IP Division), and various District Courts across Northern India. His deep expertise in civil disputes, commercial litigation, complex criminal trials, and sensitive matrimonial proceedings has earned him a stellar reputation. As a senior Registered IP Attorney, he also advises boards on IP enforcement, cross-border asset seizures, and brand protection strategies in India.",
    focus: ["IP Enforcement", "Civil & Commercial Litigation", "Matrimonial & Criminal Law"],
    highlights: [
      { label: "Experience", value: "20+ Years" },
      { label: "Cases Led", value: "500+" },
      { label: "Courts Practiced", value: "15+" },
      { label: "Countries Served", value: "50+" },
    ],
    qualifications: [
      "LL.B — Campus Law Centre, University of Delhi",
      "Registered Patent & Trademark Attorney",
      "Enrolled Advocate — Bar Council of India",
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
    role: "Managing Partner & SIPP Facilitator",
    image: "/team/prashant-sethi.jpg",
    bio: "Prashant leads the firm's client operations. He is a Registered IP Attorney with expertise in IP Prosecution, IP & Commercial Litigation, and Startup Legal Structuring.",
    extendedBio:
      "Prashant Sethi oversees client operations and growth strategy at IP Rani. As Managing Partner and a recognized SIPP Facilitator, he specializes in trademark and patent prosecution, advising over 200 startups on entity registration, founder agreements, and ESOP designs. His expertise covers the entire lifecycle of IP prosecution — clearance searches, filing multi-class applications, and successfully navigating official trademark/patent objections and hearings. He is also a seasoned litigator handling high-stakes intellectual property and commercial contract disputes before High Courts and appellate bodies.",
    focus: ["IP Prosecution", "IP & Commercial Litigation", "Startup Advisory"],
    highlights: [
      { label: "Trademarks Filed", value: "1000+" },
      { label: "Startups Advised", value: "200+" },
      { label: "Patents Drafted", value: "150+" },
      { label: "Success Rate", value: "95%" },
    ],
    qualifications: [
      "B.A. LL.B — Amity Law School",
      "Registered Patent & Trademark Attorney",
      "Official SIPP Facilitator (Startups IP Protection)",
      "Enrolled Advocate — Bar Council of India",
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
    bio: "Sushant specializes in commercial contracts, corporate compliance, and banking litigation. He is a Co-Founder, SIPP Facilitator, and expert in DRT and NCLT matters.",
    extendedBio:
      "Sushant Shekhar is the operational Co-Founder of IP Rani and a registered SIPP Facilitator. His practice centers on commercial contract drafting, technological licensing, and technology transfers. Sushant also has extensive experience in banking litigation, representing financial institutions and corporate clients before the Debt Recovery Tribunal (DRT) and the National Company Law Tribunal (NCLT) in insolvency and asset recovery matters. He oversees the firm's ROC and corporate compliance division, assisting businesses with Companies Act compliance and annual filings.",
    focus: ["Contracts & IP Licensing", "Banking & DRT/NCLT Litigation", "ROC Compliance"],
    highlights: [
      { label: "Contracts Drafted", value: "800+" },
      { label: "Compliance Filings", value: "500+" },
      { label: "DRT/NCLT Cases", value: "120+" },
      { label: "Licensing Deals", value: "100+" },
    ],
    qualifications: [
      "LL.M — National Law University",
      "BA. LL.B — IP University, Delhi",
      "Registered Patent & Trademark Attorney",
      "Official SIPP Facilitator (Startups IP Protection)",
      "Enrolled Advocate — Bar Council of India",
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
    role: "Registered IP Attorney",
    image: "/team/mohit-gautam.jpg",
    bio: "Mohit Gautam is a Registered IP Attorney specializing in trademark filings, clearance searches, and official prosecution before the Trademark Registry.",
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
      "B.A. LL.B — Guru Gobind Singh Indraprastha University",
      "Registered Patent & Trademark Attorney",
      "Enrolled Advocate — Bar Council of India",
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
      "LL.B — Faculty of Law, University of Delhi",
      "Enrolled Advocate — Bar Council of India",
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
      "B.A., LL.B — University of Delhi",
      "Enrolled Advocate — Bar Council of India",
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
