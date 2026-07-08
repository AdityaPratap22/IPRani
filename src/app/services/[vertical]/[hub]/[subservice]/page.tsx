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
  return { title: found ? `${found.subService.name} | IP Rani` : "Services | IP Rani" };
}

const processSteps = [
  "Free initial consultation to understand your requirement",
  "Search, drafting or documentation as applicable",
  "Filing with the relevant authority",
  "Tracking and responding to office actions",
  "Confirmation once the matter is resolved or registered",
];

const faqs = (name: string) => [
  {
    q: `How long does ${name} take?`,
    a: "Timelines vary by case complexity and the relevant authority's processing time. We share a realistic estimate after the initial consultation.",
  },
  {
    q: `What documents do I need for ${name}?`,
    a: "We provide a checklist specific to your case once we understand your requirement — most clients can start with basic identity and business documents.",
  },
  {
    q: `Can IP Rani handle ${name} entirely online?`,
    a: "Yes, we handle documentation, filing and follow-up remotely, with calls scheduled as needed for key decisions.",
  },
];

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
            <h2 className="text-2xl font-bold text-navy">
              How Our {subService.name} Process Works
            </h2>
            <ul className="mt-6 space-y-4">
              {processSteps.map((step, i) => (
                <li key={step}>
                  <Reveal index={i} direction="left" className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-bg-light text-xs font-bold text-brand-blue transition-transform duration-300 hover:scale-110">
                      {i + 1}
                    </span>
                    <span className="text-sm text-slate-600">{step}</span>
                  </Reveal>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-bold text-navy">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-6">
              {faqs(subService.name).map((faq, i) => (
                <Reveal key={faq.q} index={i} className="rounded-xl p-4 transition-colors duration-300 hover:bg-bg-light-2">
                  <h3 className="text-base font-semibold text-navy">{faq.q}</h3>
                  <p className="mt-1 text-sm text-slate-500">{faq.a}</p>
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
