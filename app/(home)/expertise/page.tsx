"use client";

import { RouteContainer } from "@/app/components/shared/route-container";

export default function Expertise() {
  const stacks = [
    { title: "Javascript & Typescript", subtitle: "Eslint | Webpack | Babel" },
    { title: "Next.js", subtitle: "Fullstack | Zod | tRPC" },
    { title: "React.js", subtitle: "Redux | Zustand | React Query" },
    {
      title: "CSS Tools",
      subtitle:
        "Tailwind | SASS | shadcn/ui | Radix | Bootstrap | ANT Design | Material",
    },
    { title: "Animation & Rendering", subtitle: "Three.js | Framer Motion" },
    { title: "Node.js", subtitle: "Prisma | Express | Sequelize" },
    { title: "Amazon Web Services", subtitle: "Amplify | Cognito | S3" },
    { title: "NoSQL Databases", subtitle: "Dynamo | Redis" },
    { title: "CI/CD & Deployment", subtitle: "GitHub | Vercel | Jenkins" },
    { title: "Workflow", subtitle: "Azure | Jira" },
  ];

  return (
    <RouteContainer>
      {stacks.map((stack, index) => (
        <div key={index} className="mb-20 mt-10 flex w-11/12 flex-col text-end">
          <div className="flex items-center">
            <span className="me-10 block h-px w-full bg-kakhi transition-colors duration-1000"></span>
            <p className="whitespace-nowrap text-6xl font-bold uppercase">
              {stack.title}
            </p>
          </div>
          <div className="flex items-center gap-3 self-end text-xl uppercase text-eerie transition-colors duration-1000 dark:text-powder">
            {stack.subtitle}
          </div>
        </div>
      ))}
    </RouteContainer>
  );
}
