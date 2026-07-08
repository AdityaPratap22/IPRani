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
    name: "Fashion & Jewellery",
    slug: "fashion-jewellery",
    tier: "priority",
    summary: "Design protection and brand enforcement for fashion and jewellery houses.",
    risks: [
      "Seasonal collections launched without design registration, inviting knockoffs.",
      "Brand names and logos copied by smaller regional sellers.",
      "Licensing arrangements with retailers left undocumented.",
    ],
    relatedServices: [
      { label: "Design Drafting & Filing", href: "/services/intellectual-property/design/drafting-filing" },
      { label: "Trademark Filing & Drafting", href: "/services/intellectual-property/trademark/filing-drafting" },
      { label: "IP Licensing & Assignment", href: "/services/intellectual-property/ip-advisory/licensing-assignment" },
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
  {
    name: "Real Estate",
    slug: "real-estate",
    tier: "priority",
    summary: "Title verification and dispute resolution for developers and buyers.",
    risks: [
      "Property transactions closed without a thorough title search.",
      "Disputes over possession, ownership or builder-buyer agreements.",
      "Project brand names left unregistered as trademarks.",
    ],
    relatedServices: [
      { label: "Title Search Report (TSR)", href: "/services/litigation/property-litigation/title-search-report" },
      { label: "Trademark Filing & Drafting", href: "/services/intellectual-property/trademark/filing-drafting" },
      { label: "Vendor Agreement", href: "/services/corporate-legal/contract-drafting/vendor-agreement" },
    ],
  },
  {
    name: "FMCG",
    slug: "fmcg",
    tier: "priority",
    summary: "Trademark portfolios, packaging IP and regulatory support.",
    risks: [
      "Regional lookalike brands eroding market share.",
      "Packaging and label designs copied without design registration.",
      "Renewal deadlines missed across a large trademark portfolio.",
    ],
    relatedServices: [
      { label: "Trademark Renewal", href: "/services/intellectual-property/trademark/renewal" },
      { label: "Design Drafting & Filing", href: "/services/intellectual-property/design/drafting-filing" },
      { label: "GI Registration", href: "/services/intellectual-property/geographical-indication/registration" },
    ],
  },
  {
    name: "Pharma & Healthcare",
    slug: "pharma-healthcare",
    tier: "priority",
    summary: "Patent filing, regulatory compliance and licensing support.",
    risks: [
      "Formulations and processes left unpatented before publication or launch.",
      "Licensing deals with manufacturers left loosely documented.",
      "Brand names conflicting with existing pharma trademarks.",
    ],
    relatedServices: [
      { label: "Patent Drafting & Filing", href: "/services/intellectual-property/patent/drafting-filing" },
      { label: "IP Licensing & Assignment", href: "/services/intellectual-property/ip-advisory/licensing-assignment" },
      { label: "Trademark Search", href: "/services/intellectual-property/trademark/search" },
    ],
  },
  {
    name: "Food & Restaurants",
    slug: "food-restaurants",
    tier: "priority",
    summary: "Brand and franchise protection for food businesses.",
    risks: [
      "Restaurant names and logos copied by unrelated outlets in other cities.",
      "Franchise agreements missing clear IP usage and territory terms.",
      "Recipes and packaging left without any formal protection.",
    ],
    relatedServices: [
      { label: "Trademark Filing & Drafting", href: "/services/intellectual-property/trademark/filing-drafting" },
      { label: "Licensing Agreement", href: "/services/corporate-legal/contract-drafting/licensing-agreement" },
      { label: "Trade Secrets Protection", href: "/services/intellectual-property/ip-advisory/trade-secrets" },
    ],
  },
  {
    name: "Media & Creators",
    slug: "media-creators",
    tier: "priority",
    summary: "Copyright, licensing and content protection for creators.",
    risks: [
      "Content reposted or monetized by others without permission.",
      "Brand and channel names left unregistered as trademarks.",
      "Collaboration and sponsorship deals with no written licensing terms.",
    ],
    relatedServices: [
      { label: "Copyright Registration", href: "/services/intellectual-property/copyright/registration" },
      { label: "Licensing Agreement", href: "/services/corporate-legal/contract-drafting/licensing-agreement" },
      { label: "Copyright Litigation", href: "/services/intellectual-property/copyright/litigation" },
    ],
  },
  {
    name: "FinTech",
    slug: "fintech",
    tier: "second",
    summary: "Regulatory compliance and IP protection for financial technology products.",
    risks: [
      "Proprietary algorithms and platforms left unprotected.",
      "Compliance gaps across evolving RBI and financial regulations.",
      "Vendor and partnership agreements missing data-security terms.",
    ],
    relatedServices: [
      { label: "Statutory Compliance Advisory", href: "/services/corporate-legal/roc-compliance/statutory-compliance-advisory" },
      { label: "SaaS Agreement", href: "/services/corporate-legal/contract-drafting/saas-agreement" },
      { label: "Patent Drafting & Filing", href: "/services/intellectual-property/patent/drafting-filing" },
    ],
  },
  {
    name: "Agriculture & Food Processing",
    slug: "agriculture-food-processing",
    tier: "second",
    summary: "GI protection, contracts and compliance for agri and food processing businesses.",
    risks: [
      "Regional produce sold without Geographical Indication protection.",
      "Vendor and cold-chain contracts missing liability clauses.",
      "Brand names left unregistered before scaling to new markets.",
    ],
    relatedServices: [
      { label: "GI Registration", href: "/services/intellectual-property/geographical-indication/registration" },
      { label: "Vendor Agreement", href: "/services/corporate-legal/contract-drafting/vendor-agreement" },
      { label: "Trademark Filing & Drafting", href: "/services/intellectual-property/trademark/filing-drafting" },
    ],
  },
  {
    name: "EdTech",
    slug: "edtech",
    tier: "second",
    summary: "Content licensing, IP and compliance support for education technology platforms.",
    risks: [
      "Course content and platform features shared without copyright protection.",
      "Student data compliance overlooked in platform terms.",
      "Brand names contested as multiple EdTech platforms launch quickly.",
    ],
    relatedServices: [
      { label: "Copyright Registration", href: "/services/intellectual-property/copyright/registration" },
      { label: "Terms & Conditions / Privacy Policy", href: "/services/corporate-legal/contract-drafting/terms-privacy-policy" },
      { label: "Trademark Filing & Drafting", href: "/services/intellectual-property/trademark/filing-drafting" },
    ],
  },
  {
    name: "Construction & Architecture",
    slug: "construction-architecture",
    tier: "second",
    summary: "Contracts, compliance and design protection for construction and architecture firms.",
    risks: [
      "Architectural designs and drawings copied without registration.",
      "Contractor and vendor agreements missing delay and penalty clauses.",
      "Statutory approvals and compliance tracked inconsistently across projects.",
    ],
    relatedServices: [
      { label: "Design Drafting & Filing", href: "/services/intellectual-property/design/drafting-filing" },
      { label: "Vendor Agreement", href: "/services/corporate-legal/contract-drafting/vendor-agreement" },
      { label: "Statutory Compliance Advisory", href: "/services/corporate-legal/roc-compliance/statutory-compliance-advisory" },
    ],
  },
  {
    name: "Automobile / EV",
    slug: "automobile-ev",
    tier: "second",
    summary: "Patent and design protection for automotive and EV innovation.",
    risks: [
      "New component designs and battery technology left unpatented.",
      "Dealer and vendor agreements missing warranty and liability terms.",
      "Brand and model names conflicting with existing automotive trademarks.",
    ],
    relatedServices: [
      { label: "Patent Drafting & Filing", href: "/services/intellectual-property/patent/drafting-filing" },
      { label: "Design Drafting & Filing", href: "/services/intellectual-property/design/drafting-filing" },
      { label: "Vendor Agreement", href: "/services/corporate-legal/contract-drafting/vendor-agreement" },
    ],
  },
  {
    name: "Govt. Contractors / Exporters",
    slug: "govt-contractors-exporters",
    tier: "second",
    summary: "Compliance, contracts and dispute resolution for government contractors and exporters.",
    risks: [
      "Tender and export contracts with unclear liability and penalty terms.",
      "Compliance requirements missed across multiple jurisdictions.",
      "Payment disputes with government bodies or overseas buyers.",
    ],
    relatedServices: [
      { label: "Statutory Compliance Advisory", href: "/services/corporate-legal/roc-compliance/statutory-compliance-advisory" },
      { label: "Commercial Litigation", href: "/services/litigation/commercial-litigation" },
      { label: "Vendor Agreement", href: "/services/corporate-legal/contract-drafting/vendor-agreement" },
    ],
  },
  {
    name: "Hospitality & Hotels",
    slug: "hospitality-hotels",
    tier: "second",
    summary: "Brand, franchise and compliance support for hospitality businesses.",
    risks: [
      "Hotel and restaurant brand names copied in other regions.",
      "Franchise and management agreements with unclear exit terms.",
      "Licensing and statutory compliance tracked manually across properties.",
    ],
    relatedServices: [
      { label: "Trademark Filing & Drafting", href: "/services/intellectual-property/trademark/filing-drafting" },
      { label: "Licensing Agreement", href: "/services/corporate-legal/contract-drafting/licensing-agreement" },
      { label: "Statutory Compliance Advisory", href: "/services/corporate-legal/roc-compliance/statutory-compliance-advisory" },
    ],
  },
  {
    name: "NGOs",
    slug: "ngos",
    tier: "second",
    summary: "Registration, compliance and IP support for non-profits.",
    risks: [
      "Section 8 or trust registration structured incorrectly for long-term goals.",
      "Donor and grant agreements missing clear reporting obligations.",
      "Organization name and logo left unregistered as a trademark.",
    ],
    relatedServices: [
      { label: "Section 8 Company Registration", href: "/services/corporate-legal/company-formation/section-8-company" },
      { label: "Statutory Compliance Advisory", href: "/services/corporate-legal/roc-compliance/statutory-compliance-advisory" },
      { label: "Trademark Filing & Drafting", href: "/services/intellectual-property/trademark/filing-drafting" },
    ],
  },
];

export function findIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export const priorityIndustries = industries.filter((i) => i.tier === "priority");
export const secondTierIndustries = industries.filter((i) => i.tier === "second");
