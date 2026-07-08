import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import Reveal from "@/components/motion/Reveal";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from "@/components/icons";

export const metadata = { title: "Contact Us | IP Rani" };

const contactInfo = [
  { icon: PhoneIcon, label: "Phone", value: "+91 98765 43210" },
  { icon: MailIcon, label: "Email", value: "hello@iprani.com" },
  {
    icon: PinIcon,
    label: "Office",
    value: "123, Legal Avenue, Sector 45, Noida, Uttar Pradesh 201301, India",
  },
  { icon: ClockIcon, label: "Business Hours", value: "Mon - Sat: 9:00 AM - 7:00 PM" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" crumbs={[{ label: "Contact Us" }]} />

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
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
                  key={item.label}
                  index={i}
                  direction="left"
                  className="group flex items-start gap-4 rounded-xl p-2 transition-colors duration-300 hover:bg-bg-light-2"
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

            <Reveal direction="right">
              <form className="space-y-4 rounded-2xl border border-slate-200 p-6 transition-shadow duration-300 hover:shadow-lg sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:shadow-[0_0_0_3px_rgba(53,87,232,0.15)]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:shadow-[0_0_0_3px_rgba(53,87,232,0.15)]"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:shadow-[0_0_0_3px_rgba(53,87,232,0.15)]"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-navy">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:shadow-[0_0_0_3px_rgba(53,87,232,0.15)]"
                      placeholder="Your subject"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy">
                    Your Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition-all duration-200 focus:border-brand-blue focus:shadow-[0_0_0_3px_rgba(53,87,232,0.15)]"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-bg-light-2 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal><h2 className="text-2xl font-bold text-navy">Find Us</h2></Reveal>
          <Reveal className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <iframe
              title="IP Rani office location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.30%2C28.55%2C77.42%2C28.63&layer=mapnik&marker=28.5906%2C77.36"
              className="h-80 w-full"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Need immediate assistance? Call Now"
        buttonLabel="+91 98765 43210"
        buttonHref="tel:+919876543210"
      />
    </>
  );
}
