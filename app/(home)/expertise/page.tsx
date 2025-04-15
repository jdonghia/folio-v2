"use client";

import { RouteContainer } from "@/app/components/shared/route-container";

export default function Expertise() {
  const stacks = [
    { title: "Javascript" },
    { title: "Typescript" },
    { title: "Fullstack", subtitle: "Next.js" },
    {
      title: "Frontend",
      subtitle: "React.js",
    },
    {
      title: "Styling",
      subtitle: "Tailwind | Radix Primitives",
    },
    { title: "Motions", subtitle: "Three.js | Framer Motion" },
    { title: "CI/CD", subtitle: "AWS | Vercel" },
    { title: "Workflow", subtitle: "Linux | Neovim | Tmux" },
  ];

  return (
    <RouteContainer>
      {stacks.map((stack, index) => (
        <div key={index} className="max-sm:mb-10 max-sm:mt-5 mb-20 mt-10 flex w-11/12 flex-col text-end">
          <div className="flex items-center">
            <span className="me-10 block h-px w-full bg-kakhi transition-colors duration-500"></span>
            <p className="whitespace-nowrap max-sm:text-3xl text-6xl font-bold uppercase max-xl:text-[2.5rem] max-2xl:text-5xl max-lg:text-4xl max-lg:text-4xl">
              {stack.title}
            </p>
          </div>
          <div
            style={{ transition: "color 150ms" }}
            className="flex items-center gap-3 self-end text-xl uppercase text-eerie  dark:text-powder max-xl:text-[1rem] max-2xl:text-lg"
          >
            {stack.subtitle}
          </div>
        </div>
      ))}
    </RouteContainer>
  );
}
