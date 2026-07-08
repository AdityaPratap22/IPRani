export type Article = {
  title: string;
  slug: string;
  summary: string;
  relatedService: { label: string; href: string };
};

export type Cluster = {
  name: string;
  slug: string;
  summary: string;
  description: string;
  relatedServices: { label: string; href: string }[];
  relatedIndustry?: { label: string; href: string };
  articles: Article[];
};

export const clusters: Cluster[] = [
  {
    name: "Trademark Guide",
    slug: "trademark-guide",
    summary: "Everything you need to know about registering and protecting your brand name and logo.",
    description:
      "A practical, step-by-step pillar covering trademark search, filing, objections, opposition and renewal — written for founders and brand teams handling registration for the first time.",
    relatedServices: [
      { label: "Trademark Search", href: "/services/intellectual-property/trademark/search" },
      { label: "Trademark Filing & Drafting", href: "/services/intellectual-property/trademark/filing-drafting" },
      { label: "Trademark Opposition", href: "/services/intellectual-property/trademark/opposition" },
    ],
    relatedIndustry: { label: "Startups", href: "/industries/startups" },
    articles: [
      {
        title: "Trademark vs Copyright: What's the Difference",
        slug: "trademark-vs-copyright",
        summary: "How trademark and copyright protection differ, and why most brands need both.",
        relatedService: { label: "Trademark Search", href: "/services/intellectual-property/trademark/search" },
      },
      {
        title: "How to Do a Trademark Search Before Filing",
        slug: "how-to-do-a-trademark-search",
        summary: "Why a clearance search matters and what to check before you file.",
        relatedService: { label: "Trademark Search", href: "/services/intellectual-property/trademark/search" },
      },
      {
        title: "Trademark Classes Explained (NICE Classification)",
        slug: "trademark-classes-explained",
        summary: "A plain-English walkthrough of the 45 NICE trademark classes.",
        relatedService: { label: "Trademark Filing & Drafting", href: "/services/intellectual-property/trademark/filing-drafting" },
      },
      {
        title: "What Happens After You File a Trademark Application",
        slug: "after-you-file-a-trademark-application",
        summary: "The examination, publication and registration stages explained.",
        relatedService: { label: "Trademark Filing & Drafting", href: "/services/intellectual-property/trademark/filing-drafting" },
      },
      {
        title: "How to Respond to a Trademark Objection",
        slug: "how-to-respond-to-a-trademark-objection",
        summary: "Common objection grounds and how to draft an effective reply.",
        relatedService: { label: "Trademark Objection", href: "/services/intellectual-property/trademark/objection" },
      },
      {
        title: "Trademark Renewal: Deadlines and Process",
        slug: "trademark-renewal-deadlines-and-process",
        summary: "When to renew, what it costs, and what happens if you miss the deadline.",
        relatedService: { label: "Trademark Renewal", href: "/services/intellectual-property/trademark/renewal" },
      },
    ],
  },
  {
    name: "Patent Guide",
    slug: "patent-guide",
    summary: "A step-by-step walkthrough of filing and prosecuting a patent application in India.",
    description:
      "From prior-art search to international filing, this pillar covers what founders, R&D teams and inventors need to know about protecting an invention in India and abroad.",
    relatedServices: [
      { label: "Patent Search", href: "/services/intellectual-property/patent/search" },
      { label: "Patent Drafting & Filing", href: "/services/intellectual-property/patent/drafting-filing" },
      { label: "International Patent Filing (PCT/WIPO)", href: "/services/intellectual-property/patent/international-pct-wipo" },
    ],
    relatedIndustry: { label: "SaaS & Tech", href: "/industries/saas-tech" },
    articles: [
      {
        title: "Patent vs Trademark vs Copyright: Choosing the Right Protection",
        slug: "patent-vs-trademark-vs-copyright",
        summary: "How to tell which IP right actually protects your invention or brand.",
        relatedService: { label: "Patent Search", href: "/services/intellectual-property/patent/search" },
      },
      {
        title: "How to Conduct a Patent Prior Art Search",
        slug: "how-to-conduct-a-patent-prior-art-search",
        summary: "A framework for checking novelty before you draft a specification.",
        relatedService: { label: "Patent Search", href: "/services/intellectual-property/patent/search" },
      },
      {
        title: "Provisional vs Complete Patent Specification",
        slug: "provisional-vs-complete-patent-specification",
        summary: "When to file provisional first, and how much time you get before completing it.",
        relatedService: { label: "Patent Drafting & Filing", href: "/services/intellectual-property/patent/drafting-filing" },
      },
      {
        title: "Understanding Patent Office Actions in India",
        slug: "understanding-patent-office-actions-in-india",
        summary: "What a First Examination Report means and how to respond.",
        relatedService: { label: "Patent Office Action Response", href: "/services/intellectual-property/patent/office-action-response" },
      },
      {
        title: "How the PCT International Filing Process Works",
        slug: "how-the-pct-international-filing-process-works",
        summary: "Filing one application to preserve patent rights across multiple countries.",
        relatedService: { label: "International Patent Filing (PCT/WIPO)", href: "/services/intellectual-property/patent/international-pct-wipo" },
      },
      {
        title: "Patent Renewal and Annuity Payments Explained",
        slug: "patent-renewal-and-annuity-payments-explained",
        summary: "How annuity payments keep a granted patent in force each year.",
        relatedService: { label: "Patent Renewal", href: "/services/intellectual-property/patent/renewal" },
      },
    ],
  },
  {
    name: "Startup Legal Guide",
    slug: "startup-legal-guide",
    summary: "The legal essentials every founder should sort out before and after incorporation.",
    description:
      "A founder-facing pillar covering incorporation, founder agreements, IP protection and hiring — the legal checklist most startups discover too late.",
    relatedServices: [
      { label: "Startup India Registration", href: "/services/corporate-legal/company-formation/startup-india-registration" },
      { label: "Startup IP Protection", href: "/services/intellectual-property/ip-advisory/startup-ip-protection" },
      { label: "Founders Agreement", href: "/services/corporate-legal/contract-drafting/founders-agreement" },
    ],
    relatedIndustry: { label: "Startups", href: "/industries/startups" },
    articles: [
      {
        title: "Choosing the Right Business Structure for Your Startup",
        slug: "choosing-the-right-business-structure",
        summary: "Private Limited, LLP or OPC — how to decide what fits your startup.",
        relatedService: { label: "Private Limited Company Registration", href: "/services/corporate-legal/company-formation/private-limited-company" },
      },
      {
        title: "Startup India Registration: Eligibility and Benefits",
        slug: "startup-india-registration-eligibility-and-benefits",
        summary: "Tax exemptions, self-certification and other DPIIT recognition benefits.",
        relatedService: { label: "Startup India Registration", href: "/services/corporate-legal/company-formation/startup-india-registration" },
      },
      {
        title: "Founders Agreement: What Every Co-Founder Should Sign",
        slug: "founders-agreement-what-every-co-founder-should-sign",
        summary: "Equity, vesting, roles and exit terms co-founders forget to put in writing.",
        relatedService: { label: "Founders Agreement", href: "/services/corporate-legal/contract-drafting/founders-agreement" },
      },
      {
        title: "Protecting Your Startup's IP Before Fundraising",
        slug: "protecting-your-startups-ip-before-fundraising",
        summary: "Why investors check your IP position during due diligence — and how to prepare.",
        relatedService: { label: "Startup IP Protection", href: "/services/intellectual-property/ip-advisory/startup-ip-protection" },
      },
      {
        title: "Employment Contracts for Early-Stage Teams",
        slug: "employment-contracts-for-early-stage-teams",
        summary: "What to include when you hire your first employees and contractors.",
        relatedService: { label: "Employment Contract", href: "/services/corporate-legal/contract-drafting/employment-contract" },
      },
      {
        title: "Legal Checklist Before Your First Funding Round",
        slug: "legal-checklist-before-your-first-funding-round",
        summary: "The compliance and contract cleanup most founders leave until diligence.",
        relatedService: { label: "Statutory Compliance Advisory", href: "/services/corporate-legal/roc-compliance/statutory-compliance-advisory" },
      },
    ],
  },
  {
    name: "Contract & Agreement Guide",
    slug: "contract-agreement-guide",
    summary: "Practical guidance on the contracts that hold your business relationships together.",
    description:
      "Plain-English explainers on the agreements every business signs — NDAs, vendor terms, SaaS contracts and employment agreements.",
    relatedServices: [
      { label: "NDA Drafting", href: "/services/corporate-legal/contract-drafting/nda" },
      { label: "SaaS Agreement", href: "/services/corporate-legal/contract-drafting/saas-agreement" },
      { label: "Vendor Agreement", href: "/services/corporate-legal/contract-drafting/vendor-agreement" },
    ],
    articles: [
      {
        title: "NDA vs Confidentiality Clause: What's the Difference",
        slug: "nda-vs-confidentiality-clause",
        summary: "When a standalone NDA is worth it, and when a clause is enough.",
        relatedService: { label: "NDA Drafting", href: "/services/corporate-legal/contract-drafting/nda" },
      },
      {
        title: "What to Include in a Vendor Agreement",
        slug: "what-to-include-in-a-vendor-agreement",
        summary: "Scope, payment terms, liability caps and termination clauses to check.",
        relatedService: { label: "Vendor Agreement", href: "/services/corporate-legal/contract-drafting/vendor-agreement" },
      },
      {
        title: "SaaS Agreements: Key Clauses to Negotiate",
        slug: "saas-agreements-key-clauses-to-negotiate",
        summary: "SLAs, data ownership and liability terms that matter most in SaaS deals.",
        relatedService: { label: "SaaS Agreement", href: "/services/corporate-legal/contract-drafting/saas-agreement" },
      },
      {
        title: "Master Service Agreements Explained",
        slug: "master-service-agreements-explained",
        summary: "How an MSA works alongside statements of work for ongoing engagements.",
        relatedService: { label: "Master Service Agreement (MSA)", href: "/services/corporate-legal/contract-drafting/msa" },
      },
      {
        title: "Drafting Terms & Conditions for Your Website",
        slug: "drafting-terms-and-conditions-for-your-website",
        summary: "What every T&C and privacy policy should cover before you launch.",
        relatedService: { label: "Terms & Conditions / Privacy Policy", href: "/services/corporate-legal/contract-drafting/terms-privacy-policy" },
      },
      {
        title: "When to Update Your Employment Contracts",
        slug: "when-to-update-your-employment-contracts",
        summary: "Trigger points for revisiting employee agreements as you scale.",
        relatedService: { label: "Employment Contract", href: "/services/corporate-legal/contract-drafting/employment-contract" },
      },
    ],
  },
  {
    name: "Copyright & Design Guide",
    slug: "copyright-design-guide",
    summary: "How to protect creative, literary and product-design work.",
    description:
      "A pillar for creators, designers and product teams covering when to use copyright versus design registration, and how to license or defend original work.",
    relatedServices: [
      { label: "Copyright Registration", href: "/services/intellectual-property/copyright/registration" },
      { label: "Design Drafting & Filing", href: "/services/intellectual-property/design/drafting-filing" },
      { label: "Copyright Licensing", href: "/services/intellectual-property/copyright/licensing" },
    ],
    relatedIndustry: { label: "Media & Creators", href: "/industries/media-creators" },
    articles: [
      {
        title: "Copyright vs Design Registration: Which Do You Need",
        slug: "copyright-vs-design-registration",
        summary: "How to tell whether your work needs copyright, design registration, or both.",
        relatedService: { label: "Design Drafting & Filing", href: "/services/intellectual-property/design/drafting-filing" },
      },
      {
        title: "How to Register a Design in India",
        slug: "how-to-register-a-design-in-india",
        summary: "The design registration process, timelines and documents required.",
        relatedService: { label: "Design Drafting & Filing", href: "/services/intellectual-property/design/drafting-filing" },
      },
      {
        title: "Copyright Protection for Software and Code",
        slug: "copyright-protection-for-software-and-code",
        summary: "How copyright applies to source code, and where patents come in instead.",
        relatedService: { label: "Copyright Registration", href: "/services/intellectual-property/copyright/registration" },
      },
      {
        title: "Licensing Your Creative Work: What to Know",
        slug: "licensing-your-creative-work",
        summary: "Exclusive versus non-exclusive licensing, and what to negotiate.",
        relatedService: { label: "Copyright Licensing", href: "/services/intellectual-property/copyright/licensing" },
      },
      {
        title: "What to Do If Your Design Is Copied",
        slug: "what-to-do-if-your-design-is-copied",
        summary: "Steps to take when you spot an infringing product in the market.",
        relatedService: { label: "Design Litigation", href: "/services/intellectual-property/design/litigation" },
      },
      {
        title: "Copyright Registration Timeline and Documents",
        slug: "copyright-registration-timeline-and-documents",
        summary: "What you need on hand before you file, and how long registration takes.",
        relatedService: { label: "Copyright Registration", href: "/services/intellectual-property/copyright/registration" },
      },
    ],
  },
  {
    name: "Litigation & Recovery Guide",
    slug: "litigation-recovery-guide",
    summary: "What to expect from civil, criminal, banking and IP litigation in India.",
    description:
      "A pillar for business owners and lenders navigating disputes — from cheque bounce cases to arbitration and debt recovery tribunal proceedings.",
    relatedServices: [
      { label: "Cheque Bounce Cases", href: "/services/litigation/banking-finance/cheque-bounce" },
      { label: "SARFAESI Proceedings", href: "/services/litigation/banking-finance/sarfaesi-proceedings" },
      { label: "IP Litigation & Enforcement", href: "/services/litigation/ip-litigation-enforcement" },
    ],
    articles: [
      {
        title: "Cheque Bounce Cases: Process Under Section 138",
        slug: "cheque-bounce-cases-process-under-section-138",
        summary: "What happens after a cheque bounces, and how recovery proceedings work.",
        relatedService: { label: "Cheque Bounce Cases", href: "/services/litigation/banking-finance/cheque-bounce" },
      },
      {
        title: "SARFAESI Act: A Recovery Guide for Lenders",
        slug: "sarfaesi-act-a-recovery-guide-for-lenders",
        summary: "How lenders can recover secured debt without going to court first.",
        relatedService: { label: "SARFAESI Proceedings", href: "/services/litigation/banking-finance/sarfaesi-proceedings" },
      },
      {
        title: "Arbitration vs Litigation: Which Is Faster",
        slug: "arbitration-vs-litigation-which-is-faster",
        summary: "Comparing timelines, costs and enforceability of both routes.",
        relatedService: { label: "Arbitration & Execution", href: "/services/litigation/banking-finance/arbitration-execution" },
      },
      {
        title: "What Is a Title Search Report and Why It Matters",
        slug: "what-is-a-title-search-report",
        summary: "How a TSR protects buyers before a property transaction closes.",
        relatedService: { label: "Title Search Report (TSR)", href: "/services/litigation/property-litigation/title-search-report" },
      },
      {
        title: "IP Infringement: When to File a Litigation Suit",
        slug: "ip-infringement-when-to-file-a-litigation-suit",
        summary: "Deciding between a cease-and-desist notice and a full infringement suit.",
        relatedService: { label: "IP Litigation & Enforcement", href: "/services/litigation/ip-litigation-enforcement" },
      },
      {
        title: "Understanding DRT Proceedings for Loan Recovery",
        slug: "understanding-drt-proceedings-for-loan-recovery",
        summary: "How Debt Recovery Tribunals work and what borrowers should expect.",
        relatedService: { label: "DRT Proceedings", href: "/services/litigation/banking-finance/drt-proceedings" },
      },
    ],
  },
  {
    name: "Compliance & ROC Guide",
    slug: "compliance-roc-guide",
    summary: "Statutory filings and compliance deadlines every registered business must track.",
    description:
      "A pillar for founders and finance teams on staying compliant with ROC, GST and MSME requirements after incorporation.",
    relatedServices: [
      { label: "Annual Filing", href: "/services/corporate-legal/roc-compliance/annual-filing" },
      { label: "GST Registration", href: "/services/corporate-legal/roc-compliance/gst-registration" },
      { label: "Statutory Compliance Advisory", href: "/services/corporate-legal/roc-compliance/statutory-compliance-advisory" },
    ],
    articles: [
      {
        title: "Annual Filing Checklist for Private Limited Companies",
        slug: "annual-filing-checklist-for-private-limited-companies",
        summary: "The forms, deadlines and documents due every financial year.",
        relatedService: { label: "Annual Filing", href: "/services/corporate-legal/roc-compliance/annual-filing" },
      },
      {
        title: "MSME Registration: Benefits and Process",
        slug: "msme-registration-benefits-and-process",
        summary: "How Udyam registration unlocks credit, subsidy and procurement benefits.",
        relatedService: { label: "MSME Registration", href: "/services/corporate-legal/roc-compliance/msme-registration" },
      },
      {
        title: "GST Registration: Who Needs It and When",
        slug: "gst-registration-who-needs-it-and-when",
        summary: "Turnover thresholds and timelines for mandatory GST registration.",
        relatedService: { label: "GST Registration", href: "/services/corporate-legal/roc-compliance/gst-registration" },
      },
      {
        title: "Statutory Compliance Calendar for Startups",
        slug: "statutory-compliance-calendar-for-startups",
        summary: "A month-by-month view of the filings most early-stage companies miss.",
        relatedService: { label: "Statutory Compliance Advisory", href: "/services/corporate-legal/roc-compliance/statutory-compliance-advisory" },
      },
      {
        title: "Consequences of Missing ROC Filing Deadlines",
        slug: "consequences-of-missing-roc-filing-deadlines",
        summary: "Penalties, director disqualification and other risks of late filing.",
        relatedService: { label: "Annual Filing", href: "/services/corporate-legal/roc-compliance/annual-filing" },
      },
      {
        title: "Compliance Requirements After Company Incorporation",
        slug: "compliance-requirements-after-company-incorporation",
        summary: "The first-90-days checklist right after your company is registered.",
        relatedService: { label: "Statutory Compliance Advisory", href: "/services/corporate-legal/roc-compliance/statutory-compliance-advisory" },
      },
    ],
  },
];

export function findCluster(slug: string) {
  return clusters.find((c) => c.slug === slug);
}

export function findArticle(clusterSlug: string, articleSlug: string) {
  const cluster = findCluster(clusterSlug);
  const article = cluster?.articles.find((a) => a.slug === articleSlug);
  return cluster && article ? { cluster, article } : undefined;
}
