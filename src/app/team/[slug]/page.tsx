import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/motion/Reveal";
import { team, findTeamMember } from "@/data/team";

export function generateStaticParams() {
  return team.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = findTeamMember(slug);
  return { title: data ? `${data.name} | IP Rani` : "Team | IP Rani" };
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = findTeamMember(slug);
  if (!data) notFound();

  const others = team.filter((t) => t.slug !== data.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        title={data.name}
        subtitle={data.role}
        crumbs={[{ label: "Team", href: "/team" }, { label: data.name }]}
      />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <img
              src={data.image}
              alt={data.name}
              className="h-72 w-full max-w-sm rounded-2xl object-cover shadow-md transition-transform duration-500 hover:scale-[1.03]"
            />
            <p className="mt-6 text-sm leading-7 text-slate-600">{data.bio}</p>

            <h3 className="mt-8 text-sm font-bold uppercase tracking-wide text-navy">
              Focus Areas
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {data.focus.map((f) => (
                <span
                  key={f}
                  className="rounded-full bg-bg-light px-3 py-1 text-xs font-semibold text-navy transition-transform duration-200 hover:scale-105"
                >
                  {f}
                </span>
              ))}
            </div>
          </Reveal>

          <aside className="space-y-8">
            <Reveal direction="right" className="rounded-2xl border border-slate-200 p-6 transition-shadow duration-300 hover:shadow-lg">
              <h3 className="text-base font-bold text-navy">
                Work with {data.name.split(" ")[0]}
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Get in touch to discuss your requirement.
              </p>
              <Link
                href="/contact-us"
                className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-lg"
              >
                Get Free Consultation
              </Link>
            </Reveal>

            <RelatedLinks
              title="Other Team Members"
              links={others.map((t) => ({ label: t.name, href: `/team/${t.slug}` }))}
              variant="list"
            />
          </aside>
        </div>
      </section>

      <CtaBanner
        title="Let's build a stronger, legally secure tomorrow."
        buttonLabel="Get Free Consultation"
        buttonHref="/contact-us"
      />
    </>
  );
}
