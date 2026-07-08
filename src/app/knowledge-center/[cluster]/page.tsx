import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/motion/Reveal";
import { clusters, findCluster } from "@/data/knowledgeCenter";
import { ArrowRightIcon } from "@/components/icons";

export function generateStaticParams() {
  return clusters.map((c) => ({ cluster: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cluster: string }>;
}) {
  const { cluster } = await params;
  const data = findCluster(cluster);
  return { title: data ? `${data.name} | IP Rani` : "Knowledge Center | IP Rani" };
}

export default async function ClusterPage({
  params,
}: {
  params: Promise<{ cluster: string }>;
}) {
  const { cluster } = await params;
  const data = findCluster(cluster);
  if (!data) notFound();

  return (
    <>
      <PageHeader
        title={data.name}
        subtitle={data.description}
        crumbs={[
          { label: "Knowledge Center", href: "/knowledge-center" },
          { label: data.name },
        ]}
      />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-navy">
              {data.name} Articles
            </h2>
            <div className="mt-6 space-y-4">
              {data.articles.map((article, i) => (
                <Reveal key={article.slug} index={i}>
                  <Link
                    href={`/knowledge-center/${data.slug}/${article.slug}`}
                    className="group block rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lg"
                  >
                    <h3 className="text-base font-bold text-navy group-hover:text-brand-blue">
                      {article.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">{article.summary}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-all duration-200 group-hover:gap-2.5">
                      Read {article.title}
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="space-y-8">
            <Reveal direction="right" className="rounded-2xl border border-slate-200 p-6 transition-shadow duration-300 hover:shadow-lg">
              <h3 className="text-base font-bold text-navy">
                Need Help With This?
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Talk to an expert about your {data.name.toLowerCase()} requirement.
              </p>
              <Link
                href="/contact-us"
                className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-lg"
              >
                Get Free Consultation
              </Link>
            </Reveal>

            <RelatedLinks
              title="Related Services"
              links={data.relatedServices}
              variant="list"
            />

            {data.relatedIndustry && (
              <RelatedLinks
                title="Relevant Industry"
                links={[data.relatedIndustry]}
                variant="list"
              />
            )}
          </aside>
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
