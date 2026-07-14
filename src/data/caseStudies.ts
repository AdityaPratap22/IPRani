export type CaseStudy = {
  title: string;
  slug: string;
  industry: { label: string; href: string };
  service: { label: string; href: string };
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Securing a D2C Brand's Trademark Portfolio Across 12 Classes",
    slug: "d2c-brand-trademark-portfolio",
    industry: { label: "D2C & E-commerce", href: "/industries/d2c-ecommerce" },
    service: { label: "Trademark Filing & Drafting", href: "/services/intellectual-property/trademark/filing-drafting" },
    summary:
      "A fast-growing D2C skincare brand needed nationwide trademark protection before a Series A round.",
    challenge:
      "The client had launched under an unregistered name across 12 product categories, with a competitor already contesting similar marks in two states.",
    approach:
      "We ran a full clearance search, filed across all 12 relevant classes, and represented the client through two opposition proceedings.",
    outcome:
      "All 12 class registrations were secured within 14 months, clearing the way for the brand's Series A diligence.",
  },
  {
    title: "Patent Portfolio Strategy for an Early-Stage SaaS Company",
    slug: "saas-patent-portfolio-strategy",
    industry: { label: "SaaS & Tech", href: "/industries/saas-tech" },
    service: { label: "IP Strategy & Portfolio Management", href: "/services/intellectual-property/ip-advisory/strategy-portfolio-management" },
    summary:
      "A B2B SaaS company needed a defensible IP position ahead of enterprise sales conversations.",
    challenge:
      "The founding team had shipped several patentable features with no protection in place, and enterprise prospects were asking about IP ownership during procurement.",
    approach:
      "We audited the product roadmap, filed two provisional patents on core innovations, and set up an ongoing IP review process with the engineering team.",
    outcome:
      "The company closed two enterprise contracts within the quarter, citing the IP audit as part of their due-diligence pack.",
  },
  {
    title: "Recovering Dues for an NBFC Through SARFAESI Proceedings",
    slug: "nbfc-sarfaesi-recovery",
    industry: { label: "SaaS & Tech", href: "/industries/saas-tech" },
    service: { label: "SARFAESI Proceedings", href: "/services/litigation/banking-finance/sarfaesi-proceedings" },
    summary:
      "An NBFC client needed to recover a significant secured loan default without a prolonged court process.",
    challenge:
      "The borrower had defaulted on a secured loan and was contesting possession of the pledged asset.",
    approach:
      "We initiated SARFAESI proceedings, secured possession of the asset, and coordinated the subsequent auction process.",
    outcome:
      "The NBFC recovered the outstanding dues within 8 months, well ahead of a comparable civil suit timeline.",
  },
  {
    title: "Company Formation and Compliance Setup for a Startup India Cohort",
    slug: "startup-india-cohort-formation",
    industry: { label: "Startups", href: "/industries/startups" },
    service: { label: "Startup India Registration", href: "/services/corporate-legal/company-formation/startup-india-registration" },
    summary:
      "A startup accelerator engaged us to handle incorporation and compliance for its incoming cohort.",
    challenge:
      "Twelve founding teams needed entities incorporated, Startup India recognition filed, and founder agreements drafted within a six-week onboarding window.",
    approach:
      "We standardized a formation and compliance playbook, incorporated each entity, filed DPIIT recognition, and drafted founder agreements for every team.",
    outcome:
      "All twelve startups were incorporated and DPIIT-recognized before demo day, with founder agreements in place from day one.",
  },
];

export function findCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
