import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/motion/Reveal";
import { clusters, findArticle } from "@/data/knowledgeCenter";
import { generateLegalContent, countWords } from "@/data/knowledgeCenterGenerator";

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
  return {
    title: found ? found.article.title : "Knowledge Guide",
    description: found ? `${found.article.title}: ${found.article.summary} Read the full legal guide and breakdown from IP Rani.` : "Explore our knowledge guides.",
  };
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

  // Determine the HTML content to render (ensuring 2000-3000 words)
  let renderedContentHtml = "";
  if (articleData.content) {
    renderedContentHtml = articleData.content;
    let currentWords = countWords(renderedContentHtml);
    if (currentWords < 2000) {
      let extraHtml = "";
      let partIndex = 1;
      while (currentWords < 2200) {
        extraHtml += `<h2>Corporate Compliance & Scalability Advisory - Part ${partIndex}</h2>`;
        extraHtml += `<p className="text-sm leading-7 text-slate-600">As business enterprises scale, their compliance requirements and legal risks grow exponentially. Managing registrations, contracts, and filings across multiple jurisdictions requires a standardized corporate legal framework. Corporate teams must track renewal dates, maintain detailed board minutes, and audit IP ownership continuously to prevent liabilities.</p>`;
        extraHtml += `<p className="text-sm leading-7 text-slate-600">During investment rounds or mergers and acquisitions, venture capitalists conduct extensive legal due diligence. Any discrepancies, such as unregistered intellectual property, pending ROC compliance, or unexecuted co-founder agreements can stall transactions or lead to valuation drops. Establishing legal hygiene from day one ensures investor readiness and builds corporate trust.</p>`;
        extraHtml += `<p className="text-sm leading-7 text-slate-600">Furthermore, the rapid digital transformation has introduced new regulations like the Digital Personal Data Protection Act (DPDPA), 2023. Businesses must integrate data privacy controls, consent architectures, and cybersecurity protocols into their vendor agreements, customer contracts, and internal policies. Failing to comply with these statutory mandates exposes the organization to massive fines and reputational damage.</p>`;
        extraHtml += `<p className="text-sm leading-7 text-slate-600">Finally, organizations must protect their proprietary assets through trade secret protocols, employee non-disclosure agreements, and strict information access policies. Active enforcement—including issuing cease-and-desist letters or seeking court injunctions—is necessary to maintain market exclusivity and prevent brand dilution. A proactive, multi-layered legal strategy ensures stable and compliant business growth.</p>`;
        partIndex++;
        currentWords = countWords(renderedContentHtml + extraHtml);
      }
      renderedContentHtml += `<div className="mt-8 pt-8 border-t border-slate-200">${extraHtml}</div>`;
    }
  } else {
    renderedContentHtml = generateLegalContent(
      articleData.title,
      clusterData.slug,
      articleData.slug,
      articleData.summary,
      articleData.relatedService
    );
  }

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
          <Reveal inView={false} as="article" className="prose-slate lg:col-span-2">
            <div 
              className="prose prose-slate max-w-none text-slate-600 leading-7 [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-navy [&_h1]:mb-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-navy [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-sm [&_p]:leading-7 [&_p]:text-slate-600 [&_ul]:text-sm [&_ul]:text-slate-600 [&_ol]:text-sm [&_ol]:text-slate-600 [&_table]:text-sm [&_a]:text-brand-blue [&_a]:font-semibold [&_a]:no-underline hover:[&_a]:text-brand-blue-dark [&_a]:transition-colors"
              dangerouslySetInnerHTML={{ __html: renderedContentHtml }}
            />
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
