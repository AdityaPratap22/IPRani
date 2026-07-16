"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";

const directionOffset: Record<"up" | "down" | "left" | "right" | "none", { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
};

const tagMap = {
  div: motion.div,
  article: motion.article,
  section: motion.section,
  li: motion.li,
  aside: motion.aside,
  ul: motion.ul,
} as const;

export function makeRevealVariants(
  direction: keyof typeof directionOffset = "up"
): Variants {
  const { x, y } = directionOffset[direction];
  return {
    hidden: { opacity: 0, x, y, scale: direction === "none" ? 0.96 : 1 },
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  };
}

type RevealProps = HTMLMotionProps<"div"> & {
  direction?: keyof typeof directionOffset;
  delay?: number;
  index?: number;
  amount?: number;
  as?: keyof typeof tagMap;
  inView?: boolean;
};

export default function Reveal({
  direction = "up",
  delay,
  index,
  amount = 0.2,
  as = "div",
  inView = true,
  children,
  ...props
}: RevealProps) {
  const computedDelay = delay ?? (index ? Math.min(index * 0.08, 0.48) : 0);
  const Component = tagMap[as] as typeof motion.div;

  return (
    <Component
      initial="hidden"
      {...(inView 
        ? { whileInView: "visible", viewport: { once: true, amount } } 
        : { animate: "visible" }
      )}
      variants={makeRevealVariants(direction)}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98], delay: computedDelay }}
      {...props}
    >
      {children}
    </Component>
  );
}
