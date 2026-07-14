import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";
import { blogCategories } from "@/data/blogs/_types";
import { ArrowRightIcon } from "@/components/icons";

export const metadata = { title: "Blogs & Legal Insights | IP Rani" };

export default function BlogsPage() {
  return (
    <>
      <PageHeader
        title="Blogs & Legal Insights"
        subtitle="Deep dives, legal analysis, and practical guides across 3,300+ topics — written by IP Rani's expert legal team."
        crumbs={[{ label: "Blogs" }]}
      />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="text-2xl font-bold text-navy">
              Browse by Category
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Select a category to explore our comprehensive legal guides.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {blogCategories.map((cat, i) => (
              <Reveal
                key={cat.slug}
                index={i}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold text-navy group-hover:text-brand-blue transition-colors">
                    {cat.name}
                  </h3>
                  <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-brand-blue">
                    {cat.count}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-500 line-clamp-2">
                  {cat.description}
                </p>
                <Link
                  href={`/blogs/${cat.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-all duration-200 hover:gap-2.5 hover:text-brand-blue-dark"
                >
                  Explore Articles
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need expert legal advice on your IP or business?"
        buttonLabel="Get Free Consultation"
        buttonHref="/contact-us"
      />
    </>
  );
}
