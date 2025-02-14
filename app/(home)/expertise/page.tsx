"use client";

import { RouteContainer } from "@/app/components/shared/route-container";

export default function Expertise() {
  return (
    <RouteContainer>
      <div className="w-6/6 mb-10 me-20 mt-20 flex flex-col text-end">
        <p className="text-7xl  font-medium uppercase">
          Javascript & Typescript
        </p>
        <div className="flex items-center gap-3 self-end text-2xl uppercase">
          Eslint | Webpack | Babel
        </div>
      </div>
      <div className="w-6/6 mb-10 me-20 mt-20 flex flex-col text-end">
        <p className="text-7xl  font-medium uppercase">Next.js</p>
        <div className="flex items-center gap-3 self-end text-2xl uppercase">
          Fullstack | Zod | tRPC
        </div>
      </div>
      <div className="w-6/6 mb-10 me-20 mt-20 flex flex-col text-end">
        <p className="text-7xl  font-medium uppercase">React.js</p>
        <div className="flex items-center gap-3 self-end text-2xl uppercase">
          Redux | Zustand | React Query
        </div>
      </div>
      <div className="w-6/6 mb-10 me-20 mt-20 flex flex-col text-end">
        <p className="text-7xl  font-medium uppercase">CSS Tools</p>
        <div className="flex items-center gap-3 self-end text-2xl uppercase">
          Tailwind | SASS | shadcn/ui | Radix | Bootstrap | ANT Design |
          Material
        </div>
      </div>
      <div className="w-6/6 mb-10 me-20 mt-20 flex flex-col text-end">
        <p className="text-7xl  font-medium uppercase">Animation & Rendering</p>
        <div className="flex items-center gap-3 self-end text-2xl uppercase">
          Three.js | Framer Motion
        </div>
      </div>
      <div className="w-6/6 mb-10 me-20 mt-20 flex flex-col text-end">
        <p className="text-7xl  font-medium uppercase">Node.js</p>
        <div className="flex items-center gap-3 self-end text-2xl uppercase">
          Prisma | Express | Sequelize
        </div>
      </div>
      <div className="w-6/6 mb-10 me-20 mt-20 flex flex-col text-end">
        <p className="text-7xl  font-medium uppercase">Amazon Web Services</p>
        <div className="flex items-center gap-3 self-end text-2xl uppercase">
          Amplify | Cognito | S3
        </div>
      </div>
      <div className="w-6/6 mb-10 me-20 mt-20 flex flex-col text-end">
        <p className="text-7xl  font-medium uppercase">NoSQL Databases</p>
        <div className="flex items-center gap-3 self-end text-2xl uppercase">
          Dynamo | Redis
        </div>
      </div>
      <div className="w-6/6 mb-10 me-20 mt-20 flex flex-col text-end">
        <p className="text-7xl  font-medium uppercase">CI/CD & Deployment</p>
        <div className="flex items-center gap-3 self-end text-2xl uppercase">
          GitHub | Vercel | Jenkins
        </div>
      </div>
      <div className="w-6/6 mb-10 me-20 mt-20 flex flex-col text-end">
        <p className="text-7xl  font-medium uppercase">Workflow</p>
        <div className="flex items-center gap-3 self-end text-2xl uppercase">
          Azure | Jira
        </div>
      </div>
    </RouteContainer>
  );
}
