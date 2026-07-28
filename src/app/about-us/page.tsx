import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import Stats from "@/components/Stats";
import Reveal from "@/components/motion/Reveal";
import { team } from "@/data/team";
import { ShieldIcon, StarIcon, HandshakeIcon, BulbSparkIcon } from "@/components/icons";

export const metadata = {
  title: "About Us",
  description: "Learn about IP Rani, our core values of integrity, excellence, commitment, and innovation, and our team of legal and intellectual property experts.",
};

const values = [
  {
    icon: ShieldIcon,
    title: "Integrity",
    description: "We act with honesty and transparency in everything we do.",
  },
  {
    icon: StarIcon,
    title: "Excellence",
    description: "We deliver quality with expertise, always.",
  },
  {
    icon: HandshakeIcon,
    title: "Commitment",
    description: "We are committed to our clients' success.",
  },
  {
    icon: BulbSparkIcon,
    title: "Innovation",
    description: "We embrace new ideas and solutions.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" crumbs={[{ label: "About Us" }]} />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <Reveal inView={false} direction="left" className="space-y-3.5">
            <h2 className="text-3xl font-bold text-navy leading-tight sm:text-4xl">
              We are a team of IP &amp; legal experts committed to protecting
              ideas and empowering businesses.
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              IP Rani was established with a singular mission — to safeguard innovations, brands, and corporate assets across India and global jurisdictions. From ambitious startups and academic incubators to established corporate enterprises, we partner with clients as dedicated legal custodians so they can scale with complete peace of mind.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Led by veteran advocates, registered IP attorneys, and official SIPP facilitators, our practice delivers end-to-end support across trademark clearance and prosecution, patent drafting, industrial designs, commercial contract drafting, and litigation before courts and specialized tribunals.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Whether securing your first brand registration, filing complex patent claims, or defending business interests in court, we combine deep legal expertise with transparent, result-oriented guidance at every stage of your business journey.
            </p>
            <div className="pt-1.5 grid grid-cols-2 gap-3 text-xs font-semibold text-navy">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue font-bold text-[10px]">✓</span>
                Full Lifecycle IP Protection
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue font-bold text-[10px]">✓</span>
                High Court &amp; DRT Litigation
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue font-bold text-[10px]">✓</span>
                Official SIPP Facilitators
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue font-bold text-[10px]">✓</span>
                Global Madrid &amp; PCT Filings
              </div>
            </div>
          </Reveal>
          <Reveal inView={false} direction="right">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
              alt="IP Rani office team working together"
              className="h-[410px] w-full rounded-2xl object-cover shadow-md transition-transform duration-500 hover:scale-[1.02]"
            />
          </Reveal>
        </div>
      </section>

      <Stats />

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal inView={false}>
            <h2 className="text-center text-3xl font-bold text-navy">
              Our Values
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal
                inView={false}
                key={value.title}
                index={i}
                className="group rounded-2xl border border-slate-200 p-6 text-center transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl cursor-default"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-bg-light text-brand-blue transition-transform duration-300 group-hover:scale-110">
                  <value.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-bold text-navy">
                  {value.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-light-2 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal inView={false}>
            <h2 className="text-center text-3xl font-bold text-navy">
              Our Team
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {team.slice(0, 3).map((member, i) => (
              <Reveal inView={false} key={member.slug} index={i}>
                <Link
                  href={`/team/${member.slug}`}
                  className="group block overflow-hidden rounded-2xl bg-white text-center shadow-sm transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                >
                  <div className="overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-96 w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-navy group-hover:text-brand-blue">
                      {member.name}
                    </h3>
                    <p className="text-sm text-slate-500">{member.role}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/team"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-all duration-200 hover:gap-2.5 hover:text-brand-blue-dark focus-visible:outline-2 focus-visible:outline-brand-blue rounded px-1"
            >
              View All Team Members →
            </Link>
          </div>
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
