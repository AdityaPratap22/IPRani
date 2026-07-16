import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/motion/Reveal";
import { blogCategories } from "@/data/blogs/_types";
import { blogRegistry } from "@/data/blogs/_registry";

export const dynamicParams = true;

export function generateStaticParams() {
  return blogRegistry.map((b) => ({ category: b.category, slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const entry = blogRegistry.find(
    (b) => b.category === category && b.slug === slug
  );
  return {
    title: entry ? `${entry.title} | IP Rani` : "Blog | IP Rani",
    description: entry?.summary,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const entry = blogRegistry.find(
    (b) => b.category === category && b.slug === slug
  );
  if (!entry) notFound();

  const cat = blogCategories.find((c) => c.slug === category);


  // Dynamically load blog content
  let content: string | null = null;
  try {
    const mod = await import(`../../../../data/blogs/${category}/${slug}`);
    content = mod.default ?? mod.content ?? null;
  } catch (err) {
    console.error("Dynamic import error:", err);
  }
  const siblings = blogRegistry
    .filter((b) => b.category === category && b.slug !== slug)
    .slice(0, 5);

  return (
    <>
      <PageHeader
        title={entry.title}
        subtitle={entry.summary}
        crumbs={[
          { label: "Blogs", href: "/blogs" },
          { label: cat?.name ?? category, href: `/blogs/${category}` },
          { label: entry.title },
        ]}
      />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          <Reveal inView={false} as="article" className="prose-slate lg:col-span-2">
            {content ? (
              <div
                className="prose prose-slate max-w-none text-slate-600 leading-7 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-navy [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-sm [&_p]:leading-7 [&_p]:text-slate-600 [&_ul]:text-sm [&_ul]:text-slate-600 [&_ol]:text-sm [&_ol]:text-slate-600 [&_table]:text-sm [&_a]:text-brand-blue [&_a]:font-semibold [&_a]:no-underline hover:[&_a]:text-brand-blue-dark [&_a]:transition-colors"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ) : (
              <>
                <p className="text-sm leading-7 text-slate-600">
                  {entry.summary}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  This article is currently being prepared by our legal team.
                  In the meantime, feel free to explore our{" "}
                  <Link
                    href={`/blogs/${category}`}
                    className="font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
                  >
                    {cat?.name} articles
                  </Link>{" "}
                  or{" "}
                  <Link
                    href="/contact-us"
                    className="font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark"
                  >
                    contact us
                  </Link>{" "}
                  for personalised guidance.
                </p>
              </>
            )}
          </Reveal>

          <aside className="space-y-8">
            <Reveal
              inView={false}
              direction="right"
              className="rounded-2xl border border-slate-200 p-6 transition-shadow duration-300 hover:shadow-lg"
            >
              <h3 className="text-base font-bold text-navy">
                Talk to an Expert
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Get free guidance on {cat?.name?.toLowerCase() ?? "this topic"}.
              </p>
              <Link
                href="/contact-us"
                className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-lg"
              >
                Get Free Consultation
              </Link>
            </Reveal>

            {entry.relatedLinks.length > 0 && (
              <RelatedLinks
                title="Related Services"
                links={entry.relatedLinks}
                variant="list"
              />
            )}

            {siblings.length > 0 && (
              <RelatedLinks
                title={`More in ${cat?.name ?? "this category"}`}
                links={siblings.map((a) => ({
                  label: a.title,
                  href: `/blogs/${category}/${a.slug}`,
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
