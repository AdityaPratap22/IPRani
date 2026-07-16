import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";
import { clusters } from "@/data/knowledgeCenter";
import { BulbIcon, GavelIcon, RocketIcon, ArrowRightIcon } from "@/components/icons";

export const metadata = {
  title: "Knowledge Center",
  description: "Explore IP Rani's Knowledge Center for structured step-by-step guides, handbooks, and regulatory frameworks on trademarks, patents, contracts, and compliance in India.",
};

const clusterIcons: Record<string, typeof BulbIcon> = {
  "trademark-guide": BulbIcon,
  "patent-guide": BulbIcon,
  "startup-legal-guide": RocketIcon,
  "contract-agreement-guide": GavelIcon,
  "copyright-design-guide": BulbIcon,
  "litigation-recovery-guide": GavelIcon,
  "compliance-roc-guide": GavelIcon,
};

export default function KnowledgeCenterPage() {
  return (
    <>
      <PageHeader
        title="Knowledge Center"
        subtitle="Practical guides to help you understand your IP and legal options before you talk to us."
        crumbs={[{ label: "Knowledge Center" }]}
      />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clusters.map((cluster, i) => {
              const Icon = clusterIcons[cluster.slug] ?? BulbIcon;
              return (
                <Reveal
                  key={cluster.slug}
                  index={i}
                  className="group rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-blue/40 hover:shadow-xl"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-brand-blue transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-navy">
                    {cluster.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{cluster.summary}</p>
                  <p className="mt-3 text-xs font-medium text-slate-400">
                    {cluster.articles.length} articles
                  </p>
                  <Link
                    href={`/knowledge-center/${cluster.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-all duration-200 hover:gap-2.5 hover:text-brand-blue-dark"
                  >
                    Explore {cluster.name}
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-bg-light-2 px-4 py-14 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="text-2xl font-bold text-navy">
              Blogs &amp; Legal Insights
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Deep dives and comprehensive legal analysis for founders and developers.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog Card 1 */}
            <Reveal
              className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
            >
              <div>
                <span className="inline-flex rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-brand-blue">
                  Trademark
                </span>
                <h3 className="mt-3 text-lg font-bold text-navy leading-snug">
                  How to Do a Trademark Search Before Filing
                </h3>
                <p className="mt-2 text-sm text-slate-500 line-clamp-3">
                  Why a clearance search matters and what to check before you file. A comprehensive, step-by-step legal guide for founders protecting their brand name in India.
                </p>
              </div>
              <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
                <span className="text-xs text-slate-400">10 min read</span>
                <Link
                  href="/knowledge-center/trademark-guide/how-to-do-a-trademark-search"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark"
                >
                  Read Article
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>

            {/* Placeholder Blog Card 2 */}
            <Reveal
              index={1}
              className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md opacity-85"
            >
              <div>
                <span className="inline-flex rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal">
                  Patent
                </span>
                <h3 className="mt-3 text-lg font-bold text-navy leading-snug">
                  Provisional vs Complete Patent Specification
                </h3>
                <p className="mt-2 text-sm text-slate-500 line-clamp-3">
                  When to file a provisional patent specification first, what benefits it brings, and how to manage the 12-month completion window.
                </p>
              </div>
              <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
                <span className="text-xs text-slate-400">6 min read</span>
                <Link
                  href="/knowledge-center/patent-guide/provisional-vs-complete-patent-specification"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark"
                >
                  Read Article
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>

            {/* Placeholder Blog Card 3 */}
            <Reveal
              index={2}
              className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md opacity-85"
            >
              <div>
                <span className="inline-flex rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-600">
                  Startup Legal
                </span>
                <h3 className="mt-3 text-lg font-bold text-navy leading-snug">
                  Choosing the Right Business Structure for Your Startup
                </h3>
                <p className="mt-2 text-sm text-slate-500 line-clamp-3">
                  A side-by-side comparison of Private Limited Company, LLP, and One Person Company structure choices for founders raising capital.
                </p>
              </div>
              <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
                <span className="text-xs text-slate-400">8 min read</span>
                <Link
                  href="/knowledge-center/startup-legal-guide/choosing-the-right-business-structure"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark"
                >
                  Read Article
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          </div>
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
