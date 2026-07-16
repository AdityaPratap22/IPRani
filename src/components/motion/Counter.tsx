"use client";

import { useEffect, useState, useRef } from "react";

export default function Counter({ value, duration = 1.5 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Check if we should animate (e.g., skip if it contains a slash like "24/7")
  const shouldAnimate = !value.includes("/") && /[0-9]/.test(value);

  // Extract the numeric part and suffix
  const numericString = value.replace(/[^0-9]/g, "");
  const suffix = value.replace(/[0-9]/g, "");
  const target = parseInt(numericString, 10) || 0;

  useEffect(() => {
    if (!shouldAnimate) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [shouldAnimate]);

  useEffect(() => {
    if (!shouldAnimate || !isVisible) return;

    const start = 0;
    const end = target;
    if (end === start) {
      return;
    }

    const totalFrames = Math.min(Math.max(Math.floor(duration * 60), 10), 120);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad
      const current = Math.floor(end * (1 - (1 - progress) * (1 - progress)));
      
      setCount(current);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [shouldAnimate, isVisible, target, duration]);

  if (!shouldAnimate) {
    return <span>{value}</span>;
  }

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}
