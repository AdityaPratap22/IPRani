"use client";

import Reveal from "@/components/motion/Reveal";
import { serviceRequirements } from "@/data/requirements";
import type { RequirementCategory } from "@/data/requirements";

function CategoryCard({ category, index }: { category: RequirementCategory; index: number }) {
  return (
    <Reveal index={index}>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-brand-blue/30 hover:shadow-lg h-full">
        <h4 className="flex items-center gap-2.5 text-base font-bold text-navy">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-blue/10 text-xs font-black text-brand-blue">
            {index + 1}
          </span>
          {category.heading}
        </h4>
        <ul className="mt-4 space-y-2.5">
          {category.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
              {item}
            </li>
          ))}
        </ul>
        {category.note && (
          <p className="mt-4 rounded-lg bg-blue-50 px-3 py-2 text-xs font-medium text-brand-blue leading-relaxed">
            💡 {category.note}
          </p>
        )}
      </div>
    </Reveal>
  );
}

export default function RequirementsSection({ hubSlug }: { hubSlug: string }) {
  const data = serviceRequirements[hubSlug];
  if (!data) return null;

  return (
    <section className="mt-16">
      <Reveal>
        <h2 className="text-2xl font-bold text-navy">{data.title}</h2>
      </Reveal>
      {data.intro && (
        <Reveal>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-500">
            {data.intro}
          </p>
        </Reveal>
      )}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.categories.map((cat, i) => (
          <CategoryCard key={cat.heading} category={cat} index={i} />
        ))}
      </div>
    </section>
  );
}
