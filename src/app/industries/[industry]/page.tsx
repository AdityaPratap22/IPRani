import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/motion/Reveal";
import { industries, findIndustry } from "@/data/industries";
import { caseStudies } from "@/data/caseStudies";
import { clusters } from "@/data/knowledgeCenter";

export function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;
  const data = findIndustry(industry);
  return { title: data ? `${data.name} | IP Rani` : "Industries | IP Rani" };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;
  const data = findIndustry(industry);
  if (!data) notFound();

  const relatedCaseStudy = caseStudies.find(
    (c) => c.industry.href === `/industries/${data.slug}`
  );
  const relatedArticles = clusters
    .filter((c) => c.relatedIndustry?.href === `/industries/${data.slug}`)
    .slice(0, 2);

  return (
    <>
      <PageHeader
        title={data.name}
        subtitle={data.summary}
        crumbs={[{ label: "Industries", href: "/industries" }, { label: data.name }]}
      />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-navy">Overview</h2>
            <p className="mt-3 text-sm text-slate-500">
              We work with {data.name.toLowerCase()} businesses to close the
              legal and IP gaps that most commonly slow them down — before
              they become expensive problems.
            </p>

            <h2 className="mt-10 text-2xl font-bold text-navy">
              IP &amp; Legal Risks Specific to {data.name}
            </h2>
            <ul className="mt-4 space-y-3">
              {data.risks.map((risk, i) => (
                <li key={risk}>
                  <Reveal
                    index={i}
                    direction="left"
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                    {risk}
                  </Reveal>
                </li>
              ))}
            </ul>

            {relatedCaseStudy && (
              <Reveal className="mt-10 rounded-2xl border border-slate-200 p-6 transition-shadow duration-300 hover:shadow-lg">
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
                  Case Study
                </h3>
                <Link
                  href={`/case-studies/${relatedCaseStudy.slug}`}
                  className="mt-2 block text-lg font-bold text-navy transition-colors hover:text-brand-blue"
                >
                  {relatedCaseStudy.title}
                </Link>
                <p className="mt-1 text-sm text-slate-500">
                  {relatedCaseStudy.summary}
                </p>
              </Reveal>
            )}
          </div>

          <aside className="space-y-8">
            <Reveal direction="right" className="rounded-2xl border border-slate-200 p-6 transition-shadow duration-300 hover:shadow-lg">
              <h3 className="text-base font-bold text-navy">
                Talk to Our Team
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Get tailored guidance for your {data.name.toLowerCase()} business.
              </p>
              <Link
                href="/contact-us"
                className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-lg"
              >
                Get Free Consultation
              </Link>
            </Reveal>

            <RelatedLinks
              title="Recommended Services"
              links={data.relatedServices}
              variant="list"
            />

            {relatedArticles.length > 0 && (
              <RelatedLinks
                title="Related Guides"
                links={relatedArticles.map((c) => ({
                  label: c.name,
                  href: `/knowledge-center/${c.slug}`,
                }))}
                variant="list"
              />
            )}
          </aside>
        </div>
      </section>

      <CtaBanner
        title={`Protecting ${data.name} businesses, one case at a time.`}
        buttonLabel="Get Free Consultation"
        buttonHref="/contact-us"
      />
    </>
  );
}
