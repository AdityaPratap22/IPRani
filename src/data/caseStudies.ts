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
    summary: "A fast-growing D2C skincare brand needed nationwide trademark protection before a Series A round.",
    challenge: "The client had launched under an unregistered name across 12 product categories, with a competitor already contesting similar marks in two states.",
    approach: "We ran a full clearance search, filed across all 12 relevant classes, and represented the client through two opposition proceedings.",
    outcome: "All 12 class registrations were secured within 14 months, clearing the way for the brand's Series A diligence."
  },
  {
    title: "Patent Portfolio Strategy for an Early-Stage SaaS Company",
    slug: "saas-patent-portfolio-strategy",
    industry: { label: "SaaS & Tech", href: "/industries/saas-tech" },
    service: { label: "IP Strategy & Portfolio Management", href: "/services/intellectual-property/ip-advisory/strategy-portfolio-management" },
    summary: "A B2B SaaS company needed a defensible IP position ahead of enterprise sales conversations.",
    challenge: "The founding team had shipped several patentable features with no protection in place, and enterprise prospects were asking about IP ownership during procurement.",
    approach: "We audited the product roadmap, filed two provisional patents on core innovations, and set up an ongoing IP review process with the engineering team.",
    outcome: "The company closed two enterprise contracts within the quarter, citing the IP audit as part of their due-diligence pack."
  },
  {
    title: "Recovering Dues for an NBFC Through SARFAESI Proceedings",
    slug: "nbfc-sarfaesi-recovery",
    industry: { label: "SaaS & Tech", href: "/industries/saas-tech" },
    service: { label: "SARFAESI Proceedings", href: "/services/litigation/banking-finance/sarfaesi-proceedings" },
    summary: "An NBFC client needed to recover a significant secured loan default without a prolonged court process.",
    challenge: "The borrower had defaulted on a secured loan and was contesting possession of the pledged asset.",
    approach: "We initiated SARFAESI proceedings, secured possession of the asset, and coordinated the subsequent auction process.",
    outcome: "The NBFC recovered the outstanding dues within 8 months, well ahead of a comparable civil suit timeline."
  },
  {
    title: "Company Formation and Compliance Setup for a Startup India Cohort",
    slug: "startup-india-cohort-formation",
    industry: { label: "Startups", href: "/industries/startups" },
    service: { label: "Startup India Registration", href: "/services/corporate-legal/company-formation/startup-india-registration" },
    summary: "A startup accelerator engaged us to handle incorporation and compliance for its incoming cohort.",
    challenge: "Twelve founding teams needed entities incorporated, Startup India recognition filed, and founder agreements drafted within a six-week onboarding window.",
    approach: "We standardized a formation and compliance playbook, incorporated each entity, filed DPIIT recognition, and drafted founder agreements for every team.",
    outcome: "All twelve startups were incorporated and DPIIT-recognized before demo day, with founder agreements in place from day one."
  },
  // --- STARTUPS (9 additional) ---
  {
    title: "Restructuring Founder Equity and Vesting for a Fintech Startup",
    slug: "fintech-equity-vesting-restructuring",
    industry: { label: "Startups", href: "/industries/startups" },
    service: { label: "Founders Agreement", href: "/services/corporate-legal/contract-drafting/founders-agreement" },
    summary: "A fintech startup needed to restructure its equity pool and founders' vesting after an early co-founder departure.",
    challenge: "An early co-founder left the company holding 25% unvested shares, creating deadlock risks for future VC funding rounds.",
    approach: "We negotiated a share repurchase agreement, drafted a new multi-tiered Founders' Agreement, and structured a 4-year reverse vesting schedule with a 1-year cliff.",
    outcome: "Cleaned up the cap table and successfully cleared institutional investor due diligence for a $1.5M seed round."
  },
  {
    title: "DPIIT Tax Exemption and Fast-Track Patent for Deeptech Startup",
    slug: "deeptech-dpiit-fast-track-patent",
    industry: { label: "Startups", href: "/industries/startups" },
    service: { label: "Startup India Registration", href: "/services/corporate-legal/company-formation/startup-india-registration" },
    summary: "A deeptech startup required DPIIT registration and Section 80-IAC tax exemption to lock in early R&D funding.",
    challenge: "High operational burn from R&D made tax exemptions crucial, while pending patent applications delayed their commercialization timeline.",
    approach: "We filed for DPIIT recognition, processed the Section 80-IAC tax exemption application, and filed an expedited patent examination request under the Startup scheme.",
    outcome: "Obtained full tax holiday approval and secured the first patent grant in 9 months instead of the standard 3 years."
  },
  {
    title: "Structuring ESOP Pool and Grant Letters for an AI Healthtech",
    slug: "healthtech-esop-pool-structuring",
    industry: { label: "Startups", href: "/industries/startups" },
    service: { label: "Statutory Compliance Advisory", href: "/services/corporate-legal/roc-compliance/statutory-compliance-advisory" },
    summary: "A healthtech startup required an employee stock option pool setup to attract senior engineering talent.",
    challenge: "Drafting ESOP terms that satisfy Indian tax rules while keeping vesting conditions aligned with performance milestones.",
    approach: "We drafted the ESOP Scheme 2024, set up the ROC compliance filings, created structured grant letters, and defined exercise prices.",
    outcome: "Successfully established a 10% ESOP pool and issued grant letters, helping the client hire a senior CTO and Lead AI Scientist."
  },
  {
    title: "Navigating Angel Tax Compliance and Valuations for Agritech",
    slug: "agritech-angel-tax-valuation-compliance",
    industry: { label: "Startups", href: "/industries/startups" },
    service: { label: "Statutory Compliance Advisory", href: "/services/corporate-legal/roc-compliance/statutory-compliance-advisory" },
    summary: "An agritech startup faced tax notices regarding share premium valuations from angel investments.",
    challenge: "The tax department challenged the valuation report submitted under Section 56(2)(viib), threatening heavy penalties.",
    approach: "We compiled statutory valuation reports, represented the client in tax hearings, and filed for the Startup India tax exemption certificate.",
    outcome: "The tax notice was dismissed after obtaining retro-active exemption certificates, saving the company from a significant tax liability."
  },
  {
    title: "Drafting a Multi-Party Joint Venture for an EV Charging Startup",
    slug: "ev-charging-joint-venture-agreement",
    industry: { label: "Startups", href: "/industries/startups" },
    service: { label: "Vendor Agreement", href: "/services/corporate-legal/contract-drafting/vendor-agreement" },
    summary: "An EV startup entered into a joint venture with regional real estate developers to install nationwide charging grids.",
    challenge: "Structuring revenue-share mechanisms and defining IP ownership of charging tech deployed on third-party properties.",
    approach: "We drafted a tripartite Joint Venture Agreement, incorporating clear IP licensing terms, liability caps, and revenue-reconciliation audits.",
    outcome: "Finalized the JV contract within 5 weeks, leading to 120 charging stations deployed across tier-1 cities."
  },
  {
    title: "Securing Trademark and Brand Assets for a D2C Food Tech Brand",
    slug: "foodtech-trademark-brand-protection",
    industry: { label: "Startups", href: "/industries/startups" },
    service: { label: "Trademark Filing & Drafting", href: "/services/intellectual-property/trademark/filing-drafting" },
    summary: "A D2C healthy snack brand needed to secure trademarks for its product names prior to launching nationally.",
    challenge: "The brand name conflicted with an existing registration under Class 30 in a different state.",
    approach: "We filed TM applications under Classes 29, 30, and 35, drafted user affidavits demonstrating distinctiveness, and sent a letter of consent request.",
    outcome: "Secured all 3 trademark registrations, providing the startup with complete brand exclusivity for its national rollout."
  },
  {
    title: "Corporate Governance Audit and ROC Cleanup for Edtech Startup",
    slug: "edtech-corporate-governance-roc-cleanup",
    industry: { label: "Startups", href: "/industries/startups" },
    service: { label: "Statutory Compliance Advisory", href: "/services/corporate-legal/roc-compliance/statutory-compliance-advisory" },
    summary: "An edtech company needed a complete ROC compliance cleanup ahead of a major Series B funding round.",
    challenge: "Multiple delayed annual filings and undocumented board resolutions threatened to stall due diligence.",
    approach: "We audited all historical corporate registers, filed condonation of delay applications, and updated ROC filings for the past three financial years.",
    outcome: "Cleared all compliance defaults, enabling a clean legal due diligence report for their $8M Series B round."
  },
  {
    title: "IP Assignment and Employment Policies for a Web3 Startup",
    slug: "web3-ip-assignment-employment-policies",
    industry: { label: "Startups", href: "/industries/startups" },
    service: { label: "Startup IP Protection", href: "/services/intellectual-property/ip-advisory/startup-ip-protection" },
    summary: "A Web3 startup needed a comprehensive IP assignment framework for remote developers globally.",
    challenge: "Ensuring code committed by international freelancers was fully owned by the Indian corporate entity.",
    approach: "We drafted global IP Assignment Agreements, updated employment agreements with strict IP ownership clauses, and set up Git access policies.",
    outcome: "Protected the proprietary code repository, satisfying critical IP audit requirements for international investors."
  },
  {
    title: "Resolving Founder Exit and Share Repurchase for Logistics Startup",
    slug: "logistics-founder-exit-share-repurchase",
    industry: { label: "Startups", href: "/industries/startups" },
    service: { label: "Founders Agreement", href: "/services/corporate-legal/contract-drafting/founders-agreement" },
    summary: "A logistics startup faced a crisis when a co-founder decided to exit the business to join a competitor.",
    challenge: "The co-founder demanded a high payout for their equity, while the existing agreements had no non-compete or buyout formulas.",
    approach: "We mediated the exit, drafted a comprehensive Separation and Release Agreement, and structured a structured share buyback program.",
    outcome: "Successfully repurchased the exiting founder's shares and enforced a strict non-compete restriction, protecting startup operations."
  },
  // --- SAAS & TECH (9 additional) ---
  {
    title: "Negotiating Enterprise SaaS Agreement for a Cloud Security Platform",
    slug: "cloud-security-enterprise-saas-negotiation",
    industry: { label: "SaaS & Tech", href: "/industries/saas-tech" },
    service: { label: "SaaS Agreement", href: "/services/corporate-legal/contract-drafting/saas-agreement" },
    summary: "A cybersecurity SaaS vendor needed to negotiate a high-value enterprise contract with a major banking institution.",
    challenge: "The bank demanded unlimited liability for data breaches, strict uptime SLA guarantees, and local data hosting requirements.",
    approach: "We structured a balanced Master Services Agreement, negotiated data breach liability caps, and drafted clear SLA credits policies.",
    outcome: "Closed the $450k ACV enterprise contract with acceptable risk levels and guaranteed compliance with banking regulations."
  },
  {
    title: "Filing AI Algorithm Patent for an Enterprise HR-Tech SaaS",
    slug: "hrtech-ai-algorithm-patent-filing",
    industry: { label: "SaaS & Tech", href: "/industries/saas-tech" },
    service: { label: "Patent Drafting & Filing", href: "/services/intellectual-property/patent/drafting-filing" },
    summary: "An HR-Tech company sought patent protection for its proprietary machine learning candidate ranking algorithm.",
    challenge: "Navigating Section 3(k) exclusions under Indian patent law, which prohibits patenting computer programs or software per se.",
    approach: "We drafted the patent specification focusing on hardware integration, database manipulation, and specific technical improvements.",
    outcome: "Successfully filed the complete patent application, securing a defensible IP asset for their AI features."
  },
  {
    title: "Establishing DPDPA 2023 Compliance Framework for Martech SaaS",
    slug: "martech-dpdpa-data-privacy-compliance",
    industry: { label: "SaaS & Tech", href: "/industries/saas-tech" },
    service: { label: "Terms & Conditions / Privacy Policy", href: "/services/corporate-legal/contract-drafting/terms-privacy-policy" },
    summary: "A marketing automation SaaS brand needed a complete data protection and privacy policy compliance update.",
    challenge: "Aligning user data processing workflows with the strict consent requirements of the new DPDPA, 2023.",
    approach: "We audited data pipelines, updated the Privacy Policy, drafted consent templates, and established a data principal grievance mechanism.",
    outcome: "Achieved full compliance with the DPDPA, building customer trust and avoiding potential regulatory fines."
  },
  {
    title: "Copyright Registration for a Proprietary Fintech Source Code",
    slug: "fintech-source-code-copyright-registration",
    industry: { label: "SaaS & Tech", href: "/industries/saas-tech" },
    service: { label: "Copyright Registration", href: "/services/intellectual-property/copyright/registration" },
    summary: "A fintech software company sought copyright registration for its core algorithmic trading software.",
    challenge: "Submitting source code for copyright registration without disclosing trade secrets and key logic.",
    approach: "We selected and filed the first and last 29 pages of the source code, drafted the registration petition, and handled office objections.",
    outcome: "Obtained the Copyright Registration Certificate, establishing a legal presumption of ownership over the software code."
  },
  {
    title: "SaaS IP Strategy and Competitor Patent Audit for DevTools Startup",
    slug: "devtools-saas-ip-strategy-competitor-patent-audit",
    industry: { label: "SaaS & Tech", href: "/industries/saas-tech" },
    service: { label: "IP Strategy & Portfolio Management", href: "/services/intellectual-property/ip-advisory/strategy-portfolio-management" },
    summary: "A developer tools SaaS company needed a patent strategy to protect against aggressive litigation from competitors.",
    challenge: "Competing in a market with major tech conglomerates holding extensive patent portfolios.",
    approach: "We ran a competitor patent landscape analysis, identified whitespace, and designed a defensive patent filing roadmap.",
    outcome: "Filed three strategic patent applications in the identified whitespace, establishing a strong defense portfolio."
  },
  {
    title: "Drafting Custom SLA and Master Service Agreement for Logistics SaaS",
    slug: "logistics-saas-custom-sla-msa-drafting",
    industry: { label: "SaaS & Tech", href: "/industries/saas-tech" },
    service: { label: "SaaS Agreement", href: "/services/corporate-legal/contract-drafting/saas-agreement" },
    summary: "A logistics tracking platform required structured SLAs and MSAs for large enterprise clients.",
    challenge: "Creating service level terms that account for API dependencies on third-party GPS providers.",
    approach: "We drafted the SaaS Agreement, incorporating API exception clauses, service credits, and a tiered SLA support policy.",
    outcome: "Standardized the company's enterprise contract template, reducing contract negotiation cycles by 40%."
  },
  {
    title: "Data Audit and Privacy Policy Overhaul for e-Health Platform",
    slug: "ehealth-platform-data-audit-privacy-overhaul",
    industry: { label: "SaaS & Tech", href: "/industries/saas-tech" },
    service: { label: "Terms & Conditions / Privacy Policy", href: "/services/corporate-legal/contract-drafting/terms-privacy-policy" },
    summary: "A teleconsultation platform required legal frameworks for handling sensitive personal health data.",
    challenge: "Complying with IT Act rules, DPDPA rules, and telemedicine guidelines concurrently.",
    approach: "We ran a comprehensive data flow audit, updated the terms of service, and designed user consent flows.",
    outcome: "Implemented a fully compliant data protection architecture, passing audits required by healthcare partners."
  },
  {
    title: "International Patent Filing via PCT for a Tech Hardware SaaS",
    slug: "hardware-saas-pct-international-patent-filing",
    industry: { label: "SaaS & Tech", href: "/industries/saas-tech" },
    service: { label: "Patent Drafting & Filing", href: "/services/intellectual-property/patent/drafting-filing" },
    summary: "An IoT hardware-enabled SaaS brand needed to file for international patent protection.",
    challenge: "Managing filing costs and deadlines across 5 different target countries (US, EU, JP, CN, SG).",
    approach: "We filed a Patent Cooperation Treaty (PCT) application, drafted the international claims, and managed the national phase entries.",
    outcome: "Secured priority rights in all 5 jurisdictions, protecting the client's global market entry."
  },
  {
    title: "Resolving SaaS Software Licensing Dispute via SIAC Arbitration",
    slug: "saas-licensing-dispute-siac-arbitration",
    industry: { label: "SaaS & Tech", href: "/industries/saas-tech" },
    service: { label: "SaaS Agreement", href: "/services/corporate-legal/contract-drafting/saas-agreement" },
    summary: "A SaaS company faced a contract breach dispute with an international distributor regarding software pricing.",
    challenge: "Handling dispute resolution under Singapore International Arbitration Centre (SIAC) rules.",
    approach: "We represented the SaaS company in drafting statements of claim, coordinating arbitral proceedings, and negotiating a settlement.",
    outcome: "Secured a favorable settlement, recovering outstanding licensing fees and terminating the distribution contract."
  },
  // --- D2C & E-COMMERCE (9 additional) ---
  {
    title: "Enforcing Counterfeit Takedowns and Brand Protection for D2C Apparel",
    slug: "d2c-apparel-counterfeit-takedown-brand-protection",
    industry: { label: "D2C & E-commerce", href: "/industries/d2c-ecommerce" },
    service: { label: "Trademark Watch & Monitoring", href: "/services/intellectual-property/trademark/watch-monitoring" },
    summary: "A premium D2C apparel brand faced massive counterfeit listings on major Indian online marketplaces.",
    challenge: "Identifying and removing thousands of dynamic counterfeit listings that kept reappearing under new seller profiles.",
    approach: "We set up an automated brand monitoring program, filed intermediary takedown notices, and sent cease-and-desist letters to sellers.",
    outcome: "Successfully removed over 1,500 counterfeit listings and established direct API takedown channels with major marketplaces."
  },
  {
    title: "Securing Industrial Design Patents for D2C Footwear Range",
    slug: "d2c-footwear-industrial-design-registration",
    industry: { label: "D2C & E-commerce", href: "/industries/d2c-ecommerce" },
    service: { label: "Design Drafting & Filing", href: "/services/intellectual-property/design/drafting-filing" },
    summary: "A sustainable D2C footwear brand needed to protect its unique shoe sole and outer aesthetics.",
    challenge: "Preventing immediate design imitation by copycat manufacturers in local wholesale hubs.",
    approach: "We filed 6 design applications, compiled representation sheets showing all views, and navigated design registry objections.",
    outcome: "Secured all 6 design registrations, establishing a legal barrier against imitation product lines."
  },
  {
    title: "Overhauling E-commerce Terms and Metrology Compliances for Cosmetics",
    slug: "cosmetics-d2c-metrology-ecommerce-compliance",
    industry: { label: "D2C & E-commerce", href: "/industries/d2c-ecommerce" },
    service: { label: "Terms & Conditions / Privacy Policy", href: "/services/corporate-legal/contract-drafting/terms-privacy-policy" },
    summary: "A cosmetic D2C brand needed to update its legal disclosures under the Legal Metrology Act and Consumer Protection rules.",
    challenge: "Adapting website listings and packaging declarations to meet mandatory regulatory information displays.",
    approach: "We updated the website Terms of Sale, designed standard Legal Metrology labeling templates, and reviewed customer returns policies.",
    outcome: "Achieved full compliance across product packaging and e-commerce listings, preventing regulatory stop-orders."
  },
  {
    title: "Trademark Opposition Victory for a National D2C Beverage Brand",
    slug: "d2c-beverage-trademark-opposition-victory",
    industry: { label: "D2C & E-commerce", href: "/industries/d2c-ecommerce" },
    service: { label: "Trademark Litigation", href: "/services/intellectual-property/trademark/litigation" },
    summary: "A beverage company successfully defended its main brand name against an opposition filed by a global competitor.",
    challenge: "The global competitor claimed prior user rights and deceptive similarity to their international mark.",
    approach: "We drafted a robust counter-statement, compiled evidence of local sales and marketing spend, and presented arguments at the hearing.",
    outcome: "The Trademark Registry dismissed the opposition, allowing the brand to obtain its registration and launch its retail campaign."
  },
  {
    title: "Drafting Logistics and Warehousing Agreements for E-commerce Platform",
    slug: "ecommerce-logistics-warehousing-agreements",
    industry: { label: "D2C & E-commerce", href: "/industries/d2c-ecommerce" },
    service: { label: "Vendor Agreement", href: "/services/corporate-legal/contract-drafting/vendor-agreement" },
    summary: "A scaling e-commerce brand required legal frameworks to outsource nationwide fulfillment operations.",
    challenge: "Structuring liability allocations for lost or damaged goods, and defining SLA-based performance penalties.",
    approach: "We drafted the Logistics Services Agreement, establishing clear risk-transfer points, audit protocols, and indemnity caps.",
    outcome: "Signed agreements with three major third-party logistics (3PL) partners, protecting inventory assets worth $2M."
  },
  {
    title: "Securing Trademark watch for a Scaling D2C Fashion Brand",
    slug: "d2c-fashion-brand-trademark-watch",
    industry: { label: "D2C & E-commerce", href: "/industries/d2c-ecommerce" },
    service: { label: "Trademark Watch & Monitoring", href: "/services/intellectual-property/trademark/watch-monitoring" },
    summary: "A fashion label wanted to detect and block similar trademark filings before they reached registration.",
    challenge: "Dozens of small local retailers were filing phonetically similar names in the Trademark Registry.",
    approach: "We set up an active Trademark Watch & Monitoring program, scanning every weekly Trademark Journal and filing notices of opposition.",
    outcome: "Opposed and successfully blocked four conflicting trademark applications, maintaining absolute brand exclusivity."
  },
  {
    title: "Design Registration and Infringement Defense for D2C Smart Watch",
    slug: "d2c-smart-watch-design-registration-defense",
    industry: { label: "D2C & E-commerce", href: "/industries/d2c-ecommerce" },
    service: { label: "Design Drafting & Filing", href: "/services/intellectual-property/design/drafting-filing" },
    summary: "A tech accessory brand needed to protect the design of its new smartwatch casing.",
    challenge: "Defending the design from a competitor's claim that it lacked novelty compared to existing global designs.",
    approach: "We drafted and filed the design application, compiled novelty arguments, and represented the brand in opposition hearings.",
    outcome: "Secured the design registration and successfully defended it against cancellation, preserving their market share."
  },
  {
    title: "Negotiating Influencer Marketing Agreements for Beauty D2C Brand",
    slug: "beauty-d2c-influencer-marketing-agreements",
    industry: { label: "D2C & E-commerce", href: "/industries/d2c-ecommerce" },
    service: { label: "Vendor Agreement", href: "/services/corporate-legal/contract-drafting/vendor-agreement" },
    summary: "A beauty brand required legal contracts for a multi-million rupee national influencer campaign.",
    challenge: "Securing full ownership of influencer-generated content while managing regulatory guidelines on advertising disclosures.",
    approach: "We drafted a standardized Influencer Agreement covering content ownership, ASCI disclosure rules, and exclusivity clauses.",
    outcome: "Executed contracts with 50+ tier-1 influencers, protecting marketing investments and ensuring regulatory compliance."
  },
  {
    title: "Resolving E-commerce Brand Passing Off Dispute in Delhi High Court",
    slug: "ecommerce-brand-passing-off-high-court",
    industry: { label: "D2C & E-commerce", href: "/industries/d2c-ecommerce" },
    service: { label: "Trademark Litigation", href: "/services/intellectual-property/trademark/litigation" },
    summary: "An e-commerce brand sued a competitor for passing off and infringing on their trademarked logo.",
    challenge: "The competitor was running search engine ads on the client's brand keywords and using a similar website layout.",
    approach: "We filed a lawsuit in the Delhi High Court, presented evidence of consumer confusion, and sought an interim injunction.",
    outcome: "Obtained an ad-interim injunction restraining the competitor from using the mark or running deceptive keywords ads."
  },
  // --- MANUFACTURING (9 additional) ---
  {
    title: "Structuring Master OEM Supply Agreement for Auto-Component Maker",
    slug: "automotive-oem-supply-agreement",
    industry: { label: "Manufacturing", href: "/industries/manufacturing" },
    service: { label: "Vendor Agreement", href: "/services/corporate-legal/contract-drafting/vendor-agreement" },
    summary: "An automotive component manufacturer needed a Master Supply Agreement for a major Tier-1 OEM.",
    challenge: "Balancing strict delivery guarantees, tooling IP ownership, and heavy liquidated damages clauses demanded by the OEM.",
    approach: "We negotiated and drafted the OEM contract, establishing mutual tooling IP rights, structured recall indemnities, and balanced warranty caps.",
    outcome: "Finalized the OEM contract, securing a stable 5-year supply relationship and protecting manufacturing IP."
  },
  {
    title: "Securing Industrial Design Registrations for Consumer Appliance Range",
    slug: "appliances-industrial-design-registration",
    industry: { label: "Manufacturing", href: "/industries/manufacturing" },
    service: { label: "Design Drafting & Filing", href: "/services/intellectual-property/design/drafting-filing" },
    summary: "A home appliance manufacturer sought design registrations for a new range of energy-efficient fans.",
    challenge: "Demonstrating novelty in design configurations within a highly saturated consumer goods market.",
    approach: "We drafted 4 design applications, prepared high-fidelity line drawings, and resolved examination objections regarding design novelty.",
    outcome: "Obtained design registrations for all 4 models, protecting the brand's aesthetic investments from direct knockoffs."
  },
  {
    title: "Statutory Compliance Audit and ROC Cleanup for Chemical Plant",
    slug: "chemical-manufacturing-compliance-audit",
    industry: { label: "Manufacturing", href: "/industries/manufacturing" },
    service: { label: "Statutory Compliance Advisory", href: "/services/corporate-legal/roc-compliance/statutory-compliance-advisory" },
    summary: "A chemical manufacturing firm required a comprehensive legal audit of its factories and corporate compliance.",
    challenge: "Consolidating approvals across Factories Act, pollution controls, labor laws, and ROC corporate registers.",
    approach: "We ran a legal audit, filed condonations for late corporate declarations, and updated environmental compliance registers.",
    outcome: "Brought all manufacturing units and ROC records to 100% compliance, avoiding heavy municipal and corporate penalties."
  },
  {
    title: "Filing Machinery Innovation Patent for Textile Manufacturer",
    slug: "textile-machinery-innovation-patent",
    industry: { label: "Manufacturing", href: "/industries/manufacturing" },
    service: { label: "Patent Drafting & Filing", href: "/services/intellectual-property/patent/drafting-filing" },
    summary: "A textile firm sought patent protection for a customized automation mechanism integrated into their weaving machines.",
    challenge: "Drafting technical patent claims that cover the mechanical automation without overlapping with prior art.",
    approach: "We ran a global patent search, drafted complete specifications detailing the mechanical mechanism, and filed the application.",
    outcome: "Successfully filed the patent, securing priority rights and blocking local machinery fabricators from replicating the tech."
  },
  {
    title: "Negotiating Raw Material Offtake Agreement for Steel Manufacturer",
    slug: "steel-manufacturing-offtake-agreement",
    industry: { label: "Manufacturing", href: "/industries/manufacturing" },
    service: { label: "Vendor Agreement", href: "/services/corporate-legal/contract-drafting/vendor-agreement" },
    summary: "A steel fabrication company entered into a long-term raw material supply contract with a mining conglomerate.",
    challenge: "Drafting price-reconciliation formulas and force majeure clauses to mitigate raw material price volatility.",
    approach: "We drafted the Offtake Agreement, incorporating a customized sliding scale pricing model and strict quality dispute mechanisms.",
    outcome: "Completed the agreement within 6 weeks, guaranteeing a reliable raw material feed and protecting margins."
  },
  {
    title: "Filing Design Registration and Defending Infringement for Furniture Maker",
    slug: "furniture-manufacturing-design-infringement",
    industry: { label: "Manufacturing", href: "/industries/manufacturing" },
    service: { label: "Design Drafting & Filing", href: "/services/intellectual-property/design/drafting-filing" },
    summary: "A modular furniture maker successfully defended their registered chair design from a competitor's plagiarism.",
    challenge: "The competitor released a near-identical chair and filed a cancellation request against the client's design.",
    approach: "We filed a design piracy suit, presented proof of novelty, and represented the manufacturer in the registry cancellation hearings.",
    outcome: "Defended the design validity and obtained a permanent injunction restraining the competitor from selling the infringing furniture."
  },
  {
    title: "Resolving Machinery Lease and IP Dispute in Commercial Court",
    slug: "machinery-lease-ip-commercial-dispute",
    industry: { label: "Manufacturing", href: "/industries/manufacturing" },
    service: { label: "Vendor Agreement", href: "/services/corporate-legal/contract-drafting/vendor-agreement" },
    summary: "A manufacturer sued a machinery supplier for leasing defective packaging machines and claiming rights to client product recipes.",
    challenge: "Resolving the contract breach and securing the proprietary recipes under commercial litigation rules.",
    approach: "We filed a suit in the Commercial Court under the Commercial Courts Act, seeking machine return and trade secret protection.",
    outcome: "Secured a court decree ordering the return of the supplier's machinery and declaring the product recipes as sole client property."
  },
  {
    title: "Drafting Vendor MSAs and Quality Agreements for Pharma Plant",
    slug: "pharmaceutical-vendor-msa-quality-agreements",
    industry: { label: "Manufacturing", href: "/industries/manufacturing" },
    service: { label: "Vendor Agreement", href: "/services/corporate-legal/contract-drafting/vendor-agreement" },
    summary: "A pharmaceutical formulation manufacturer needed updated vendor MSAs and Quality Agreements for raw API suppliers.",
    challenge: "Aligning vendor contracts with regulatory mandates and strict liability for batch failures.",
    approach: "We drafted comprehensive MSAs containing strict quality metrics, testing protocols, and liability for product recalls.",
    outcome: "Implemented standardized vendor agreements across 15 key suppliers, ensuring quality compliance and risk transfer."
  },
  {
    title: "Recovering Equipment Assets for Manufacturing Unit via DRT",
    slug: "manufacturing-unit-equipment-drt-recovery",
    industry: { label: "Manufacturing", href: "/industries/manufacturing" },
    service: { label: "SARFAESI Proceedings", href: "/services/litigation/banking-finance/sarfaesi-proceedings" },
    summary: "A manufacturing company recovered leased heavy industrial machinery from a defaulted commercial lessee.",
    challenge: "The lessee locked the factory site and refused entry, contesting the lease termination in the local civil court.",
    approach: "We initiated DRT recovery applications, got court commissioners appointed, and coordinated physical recovery of the equipment.",
    outcome: "Successfully repossessed the heavy machinery worth 18 million rupees within 7 months, mitigating lease loss."
  }
];

export function findCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
