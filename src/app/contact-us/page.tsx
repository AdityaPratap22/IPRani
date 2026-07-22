import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";
import ContactForm from "@/components/ContactForm";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from "@/components/icons";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with IP Rani for free consultations regarding your intellectual property, trademarks, patents, company formation, and commercial legal queries in India.",
};

type ContactItem = {
  text: string;
  note?: string;
  href?: string;
};

type ContactGroup = {
  icon: typeof PhoneIcon;
  label: string;
  items: ContactItem[];
};

const contactInfo: ContactGroup[] = [
  {
    icon: PhoneIcon,
    label: "Phone Support",
    items: [
      { text: "+91 99116 55010", note: "(General & IP)", href: "tel:+919911655010" },
      { text: "+91 97588 67451", note: "(Legal)", href: "tel:+919758867451" },
    ],
  },
  {
    icon: MailIcon,
    label: "Email Address",
    items: [
      { text: "ipr@iprani.com", note: "(IP Matters)", href: "mailto:ipr@iprani.com" },
      { text: "legal@iprani.com", note: "(Legal Matters)", href: "mailto:legal@iprani.com" },
    ],
  },
  {
    icon: PinIcon,
    label: "Corporate Office",
    items: [
      { text: "308/A15, Devika Chambers, RDC Rajnagar, Ghaziabad, U.P. – 201002, India" },
    ],
  },
  {
    icon: PinIcon,
    label: "Registered Office",
    items: [
      { text: "Chamber No. 88, District & Session Court, Street No. 4, Surajpur, Greater Noida, Uttar Pradesh – 201306, India" },
    ],
  },
  {
    icon: PinIcon,
    label: "Other Offices",
    items: [
      { text: "Bengaluru, India • Germany" },
    ],
  },
  {
    icon: ClockIcon,
    label: "Business Hours",
    items: [
      { text: "Mon-Fri 10AM to 6PM, Sat 10AM to 2PM" },
    ],
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
                    <div className="mt-0.5 space-y-0.5">
                      {item.items.map((sub, idx) => (
                        <p key={idx} className="text-sm text-slate-500">
                          {sub.href ? (
                            <a href={sub.href} className="hover:text-brand-blue transition-colors font-medium">
                              {sub.text}
                            </a>
                          ) : (
                            <span>{sub.text}</span>
                          )}
                          {sub.note && (
                            <span className="ml-1.5 text-slate-400 text-xs font-normal">
                              {sub.note}
                            </span>
                          )}
                        </p>
                      ))}
                    </div>
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
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Reveal inView={false}><h2 className="text-2xl font-bold text-navy">Find Us</h2></Reveal>
            <Reveal inView={false}>
              <a
                href="https://maps.app.goo.gl/TUgqv5PdQUQYZdvY6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors"
              >
                Open in Google Maps
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </Reveal>
          </div>
          <Reveal inView={false} className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <iframe
              title="IP Rani Registered Office location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.475%2C28.500%2C77.491%2C28.515&layer=mapnik&marker=28.5075949%2C77.4832064"
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
