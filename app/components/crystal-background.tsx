"use client";

import { motion } from "motion/react";

export function CrystalBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute left-10 top-40 flex scale-90 items-center justify-center"
    >
      <svg
        width="487"
        height="739"
        viewBox="0 0 487 739"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M128.5 738L33.9383 329.5L309.5 99L414.5 322M128.5 738L414.5 322M128.5 738L467.5 432.5M128.5 738L1 365.5L334.5 1M414.5 322L334.5 1M414.5 322L486 177.5M414.5 322L467.5 432.5M467.5 432.5L486 177.5M486 177.5L334.5 1"
          animate={{
            strokeDashoffset: [0, 800],
          }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: Infinity,
          }}
          className="stroke-kakhi"
          strokeWidth={1}
          strokeDashoffset="800"
          strokeDasharray="500"
        />
      </svg>
    </motion.div>
  );
}
