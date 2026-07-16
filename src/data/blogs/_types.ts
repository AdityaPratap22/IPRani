export type BlogCategory =
  | "trademark"
  | "patent"
  | "copyright-design"
  | "geographical-indication"
  | "startups"
  | "contracts"
  | "compliance-roc"
  | "litigation"
  | "ip-licensing"
  | "international-ip"
  | "tech-ai-privacy"
  | "location"
  | "industry"
  | "comparison"
  | "legal-news"
  | "glossary-faq"
  | "checklists"
  | "how-to";

export type BlogEntry = {
  title: string;
  slug: string;
  category: BlogCategory;
  summary: string;
  readTime: string;
  relatedLinks: { label: string; href: string }[];
};

export type BlogCategoryMeta = {
  name: string;
  slug: BlogCategory;
  description: string;
  count: number;
  color: string;
};

export const blogCategories: BlogCategoryMeta[] = [
  { name: "Trademark", slug: "trademark", description: "Trademark registration, filing, objection, opposition, renewal and enforcement guides.", count: 362, color: "blue" },
  { name: "Patent", slug: "patent", description: "Patent search, drafting, prosecution, PCT filing and analytics.", count: 244, color: "teal" },
  { name: "Copyright & Design", slug: "copyright-design", description: "Copyright registration, licensing, design filing and protection.", count: 199, color: "purple" },
  { name: "Geographical Indication", slug: "geographical-indication", description: "GI registration, opposition and renewal for region-linked products.", count: 66, color: "amber" },
  { name: "Startups & Company Formation", slug: "startups", description: "Company incorporation, startup registration, founder agreements and early-stage legal.", count: 343, color: "green" },
  { name: "Contracts & Agreements", slug: "contracts", description: "NDA, MSA, SaaS, vendor, employment and licensing agreement guides.", count: 282, color: "indigo" },
  { name: "Corporate Compliance & ROC", slug: "compliance-roc", description: "Annual filing, GST, MSME registration and statutory compliance.", count: 218, color: "slate" },
  { name: "Litigation & Recovery", slug: "litigation", description: "IP enforcement, commercial disputes, SARFAESI, DRT and arbitration.", count: 219, color: "red" },
  { name: "IP Licensing & Strategy", slug: "ip-licensing", description: "IP valuation, licensing, technology transfer and portfolio strategy.", count: 135, color: "cyan" },
  { name: "International IP Filing", slug: "international-ip", description: "Madrid Protocol, PCT, WIPO and cross-border IP protection.", count: 151, color: "orange" },
  { name: "Technology, AI & Data Privacy", slug: "tech-ai-privacy", description: "AI patents, data privacy compliance, SaaS legal and tech law.", count: 165, color: "violet" },
  { name: "Location Pages", slug: "location", description: "City-specific IP and legal service guides across India.", count: 293, color: "emerald" },
  { name: "Industry Guides", slug: "industry", description: "Sector-specific IP and legal strategies for different industries.", count: 281, color: "rose" },
  { name: "Comparison Articles", slug: "comparison", description: "Side-by-side comparisons of IP rights, legal structures and processes.", count: 48, color: "sky" },
  { name: "Legal News & Case Law", slug: "legal-news", description: "Latest IP rulings, case law analysis and regulatory updates.", count: 95, color: "fuchsia" },
  { name: "Glossary & FAQ", slug: "glossary-faq", description: "Definitions, frequently asked questions and quick reference guides.", count: 85, color: "lime" },
  { name: "Checklists & Templates", slug: "checklists", description: "Ready-to-use checklists, templates and filing guides.", count: 54, color: "yellow" },
  { name: "How-To Guides", slug: "how-to", description: "Step-by-step practical guides for common IP and legal tasks.", count: 60, color: "pink" },
];
