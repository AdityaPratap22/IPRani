import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";
import { team } from "@/data/team";
import {
  ShieldIcon,
  StarIcon,
  HandshakeIcon,
  BulbSparkIcon,
} from "@/components/icons";

export const metadata = {
  title: "Our Team",
  description: "Meet the leadership and legal team at IP Rani. Our experienced attorneys and consultants provide expert guidance on intellectual property and corporate law in India.",
};

const strengths = [
  {
    icon: ShieldIcon,
    title: "20+ Years Combined Experience",
    description:
      "Our leadership team brings decades of hands-on IP prosecution, corporate advisory, and litigation experience across courts and tribunals in India.",
  },
  {
    icon: StarIcon,
    title: "1000+ Cases Handled",
    description:
      "From trademark filing to patent prosecution to complex IP enforcement — our team has successfully managed over a thousand matters for clients across industries.",
  },
  {
    icon: HandshakeIcon,
    title: "Client-First Approach",
    description:
      "We believe in transparent communication, fixed-fee pricing, and building long-term relationships. Every client gets direct access to senior counsel.",
  },
  {
    icon: BulbSparkIcon,
    title: "Full-Spectrum IP & Legal",
    description:
      "Unlike single-service firms, our team covers the entire spectrum — trademarks, patents, copyrights, contracts, startup legal, and litigation — under one roof.",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Our Team"
        subtitle="A team of IP & legal experts committed to protecting ideas and empowering businesses."
        crumbs={[{ label: "Team" }]}
      />

      {/* Intro Section */}
      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal inView={false}>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                Meet the People Behind IP Rani
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                At IP Rani, our strength lies in our people. Our leadership team
                combines deep legal expertise with real-world business
                understanding to deliver solutions that are practical,
                strategic, and results-driven. Whether you are a first-time
                founder protecting your brand or an enterprise managing a global
                IP portfolio, our team is equipped to guide you at every step.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Team Cards */}
      <section className="bg-bg-light-2 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal inView={false}>
            <h2 className="mb-10 text-center text-2xl font-bold text-navy sm:text-3xl">
              Our Leadership
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal inView={false} key={member.slug} index={i}>
                <Link
                  href={`/team/${member.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white text-center shadow-sm transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy group-hover:text-brand-blue">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-brand-blue">
                      {member.role}
                    </p>
                    <p className="mt-3 text-xs leading-5 text-slate-500">
                      {member.bio}
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                      {member.focus.map((f) => (
                        <span
                          key={f}
                          className="rounded-full bg-bg-light px-2.5 py-0.5 text-[11px] font-semibold text-navy"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Team */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal inView={false}>
            <h2 className="mb-4 text-center text-2xl font-bold text-navy sm:text-3xl">
              Why Choose Our Team
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-slate-500">
              We combine legal expertise with business acumen to deliver
              outcomes that matter. Here is what sets us apart.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item, i) => (
              <Reveal
                inView={false}
                key={item.title}
                index={i}
                className="group rounded-2xl border border-slate-200 p-6 text-center transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl cursor-default"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-bg-light text-brand-blue transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-sm font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want to work with our team?"
        buttonLabel="Get Free Consultation"
        buttonHref="/contact-us"
      />
    </>
  );
}
