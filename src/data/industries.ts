export type Industry = {
  name: string;
  slug: string;
  tier: "priority" | "second";
  tagline: string;
  summary: string;
  overview: string;
  stats: { value: string; label: string }[];
  challenges: { title: string; description: string }[];
  howWeHelp: { step: number; title: string; description: string }[];
  risks: string[];
  relatedServices: { label: string; href: string }[];
  complianceFramework: string[];
  bestPractices: string[];
  faqs: { q: string; a: string }[];
};

export const industries: Industry[] = [
  {
    name: "Startups",
    slug: "startups",
    tier: "priority",
    tagline: "From incorporation to institutional funding, we build your legal runway.",
    summary: "Incorporation, IP protection and legal advisory tailored for early-stage founders.",
    overview: "Early-stage startups operate in a high-velocity environment where strategic decisions on corporate structure and intellectual property can make or break future funding rounds. We provide continuous support across company incorporation, founders agreements, patent filing, trademark registrations, and capital raising documentation to ensure your startup remains legally sound, fully compliant, and investor-ready.",
    stats: [
      { value: "48h", label: "Average incorporation turnaround time" },
      { value: "95%+", label: "Success rate in startup trademark registrations" },
      { value: "₹200Cr+", label: "Client funding transactions facilitated" },
      { value: "500+", label: "Early-stage founders advised across India" }
    ],
    challenges: [
      {
        title: "Co-Founder Disputes",
        description: "Unclear division of equity ownership, vesting schedules, and intellectual property rights frequently result in deadlocked governance or early departures that derail progress."
      },
      {
        title: "Untransferred IP Asset",
        description: "Failing to execute formal intellectual property assignment agreements from developers, employees, or founders to the newly incorporated entity compromises corporate value during investor due diligence."
      },
      {
        title: "DPIIT Compliance Gaps",
        description: "Failing to align the startup setup with DPIIT recognition guidelines prevents access to essential tax holidays, expedited patent examination routes, and government public procurement relaxations."
      },
      {
        title: "FEMA/FDI Violations",
        description: "Receiving early-stage capital from overseas angel investors or venture funds without filing the mandatory FC-GPRS forms with the RBI leads to steep regulatory compounding fees."
      }
    ],
    howWeHelp: [
      {
        step: 1,
        title: "Corporate Structuring",
        description: "Determine the ideal entity model, draft customized articles of association, and establish a clear cap-table structure."
      },
      {
        step: 2,
        title: "Founders Agreement Audit",
        description: "Draft comprehensive agreements detailing reverse vesting schedules, equity cliffs, IP assignments, and clear exit mechanisms."
      },
      {
        step: 3,
        title: "DPIIT & Startup Registrations",
        description: "Apply for DPIIT recognition and guide your team through section 80-IAC tax exemption applications."
      },
      {
        step: 4,
        title: "IP Protection & Auditing",
        description: "Identify patentable technology, register core trademarks, and copyright software codes before raising external capital."
      },
      {
        step: 5,
        title: "Funding & Advisory Support",
        description: "Review Term Sheets, draft Shareholders Agreements (SHA), and manage the entire compliance process during investment rounds."
      }
    ],
    risks: [
      "Founders skipping IP protection until after a raise, losing priority on brand and product names.",
      "Verbal agreements between co-founders with no written equity or IP assignment terms.",
      "Generic incorporation choices that create tax or compliance headaches later.",
      "Non-compliance with board and shareholder meeting timelines under the Companies Act 2013.",
      "Improper employee ESOP pools structured without formal vesting and exercise guidelines."
    ],
    relatedServices: [
      { label: "Startup India Registration", href: "/services/corporate-legal/company-formation/startup-india-registration" },
      { label: "Founders Agreement", href: "/services/corporate-legal/contract-drafting/founders-agreement" },
      { label: "Startup IP Protection", href: "/services/intellectual-property/ip-advisory/startup-ip-protection" },
      { label: "Trademark Filing & Drafting", href: "/services/intellectual-property/trademark/filing-drafting" },
    ],
    complianceFramework: [
      "DPIIT Startup Recognition and Tax Exemption criteria (Section 80-IAC)",
      "Companies Act, 2013 regulatory and equity board reporting frameworks",
      "FEMA compliance for Foreign Direct Investments (FDI) via capital instruments",
      "Digital Personal Data Protection (DPDP) Act, 2023 for customer data privacy",
      "Income Tax Act, 1961 provisions on angel tax exemptions"
    ],
    bestPractices: [
      "Execute an airtight Founders Agreement detailing vesting schedules, IP transfer, and lock-in periods.",
      "Apply for trademark protection for the brand name and logo before public launch to secure priority.",
      "Establish a clean cap-table registry and keep ROC registers up-to-date from day one.",
      "File RBI declarations within 30 days of receiving foreign investments to avoid compounding penalties.",
      "Adopt compliant data collection systems to satisfy the DPDP Act provisions early on."
    ],
    faqs: [
      {
        q: "What is DPIIT Startup Recognition and what are its benefits?",
        a: "It is a recognition granted by the Department for Promotion of Industry and Internal Trade. Benefits include access to tax holidays, simplified compliance, fast-track patent filings, and relaxed public procurement norms."
      },
      {
        q: "Why is a founders' agreement critical for early-stage startups?",
        a: "It defines ownership splits, equity vesting schedules, roles, and exit options. This prevents co-founder disputes and provides clarity to incoming institutional investors."
      },
      {
        q: "How can startups fast-track patent applications in India?",
        a: "Recognized startups can file a Request for Expedited Examination (Form 18A) with the Patent Office to secure a patent grant within 12 to 18 months, compared to the standard 3-5 years."
      },
      {
        q: "What is the difference between a Term Sheet and a Shareholders Agreement?",
        a: "A Term Sheet is a non-binding outline of the primary terms of investment, whereas the Shareholders Agreement is a comprehensive, legally binding contract governing shareholder rights, board representation, and share transfers."
      },
      {
        q: "How is an ESOP pool created and managed in India?",
        a: "An ESOP pool requires shareholder approval via a special resolution. The board defines the ESOP scheme, details the vesting schedule, option price, and exercise windows in accordance with ROC rules."
      },
      {
        q: "Can a partnership firm or LLP register for Startup India?",
        a: "Yes, LLPs and Registered Partnership Firms are eligible for Startup India recognition, provided their annual turnover has not exceeded ₹100 crores and they have been registered for less than 10 years."
      }
    ]
  },
  {
    name: "SaaS & Tech",
    slug: "saas-tech",
    tier: "priority",
    tagline: "Securing your source code, algorithms, and cloud agreements globally.",
    summary: "Software licensing, IP portfolios and data compliance for technology companies.",
    overview: "Software-as-a-Service (SaaS) and technology enterprises require robust legal frameworks that address intellectual property protection, international data flows, cloud uptime liabilities, and software subscription licensing. With the implementation of the DPDP Act 2023, data protection compliance has become a primary operational pillar. We assist tech platforms in securing their source code, registering international patents, drafting enterprise SaaS agreements, and building localized data privacy models.",
    stats: [
      { value: "100%", label: "IP assignment compliance across tech client teams" },
      { value: "48h", label: "SaaS Enterprise SLA review turnaround" },
      { value: "10+", label: "Global software patents drafted and prosecuted" },
      { value: "300+", label: "SaaS agreements drafted for cross-border transactions" }
    ],
    challenges: [
      {
        title: "Software IP Leakage",
        description: "Without formal work-for-hire clauses and intellectual property assignments in developer and vendor agreements, source code rights can legally remain with independent contractors."
      },
      {
        title: "DPDP Data Liability",
        description: "Processing user data without clear, itemized consent forms and robust data processing agreements (DPA) exposes SaaS platforms to heavy statutory penalties in India."
      },
      {
        title: "Enterprise SLA Negligences",
        description: "Signing generic Service Level Agreements with corporate clients without clear liability limits, service credit caps, or force majeure definitions results in high damage exposures."
      },
      {
        title: "Patent Eligibility Obstacles",
        description: "Navigating Section 3(k) restrictions on patenting computer programs in India requires expert claim crafting focusing on hardware integrations and clear technical effects."
      }
    ],
    howWeHelp: [
      {
        step: 1,
        title: "IP Protection Mapping",
        description: "Identify and register copyrights for proprietary source code and assess tech stacks for patent eligibility."
      },
      {
        step: 2,
        title: "SaaS Agreement Drafting",
        description: "Draft user-facing Terms of Service, Enterprise SaaS Master Service Agreements (MSA), and detailed SLA metrics."
      },
      {
        step: 3,
        title: "DPDP Act Alignment",
        description: "Audit data collection channels, configure consent managers, and draft robust Data Processing Agreements."
      },
      {
        step: 4,
        title: "Vendor Contract Security",
        description: "Structure airtight service contracts with third-party software developers, API providers, and cloud hosting platforms."
      },
      {
        step: 5,
        title: "Exit & Investment Support",
        description: "Establish clean intellectual property records and compliance audits to guarantee smooth tech mergers and acquisitions."
      }
    ],
    risks: [
      "Source code and product features shipped without copyright or patent protection.",
      "SaaS agreements that don't clearly cover data ownership, SLAs or liability caps.",
      "Trademark conflicts discovered only after significant brand investment.",
      "Failing to draft robust data security and breach notification protocols under the IT Act.",
      "Unrestricted open-source software (OSS) library use compromising proprietary codebases."
    ],
    relatedServices: [
      { label: "SaaS Agreement", href: "/services/corporate-legal/contract-drafting/saas-agreement" },
      { label: "Patent Drafting & Filing", href: "/services/intellectual-property/patent/drafting-filing" },
      { label: "Copyright Registration", href: "/services/intellectual-property/copyright/registration" },
      { label: "IP Strategy & Portfolio Management", href: "/services/intellectual-property/ip-advisory/strategy-portfolio-management" },
    ],
    complianceFramework: [
      "Digital Personal Data Protection (DPDP) Act, 2023 consent architecture",
      "Information Technology Act, 2000 (Section 43A and Section 72A data liability)",
      "Intermediary Liability guidelines for cloud and hosting platforms under IT Rules",
      "WIPO Copyright Treaty provisions for cross-border software copyright protection",
      "CERT-In cyber security incident reporting mandates and guidelines"
    ],
    bestPractices: [
      "Draft customized SaaS Master Service Agreements (MSA) with robust SLAs, liability caps, and uptime guarantees.",
      "Register copyrights for proprietary software source code and establish trade secret protocols for algorithms.",
      "Implement privacy policies and consent banners fully compliant with the DPDP Act 2023 framework.",
      "Run regular open-source software (OSS) audits to confirm compliance with copyleft licenses like GPL.",
      "Verify all independent contractor agreements carry explicit, retroactive IP assignment clauses."
    ],
    faqs: [
      {
        q: "How does the DPDP Act 2023 impact SaaS platforms?",
        a: "SaaS companies must establish clear consent managers, state the exact purpose of data collection, and provide users with rights to erase or correct their personal data."
      },
      {
        q: "Can SaaS software algorithms be patented in India?",
        a: "Algorithms per se are excluded from patentability. However, if the software is integrated with hardware or exhibits a clear technical effect solving a specific hardware problem, it can be patented."
      },
      {
        q: "What are key clauses to include in a SaaS Master Service Agreement?",
        a: "Key clauses include subscription scope, user limits, payment schedules, data ownership, SLA metrics, liability caps, and IP protection terms."
      },
      {
        q: "What is a Data Processing Agreement (DPA) and when is it required?",
        a: "A DPA is a legally binding contract between a data controller (the SaaS company) and a data processor (like cloud hosts or API vendors) governing how personal data is handled and protected."
      },
      {
        q: "Can I protect my software user interface (UI/UX) from being copied?",
        a: "Yes, you can protect the aesthetic layout, icons, and screens of your software UI through Design Registration under the Designs Act, and visual brand elements under Trademark Law."
      },
      {
        q: "What are the legal implications of using open-source code in proprietary SaaS products?",
        a: "Using open-source code with copyleft licenses (such as GPL) can legally compel you to release your entire proprietary source code to the public. Permissive licenses (like MIT or Apache) carry fewer restrictions."
      }
    ]
  },
  {
    name: "D2C & E-commerce",
    slug: "d2c-ecommerce",
    tier: "priority",
    tagline: "Defending your brand, product designs, and packaging in the digital marketplace.",
    summary: "Brand protection, marketplace disputes and consumer compliance.",
    overview: "Direct-to-Consumer (D2C) and e-commerce brands operate in a highly competitive digital space where brand identity, packaging designs, and product aesthetics are their primary assets. Safeguarding these assets from online counterfeiters, design copycats, and marketplace hijackers is critical to maintaining market share. We help brands secure trademark protection, register unique product shapes, draft clear consumer policies, and execute enforcement actions across marketplaces.",
    stats: [
      { value: "1,200+", label: "Marketplace listings taken down for trademark infringement" },
      { value: "450+", label: "Distinct brand names and logos registered" },
      { value: "150+", label: "Packaging and product design registrations filed" },
      { value: "100%", label: "Legal compliance on e-commerce refund & return policies" }
    ],
    challenges: [
      {
        title: "Marketplace Listing Hijacking",
        description: "Third-party sellers listing counterfeit items on Amazon or Flipkart using your brand name dilutes brand value and results in negative customer reviews."
      },
      {
        title: "Product Packaging Duplication",
        description: "Competitors copying unique container designs, box styles, or cosmetic bottle shapes to cash in on your brand's aesthetic appeal."
      },
      {
        title: "E-Commerce Legal Metrology",
        description: "Non-compliance with packaging declarations and mandatory disclosures on online product display pages leads to severe state metrology inspector notices."
      },
      {
        title: "Consumer Litigation",
        description: "Misleading advertisements, lack of a clear grievance redressal mechanism, or non-compliant refund policies can trigger class-action consumer court complaints."
      }
    ],
    howWeHelp: [
      {
        step: 1,
        title: "Brand Registry Strategy",
        description: "Register trademarks across relevant classes to enroll in Amazon Brand Registry and Flipkart IP Protection programs."
      },
      {
        step: 2,
        title: "Design Registration Filing",
        description: "Protect custom container shapes, product patterns, and packaging aesthetics under the Designs Act 2000."
      },
      {
        step: 3,
        title: "Policies & Terms Drafting",
        description: "Draft comprehensive website Terms of Use, Privacy Policies, and Refund Policies compliant with Consumer Protection rules."
      },
      {
        step: 4,
        title: "Legal Metrology Compliance",
        description: "Review online product display layouts and physical packaging templates to ensure compliance with metrology guidelines."
      },
      {
        step: 5,
        title: "Infringement & Takedowns",
        description: "Send cease-and-desist notices to counterfeiters and manage administrative takedown requests on major marketplaces."
      }
    ],
    risks: [
      "Counterfeit listings and brand misuse across online marketplaces.",
      "Packaging and design copied by competitors without design registration in place.",
      "Consumer protection and e-commerce compliance gaps in terms and policies.",
      "Statutory penalties for failing to register as an importer or manufacturer under Legal Metrology.",
      "Data privacy exposures on direct websites storing customer card details or addresses."
    ],
    relatedServices: [
      { label: "Trademark Watch & Monitoring", href: "/services/intellectual-property/trademark/watch-monitoring" },
      { label: "Design Drafting & Filing", href: "/services/intellectual-property/design/drafting-filing" },
      { label: "Terms & Conditions / Privacy Policy", href: "/services/corporate-legal/contract-drafting/terms-privacy-policy" },
      { label: "Trademark Litigation", href: "/services/intellectual-property/trademark/litigation" },
    ],
    complianceFramework: [
      "Consumer Protection (E-Commerce) Rules, 2020 regulatory guidelines",
      "Legal Metrology (Packaged Commodities) Rules packaging declarations",
      "Trademark Registry rules for marketplace brand registry enrollments",
      "Digital Personal Data Protection (DPDP) Act, 2023 for e-commerce checkouts",
      "Legal Metrology Act, 2009 registration requirements for manufacturers/importers"
    ],
    bestPractices: [
      "Secure trademark registrations for all brand names, product titles, and logos to enable marketplace brand registries.",
      "Apply for industrial design registration for custom packaging, bottles, or container shapes before launch.",
      "Draft clear refund, return, and shipping terms aligned with Indian Consumer Protection guidelines.",
      "Display the name and contact details of the Grievance Officer clearly on the e-commerce store.",
      "Conduct regular trademark searches to identify and address copycats before they establish market presence."
    ],
    faqs: [
      {
        q: "How do we tackle copycats and counterfeiters on Amazon or Flipkart?",
        a: "With a registered trademark, you can enroll in Amazon Brand Registry or Flipkart Brand Infringement programs to trigger immediate takedowns of unauthorized listings."
      },
      {
        q: "What is the importance of design registration for D2C brands?",
        a: "It protects the aesthetic look, packaging, or product shape from copycats. A design registration prevents competitors from duplicating the visual design of your product."
      },
      {
        q: "What disclosures are mandatory under Legal Metrology Rules for e-commerce?",
        a: "E-commerce sites must declare the country of origin, importer details, net quantity, manufacturer contact, manufacturing date, and maximum retail price (MRP) on the product page."
      },
      {
        q: "Who is an E-Commerce Grievance Officer and is appointing one mandatory?",
        a: "Yes, under the Consumer Protection (E-Commerce) Rules 2020, every e-commerce entity must appoint a Grievance Officer and display their details on the portal to resolve customer complaints within 48 hours."
      },
      {
        q: "Can a D2C brand register its product formulations in India?",
        a: "Product formulations (e.g. cosmetics or food products) can be patented if they are novel, involve an inventive step, and are not mere admixtures under Section 3(e) of the Patents Act."
      },
      {
        q: "What happens if a brand fails to comply with Legal Metrology packaging rules?",
        a: "Non-compliance can result in product seizures by metrology inspectors, compounding fines starting from ₹25,000 per violation, and potential director prosecution for repeat offenses."
      }
    ]
  },
  {
    name: "Manufacturing",
    slug: "manufacturing",
    tier: "priority",
    tagline: "Industrial design protection, supplier contract compliance, and statutory clearances.",
    summary: "Contracts, IP enforcement and industrial design registration.",
    overview: "Manufacturing companies require structured legal frameworks to manage factory operations, secure equipment designs, govern supply chains, and maintain environmental clearances. Operating multiple units demands strict compliance with labor and environmental laws, while custom product designs need protection from competitor duplication. We advise manufacturers on factory setup filings, vendor supply contracts, design registrations, and environmental law compliance.",
    stats: [
      { value: "250+", label: "Industrial designs successfully registered and defended" },
      { value: "100%", label: "Environmental clearance audit success rate" },
      { value: "50+", label: "Enterprise vendor supply agreements drafted" },
      { value: "15+", label: "Factory setups advised on statutory filings" }
    ],
    challenges: [
      {
        title: "Vendor Machinery Copying",
        description: "Third-party suppliers or mold makers copying proprietary machinery configurations or product shapes to produce cheaper alternatives for competitors."
      },
      {
        title: "Environmental Clearances",
        description: "Failing to obtain or renew Consent to Establish (CTE) and Consent to Operate (CTO) from State Pollution Control Boards leads to immediate plant closure orders."
      },
      {
        title: "Labor Law Compliance",
        description: "Navigating state-specific factory regulations, contract labor laws, and safety compliance without robust documentation can trigger audits and shut downs."
      },
      {
        title: "Supply Chain Disruptions",
        description: "Inadequate vendor agreements lacking clear quality control terms, delivery timelines, or price escalation formulas can disrupt production schedules."
      }
    ],
    howWeHelp: [
      {
        step: 1,
        title: "Design Monopoly Search",
        description: "Conduct searches to identify existing designs and file registrations for unique physical shapes."
      },
      {
        step: 2,
        title: "Vendor Agreement Security",
        description: "Draft supply, tooling, and development contracts with strict confidentiality and IP protection terms."
      },
      {
        step: 3,
        title: "Pollution Board Clearances",
        description: "Manage applications and clearances under Air, Water, and Hazardous Waste acts with State Pollution Boards."
      },
      {
        step: 4,
        title: "Factory Compliance Audit",
        description: "Perform comprehensive audits of labor registrations, safety logs, and statutory reporting under state laws."
      },
      {
        step: 5,
        title: "Dispute Litigation",
        description: "Manage commercial recovery suits and represent your business in contract disputes with raw material suppliers."
      }
    ],
    risks: [
      "Proprietary processes and machinery designs left unprotected.",
      "Vendor and supply contracts missing IP assignment and confidentiality clauses.",
      "Statutory compliance gaps across multiple manufacturing units.",
      "Factory operations starting before receiving final Consent to Operate (CTO) clearances.",
      "Breach of contract claims arising from unchecked raw material price escalations."
    ],
    relatedServices: [
      { label: "Design Drafting & Filing", href: "/services/intellectual-property/design/drafting-filing" },
      { label: "Vendor Agreement", href: "/services/corporate-legal/contract-drafting/vendor-agreement" },
      { label: "Statutory Compliance Advisory", href: "/services/corporate-legal/roc-compliance/statutory-compliance-advisory" },
    ],
    complianceFramework: [
      "Factories Act, 1948 and state factory rules",
      "Industrial Disputes Act and labor welfare legislations",
      "State pollution control board clearances (CTE/CTO under Air and Water Acts)",
      "Contract Labour (Regulation & Abolition) Act, 1970 registrations",
      "Environment Protection Act, 1986 statutory compliance rules"
    ],
    bestPractices: [
      "Register industrial designs for all physical product shapes and machinery configurations to secure visual monopolies.",
      "Standardize vendor and raw material supply agreements with clear IP ownership and trade secret protection terms.",
      "Perform periodic audits of environmental clearances and factory licenses to maintain compliance.",
      "Execute strict Non-Disclosure Agreements (NDAs) with tooling vendors and third-party manufacturers.",
      "Create formal safety protocols and incident report workflows to satisfy factory inspector audits."
    ],
    faqs: [
      {
        q: "How do we protect proprietary manufacturing processes?",
        a: "Processes can be protected under patent law (if novel and inventive) or maintained as trade secrets via strict employee and vendor NDA agreements."
      },
      {
        q: "What are the CTE and CTO clearances under pollution laws?",
        a: "Consent to Establish (CTE) is required before starting construction of a factory unit. Consent to Operate (CTO) must be obtained before beginning actual industrial operations."
      },
      {
        q: "What IP clauses are critical in vendor supply agreements?",
        a: "Airtight clauses must cover: pre-existing IP ownership, newly developed IP assignment, non-disclosure of specifications, and limits on tool replication."
      },
      {
        q: "How does the Contract Labour Act apply to manufacturing units?",
        a: "If a factory employs 20 or more contract workers (or fewer depending on state rules), it must obtain registration as a Principal Employer and ensure the contractor holds a valid license."
      },
      {
        q: "What is the difference between a Patent and a Design Registration for physical products?",
        a: "A Patent protects the functional aspect, working mechanism, or process of a product, while a Design Registration protects only the aesthetic design, shape, or pattern."
      },
      {
        q: "What legal remedies are available if a tooling vendor copies our mold?",
        a: "If the design is registered, you can file a design infringement suit for damages and get an injunction. You can also file a breach of contract suit if a signed NDA or vendor agreement is in place."
      }
    ]
  },
  {
    name: "Fintech & NBFCs",
    slug: "fintech-nbfc",
    tier: "priority",
    tagline: "RBI licensing audits, payment flow compliance, and airtight DPDP privacy models.",
    summary: "RBI compliance, payment aggregators, lending licenses, and customer data privacy models.",
    overview: "Financial Technology (Fintech) and Non-Banking Financial Companies (NBFCs) operate in one of India's most strictly regulated business landscapes. Regulatory compliance with the Reserve Bank of India (RBI) directions, payment aggregator guidelines, co-lending partnerships, and customer data privacy laws are essential to avoid severe operational bans. We help platforms secure licensing, structure co-lending agreements, protect proprietary algorithms, and implement DPDP compliant data protection models.",
    stats: [
      { value: "100%", label: "Audit compliance with RBI security guidelines" },
      { value: "30+", label: "Co-lending and partner integrations structured" },
      { value: "15+", label: "Payment gateway and NBFC licenses assisted" },
      { value: "50Cr+", label: "Daily transaction volumes under audited policies" }
    ],
    challenges: [
      {
        title: "RBI Licensing Hurdle",
        description: "Securing Payment Aggregator (PA) or NBFC registrations from the RBI requires meeting high net-worth requirements, fit-and-proper director checks, and security audits."
      },
      {
        title: "Co-Lending Contract Gaps",
        description: "Structuring credit partnerships between Fintech platforms and NBFCs without clear default loss guarantee (FLDG) definitions can violate RBI directions."
      },
      {
        title: "Financial Data Privacy",
        description: "Managing customer credit history, bank statements, and personal identity data without strict consent records violates both RBI security guidelines and the DPDP Act 2023."
      },
      {
        title: "Algorithm Protection",
        description: "Defending proprietary credit scoring algorithms and automated underwriting software from copying, given software algorithms are not directly patentable in India."
      }
    ],
    howWeHelp: [
      {
        step: 1,
        title: "Licensing Audit",
        description: "Evaluate your business model against RBI PA/PG and NBFC guidelines and manage license applications."
      },
      {
        step: 2,
        title: "Partnership Structuring",
        description: "Draft co-lending agreements, FLDG terms, and service agreements between Fintechs and banks."
      },
      {
        step: 3,
        title: "DPDP Data Architecture",
        description: "Map data flows, set up consent management logs, and draft privacy notices for sensitive financial information."
      },
      {
        step: 4,
        title: "IP Protection Filing",
        description: "File patents for hardware integrations and register trademarks for financial brands and apps."
      },
      {
        step: 5,
        title: "Terms & Security Policies",
        description: "Draft app user agreements, payment terms, wallet terms, and cybersecurity policies."
      }
    ],
    risks: [
      "Operating payment or lending platforms without appropriate RBI registration or co-lending partnerships.",
      "Failing to secure proprietary algorithmic scoring models under trade secret or patent rules.",
      "Customer data leaks violating the newly enacted Digital Personal Data Protection (DPDP) Act 2023.",
      "Using non-compliant default-loss guarantee structures with banking partners.",
      "Penalties for KYC deviations during digital user onboarding and verification."
    ],
    relatedServices: [
      { label: "Private Limited Company Registration", href: "/services/corporate-legal/company-formation/private-limited-company" },
      { label: "NDA & Founders Agreement", href: "/services/corporate-legal/contract-drafting/founders-agreement" },
      { label: "SaaS Agreement", href: "/services/corporate-legal/contract-drafting/saas-agreement" },
      { label: "Trademark Filing & Drafting", href: "/services/intellectual-property/trademark/filing-drafting" },
    ],
    complianceFramework: [
      "RBI Master Directions for NBFCs and Payment Aggregators (PA/PG guidelines)",
      "Digital Personal Data Protection (DPDP) Act, 2023 customer data guidelines",
      "KYC/AML (Anti-Money Laundering) statutory reporting compliance standards",
      "FEMA compliance rules for cross-border merchant payments",
      "Information Technology Act, 2000 provisions for electronic transactions"
    ],
    bestPractices: [
      "Establish robust escrow account mechanisms and formal merchant onboarding SLA frameworks.",
      "Register trademarks for all mobile app names and protect backend credit scoring algorithms.",
      "Draft comprehensive terms and privacy notices detail-mapping third-party API data sharing.",
      "Conduct regular third-party cybersecurity and code vulnerability audits.",
      "Ensure all user consent for credit checks (CIBIL/Experian) is explicitly logged and stored."
    ],
    faqs: [
      {
        q: "What licensing is required for a new Fintech platform in India?",
        a: "Depending on your model, you may need a Payment Aggregator (PA) license, a Peer-to-Peer (P2P) lending license, or a formal co-lending tie-up with an RBI-registered NBFC."
      },
      {
        q: "How does the DPDP Act 2023 affect Fintech platforms?",
        a: "Fintech platforms handle sensitive personal financial records. You must obtain explicit, consent-based, itemized approvals from users before collecting or sharing any financial or personal data."
      },
      {
        q: "Can financial software algorithms be patented?",
        a: "Algorithms per se are not patentable under Section 3(k) of Indian patent law. However, if integrated into a hardware system demonstrating technical utility, patenting is possible."
      },
      {
        q: "What is the First Loss Default Guarantee (FLDG) limit under RBI rules?",
        a: "As per the RBI guidelines, default loss guarantees structured between Fintech platforms (LSPs) and regulated lenders (Banks/NBFCs) must not exceed 5% of the total loan portfolio value."
      },
      {
        q: "Can a Fintech company accept customer money in a normal current account?",
        a: "No, platforms acting as Payment Aggregators must route customer funds through an Escrow Account opened with a scheduled commercial bank, operating under strict RBI guidelines."
      },
      {
        q: "What are the rules for storing credit card credentials of customers?",
        a: "Under the RBI card-on-file tokenization guidelines, merchants cannot store actual credit/debit card numbers. All card transactions must be processed via encrypted card tokens."
      }
    ]
  },
  {
    name: "Healthcare & Life Sciences",
    slug: "healthcare-pharma",
    tier: "priority",
    tagline: "Securing drug patents, managing clinical trial compliance, and telehealth legal risks.",
    summary: "Drug patents, CDSCO compliance, clinical trial protection, and digital health records liability.",
    overview: "Pharma, biotech, and healthcare organizations operate in a highly technical and strictly monitored compliance ecosystem. From ensuring drug patent protection and managing clinical trial agreements to securing health data on telehealth platforms, these operations demand precise legal oversight. We help healthcare organizations file patents, draft clinical trial agreements, manage CDSCO registrations, and secure medical data systems.",
    stats: [
      { value: "40+", label: "Pharmaceutical formulations and biosimilar patents filed" },
      { value: "100%", label: "CDSCO compliance audit success rate" },
      { value: "100+", label: "Clinical trial agreements and site contracts drafted" },
      { value: "10M+", label: "Patient health data records secured under privacy frameworks" }
    ],
    challenges: [
      {
        title: "Patent Evergreening Bans",
        description: "Overcoming Section 3(d) patent rejections on incremental drug discoveries by proving enhanced efficacy is a primary challenge for pharmaceutical R&D."
      },
      {
        title: "Clinical Trial Liability",
        description: "Failing to draft balanced Clinical Trial Agreements (CTA) with clear injury compensation, investigator duties, and IP assignment clauses can lead to severe litigation."
      },
      {
        title: "Telehealth Data Breach",
        description: "Digital health apps collecting electronic health records (EHR) face high liability under the DPDP Act 2023 for any unauthorized access to patient data."
      },
      {
        title: "CDSCO Labeling Compliances",
        description: "Violating the Drugs and Cosmetics Act rules regarding drug descriptions, manufacturing declarations, and warning labels can result in product recall orders."
      }
    ],
    howWeHelp: [
      {
        step: 1,
        title: "Patent Patentability Search",
        description: "Analyze formulations against Section 3(d) and file patent applications globally."
      },
      {
        step: 2,
        title: "Clinical Trial Agreements",
        description: "Draft and review site agreements, investigator forms, and patient consent documentation."
      },
      {
        step: 3,
        title: "EHR Privacy Protection",
        description: "Implement data encryption policies and DPDP compliant consent logs for telehealth apps."
      },
      {
        step: 4,
        title: "CDSCO Registration Support",
        description: "Guide your business through drug licensing applications and labeling compliance audits."
      },
      {
        step: 5,
        title: "Formulation IP Security",
        description: "Draft non-disclosure and trade secret agreements with formulation labs and research staff."
      }
    ],
    risks: [
      "Competitor biosimilar launches due to poorly drafted patent claims or filing delays.",
      "Violating CDSCO or FDA compliance standards during clinical trials or product labeling.",
      "Data privacy breaches on digital health platforms storing electronic health records (EHR).",
      "Legal penalties for running unregistered diagnostic centers or e-pharmacy platforms.",
      "Breaches of patient confidentiality under medical council regulations."
    ],
    relatedServices: [
      { label: "Patent Drafting & Filing", href: "/services/intellectual-property/patent/drafting-filing" },
      { label: "Trademark Filing & Drafting", href: "/services/intellectual-property/trademark/filing-drafting" },
      { label: "Founders Agreement", href: "/services/corporate-legal/contract-drafting/founders-agreement" },
      { label: "Vendor Agreement", href: "/services/corporate-legal/contract-drafting/vendor-agreement" },
    ],
    complianceFramework: [
      "Drugs and Cosmetics Act, 1940 and CDSCO regulations",
      "Indian Patent Act, 1970 (Section 3(d) efficacy standards)",
      "National Digital Health Mission (NDHM) guidelines on medical records",
      "Telemedicine Practice Guidelines, 2020 for remote consults",
      "Digital Personal Data Protection (DPDP) Act, 2023 for health records"
    ],
    bestPractices: [
      "Conduct prior-art patent searches globally before entering clinical trials or investing in formulation R&D.",
      "Execute rigid confidentiality and IP assignment agreements with all clinical trial sites and research staff.",
      "Secure distinct product packaging shapes and pharmaceutical brand names under design and trademark rules.",
      "Train clinical research teams on adverse event reporting timelines to ensure compliance.",
      "Encrypt all patient record databases and enforce access log restrictions to meet privacy laws."
    ],
    faqs: [
      {
        q: "What is Section 3(d) of the Indian Patent Act?",
        a: "Section 3(d) prevents the 'evergreening' of patents. It states that a mere discovery of a new form of a known substance which does not result in the enhancement of the known efficacy is not patentable."
      },
      {
        q: "Can medical diagnostic software be patented in India?",
        a: "Software that processes diagnostic data can be protected as copyright (for source code) and potentially patented if it interfaces with diagnostic hardware to achieve a new technical effect."
      },
      {
        q: "How do we protect patient data on health apps?",
        a: "Implement end-to-end encryption, define granular user consent flows under the DPDP Act, and store data within compliant local hosting servers."
      },
      {
        q: "Can doctors prescribe medicines via video consultation under Indian law?",
        a: "Yes, under the Telemedicine Practice Guidelines 2020, registered medical practitioners can prescribe medicines remotely, provided they follow the designated consult and consent protocols."
      },
      {
        q: "What is the penalty for selling medicines online without an e-pharmacy license?",
        a: "Operating an e-pharmacy without regulatory approvals can lead to show-cause notices from state drug controllers, product supply bans, and director prosecution under the Drugs & Cosmetics Act."
      },
      {
        q: "What are key components of a Clinical Trial Agreement?",
        a: "A Clinical Trial Agreement must cover: study protocols, patient safety policies, data confidentiality, intellectual property ownership, indemnification, and trial funding schedules."
      }
    ]
  },
  {
    name: "Media & Entertainment",
    slug: "media-entertainment",
    tier: "priority",
    tagline: "Protecting scripts, music, and streaming rights with airtight production contracts.",
    summary: "Copyright licensing, production contracts, digital streaming agreements, and piracy enforcement.",
    overview: "Media and entertainment businesses face complex legal challenges in intellectual property acquisition, talent management, distribution agreements, and digital piracy. Securing copyright ownership, licensing music catalogs, and drafting production contracts are essential for successful content creation and distribution. We provide legal guidance on copyright registrations, production agreements, streaming platform distribution contracts, and anti-piracy enforcement.",
    stats: [
      { value: "500+", label: "Copyright registrations filed for scripts, audio, and visual works" },
      { value: "50+", label: "Production agreements structured for feature films and web series" },
      { value: "100%", label: "Success rate in securing anti-piracy blocking injunctions" },
      { value: "₹100Cr+", label: "Content licensing and distribution rights managed" }
    ],
    challenges: [
      {
        title: "IP Ownership Disputes",
        description: "Without formal work-for-hire contracts, freelance writers, composers, or actors can legally claim copyright ownership over their contributions to a film or show."
      },
      {
        title: "Digital Piracy Losses",
        description: "Unauthorized distribution of copyrighted material on torrent sites and messaging apps can lead to massive box office and streaming revenue losses."
      },
      {
        title: "Rights Clearance Delays",
        description: "Failing to secure clearances for music tracks, stock footage, or brand appearances in your content can trigger copyright infringement lawsuits and distribution blocks."
      },
      {
        title: "Intermediary Compliance",
        description: "Digital platforms hosting user-uploaded content must comply with IT Act rules to retain their safe harbor status and avoid copyright liability."
      }
    ],
    howWeHelp: [
      {
        step: 1,
        title: "Copyright Filing Strategy",
        description: "Register screenplays, music compositions, and final video content with the Copyright Registry."
      },
      {
        step: 2,
        title: "Production Contract Security",
        description: "Draft actor agreements, crew contracts, and talent releases with clear IP assignment clauses."
      },
      {
        step: 3,
        title: "Anti-Piracy Enforcement",
        description: "Secure John Doe injunction orders from High Courts to block piracy sites and disable illegal links."
      },
      {
        step: 4,
        title: "Distribution Agreements",
        description: "Draft content licensing contracts, theatrical distribution terms, and OTT platform release agreements."
      },
      {
        step: 5,
        title: "IP Auditing & Due Diligence",
        description: "Conduct rights audits for catalog acquisitions and review titles and content to ensure they are free of infringement risks."
      }
    ],
    risks: [
      "Production delays and rights disputes due to incomplete actor, crew, or script clearance contracts.",
      "Massive revenue losses from online digital piracy, torrents, and unauthorized streaming platforms.",
      "Brand infringement of movie titles, character names, or television show formats.",
      "Copyright infringement claims arising from clearing music tracks or stock media late.",
      "Defamation or licensing lawsuits caused by lacking actor release forms."
    ],
    relatedServices: [
      { label: "Copyright Registration", href: "/services/intellectual-property/copyright/registration" },
      { label: "Trademark Filing & Drafting", href: "/services/intellectual-property/trademark/filing-drafting" },
      { label: "Founders Agreement", href: "/services/corporate-legal/contract-drafting/founders-agreement" },
      { label: "SaaS Agreement", href: "/services/corporate-legal/contract-drafting/saas-agreement" },
    ],
    complianceFramework: [
      "Indian Copyright Act, 1957",
      "Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021",
      "WIPO Copyright Treaty and international IP agreements",
      "Cinematograph Act, 1952 and CBFC censorship regulations",
      "Broadcasting regulations under the TRAI guidelines"
    ],
    bestPractices: [
      "Register copyrights for all screenplays, music compositions, and final audio-visual cuts before public distribution.",
      "Execute comprehensive 'Work-for-Hire' contracts to transfer all creator IP ownership directly to the production house.",
      "Secure John Doe (Ashok Kumar) injunction orders from High Courts to preemptively block pirate streaming sites.",
      "Ensure music licenses cover synchronization, mechanical, and performance rights before post-production.",
      "Perform trademark searches on movie and show titles before finalizing marketing campaigns."
    ],
    faqs: [
      {
        q: "What is a John Doe (Ashok Kumar) order?",
        a: "It is an ex-parte interim injunction order passed by Indian High Courts directing ISPs to block pirate websites distributing unauthorized copyrighted content."
      },
      {
        q: "Do I own the copyright if I hire a freelancer to write a script?",
        a: "Only if you have signed a work-for-hire contract with an explicit IP assignment clause before the writing began. Otherwise, default ownership remains with the writer."
      },
      {
        q: "Can a movie title or TV show format be protected?",
        a: "Movie titles can be trademarked under Class 41. TV show formats can be protected under copyright law as dramatic works if they are written down in a detailed format Bible."
      },
      {
        q: "What is safe harbor protection for digital platforms under the IT Act?",
        a: "Safe harbor protects intermediaries from liability for third-party content uploaded to their platform, provided they comply with government directions and remove infringing material within 36 hours of notification."
      },
      {
        q: "What is the duration of copyright protection for films in India?",
        a: "In India, copyright for a cinematographic film lasts for 60 years, beginning from the year of publication (release)."
      },
      {
        q: "What rights are managed by Copyright Societies like IPRS and PPL?",
        a: "These societies collect public performance royalties on behalf of lyricists, composers, and record labels, and issue licenses for public music play."
      }
    ]
  },
  {
    name: "Real Estate & Construction",
    slug: "real-estate",
    tier: "second",
    tagline: "Title verification, RERA compliance filings, and construction contract security.",
    summary: "Title verification reports, RERA compliances, joint development agreements, and construction dispute litigation.",
    overview: "Real estate and construction companies operate under strict local laws, land zoning rules, and the RERA regulatory system. Securing clear land titles, drafting Joint Development Agreements (JDA), managing subcontractor contracts, and defending buyer claims in consumer courts are critical for project success. We advise developers on RERA filings, property title verification, JDA drafting, and construction dispute litigation.",
    stats: [
      { value: "100+", label: "30-year property title search reports completed" },
      { value: "100%", label: "Success rate in developer RERA compliance filings" },
      { value: "40+", label: "Joint Development Agreements (JDA) drafted" },
      { value: "150+", label: "Buyer litigation disputes successfully managed" }
    ],
    challenges: [
      {
        title: "Land Title Disputes",
        description: "Purchasing or developing land with hidden mortgages, family inheritance claims, or agricultural conversion issues can stop construction indefinitely."
      },
      {
        title: "RERA Project Delays",
        description: "Failing to deliver projects on time can lead to RERA canceling registrations, imposing fines, and ordering refunds with interest to buyers."
      },
      {
        title: "Subcontractor Gaps",
        description: "Subcontractor agreements lacking clear safety norms, work milestones, or penalty clauses for delays can lead to project cost overruns."
      },
      {
        title: "Environmental Violations",
        description: "Starting construction without obtaining environmental clearances or violating local groundwater rules can lead to court work-stop orders."
      }
    ],
    howWeHelp: [
      {
        step: 1,
        title: "Land Title Verification",
        description: "Conduct 30-year public record searches and publish notices to verify clear, marketable land titles."
      },
      {
        step: 2,
        title: "JDA Contract Security",
        description: "Draft JDAs detailing area share splits, project timelines, landowner roles, and dispute resolution mechanisms."
      },
      {
        step: 3,
        title: "RERA Registration Filing",
        description: "Guide developers through RERA registration applications, escrow setup, and quarterly progress reporting."
      },
      {
        step: 4,
        title: "Construction Contracts",
        description: "Draft subcontract, architecture, material supply, and buyer allotment agreements."
      },
      {
        step: 5,
        title: "Litigation Management",
        description: "Represent developers before RERA authorities, consumer courts, and during arbitration for project disputes."
      }
    ],
    risks: [
      "Purchasing or funding land parcels with hidden title disputes, mortgages, or statutory litigation.",
      "RERA registration cancellations or daily penalties due to project delivery delays or structural modifications.",
      "Joint Development Agreements (JDA) that fail to clearly outline profit/area share splits or exit procedures.",
      "Factory or warehouse construction starting before receiving municipal building plan approvals.",
      "Statutory penalties for failing to route 70% of buyer funds into RERA escrow accounts."
    ],
    relatedServices: [
      { label: "Title Search Report", href: "/services/corporate-legal/roc-compliance/msme-registration" },
      { label: "Commercial Litigation", href: "/services/litigation/commercial-litigation" },
      { label: "Civil Matters Litigation", href: "/services/litigation/civil-criminal-litigation/civil-matters" },
      { label: "Vendor Agreement", href: "/services/corporate-legal/contract-drafting/vendor-agreement" },
    ],
    complianceFramework: [
      "Real Estate (Regulation and Development) Act, 2016 (RERA)",
      "Transfer of Property Act, 1882",
      "Indian Stamp Act, 1899 and state registration rules",
      "Right to Fair Compensation and Transparency in Land Acquisition Act",
      "State-specific Land Revenue Codes and municipal corporation acts"
    ],
    bestPractices: [
      "Conduct a comprehensive 30-year property title search and public notice publication before closing land acquisitions.",
      "Draft detailed project delivery milestones, escalation clauses, and delay penalty frames in construction agreements.",
      "Maintain absolute transparency in project funding accounts and register all buyer agreements under RERA.",
      "Ensure all land sales agreements are stamped and registered to create legal title.",
      "Perform periodic audits of factory and labor safety standards at construction sites."
    ],
    faqs: [
      {
        q: "What is a property Title Search Report?",
        a: "It is a legal report prepared by inspecting records at the Sub-Registrar's office, civil courts, and municipal bodies to verify clear ownership for the past 30 years."
      },
      {
        q: "How does RERA protect buyers in case of developer delays?",
        a: "RERA requires developers to pay monthly interest or refund the entire investment amount with interest if they fail to deliver possession by the date specified in the agreement."
      },
      {
        q: "What is a Joint Development Agreement (JDA)?",
        a: "It is a contract where a landowner partners with a developer to construct a building. The developer brings construction expertise/capital, and the parties split the built-up area or profits."
      },
      {
        q: "Why must 70% of buyer payments be deposited in a RERA Escrow Account?",
        a: "This RERA rule ensures that funds collected for a specific project are used only for land and construction costs for that project, preventing diversion to other projects."
      },
      {
        q: "Can agricultural land be used for real estate development in India?",
        a: "No, agricultural land must undergo a formal Land Conversion (Non-Agricultural conversion) process with state revenue authorities before real estate development can begin."
      },
      {
        q: "What is a Completion Certificate (CC) and why is it important?",
        a: "A CC is issued by local municipal authorities confirming a project was built according to approved plans. Selling or offering possession of a property without a CC is illegal under RERA."
      }
    ]
  },
  {
    name: "Logistics & Maritime",
    slug: "logistics-supply-chain",
    tier: "second",
    tagline: "Managing carrier liability, warehouse leasing, and import-export customs compliance.",
    summary: "Warehouse leasing, carrier agreements, cargo claims, customs regulations, and third-party logistics (3PL) contracts.",
    overview: "Logistics, supply chain, and transport businesses manage complex carriage laws, customs clearances, and warehousing contracts. Ensuring carrier liability protection, drafting cargo storage agreements, and handling import-export customs disputes are essential to avoid delays and financial claims. We assist transport firms, warehouse owners, and exporters with 3PL contracts, carrier liability management, and customs litigation.",
    stats: [
      { value: "100+", label: "3PL warehouse lease and service agreements drafted" },
      { value: "95%+", label: "Success rate in defending cargo liability claims" },
      { value: "50+", label: "Customs classification disputes resolved" },
      { value: "500K+", label: "Tons of cargo shipped under audited contract terms" }
    ],
    challenges: [
      {
        title: "Cargo Liability Claims",
        description: "Facing claims for damaged, delayed, or lost cargo during transport due to agreements lacking clear liability caps and transit insurance terms."
      },
      {
        title: "Warehouse Lease Disputes",
        description: "Lease agreements with unfair exit penalties, lacking temperature control guidelines, or missing inventory loss compensation terms can disrupt supply chain networks."
      },
      {
        title: "Customs Duty Detentions",
        description: "Misclassifying goods under HSN codes can lead to customs officials seizing shipments, imposing import duty penalties, and causing transit delays."
      },
      {
        title: "Contractor Compliance Gaps",
        description: "Logistics providers employing sub-contracted drivers without proper commercial licensing and insurance verification face massive liability in accidents."
      }
    ],
    howWeHelp: [
      {
        step: 1,
        title: "Carrier Terms Drafting",
        description: "Draft and review bills of lading, consignment notes, and carrier terms with strict liability limits."
      },
      {
        step: 2,
        title: "3PL Warehouse Security",
        description: "Draft warehouse leases and service level agreements (SLA) with inventory safety and exit terms."
      },
      {
        step: 3,
        title: "Customs Advisory Support",
        description: "Advise on HSN classifications, import-export duty assessments, and manage customs show-cause notice responses."
      },
      {
        step: 4,
        title: "Sub-Contractor Auditing",
        description: "Create driver and fleet owner verification checklists and draft commercial vehicle agreements."
      },
      {
        step: 5,
        title: "Cargo Claim Litigation",
        description: "Represent logistics firms in transport courts and consumer forums for cargo damage and delay claims."
      }
    ],
    risks: [
      "Exposure to massive cargo liability claims due to standard terms failing to limit carrier risk.",
      "Warehouse lease agreements with unfair lock-in clauses or missing facility maintenance terms.",
      "Customs detentions or penalties caused by improper import-export documentation.",
      "Logistics vehicles seized due to driver license or commercial permit compliance issues.",
      "Breaches of customer storage requirements (e.g. cold storage SLA) leading to total inventory loss."
    ],
    relatedServices: [
      { label: "Vendor Agreement", href: "/services/corporate-legal/contract-drafting/vendor-agreement" },
      { label: "SaaS Agreement", href: "/services/corporate-legal/contract-drafting/saas-agreement" },
      { label: "Commercial Litigation", href: "/services/litigation/commercial-litigation" },
      { label: "NDA & Founders Agreement", href: "/services/corporate-legal/contract-drafting/founders-agreement" },
    ],
    complianceFramework: [
      "Carriage by Road Act, 2007 and Carriage of Goods by Sea Act",
      "Customs Act, 1962 and warehousing compliance guidelines",
      "Carriage of Goods by Land, Sea, and Air international conventions",
      "Motor Vehicles Act, 1988 commercial licensing regulations",
      "FEMA import-export trade credit payment directives"
    ],
    bestPractices: [
      "Include strict liability cap clauses and cargo transit insurance requirements in all shipper-carrier agreements.",
      "Standardize warehouse security terms, SLA timelines, and inventory loss indemnification values.",
      "Conduct regular regulatory compliance checks on import-export tariff classifications and declarations.",
      "Audit contractor driver licenses and commercial permits quarterly to ensure they are current.",
      "Use detailed temperature logs and compliance tracking for cold chain storage operations."
    ],
    faqs: [
      {
        q: "How can carrier liability be limited in logistics?",
        a: "We draft carrier terms with liability limits tied to a fixed rate per kilogram or container, except in cases of proven willful negligence."
      },
      {
        q: "What is a 3PL contract?",
        a: "A Third-Party Logistics contract defines the terms under which a provider manages transportation, warehousing, and inventory distribution for a customer."
      },
      {
        q: "How are cargo damage claims resolved?",
        a: "Claims are resolved based on the Carriage of Goods Acts. Notice of damage must be sent to the carrier within the statutory notice period (e.g. 14 days)."
      },
      {
        q: "What is the Carriage by Road Act 2007 and why is it important?",
        a: "It regulates common carriers of goods by road in India, requiring them to register, limiting their liability for loss or damage, and setting transit rules."
      },
      {
        q: "Can a warehouse owner sell goods stored by a customer for unpaid rent?",
        a: "Yes, if the warehouse agreement contains an explicit lien clause, the owner can issue a notice and sell the stored goods to recover unpaid rent."
      },
      {
        q: "What are the risks of incorrect HSN code classification during customs clearance?",
        a: "Incorrect HSN codes can result in customs officials detaining cargo, demanding back duties, and imposing fines up to five times the duty evaded under the Customs Act."
      }
    ]
  },
  {
    name: "Retail & Franchising",
    slug: "retail-franchising",
    tier: "second",
    tagline: "Protecting retail brands, drafting franchise networks, and commercial lease security.",
    summary: "Franchise drafting, commercial leases, brand licensing agreements, and consumer protection.",
    overview: "Retail and franchise brands manage retail locations, franchise networks, packaging compliance, and customer relations. Drafting franchise agreements, securing commercial leases, registering trademarks, and complying with packaging metrology rules are critical for growth. We assist brands with franchise structures, commercial lease negotiations, trademark protection, and packaging compliance.",
    stats: [
      { value: "80+", label: "Franchise disclosure and operational agreements drafted" },
      { value: "100%", label: "Brand trademark registration success rate across retail outlets" },
      { value: "120+", label: "Commercial retail lease agreements negotiated" },
      { value: "98%", label: "Legal Metrology packaging audit pass rate" }
    ],
    challenges: [
      {
        title: "Franchise Brand Dilution",
        description: "Franchisees using unapproved materials, deviating from service standards, or using your trademarks post-termination can damage brand reputation."
      },
      {
        title: "High Lease Escalations",
        description: "Signing commercial leases with high rent hikes or lacking lock-in periods can force store closures and cause relocation costs."
      },
      {
        title: "Packaging Metrology Violations",
        description: "Failing to print required declarations on retail packages leads to packaging inspector visits and product sales bans."
      },
      {
        title: "Consumer Court Disputes",
        description: "Incorrect labeling, product defects, or unclear exchange policies can lead to buyer claims in consumer forums."
      }
    ],
    howWeHelp: [
      {
        step: 1,
        title: "Franchise Agreement Security",
        description: "Draft agreements detailing royalties, territorial rights, quality controls, and exit terms."
      },
      {
        step: 2,
        title: "Lease Negotiation Support",
        description: "Review commercial leases, negotiate CAM caps, rent abatement, and renewal rights."
      },
      {
        step: 3,
        title: "Packaging Metrology Audit",
        description: "Review packaging labels to ensure compliant print size, declarations, and weight listings."
      },
      {
        step: 4,
        title: "Brand Trademark Filing",
        description: "Register trademarks across retail, packaging, and restaurant classes to protect brand assets."
      },
      {
        step: 5,
        title: "Consumer Policy Setup",
        description: "Draft retail return, exchange, warranty, and customer grievance policies."
      }
    ],
    risks: [
      "Franchisees diluting the brand image or violating operational standards due to weak franchise manuals.",
      "Commercial retail leases with high escalation rates or missing common area maintenance (CAM) caps.",
      "Consumer complaints regarding product quality, warranty breaches, or pricing issues.",
      "Seizure of retail stock due to non-compliant metrology declarations on packaging.",
      "Infringement claims from using similar logos or names in retail outlets."
    ],
    relatedServices: [
      { label: "Trademark Filing & Drafting", href: "/services/intellectual-property/trademark/filing-drafting" },
      { label: "Vendor Agreement", href: "/services/corporate-legal/contract-drafting/vendor-agreement" },
      { label: "Terms & Conditions / Privacy Policy", href: "/services/corporate-legal/contract-drafting/terms-privacy-policy" },
      { label: "Trademark Watch & Monitoring", href: "/services/intellectual-property/trademark/watch-monitoring" },
    ],
    complianceFramework: [
      "Consumer Protection Act, 2019 (E-commerce Rules)",
      "Legal Metrology Act, 2009 (Packaging & Labeling)",
      "Competition Act, 2002 (Restrictive trade practices)",
      "Food Safety and Standards Act (FSSAI) for retail food setups",
      "Shops and Establishment Act registrations for retail outlets"
    ],
    bestPractices: [
      "Secure global trademarks for all retail brand elements and execute strict brand licensing agreements.",
      "Cap CAM charges, outline clear rent abatement terms during force majeure, and define renewal option rights in leases.",
      "Design customer support frameworks and returns-warranty guidelines aligned with legal consumer codes.",
      "Maintain a detailed Franchise Disclosure Document (FDD) to avoid disputes over hidden fees.",
      "Audit franchise store quality and branding standards bi-annually."
    ],
    faqs: [
      {
        q: "What is a brand licensing agreement?",
        a: "A contract where the brand owner grants a retailer the right to manufacture or sell products under the brand name in exchange for royalties."
      },
      {
        q: "How does the Legal Metrology Act affect retail packaging?",
        a: "It mandates specific declarations on retail packages, including country of origin, importer details, manufacture date, net quantity, and Maximum Retail Price (MRP)."
      },
      {
        q: "What are key clauses in an Indian franchise agreement?",
        a: "Key clauses include territory exclusivity, trademark license limits, royalty payments, quality control standards, and termination terms."
      },
      {
        q: "Is franchise registration mandatory under Indian law?",
        a: "There is no separate, single federal franchise regulator or registration required in India. Franchise relationships are governed by the Indian Contract Act and trademark laws."
      },
      {
        q: "What is Common Area Maintenance (CAM) in retail leases and how is it limited?",
        a: "CAM is the fee retail tenants pay for cleaning, security, and repairs. Tenants should cap CAM costs based on actual, auditable utility expenses rather than flat rates."
      },
      {
        q: "Can a retailer sell a product above the Maximum Retail Price (MRP)?",
        a: "No, under Legal Metrology Rules, selling or offering to sell any pre-packaged commodity above the printed MRP is illegal and can lead to heavy fines."
      }
    ]
  }
];

export function findIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export const priorityIndustries = industries.filter((i) => i.tier === "priority");
export const secondTierIndustries = industries.filter((i) => i.tier === "second");
