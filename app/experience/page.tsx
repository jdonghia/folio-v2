"use client";

import { RouteContainer } from "@/app/components/shared/route-container";

export default function Experience() {
  return (
    <RouteContainer>
      <div className="ml-auto mt-20 flex w-5/6 flex-col items-end">
        <div className="flex items-center">
          <p className="text-7xl font-medium uppercase">Claro S.A</p>
          <span className="block h-px w-[35.5rem] bg-black"></span>
        </div>
        <div className="flex items-center gap-3 self-start">
          <p>11/2024 - current</p>
          <p className="text-2xl">Rio de Janeiro, Brazil</p>
        </div>
        <div className="mt-5 w-11/12 self-start text-xl">
          &nbsp;&nbsp;&nbsp;&nbsp;• Member of iMusica, part of the América Móvil
          group, working on the development of Claro Música.
          <br className="my-1" /> &nbsp;&nbsp;&nbsp;&nbsp;• Working on the
          development team for Claro • Música TV and Claro Música WEB in
          collaboration with the team from Mexico.
        </div>
      </div>
      <div className="ml-auto mt-20 flex w-5/6 flex-col items-end">
        <div className="flex items-center">
          <p className="text-7xl font-medium uppercase">JiveMauá</p>
          <span className="block h-px w-[36.5rem] bg-black"></span>
        </div>
        <div className="flex items-center gap-3 self-start">
          <p>12/2021 - 10/2024</p>
          <p className="text-2xl">São Paulo, Brazil</p>
        </div>
        <div className="mt-5 w-11/12 self-start text-xl">
          &nbsp;&nbsp;&nbsp;&nbsp;• Led the frontend development in migrating
          the stack to React.js with TypeScript, Node.js with Express,
          PostgreSQL, and AWS services (Cognito, Amplify, S3, Dynamo), resulting
          in a reduction of over R$1 million in user license costs on
          ServiceNow. <br className="my-1" />• Designed and presented a proposal
          to restructure the MVP using Next.js, Prisma, and shadcn/ui, focusing
          on improvements in performance, scalability, and user experience.
          <br className="my-1" />
          &nbsp;&nbsp;&nbsp;&nbsp;• Developed frontend solutions for the
          Background Check automation project, creating intuitive and optimized
          interfaces to streamline internal processes.
          <br className="my-1" /> &nbsp;&nbsp;&nbsp;&nbsp;• Presented
          improvements in versioning practices (Git Flow and Conventional
          Commits) and coding standards (Clean Code and SOLID principles),
          promoting better organization, collaboration, and quality within the
          development team. <br className="my-1" />
          &nbsp;&nbsp;&nbsp;&nbsp;• Developed and documented embedded solutions
          with React.js integrated into ServiceNow, focusing on meeting business
          needs and improving user experience.
          <br className="my-1" /> &nbsp;&nbsp;&nbsp;&nbsp;• Presented
          boilerplate-based solutions with React.js to the development team on
          ServiceNow, enabling the use of SPAs and npm packages, overcoming
          platform limitations, and expanding development possibilities.
          <br className="my-1" /> &nbsp;&nbsp;&nbsp;&nbsp;• Developed a frontend
          application for external clients, featuring a modern interface and
          integration with the ServiceNow API, aimed at reducing user license
          costs on the platform.
          <br className="my-1" />
          &nbsp;&nbsp;&nbsp;&nbsp;• Worked as a JavaScript developer to create
          new features on the ServiceNow platform, contributing to enhanced
          efficiency in asset and investment management.
        </div>
      </div>
      <div className="my-20 ml-auto flex w-5/6 flex-col items-end">
        <div className="flex items-center">
          <p className="text-7xl font-medium uppercase">Beijaflore</p>
          <span className="block h-px w-[32rem] bg-black"></span>
        </div>
        <div className="flex items-center gap-3 self-start">
          <p>07/2021 - 11/2021</p>
          <p className="text-2xl">Rio de Janeiro, Brazil</p>
        </div>
        <div className="mt-5 w-11/12 self-start text-xl">
          &nbsp;&nbsp;&nbsp;&nbsp;• Served as the lead frontend developer on the
          team responsible for the creation and maintenance of the Spazio
          project: a web application for antenna management developed for TIM
          Brasil. <br className="my-1" />
          &nbsp;&nbsp;&nbsp;&nbsp;• Contributed to the migration of a Ruby
          monolithic application to a modern architecture using Vue.js with
          Bootstrap, Kotlin, and Java with Spring Boot, resulting in significant
          improvements in performance and scalability.
        </div>
      </div>
    </RouteContainer>
  );
}
