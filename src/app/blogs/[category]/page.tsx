import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";
import { blogCategories } from "@/data/blogs/_types";
import { blogRegistry } from "@/data/blogs/_registry";
import { ArrowRightIcon } from "@/components/icons";

export function generateStaticParams() {
  return blogCategories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = blogCategories.find((c) => c.slug === category);
  return {
    title: cat ? `${cat.name} Blogs` : "Blogs",
    description: cat ? `Read the latest insights, articles, and guides about ${cat.name} written by the legal specialists at IP Rani.` : "Browse our blog categories.",
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = blogCategories.find((c) => c.slug === category);
  if (!cat) notFound();

  const articles = blogRegistry.filter((b) => b.category === category);

  return (
    <>
      <PageHeader
        title={cat.name}
        subtitle={cat.description}
        crumbs={[
          { label: "Blogs", href: "/blogs" },
          { label: cat.name },
        ]}
      />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-semibold text-brand-blue">
              {articles.length} articles
            </p>
          </Reveal>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <Reveal
                key={article.slug}
                index={i % 12}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div>
                  <h3 className="text-base font-bold text-navy leading-snug group-hover:text-brand-blue transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 line-clamp-3">
                    {article.summary}
                  </p>
                </div>
                <div className="mt-5 border-t border-slate-100 pt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-400">{article.readTime}</span>
                  <Link
                    href={`/blogs/${category}/${article.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark"
                  >
                    Read
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need expert legal advice?"
        buttonLabel="Get Free Consultation"
        buttonHref="/contact-us"
      />
    </>
  );
}
