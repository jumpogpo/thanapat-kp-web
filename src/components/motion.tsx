"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
  type HTMLMotionProps,
} from "framer-motion";

// Shared easing — a soft "out-expo"-ish curve used across the whole site
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/** Fade + rise once the element scrolls into view. */
export function Reveal({ children, className, delay = 0, y = 18 }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Orchestrates staggered entrance for any number of <StaggerItem> children. */
export function Stagger({
  children,
  className,
  delay = 0,
  gap = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  gap?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** A single staggered child. Optional hover-lift for interactive cards. */
export function StaggerItem({
  children,
  className,
  hoverLift = false,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  hoverLift?: boolean;
} & HTMLMotionProps<"div">) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={fadeRise}
      whileHover={hoverLift ? { y: -4 } : undefined}
      whileTap={hoverLift ? { scale: 0.98 } : undefined}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
