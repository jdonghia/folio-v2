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
    { title: "Animation & Render", subtitle: "Three.js | Framer Motion" },
    { title: "CI/CD & Deployment", subtitle: "AWS | Vercel" },
    { title: "Workflow", subtitle: "Linux | Neovim | Tmux" },
  ];

  return (
    <RouteContainer>
      {stacks.map((stack, index) => (
        <div key={index} className="mb-20 mt-10 flex w-11/12 flex-col text-end">
          <div className="flex items-center">
            <span className="me-10 block h-px w-full bg-kakhi transition-colors duration-500"></span>
            <p className="whitespace-nowrap text-6xl font-bold uppercase max-[1536px]:text-5xl">
              {stack.title}
            </p>
          </div>
          <div
            style={{ transition: "color 150ms" }}
            className="flex items-center gap-3 self-end text-xl uppercase text-eerie  dark:text-powder max-[1536px]:text-lg"
          >
            {stack.subtitle}
          </div>
        </div>
      ))}
    </RouteContainer>
  );
}
