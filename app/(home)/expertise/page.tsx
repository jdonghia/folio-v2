"use client";

import { RouteContainer } from "@/app/components/shared/route-container";

export default function Expertise() {
  return (
    <RouteContainer>
      <div className="w-6/6 mb-10 me-20 mt-20 flex flex-col text-end">
        <p className="text-6xl  font-bold uppercase">Javascript & Typescript</p>
        <div className="flex items-center gap-3 self-end text-xl uppercase text-eerie transition-colors duration-1000 dark:text-powder">
          Eslint | Webpack | Babel
        </div>
      </div>
      <div className="w-6/6 mb-10 me-20 mt-20 flex flex-col text-end">
        <p className="text-6xl  font-bold uppercase">Next.js</p>
        <div className="flex items-center gap-3 self-end text-xl uppercase text-eerie transition-colors duration-1000 dark:text-powder">
          Fullstack | Zod | tRPC
        </div>
      </div>
      <div className="w-6/6 mb-10 me-20 mt-20 flex flex-col text-end">
        <p className="text-6xl  font-bold uppercase">React.js</p>
        <div className="flex items-center gap-3 self-end text-xl uppercase text-eerie transition-colors duration-1000 dark:text-powder">
          Redux | Zustand | React Query
        </div>
      </div>
      <div className="w-6/6 mb-10 me-20 mt-20 flex flex-col text-end">
        <p className="text-6xl  font-bold uppercase">CSS Tools</p>
        <div className="flex items-center gap-3 self-end text-xl uppercase text-eerie transition-colors duration-1000 dark:text-powder">
          Tailwind | SASS | shadcn/ui | Radix | Bootstrap | ANT Design |
          Material
        </div>
      </div>
      <div className="w-6/6 mb-10 me-20 mt-20 flex flex-col text-end">
        <p className="text-6xl  font-bold uppercase">Animation & Rendering</p>
        <div className="flex items-center gap-3 self-end text-xl uppercase text-eerie transition-colors duration-1000 dark:text-powder">
          Three.js | Framer Motion
        </div>
      </div>
      <div className="w-6/6 mb-10 me-20 mt-20 flex flex-col text-end">
        <p className="text-6xl  font-bold uppercase">Node.js</p>
        <div className="flex items-center gap-3 self-end text-xl uppercase text-eerie transition-colors duration-1000 dark:text-powder">
          Prisma | Express | Sequelize
        </div>
      </div>
      <div className="w-6/6 mb-10 me-20 mt-20 flex flex-col text-end">
        <p className="text-6xl  font-bold uppercase">Amazon Web Services</p>
        <div className="flex items-center gap-3 self-end text-xl uppercase text-eerie transition-colors duration-1000 dark:text-powder">
          Amplify | Cognito | S3
        </div>
      </div>
      <div className="w-6/6 mb-10 me-20 mt-20 flex flex-col text-end">
        <p className="text-6xl  font-bold uppercase">NoSQL Databases</p>
        <div className="flex items-center gap-3 self-end text-xl uppercase text-eerie transition-colors duration-1000 dark:text-powder">
          Dynamo | Redis
        </div>
      </div>
      <div className="w-6/6 mb-10 me-20 mt-20 flex flex-col text-end">
        <p className="text-6xl  font-bold uppercase">CI/CD & Deployment</p>
        <div className="flex items-center gap-3 self-end text-xl uppercase text-eerie transition-colors duration-1000 dark:text-powder">
          GitHub | Vercel | Jenkins
        </div>
      </div>
      <div className="w-6/6 mb-10 me-20 mt-20 flex flex-col text-end">
        <p className="text-6xl  font-bold uppercase">Workflow</p>
        <div className="flex items-center gap-3 self-end text-xl uppercase text-eerie transition-colors duration-1000 dark:text-powder">
          Azure | Jira
        </div>
      </div>
    </RouteContainer>
  );
}
