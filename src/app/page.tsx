import Link from "next/link";
import Stats from "@/components/Stats";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";
import {
  BulbIcon,
  PeopleIcon,
  GavelIcon,
  RocketIcon,
  LaptopIcon,
  CartIcon,
  PillIcon,
  FactoryIcon,
  FoodIcon,
  CameraIcon,
  HandshakeIcon,
  TagIcon,
  StarIcon,
  ClockIcon,
  BulbSparkIcon,
  ArrowRightIcon,
} from "@/components/icons";

function FmcgIcon(props: { className?: string }) {
  return <TagIcon {...props} />;
}

const practiceAreas = [
  {
    icon: BulbIcon,
    iconColor: "text-brand-blue bg-blue-50",
    title: "Intellectual Property",
    description: "Protect your ideas, brands and creations.",
    items: ["Trademark", "Patent", "Design", "Copyright", "Geographical Indication", "IP Advisory"],
    href: "/services/intellectual-property",
    linkLabel: "Explore IP Services",
  },
  {
    icon: PeopleIcon,
    iconColor: "text-teal bg-teal-50",
    title: "Corporate Legal",
    description: "Build your business on a strong legal foundation.",
    items: ["Company Registration", "Contract Drafting", "ROC & Compliance", "Startup Legal"],
    href: "/services/corporate-legal",
    linkLabel: "Explore Corporate Legal",
  },
  {
    icon: GavelIcon,
    iconColor: "text-navy bg-slate-100",
    title: "Litigation",
    description: "Effective legal representation. Strategic outcomes.",
    items: [
      "IP Litigation & Enforcement",
      "Commercial Litigation",
      "Civil / Criminal Litigation",
      "Banking & Finance",
      "Property Litigation",
      "Matrimonial",
    ],
    href: "/services/litigation",
    linkLabel: "Explore Litigation",
  },
];

const industries = [
  { icon: RocketIcon, label: "Startups", slug: "startups" },
  { icon: LaptopIcon, label: "SaaS & Tech", slug: "saas-tech" },
  { icon: CartIcon, label: "D2C & E-commerce", slug: "d2c-ecommerce" },
  { icon: FmcgIcon, label: "FMCG", slug: "fmcg" },
  { icon: PillIcon, label: "Pharma & Healthcare", slug: "pharma-healthcare" },
  { icon: FactoryIcon, label: "Manufacturing", slug: "manufacturing" },
  { icon: FoodIcon, label: "Food & Restaurants", slug: "food-restaurants" },
  { icon: CameraIcon, label: "Media & Creators", slug: "media-creators" },
];

const whyUs = [
  { icon: HandshakeIcon, label: "Client First Approach" },
  { icon: TagIcon, label: "Transparent Pricing" },
  { icon: StarIcon, label: "Experienced Professionals" },
  { icon: ClockIcon, label: "Timely Delivery" },
  { icon: BulbSparkIcon, label: "End-to-end Solutions" },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-r from-bg-light via-bg-light-2 to-white shadow-[0_20px_35px_-15px_rgba(13,43,82,0.35)]">
        {/* Desktop: photo blended into the right side of the hero */}
        <Reveal direction="right" className="absolute inset-y-0 right-0 hidden w-[64%] lg:block">
          <img
            src="/hero.png"
            alt=""
            className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />
          {/* fade only blends the left seam so the lady stays fully visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-bg-light-2 to-transparent to-14%" />
        </Reveal>

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-36">
          <Reveal direction="left" className="lg:max-w-lg">
            <h1 className="text-4xl font-bold leading-[1.18] text-navy sm:text-5xl">
              Protect Your
              <br />
              Innovation.
              <br />
              Build Your Business
              <br />
              With Confidence.
            </h1>
            <p className="mt-5 max-w-md text-base text-slate-500">
              End-to-end IP &amp; Legal solutions for start-ups, enterprises and
              growing businesses.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-lg"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="rounded-md border border-navy px-6 py-3 text-sm font-semibold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-bg-light"
              >
                Explore Services
              </Link>
            </div>
          </Reveal>

          {/* Mobile: photo stacked below the text */}
          <div className="mt-10 lg:hidden">
            <img
              src="/hero.png"
              alt="IP Rani team advising a client"
              className="h-64 w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      <Stats />

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="text-center text-3xl font-bold text-navy">
              Our Core Practice Areas
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {practiceAreas.map((area, i) => (
              <Reveal
                key={area.title}
                index={i}
                className="group rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-blue/40 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 ${area.iconColor}`}
                  >
                    <area.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-bold text-navy">{area.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-500">{area.description}</p>
                <ul className="mt-4 space-y-2">
                  {area.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={area.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-all duration-200 hover:gap-2.5 hover:text-brand-blue-dark"
                >
                  {area.linkLabel}
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-light-2 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="text-center text-3xl font-bold text-navy">
              Industries We Serve
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {industries.map((industry, i) => (
              <Reveal key={industry.label} index={i} direction="none">
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex flex-col items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:shadow-md"
                >
                  <industry.icon className="h-6 w-6 text-navy transition-transform duration-300 group-hover:scale-125 group-hover:text-brand-blue" />
                  <span className="text-xs font-medium text-slate-600">
                    {industry.label}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/industries"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-all duration-200 hover:gap-2.5 hover:text-brand-blue-dark"
            >
              View All Industries
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-6xl rounded-3xl bg-bg-light p-8 sm:p-12">
          <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
            Why Businesses Trust IP Rani
          </h2>
          <p className="mt-2 text-center text-sm text-slate-500">
            We combine legal expertise with business understanding.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
            {whyUs.map((item, i) => (
              <Reveal
                key={item.label}
                index={i}
                direction="none"
                className="group flex flex-col items-center gap-3 rounded-xl bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <item.icon className="h-6 w-6 text-brand-blue transition-transform duration-300 group-hover:scale-125" />
                <span className="text-xs font-semibold text-navy">
                  {item.label}
                </span>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <CtaBanner
        title="Have a question or need legal advice?"
        subtitle="Our experts are here to help you protect and grow your business."
        buttonLabel="Schedule a Free Consultation"
        buttonHref="/contact-us"
      />
    </>
  );
}
