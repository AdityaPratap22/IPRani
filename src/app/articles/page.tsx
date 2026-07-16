import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";
import { clusters } from "@/data/knowledgeCenter";
import { ArrowRightIcon } from "@/components/icons";

export const metadata = { title: "Articles | IP Rani" };

export default function ArticlesPage() {
  const allArticles = clusters.flatMap((cluster) =>
    cluster.articles.map((article) => ({ ...article, cluster }))
  );

  return (
    <>
      <PageHeader
        title="Articles"
        subtitle="Every guide and explainer from our Knowledge Center, in one place."
        crumbs={[{ label: "Articles" }]}
      />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allArticles.map((article, i) => (
              <Reveal key={`${article.cluster.slug}-${article.slug}`} index={i}>
                <Link
                  href={`/knowledge-center/${article.cluster.slug}/${article.slug}`}
                  className="group block h-full rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-brand-blue/40 hover:shadow-xl"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                    {article.cluster.name}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-navy group-hover:text-brand-blue">
                    {article.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{article.summary}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-all duration-200 group-hover:gap-2.5">
                    Read more
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
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
