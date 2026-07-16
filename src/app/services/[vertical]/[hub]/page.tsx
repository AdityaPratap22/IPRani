import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/motion/Reveal";
import { serviceVerticals, findHub } from "@/data/services";
import { industries } from "@/data/industries";
import { clusters } from "@/data/knowledgeCenter";
import { ArrowRightIcon } from "@/components/icons";

export function generateStaticParams() {
  return serviceVerticals.flatMap((v) =>
    v.hubs.map((h) => ({ vertical: v.slug, hub: h.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vertical: string; hub: string }>;
}) {
  const { vertical, hub } = await params;
  const found = findHub(vertical, hub);
  return {
    title: found ? found.hub.name : "Legal Services",
    description: found ? `${found.hub.name} Solutions in India: ${found.hub.description} Secure expert assistance from IP Rani.` : "Explore our legal service offerings.",
  };
}

export default async function HubPage({
  params,
}: {
  params: Promise<{ vertical: string; hub: string }>;
}) {
  const { vertical, hub } = await params;
  const found = findHub(vertical, hub);
  if (!found) notFound();
  const { vertical: verticalData, hub: hubData } = found;

  const relatedIndustries = industries
    .filter((i) =>
      i.relatedServices.some((s) =>
        s.href.startsWith(`/services/${verticalData.slug}/${hubData.slug}`)
      )
    )
    .slice(0, 4);

  const relatedClusters = clusters
    .filter((c) =>
      c.relatedServices.some((s) =>
        s.href.startsWith(`/services/${verticalData.slug}/${hubData.slug}`)
      )
    )
    .slice(0, 3);

  const otherHubs = verticalData.hubs.filter((h) => h.slug !== hubData.slug);

  return (
    <>
      <PageHeader
        title={`${hubData.name} Services`}
        subtitle={hubData.description}
        crumbs={[
          { label: "Services", href: "/services" },
          { label: verticalData.name, href: `/services/${verticalData.slug}` },
          { label: hubData.name },
        ]}
      />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {hubData.subServices.length > 0 ? (
            <>
              <Reveal>
                <h2 className="text-2xl font-bold text-navy">
                  {hubData.name} Services We Offer
                </h2>
              </Reveal>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {hubData.subServices.map((sub, i) => (
                  <Reveal key={sub.slug} index={i}>
                    <Link
                      href={`/services/${verticalData.slug}/${hubData.slug}/${sub.slug}`}
                      className="group block h-full rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:border-brand-blue/40 hover:shadow-xl"
                    >
                      <h3 className="text-base font-bold text-navy group-hover:text-brand-blue">
                        {sub.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">{sub.summary}</p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-all duration-200 group-hover:gap-2.5">
                        Learn about {sub.name}
                        <ArrowRightIcon className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </>
          ) : (
            <p className="max-w-2xl text-sm text-slate-500">
              {hubData.description}
            </p>
          )}

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            <RelatedLinks
              title={`Other ${verticalData.name} Services`}
              links={otherHubs.map((h) => ({
                label: h.name,
                href: `/services/${verticalData.slug}/${h.slug}`,
              }))}
            />
            {relatedIndustries.length > 0 && (
              <RelatedLinks
                title="Industries We Support"
                links={relatedIndustries.map((i) => ({
                  label: i.name,
                  href: `/industries/${i.slug}`,
                }))}
              />
            )}
          </div>

          {relatedClusters.length > 0 && (
            <div className="mt-10">
              <RelatedLinks
                title="Related Knowledge Center Guides"
                links={relatedClusters.map((c) => ({
                  label: c.name,
                  href: `/knowledge-center/${c.slug}`,
                }))}
              />
            </div>
          )}
        </div>
      </section>

      <CtaBanner
        title={`Need help with ${hubData.name}?`}
        buttonLabel="Get Free Consultation"
        buttonHref="/contact-us"
      />
    </>
  );
}
