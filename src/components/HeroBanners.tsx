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
    image: "/service-patent.jpg",
    alt: "Engineer reviewing patent drawings and R&D technology specifications",
  },
  {
    title: "Trademark",
    image: "/service-trademark.jpg",
    alt: "Corporate executive reviewing brand identity and trademark filing strategy",
  },
  {
    title: "Copyright",
    image: "/service-copyright.jpg",
    alt: "Creative media production and digital copyright management workspace",
  },
  {
    title: "Design",
    image: "/service-design.jpg",
    alt: "Industrial design sketching, CAD drawings, and product drafting workbench",
  },
  {
    title: "IP & Commercial Litigation",
    image: "/service-litigation.jpg",
    alt: "Advocate team and legal literature in a modern law library setting",
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
