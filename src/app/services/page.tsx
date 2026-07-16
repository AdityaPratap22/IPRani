import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";
import { serviceVerticals } from "@/data/services";
import { BulbIcon, PeopleIcon, GavelIcon, ArrowRightIcon, PhoneIcon } from "@/components/icons";

const verticalIcons: Record<string, typeof BulbIcon> = {
  "intellectual-property": BulbIcon,
  "corporate-legal": PeopleIcon,
  litigation: GavelIcon,
};

const verticalImages: Record<string, string> = {
  "intellectual-property":
    "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=900&q=80",
  "corporate-legal":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
  litigation:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
};

export const metadata = {
  title: "Services",
  description: "Explore IP Rani's legal and intellectual property services: trademark search/filing, patent drafting, copyright, company registration, and commercial litigation.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        subtitle="Comprehensive IP & legal services to protect your ideas and accelerate your business growth."
        crumbs={[{ label: "Services" }]}
      />

      <section className="space-y-16 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-16">
          {serviceVerticals.map((vertical, i) => {
            const Icon = verticalIcons[vertical.slug];
            return (
              <Reveal
                inView={false}
                key={vertical.slug}
                id={vertical.slug}
                className={`grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <img
                  src={verticalImages[vertical.slug]}
                  alt={vertical.name}
                  className="h-72 w-full rounded-2xl object-cover shadow-md transition-transform duration-500 hover:scale-[1.03]"
                />
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-brand-blue transition-transform duration-300 hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 text-2xl font-bold text-navy">
                    {vertical.name}
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    {vertical.description}
                  </p>
                  <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {vertical.hubs.map((hub) => (
                      <li key={hub.slug}>
                        <Link
                          href={`/services/${vertical.slug}/${hub.slug}`}
                          className="flex items-center gap-2 text-sm text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-brand-blue focus-visible:outline-2 focus-visible:outline-brand-blue rounded px-1"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" aria-hidden="true" />
                          {hub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${vertical.slug}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-all duration-200 hover:gap-2.5 hover:text-brand-blue-dark focus-visible:outline-2 focus-visible:outline-brand-blue rounded px-1"
                  >
                    Explore {vertical.name}
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-bg-light-2 px-4 py-10 sm:px-6 lg:px-8">
        <Reveal inView={false} className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-8 transition-shadow duration-300 hover:shadow-lg sm:flex-row">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-light text-brand-blue">
              <PhoneIcon className="h-6 w-6" />
            </span>
            <p className="text-base font-semibold text-navy">
              Not sure which service is right for you?
              <br />
              <span className="font-normal text-slate-500">
                Talk to our experts and get free guidance.
              </span>
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-stretch gap-3 sm:flex-row">
            <Link
              href="/contact-us"
              className="rounded-md bg-brand-blue px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:+919911655010"
              className="rounded-md border border-navy px-6 py-3 text-center text-sm font-semibold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-bg-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              +91 99116 55010
            </a>
          </div>
        </Reveal>
      </section>

      <CtaBanner
        title="Let's build a stronger, legally secure tomorrow."
        buttonLabel="Get Free Consultation"
        buttonHref="/contact-us"
      />
    </>
  );
}
