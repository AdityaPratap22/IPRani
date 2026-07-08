import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/motion/Reveal";

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms & Conditions" crumbs={[{ label: "Terms & Conditions" }]} />
      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl space-y-4 text-sm text-slate-500">
          <p>
            By using this website, you agree that the content is provided for
            general informational purposes only and does not constitute legal
            advice.
          </p>
          <p>
            For advice specific to your situation, please contact IP Rani
            directly through our contact page.
          </p>
        </Reveal>
      </section>
    </>
  );
}
