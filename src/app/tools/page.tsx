import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "IP Registry Search & Public Status Check Tools",
  description: "Check Indian trademark registry application status, execute public brand clearances, look up patent filings, and access official CGPDTM and Supreme Court databases.",
};

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        title="Registry Utilities &amp; Legal Tools"
        crumbs={[{ label: "Tools" }]}
      />

      <section className="bg-bg-light-2 px-4 py-16 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <Reveal direction="down">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-blue">
                Online Registry Gateways
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
                Quick IP Status Check &amp; Public Search
              </h2>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                Use the official links below to query trademark statuses, search patents, verify Nice class databases, or lookup legal cause lists directly from the relevant Indian government registries and judicial portals.
              </p>
              <div className="mx-auto mt-5 h-[2px] w-24 bg-brand-blue/30" />
            </Reveal>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Column 1: Trademark Search & Status */}
            <Reveal inView={false} direction="up" className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-lg font-bold text-navy border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-brand-blue font-semibold">™</span> Trademark Utilities
              </h3>
              <div className="mt-5 space-y-4">
                <a
                  href="https://tmrsearch.ipindia.gov.in/estatus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3.5 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue/20 hover:bg-white hover:shadow-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-blue font-bold text-sm">
                    🔍
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-navy group-hover:text-brand-blue flex items-center gap-1.5">
                      Trademark Status Check <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">Check the real-time application status of your pending trademark mark in India.</p>
                  </div>
                </a>
                <a
                  href="https://tmrsearch.ipindia.gov.in/tmrpublicsearch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3.5 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue/20 hover:bg-white hover:shadow-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-blue font-bold text-sm">
                    🔎
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-navy group-hover:text-brand-blue flex items-center gap-1.5">
                      Trademark Public Search <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">Run a comprehensive clearance search before filing your new brand name or logo.</p>
                  </div>
                </a>
                <a
                  href="https://euipo.europa.eu/ec2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3.5 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue/20 hover:bg-white hover:shadow-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-brand-blue font-bold text-sm">
                    📚
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-navy group-hover:text-brand-blue flex items-center gap-1.5">
                      Trademark Class Finder <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">Search Nice classification database to identify appropriate categories for your products.</p>
                  </div>
                </a>
              </div>
            </Reveal>

            {/* Column 2: Patent & Design Utilities */}
            <Reveal inView={false} direction="up" delay={0.05} className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-lg font-bold text-navy border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-teal font-semibold">💡</span> Patent &amp; Design Portals
              </h3>
              <div className="mt-5 space-y-4">
                <a
                  href="https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3.5 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue/20 hover:bg-white hover:shadow-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal font-bold text-sm">
                    ⚙️
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-navy group-hover:text-brand-blue flex items-center gap-1.5">
                      Patent Status Check <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">Track examination status, publications, or patent grants on the official IP India portal.</p>
                  </div>
                </a>
                <a
                  href="https://search.ipindia.gov.in/DesignApplicationStatus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3.5 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue/20 hover:bg-white hover:shadow-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal font-bold text-sm">
                    📐
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-navy group-hover:text-brand-blue flex items-center gap-1.5">
                      Design Status Check <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">Track real-time application status of your industrial design registration in India.</p>
                  </div>
                </a>
                <a
                  href="https://www.wipo.int/en/web/classification-locarno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3.5 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue/20 hover:bg-white hover:shadow-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal font-bold text-sm">
                    🎨
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-navy group-hover:text-brand-blue flex items-center gap-1.5">
                      Design Class Finder (Locarno) <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">Search WIPO Locarno classification to identify appropriate design categories for your product.</p>
                  </div>
                </a>
                <a
                  href="https://ipindia.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3.5 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue/20 hover:bg-white hover:shadow-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal font-bold text-sm">
                    🏛️
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-navy group-hover:text-brand-blue flex items-center gap-1.5">
                      IP India Official Website <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">Official site of the Controller General of Patents, Designs and Trade Marks (CGPDTM).</p>
                  </div>
                </a>
              </div>
            </Reveal>

            {/* Column 3: Supreme Court & Important Links */}
            <Reveal inView={false} direction="up" delay={0.1} className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-lg font-bold text-navy border-b border-slate-100 pb-3 flex items-center gap-2">
                <span className="text-red-600 font-semibold">⚖️</span> Hon'ble Supreme Court of India &amp; Links
              </h3>
              <div className="mt-5 space-y-4">
                <a
                  href="https://www.sci.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3.5 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue/20 hover:bg-white hover:shadow-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 font-bold text-sm">
                    🏛️
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-navy group-hover:text-brand-blue flex items-center gap-1.5">
                      Hon'ble Supreme Court of India <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">Access judgments, daily orders, cause lists, and case statuses of the highest court of India.</p>
                  </div>
                </a>
                
                <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/50 p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Firm Affiliations</h4>
                  <p className="mt-1 text-xs text-slate-500 leading-normal">
                    We actively represent academic institutions and startups under SIPP guidelines across CGPDTM offices in New Delhi, Mumbai, Chennai, and Kolkata.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
