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
    bio: "With over three decades of distinguished legal practice since 1990, N. K. Sethi is the visionary Founder behind IP Rani. As a Registered IP Attorney and SIPP Facilitator, he brings unparalleled courtroom experience spanning civil and criminal litigation, corporate governance advisory, and matrimonial and family law — forming the strategic and mentorship backbone of the entire firm.",
    extendedBio:
      "N. K. Sethi is the Founder of IP Rani and the most experienced legal mind in the firm. Enrolled as an advocate with the Bar Council of India in 1990, he has accumulated over 35 years of active courtroom practice across Indian district courts, civil and sessions courts, high courts, and specialized tribunals — making him one of the most seasoned practitioners in the firm's history.\n\nAs a Registered IP Attorney under the Controller General of Patents, Designs and Trade Marks (CGPDTM), and an Official SIPP Facilitator empanelled with the Government of India, Mr. Sethi brings a rare combination of deep intellectual property knowledge and broad litigation expertise. This dual competency allows him to advise clients not only on IP strategy and portfolio management, but also on the full spectrum of contentious and non-contentious legal matters that arise in a business lifecycle.\n\nHis primary practice areas span civil dispute resolution — including property disputes, contractual claims, specific performance suits, and injunction proceedings — as well as criminal defence and prosecution before trial courts and appellate forums. In the corporate domain, he counsels promoters, directors, and management teams on governance structures, regulatory compliance, shareholder agreements, and board-level advisory matters. His matrimonial and family law practice covers divorce proceedings, maintenance claims under the Hindu Marriage Act and CrPC Section 125, custody disputes, and domestic violence matters under the Protection of Women from Domestic Violence Act, 2005.\n\nAcross his career, Mr. Sethi has developed an acute understanding of both procedural and substantive law, enabling him to craft strategies that are grounded in established judicial precedent yet innovative in their approach to emerging legal challenges. At IP Rani, he provides the firm's foundational legal vision, oversees the quality of legal work product across all practice verticals, and personally mentors the next generation of advocates and attorneys on the team — ensuring that the firm's culture of legal excellence is sustained as it grows.",
    focus: ["Civil Litigation", "Criminal Litigation", "Corporate Law", "Matrimonial Law"],
    highlights: [
      { label: "Enrolled Advocate", value: "1990" },
      { label: "Experience", value: "35+ Years" },
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
      "Civil & Criminal Litigation Strategy",
      "Corporate Legal Advisory & Governance",
      "Matrimonial & Family Dispute Resolution",
      "Intellectual Property Strategy & Portfolio Oversight",
    ],
  },
  {
    name: "Sushant Shekhar",
    slug: "sushant-shekhar",
    role: "Co-Founder & Registered IP Attorney",
    image: "/team/sushant-shekhar.jpg",
    bio: "Sushant Shekhar is the Co-Founder of IP Rani and a formidable litigation specialist with deep expertise in banking and financial recovery law. Armed with an LL.M and over a decade of courtroom experience since 2012, he has personally handled more than 3,500 bank recovery cases across DRT, DRAT, and NCLT forums — establishing himself as one of the most prolific banking litigators in the practice.",
    extendedBio:
      "Sushant Shekhar is the Co-Founder of IP Rani and the firm's foremost authority on banking litigation, financial recovery, and insolvency law. Enrolled as an advocate with the Bar Council of India in 2012, he holds an LL.M in addition to his B.COM LL.B degree, bringing both rigorous academic grounding and relentless courtroom tenacity to every matter he undertakes.\n\nHis career has been defined by an extraordinary volume and complexity of banking and financial recovery litigation. To date, he has personally handled more than 3,500 cases on behalf of leading public and private sector banks, non-banking financial companies (NBFCs), and asset reconstruction companies (ARCs). His practice spans the full gamut of recovery mechanisms available under Indian law — from filing Original Applications (OAs) under the Recovery of Debts and Bankruptcy Act, 1993 before Debt Recovery Tribunals (DRT), to pursuing appeals before Debt Recovery Appellate Tribunals (DRAT), and initiating insolvency resolution processes under the Insolvency and Bankruptcy Code, 2016 before the National Company Law Tribunal (NCLT).\n\nMr. Shekhar has developed particularly deep expertise in enforcement proceedings under the SARFAESI Act, 2002, including Section 13(2) demand notices, symbolic and physical possession actions under Section 14, and auction and sale proceedings under Rule 8 and Rule 9 of the Security Interest (Enforcement) Rules, 2002. He regularly advises secured creditors on the strategic sequencing of recovery remedies, choosing between SARFAESI enforcement, DRT proceedings, and NCLT insolvency based on the specific facts and commercial objectives of each case.\n\nBeyond banking litigation, he handles complex commercial disputes involving breach of contract, tortious claims, corporate fraud, and shareholder oppression. His insolvency practice extends to representing both creditors and corporate debtors in resolution processes, liquidation proceedings, and avoidance actions.\n\nAs a Registered IP Attorney and Official SIPP Facilitator, he also contributes to the firm's broader intellectual property practice, leveraging his litigation expertise to handle IP enforcement actions and infringement disputes in court.",
    focus: ["Banking & Recovery Litigation", "Commercial Disputes", "DRT & DRAT Proceedings", "NCLT & Insolvency Matters"],
    highlights: [
      { label: "Bank Cases", value: "3500+" },
      { label: "Enrolled Advocate", value: "2012" },
      { label: "Role", value: "Co-Founder" },
      { label: "Status", value: "Registered IP Attorney" },
    ],
    qualifications: [
      "LL.M",
      "B.COM LL.B",
      "Registered Trademark Attorney",
      "Official SIPP Facilitator",
      "Enrolled Advocate (2012) — Bar Council of India",
    ],
    services: [
      "Banking & SARFAESI Recovery Litigation",
      "Commercial & Corporate Dispute Resolution",
      "DRT, DRAT Proceedings & Appeals",
      "NCLT, Insolvency & Bankruptcy Matters",
    ],
  },
  {
    name: "Prashant Sethi",
    slug: "prashant-sethi",
    role: "Managing Partner & Registered IP Attorney",
    image: "/team/prashant-sethi.jpg",
    bio: "Prashant Sethi serves as Managing Partner at IP Rani, leading the firm's intellectual property prosecution, commercial litigation, and international filing operations. As a Registered IP Attorney and SIPP Facilitator, his expertise spans the complete lifecycle of trademarks, patents, and industrial designs — from clearance searches and application drafting, through registry hearings and oppositions, to global portfolio management via Madrid, PCT, and Hague System filings.",
    extendedBio:
      "Prashant Sethi is the Managing Partner of IP Rani and the driving force behind the firm's intellectual property prosecution, commercial litigation, and international filing practice. Enrolled as an advocate with the Bar Council of India in 2022, he has rapidly distinguished himself as one of the firm's most versatile and technically proficient IP practitioners.\n\nAs a Registered IP Attorney and Official SIPP Facilitator under the Controller General of Patents, Designs and Trade Marks (CGPDTM), Prashant manages the complete lifecycle of intellectual property assets for the firm's diverse client base — which ranges from early-stage startups and academic institutions to established manufacturing companies and D2C brands. His work begins at the pre-filing stage with comprehensive clearance searches and distinctiveness assessments, and extends through application drafting, filing strategy, examination report responses, and registry hearing representation.\n\nHe handles prosecution matters across all three major IP categories: trademarks (including wordmarks, device marks, sound marks, and multi-class applications under the Trade Marks Act, 1999), patents (provisional and complete specifications under the Patents Act, 1970), and industrial designs (under the Designs Act, 2000). He has particular strength in complex multi-class trademark filings, contentious registry proceedings involving objections under Sections 9 and 11 of the Trade Marks Act, and opposition proceedings where he has successfully defended and challenged marks before the Trademark Registry.\n\nPrashant's practice extends well beyond domestic filings. He leads the firm's international IP operations, guiding clients through Madrid Protocol trademark registrations across 130+ member jurisdictions, Patent Cooperation Treaty (PCT) applications for global patent protection, and Hague System registrations for international industrial design coverage. He advises clients on jurisdiction selection, priority date strategy, and the commercial implications of international portfolio expansion.\n\nHe also counsels businesses on IP licensing agreements, technology transfer arrangements, franchise agreements, and IP assignment transactions — helping companies unlock the commercial value of their intellectual property portfolios. On the contentious side, Prashant represents clients in IP infringement actions, passing-off suits, and commercial disputes before district courts, high courts, and appellate forums, bringing the same precision and thoroughness that defines his prosecution work to the courtroom.",
    focus: ["IP Prosecution & Hearings", "Commercial & IP Litigation", "International Filings & Licensing"],
    highlights: [
      { label: "Enrolled Advocate", value: "2022" },
      { label: "Role", value: "Managing Partner" },
      { label: "Status", value: "Registered IP Attorney" },
      { label: "Focus", value: "IP & Commercial" },
    ],
    qualifications: [
      "B.A. LL.B",
      "Registered IP Attorney",
      "Official SIPP Facilitator",
      "Enrolled Advocate (2022) — Bar Council of India",
    ],
    services: [
      "Trademark, Patent & Design Prosecution & Drafting",
      "IP & Commercial Litigation",
      "Registry Hearings, Oppositions & Show-Cause Defence",
      "International Filings (Madrid, PCT & Hague System)",
      "IP Licensing, Assignment & Technology Transfer",
    ],
  },
  {
    name: "Mohit Gautam",
    slug: "mohit-gautam",
    role: "Associate Advocate",
    image: "/team/mohit-gautam.jpg",
    bio: "Mohit Gautam is an Associate Advocate at IP Rani, enrolled with the Bar Council of India in 2024. He plays an integral role in supporting the firm's intellectual property prosecution and litigation teams — assisting senior counsel with trademark and patent application drafting, registry filings, objection and opposition replies, legal research, and client advisory across the firm's full range of practice verticals.",
    extendedBio:
      "Mohit Gautam is an Associate Advocate at IP Rani. Enrolled as an advocate with the Bar Council of India in 2024, he serves as a key member of the firm's IP prosecution and litigation support teams, contributing to the day-to-day legal work that keeps the firm's cases moving efficiently through the Indian IP registry and court systems.\n\nIn the IP prosecution vertical, Mohit assists with the preparation and drafting of trademark applications — including brand name searches, classification analysis under the Nice Classification system, and preparation of Form TM-A filings. He also supports the patent team with prior art research, specification formatting, and coordination of patent filing documentation. When the Trademark Registry or Patent Office issues examination reports or objections, Mohit contributes to the preparation of detailed reply submissions, marshalling evidence, citing relevant case law, and drafting legal arguments under the supervision of senior attorneys.\n\nOn the litigation side, he supports case preparation for IP infringement actions, commercial disputes, and civil matters by conducting legal research across Indian case law databases, preparing case briefs, compiling evidence bundles, and drafting interim application pleadings. He regularly assists senior advocates during court appearances and tribunal hearings.\n\nMohit also plays an active role in client-facing activities — attending consultations, preparing client reports, and coordinating status updates on pending matters. His meticulous attention to detail, strong legal research skills, and commitment to thorough case analysis make him a valued and reliable member of the IP Rani team. He continues to broaden his expertise across the firm's full spectrum of intellectual property, corporate, and litigation services.",
    focus: ["IP Prosecution Support", "Legal Research & Drafting", "Case Preparation"],
    highlights: [
      { label: "Designation", value: "Associate Advocate" },
      { label: "Enrolled Advocate", value: "2024" },
    ],
    qualifications: [
      "B.A. LL.B",
      "Enrolled Advocate (2024) — Bar Council of India",
    ],
    services: [
      "Trademark & Patent Filing Support",
      "Registry Compliance & Documentation",
      "Legal Research & Case Preparation",
      "Client Advisory Support",
    ],
  },
  {
    name: "Sujal Joshi",
    slug: "sujal-joshi",
    role: "Associate Advocate",
    image: "/team/sujal-joshi.jpg",
    bio: "Sujal Joshi is an Associate Advocate at IP Rani, enrolled with the Bar Council of India in 2026. He supports the firm's litigation and legal practice teams with case management, pleading and brief preparation, court filings, procedural deadline tracking, and hearing assistance across civil, commercial, and IP dispute resolution matters.",
    extendedBio:
      "Sujal Joshi is an Associate Advocate at IP Rani. Enrolled as an advocate with the Bar Council of India in 2026, he brings fresh energy, sharp analytical skills, and dedicated commitment to the firm's expanding litigation and legal practice operations.\n\nSujal supports the litigation team in the full range of day-to-day case management responsibilities that are critical to efficient legal practice. This includes drafting written statements, rejoinders, and interim applications; preparing comprehensive case briefs and argument notes for senior counsel; managing court filings and ensuring that all documents are properly vettied, indexed, and submitted within statutory timelines; and tracking procedural deadlines across the firm's active civil, commercial, and IP litigation portfolio.\n\nHe regularly accompanies senior advocates to court appearances before district courts, commercial courts, and tribunals — assisting with real-time case management during hearings, taking detailed notes, and coordinating post-hearing follow-up actions. His growing command of the Code of Civil Procedure, Order rules, and court protocols makes him an increasingly effective courtroom support resource.\n\nSujal also contributes to the firm's compliance and documentation workflows, ensuring that all case files, legal opinions, and client communications are properly maintained and archived. His early career focus on litigation procedure and courtroom support positions him to develop deep expertise in advocacy as he gains experience across IP Rani's civil, commercial, banking recovery, and IP dispute resolution practices.",
    focus: ["Litigation Support", "Court Filings & Compliance", "Case Management"],
    highlights: [
      { label: "Designation", value: "Associate Advocate" },
      { label: "Enrolled Advocate", value: "2026" },
    ],
    qualifications: [
      "LL.B",
      "Enrolled Advocate (2026) — Bar Council of India",
    ],
    services: [
      "Litigation Support & Court Filings",
      "Pleading & Brief Preparation",
      "Procedural Compliance & Case Tracking",
      "Hearing Assistance & Legal Research",
    ],
  },
  {
    name: "Shiyanc Kumar Singh",
    slug: "shiyanc-singh",
    role: "Associate Advocate",
    image: "/team/shiyanc-singh.jpg",
    bio: "Shiyanc Kumar Singh is an Associate Advocate at IP Rani, enrolled with the Bar Council of India in 2024. He contributes to the firm's civil litigation and dispute resolution practice, assisting with the preparation and filing of civil suits, applications, and appeals — and regularly supporting senior advocates during court appearances across district court and high court forums.",
    extendedBio:
      "Shiyanc Kumar Singh is an Associate Advocate at IP Rani. Enrolled as an advocate with the Bar Council of India in 2024, he focuses primarily on the firm's civil litigation, dispute resolution, and property law practice, bringing a methodical and detail-oriented approach to every matter he handles.\n\nShiyanc's core responsibilities involve the preparation and filing of civil suits, written statements, applications for temporary and permanent injunctions, and appeals before district courts, civil courts, and high courts. He assists in preparing detailed case summaries, legal research memoranda, and chronological fact sheets that enable senior advocates to present arguments effectively during hearings and final arguments.\n\nHis work covers a broad spectrum of civil disputes, including tenant and landlord matters, property title disputes, specific performance of contract claims, partition suits, easement rights, recovery proceedings under Order 37 of the CPC, and injunction applications under Order 39. He also supports the firm's debt recovery practice by assisting with execution proceedings, attachment applications, and enforcement of court decrees.\n\nShiyanc regularly attends court hearings alongside senior counsel, managing case files, coordinating with court staff, ensuring compliance with procedural requirements, and tracking adjournment dates and filing deadlines. His growing familiarity with the Code of Civil Procedure, Indian Evidence Act, Specific Relief Act, Transfer of Property Act, and relevant state-specific legislation makes him a dependable and increasingly autonomous member of the litigation team.\n\nBeyond litigation, he contributes to the firm's broader legal practice by assisting with documentation, compliance reviews, and research activities across corporate and IP matters whenever additional support is needed.",
    focus: ["Civil Litigation & Dispute Resolution", "Court Appearances", "Legal Documentation"],
    highlights: [
      { label: "Designation", value: "Associate Advocate" },
      { label: "Enrolled Advocate", value: "2024" },
    ],
    qualifications: [
      "B.A. LL.B",
      "Enrolled Advocate (2024) — Bar Council of India",
    ],
    services: [
      "Civil Dispute Resolution & Litigation",
      "Court Appearance & Hearing Support",
      "Legal Documentation & Filing",
      "Research & Compliance Assistance",
    ],
  },
  {
    name: "Vaibhav",
    slug: "vaibhav",
    role: "Senior Associate — Patent Attorney & SIPP Facilitator",
    image: "/team/vaibhav.jpg",
    bio: "Vaibhav is a Senior Associate, Registered Patent Attorney, and Official SIPP Facilitator who forms the backbone of IP Rani's patent prosecution and advisory practice. He brings deep technical and legal expertise to every stage of the patent lifecycle — from conducting exhaustive prior art searches across WIPO, EPO, USPTO, and Indian Patent Office databases, to drafting strategically crafted specifications, preparing detailed FER responses, representing clients in examiner hearings, and delivering comprehensive Freedom to Operate (FTO) risk analyses.",
    extendedBio:
      "Vaibhav is a Senior Associate, Registered Patent Attorney, and Official SIPP Facilitator at IP Rani, serving as the primary architect of the firm's patent prosecution, search, and advisory practice. His unique combination of technical domain knowledge and deep familiarity with Indian and international patent law makes him the firm's go-to expert for all patent-related matters.\n\nAt the pre-filing stage, Vaibhav conducts exhaustive patentability assessments and prior art searches across the world's major patent databases — including WIPO's PATENTSCOPE, the European Patent Office's Espacenet, the United States Patent and Trademark Office's (USPTO) full-text database, Google Patents, and the Indian Patent Office's InPASS system. His searches are methodically structured to evaluate the novelty, inventive step (non-obviousness), and industrial applicability of client inventions against the existing state of the art, providing clients with a clear picture of patentability before committing to the filing process.\n\nOnce an invention clears the patentability assessment, Vaibhav drafts complete and provisional patent specifications that are strategically crafted to maximize claim scope while maintaining full compliance with the Patents Act, 1970 and Patent Rules, 2003. His specifications are known for their precision in technical description, breadth in independent claims, and defensibility under examination — qualities that significantly improve the probability of patent grant and reduce the need for narrowing amendments during prosecution.\n\nPost-filing, Vaibhav manages the critical prosecution phase with meticulous care. When the Indian Patent Office issues First Examination Reports (FER) raising objections on grounds of novelty, inventive step, sufficiency of disclosure, or prior art conflicts, he prepares comprehensive and legally rigorous responses that address each objection point-by-point. His replies combine detailed technical arguments with citations to relevant case law, patent office guidelines, and Manual of Patent Office Practice and Procedure (MPPP) provisions. He also represents clients in examiner hearings before the Patent Office, advocating for claim allowance and navigating the complex interplay of prior art objections, claim amendments, and controller directions.\n\nVaibhav's Freedom to Operate (FTO) analysis practice is particularly valued by manufacturing companies, technology startups, and R&D-intensive organizations that need to commercialize products or processes without risking infringement of third-party patent rights. His FTO reports map the client's product features against active patent claims in the relevant jurisdiction, identify potential infringement risks, and recommend design-around strategies or licensing pathways where necessary.\n\nAs an Official SIPP Facilitator, he also works closely with academic institutions, universities, and government-supported research bodies to facilitate patent filings under the Scheme for Facilitating Start-Ups Intellectual Property Protection (SIPP), ensuring that cutting-edge research from Indian academia receives the intellectual property protection it deserves.",
    focus: ["Patent Searching & Prior Art Analysis", "Patent Drafting & Prosecution", "FER Replies & Registry Hearings", "Freedom to Operate (FTO)"],
    highlights: [
      { label: "Designation", value: "Senior Associate" },
      { label: "Role", value: "Patent Attorney" },
      { label: "Status", value: "Registered Patent Attorney" },
      { label: "SIPP", value: "SIPP Facilitator" },
    ],
    qualifications: [
      "Registered Patent Attorney",
      "Official SIPP Facilitator",
    ],
    services: [
      "Patentability & Prior Art Search across Global Databases",
      "Patent Specification Drafting (Complete & Provisional)",
      "FER Replies, Claim Amendments & Patent Prosecution",
      "Patent Registry Hearings & Controller Representations",
      "Freedom to Operate (FTO) Analysis & Risk Advisory",
      "IP Portfolio Management & Strategy",
    ],
  },
  {
    name: "Pooja",
    slug: "pooja",
    role: "Senior Associate — Criminal & Banking Litigation",
    image: "/team/pooja.jpg",
    bio: "Pooja is a Senior Associate at IP Rani specializing in Criminal & Banking Litigation. She brings extensive courtroom experience across criminal defence, financial recovery suits, Section 138 NI Act litigation, and banking matters before district courts, DRT, and appellate forums.",
    extendedBio:
      "Pooja is a Senior Associate at IP Rani and a key pillar of the firm's criminal litigation and banking recovery practice. She brings sharp legal acumen and strategic courtroom representation to criminal matters and banking disputes.\n\nHer criminal litigation practice spans criminal defence and prosecution across Indian trial courts and sessions courts. She regularly handles matters involving cheque bounce cases under Section 138 of the Negotiable Instruments Act, criminal breach of trust, cheating, and bail applications.\n\nIn the banking domain, Pooja represents banks, financial institutions, and corporate clients in recovery proceedings, Debt Recovery Tribunal (DRT) litigation, and corporate debt disputes. Her combined expertise in criminal law and banking recovery allows her to provide comprehensive legal strategy for clients.",
    focus: ["Criminal Litigation & Defence", "Banking & Financial Recovery"],
    highlights: [
      { label: "Designation", value: "Senior Associate" },
      { label: "Specialty", value: "Criminal & Banking" },
      { label: "Forums", value: "District Courts & DRT" },
    ],
    qualifications: [
      "LL.B",
      "Enrolled Advocate — Bar Council of India",
    ],
    services: [
      "Criminal Defence & Trial Advocacy",
      "Negotiable Instruments & Sec 138 Litigation",
      "Banking & Recovery Proceedings",
      "DRT & Financial Dispute Litigation",
    ],
  },
  {
    name: "Prachi",
    slug: "prachi",
    role: "Associate Advocate",
    image: "/team/prachi.jpg",
    bio: "Prachi is an Associate Advocate at IP Rani supporting the firm's intellectual property prosecution and general legal practice. She assists senior counsel with legal research, case preparation, registry documentation, and client advisory.",
    extendedBio:
      "Prachi is an Associate Advocate at IP Rani. Enrolled as an advocate with the Bar Council of India, she contributes to the firm's intellectual property prosecution, corporate advisory, and litigation support teams.\n\nIn her role as an associate, Prachi assists in drafting trademark and patent applications, preparing examination report replies, conducting comprehensive legal research, and managing case documentation. She works closely with senior partners during client consultations and courtroom hearings, ensuring that all procedural and statutory compliance requirements are met efficiently.",
    focus: ["IP Prosecution Support", "Legal Research & Drafting", "Corporate Advisory Support"],
    highlights: [
      { label: "Designation", value: "Associate Advocate" },
      { label: "Focus", value: "IP & Legal Support" },
    ],
    qualifications: [
      "LL.B",
      "Enrolled Advocate — Bar Council of India",
    ],
    services: [
      "Trademark & IP Filing Support",
      "Legal Research & Case Brief Preparation",
      "Registry Compliance & Documentation",
      "Client Advisory Support",
    ],
  },
];

export function findTeamMember(slug: string) {
  return team.find((t) => t.slug === slug);
}
