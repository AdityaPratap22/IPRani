"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Legal Advisory",
    image: "/hero.webp",
    alt: "IP Rani legal team advising a client on corporate legal and IPR strategy",
  },
  {
    title: "Patent",
    image: "/law-books-gavel.jpg",
    alt: "Law books and judge gavel on lawyer mahogany desk for patent registration and prosecution",
  },
  {
    title: "Trademark",
    image: "/hero-trademark-law.jpg",
    alt: "Golden scales of justice, judge gavel, open law books, and trademark registration certificate on mahogany desk",
  },
  {
    title: "Copyright",
    image: "/law-library-lady.jpg",
    alt: "Lady Justice statue, scales of justice, and law volumes for copyright protection and ownership",
  },
  {
    title: "Design",
    image: "/hero-design-law.jpg",
    alt: "Brass justice scale, judge gavel, stacked legal case files, and formal sealed documents on courtroom table",
  },
  {
    title: "IP & Commercial Litigation",
    image: "/law-gavel-scales.jpg",
    alt: "Classical judge gavel and scales of justice in court setting for commercial litigation and dispute resolution",
  },
];

export default function HeroBanners() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-bg-light-2">
      {/* Background Slideshow — smooth crossfade */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={slides[current].image}
          alt={slides[current].alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </AnimatePresence>

      {/* Service name badge at bottom right */}
      <div className="absolute bottom-6 right-6 z-10">
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="inline-block rounded-full border border-white/60 bg-white/85 px-4 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-navy backdrop-blur-sm shadow-md"
          >
            {slides[current].title}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === current ? "w-5 bg-brand-blue" : "w-1.5 bg-white/70 hover:bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}: ${slides[idx].title}`}
          />
        ))}
      </div>
    </div>
  );
}
