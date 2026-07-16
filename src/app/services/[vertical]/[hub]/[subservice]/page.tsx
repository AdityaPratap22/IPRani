import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/motion/Reveal";
import { serviceVerticals, findSubService } from "@/data/services";
import { industries } from "@/data/industries";
import { clusters } from "@/data/knowledgeCenter";
import { CheckShieldIcon } from "@/components/icons";
import { generateServiceContent } from "@/data/serviceGenerator";

export function generateStaticParams() {
  return serviceVerticals.flatMap((v) =>
    v.hubs.flatMap((h) =>
      h.subServices.map((s) => ({
        vertical: v.slug,
        hub: h.slug,
        subservice: s.slug,
      }))
    )
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vertical: string; hub: string; subservice: string }>;
}) {
  const { vertical, hub, subservice } = await params;
  const found = findSubService(vertical, hub, subservice);
  return {
    title: found ? found.subService.name : "Legal Service",
    description: found ? `${found.subService.name}: ${found.subService.summary} Access complete filings, documents, timeline and pricing from IP Rani.` : "Professional business legal service in India.",
  };
}

export default async function SubServicePage({
  params,
}: {
  params: Promise<{ vertical: string; hub: string; subservice: string }>;
}) {
  const { vertical, hub, subservice } = await params;
  const found = findSubService(vertical, hub, subservice);
  if (!found) notFound();
  const { vertical: verticalData, hub: hubData, subService } = found;

  const siblings = hubData.subServices.filter((s) => s.slug !== subService.slug);

  const relatedIndustries = industries
    .filter((i) =>
      i.relatedServices.some((s) =>
        s.href === `/services/${verticalData.slug}/${hubData.slug}/${subService.slug}`
      )
    )
    .slice(0, 3);

  const relatedArticles = clusters
    .flatMap((c) => c.articles.map((a) => ({ ...a, clusterSlug: c.slug })))
    .filter(
      (a) =>
        a.relatedService.href ===
        `/services/${verticalData.slug}/${hubData.slug}/${subService.slug}`
    )
    .slice(0, 3);

  const serviceContent = generateServiceContent(
    verticalData.slug,
    hubData.slug,
    subService.slug,
    subService.name
  );

  return (
    <>
      <PageHeader
        title={subService.name}
        subtitle={subService.summary}
        crumbs={[
          { label: "Services", href: "/services" },
          { label: verticalData.name, href: `/services/${verticalData.slug}` },
          { label: hubData.name, href: `/services/${verticalData.slug}/${hubData.slug}` },
          { label: subService.name },
        ]}
      />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {/* 1. How the Process Works */}
            <h2 className="text-2xl font-bold text-navy">
              How Our {subService.name} Process Works
            </h2>
            <ul className="mt-6 space-y-4">
              {serviceContent.processSteps.map((step, i) => (
                <li key={step}>
                  <Reveal inView={false} index={i} direction="left" className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bg-light text-xs font-bold text-brand-blue transition-transform duration-300 hover:scale-110">
                      {i + 1}
                    </span>
                    <span className="text-sm text-slate-600 leading-6">{step}</span>
                  </Reveal>
                </li>
              ))}
            </ul>

            {/* 2. Who is this service for? */}
            <h2 className="mt-12 text-2xl font-bold text-navy">
              Who is this service for?
            </h2>
            <div className="mt-6 space-y-4">
              {serviceContent.whoFor.map((desc, i) => (
                <Reveal inView={false} key={i} index={i} direction="left" className="flex items-start gap-3">
                  <span className="flex h-2 w-2 mt-2 shrink-0 rounded-full bg-brand-blue" />
                  <span className="text-sm text-slate-600 leading-6">{desc}</span>
                </Reveal>
              ))}
            </div>

            {/* 3. Why you need this service */}
            <h2 className="mt-12 text-2xl font-bold text-navy">
              Why you need this service
            </h2>
            <div className="mt-6 space-y-4">
              {serviceContent.whyNeed.map((desc, i) => (
                <Reveal inView={false} key={i} index={i} direction="left" className="flex items-start gap-3">
                  <span className="flex h-2 w-2 mt-2 shrink-0 rounded-full bg-brand-blue" />
                  <span 
                    className="text-sm text-slate-600 leading-6"
                    dangerouslySetInnerHTML={{ __html: desc }}
                  />
                </Reveal>
              ))}
            </div>

            {/* 4. Required Documents & Deliverables */}
            <h2 className="mt-12 text-2xl font-bold text-navy">
              Required Documents &amp; Deliverables
            </h2>
            <div className="mt-6 space-y-4">
              {serviceContent.documents.map((doc, i) => (
                <Reveal inView={false} key={i} index={i} direction="left" className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand-blue">
                    <CheckShieldIcon className="h-3 w-3" />
                  </span>
                  <span className="text-sm text-slate-600 leading-6">{doc}</span>
                </Reveal>
              ))}
            </div>

            {/* 5. Timeline & Roadmap */}
            <h2 className="mt-12 text-2xl font-bold text-navy">
              Filing Timeline &amp; Roadmap
            </h2>
            <div className="mt-4">
              <Reveal inView={false} direction="left">
                <p className="text-sm text-slate-600 leading-7 bg-bg-light rounded-xl p-5 border border-slate-100">
                  {serviceContent.timeline}
                </p>
              </Reveal>
            </div>

            {/* 6. Onboarding & Engagement Process */}
            <h2 className="mt-12 text-2xl font-bold text-navy">
              How IP Rani Works: Our Onboarding &amp; Engagement Process
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              We make legal and intellectual property filings seamless, secure, and fully transparent. Here is how we handle your assignment from start to finish:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { title: "1. Strategy Call", desc: "Understand your goals, check eligibility, and draft the filing roadmap." },
                { title: "2. Document Audit", desc: "Collect required records and conduct compliance checks for errors." },
                { title: "3. Fast Filing", desc: "Draft and submit applications to the registry within 48 business hours." },
                { title: "4. Active Tracking", desc: "Monitor application progress and respond to office actions/objections." },
                { title: "5. Final Delivery", desc: "Handover certified registrations and provide post-filing support." }
              ].map((item, i) => (
                <Reveal inView={false} key={i} index={i} className="relative rounded-xl border border-slate-100 bg-bg-light p-4 shadow-sm hover:scale-105 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default">
                  <h4 className="text-sm font-bold text-navy">{item.title}</h4>
                  <p className="mt-2 text-[12px] text-slate-500 leading-5">{item.desc}</p>
                </Reveal>
              ))}
            </div>

            {/* 7. FAQs */}
            <h2 className="mt-12 text-2xl font-bold text-navy">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-6">
              {serviceContent.faqs.map((faq, i) => (
                <Reveal inView={false} key={faq.q} index={i} className="rounded-xl p-4 transition-colors duration-300 hover:bg-bg-light-2">
                  <h3 className="text-base font-semibold text-navy">{faq.q}</h3>
                  <p className="mt-1 text-sm text-slate-500 leading-6">{faq.a}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="space-y-8">
            <Reveal direction="right" className="rounded-2xl border border-slate-200 p-6 transition-shadow duration-300 hover:shadow-lg">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-bg-light text-brand-blue">
                <CheckShieldIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-navy">
                Talk to a {hubData.name} specialist
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Get a free, no-obligation consultation on your {subService.name.toLowerCase()} requirement.
              </p>
              <Link
                href="/contact-us"
                className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-lg"
              >
                Get Free Consultation
              </Link>
            </Reveal>

            {siblings.length > 0 && (
              <RelatedLinks
                title={`Other ${hubData.name} Services`}
                links={siblings.map((s) => ({
                  label: s.name,
                  href: `/services/${verticalData.slug}/${hubData.slug}/${s.slug}`,
                }))}
                variant="list"
              />
            )}

            {relatedIndustries.length > 0 && (
              <RelatedLinks
                title="Relevant Industries"
                links={relatedIndustries.map((i) => ({
                  label: i.name,
                  href: `/industries/${i.slug}`,
                }))}
                variant="list"
              />
            )}

            {relatedArticles.length > 0 && (
              <RelatedLinks
                title="Related Guides"
                links={relatedArticles.map((a) => ({
                  label: a.title,
                  href: `/knowledge-center/${a.clusterSlug}/${a.slug}`,
                }))}
                variant="list"
              />
            )}
          </aside>
        </div>
      </section>

      <CtaBanner
        title={`Ready to get started with ${subService.name}?`}
        buttonLabel="Get Free Consultation"
        buttonHref="/contact-us"
      />
    </>
  );
}
