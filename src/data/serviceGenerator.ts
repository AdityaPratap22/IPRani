/**
 * Service Page Content Generator
 * Dynamically constructs customized process steps, target audience (Who is it for),
 * business benefits/risks (Why you need it), required documents, timelines, and FAQs for all 80+ subservices.
 */

interface ServiceContent {
  processSteps: string[];
  whoFor: string[];
  whyNeed: string[];
  documents: string[];
  timeline: string;
  faqs: { q: string; a: string }[];
}

interface HubTemplate {
  process: string[];
  who: string[];
  why: string[];
  documents: string[];
  timeline: string;
  faqs: { q: string; a: string }[];
}

const templates: Record<string, HubTemplate> = {
  // --- INTELLECTUAL PROPERTY HUBS ---
  "trademark": {
    process: [
      "Phonetic & visual search across public trademark databases to identify conflicting marks",
      "Drafting and classification of goods/services under the correct NICE class (Classes 1 to 45)",
      "Filing Form TM-A with the India Trademark Registry and obtaining immediate Application Number",
      "Monitoring the application status and drafting replies to examination reports/objections (Sections 9 & 11)",
      "Representing the mark in show-cause hearings and securing the Registration Certificate after Journal advertisement"
    ],
    who: [
      "Early-stage startups and founders launching a new brand name, logo, or brand slogan in the retail or digital space.",
      "Established D2C brands expanding their product lines across new product categories or seeking funding.",
      "Manufacturers and service providers wanting to protect their goodwill and prevent competitors from using confusingly similar marks."
    ],
    why: [
      "<strong>Exclusive Brand Ownership:</strong> Prevents copycats from riding on your hard-earned reputation and diluting your brand equity.",
      "<strong>Legal Protection & Enforcement:</strong> Gives you the statutory right to sue for infringement and seek damages or injunctions in court.",
      "<strong>Asset Valuation:</strong> A registered trademark is an intangible asset that increases the company's valuation during VC funding rounds or exits."
    ],
    documents: [
      "Soft copy of the brand name, logo, or trademark slogan design",
      "Proof of identity and address of the applicant (PAN, Aadhaar, or Certificate of Incorporation)",
      "User affidavit proving the date of first use (if applying with prior use claim)",
      "Signed Power of Attorney (Form TM-48) authorizing IP Rani to file on your behalf"
    ],
    timeline: "The filing receipt (Application Number) is generated within 24 hours. The examination report is typically issued by the registry in 1 to 3 months. Overall registration can take 8 to 18 months depending on whether the application faces any third-party oppositions or absolute/relative objections.",
    faqs: [
      {
        q: "Can I use the ™ symbol immediately after filing?",
        a: "Yes, you can use the ™ symbol as soon as we file the application and get the official receipt. The ® symbol can only be used after the registration certificate is issued."
      },
      {
        q: "What is the validity of a trademark registration in India?",
        a: "A trademark registration is valid for 10 years from the date of application. It can be renewed indefinitely every 10 years by paying the renewal fee."
      },
      {
        q: "What happens if my trademark application faces an objection?",
        a: "Objections are common (under Section 9 for descriptive marks or Section 11 for similar marks). We will file a strong legal response showing distinctiveness and prior use to overcome it."
      }
    ]
  },
  "patent": {
    process: [
      "Prior art search in global databases (InPASS, Espacenet, USPTO) to verify novelty and patentability",
      "Drafting of provisional or complete specifications including detailed descriptions and patent claims",
      "Filing the patent application and securing the priority date with the Indian Patent Office",
      "Filing Request for Examination (RFE) and responding to the First Examination Report (FER) from the examiner",
      "Representing the inventor in prosecution hearings before the Controller to secure the patent grant"
    ],
    who: [
      "Tech companies and deep-tech startups innovating in software architectures, AI models, or electronics.",
      "Manufacturing firms and engineers developing novel machinery configurations or industrial tools.",
      "Biotech and pharmaceutical companies inventing chemical compounds or novel formulation processes."
    ],
    why: [
      "<strong>20-Year Exclusivity Moat:</strong> Grants you a legal monopoly to prevent competitors from manufacturing or selling your invention.",
      "<strong>Licensing Revenue:</strong> Enables you to monetize the technology by licensing the patent to third parties for royalties.",
      "<strong>Market Dominance:</strong> Creates a strong defensive IP portfolio that deters litigation and establishes corporate authority."
    ],
    documents: [
      "Detailed description of the invention showing technical improvements and novelty features",
      "Patent drawings, flowcharts, or schematics illustrating the innovation",
      "Identity and address proofs of the inventor(s) and applicant",
      "Declaration of inventorship and signed power of attorney forms"
    ],
    timeline: "Patent filing is done within 2 to 5 days. Examination takes 18 to 36 months under the standard route, but can be fast-tracked to 12 months for startups and MSMEs. The total term of patent protection is 20 years from the priority filing date.",
    faqs: [
      {
        q: "What is the difference between a Provisional and Complete Patent?",
        a: "A provisional patent is filed early to secure a priority date with minimal documentation. You must file the complete specification containing the patent claims within 12 months."
      },
      {
        q: "Are software codes patentable in India?",
        a: "Under Section 3(k), software 'per se' is not patentable. However, if the software is integrated with hardware or solves a specific technical problem showing a technical effect, it can be patented."
      },
      {
        q: "How long does it take to get a patent granted?",
        a: "Standard patent prosecution takes 3 to 5 years. Startups, MSMEs, and female applicants can opt for Expedited Examination to secure a grant within 12 to 18 months."
      }
    ]
  },
  "design": {
    process: [
      "Novelty search in the design registry database to check for previously registered shapes or configurations",
      "Preparing high-quality technical drawings or photographs of the product from all 7 standard views",
      "Filing the design application under the correct class of the Locarno Classification",
      "Responding to administrative or technical objections raised by the Design Wing of the Patent Office",
      "Securing the Design Registration Certificate and publishing the design in the official journal"
    ],
    who: [
      "Consumer electronics brands designing unique phone casings, wearables, or IoT device shapes.",
      "Fashion and footwear manufacturers protecting the aesthetic appeal of shoe soles, apparel cuts, or accessories.",
      "Furniture and household appliance designers protecting industrial product shapes and visual ornamentations."
    ],
    why: [
      "<strong>Visual Exclusivity:</strong> Protects the aesthetic appearance of your product, preventing competitors from launching visual knockoffs.",
      "<strong>Piracy Enforcement:</strong> Provides immediate legal remedies to seize counterfeit stocks and stop unauthorized replication.",
      "<strong>Visual Branding:</strong> Enhances customer recognition by ensuring your unique product shape remains exclusively associated with your brand."
    ],
    documents: [
      "High-fidelity photographs or drawings showing 7 standard views of the product",
      "LOCARNO classification checklist details",
      "Identity and address proofs of the applicant",
      "Novelty declaration statement and power of attorney"
    ],
    timeline: "Design filing is completed within 3 business days. The examination report is usually issued within 2 to 4 months, and registration is secured in 6 to 10 months. Design protection is valid for 10 years, extendable to 15 years.",
    faqs: [
      {
        q: "Does design registration protect the function of the product?",
        a: "No, design registration only protects the aesthetic look, shape, and configuration of the product. Functional utility is protected under patent law."
      },
      {
        q: "What is the duration of design protection in India?",
        a: "The registration is valid for 10 years, and can be extended by an additional 5 years (totaling 15 years) upon filing the extension request."
      },
      {
        q: "Can I register a design after launching the product?",
        a: "No, the design must be completely novel and not disclosed to the public anywhere in the world prior to the filing date. Launching before filing destroys novelty."
      }
    ]
  },
  "copyright": {
    process: [
      "Analysis of the creative work to confirm eligibility under the Copyright Act, 1957",
      "Compilation of the work sample (code files, artwork, literary text, or audio recordings)",
      "Filing the copyright application online and submitting physical copies to the Copyright Office",
      "Managing the mandatory 30-day waiting period for third-party objections",
      "Responding to discrepancy letters from the registry and securing the Registration Certificate"
    ],
    who: [
      "Software companies and SaaS startups seeking to protect their proprietary source code and database models.",
      "Authors, bloggers, and content creators protecting their books, training materials, or website copy.",
      "Artists, designers, and musicians protecting original designs, musical scores, videos, or sound recordings."
    ],
    why: [
      "<strong>Source Code Security:</strong> Establishes legal proof of ownership over software source code, protecting it from developer theft.",
      "<strong>Monetization & Licensing:</strong> Enables you to safely execute distribution, licensing, or royalty agreements.",
      "<strong>Digital Takedowns:</strong> Provides a valid registration certificate to enforce immediate DMCA or marketplace takedowns of copied content."
    ],
    documents: [
      "Three copies of the artistic work, manuscript, or software code listing",
      "Details of the creator and owner (Identity and address proofs)",
      "No Objection Certificate (NOC) from developers, publishers, or designers (if applicable)",
      "Signed power of attorney authorizing online copyright filing"
    ],
    timeline: "Copyright filing is executed in 48 hours. A mandatory 30-day waiting period is enforced by the registry for any third-party objections. Registration is completed in 6 to 12 months in the absence of discrepancy letters.",
    faqs: [
      {
        q: "Is registration mandatory for copyright protection?",
        a: "Copyright protection exists automatically from the moment the work is created. However, registration is highly recommended because it acts as prima facie evidence of ownership in court."
      },
      {
        q: "How does copyright protect software?",
        a: "Software is protected as a 'literary work' under copyright law. It protects the written source code and object code from unauthorized copying, but not the underlying algorithm (which requires a patent)."
      },
      {
        q: "What is the validity of copyright in India?",
        a: "For literary, dramatic, musical, and artistic works, copyright is valid for the lifetime of the author plus 60 years after their death."
      }
    ]
  },

  // --- CORPORATE & COMPLIANCE HUBS ---
  "company-formation": {
    process: [
      "Obtaining Digital Signature Certificates (DSC) and Director Identification Numbers (DIN) for founders",
      "Applying for Name Approval via the RUN service on the MCA portal",
      "Drafting custom Memorandum of Association (MOA) and Articles of Association (AOA)",
      "Submitting incorporation forms (SPICe+) along with PAN, TAN, and EPFO applications",
      "Obtaining the Certificate of Incorporation (COI) and corporate bank account opening documentation"
    ],
    who: [
      "Founders wanting to raise venture capital or issue equity options, requiring a Private Limited Company.",
      "Partners, consultants, and bootstrapped startup teams seeking the liability protection of an LLP structure.",
      "Social enterprises and NGO founders wanting to establish a non-profit Section 8 company."
    ],
    why: [
      "<strong>Limited Liability Protection:</strong> Safeguards personal assets from business liabilities and operational debts.",
      "<strong>Investor Readiness:</strong> Institutional investors and venture capital firms strictly require a corporate structure (Pvt Ltd) to invest capital.",
      "<strong>Corporate Identity:</strong> Establishes the company as a separate legal entity, enabling it to execute contracts, lease offices, and hold assets."
    ],
    documents: [
      "PAN card, Aadhaar card, or Passport of all proposed directors and shareholders",
      "Latest utility bill (electricity, water) of the proposed registered office address",
      "NOC from the property owner authorizing company registration",
      "Passport-size photographs and specimen signatures of the directors"
    ],
    timeline: "Incorporation takes 7 to 10 working days, which includes obtaining Digital Signatures (DSC), Name Approval (RUN), and final Certificate of Incorporation (COI) along with PAN, TAN, and EPFO registrations.",
    faqs: [
      {
        q: "How many directors are needed for a Private Limited Company?",
        a: "A minimum of two directors and two shareholders are required (a director can also be a shareholder). At least one director must be an Indian resident."
      },
      {
        q: "Can a foreigner be a director in an Indian Private Limited Company?",
        a: "Yes, foreign nationals can be appointed as directors and hold shares, subject to compliance with FEMA guidelines and obtaining a valid Indian DSC."
      },
      {
        q: "What is the difference between a Pvt Ltd and an LLP?",
        a: "A Pvt Ltd is preferred for VC funding, equity dilution, and ESOPs. An LLP is ideal for service-oriented or bootstrapped businesses due to lower annual compliance costs and no dividend distribution tax."
      }
    ]
  },
  "contract-drafting": {
    process: [
      "Initial consultation to map out the commercial relationship, pricing mechanisms, and risk exposures",
      "Drafting a customized contract structure addressing scope, payment terms, IP ownership, and indemnities",
      "Reviewing drafts with the client and refining clauses based on operational feedback",
      "Negotiating terms with the counterparty's legal counsel to reach an equitable risk allocation",
      "Delivering the final execution-ready agreement along with e-stamping and signing instructions"
    ],
    who: [
      "SaaS founders requiring custom subscription service agreements, SLA guarantees, and privacy disclosures.",
      "Businesses hiring key employees, advisors, or independent software developers.",
      "Companies engaging vendors, manufacturing partners, or outsourcing agencies."
    ],
    why: [
      "<strong>Risk Mitigation:</strong> Minimizes commercial disputes by outlining clear duties, payment terms, and exit clauses up front.",
      "<strong>IP Protection:</strong> Explicitly assigns intellectual property rights, ensuring code or designs created by vendors belong entirely to your company.",
      "<strong>Enforceability:</strong> Establishes legally binding terms under the Indian Contract Act, 1872, enabling direct recovery or court injunctions in case of a breach."
    ],
    documents: [
      "Term sheet or basic brief outlining the commercial business arrangement",
      "Details of both executing parties (Company name, registered office address)",
      "Specific operational parameters (SLA metrics, billing terms, support hours)",
      "Key risk areas or specific liability requirements to be incorporated"
    ],
    timeline: "Drafting is completed within 3 to 5 business days. Revisions and edits are processed within 24 to 48 hours. Standard negotiation assistance is provided over a 2-week window to finalize the counterparty terms.",
    faqs: [
      {
        q: "Why shouldn't I use generic contract templates from the internet?",
        a: "Generic templates often do not comply with Indian laws, fail to assign intellectual property correctly, and lack specific indemnification caps, leaving your business exposed to unlimited liability.",
      },
      {
        q: "What is the importance of stamping a contract in India?",
        a: "Under the Indian Stamp Act, a contract must be stamped with the appropriate stamp duty to be admissible as evidence in an Indian court during a dispute."
      },
      {
        q: "Can electronic contracts and digital signatures be enforced in India?",
        a: "Yes, electronic contracts executed with electronic signatures (like Aadhaar eSign or DocuSign) are fully valid and enforceable under the Information Technology Act, 2000."
      }
    ]
  },
  "roc-compliance": {
    process: [
      "Auditing corporate registers, board meeting minutes, and financial statements for the year",
      "Preparing director KYC verifications (DIR-3 KYC) and statutory auditor appointments (ADT-1)",
      "Drafting the Annual Return (MGT-7) and Financial Statements disclosure forms (AOC-4)",
      "Filing the compliance forms with the Registrar of Companies (ROC) via the MCA portal",
      "Securing filing approvals and updating statutory registers to maintain clean corporate records"
    ],
    who: [
      "Private Limited Companies, LLPs, and OPCs wanting to avoid penalties, deactivation, or investor audits.",
      "Directors needing to keep their Director Identification Numbers (DIN) active and compliant.",
      "Venture-funded startups preparing for due diligence or financial compliance audits."
    ],
    why: [
      "<strong>Avoid Heavy Penalties:</strong> Prevents daily late filing fees (Rs. 100 per day per form) that can accumulate into massive liabilities.",
      "<strong>Protect Director Status:</strong> Prevents the deactivation of Director DINs and disqualification from managing other company boards.",
      "<strong>Maintain Clean Standing:</strong> Keeps the company active in the MCA directory, which is audited by banks, lenders, and investors."
    ],
    documents: [
      "Audited financial statements (Balance Sheet, Profit & Loss A/c)",
      "Director KYC details (verified mobile number and active email address)",
      "Minutes of the Annual General Meeting (AGM) and board meetings",
      "Details of any changes in directors, shareholding, or registered office during the year"
    ],
    timeline: "ROC filings are completed within 5 to 7 business days from receipt of all signed documents. Director KYC is verified instantly. Annual returns are filed within 30 and 60 days of the AGM date.",
    faqs: [
      {
        q: "What are the key annual ROC filings for a Private Limited Company?",
        a: "The main forms are Form AOC-4 (for financial statements) filed within 30 days of the AGM, and Form MGT-7 (for the annual return) filed within 60 days of the AGM."
      },
      {
        q: "What happens if a director fails to file DIR-3 KYC?",
        a: "The Director Identification Number (DIN) will be deactivated with a 'DIN Deactivated' status. Re-activating it requires filing the KYC with a penalty of Rs. 5,000."
      },
      {
        q: "What is the penalty for not filing ROC forms on time?",
        a: "Delayed filings attract a statutory penalty of Rs. 100 per day per form. Chronic non-compliance can lead to the ROC striking off the company from the register."
      }
    ]
  },

  // --- LITIGATION HUBS ---
  "banking-finance": {
    process: [
      "Reviewing default account history, loan agreements, and secured collateral details",
      "Drafting and issuing formal statutory demands (Section 138 demand notices or SARFAESI Section 13(2) notices)",
      "Filing recovery petitions or complaints before the Magistrate Court, DRT, or Arbitral Tribunals",
      "Representing the creditor in hearings to secure decrees, attachments, or physical possession orders",
      "Coordinating with court commissioners or auctioneers to recover outstanding dues through asset liquidations"
    ],
    who: [
      "NBFCs and banks seeking recovery of non-performing assets (NPAs) from defaulted commercial borrowers.",
      "Businesses wanting to recover dues from clients who have issued bounced checks.",
      "Secured creditors needing out-of-court recovery via physical possession of collateral properties."
    ],
    why: [
      "<strong>Fast-Track Recoveries:</strong> Initiating SARFAESI or Section 138 actions bypasses long-drawn civil suits, yielding recovery in months instead of years.",
      "<strong>Collateral Liquidation:</strong> Grants the legal right to take possession of and auction secured assets to offset defaults directly.",
      "<strong>Powerful Deterrence:</strong> Criminal liability in cheque bounce cases or asset seizures creates strong leverage to force settlement negotiations."
    ],
    documents: [
      "Loan agreement, sanction letters, and security interest documents",
      "Statement of accounts showing outstanding defaults and classification as NPA",
      "Bounced check memo and copy of the original cheque (for Section 138 cases)",
      "Identity and property title documents of the defaulted borrower"
    ],
    timeline: "Cheque bounce notices are sent within 24 hours of memo receipt. Compliant filings in DRT or Magistrate Court are completed within 15 to 30 days. SARFAESI possession actions typically take 3 to 6 months.",
    faqs: [
      {
        q: "What is the time limit to file a cheque bounce complaint under Section 138?",
        a: "You must issue a legal notice to the drawer within 30 days of check bounce. The drawer has 15 days to pay. If they fail, you must file a complaint in court within 30 days after the 15-day period."
      },
      {
        q: "Can SARFAESI proceedings be initiated for any default loan?",
        a: "SARFAESI can only be initiated by banks or notified NBFCs for secured loans exceeding Rs. 1 Lakh, where the account has been classified as an NPA and the outstanding debt is more than 20% of the principal."
      },
      {
        q: "What is the role of the Debt Recovery Tribunal (DRT)?",
        a: "The DRT is a specialized judicial body established for fast-track recovery of debts due to banks and financial institutions, aiming to resolve cases within 180 days."
      }
    ]
  }
};

