import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/motion/Reveal";
import { clusters, findCluster } from "@/data/knowledgeCenter";
import { ArrowRightIcon } from "@/components/icons";
import { generateLegalContent } from "@/data/knowledgeCenterGenerator";
import TrademarkProcessFlowchart from "@/components/TrademarkProcessFlowchart";

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
  return {
    title: data ? data.name : "Knowledge Guide",
    description: data ? `${data.name}: ${data.summary} Deep-dive articles, legal procedures and frameworks compiled by IP Rani.` : "Explore our knowledge guides.",
  };
}

export default async function ClusterPage({
  params,
}: {
  params: Promise<{ cluster: string }>;
}) {
  const { cluster } = await params;
  const data = findCluster(cluster);
  if (!data) notFound();

  const overviewHtml = generateLegalContent(
    `${data.name} - Comprehensive Handbook & Regulatory Guide`,
    data.slug,
    data.slug,
    data.description
  );

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

            {data.slug === "trademark-guide" && (
              <div className="mt-12">
                <TrademarkProcessFlowchart />
              </div>
            )}

            {/* Comprehensive Handbook Overview Content (2000-3000 words) */}
            <div className="mt-12 pt-10 border-t border-slate-200">
              <Reveal inView={false}>
                <div 
                  className="prose prose-slate max-w-none text-slate-600 leading-7 [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-navy [&_h1]:mb-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-navy [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-sm [&_p]:leading-7 [&_p]:text-slate-600 [&_ul]:text-sm [&_ul]:text-slate-600 [&_ol]:text-sm [&_ol]:text-slate-600 [&_table]:text-sm [&_a]:text-brand-blue [&_a]:font-semibold [&_a]:no-underline hover:[&_a]:text-brand-blue-dark [&_a]:transition-colors"
                  dangerouslySetInnerHTML={{ __html: overviewHtml }}
                />
              </Reveal>
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
