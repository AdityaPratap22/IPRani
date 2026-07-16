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
    name: "NK Sethi",
    slug: "nk-sethi",
    role: "Founder",
    image: "/team/nk-sethi.jpg",
    bio: "NK Sethi founded IP Rani with a vision to provide world-class intellectual property and corporate legal solutions. With decades of litigation and advisory experience, he guides the firm's overall direction and major enforcement strategies.",
    extendedBio:
      "With over two decades of experience in Indian courts and tribunals, NK Sethi has been at the forefront of intellectual property enforcement and commercial litigation. He has successfully represented clients before the Delhi High Court, Supreme Court of India, IPAB (now the High Court IP Division), and various District Courts across Northern India. His deep expertise in IP enforcement — from obtaining ex-parte injunctions and Anton Piller orders to executing cross-border seizure operations — has made him a trusted name among brands, manufacturers, and multinational corporations seeking to protect their rights in India. NK Sethi's strategic vision extends beyond litigation. He advises corporate boards on IP portfolio structuring, risk mitigation, and compliance frameworks. Under his leadership, IP Rani has grown from a boutique practice into a full-service IP and corporate legal firm serving clients across 50+ countries.",
    focus: ["IP Enforcement", "Commercial Litigation", "Corporate Law"],
    highlights: [
      { label: "Experience", value: "20+ Years" },
      { label: "Cases Led", value: "500+" },
      { label: "Courts Practiced", value: "15+" },
      { label: "Countries Served", value: "50+" },
    ],
    qualifications: [
      "LLB — Campus Law Centre, University of Delhi",
      "Enrolled Advocate — Bar Council of India",
      "Member — International Trademark Association (INTA)",
      "Member — Asian Patent Attorneys Association (APAA)",
    ],
    services: [
      "IP Infringement & Enforcement Strategy",
      "Trademark & Patent Litigation",
      "Anton Piller & John Doe Orders",
      "Cross-Border IP Dispute Resolution",
      "Corporate Board Advisory",
      "IP Portfolio Audit & Risk Assessment",
    ],
  },
  {
    name: "Prashant Sethi",
    slug: "prashant-sethi",
    role: "Managing Partner",
    image: "/team/prashant-sethi.jpg",
    bio: "Prashant leads the firm's client operations and portfolio growth strategy. He specializes in corporate structuring, complex trademark prosecution, and patent strategy for high-growth tech companies and startup ecosystems.",
    extendedBio:
      "Prashant Sethi brings a unique blend of legal expertise and business acumen to IP Rani. As Managing Partner, he oversees the firm's day-to-day operations, client relationships, and service delivery across all practice areas. His specialization lies in trademark prosecution — from conducting comprehensive clearance searches and filing multi-class applications to navigating complex objections, oppositions, and rectification proceedings before the Indian Trademark Registry. Prashant has a particular passion for working with startups and technology companies. He has advised over 200 startups on entity formation, founder agreements, ESOP structures, and fundraising documentation — helping them build legally sound foundations from day one. His patent prosecution work spans software, fintech, healthtech, and deep-tech sectors, where he works closely with inventors to draft robust patent claims that withstand examination and maximize commercial value. He also leads the firm's Startup India and DPIIT recognition practice, helping eligible companies access tax benefits, funding support, and simplified compliance frameworks.",
    focus: ["Trademark Prosecution", "Patent Strategy", "Startup Legal"],
    highlights: [
      { label: "Trademarks Filed", value: "1000+" },
      { label: "Startups Advised", value: "200+" },
      { label: "Patents Drafted", value: "150+" },
      { label: "Success Rate", value: "95%" },
    ],
    qualifications: [
      "BBA LLB (Hons.) — Amity University",
      "Enrolled Advocate — Bar Council of India",
      "Certified IP Professional — WIPO Academy",
      "Member — Startup India Mentor Network",
    ],
    services: [
      "Trademark Search, Filing & Prosecution",
      "Trademark Objection & Opposition Handling",
      "Patent Drafting & Filing (Indian & PCT)",
      "Startup Entity Formation & Structuring",
      "Founder Agreements & ESOP Design",
      "DPIIT & Startup India Recognition",
    ],
  },
  {
    name: "Sushant Shekhar",
    slug: "sushant-shekhar",
    role: "Co-Founder",
    image: "/team/sushant-shekhar.jpg",
    bio: "Sushant co-founded IP Rani to bridge the gap between complex legal regulations and business execution. He specializes in commercial contract drafting, IP licensing agreements, technology transfer, and statutory corporate compliance.",
    extendedBio:
      "Sushant Shekhar is the operational backbone of IP Rani. As Co-Founder, he brings a meticulous, process-driven approach to every engagement — ensuring that legal solutions are not just technically sound, but commercially practical and business-aligned. His core expertise lies in commercial contract law. Sushant has drafted and negotiated hundreds of agreements — from SaaS subscription agreements and master service agreements to complex technology licensing deals, joint venture agreements, and franchise documentation. His clients include SaaS companies, D2C brands, manufacturing firms, and professional services organizations. Beyond contracts, Sushant leads IP Rani's corporate compliance and ROC filing practice. He advises companies on annual compliance, board resolutions, share transfers, director appointments, and statutory filings under the Companies Act, 2013 and the LLP Act, 2008. His IP licensing work involves structuring royalty arrangements, technology transfer agreements, and cross-border IP licensing frameworks that protect the licensor's rights while enabling commercial scale. Sushant is also deeply involved in the firm's privacy and data protection practice, advising clients on DPDP Act compliance, privacy policy frameworks, and data processing agreements.",
    focus: ["Contracts & Agreements", "ROC Compliance", "IP Licensing"],
    highlights: [
      { label: "Contracts Drafted", value: "800+" },
      { label: "Compliance Filings", value: "500+" },
      { label: "Licensing Deals", value: "100+" },
      { label: "Industries Served", value: "25+" },
    ],
    qualifications: [
      "BA LLB — Guru Gobind Singh Indraprastha University",
      "Enrolled Advocate — Bar Council of India",
      "Certificate in Data Privacy Law — NLSIU Bangalore",
      "Member — Indian Corporate Law Institute",
    ],
    services: [
      "Commercial Contract Drafting & Negotiation",
      "SaaS & Technology Agreements",
      "IP Licensing & Technology Transfer",
      "ROC Compliance & Annual Filings",
      "Privacy Policy & DPDP Compliance",
      "Joint Venture & Franchise Agreements",
    ],
  },
];

export function findTeamMember(slug: string) {
  return team.find((t) => t.slug === slug);
}