// Fallback templates based on vertical type
const fallbackTemplates: Record<string, HubTemplate> = {
  "intellectual-property": {
    process: [
      "Comprehensive research and search to identify any conflicting prior registrations globally",
      "Drafting the technical, legal, and operational specifications for your application",
      "Filing the formal application forms with the intellectual property registry in India",
      "Monitoring registry databases and drafting replies to government office actions or objections",
      "Representing the application in show-cause hearings to secure the official registration"
    ],
    who: [
      "Businesses, startups, and creative artists who want to protect original brands, codes, designs, or inventions.",
      "R&D teams wanting to establish legal exclusivity over innovative technology roadmaps.",
      "Corporate legal teams looking to manage and enforce their intellectual property portfolios."
    ],
    why: [
      "<strong>Market Exclusivity:</strong> Secures the legal right to prevent competitors from copying or capitalizing on your intellectual creations.",
      "<strong>Corporate Valuation:</strong> Builds a robust intangible asset portfolio that increases investor valuation and corporate trust.",
      "<strong>Enforcement Rights:</strong> Grants the authority to seek immediate court injunctions and seize counterfeit goods in the market."
    ],
    documents: [
      "Details and description of the intellectual property asset to be protected",
      "Identity and address proofs of the creator and applicant",
      "Power of attorney forms signed by the applicant",
      "Prior user proofs or design layouts where applicable"
    ],
    timeline: " Flling is completed within 2 to 5 business days. The registration timeline varies by the specific category of intellectual property: 8 to 18 months for trademarks, 12 to 36 months for patents, and 6 to 12 months for design and copyright.",
    faqs: [
      {
        q: "How do I start the IP protection process?",
        a: "We start with a thorough clearance search to confirm novelty and distinctiveness, followed by preparing custom filing specifications."
      },
      {
        q: "Can we manage this entire process online?",
        a: "Yes, the IP offices are fully digitized. We handle filing, document submissions, and hearings online, making the process completely remote."
      },
      {
        q: "What happens if there is an opposition from a competitor?",
        a: "We will file a strong legal response showing distinctiveness and prior use to defend your registration before the Registrar."
      }
    ]
  },
  "corporate-legal": {
    process: [
      "Consultation to analyze structural requirements, shareholding splits, or contractual risks",
      "Drafting corporate charter documents, registrations, or customized contract clauses",
      "Reviewing and refining documentation based on regulatory guidelines and operational inputs",
      "Filing applications with Registrar of Companies (ROC), tax departments, or other regulators",
      "Issuing finalized certificates, licenses, or executed agreements along with compliance guides"
    ],
    who: [
      "Founders and entrepreneurs starting a new company or limited liability partnership in India.",
      "Corporate legal departments needing custom contracts or routine ROC filings managed professionally.",
      "Businesses requiring specialized tax or regulatory licenses to operate legally."
    ],
    why: [
      "<strong>Regulatory Compliance:</strong> Avoids heavy fines, notices, and operational stop-orders from government regulators.",
      "<strong>Asset Protection:</strong> Limits corporate liability and defines clear ownership structures for founders and shareholders.",
      "<strong>Commercial Security:</strong> Establishes clear, enforceable contracts that protect business cashflows and proprietary IP."
    ],
    documents: [
      "Basic corporate details and KYC documents of directors/shareholders",
      "Proof of address of the business location along with NOC from property owner",
      "Signed board resolutions, templates, or term sheets as applicable",
      "Specialized registration application forms and government fee receipts"
    ],
    timeline: "Filing and drafting are completed within 3 to 7 working days. Regulatory certificates and MCA/ROC registrations are processed within 10 business days from the date of submission.",
    faqs: [
      {
        q: "What are the common compliance requirements for a new company?",
        a: "Key requirements include obtaining DSCs, filing incorporation forms, drafting founders' agreements, registering for GST, and filing annual returns."
      },
      {
        q: "How do you help resolve commercial contract disputes?",
        a: "We draft custom contract dispute resolution clauses pointing to mediation or fast-track arbitration, protecting you from long-drawn court litigation."
      },
      {
        q: "Can you manage routine annual filings remotely?",
        a: "Yes, our team handles all MCA, ROC, and tax filings online, providing you with automated tracking and receipt logs."
      }
    ]
  },
  "litigation": {
    process: [
      "Detailed review of facts, default notices, and underlying commercial contracts",
      "Drafting and serving formal legal notices to the opposing party demanding resolution",
      "Preparing and filing lawsuits, replies, or execution petitions in the appropriate court",
      "Representing the client in court hearings to argue for interim injunctions or final decrees",
      "Executing the court decree to recover outstanding assets, property, or damages"
    ],
    who: [
      "Companies involved in commercial contract disputes or outstanding debt recovery.",
      "IP owners seeking to halt trademark, design, or copyright infringement immediately.",
      "Individuals requiring representation in civil property disputes or banking litigation."
    ],
    why: [
      "<strong>Legal Remedies:</strong> Secures court-ordered injunctions to halt competitor infringement or recover unpaid commercial debts.",
      "<strong>Fast-Track Commercial Courts:</strong> Resolves commercial disputes under expedited judicial timelines established in 2015.",
      "<strong>Asset Recovery:</strong> Enforces contract terms through court decrees, allowing attachment of debtor bank accounts and asset sales."
    ],
    documents: [
      "Original executed contract, transaction statement, or outstanding invoices",
      "Formal demand notice along with postal dispatch receipt and delivery reports",
      "Board resolution or Power of Attorney authorizing the legal representative to verify pleadings",
      "Detailed chronological list of events and communications between the parties"
    ],
    timeline: "Litigation filings are completed within 10 to 15 business days. Interim relief and injunction hearings are scheduled within 1 week of filing. The final commercial suit resolution takes 6 to 12 months under Commercial Courts fast-track schedules.",
    faqs: [
      {
        q: "How long does a commercial lawsuit take to resolve?",
        a: "Under the Commercial Courts Act, commercial suits are fast-tracked, aiming for resolution within 6 to 12 months after filing."
      },
      {
        q: "What are the alternatives to court litigation?",
        a: "We advise structuring contracts with arbitration or mediation clauses, allowing disputes to be resolved privately and quickly by tribunals."
      },
      {
        q: "Can we seek interim relief before final judgment?",
        a: "Yes, we can file urgent applications for interim injunctions (e.g., cease-and-desist orders) to protect your assets while the suit is pending."
      }
    ]
  }
};

export function generateServiceContent(
  verticalSlug: string,
  hubSlug: string,
  subServiceSlug: string,
  name: string
): ServiceContent {
  const temp = templates[hubSlug] || fallbackTemplates[verticalSlug] || fallbackTemplates["intellectual-property"];
  
  const processSteps = temp.process.map(step => 
    step.replace(/application|mark|patent|design/gi, name)
  );

  const whoFor = temp.who.map(desc => 
    desc.replace(/service/gi, name)
  );

  const whyNeed = temp.why.map(desc => 
    desc.replace(/service/gi, name)
  );

  const documents = temp.documents.map(doc =>
    doc.replace(/service/gi, name)
  );

  const timeline = temp.timeline.replace(/service/gi, name);

  const faqs = temp.faqs.map(faq => ({
    q: faq.q.replace(/\$\{name\}|this service/gi, name),
    a: faq.a.replace(/\$\{name\}|this service/gi, name)
  }));

  return {
    processSteps,
    whoFor,
    whyNeed,
    documents,
    timeline,
    faqs
  };
}
