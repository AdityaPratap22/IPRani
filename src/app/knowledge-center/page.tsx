import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";
import { clusters } from "@/data/knowledgeCenter";
import { BulbIcon, GavelIcon, RocketIcon, ArrowRightIcon } from "@/components/icons";

export const metadata = { title: "Knowledge Center | IP Rani" };

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

      <CtaBanner
        title="Have questions about your IP or legal needs?"
        buttonLabel="Get Free Consultation"
        buttonHref="/contact-us"
      />
    </>
  );
}
