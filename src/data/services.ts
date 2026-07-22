export type SubService = {
  name: string;
  slug: string;
  summary: string;
};

export type ServiceHub = {
  name: string;
  slug: string;
  summary: string;
  description: string;
  subServices: SubService[];
};

export type ServiceVertical = {
  name: string;
  slug: string;
  summary: string;
  description: string;
  hubs: ServiceHub[];
};

function leaf(name: string, slug: string, hubName: string, verticalName: string): SubService {
  return {
    name,
    slug,
    summary: `${name} support from our ${hubName} team, handled end-to-end as part of our ${verticalName} practice.`,
  };
}

export const serviceVerticals: ServiceVertical[] = [
  {
    name: "Intellectual Property",
    slug: "intellectual-property",
    summary: "Protect your ideas, brands and creations in India and globally.",
    description:
      "Our Intellectual Property practice covers trademarks, patents, designs, copyright, geographical indications and strategic IP advisory — from first search to enforcement.",
    hubs: [
      {
        name: "Trademark",
        slug: "trademark",
        summary: "Search, filing, prosecution and enforcement for your brand name and logo.",
        description:
          "We manage your trademark portfolio end-to-end, from clearance search through registration, opposition, renewal and enforcement, in India and internationally.",
        subServices: [
          leaf("Trademark Search", "search", "Trademark", "Intellectual Property"),
          leaf("Trademark Filing & Drafting", "filing-drafting", "Trademark", "Intellectual Property"),
          leaf("Trademark Objection", "objection", "Trademark", "Intellectual Property"),
          leaf("Trademark Hearing", "hearing", "Trademark", "Intellectual Property"),
          leaf("Trademark Opposition", "opposition", "Trademark", "Intellectual Property"),
          leaf("Trademark Renewal", "renewal", "Trademark", "Intellectual Property"),
          leaf("International Trademark (Madrid Protocol)", "international-madrid-protocol", "Trademark", "Intellectual Property"),
          leaf("Trademark Watch & Monitoring", "watch-monitoring", "Trademark", "Intellectual Property"),
          leaf("Trademark Litigation", "litigation", "Trademark", "Intellectual Property"),
        ],
      },
      {
        name: "Patent",
        slug: "patent",
        summary: "Search, drafting, prosecution and global filing for your inventions.",
        description:
          "We help inventors and R&D teams secure patent protection through prior-art search, drafting, prosecution, international filing and portfolio analytics.",
        subServices: [
          leaf("Patent Search", "search", "Patent", "Intellectual Property"),
          leaf("Patent Drafting & Filing", "drafting-filing", "Patent", "Intellectual Property"),
          leaf("Patent Office Action Response", "office-action-response", "Patent", "Intellectual Property"),
          leaf("Patent Opposition", "opposition", "Patent", "Intellectual Property"),
          leaf("Patent Hearing", "hearing", "Patent", "Intellectual Property"),
          leaf("Patent Renewal", "renewal", "Patent", "Intellectual Property"),
          leaf("International Patent Filing (PCT/WIPO)", "international-pct-wipo", "Patent", "Intellectual Property"),
          leaf("Patent Analytics", "analytics", "Patent", "Intellectual Property"),
          leaf("Patent Litigation", "litigation", "Patent", "Intellectual Property"),
        ],
      },
      {
        name: "Design",
        slug: "design",
        summary: "Registration and protection for the visual appearance of your products.",
        description:
          "We register and defend industrial designs so the unique look and feel of your products stays yours.",
        subServices: [
          leaf("Design Search", "search", "Design", "Intellectual Property"),
          leaf("Design Drafting & Filing", "drafting-filing", "Design", "Intellectual Property"),
          leaf("Design Objection", "objection", "Design", "Intellectual Property"),
          leaf("Design Hearing", "hearing", "Design", "Intellectual Property"),
          leaf("Design Opposition", "opposition", "Design", "Intellectual Property"),
          leaf("International Design Registration", "international-registration", "Design", "Intellectual Property"),
          leaf("Design Litigation", "litigation", "Design", "Intellectual Property"),
        ],
      },
      {
        name: "Copyright",
        slug: "copyright",
        summary: "Registration and licensing for literary, artistic and digital works.",
        description:
          "We protect original creative, literary, software and artistic works with registration, licensing and enforcement support.",
        subServices: [
          leaf("Copyright Search", "search", "Copyright", "Intellectual Property"),
          leaf("Copyright Registration", "registration", "Copyright", "Intellectual Property"),
          leaf("Copyright Objection", "objection", "Copyright", "Intellectual Property"),
          leaf("Copyright Hearing", "hearing", "Copyright", "Intellectual Property"),
          leaf("Copyright Licensing", "licensing", "Copyright", "Intellectual Property"),
          leaf("Copyright Litigation", "litigation", "Copyright", "Intellectual Property"),
        ],
      },
      {
        name: "Geographical Indication",
        slug: "geographical-indication",
        summary: "Registration and protection for products tied to a specific region.",
        description:
          "We help producer groups and regional bodies register and protect Geographical Indications (GI) that certify origin and quality.",
        subServices: [
          leaf("GI Registration", "registration", "Geographical Indication", "Intellectual Property"),
          leaf("GI Opposition", "opposition", "Geographical Indication", "Intellectual Property"),
          leaf("GI Renewal", "renewal", "Geographical Indication", "Intellectual Property"),
        ],
      },
      {
        name: "IP Advisory",
        slug: "ip-advisory",
        summary: "Strategic counsel on building, valuing and monetizing your IP portfolio.",
        description:
          "We advise founders, in-house teams and investors on IP strategy — from due diligence and audits to valuation, licensing and trade secret protection.",
        subServices: [
          leaf("IP Due Diligence", "due-diligence", "IP Advisory", "Intellectual Property"),
          leaf("IP Audit", "audit", "IP Advisory", "Intellectual Property"),
          leaf("IP Strategy & Portfolio Management", "strategy-portfolio-management", "IP Advisory", "Intellectual Property"),
          leaf("IP Valuation", "valuation", "IP Advisory", "Intellectual Property"),
          leaf("IP Licensing & Assignment", "licensing-assignment", "IP Advisory", "Intellectual Property"),
          leaf("Technology Transfer", "tech-transfer", "IP Advisory", "Intellectual Property"),
          leaf("Trade Secrets Protection", "trade-secrets", "IP Advisory", "Intellectual Property"),
          leaf("Startup IP Protection", "startup-ip-protection", "IP Advisory", "Intellectual Property"),
        ],
      },
      {
        name: "IP Portfolio Management",
        slug: "ip-portfolio-management",
        summary: "We help you strategically manage, monitor, and grow your intellectual property assets.",
        description: "From renewals to enforcement, our end-to-end portfolio services ensure your IP remains protected, compliant, and aligned with your business goals.",
        subServices: [
          leaf("Trademark/Patent Renewals", "renewals", "IP Portfolio Management", "Intellectual Property"),
          leaf("IP Watch & Monitoring", "watch-monitoring", "IP Portfolio Management", "Intellectual Property"),
          leaf("Asset Audit & Mapping", "audit-mapping", "IP Portfolio Management", "Intellectual Property"),
          leaf("Valuation Services", "valuation", "IP Portfolio Management", "Intellectual Property"),
          leaf("Compliance Monitoring", "compliance", "IP Portfolio Management", "Intellectual Property"),
          leaf("Annuity Management", "annuity", "IP Portfolio Management", "Intellectual Property"),
        ],
      },
      {
        name: "IP Prosecution",
        slug: "ip-prosecution",
        summary: "We handle end-to-end prosecution of trademarks, patents, copyrights, and designs.",
        description: "We ensure smooth communication with IP offices, timely responses to objections, and effective representation to secure your rights efficiently and strategically.",
        subServices: [
          leaf("Office Action Responses", "office-actions", "IP Prosecution", "Intellectual Property"),
          leaf("Objection Repliances", "objections", "IP Prosecution", "Intellectual Property"),
          leaf("IP Office Hearings", "hearings", "IP Prosecution", "Intellectual Property"),
          leaf("Appeal Filings", "appeals", "IP Prosecution", "Intellectual Property"),
          leaf("Prosecution Monitoring", "monitoring", "IP Prosecution", "Intellectual Property"),
          leaf("Strategic Representation", "representation", "IP Prosecution", "Intellectual Property"),
        ],
      },
      {
        name: "IP Litigation",
        slug: "ip-litigation",
        summary: "Enforcement and defense of trademark, patent, design, and copyright rights.",
        description: "Our IP Litigation practice defends and enforces your trademarks, patents, designs, and copyrights against infringement, counterfeiting, and unauthorized commercial exploitation.",
        subServices: [
          leaf("Trademark Infringement Suits", "trademark-infringement", "IP Litigation", "Intellectual Property"),
          leaf("Patent Infringement & Injunctions", "patent-infringement", "IP Litigation", "Intellectual Property"),
          leaf("Copyright Enforcement & Piracy", "copyright-enforcement", "IP Litigation", "Intellectual Property"),
          leaf("Design Infringement Action", "design-infringement", "IP Litigation", "Intellectual Property"),
          leaf("Anti-Counterfeiting Action", "anti-counterfeiting", "IP Litigation", "Intellectual Property"),
          leaf("Passing Off & Unfair Competition", "passing-off", "IP Litigation", "Intellectual Property"),
          leaf("Domain Name & UDRP Disputes", "domain-name-udrp", "IP Litigation", "Intellectual Property"),
          leaf("Customs & Border Enforcement", "customs-border-enforcement", "IP Litigation", "Intellectual Property"),
        ],
      },
    ],
  },
  {
    name: "Corporate Legal",
    slug: "corporate-legal",
    summary: "Build your business on a strong legal foundation.",
    description:
      "Our Corporate Legal practice covers company formation, contract drafting and ROC compliance — the legal essentials every growing business needs in place.",
    hubs: [
      {
        name: "Commercial",
        slug: "commercial",
        summary: "Commercial contract drafting, corporate advisory, legal due diligence, and regulatory compliance.",
        description:
          "Our Commercial practice provides end-to-end support for contract drafting, review, corporate advisory, secretarial governance, legal due diligence, and transaction risk assessment.",
        subServices: [
          leaf("Contract Drafting & Documentation", "contract-drafting-documentation", "Commercial", "Corporate Legal"),
          leaf("Contract Review & Negotiation", "contract-review-negotiation", "Commercial", "Corporate Legal"),
          leaf("Commercial Agreements", "commercial-agreements", "Commercial", "Corporate Legal"),
          leaf("Corporate Advisory", "corporate-advisory", "Commercial", "Corporate Legal"),
          leaf("Corporate Governance & Secretarial Advisory", "corporate-governance-secretarial-advisory", "Commercial", "Corporate Legal"),
          leaf("Legal Due Diligence", "legal-due-diligence", "Commercial", "Corporate Legal"),
          leaf("Regulatory & Compliance Advisory", "regulatory-compliance-advisory", "Commercial", "Corporate Legal"),
          leaf("Startup & Business Advisory", "startup-business-advisory", "Commercial", "Corporate Legal"),
          leaf("Legal Opinions & Advisory", "legal-opinions-advisory", "Commercial", "Corporate Legal"),
          leaf("Transaction Support & Risk Assessment", "transaction-support-risk-assessment", "Commercial", "Corporate Legal"),
        ],
      },
      {
        name: "Company Formation",
        slug: "company-formation",
        summary: "Incorporate the right entity for your business from day one.",
        description:
          "We help founders choose and register the right business structure, handling documentation and filings end-to-end.",
        subServices: [
          leaf("Private Limited Company Registration", "private-limited-company", "Company Formation", "Corporate Legal"),
          leaf("LLP Registration", "llp-registration", "Company Formation", "Corporate Legal"),
          leaf("OPC Registration", "opc-registration", "Company Formation", "Corporate Legal"),
          leaf("Section 8 Company Registration", "section-8-company", "Company Formation", "Corporate Legal"),
          leaf("Partnership Firm Registration", "partnership-firm-registration", "Company Formation", "Corporate Legal"),
          leaf("Startup India Registration", "startup-india-registration", "Company Formation", "Corporate Legal"),
        ],
      },
      {
        name: "Contract Drafting",
        slug: "contract-drafting",
        summary: "Clear, enforceable contracts for every stage of your business.",
        description:
          "We draft and review the contracts that hold your business relationships together, from founder agreements to customer terms.",
        subServices: [
          leaf("NDA Drafting", "nda", "Contract Drafting", "Corporate Legal"),
          leaf("Founders Agreement", "founders-agreement", "Contract Drafting", "Corporate Legal"),
          leaf("Vendor Agreement", "vendor-agreement", "Contract Drafting", "Corporate Legal"),
          leaf("Master Service Agreement (MSA)", "msa", "Contract Drafting", "Corporate Legal"),
          leaf("SaaS Agreement", "saas-agreement", "Contract Drafting", "Corporate Legal"),
          leaf("Employment Contract", "employment-contract", "Contract Drafting", "Corporate Legal"),
          leaf("Licensing Agreement", "licensing-agreement", "Contract Drafting", "Corporate Legal"),
          leaf("Terms & Conditions / Privacy Policy", "terms-privacy-policy", "Contract Drafting", "Corporate Legal"),
        ],
      },
      {
        name: "ROC & Compliance",
        slug: "roc-compliance",
        summary: "Stay compliant with statutory filings, on schedule, every year.",
        description:
          "We manage recurring statutory compliance so your company stays in good standing with the ROC and other regulators.",
        subServices: [
          leaf("Annual Filing", "annual-filing", "ROC & Compliance", "Corporate Legal"),
          leaf("MSME Registration", "msme-registration", "ROC & Compliance", "Corporate Legal"),
          leaf("GST Registration", "gst-registration", "ROC & Compliance", "Corporate Legal"),
          leaf("Statutory Compliance Advisory", "statutory-compliance-advisory", "ROC & Compliance", "Corporate Legal"),
        ],
      },
    ],
  },
  {
    name: "Litigation",
    slug: "litigation",
    summary: "Effective legal representation. Strategic outcomes.",
    description:
      "Our Litigation practice represents clients across IP enforcement, commercial disputes, civil and criminal matters, banking recovery, property and matrimonial cases.",
    hubs: [
      {
        name: "IP Litigation & Enforcement",
        slug: "ip-litigation-enforcement",
        summary: "Enforcement action across trademark, patent, design and copyright disputes.",
        description:
          "We enforce IP rights through infringement suits, injunctions and anti-counterfeiting action, working closely with our Trademark, Patent, Design and Copyright teams.",
        subServices: [
          leaf("Trademark Infringement Suits", "trademark-infringement", "IP Litigation & Enforcement", "Litigation"),
          leaf("Patent Infringement & Injunctions", "patent-infringement", "IP Litigation & Enforcement", "Litigation"),
          leaf("Copyright Enforcement & Piracy", "copyright-enforcement", "IP Litigation & Enforcement", "Litigation"),
          leaf("Design Infringement Action", "design-infringement", "IP Litigation & Enforcement", "Litigation"),
          leaf("Anti-Counterfeiting Action", "anti-counterfeiting", "IP Litigation & Enforcement", "Litigation"),
          leaf("Passing Off & Unfair Competition", "passing-off", "IP Litigation & Enforcement", "Litigation"),
          leaf("Domain Name & UDRP Disputes", "domain-name-udrp", "IP Litigation & Enforcement", "Litigation"),
          leaf("Customs & Border Enforcement", "customs-border-enforcement", "IP Litigation & Enforcement", "Litigation"),
        ],
      },
      {
        name: "Commercial Litigation",
        slug: "commercial-litigation",
        summary: "Representation in general commercial and contractual disputes.",
        description:
          "We represent businesses in commercial disputes arising from contracts, partnerships and day-to-day operations.",
        subServices: [],
      },
      {
        name: "Civil / Criminal Litigation",
        slug: "civil-criminal-litigation",
        summary: "Representation across civil suits and criminal proceedings.",
        description:
          "We represent individuals and businesses across civil suits and criminal proceedings with a focus on clear strategy and timely outcomes.",
        subServices: [
          leaf("Civil Matters", "civil-matters", "Civil / Criminal Litigation", "Litigation"),
          leaf("Criminal Matters", "criminal-matters", "Civil / Criminal Litigation", "Litigation"),
        ],
      },
      {
        name: "Banking & Finance",
        slug: "banking-finance",
        summary: "Recovery and dispute resolution for banking and finance matters.",
        description:
          "We support banks, NBFCs and borrowers through recovery proceedings, arbitration and debt tribunal matters.",
        subServices: [
          leaf("Cheque Bounce Cases", "cheque-bounce", "Banking & Finance", "Litigation"),
          leaf("SARFAESI Proceedings", "sarfaesi-proceedings", "Banking & Finance", "Litigation"),
          leaf("Arbitration & Execution", "arbitration-execution", "Banking & Finance", "Litigation"),
          leaf("Lok Adalat", "lok-adalat", "Banking & Finance", "Litigation"),
          leaf("DRT Proceedings", "drt-proceedings", "Banking & Finance", "Litigation"),
        ],
      },
      {
        name: "Property Litigation",
        slug: "property-litigation",
        summary: "Title verification and dispute resolution for real estate.",
        description:
          "We help clients verify title and resolve disputes over ownership, possession and property transactions.",
        subServices: [
          leaf("Title Search Report (TSR)", "title-search-report", "Property Litigation", "Litigation"),
        ],
      },
      {
        name: "Matrimonial",
        slug: "matrimonial",
        summary: "Sensitive, strategic representation in family and matrimonial matters.",
        description:
          "We handle matrimonial and domestic disputes with discretion, aiming for the fastest fair resolution for our clients.",
        subServices: [
          leaf("Domestic Disputes", "domestic-disputes", "Matrimonial", "Litigation"),
        ],
      },
    ],
  },
];

export function findVertical(slug: string) {
  return serviceVerticals.find((v) => v.slug === slug);
}

export function findHub(verticalSlug: string, hubSlug: string) {
  const vertical = findVertical(verticalSlug);
  const hub = vertical?.hubs.find((h) => h.slug === hubSlug);
  return vertical && hub ? { vertical, hub } : undefined;
}

export function findSubService(verticalSlug: string, hubSlug: string, subServiceSlug: string) {
  const found = findHub(verticalSlug, hubSlug);
  const subService = found?.hub.subServices.find((s) => s.slug === subServiceSlug);
  return found && subService
    ? { vertical: found.vertical, hub: found.hub, subService }
    : undefined;
}

export const topServiceLinks = [
  { label: "Patent", href: "/services/intellectual-property/patent/drafting-filing" },
  { label: "Trademark", href: "/services/intellectual-property/trademark/filing-drafting" },
  { label: "Copyright", href: "/services/intellectual-property/copyright/registration" },
  { label: "Design", href: "/services/intellectual-property/design/drafting-filing" },
  { label: "Company Formation", href: "/services/corporate-legal/company-formation/private-limited-company" },
  { label: "Litigation", href: "/services/litigation" },
];
