"use client";

import { motion } from "motion/react";

export function RouteContainer({ children }: React.PropsWithChildren) {
  return (
    <motion.div
      className="relative w-full overflow-scroll"
      initial={{ transition: { duration: 0.8, ease: "easeInOut" }, opacity: 0 }}
      animate={{ transition: { duration: 0.8, ease: "easeInOut" }, opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}
