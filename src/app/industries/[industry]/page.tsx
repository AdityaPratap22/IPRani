import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/motion/Reveal";
import Counter from "@/components/motion/Counter";
import { industries, findIndustry } from "@/data/industries";
import { caseStudies } from "@/data/caseStudies";
import { clusters } from "@/data/knowledgeCenter";
import { CheckShieldIcon, ArrowRightIcon } from "@/components/icons";

export function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;
  const data = findIndustry(industry);
  return {
    title: data ? data.name : "Industry Support",
    description: data ? `${data.name} industry legal solutions: ${data.tagline} We assist with ${data.complianceFramework[0]}, ${data.complianceFramework[1]}, and risk mitigation.` : "Read about industries we serve.",
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;
  const data = findIndustry(industry);
  if (!data) notFound();

  const relatedCaseStudy = caseStudies.find(
    (c) => c.industry.href === `/industries/${data.slug}`
  );
  const relatedArticles = clusters
    .filter((c) => c.relatedIndustry?.href === `/industries/${data.slug}`)
    .slice(0, 2);

  return (
    <>
      <PageHeader
        title={data.name}
        subtitle={data.tagline}
        crumbs={[{ label: "Industries", href: "/industries" }, { label: data.name }]}
      />

      {/* ─── Stats Bar ─── */}
      <section className="border-b border-slate-100 bg-bg-light-2 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.stats.map((stat, i) => (
            <Reveal inView={false} key={stat.label} index={i} className="text-center">
              <p className="text-3xl font-bold text-brand-blue">
                <Counter value={stat.value} />
              </p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── Main Content ─── */}
      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-14">

            {/* 1. Overview */}
            <div>
              <Reveal inView={false}>
                <h2 className="text-2xl font-bold text-navy">Industry Overview</h2>
              </Reveal>
              <Reveal inView={false}>
                <p className="mt-3 text-sm text-slate-600 leading-7">
                  {data.overview}
                </p>
              </Reveal>
            </div>

            {/* 2. Key Challenges — card grid */}
            <div>
              <Reveal inView={false}>
                <h2 className="text-2xl font-bold text-navy">
                  Key Legal &amp; IP Challenges in {data.name}
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  These are the most critical areas where businesses in the {data.name.toLowerCase()} sector face legal exposure:
                </p>
              </Reveal>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {data.challenges.map((c, i) => (
                  <Reveal
                    inView={false}
                    key={c.title}
                    index={i}
                    className="rounded-xl border border-slate-100 bg-bg-light-2 p-5 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:border-brand-blue/30 cursor-default"
                  >
                    <h3 className="text-sm font-bold text-navy">{c.title}</h3>
                    <p className="mt-2 text-[13px] text-slate-500 leading-6">{c.description}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* 3. IP & Legal Risks */}
            <div>
              <Reveal inView={false}>
                <h2 className="text-2xl font-bold text-navy">
                  IP &amp; Legal Risks Specific to {data.name}
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Unaddressed, these risk factors can lead to revenue loss, regulatory penalties, or competitive disadvantage:
                </p>
              </Reveal>
              <ul className="mt-5 space-y-3">
                {data.risks.map((risk, i) => (
                  <li key={risk}>
                    <Reveal
                      inView={false}
                      index={i}
                      direction="left"
                      className="flex items-start gap-3 text-sm text-slate-600 leading-6"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                      {risk}
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. How We Help — numbered process */}
            <div>
              <Reveal inView={false}>
                <h2 className="text-2xl font-bold text-navy">
                  How IP Rani Helps {data.name} Businesses
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Our structured engagement model ensures nothing falls through the cracks:
                </p>
              </Reveal>
              <div className="mt-6 space-y-4">
                {data.howWeHelp.map((item, i) => (
                  <Reveal inView={false} key={item.step} index={i} direction="left" className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-white shadow-sm">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-navy">{item.title}</h3>
                      <p className="mt-1 text-[13px] text-slate-500 leading-6">{item.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* 5. Regulatory & Compliance Framework */}
            <div>
              <Reveal inView={false}>
                <h2 className="text-2xl font-bold text-navy">
                  Regulatory &amp; Compliance Framework
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Businesses in the {data.name.toLowerCase()} sector must align operations with these key Indian statutes and regulatory standards:
                </p>
              </Reveal>
              <ul className="mt-5 space-y-3">
                {data.complianceFramework.map((rule, i) => (
                  <li key={rule}>
                    <Reveal inView={false} index={i} direction="left" className="flex items-start gap-3 text-sm text-slate-600 leading-6">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand-blue mt-0.5">
                        <CheckShieldIcon className="h-3 w-3" />
                      </span>
                      {rule}
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>

            {/* 6. Strategic Best Practices */}
            <div>
              <Reveal inView={false}>
                <h2 className="text-2xl font-bold text-navy">
                  Strategic Best Practices
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  We recommend implementing these key protective legal and IP measures early:
                </p>
              </Reveal>
              <ul className="mt-5 space-y-3">
                {data.bestPractices.map((practice, i) => (
                  <li key={practice}>
                    <Reveal inView={false} index={i} direction="left" className="flex items-start gap-3 text-sm text-slate-600 leading-6">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      {practice}
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>

            {/* 7. Industry FAQs */}
            <div>
              <Reveal inView={false}>
                <h2 className="text-2xl font-bold text-navy">
                  Frequently Asked Questions — {data.name}
                </h2>
              </Reveal>
              <div className="mt-6 space-y-5">
                {data.faqs.map((faq, i) => (
                  <Reveal
                    inView={false}
                    key={faq.q}
                    index={i}
                    className="rounded-xl border border-slate-100 p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-md hover:border-brand-blue/20"
                  >
                    <h3 className="text-sm font-semibold text-navy">{faq.q}</h3>
                    <p className="mt-2 text-[13px] text-slate-500 leading-6">{faq.a}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* 8. Related Case Study */}
            {relatedCaseStudy && (
              <Reveal inView={false} className="rounded-2xl border border-slate-200 p-6 transition-shadow duration-300 hover:shadow-lg">
                <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
                  Case Study
                </h3>
                <Link
                  href={`/case-studies/${relatedCaseStudy.slug}`}
                  className="mt-2 block text-lg font-bold text-navy transition-colors hover:text-brand-blue"
                >
                  {relatedCaseStudy.title}
                </Link>
                <p className="mt-1 text-sm text-slate-500 leading-6">
                  {relatedCaseStudy.summary}
                </p>
                <Link
                  href={`/case-studies/${relatedCaseStudy.slug}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-all hover:gap-2.5"
                >
                  Read Case Study <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </Reveal>
            )}
          </div>

          {/* ─── Sidebar ─── */}
          <aside className="space-y-8">
            <Reveal direction="right" inView={false} className="rounded-2xl border border-slate-200 p-6 transition-shadow duration-300 hover:shadow-lg">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-bg-light text-brand-blue">
                <CheckShieldIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-navy">
                Talk to Our {data.name} Team
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Get tailored legal and IP guidance for your {data.name.toLowerCase()} business from our specialist team.
              </p>
              <Link
                href="/contact-us"
                className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-lg"
              >
                Get Free Consultation
              </Link>
            </Reveal>

            <RelatedLinks
              title="Recommended Services"
              links={data.relatedServices}
              variant="list"
            />

            {relatedArticles.length > 0 && (
              <RelatedLinks
                title="Related Guides"
                links={relatedArticles.map((c) => ({
                  label: c.name,
                  href: `/knowledge-center/${c.slug}`,
                }))}
                variant="list"
              />
            )}

            {/* Quick Contact Card */}
            <Reveal direction="right" inView={false} className="rounded-2xl bg-navy p-6 text-white">
              <h3 className="text-base font-bold">Need Urgent Help?</h3>
              <p className="mt-2 text-sm text-slate-300 leading-6">
                Call us directly at <strong className="text-white">99116 55010</strong> or send a WhatsApp message for immediate assistance with your {data.name.toLowerCase()} legal matters.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="tel:+919911655010"
                  className="inline-flex flex-1 items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/20"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/919911655010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-600"
                >
                  WhatsApp
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <CtaBanner
        title={`Protecting ${data.name} businesses, one case at a time.`}
        buttonLabel="Get Free Consultation"
        buttonHref="/contact-us"
      />
    </>
  );
}
