import Link from "next/link";
import Image from "next/image";
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
          <Reveal inView={false} direction="left">
            <h2 className="text-3xl font-bold text-navy">
              We are a team of IP &amp; legal experts committed to protecting
              ideas and empowering businesses.
            </h2>
            <p className="mt-4 text-sm text-slate-500">
              IP Rani was founded with a simple mission — to protect and grow
              businesses. From startups to established enterprises, we partner
              with clients and offer end-to-end IP, corporate legal and
              litigation support they can rely on and which lets them focus on
              what matters most: growing their business.
            </p>
          </Reveal>
          <Reveal inView={false} direction="right">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
              alt="IP Rani office team working together"
              width={900}
              height={320}
              className="h-80 w-full rounded-2xl object-cover shadow-md transition-transform duration-500 hover:scale-[1.03]"
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
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={384}
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
