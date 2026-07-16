import Link from "next/link";
import Stats from "@/components/Stats";
import ImpactStats from "@/components/ImpactStats";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "IP Rani | IP & Legal Solutions for Businesses",
  description: "End-to-end IP & Legal solutions for start-ups, enterprises, and growing businesses. Register trademarks, draft founders agreements, protect patents, and secure your brand in India.",
};
import {
  BulbIcon,
  PeopleIcon,
  GavelIcon,
  RocketIcon,
  LaptopIcon,
  CartIcon,
  FactoryIcon,
  CameraIcon,
  HandshakeIcon,
  TagIcon,
  StarIcon,
  ClockIcon,
  BulbSparkIcon,
  ArrowRightIcon,
  PinIcon,
  ShieldIcon,
} from "@/components/icons";

const practiceAreas = [
  {
    icon: TagIcon,
    iconColor: "text-brand-blue bg-blue-50",
    title: "Trademark",
    description: "A trademark is more than a symbol—it’s your business identity. We ensure your brand name, logo, or slogan is legally protected, locally and globally.",
    items: [
      "Trademark Clearance Search",
      "Filing & Registration",
      "Objection & Hearing Replies",
      "Opposition Proceedings",
      "Madrid Protocol (International)",
      "Watch & Monitoring Services",
    ],
    href: "/services/intellectual-property/trademark",
    linkLabel: "Explore Trademark Services",
  },
  {
    icon: BulbIcon,
    iconColor: "text-teal bg-teal-50",
    title: "Patent",
    description: "Our patent experts and registered patent agents work closely with inventors to ensure your inventions are secured, scalable, and enforceable.",
    items: [
      "Patent Prior-art Search",
      "Drafting & Filing complete/provisional",
      "First Examination Report Reply",
      "Patent Opposition & Hearings",
      "PCT International Filings",
      "Patent Valuation & Strategy",
    ],
    href: "/services/intellectual-property/patent",
    linkLabel: "Explore Patent Services",
  },
  {
    icon: LaptopIcon,
    iconColor: "text-indigo bg-indigo-50",
    title: "Design",
    description: "Industrial design is a critical IP asset in sectors like fashion, technology, and consumer goods. We help safeguard your product’s visual uniqueness.",
    items: [
      "Design Clearance Search",
      "Drafting & Registration Filing",
      "Design Objection Responses",
      "Opposition & Hearings",
      "International Design Filing",
      "Design Litigation & Defense",
    ],
    href: "/services/intellectual-property/design",
    linkLabel: "Explore Design Services",
  },
  {
    icon: CameraIcon,
    iconColor: "text-purple-600 bg-purple-50",
    title: "Copyright",
    description: "From literary and artistic works to digital content, our copyright legal services offer creators the security and control they need. We enable creators to protect the content they create and monetize it effectively.",
    items: [
      "Copyright Clearance Search",
      "Copyright Registration Filing",
      "Objection & Discrepancy Reply",
      "Licensing & Assignment Deals",
      "Copyright Infringement Litigation",
      "Software Code Protection",
    ],
    href: "/services/intellectual-property/copyright",
    linkLabel: "Explore Copyright Services",
  },
  {
    icon: GavelIcon,
    iconColor: "text-red-600 bg-red-50",
    title: "IP Litigation & Enforcement",
    description: "At IP RANI, litigation isn’t just about fighting cases—it’s about winning them strategically. We defend your IP rights through strategic litigation while ensuring minimal disruption to your business operations. Each litigation strategy is crafted to align with your business and legal interests.",
    items: [
      "IP Litigation & Enforcement",
      "Commercial Litigation",
      "Civil / Criminal Litigation",
      "Injunctions & Appeals",
      "Anti-Counterfeiting Action",
      "Customs IP Enforcement",
    ],
    href: "/services/litigation/ip-litigation-enforcement",
    linkLabel: "Explore Litigation Services",
  },
  {
    icon: PinIcon,
    iconColor: "text-amber-600 bg-amber-50",
    title: "IP Search & Analysis",
    description: "We provide comprehensive trademark, patent, and design searches to identify potential conflicts and assess registrability. Our expert analysis helps you make informed, risk-free IP decisions before filing or enforcement.",
    items: [
      "Clearance Searches",
      "Novelty Assessment",
      "Freedom to Operate (FTO)",
      "Patentability Analysis",
      "Risk Assessment & Audit",
      "Market Intelligence",
    ],
    href: "/services/intellectual-property",
    linkLabel: "Explore Search Services",
  },
];

