import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";
import { priorityIndustries, secondTierIndustries } from "@/data/industries";
import { ArrowRightIcon } from "@/components/icons";

export const metadata = {
  title: "Industries We Serve",
  description: "Discover the business sectors we serve at IP Rani, including Startups, SaaS, E-commerce, Manufacturing, Fintech, Healthcare, Media, Real Estate, and Retail in India.",
};

function IndustryGrid({ items }: { items: typeof priorityIndustries }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((industry, i) => (
        <Reveal inView={false} key={industry.slug} index={i}>
          <Link
            href={`/industries/${industry.slug}`}
            className="group block h-full rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:border-brand-blue/40 hover:shadow-xl"
          >
            <h3 className="text-base font-bold text-navy group-hover:text-brand-blue">
              {industry.name}
            </h3>
            <p className="mt-1 text-sm text-slate-500">{industry.summary}</p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-all duration-200 group-hover:gap-2.5">
              {industry.name} Legal Solutions
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        title="Industries We Serve"
        subtitle="We bring deep industry understanding to every engagement, so our legal advice always fits how your business actually works."
        crumbs={[{ label: "Industries" }]}
      />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal inView={false}><h2 className="text-xl font-bold text-navy">Priority Industries</h2></Reveal>
          <div className="mt-6">
            <IndustryGrid items={priorityIndustries} />
          </div>

          <Reveal inView={false}>
            <h2 className="mt-16 text-xl font-bold text-navy">
              Additional Industries We Support
            </h2>
          </Reveal>
          <div className="mt-6">
            <IndustryGrid items={secondTierIndustries} />
          </div>
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
