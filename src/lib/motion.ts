import { Variants } from "framer-motion";

// Standardized easing curve & duration for cohesive motion system
export const MOTION_TRANSITION = {
  duration: 0.35,
  ease: [0.25, 0.1, 0.25, 1.0], // Gentle ease-out curve
};

// Container variant with staggered children entry
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

// Individual card scroll reveal variant
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: MOTION_TRANSITION,
  },
};

// Page cross-fade & gentle slide transition variant
export const pageVariants: Variants = {
  initial: { opacity: 0, x: 12 },
  animate: {
    opacity: 1,
    x: 0,
    transition: MOTION_TRANSITION,
  },
  exit: {
    opacity: 0,
    x: -12,
    transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

// Accordion expansion animation variant (click-driven, smooth height & opacity)
export const accordionVariants: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    marginTop: 0,
    transition: {
      height: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] },
      opacity: { duration: 0.2, ease: "linear" },
    },
  },
  expanded: {
    height: "auto",
    opacity: 1,
    marginTop: 12,
    transition: {
      height: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] },
      opacity: { duration: 0.25, delay: 0.05, ease: "linear" },
    },
  },
};
