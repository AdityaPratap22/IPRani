"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PatentProcessFlowchart() {
  const [activeTab, setActiveTab] = useState<"flowchart" | "steps" | "overview">("flowchart");
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const processSteps = [
    {
      step: 1,
      name: "Invention Disclosure",
      category: "Application Process",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      description: "Idea / Innovation / Product technical details documented.",
      details: "Capturing technical concept, novel features, industrial application, and problem solved by the invention.",
      icon: "💡",
    },
    {
      step: 2,
      name: "Patentability Search",
      category: "Application Process",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      description: "Optional but Recommended — Novelty & Prior Art Search.",
      details: "Searching patent and non-patent literature globally (WIPO, EPO, USPTO, IPO) to verify novelty and non-obviousness.",
      icon: "🔍",
    },
    {
      step: 3,
      name: "Patent Drafting",
      category: "Application Process",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      description: "Drafting Complete or Provisional Patent Specification.",
      details: "Preparing claims, drawings, background, field of invention, and detailed description adhering to the Patents Act, 1970.",
      icon: "📝",
    },
    {
      step: 4,
      name: "Patent Application Filing",
      category: "Application Process",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      description: "Filing Indian / Convention / PCT National Phase application.",
      details: "Electronic submission to Patent Office (Delhi, Mumbai, Kolkata, Chennai) generating official Application Number & Priority Date.",
      icon: "📤",
    },
    {
      step: 5,
      name: "Publication in Patent Journal",
      category: "Application Process",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      description: "Normally after 18 Months or Early Publication (Form 9).",
      details: "Application is published in the official Patent Office Journal making it accessible to the public.",
      icon: "🌐",
    },
    {
      step: 6,
      name: "Request for Examination (Form 18 / 18A)",
      category: "Examination / Objection",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      description: "Mandatory request filed within 31 Months from Filing / Priority Date.",
      details: "Form 18 (or Form 18A for startup/expedited examination) triggers substantive examination by the Patent Examiner.",
      icon: "🔎",
    },
    {
      step: 7,
      name: "Examination & FER Reply",
      category: "Examination / Objection",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      description: "First Examination Report (FER) issued by Indian Patent Office.",
      details: "Reply to FER must be filed within 6 months (extension up to 3 months available) addressing objections or attending hearings.",
      icon: "📋",
    },
    {
      step: 8,
      name: "Patent Granted 🏆",
      category: "Success / Grant",
      badgeColor: "bg-emerald-600 text-white border-emerald-700",
      description: "Patent Certificate Issued by the Controller of Patents.",
      details: "Grants exclusive statutory monopoly rights to manufacture, use, sell, or license the invention.",
      icon: "📜",
    },
    {
      step: 9,
      name: "Annual Renewal Fees",
      category: "Maintenance",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      description: "Pay annual maintenance fees starting from the 3rd year onwards.",
      details: "Required to keep the patent in force year-on-year up to the maximum term.",
      icon: "📅",
    },
    {
      step: 10,
      name: "20 Years Statutory Protection",
      category: "Success / Grant",
      badgeColor: "bg-emerald-700 text-white border-emerald-800",
      description: "20 Years of protection from the Date of Filing.",
      details: "Full statutory patent term subject to payment of annual renewal fees.",
      icon: "🛡️",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 sm:p-10 shadow-xl">
      {/* Header Title */}
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue">
          Official Procedure
        </span>
        <h2 className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl">
          Patent Registration Process in India
        </h2>
        <p className="mt-2 text-sm text-slate-500 max-w-xl mx-auto">
          From Invention Disclosure to Patent Grant — Step-by-step workflow under the Patents Act, 1970 and Patents Rules, 2003.
        </p>
      </div>

      {/* View Switcher Tabs */}
      <div className="mt-8 flex justify-center gap-2 rounded-xl bg-slate-100 p-1.5 max-w-md mx-auto">
        <button
          onClick={() => setActiveTab("flowchart")}
          className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all ${
            activeTab === "flowchart"
              ? "bg-white text-navy shadow-sm"
              : "text-slate-500 hover:text-navy"
          }`}
        >
          Visual Flowchart
        </button>
        <button
          onClick={() => setActiveTab("steps")}
          className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all ${
            activeTab === "steps"
              ? "bg-white text-navy shadow-sm"
              : "text-slate-500 hover:text-navy"
          }`}
        >
          Step Breakdown
        </button>
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all ${
            activeTab === "overview"
              ? "bg-white text-navy shadow-sm"
              : "text-slate-500 hover:text-navy"
          }`}
        >
          Deadlines & Legend
        </button>
      </div>

      {/* TAB CONTENT 1: VISUAL FLOWCHART */}
      {activeTab === "flowchart" && (
        <div className="mt-10 space-y-6">
          {/* Main Pipeline Steps 1-5 */}
          <div className="space-y-4 max-w-2xl mx-auto">
            {processSteps.slice(0, 5).map((step) => (
              <div key={step.step} className="relative">
                <div
                  onClick={() => setSelectedStep(selectedStep === step.step ? null : step.step)}
                  className={`cursor-pointer rounded-2xl border p-4 transition-all duration-200 hover:shadow-md ${
                    selectedStep === step.step
                      ? "border-brand-blue bg-blue-50/50 shadow-md ring-2 ring-brand-blue/20"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-white text-sm font-bold shadow">
                      {step.step}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-navy">{step.name}</h4>
                      <p className="text-xs text-slate-500">{step.description}</p>
                    </div>
                    <span className="text-lg">{step.icon}</span>
                  </div>

                  {selectedStep === step.step && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 border-t border-slate-200/80 pt-3 text-xs text-slate-600"
                    >
                      <strong className="text-navy">Details:</strong> {step.details}
                    </motion.div>
                  )}
                </div>
                {/* Down Arrow */}
                <div className="flex justify-center my-1.5">
                  <div className="h-4 w-0.5 bg-slate-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* PRE-GRANT OPPOSITION BRANCHING BOX */}
          <div className="rounded-2xl border border-purple-200 bg-purple-50/40 p-5 max-w-3xl mx-auto">
            <div className="text-center">
              <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-[11px] font-bold text-purple-800 uppercase tracking-wider">
                Pre-Grant Opposition Stage (After Publication & Before Grant)
              </span>
              <p className="mt-1 text-xs text-slate-600">Any person may oppose in writing to the Controller</p>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {/* Branch A: No Opposition */}
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 text-center">
                <span className="inline-block rounded-md bg-emerald-600 px-2.5 py-0.5 text-xs font-bold text-white">
                  NO OPPOSITION
                </span>
                <p className="mt-2 text-xs text-slate-600">
                  Proceeds directly to Request for Examination (Form 18 / 18A).
                </p>
              </div>

              {/* Branch B: Opposition Filed */}
              <div className="rounded-xl border border-purple-300 bg-white p-4 text-xs">
                <span className="inline-block rounded-md bg-purple-600 px-2.5 py-0.5 text-xs font-bold text-white">
                  OPPOSITION FILED
                </span>
                <div className="mt-2 space-y-1 text-[11px] text-slate-600">
                  <p>• Applicant files reply statement</p>
                  <p>• Oral Hearing before Controller</p>
                  <p>• Controller decides ➔ Continue Examination</p>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="h-5 w-0.5 bg-slate-300"></div>
          </div>

          {/* Step 6: Request for Examination */}
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-4 text-center">
              <span className="flex h-9 w-9 mx-auto items-center justify-center rounded-full bg-amber-600 text-white text-sm font-bold">
                6
              </span>
              <h4 className="mt-2 text-sm font-bold text-navy">REQUEST FOR EXAMINATION (Form 18 / Form 18A)</h4>
              <p className="text-xs text-slate-600 mt-1">
                Must be filed within <strong className="text-amber-800">31 MONTHS</strong> from Priority Date / Filing Date.
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="h-5 w-0.5 bg-slate-300"></div>
          </div>

          {/* Step 7: EXAMINATION BY INDIAN PATENT OFFICE (FER) */}
          <div className="rounded-2xl border border-amber-300 bg-amber-50/40 p-5 max-w-3xl mx-auto">
            <div className="text-center">
              <span className="flex h-9 w-9 mx-auto items-center justify-center rounded-full bg-amber-600 text-white text-sm font-bold">
                7
              </span>
              <h4 className="mt-2 text-sm font-bold text-navy">EXAMINATION BY INDIAN PATENT OFFICE (FER)</h4>
              <p className="text-xs text-slate-600">First Examination Report (FER) issued by the Examiner</p>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {/* Branch A: No Objection */}
              <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-center">
                <span className="inline-block rounded-md bg-emerald-600 px-2.5 py-0.5 text-xs font-bold text-white">
                  NO OBJECTION
                </span>
                <p className="mt-2 text-xs text-slate-600">
                  Patent allowed directly ➔ Proceeds to Patent Grant.
                </p>
              </div>

              {/* Branch B: FER Issued */}
              <div className="rounded-xl border border-amber-300 bg-white p-4 text-xs">
                <span className="inline-block rounded-md bg-amber-600 px-2.5 py-0.5 text-xs font-bold text-white">
                  FER ISSUED WITH OBJECTIONS
                </span>
                <ul className="mt-2 space-y-1 text-[11px] text-slate-600">
                  <li>• Reply to FER: <strong className="text-amber-800">Within 6 Months</strong></li>
                  <li>• Extension: <strong className="text-amber-800">Up to 3 Months</strong> available</li>
                  <li>• Hearing & Controller Decision</li>
                </ul>
                <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-center text-[11px]">
                  <div className="bg-emerald-50 text-emerald-700 p-1.5 rounded-lg border border-emerald-200 font-semibold">
                    ACCEPTED ➔ Patent Granted
                  </div>
                  <div className="bg-rose-50 text-rose-700 p-1.5 rounded-lg border border-rose-200 font-semibold">
                    REFUSED ➔ Appeal to IPAB / High Court
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="h-5 w-0.5 bg-slate-300"></div>
          </div>

          {/* Step 8: PATENT GRANTED */}
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl border-2 border-emerald-500 bg-emerald-50/80 p-5 text-center shadow-md">
              <span className="flex h-10 w-10 mx-auto items-center justify-center rounded-full bg-emerald-600 text-white text-base font-bold">
                8
              </span>
              <h3 className="mt-2 text-base font-extrabold text-navy">
                PATENT GRANTED 🏆
              </h3>
              <p className="text-xs text-emerald-800 font-semibold mt-1">
                Official Patent Certificate Issued by Indian Patent Office
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="h-5 w-0.5 bg-slate-300"></div>
          </div>

          {/* POST-GRANT OPPOSITION BRANCHING BOX */}
          <div className="rounded-2xl border border-purple-200 bg-purple-50/30 p-5 max-w-3xl mx-auto">
            <div className="text-center">
              <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-[11px] font-bold text-purple-800 uppercase tracking-wider">
                Post-Grant Opposition Stage (Within 12 Months from Publication of Grant)
              </span>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {/* No Opposition */}
              <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-center">
                <span className="inline-block rounded-md bg-emerald-600 px-2.5 py-0.5 text-xs font-bold text-white">
                  NO OPPOSITION
                </span>
                <p className="mt-2 text-xs text-slate-600">
                  Patent continues in force uninterruptedly.
                </p>
              </div>

              {/* Opposition Filed */}
              <div className="rounded-xl border border-purple-300 bg-white p-4 text-xs">
                <span className="inline-block rounded-md bg-purple-600 px-2.5 py-0.5 text-xs font-bold text-white">
                  OPPOSITION FILED
                </span>
                <p className="mt-2 text-[11px] text-slate-600">
                  Opposition Board ➔ Evidence by Parties ➔ Controller Hearing
                </p>
                <div className="mt-2 grid grid-cols-3 gap-1 text-[10px] text-center font-bold">
                  <span className="bg-emerald-50 text-emerald-700 p-1 rounded border border-emerald-200">MAINTAINED</span>
                  <span className="bg-amber-50 text-amber-700 p-1 rounded border border-amber-200">AMENDED</span>
                  <span className="bg-rose-50 text-rose-700 p-1 rounded border border-rose-200">REVOKED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="h-5 w-0.5 bg-slate-300"></div>
          </div>

          {/* STEP 9 & 10: RENEWAL & 20 YEARS PROTECTION */}
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-xs">
                  9
                </span>
                <div>
                  <h4 className="text-sm font-bold text-navy">ANNUAL RENEWAL</h4>
                  <p className="text-xs text-slate-600">Renew every year (Fees to be paid starting 3rd year)</p>
                </div>
              </div>
              <span className="text-xl">📅</span>
            </div>

            <div className="rounded-2xl border-2 border-emerald-600 bg-gradient-to-r from-emerald-600 to-teal-700 p-5 text-center text-white shadow-lg">
              <span className="text-3xl">🛡️ 20 YEARS</span>
              <h3 className="mt-2 text-base font-extrabold uppercase tracking-wide">
                Step 10: 20 Years of Protection
              </h3>
              <p className="mt-1 text-xs text-emerald-100">
                Calculated from the Date of Filing, subject to payment of Annual Renewal Fees.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT 2: STEP BREAKDOWN */}
      {activeTab === "steps" && (
        <div className="mt-8 space-y-4">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-brand-blue/30"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white text-xs font-bold">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-navy">{step.name}</h3>
                <span className={`ml-auto rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${step.badgeColor}`}>
                  {step.category}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-600">{step.description}</p>
              <div className="mt-3 rounded-xl bg-slate-50 p-3 text-xs text-slate-500">
                <strong className="text-navy">Details & Strategy:</strong> {step.details}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB CONTENT 3: DEADLINES & LEGEND */}
      {activeTab === "overview" && (
        <div className="mt-8 space-y-6 text-xs text-slate-600">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h4 className="font-bold text-navy text-sm mb-3">Key Statutory Deadlines</h4>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-blue-500 shrink-0"></span>
                  <span><strong>Publication:</strong> Normally after 18 Months (or early on Form 9)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-amber-500 shrink-0"></span>
                  <span><strong>Request for Examination (Form 18 / 18A):</strong> Within 31 Months from filing/priority date</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-amber-500 shrink-0"></span>
                  <span><strong>FER Reply:</strong> Within 6 Months from issuance (extension up to 3 months)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-purple-500 shrink-0"></span>
                  <span><strong>Post-Grant Opposition:</strong> Within 12 Months from grant publication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-emerald-500 shrink-0"></span>
                  <span><strong>Patent Term:</strong> Exactly 20 Years from filing date</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h4 className="font-bold text-navy text-sm mb-3">Flowchart Legend</h4>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                  <span><strong>Application Process:</strong> Disclosure, Search, Drafting, Filing, Publication</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-amber-500"></span>
                  <span><strong>Examination / Objection:</strong> Request for examination & FER reply</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-purple-500"></span>
                  <span><strong>Opposition Proceedings:</strong> Pre-grant & Post-grant oppositions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
                  <span><strong>Success / Grant:</strong> Patent Certificate & 20-Year Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500"></span>
                  <span><strong>Refusal / Adverse:</strong> Refusal or revocation proceedings</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-center text-amber-800 text-[11px]">
            💡 <em>Note: This flowchart represents the standard patent registration process in India under the Patents Act, 1970 and the Patents Rules, 2003. Timelines are statutory unless extended by the Controller. Process may vary in expedited examination or PCT national phase filings.</em>
          </div>
        </div>
      )}
    </div>
  );
}
