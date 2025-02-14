"use client";

import { delay, motion } from "motion/react";

export function RouteContainer({ children }: React.PropsWithChildren) {
  return (
    <div className="relative w-full overflow-scroll bg-powder bg-texture text-kakhi transition-colors duration-[1500ms] dark:bg-eerie">
      <div id="routes">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            transition: { delay: 0.3, duration: 0.8, ease: "easeInOut" },
            opacity: 1,
          }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
