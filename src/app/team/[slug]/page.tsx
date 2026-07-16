import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import RelatedLinks from "@/components/RelatedLinks";
import Reveal from "@/components/motion/Reveal";
import { team, findTeamMember } from "@/data/team";
import { CheckShieldIcon } from "@/components/icons";

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
  return {
    title: data ? data.name : "Team",
    description: data ? `Read the profile of ${data.name}, ${data.role} at IP Rani. Specialist in ${data.focus.join(", ")}.` : "IP Rani Legal Team Profile.",
  };
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
  const firstName = data.name.split(" ")[0];

  return (
    <>
      <PageHeader
        title={data.name}
        subtitle={data.role}
        crumbs={[{ label: "Team", href: "/team" }, { label: data.name }]}
      />

      {/* Profile Hero */}
      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          <Reveal inView={false} className="lg:col-span-2 space-y-10">
            {/* Photo + Quick Stats */}
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
              <img
                src={data.image}
                alt={data.name}
                className="h-[450px] w-full max-w-sm shrink-0 rounded-2xl object-cover object-top shadow-md transition-transform duration-500 hover:scale-[1.03]"
              />
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-navy">{data.name}</h2>
                <p className="mt-1 text-sm font-semibold text-brand-blue">
                  {data.role}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {data.bio}
                </p>
                {/* Quick Stats */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {data.highlights.map((h) => (
                    <div
                      key={h.label}
                      className="rounded-xl border border-slate-100 bg-bg-light-2 p-4"
                    >
                      <p className="text-2xl font-bold text-brand-blue">
                        {h.value}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {h.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Bio Text */}
            <div className="prose prose-slate max-w-none">
              <h3 className="text-lg font-bold text-navy">Professional Profile</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 whitespace-pre-line">
                {data.extendedBio}
              </p>
            </div>

            {/* Core Practice Areas */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
                Core Practice Areas
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {data.focus.map((f) => (
                  <span
                    key={f}
                    className="rounded-full bg-bg-light px-3.5 py-1 text-xs font-semibold text-navy"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Services Checklist */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
                Core Services &amp; Focus Areas
              </h3>
              <ul className="mt-4 space-y-3">
                {data.services.map((exp, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand-blue mt-0.5">
                      <CheckShieldIcon className="h-3 w-3" />
                    </span>
                    <span className="text-sm text-slate-600 leading-6">{exp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Qualifications */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
                Qualifications &amp; Memberships
              </h3>
              <ul className="mt-4 space-y-2.5">
                {data.qualifications.map((q) => (
                  <li key={q} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-blue" aria-hidden="true" />
                    <span className="text-sm text-slate-600 leading-6">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Sidebar */}
          <aside className="space-y-8">
            <Reveal
              inView={false}
              direction="right"
              className="rounded-2xl border border-slate-200 p-6 transition-shadow duration-300 hover:shadow-lg"
            >
              <h3 className="text-base font-bold text-navy">
                Work with {firstName}
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Get in touch to discuss your requirement.
              </p>
              <Link
                href="/contact-us"
                className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
              >
                Get Free Consultation
              </Link>
            </Reveal>

            <Reveal
              inView={false}
              direction="right"
              delay={0.05}
              className="rounded-2xl border border-slate-200 p-6 transition-shadow duration-300 hover:shadow-lg"
            >
              <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
                Quick Contact
              </h3>
              <div className="mt-4 space-y-3">
                <a
                  href="mailto:ipr@iprani.com"
                  className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-brand-blue focus-visible:outline-2 focus-visible:outline-brand-blue rounded px-1"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bg-light text-brand-blue" aria-hidden="true">
                    ✉
                  </span>
                  ipr@iprani.com
                </a>
                <a
                  href="tel:+919911655010"
                  className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-brand-blue focus-visible:outline-2 focus-visible:outline-brand-blue rounded px-1"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bg-light text-brand-blue" aria-hidden="true">
                    📞
                  </span>
                  +91 99116 55010
                </a>
                <a
                  href="https://wa.me/919911655010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-brand-blue focus-visible:outline-2 focus-visible:outline-brand-blue rounded px-1"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bg-light text-brand-blue" aria-hidden="true">
                    💬
                  </span>
                  WhatsApp Us (opens in a new tab)
                </a>
              </div>
            </Reveal>

            <RelatedLinks
              title="Other Team Members"
              links={others.map((t) => ({
                label: t.name,
                href: `/team/${t.slug}`,
              }))}
              variant="list"
            />

            <Reveal
              inView={false}
              direction="right"
              delay={0.1}
              className="rounded-2xl border border-slate-200 p-6 transition-shadow duration-300 hover:shadow-lg"
            >
              <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
                Explore Our Services
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  { label: "Trademark Services", href: "/services/intellectual-property/trademark" },
                  { label: "Patent Services", href: "/services/intellectual-property/patent" },
                  { label: "Startup Legal", href: "/services/corporate-legal/company-registration" },
                  { label: "Contract Drafting", href: "/services/corporate-legal/contracts" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block text-sm text-slate-500 transition-all duration-200 hover:translate-x-1 hover:text-brand-blue focus-visible:outline-2 focus-visible:outline-brand-blue rounded px-1"
                    >
                      → {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
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