const otherServices = [
  {
    icon: PeopleIcon,
    iconColor: "text-teal bg-teal-50",
    title: "Corporate Legal",
    description: "Build your business on a strong legal foundation with company formation, contract drafting, and ROC compliance.",
    items: [
      "Company Registration",
      "LLP & Partnership Formation",
      "Contract Drafting & NDA",
      "ROC & Statutory Compliance",
      "Startup India Registration",
    ],
    href: "/services/corporate-legal",
    linkLabel: "Explore Corporate Legal",
  },
  {
    icon: GavelIcon,
    iconColor: "text-navy bg-slate-100",
    title: "Litigation & Disputes",
    description: "Strategic representation across civil suits, property, commercial, matrimonial, and criminal litigation.",
    items: [
      "Civil & Criminal Matters",
      "Property Title Searches (TSR)",
      "Commercial Contract Disputes",
      "Matrimonial & Family Law",
      "Arbitration & Execution",
    ],
    href: "/services/litigation",
    linkLabel: "Explore Litigation",
  },
  {
    icon: ShieldIcon,
    iconColor: "text-brand-blue bg-blue-50",
    title: "Banking & Debt Recovery",
    description: "Support for banks, NBFCs, and borrowers through specialized recovery tribunals and proceedings.",
    items: [
      "SARFAESI Proceedings",
      "Cheque Bounce Cases (Sec. 138)",
      "DRT & Lok Adalat Matters",
      "Arbitration Proceedings",
      "Secured Asset Recovery",
    ],
    href: "/services/litigation/banking-finance",
    linkLabel: "Explore Recovery Services",
  },
];

const industries = [
  { icon: RocketIcon, label: "Startups", slug: "startups" },
  { icon: LaptopIcon, label: "SaaS & Tech", slug: "saas-tech" },
  { icon: CartIcon, label: "D2C & E-commerce", slug: "d2c-ecommerce" },
  { icon: FactoryIcon, label: "Manufacturing", slug: "manufacturing" },
];

const whyUs = [
  { icon: HandshakeIcon, label: "Client First Approach" },
  { icon: TagIcon, label: "Transparent Pricing" },
  { icon: StarIcon, label: "Experienced Professionals" },
  { icon: ClockIcon, label: "Timely Delivery" },
  { icon: BulbSparkIcon, label: "End-to-end Solutions" },
];

const reviews = [
  {
    name: "Aditya Sharma",
    role: "Founder",
    company: "D2C Skincare Brand",
    content: "IP Rani made our trademark clearance and filing completely seamless. We had a competitor try to copy our packaging design, but thanks to their team registering our design beforehand, we resolved the dispute in days. Absolute lifesaver for D2C founders!",
  },
  {
    name: "Sneha Iyer",
    role: "CTO",
    company: "SaaS Tech Venture",
    content: "As a fast-growing tech startup, safeguarding our proprietary algorithms and patent portfolios was critical. The patent agents at IP Rani did an exceptional job drafting our patent applications and guiding us through the PCT international filing process.",
  },
  {
    name: "Vikram Goel",
    role: "Director",
    company: "Goel Manufacturing Ind.",
    content: "We have worked with IP Rani for all our statutory compliance, vendor contract agreements, and industrial design protection. Their legal knowledge and responsive support have made them our trusted long-term legal partner.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-r from-bg-light via-bg-light-2 to-white shadow-[0_20px_35px_-15px_rgba(13,43,82,0.35)]">
        {/* Desktop: photo blended into the right side of the hero */}
        <Reveal inView={false} direction="right" className="absolute inset-y-0 right-0 hidden w-[64%] lg:block">
          <img
            src="/hero.webp"
            alt="IP Rani team advising a client on legal and IP strategies"
            className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />
          {/* fade only blends the left seam so the lady stays fully visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-bg-light-2 to-transparent to-14%" />
        </Reveal>

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-36">
          <Reveal inView={false} direction="left" className="lg:max-w-lg">
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
                className="rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="rounded-md border border-navy px-6 py-3 text-sm font-semibold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-bg-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
              >
                Explore Services
              </Link>
            </div>
          </Reveal>

          {/* Mobile: photo stacked below the text */}
          <div className="mt-10 lg:hidden">
            <img
              src="/hero.webp"
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

          <div className="mt-12 text-center">
            <Reveal direction="up">
              <Link
                href="/services/intellectual-property"
                className="inline-flex items-center gap-2 rounded-md bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-lg"
              >
                Explore More IPR Services
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-bg-light-2 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="text-center text-3xl font-bold text-navy">
              Other Services
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {otherServices.map((area, i) => (
              <Reveal
                key={area.title}
                index={i}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-blue/40 hover:shadow-xl"
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

          <div className="mt-12 text-center">
            <Reveal direction="up">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-md bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-lg"
              >
                Explore All Services
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="text-center text-3xl font-bold text-navy">
              Industries We Serve
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4">
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

      <ImpactStats />

      <section className="bg-bg-light-2 px-4 py-16 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Reveal direction="down">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-blue">
                Testimonials
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
                What Our Clients Say
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Trusted by founders, tech pioneers, and established manufacturers across India.
              </p>
              <div className="mx-auto mt-4 h-[2px] w-24 bg-brand-blue/30" />
            </Reveal>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal
                key={review.name}
                index={i}
                direction="up"
                className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
              >
                <div>
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className="h-4 w-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    &ldquo;{review.content}&rdquo;
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-sm font-semibold text-navy">{review.name}</p>
                  <p className="text-xs text-slate-400">
                    {review.role}, <span className="font-medium text-brand-blue">{review.company}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
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
