import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/motion/Reveal";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" crumbs={[{ label: "Privacy Policy" }]} />
      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl space-y-4 text-sm text-slate-500">
          <p>
            IP Rani respects your privacy. Any information you share with us
            through this website is used solely to respond to your enquiry
            and provide our legal and IP services.
          </p>
          <p>
            We do not sell or share your personal information with third
            parties, except where required to deliver the services you have
            requested or as required by law.
          </p>
        </Reveal>
      </section>
    </>
  );
}
