"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const heroSlides = [
  {
    badge: "Legal Advisory",
    image: "/hero.webp",
    alt: "IP Rani legal team advising a client on corporate legal and IPR strategy",
    title: ["Protect Your", "Innovation.", "Build Your Business", "With Confidence."],
    subtitle: "End-to-end IP & Legal solutions for start-ups, enterprises and growing businesses.",
    primaryCta: { label: "Get Free Consultation", href: "/contact-us" },
    secondaryCta: { label: "Explore Services", href: "/services" },
  },
  {
    badge: "Patent",
    image: "/service-patent.jpg",
    alt: "Engineer reviewing patent drawings and R&D technology specifications",
    title: ["Secure Inventions.", "Master Patent Rights", "& Global Strategy."],
    subtitle: "Prior-art search, patent drafting, PCT international filings & office action responses.",
    primaryCta: { label: "Explore Patent Services", href: "/services/intellectual-property/patent" },
    secondaryCta: { label: "Get Free Consultation", href: "/contact-us" },
  },
  {
    badge: "Trademark",
    image: "/service-trademark.jpg",
    alt: "Corporate executive reviewing brand identity and trademark filing strategy",
    title: ["Protect Brand Identity.", "Secure Registered", "Trademarks & Logos."],
    subtitle: "Trademark clearance search, registry filings, objection replies & opposition defense.",
    primaryCta: { label: "Explore Trademarks", href: "/services/intellectual-property/trademark" },
    secondaryCta: { label: "Get Free Consultation", href: "/contact-us" },
  },
  {
    badge: "Copyright",
    image: "/service-copyright.jpg",
    alt: "Creative media production and digital copyright management workspace",
    title: ["Safeguard Creative", "Works & Code.", "Empower Content", "Ownership."],
    subtitle: "Copyright registrations, licensing deals, software code protection & anti-piracy.",
    primaryCta: { label: "Explore Copyright", href: "/services/intellectual-property/copyright" },
    secondaryCta: { label: "Get Free Consultation", href: "/contact-us" },
  },
  {
    badge: "Design",
    image: "/service-design.jpg",
    alt: "Industrial design sketching, CAD drawings, and product drafting workbench",
    title: ["Defend Product", "Aesthetics.", "Register Industrial", "Designs & Molds."],
    subtitle: "Aesthetic design clearance, CAD specification drafting & design infringement defense.",
    primaryCta: { label: "Explore Design", href: "/services/intellectual-property/design" },
    secondaryCta: { label: "Get Free Consultation", href: "/contact-us" },
  },
  {
    badge: "IP & Commercial Litigation",
    image: "/service-litigation.jpg",
    alt: "Advocate team and legal literature in a modern law library setting",
    title: ["Resolve Disputes.", "Relentless Legal", "Advocacy & Defense."],
    subtitle: "Commercial litigation, IP infringement suits, DRT/NCLT recovery & tribunal defense.",
    primaryCta: { label: "Explore Litigation", href: "/services/litigation" },
    secondaryCta: { label: "Get Free Consultation", href: "/contact-us" },
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-bg-light via-bg-light-2 to-white shadow-[0_20px_35px_-15px_rgba(13,43,82,0.35)]">
      {/* Desktop: photo background slideshow blended on the right side */}
      <Reveal inView={false} direction="right" className="absolute inset-y-0 right-0 hidden w-[64%] lg:block">
        <div className="relative h-full w-full overflow-hidden bg-bg-light-2">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={slide.image}
              alt={slide.alt}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </AnimatePresence>

          {/* Fade seam on left */}
          <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-bg-light-2 via-bg-light-2/70 to-transparent z-10" />

          {/* Badge at bottom right */}
          <div className="absolute bottom-6 right-6 z-20">
            <AnimatePresence mode="wait">
              <motion.span
                key={current}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="inline-block rounded-full border border-white/60 bg-white/85 px-4 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-navy backdrop-blur-sm shadow-md"
              >
                {slide.badge}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Indicator dots */}
          <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
            {heroSlides.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === current ? "w-5 bg-brand-blue" : "w-1.5 bg-white/70 hover:bg-white"
                }`}
                aria-label={`Go to slide ${idx + 1}: ${s.badge}`}
              />
            ))}
          </div>
        </div>
      </Reveal>

      {/* Hero Content Column */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-36">
        <div className="lg:max-w-lg min-h-[380px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {/* Service Pill Badge */}
              <span className="inline-block mb-3 rounded-full bg-blue-50 border border-brand-blue/30 px-3 py-1 text-xs font-bold text-brand-blue uppercase tracking-wider">
                {slide.badge}
              </span>

              <h1 className="text-3xl font-extrabold leading-[1.2] text-navy sm:text-4xl lg:text-5xl">
                {slide.title.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-slate-600">
                {slide.subtitle}
              </p>

              <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
                <Link
                  href={slide.primaryCta.href}
                  className="rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                >
                  {slide.primaryCta.label}
                </Link>
                <Link
                  href={slide.secondaryCta.href}
                  className="rounded-md border border-navy px-6 py-3 text-sm font-semibold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-bg-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                >
                  {slide.secondaryCta.label}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: photo stacked below the text with slideshow controls */}
        <div className="mt-8 lg:hidden">
          <div className="h-72 sm:h-80 w-full overflow-hidden rounded-2xl shadow-lg relative bg-bg-light-2">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={slide.image}
                alt={slide.alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </AnimatePresence>

            <div className="absolute bottom-4 right-4 z-10">
              <span className="inline-block rounded-full border border-white/60 bg-white/85 px-3 py-1 text-[10px] font-semibold tracking-wider uppercase text-navy shadow-md">
                {slide.badge}
              </span>
            </div>

            {/* Mobile Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
              {heroSlides.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === current ? "w-5 bg-brand-blue" : "w-1.5 bg-white/70 hover:bg-white"
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${s.badge}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
