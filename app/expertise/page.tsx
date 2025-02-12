"use client";

import { motion } from "motion/react";

export default function Home() {
  return (
    <motion.div
      className="overflow-scroll w-full"
      initial={{ transition: { duration: 0.4, ease: "easeInOut" }, opacity: 0 }}
      animate={{ transition: { duration: 0.4, ease: "easeInOut" }, opacity: 1 }}
    >
      <div className="flex flex-col w-5/6 mt-20 mb-10 ml-auto">
        <p className="text-7xl  uppercase font-medium">Javascript</p>
      </div>
      <div className="flex flex-col w-5/6 mb-10 ml-auto">
        <p className="text-7xl  uppercase font-medium">Typescript</p>
      </div>
      <div className="flex flex-col w-5/6 mb-10 ml-auto">
        <p className="text-7xl  uppercase font-medium">Frameworks</p>
        <div className="uppercase self-start flex gap-3 text-2xl items-center">
          Next.js | React.js | Node.js
        </div>
      </div>
      <div className="flex flex-col w-5/6 mb-10 ml-auto">
        <p className="text-7xl  uppercase font-medium">CSS Tools</p>
        <div className="uppercase self-start flex gap-3 text-2xl items-center">
          Tailwind | shadcn/ui
        </div>
      </div>
      <div className="flex flex-col w-5/6 mb-10 ml-auto">
        <p className="text-7xl  uppercase font-medium">Frameworks</p>
        <div className="uppercase self-start flex gap-3 text-2xl items-center">
          Three.js | Framer Motion
        </div>
      </div>
      <div className="flex flex-col w-5/6 mb-10 ml-auto">
        <p className="text-7xl  uppercase font-medium">CI/CD & Deployment</p>
        <div className="uppercase self-start flex gap-3 text-2xl items-center">
          AWS | GitHub
        </div>
      </div>
      <div className="flex flex-col w-5/6 mb-10 ml-auto">
        <p className="text-7xl  uppercase font-medium">Versioning</p>
        <div className="uppercase self-start flex gap-3 text-2xl items-center">
          Git | Git Flow | Conventional Commits
        </div>
      </div>
    </motion.div>
  );
}
