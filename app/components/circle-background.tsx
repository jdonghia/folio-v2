"use client";

import { motion } from "motion/react";

const CIRCLES = [
  {
    cx: "50",
    cy: "50",
    r: "49.5",
  },
  {
    cx: "100",
    cy: "100",
    r: "99.5",
  },
  {
    cx: "150",
    cy: "150",
    r: "149.5",
  },
  {
    cx: "200",
    cy: "200",
    r: "199.5",
  },
  {
    cx: "250",
    cy: "250",
    r: "249.5",
  },
];

export function CircleBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.2 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0 }}
      className="relative bottom-40 right-[10%] flex scale-150 items-center justify-center max-2xl:scale-100 max-sm:absolute max-sm:bottom-0 max-sm:translate-y-20 max-sm:left-0 max-sm:z-10 max-sm:size-full max-sm:overflow-hidden"
    >
      {CIRCLES.map(({ cx, cy, r }, index) => (
        <svg
          key={index}
          className="absolute"
          width={(index + 1) * 100}
          height={(index + 1) * 100}
          viewBox={`0 0 ${(index + 1) * 100} ${(index + 1) * 100}`}
          fill="none"
        >
          <motion.circle
            cx={cx}
            cy={cy}
            r={r}
            className="stroke-eerie transition-colors duration-500 dark:stroke-powder"
            animate={{
              strokeDashoffset: [0, 800],
            }}
            transition={{
              duration: 8,
              ease: "linear",
              repeat: Infinity,
            }}
            strokeWidth={1}
            strokeDashoffset="800"
            strokeDasharray="500"
          />
        </svg>
      ))}
    </motion.div>
  );
}
