import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";

export const metadata = {
  title: "Careers",
  description: "Join the team at IP Rani. We are always looking for passionate legal professionals, attorneys, and intellectual property experts. Apply today.",
};

export default function CareersPage() {
  return (
    <>
      <PageHeader title="Careers" crumbs={[{ label: "Careers" }]} />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-navy">Join IP Rani</h2>
          <p className="mt-3 text-sm text-slate-500">
            We&apos;re always looking for talented lawyers and IP
            professionals who share our commitment to protecting ideas and
            empowering businesses. Send us your resume and tell us why
            you&apos;d be a great fit.
          </p>
          <a
            href="mailto:ipr@iprani.com"
            className="mt-6 inline-flex rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-lg"
          >
            Email Your Resume
          </a>
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
