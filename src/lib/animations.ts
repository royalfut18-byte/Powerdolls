import type { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const drift = {
  y: [-4, 6, -4],
  rotate: [-1.5, 1.5, -1.5],
  transition: {
    duration: 8,
    ease: [0.42, 0, 0.58, 1] as const,
    repeat: Number.POSITIVE_INFINITY,
  },
};

export const slowPulse = {
  scale: [1, 1.03, 1],
  transition: {
    duration: 5,
    ease: [0.42, 0, 0.58, 1] as const,
    repeat: Number.POSITIVE_INFINITY,
  },
};
