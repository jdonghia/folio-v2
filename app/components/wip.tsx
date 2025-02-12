"use client";

import { motion } from "motion/react";

export function Circle() {
  const circleSizes = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

  return (
    <motion.div
      animate={{ rotateZ: 360 }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      className="relative grid size-[100rem] place-items-center rounded-full bg-black"
    >
      {circleSizes.map((size, index) => {
        const nextSize = size - 0.5; // to get the next smaller circle (like w-[99.5rem] when size is 100)
        const isEven = index % 2 === 0; // for alternating between black and white circles

        return (
          <div
            key={size}
            className={`bg-${isEven ? "white" : "black"} w-[ absolute grid place-items-center rounded-full${size}rem] h-[${size}rem]`}
          >
            <div
              className={`bg-${isEven ? "white" : "white"} w-[ absolute grid place-items-center rounded-full${nextSize}rem] h-[${nextSize}rem]`}
            ></div>
            {[
              "bottom-0 translate-y-2",
              "left-0 -translate-x-2",
              "right-0 translate-x-2",
              "top-0 -translate-y-2",
            ].map((positionClass, posIndex) => (
              <div
                key={posIndex}
                className={`absolute grid size-6 place-items-center rounded-full bg-blue-500 ${positionClass}`}
              >
                <div className="size-5 rounded-full bg-white"></div>
              </div>
            ))}
          </div>
        );
      })}
    </motion.div>
  );
}
