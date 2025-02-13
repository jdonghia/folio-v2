"use client";

import { RouteContainer } from "@/app/components/shared/route-container";

export default function Expertise() {
  return (
    <RouteContainer>
      <div className="mb-10 ml-auto mt-20 flex w-5/6 flex-col">
        <p className="text-7xl  font-medium uppercase">Javascript</p>
      </div>
      <div className="mb-10 ml-auto flex w-5/6 flex-col">
        <p className="text-7xl  font-medium uppercase">Typescript</p>
      </div>
      <div className="mb-10 ml-auto flex w-5/6 flex-col">
        <p className="text-7xl  font-medium uppercase">Frameworks</p>
        <div className="flex items-center gap-3 self-start text-2xl uppercase">
          Next.js | React.js | Node.js
        </div>
      </div>
      <div className="mb-10 ml-auto flex w-5/6 flex-col">
        <p className="text-7xl  font-medium uppercase">CSS Tools</p>
        <div className="flex items-center gap-3 self-start text-2xl uppercase">
          Tailwind | shadcn/ui
        </div>
      </div>
      <div className="mb-10 ml-auto flex w-5/6 flex-col">
        <p className="text-7xl  font-medium uppercase">Frameworks</p>
        <div className="flex items-center gap-3 self-start text-2xl uppercase">
          Three.js | Framer Motion
        </div>
      </div>
      <div className="mb-10 ml-auto flex w-5/6 flex-col">
        <p className="text-7xl  font-medium uppercase">CI/CD & Deployment</p>
        <div className="flex items-center gap-3 self-start text-2xl uppercase">
          AWS | GitHub
        </div>
      </div>
      <div className="mb-10 ml-auto flex w-5/6 flex-col">
        <p className="text-7xl  font-medium uppercase">Versioning</p>
        <div className="flex items-center gap-3 self-start text-2xl uppercase">
          Git | Git Flow | Conventional Commits
        </div>
      </div>
    </RouteContainer>
  );
}
