import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/motion/Reveal";
import { serviceVerticals, findVertical } from "@/data/services";
import { industries } from "@/data/industries";
import { clusters } from "@/data/knowledgeCenter";
import { ArrowRightIcon } from "@/components/icons";

export function generateStaticParams() {
  return serviceVerticals.map((v) => ({ vertical: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vertical: string }>;
}) {
  const { vertical } = await params;
  const data = findVertical(vertical);
  return { title: data ? `${data.name} Services | IP Rani` : "Services | IP Rani" };
}

export default async function VerticalPage({
  params,
}: {
  params: Promise<{ vertical: string }>;
}) {
  const { vertical } = await params;
  const data = findVertical(vertical);
  if (!data) notFound();

  const relatedIndustries = industries
    .filter((i) => i.relatedServices.some((s) => s.href.includes(`/services/${data.slug}/`)))
    .slice(0, 4);

  const relatedClusters = clusters
    .filter((c) => c.relatedServices.some((s) => s.href.includes(`/services/${data.slug}/`)))
    .slice(0, 3);

  return (
    <>
      <PageHeader
        title={data.name}
        subtitle={data.description}
        crumbs={[{ label: "Services", href: "/services" }, { label: data.name }]}
      />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="text-2xl font-bold text-navy">
              {data.name} Practice Areas
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.hubs.map((hub, i) => (
              <Reveal
                key={hub.slug}
                index={i}
                className="rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:border-brand-blue/40 hover:shadow-xl"
              >
                <h3 className="text-lg font-bold text-navy">{hub.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{hub.summary}</p>
                {hub.subServices.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {hub.subServices.slice(0, 4).map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${data.slug}/${hub.slug}/${s.slug}`}
                          className="flex items-center gap-2 text-sm text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-brand-blue"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                          {s.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  href={`/services/${data.slug}/${hub.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-all duration-200 hover:gap-2.5 hover:text-brand-blue-dark"
                >
                  {hub.name} Services
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </Reveal>
            ))}
          </div>

          {(relatedIndustries.length > 0 || relatedClusters.length > 0) && (
            <div className="mt-14 grid gap-10 sm:grid-cols-2">
              {relatedIndustries.length > 0 && (
                <RelatedLinks
                  title="Industries We Support"
                  links={relatedIndustries.map((i) => ({
                    label: i.name,
                    href: `/industries/${i.slug}`,
                  }))}
                />
              )}
              {relatedClusters.length > 0 && (
                <RelatedLinks
                  title="Related Knowledge Center Guides"
                  links={relatedClusters.map((c) => ({
                    label: c.name,
                    href: `/knowledge-center/${c.slug}`,
                  }))}
                />
              )}
            </div>
          )}
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
