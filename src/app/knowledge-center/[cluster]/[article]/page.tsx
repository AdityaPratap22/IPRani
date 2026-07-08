import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/motion/Reveal";
import { clusters, findArticle } from "@/data/knowledgeCenter";

export function generateStaticParams() {
  return clusters.flatMap((c) =>
    c.articles.map((a) => ({ cluster: c.slug, article: a.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cluster: string; article: string }>;
}) {
  const { cluster, article } = await params;
  const found = findArticle(cluster, article);
  return { title: found ? `${found.article.title} | IP Rani` : "Knowledge Center | IP Rani" };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ cluster: string; article: string }>;
}) {
  const { cluster, article } = await params;
  const found = findArticle(cluster, article);
  if (!found) notFound();
  const { cluster: clusterData, article: articleData } = found;

  const siblings = clusterData.articles
    .filter((a) => a.slug !== articleData.slug)
    .slice(0, 3);

  return (
    <>
      <PageHeader
        title={articleData.title}
        subtitle={articleData.summary}
        crumbs={[
          { label: "Knowledge Center", href: "/knowledge-center" },
          { label: clusterData.name, href: `/knowledge-center/${clusterData.slug}` },
          { label: articleData.title },
        ]}
      />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          <Reveal as="article" className="prose-slate lg:col-span-2">
            <p className="text-sm leading-7 text-slate-600">
              {articleData.summary} This guide is part of our{" "}
              <Link
                href={`/knowledge-center/${clusterData.slug}`}
                className="font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
              >
                {clusterData.name}
              </Link>
              , where we cover the full process end-to-end.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              If this applies to your business, our{" "}
              <Link
                href={articleData.relatedService.href}
                className="font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
              >
                {articleData.relatedService.label}
              </Link>{" "}
              service handles this end-to-end — from the first consultation
              through to filing and follow-up, so you don&apos;t have to
              navigate the process alone.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Every case is different, so treat this as a starting point
              rather than a substitute for advice on your specific situation.
              Our team can review your documents and give you a clear,
              upfront view of timeline and cost before you commit to anything.
            </p>
          </Reveal>

          <aside className="space-y-8">
            <Reveal direction="right" className="rounded-2xl border border-slate-200 p-6 transition-shadow duration-300 hover:shadow-lg">
              <h3 className="text-base font-bold text-navy">
                Talk to an Expert
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Get free guidance on {articleData.relatedService.label.toLowerCase()}.
              </p>
              <Link
                href="/contact-us"
                className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-lg"
              >
                Get Free Consultation
              </Link>
            </Reveal>

            <RelatedLinks
              title="Related Service"
              links={[articleData.relatedService]}
              variant="list"
            />

            {siblings.length > 0 && (
              <RelatedLinks
                title={`More in ${clusterData.name}`}
                links={siblings.map((a) => ({
                  label: a.title,
                  href: `/knowledge-center/${clusterData.slug}/${a.slug}`,
                }))}
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
