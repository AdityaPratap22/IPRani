import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";
import { caseStudies } from "@/data/caseStudies";
import { ArrowRightIcon } from "@/components/icons";

export const metadata = { title: "Case Studies | IP Rani" };

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        title="Case Studies"
        subtitle="Real engagements across IP, corporate legal and litigation matters."
        crumbs={[{ label: "Case Studies" }]}
      />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-6 md:grid-cols-2">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} index={i}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="group block h-full rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-blue/40 hover:shadow-xl"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-bg-light px-3 py-1 text-xs font-semibold text-navy transition-transform duration-200 group-hover:scale-105">
                    {study.industry.label}
                  </span>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand-blue transition-transform duration-200 group-hover:scale-105">
                    {study.service.label}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-navy group-hover:text-brand-blue">
                  {study.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{study.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-all duration-200 group-hover:gap-2.5">
                  Read Case Study
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Let's build a stronger, legally secure tomorrow."
        buttonLabel="Get Free Consultation"
        buttonHref="/contact-us"
      />
    </>
  );
}
