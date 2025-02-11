"use client";

import { motion } from "motion/react";

export default function SVGPath() {
  const circles = [
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

  return (
    <>
      <div className="absolute bottom-80 right-[60%] flex justify-center scale-150 items-center">
        {circles.map(({ cx, cy, r }, index) => (
          <svg
            className="absolute"
            width={(index + 1) * 100}
            key={index}
            height={(index + 1) * 100}
            viewBox={`0 0 ${(index + 1) * 100} ${(index + 1) * 100}`}
            fill="none"
          >
            <motion.circle
              cx={cx}
              cy={cy}
              r={r}
              stroke="#555555"
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
      </div>
    </>
  );
}
// stroke-[#8CDAF9]
