"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TrademarkProcessFlowchart() {
  const [activeTab, setActiveTab] = useState<"flowchart" | "steps" | "overview">("flowchart");
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const processSteps = [
    {
      step: 1,
      name: "Trademark Availability Search",
      category: "Application Process",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      description: "Check availability of the mark across 45 classes in the official IP India public database.",
      details: "Comprehensive search to identify conflicting phonetically or visually similar marks before filing.",
      icon: "🔍",
    },
    {
      step: 2,
      name: "Drafting of Application",
      category: "Application Process",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      description: "Prepare application with exact applicant details, class selection, goods/services description, and user affidavit.",
      details: "Accurate drafting ensures compliance with the Trade Marks Rules, 2017 to minimize examination objections.",
      icon: "📝",
    },
    {
      step: 3,
      name: "Filing of Trademark Application",
      category: "Application Process",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      description: "Filing with Trademark Registry to generate Application Number and instant ™ symbol authorization.",
      details: "Official electronic filing generates an acknowledgment receipt with an official filing timestamp.",
      icon: "📤",
    },
    {
      step: 4,
      name: "Formalities Check",
      category: "Application Process",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
      description: "Check of application for compliance of basic formalities, POA, and prescribed fees.",
      details: "The Registry verifies whether mandatory fields, Power of Attorney (Form TM-M), and startup MSME certificates are attached.",
      icon: "📋",
    },
    {
      step: 5,
      name: "Examination by Registry",
      category: "Examination / Objection",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      description: "Substantive examination of application under Section 9 (Absolute Grounds) and Section 11 (Relative Grounds).",
      details: "If no objection is raised, it moves to publication. If an Examination Report with objections is issued, a reply must be filed within 30 days.",
      icon: "🔎",
    },
    {
      step: 6,
      name: "Acceptance & Publication",
      category: "Success / Progress",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      description: "Application accepted and published in the weekly Trademark Journal for 4 months opposition period.",
      details: "Public notice allowing third parties 4 calendar months to file opposition if they believe the mark infringes prior rights.",
      icon: "📖",
    },
    {
      step: 7,
      name: "Registration Certificate Issued",
      category: "Trademark Registered ®",
      badgeColor: "bg-emerald-600 text-white border-emerald-700",
      description: "Registration certificate issued under the Trade Marks Act, 1999. Your mark is now legally protected!",
      details: "Grants exclusive statutory rights across India for 10 years, renewable indefinitely every 10 years.",
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
          Trademark Registration Process in India
        </h2>
        <p className="mt-2 text-sm text-slate-500 max-w-xl mx-auto">
          Complete step-by-step workflow from initial search, registry examination, reply to objections, 4-month journal publication, to final ® certificate issuance.
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
          Legend & Timelines
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

          {/* EXAMINATION BRANCHING BOX */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-5 max-w-3xl mx-auto">
            <div className="text-center">
              <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-[11px] font-bold text-amber-800 uppercase tracking-wider">
                Step 5 Branching: Registry Examination Outcome
              </span>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {/* Branch A: No Objection */}
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 text-center">
                <span className="inline-block rounded-md bg-emerald-600 px-2.5 py-0.5 text-xs font-bold text-white">
                  NO OBJECTION
                </span>
                <p className="mt-2 text-xs text-slate-600">
                  Application accepted directly and moves straight to Acceptance & Publication in the Trademark Journal.
                </p>
              </div>

              {/* Branch B: Objection Raised */}
              <div className="rounded-xl border border-amber-300 bg-white p-4">
                <span className="inline-block rounded-md bg-amber-500 px-2.5 py-0.5 text-xs font-bold text-white">
                  OBJECTION RAISED
                </span>
                <p className="mt-2 text-xs font-medium text-navy">
                  Reply to Examination Report
                </p>
                <p className="text-[11px] text-slate-500">File written reply within 30 days (extendable)</p>
                
                <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-center text-[11px]">
                  <div className="bg-emerald-50 text-emerald-700 p-1.5 rounded-lg border border-emerald-200 font-semibold">
                    ACCEPTED ➔ Journal
                  </div>
                  <div className="bg-rose-50 text-rose-700 p-1.5 rounded-lg border border-rose-200 font-semibold">
                    NOT ACCEPTED ➔ Hearing
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="h-5 w-0.5 bg-slate-300"></div>
          </div>

          {/* Step 6: Acceptance & Publication */}
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 text-center">
              <span className="flex h-9 w-9 mx-auto items-center justify-center rounded-full bg-emerald-600 text-white text-sm font-bold">
                6
              </span>
              <h4 className="mt-2 text-sm font-bold text-navy">ACCEPTANCE & PUBLICATION</h4>
              <p className="text-xs text-slate-600 mt-1">
                Application accepted and published in official Trademark Journal.
              </p>
              <div className="mt-2 inline-block rounded-full bg-purple-100 border border-purple-200 px-3 py-1 text-[11px] font-bold text-purple-800">
                PUBLICATION IN TRADEMARK JOURNAL OPPOSITION PERIOD – 4 MONTHS
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="h-5 w-0.5 bg-slate-300"></div>
          </div>

          {/* OPPOSITION BRANCHING BOX */}
          <div className="rounded-2xl border border-purple-200 bg-purple-50/30 p-5 max-w-3xl mx-auto">
            <div className="text-center">
              <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-[11px] font-bold text-purple-800 uppercase tracking-wider">
                4-Month Journal Opposition Outcome
              </span>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {/* No Opposition */}
              <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-center">
                <span className="inline-block rounded-md bg-emerald-600 px-2.5 py-0.5 text-xs font-bold text-white">
                  NO OPPOSITION FILED
                </span>
                <p className="mt-2 text-xs text-slate-600">
                  Proceeds directly to registration certificate issuance.
                </p>
              </div>

              {/* Opposition Filed */}
              <div className="rounded-xl border border-purple-300 bg-white p-4 text-xs">
                <span className="inline-block rounded-md bg-purple-600 px-2.5 py-0.5 text-xs font-bold text-white">
                  OPPOSITION FILED
                </span>
                <ul className="mt-2 space-y-1 text-slate-600 text-[11px]">
                  <li>• Notice issued to applicant</li>
                  <li>• Counter statement (file within 2 months)</li>
                  <li>• Evidence stage (both parties submit evidence)</li>
                  <li>• Final Hearing before Registrar</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="h-5 w-0.5 bg-slate-300"></div>
          </div>

          {/* STEP 7: FINAL SUCCESS */}
          <div className="max-w-xl mx-auto text-center rounded-2xl border-2 border-emerald-500 bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-white shadow-lg">
            <span className="text-3xl">🛡️ ®</span>
            <h3 className="mt-2 text-lg font-extrabold uppercase tracking-wide">
              Step 7: Registration Certificate Issued
            </h3>
            <p className="mt-1 text-xs text-emerald-100">
              Trademark registered under the Trade Marks Act, 1999.
            </p>
            <div className="mt-3 inline-block rounded-full bg-white/20 backdrop-blur-md px-4 py-1 text-xs font-bold tracking-wider">
              TRADEMARK REGISTERED ® — Legally Protected for 10 Years
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
                <strong className="text-navy">Key Requirement:</strong> {step.details}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB CONTENT 3: LEGEND & TIMELINES */}
      {activeTab === "overview" && (
        <div className="mt-8 space-y-6 text-xs text-slate-600">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h4 className="font-bold text-navy text-sm mb-3">Flowchart Legend</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                  <span><strong>Application Process:</strong> Search, Drafting, Filing, Formalities</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-amber-500"></span>
                  <span><strong>Examination / Objection:</strong> Registry examination & reply filings</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
                  <span><strong>Success / Progress:</strong> Journal publication & registration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-purple-500"></span>
                  <span><strong>Opposition Proceedings:</strong> 4-month public journal opposition window</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500"></span>
                  <span><strong>Refusal / Adverse:</strong> Show cause refusal or appeal proceedings</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h4 className="font-bold text-navy text-sm mb-3">Official Statutory Timelines</h4>
              <ul className="space-y-2">
                <li>• <strong>™ Authorization:</strong> Instant upon electronic filing acknowledgment</li>
                <li>• <strong>Objection Reply:</strong> 30 calendar days from receipt of examination report</li>
                <li>• <strong>Opposition Window:</strong> Exactly 4 months from journal publication date</li>
                <li>• <strong>Counter Statement:</strong> 2 months from receipt of opposition notice</li>
                <li>• <strong>Validity:</strong> 10 years from filing date, renewable indefinitely</li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl bg-amber-50 border border-amber-200 p-4 text-center text-amber-800 text-[11px]">
            💡 <em>Note: This flowchart represents the standard procedure for trademark registration in India under the Trade Marks Act, 1999. Timelines may vary depending on the workload of the Registry, hearing schedules, and response times.</em>
          </div>
        </div>
      )}
    </div>
  );
}
