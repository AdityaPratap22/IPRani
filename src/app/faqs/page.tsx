import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";

export const metadata = { title: "FAQs | IP Rani" };

const faqs = [
  {
    q: "How do I know whether I need a trademark, patent, design or copyright?",
    a: "It depends on what you're protecting — a brand name or logo needs a trademark, an invention needs a patent, a product's visual appearance needs a design registration, and creative or literary work needs copyright. Our IP Advisory team can assess your situation and recommend the right mix.",
  },
  {
    q: "How long does trademark registration take in India?",
    a: "A straightforward application with no objections typically takes 12-18 months from filing to registration. Objections or oppositions can extend this timeline.",
  },
  {
    q: "Can IP Rani handle company registration and IP filing together?",
    a: "Yes — many of our startup clients incorporate their entity and file trademark or patent protection in parallel, which we coordinate through a single point of contact.",
  },
  {
    q: "Do you offer fixed-fee pricing?",
    a: "Most of our services are fixed-fee once we understand the scope of your requirement. See our Fee Calculator / Pricing page for indicative ranges, or get a free consultation for an exact quote.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes, we regularly file international trademark and patent applications (Madrid Protocol, PCT/WIPO) on behalf of clients based outside India.",
  },
];

export default function FaqsPage() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Common questions about our IP, corporate legal and litigation services."
        crumbs={[{ label: "FAQs" }]}
      />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-8">
          {faqs.map((faq, i) => (
            <Reveal
              key={faq.q}
              index={i}
              className="rounded-xl p-4 transition-colors duration-300 hover:bg-bg-light-2"
            >
              <h2 className="text-base font-semibold text-navy">{faq.q}</h2>
              <p className="mt-1 text-sm leading-7 text-slate-500">{faq.a}</p>
            </Reveal>
          ))}
          <p className="text-sm text-slate-500">
            Have a question that isn&apos;t answered here?{" "}
            <Link href="/contact-us" className="font-semibold text-brand-blue transition-colors hover:text-brand-blue-dark">
              Contact our team
            </Link>{" "}
            for a free consultation.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Have questions about your IP or legal needs?"
        buttonLabel="Get Free Consultation"
        buttonHref="/contact-us"
      />
    </>
  );
}
