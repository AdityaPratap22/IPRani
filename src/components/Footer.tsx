import Link from "next/link";
import { topServiceLinks } from "@/data/services";
import { priorityIndustries } from "@/data/industries";
import Reveal from "./motion/Reveal";
import {
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
} from "./icons";

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact Us", href: "/contact-us" },
];

const resourceLinks = [
  { label: "Knowledge Center", href: "/knowledge-center" },
  { label: "FAQs", href: "/faqs" },
  { label: "Fee Calculator / Pricing", href: "/pricing" },
  { label: "Downloadable Checklists", href: "/knowledge-center" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-500 shadow-[0_-15px_25px_-20px_rgba(15,23,42,0.15)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-12">
          <Reveal direction="up" className="col-span-2 md:col-span-6 lg:col-span-4">
            <Link href="/" className="inline-flex items-center transition-transform duration-200 hover:scale-[1.03]">
              <img src="/logo-dark.png" alt="IP Rani" className="h-12 w-auto sm:h-14" />
            </Link>
            <p className="mt-3 text-sm text-slate-500">
              Protecting ideas.
              <br />
              Powering businesses.
            </p>
            <div className="mt-5 flex gap-3">
              {[LinkedinIcon, TwitterIcon, FacebookIcon, InstagramIcon].map(
                (Icon, i) => (
                  <span
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-bg-light text-navy transition-all duration-200 hover:-translate-y-1 hover:scale-110 hover:bg-brand-blue hover:text-white"
                  >
                    <Icon />
                  </span>
                )
              )}
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.05} className="lg:col-span-2 lg:border-l lg:border-slate-200 lg:pl-8">
            <h4 className="text-sm font-semibold text-navy">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {topServiceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm text-slate-500 transition-all duration-200 hover:translate-x-1 hover:text-brand-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="up" delay={0.1} className="lg:col-span-2 lg:border-l lg:border-slate-200 lg:pl-8">
            <h4 className="text-sm font-semibold text-navy">Industries</h4>
            <ul className="mt-4 space-y-2.5">
              {priorityIndustries.slice(0, 6).map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="inline-block text-sm text-slate-500 transition-all duration-200 hover:translate-x-1 hover:text-brand-blue"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/industries"
                  className="inline-block text-sm text-slate-500 transition-all duration-200 hover:translate-x-1 hover:text-brand-blue"
                >
                  View All
                </Link>
              </li>
            </ul>
          </Reveal>

          <Reveal direction="up" delay={0.15} className="lg:col-span-2 lg:border-l lg:border-slate-200 lg:pl-8">
            <h4 className="text-sm font-semibold text-navy">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm text-slate-500 transition-all duration-200 hover:translate-x-1 hover:text-brand-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="up" delay={0.2} className="lg:col-span-2 lg:border-l lg:border-slate-200 lg:pl-8">
            <h4 className="text-sm font-semibold text-navy">Resources</h4>
            <ul className="mt-4 space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm text-slate-500 transition-all duration-200 hover:translate-x-1 hover:text-brand-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© 2024 IP Rani. All Rights Reserved. Regd. Office: 123, Legal Avenue, Sector 45, Noida, Uttar Pradesh 201301, India.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="transition-colors hover:text-brand-blue">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy-policy" className="transition-colors hover:text-brand-blue">
              Privacy Policy
            </Link>
            <a href="https://wa.me/919876543210" className="transition-colors hover:text-brand-blue">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="bg-navy px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1 text-center text-xs text-slate-300 sm:flex-row sm:gap-2">
          <span>
            <a
              href="https://businessvolunteers.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-400 transition-colors hover:text-amber-300"
            >
              Business Volunteer
            </a>{" "}
            | All Rights Reserved 2025
          </span>
          <span className="hidden sm:inline">&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span>Digital Marketing Agency / Company in Noida, Delhi NCR, India</span>
        </div>
      </div>
    </footer>
  );
}
