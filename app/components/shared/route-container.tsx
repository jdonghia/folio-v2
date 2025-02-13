"use client";

import { motion } from "motion/react";

export function RouteContainer({ children }: React.PropsWithChildren) {
  return (
    <motion.div
      // id="routes"
      className="relative w-full overflow-scroll transition-colors duration-[2000ms] dark:bg-black"
      initial={{ transition: { duration: 0.8, ease: "easeInOut" }, opacity: 0 }}
      animate={{ transition: { duration: 0.8, ease: "easeInOut" }, opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}
