"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { serviceVerticals } from "@/data/services";
import { priorityIndustries } from "@/data/industries";
import { clusters } from "@/data/knowledgeCenter";
import { ChevronDownIcon, MenuIcon, CloseIcon } from "./icons";

const menuFade = {
  initial: { opacity: 0, y: 10, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 10, scale: 0.98 },
  transition: { duration: 0.18, ease: [0.21, 0.47, 0.32, 0.98] as const },
};

const accordionCollapse = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
  transition: { duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] as const },
};

const simpleLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
];

const endLinks = [
  { label: "Team", href: "/team" },
  { label: "Contact Us", href: "/contact-us" },
];

function ServicesMegaMenu() {
  return (
    <motion.div
      {...menuFade}
      className="absolute left-1/2 top-full w-[min(90vw,880px)] -translate-x-1/2 rounded-xl border border-slate-100 bg-white p-6 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-8">
        {serviceVerticals.map((vertical) => (
          <div key={vertical.slug}>
            <Link
              href={`/services/${vertical.slug}`}
              className="text-sm font-bold text-navy transition-colors hover:text-brand-blue"
            >
              {vertical.name}
            </Link>
            <ul className="mt-3 space-y-2">
              {vertical.hubs.map((hub) => (
                <li key={hub.slug}>
                  <Link
                    href={`/services/${vertical.slug}/${hub.slug}`}
                    className="inline-block text-sm text-slate-500 transition-all duration-200 hover:translate-x-1 hover:text-brand-blue"
                  >
                    {hub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6 border-t border-slate-100 pt-4">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-all duration-200 hover:gap-2.5 hover:text-brand-blue-dark"
        >
          View All Services →
        </Link>
      </div>
    </motion.div>
  );
}

function IndustriesMegaMenu() {
  return (
    <motion.div
      {...menuFade}
      className="absolute left-1/2 top-full w-[min(90vw,560px)] -translate-x-1/2 rounded-xl border border-slate-100 bg-white p-6 shadow-2xl"
    >
      <div className="grid grid-cols-2 gap-x-8 gap-y-2.5">
        {priorityIndustries.map((industry) => (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            className="inline-block text-sm text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-brand-blue"
          >
            {industry.name}
          </Link>
        ))}
      </div>
      <div className="mt-5 border-t border-slate-100 pt-4">
        <Link
          href="/industries"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-all duration-200 hover:gap-2.5 hover:text-brand-blue-dark"
        >
          View All Industries →
        </Link>
      </div>
    </motion.div>
  );
}

function KnowledgeCenterMegaMenu() {
  return (
    <motion.div
      {...menuFade}
      className="absolute left-1/2 top-full w-[min(90vw,680px)] -translate-x-1/2 rounded-xl border border-slate-100 bg-white p-6 shadow-2xl"
    >
      <div className="grid grid-cols-12 gap-8 text-left">
        {/* Column 1: Guides (Left, wider) */}
        <div className="col-span-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Guides &amp; Handbooks
          </h4>
          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
            {clusters.map((cluster) => (
              <Link
                key={cluster.slug}
                href={`/knowledge-center/${cluster.slug}`}
                className="inline-block text-sm text-slate-600 transition-all duration-200 hover:translate-x-1 hover:text-brand-blue"
              >
                {cluster.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 2: Additional Resources (Right, narrower) */}
        <div className="col-span-4 border-l border-slate-100 pl-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Insights &amp; Resources
          </h4>
          <ul className="mt-4 space-y-3.5">
            <li>
              <Link
                href="/blogs"
                className="group flex flex-col transition-all duration-200 hover:translate-x-1"
              >
                <span className="text-sm font-semibold text-navy group-hover:text-brand-blue">
                  Blogs &amp; Insights
                </span>
                <span className="text-[11px] text-slate-400">
                  3,300+ legal guides and articles
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/case-studies"
                className="group flex flex-col transition-all duration-200 hover:translate-x-1"
              >
                <span className="text-sm font-semibold text-navy group-hover:text-brand-blue">
                  Case Studies
                </span>
                <span className="text-[11px] text-slate-400">
                  Real client success stories
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/faqs"
                className="group flex flex-col transition-all duration-200 hover:translate-x-1"
              >
                <span className="text-sm font-semibold text-navy group-hover:text-brand-blue">
                  FAQs
                </span>
                <span className="text-[11px] text-slate-400">
                  Quick legal answers
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
        <Link
          href="/knowledge-center"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-all duration-200 hover:gap-2.5 hover:text-brand-blue-dark"
        >
          Explore Knowledge Center
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </motion.div>
  );
}

const megaMenus = [
  { label: "Services", href: "/services", Menu: ServicesMegaMenu },
  { label: "Industries", href: "/industries", Menu: IndustriesMegaMenu },
  { label: "Knowledge Center", href: "/knowledge-center", Menu: KnowledgeCenterMegaMenu },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<string | null>(null);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="sticky top-0 z-50 bg-navy"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center transition-transform duration-200 hover:scale-[1.03]">
          <img src="/logo.png" alt="IP Rani" className="h-11 w-auto sm:h-12" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {simpleLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`group relative inline-block text-sm font-medium transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full ${
                pathname === link.href ? "text-white after:w-full" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {megaMenus.map(({ label, href, Menu }) => (
            <div
              key={label}
              className="group relative"
              onMouseEnter={() => setActiveMenu(label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={href}
                className={`relative flex items-center gap-1 text-sm font-medium transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full ${
                  pathname.startsWith(href) ? "text-white after:w-full" : "text-white/80 hover:text-white"
                }`}
              >
                {label}
                <ChevronDownIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              <AnimatePresence>
                {activeMenu === label && <Menu />}
              </AnimatePresence>
            </div>
          ))}

          {endLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`group relative inline-block text-sm font-medium transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full ${
                pathname === link.href ? "text-white after:w-full" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact-us"
            className="inline-block rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-navy transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-lg active:scale-95"
          >
            Get Consultation
          </Link>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="text-white transition-transform duration-200 hover:scale-110 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden border-t border-white/10 bg-navy lg:hidden"
          >
            <nav className="flex max-h-[80vh] flex-col gap-1 overflow-y-auto px-4 py-4">
              {simpleLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:translate-x-1 hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}

              <div className="rounded-md px-3 py-2">
                <button
                  className="flex w-full items-center justify-between text-sm font-medium text-white/90"
                  onClick={() =>
                    setMobileMenuOpen((v) => (v === "Services" ? null : "Services"))
                  }
                >
                  Services
                  <ChevronDownIcon
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${
                      mobileMenuOpen === "Services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileMenuOpen === "Services" && (
                    <motion.div
                      {...accordionCollapse}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 space-y-4 border-l border-white/10 pl-4">
                        {serviceVerticals.map((vertical, index) => (
                          <div key={vertical.slug} className={`${index > 0 ? "border-t border-white/10 pt-4" : ""} space-y-2`}>
                            <Link
                              href={`/services/${vertical.slug}`}
                              onClick={() => setOpen(false)}
                              className="inline-block text-sm font-semibold text-white transition-transform duration-200 hover:translate-x-1"
                            >
                              {vertical.name}
                            </Link>
                            <div className="mt-1 flex flex-col pl-2 divide-y divide-white/5">
                              {vertical.hubs.map((hub) => (
                                <Link
                                  key={hub.slug}
                                  href={`/services/${vertical.slug}/${hub.slug}`}
                                  onClick={() => setOpen(false)}
                                  className="inline-block py-1.5 text-sm text-white/80 transition-transform duration-200 hover:translate-x-1 hover:text-white"
                                >
                                  {hub.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="rounded-md px-3 py-2">
                <button
                  className="flex w-full items-center justify-between text-sm font-medium text-white/90"
                  onClick={() =>
                    setMobileMenuOpen((v) => (v === "Industries" ? null : "Industries"))
                  }
                >
                  Industries
                  <ChevronDownIcon
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${
                      mobileMenuOpen === "Industries" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileMenuOpen === "Industries" && (
                    <motion.div
                      {...accordionCollapse}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 flex flex-col border-l border-white/10 pl-4 divide-y divide-white/5">
                        {priorityIndustries.map((industry) => (
                          <Link
                            key={industry.slug}
                            href={`/industries/${industry.slug}`}
                            onClick={() => setOpen(false)}
                            className="inline-block py-1.5 text-sm text-white/80 transition-transform duration-200 hover:translate-x-1 hover:text-white"
                          >
                            {industry.name}
                          </Link>
                        ))}
                        <Link
                          href="/industries"
                          onClick={() => setOpen(false)}
                          className="inline-block pt-2 py-1.5 text-sm font-semibold text-white transition-transform duration-200 hover:translate-x-1"
                        >
                          View All Industries
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="rounded-md px-3 py-2">
                <button
                  className="flex w-full items-center justify-between text-sm font-medium text-white/90"
                  onClick={() =>
                    setMobileMenuOpen((v) => (v === "Knowledge Center" ? null : "Knowledge Center"))
                  }
                >
                  Knowledge Center
                  <ChevronDownIcon
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${
                      mobileMenuOpen === "Knowledge Center" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileMenuOpen === "Knowledge Center" && (
                    <motion.div
                      {...accordionCollapse}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 flex flex-col border-l border-white/10 pl-4 text-left">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 mt-1 block">
                          Guides &amp; Handbooks
                        </span>
                        <div className="flex flex-col divide-y divide-white/5 mt-1">
                          {clusters.map((cluster) => (
                            <Link
                              key={cluster.slug}
                              href={`/knowledge-center/${cluster.slug}`}
                              onClick={() => setOpen(false)}
                              className="inline-block py-1.5 text-sm text-white/80 transition-transform duration-200 hover:translate-x-1 hover:text-white pl-1"
                            >
                              {cluster.name}
                            </Link>
                          ))}
                        </div>
                        <div className="border-t border-white/10 my-2 pt-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 block">
                            Insights &amp; Resources
                          </span>
                        </div>
                        <div className="flex flex-col divide-y divide-white/5">
                          <Link
                            href="/knowledge-center"
                            onClick={() => setOpen(false)}
                            className="inline-block py-1.5 text-sm text-white/80 transition-transform duration-200 hover:translate-x-1 hover:text-white pl-1"
                          >
                            Blogs &amp; Insights
                          </Link>
                          <Link
                            href="/case-studies"
                            onClick={() => setOpen(false)}
                            className="inline-block py-1.5 text-sm text-white/80 transition-transform duration-200 hover:translate-x-1 hover:text-white pl-1"
                          >
                            Case Studies
                          </Link>
                          <Link
                            href="/faqs"
                            onClick={() => setOpen(false)}
                            className="inline-block py-1.5 text-sm text-white/80 transition-transform duration-200 hover:translate-x-1 hover:text-white pl-1"
                          >
                            FAQs
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {endLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:translate-x-1 hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact-us"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-md bg-white px-5 py-2.5 text-center text-sm font-semibold text-navy transition-transform duration-200 hover:scale-[1.02]"
              >
                Get Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
