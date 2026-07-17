import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";
import ContactForm from "@/components/ContactForm";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from "@/components/icons";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with IP Rani for free consultations regarding your intellectual property, trademarks, patents, company formation, and commercial legal queries in India.",
};

const contactInfo = [
  {
    icon: PhoneIcon,
    label: "Phone Support",
    value: "+91 99116 55010 (General & IP) / +91 97588 67451 (Legal)",
  },
  {
    icon: MailIcon,
    label: "Email Address",
    value: "ipr@iprani.com (IP Matters) / legal@iprani.com (Legal Matters)",
  },
  {
    icon: PinIcon,
    label: "Corporate Office",
    value: "308/A15, Devika Chambers, RDC Rajnagar, Ghaziabad, U.P. – 201002, India",
  },
  {
    icon: PinIcon,
    label: "Registered Office",
    value: "Chamber No. 88, Street No. 4, District & Session Court, Surajpur, Greater Noida, Uttar Pradesh – 201306, India",
  },
  {
    icon: PinIcon,
    label: "Other Offices",
    value: "Bengaluru, India • Germany",
  },
  {
    icon: ClockIcon,
    label: "Business Hours",
    value: "Monday to Friday: 10:00 AM – 5:00 PM",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" crumbs={[{ label: "Contact Us" }]} />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal inView={false} className="max-w-2xl">
            <h2 className="text-2xl font-bold text-navy">
              We&apos;d love to hear from you.
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Let&apos;s discuss how we can help protect and grow your
              business.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <Reveal
                  inView={false}
                  key={item.label}
                  index={i}
                  direction="left"
                  className="group flex items-start gap-4 rounded-xl p-2 transition-colors duration-300 hover:bg-bg-light-2 cursor-default"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-bg-light text-brand-blue transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm text-slate-500">
                      {item.value}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal inView={false} direction="right">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-bg-light-2 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal inView={false}><h2 className="text-2xl font-bold text-navy">Find Us</h2></Reveal>
          <Reveal inView={false} className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <iframe
              title="IP Rani office location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.45%2C28.49%2C77.53%2C28.55&layer=mapnik&marker=28.5204%2C77.4912"
              className="h-80 w-full"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Need immediate assistance? Call Now"
        buttonLabel="+91 99116 55010"
        buttonHref="tel:+919911655010"
      />
    </>
  );
}
