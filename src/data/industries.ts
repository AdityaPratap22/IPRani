export type Industry = {
  name: string;
  slug: string;
  tier: "priority" | "second";
  summary: string;
  risks: string[];
  relatedServices: { label: string; href: string }[];
};

export const industries: Industry[] = [
  {
    name: "Startups",
    slug: "startups",
    tier: "priority",
    summary: "Incorporation, IP protection and legal advisory tailored for early-stage founders.",
    risks: [
      "Founders skipping IP protection until after a raise, losing priority on brand and product names.",
      "Verbal agreements between co-founders with no written equity or IP assignment terms.",
      "Generic incorporation choices that create tax or compliance headaches later.",
    ],
    relatedServices: [
      { label: "Startup India Registration", href: "/services/corporate-legal/company-formation/startup-india-registration" },
      { label: "Founders Agreement", href: "/services/corporate-legal/contract-drafting/founders-agreement" },
      { label: "Startup IP Protection", href: "/services/intellectual-property/ip-advisory/startup-ip-protection" },
      { label: "Trademark Filing & Drafting", href: "/services/intellectual-property/trademark/filing-drafting" },
    ],
  },
  {
    name: "SaaS & Tech",
    slug: "saas-tech",
    tier: "priority",
    summary: "Software licensing, IP portfolios and data compliance for technology companies.",
    risks: [
      "Source code and product features shipped without copyright or patent protection.",
      "SaaS agreements that don't clearly cover data ownership, SLAs or liability caps.",
      "Trademark conflicts discovered only after significant brand investment.",
    ],
    relatedServices: [
      { label: "SaaS Agreement", href: "/services/corporate-legal/contract-drafting/saas-agreement" },
      { label: "Patent Drafting & Filing", href: "/services/intellectual-property/patent/drafting-filing" },
      { label: "Copyright Registration", href: "/services/intellectual-property/copyright/registration" },
      { label: "IP Strategy & Portfolio Management", href: "/services/intellectual-property/ip-advisory/strategy-portfolio-management" },
    ],
  },
  {
    name: "D2C & E-commerce",
    slug: "d2c-ecommerce",
    tier: "priority",
    summary: "Brand protection, marketplace disputes and consumer compliance.",
    risks: [
      "Counterfeit listings and brand misuse across online marketplaces.",
      "Packaging and design copied by competitors without design registration in place.",
      "Consumer protection and e-commerce compliance gaps in terms and policies.",
    ],
    relatedServices: [
      { label: "Trademark Watch & Monitoring", href: "/services/intellectual-property/trademark/watch-monitoring" },
      { label: "Design Drafting & Filing", href: "/services/intellectual-property/design/drafting-filing" },
      { label: "Terms & Conditions / Privacy Policy", href: "/services/corporate-legal/contract-drafting/terms-privacy-policy" },
      { label: "Trademark Litigation", href: "/services/intellectual-property/trademark/litigation" },
    ],
  },
  {
    name: "Manufacturing",
    slug: "manufacturing",
    tier: "priority",
    summary: "Contracts, IP enforcement and industrial design registration.",
    risks: [
      "Proprietary processes and machinery designs left unprotected.",
      "Vendor and supply contracts missing IP assignment and confidentiality clauses.",
      "Statutory compliance gaps across multiple manufacturing units.",
    ],
    relatedServices: [
      { label: "Design Drafting & Filing", href: "/services/intellectual-property/design/drafting-filing" },
      { label: "Vendor Agreement", href: "/services/corporate-legal/contract-drafting/vendor-agreement" },
      { label: "Statutory Compliance Advisory", href: "/services/corporate-legal/roc-compliance/statutory-compliance-advisory" },
    ],
  },
];

export function findIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export const priorityIndustries = industries.filter((i) => i.tier === "priority");
export const secondTierIndustries = industries.filter((i) => i.tier === "second");
