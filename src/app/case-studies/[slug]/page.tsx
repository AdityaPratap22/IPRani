import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/motion/Reveal";
import { caseStudies, findCaseStudy } from "@/data/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = findCaseStudy(slug);
  return { title: data ? `${data.title} | IP Rani` : "Case Studies | IP Rani" };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = findCaseStudy(slug);
  if (!data) notFound();

  return (
    <>
      <PageHeader
        title={data.title}
        subtitle={data.summary}
        crumbs={[{ label: "Case Studies", href: "/case-studies" }, { label: data.title }]}
      />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <Reveal index={0}>
              <h2 className="text-xl font-bold text-navy">The Challenge</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{data.challenge}</p>
            </Reveal>
            <Reveal index={1}>
              <h2 className="text-xl font-bold text-navy">Our Approach</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{data.approach}</p>
            </Reveal>
            <Reveal index={2}>
              <h2 className="text-xl font-bold text-navy">The Outcome</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{data.outcome}</p>
            </Reveal>
          </div>

          <aside className="space-y-8">
            <Reveal direction="right" className="rounded-2xl border border-slate-200 p-6 transition-shadow duration-300 hover:shadow-lg">
              <h3 className="text-base font-bold text-navy">
                Facing a Similar Situation?
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Talk to our team about your {data.industry.label.toLowerCase()} business.
              </p>
              <Link
                href="/contact-us"
                className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-lg"
              >
                Get Free Consultation
              </Link>
            </Reveal>

            <RelatedLinks
              title="Related"
              links={[data.industry, data.service]}
              variant="list"
            />
          </aside>
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
