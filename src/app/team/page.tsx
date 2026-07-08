import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";
import { team } from "@/data/team";

export const metadata = { title: "Our Team | IP Rani" };

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Our Team"
        subtitle="A team of IP & legal experts committed to protecting ideas and empowering businesses."
        crumbs={[{ label: "Team" }]}
      />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.slug} index={i}>
                <Link
                  href={`/team/${member.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-slate-200 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
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
