"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";
import { ChevronDownIcon } from "@/components/icons";

const faqCategories = [
  {
    category: "General",
    faqs: [
      {
        q: "How do I know whether I need a trademark, patent, design or copyright?",
        a: "It depends on what you're protecting — a brand name or logo needs a trademark, an invention needs a patent, a product's visual appearance needs a design registration, and creative or literary work needs copyright. Our IP Advisory team can assess your situation and recommend the right mix.",
      },
      {
        q: "Do you offer fixed-fee pricing?",
        a: "Most of our services are fixed-fee once we understand the scope of your requirement. See our Pricing page for indicative ranges, or get a free consultation for an exact quote. We believe in transparent pricing with no hidden charges.",
      },
      {
        q: "Do you work with clients outside India?",
        a: "Yes, we regularly file international trademark and patent applications (Madrid Protocol, PCT/WIPO) on behalf of clients based in the USA, UK, Europe, Australia, UAE, and 50+ other countries. We handle the full lifecycle from filing to registration.",
      },
      {
        q: "How do I get started with IP Rani?",
        a: "Simply reach out via our Contact Us page, email us at ipr@iprani.com, or call us at +91 99116 55010. We offer a free initial consultation where we assess your needs and recommend the best course of action.",
      },
    ],
  },
  {
    category: "Trademarks",
    faqs: [
      {
        q: "How long does trademark registration take in India?",
        a: "A straightforward application with no objections typically takes 12–18 months from filing to registration. If there are objections or oppositions, it can extend to 24–36 months depending on the complexity of the case.",
      },
      {
        q: "What is the difference between ™ and ® symbols?",
        a: "The ™ symbol can be used as soon as you file a trademark application — it indicates that you claim rights over the mark. The ® symbol can only be used after your trademark is officially registered by the Trademark Registry. Using ® without registration is a legal offence.",
      },
      {
        q: "Can I register a trademark for multiple classes?",
        a: "Yes, India follows the NICE Classification system with 45 classes. You can file a single multi-class application or separate applications for each class. Our team helps you identify which classes are relevant to your business and file accordingly.",
      },
      {
        q: "What happens if my trademark application receives an objection?",
        a: "If the Registrar raises an objection, you typically have 30 days to file a response. Our team prepares a detailed legal reply addressing each ground of objection, supported by evidence and case law. If the written response is not accepted, we represent you at the hearing.",
      },
      {
        q: "How long does trademark protection last?",
        a: "A registered trademark in India is valid for 10 years from the date of application. It can be renewed indefinitely for successive 10-year periods by paying the renewal fee before expiry.",
      },
    ],
  },
  {
    category: "Patents",
    faqs: [
      {
        q: "What can be patented in India?",
        a: "An invention that is novel, involves an inventive step, and is capable of industrial application can be patented. This includes processes, methods, machines, compositions of matter, and certain software-related inventions when they have a technical effect. Mathematical methods, business methods, and software per se are not patentable.",
      },
      {
        q: "What is the difference between a provisional and complete patent specification?",
        a: "A provisional specification secures your priority date while you continue developing your invention. It must be followed by a complete specification within 12 months. The complete specification contains full technical details, claims, and an abstract — this is what gets examined.",
      },
      {
        q: "How long does patent protection last?",
        a: "A patent in India is valid for 20 years from the date of filing, subject to annual renewal fee payments. Unlike trademarks, patents cannot be renewed beyond this 20-year term.",
      },
      {
        q: "Can I file a patent internationally from India?",
        a: "Yes. Through the PCT (Patent Cooperation Treaty) route, you can file a single international application designating up to 157 countries. We handle the entire process — from Indian filing to PCT application to national phase entries in your target markets.",
      },
    ],
  },
  {
    category: "Startups & Company Registration",
    faqs: [
      {
        q: "Can IP Rani handle company registration and IP filing together?",
        a: "Yes — many of our startup clients incorporate their entity and file trademark or patent protection in parallel. We coordinate everything through a single point of contact, saving you time and ensuring your brand is protected from day one.",
      },
      {
        q: "What is the difference between LLP and Private Limited Company?",
        a: "An LLP offers limited liability with partnership flexibility and lower compliance burden. A Private Limited Company is better suited for startups seeking external funding, as it allows equity shareholding, ESOPs, and is the preferred structure for venture capital investment.",
      },
      {
        q: "How does Startup India recognition benefit my company?",
        a: "DPIIT-recognized startups get access to tax exemptions (Section 80-IAC), self-certification under labour and environment laws, fast-tracked patent examination, easier public procurement, and access to the Fund of Funds scheme. We handle the entire application process.",
      },
      {
        q: "Do you help with fundraising documentation?",
        a: "Yes. We prepare term sheets, SHA (Shareholder Agreements), SSA (Share Subscription Agreements), convertible note instruments, ESOP policies, and board resolutions required for seed, angel, and Series A funding rounds.",
      },
    ],
  },
  {
    category: "Contracts & Compliance",
    faqs: [
      {
        q: "What types of contracts does IP Rani draft?",
        a: "We draft NDAs, MSAs, SaaS agreements, vendor agreements, employment contracts, freelancer agreements, licensing agreements, franchise agreements, joint venture agreements, terms of service, and privacy policies — among others.",
      },
      {
        q: "How long does it take to draft a contract?",
        a: "A standard contract (NDA, freelancer agreement) takes 2–3 business days. Complex agreements (SaaS, licensing, JV) typically take 5–7 business days. Urgent drafting can be arranged within 24 hours at a nominal priority fee.",
      },
      {
        q: "Do you review contracts drafted by the other party?",
        a: "Absolutely. Contract review is one of our most requested services. We provide a detailed redline markup highlighting risks, missing protections, and recommended changes — along with a plain-English summary of key concerns.",
      },
    ],
  },
  {
    category: "Litigation & Enforcement",
    faqs: [
      {
        q: "What should I do if someone copies my trademark or brand?",
        a: "Contact us immediately. We can send a cease-and-desist notice, file for an ex-parte injunction, or initiate a trademark infringement suit. In urgent cases, we can obtain Anton Piller (search and seizure) orders or John Doe orders to protect your rights.",
      },
      {
        q: "Do you handle IP disputes in courts across India?",
        a: "Yes, we have an active litigation practice across Delhi, Greater Noida, Mumbai, Bangalore, and other High Courts and District Courts. We handle civil suits, criminal complaints, customs recordation, and appellate proceedings related to IP matters.",
      },
      {
        q: "How much does IP litigation cost?",
        a: "Costs vary based on the complexity of the case, court jurisdiction, and relief sought. We offer transparent fee structures — typically a combination of fixed professional fees and per-hearing charges. We provide a detailed cost estimate before starting any litigation.",
      },
    ],
  },
];

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-xl border transition-all duration-300 ${
        isOpen
          ? "border-brand-blue/30 bg-brand-blue/[0.03] shadow-sm"
          : "border-slate-200 bg-white hover:border-slate-300"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <h3
          className={`text-sm font-semibold transition-colors duration-200 ${
            isOpen ? "text-brand-blue" : "text-navy"
          }`}
        >
          {faq.q}
        </h3>
        <span
          className={`shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-brand-blue" : "text-slate-400"
          }`}
        >
          <ChevronDownIcon className="h-4 w-4" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-4 text-sm leading-7 text-slate-500">{faq.a}</p>
      </div>
    </div>
  );
}

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const allCategories = ["All", ...faqCategories.map((c) => c.category)];
  const totalFaqs = faqCategories.reduce(
    (acc, cat) => acc + cat.faqs.length,
    0
  );

  const filteredCategories =
    activeCategory === "All"
      ? faqCategories
      : faqCategories.filter((c) => c.category === activeCategory);

  const toggleFaq = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Common questions about our IP, corporate legal and litigation services."
        crumbs={[{ label: "FAQs" }]}
      />

      {/* FAQ Count + Category Filter */}
      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="mb-8 text-center">
              <p className="text-sm text-slate-500">
                Browse through our{" "}
                <span className="font-bold text-navy">{totalFaqs}+</span>{" "}
                frequently asked questions across{" "}
                <span className="font-bold text-navy">
                  {faqCategories.length} categories
                </span>
              </p>
            </div>
          </Reveal>

          {/* Category Pills */}
          <Reveal>
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIndex(null);
                  }}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-brand-blue text-white shadow-md"
                      : "border border-slate-200 bg-slate-50 text-slate-600 hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* FAQ Accordion by Category */}
          {filteredCategories.map((section) => (
            <div key={section.category} className="mb-10">
              <Reveal>
                <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-navy">
                  <span className="inline-block h-1 w-6 rounded-full bg-brand-blue" />
                  {section.category}
                </h2>
              </Reveal>
              <div className="space-y-3">
                {section.faqs.map((faq, i) => {
                  const key = `${section.category}-${i}`;
                  return (
                    <Reveal key={key} index={i}>
                      <FaqItem
                        faq={faq}
                        isOpen={openIndex === key}
                        onToggle={() => toggleFaq(key)}
                      />
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ))}

          <Reveal>
            <div className="mt-10 rounded-2xl border border-slate-200 bg-bg-light-2 p-8 text-center">
              <h3 className="text-lg font-bold text-navy">
                Still have questions?
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Our team is here to help. Get a free consultation and we will
                address all your queries.
              </p>
              <Link
                href="/contact-us"
                className="mt-5 inline-flex items-center justify-center rounded-md bg-brand-blue px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-lg"
              >
                Contact Our Team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Have questions about your IP or legal needs?"
        buttonLabel="Get Free Consultation"
        buttonHref="/contact-us"
      />
    </>
  );
}
