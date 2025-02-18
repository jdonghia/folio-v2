"use client";

import { RouteContainer } from "@/app/components/shared/route-container";

export default function Expertise() {
  const stacks = [
    { title: "Javascript" },
    { title: "Typescript" },
    { title: "Next.js", subtitle: "SSR | tRPC | Zod" },
    {
      title: "React.js",
      subtitle: "Redux | Zustand | React Query | React Router",
    },
    {
      title: "CSS",
      subtitle:
        "Tailwind | SASS | shadcn/ui | Radix | Bootstrap | ANT Design | Material",
    },
    { title: "Node.js", subtitle: "Prisma | Express | Sequelize" },
    { title: "Animation & Render", subtitle: "Three.js | Framer Motion" },
    { title: "Amazon Web Services", subtitle: "Amplify | Cognito | S3" },
    { title: "NoSQL Databases", subtitle: "Dynamo | Redis" },
    { title: "CI/CD & Deployment", subtitle: "GitHub | Vercel | Jenkins" },
    { title: "Compilers", subtitle: "Webpack | Babel" },
    {
      title: "Standardization",
      subtitle: "Eslint | Husky | Prettier | Git Flow | Conventional Commits",
    },
    { title: "Workflow", subtitle: "Figma | Jira" },
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
          <div className="flex items-center gap-3 self-end text-xl uppercase text-eerie transition-colors duration-500 dark:text-powder max-[1536px]:text-lg">
            {stack.subtitle}
          </div>
        </div>
      ))}
    </RouteContainer>
  );
}
