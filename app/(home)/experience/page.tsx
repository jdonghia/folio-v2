"use client";

import { RouteContainer } from "@/app/components/shared/route-container";

export default function Experience() {
  return (
    <RouteContainer>
      <div className="ml-auto mt-20 flex w-5/6 flex-col items-end">
        <div className="flex items-center">
          <p className="text-7xl font-medium uppercase">Claro S.A</p>
          <span className="block h-px w-[35.5rem] bg-black transition-colors duration-[2000ms] dark:bg-white"></span>
        </div>
        <div className="flex items-center gap-3 self-start">
          <p>11/2024 - current</p>
          <p className="text-2xl">Rio de Janeiro, Brazil</p>
        </div>
        <div className="mt-5 w-11/12 self-start text-xl">
          &nbsp;&nbsp;&nbsp;&nbsp;• Member of iMusica, part of the América Móvil
          group, working on the development of <b>Claro Música</b>.
          <br className="mb-3 mt-1" /> &nbsp;&nbsp;&nbsp;&nbsp;• Working on the
          development team for <b>Claro Música TV</b> and{" "}
          <b>Claro Música WEB</b> in collaboration with the team from Mexico.
        </div>
      </div>
      <div className="ml-auto mt-20 flex w-5/6 flex-col items-end">
        <div className="flex items-center">
          <p className="text-7xl font-medium uppercase">JiveMauá</p>
          <span className="block h-px w-[36.5rem] bg-black  transition-colors duration-[2000ms] dark:bg-white"></span>
        </div>
        <div className="flex items-center gap-3 self-start">
          <p>12/2021 - 10/2024</p>
          <p className="text-2xl">São Paulo, Brazil</p>
        </div>
        <div className="mt-5 w-11/12 self-start text-xl">
          &nbsp;&nbsp;&nbsp;&nbsp;• <b>Led</b> the frontend development in
          migrating the stack to <b>React.js</b> with <b>TypeScript</b>,{" "}
          <b>Node.js</b> with
          <b> Express</b>, <b>PostgreSQL</b>, and <b>AWS</b> services (Cognito,
          Amplify, S3, Dynamo), resulting in a reduction of{" "}
          <b>over R$1 million</b> in user license costs on <b>ServiceNow</b>.{" "}
          <br className="mb-3 mt-1" />
          &nbsp;&nbsp;&nbsp;&nbsp;• <b>Designed</b> and presented a proposal to
          restructure the MVP using <b>Next.js</b>, <b>Prisma</b>, and{" "}
          <b>shadcn/ui</b>, focusing on improvements in performance,
          scalability, and user experience.
          <br className="mb-3 mt-1" />
          &nbsp;&nbsp;&nbsp;&nbsp;• <b>Developed</b> frontend solutions for the
          Background Check automation project, creating intuitive and optimized
          interfaces to streamline internal processes.
          <br className="mb-3 mt-1" /> &nbsp;&nbsp;&nbsp;&nbsp;•{" "}
          <b>Presented</b> improvements in versioning practices (<b>Git Flow</b>{" "}
          and
          <b> Conventional Commits</b>) and coding standards (<b>Clean Code</b>{" "}
          and <b>SOLID </b>
          principles), promoting better organization, collaboration, and quality
          within the development team. <br className="mb-3 mt-1" />
          &nbsp;&nbsp;&nbsp;&nbsp;• <b>Developed</b> and documented embedded
          solutions with <b>React.js</b> integrated into <b>ServiceNow</b>,
          focusing on meeting business needs and improving user experience.
          <br className="mb-3 mt-1" /> &nbsp;&nbsp;&nbsp;&nbsp;•{" "}
          <b>Presented</b> boilerplate-based solutions with <b>React.js</b> to
          the development team on <b>ServiceNow</b>, enabling the use of{" "}
          <b>SPAs</b> and <b>npm </b>
          packages, overcoming platform limitations, and expanding development
          possibilities.
          <br className="mb-3 mt-1" /> &nbsp;&nbsp;&nbsp;&nbsp;•{" "}
          <b>Developed</b> a <b>frontend</b> application for external clients,
          featuring a modern interface and integration with the{" "}
          <b>ServiceNow</b> <b>API</b>, aimed at reducing user license costs on
          the platform.
          <br className="mb-3 mt-1" />
          &nbsp;&nbsp;&nbsp;&nbsp;• <b>Worked</b> as a <b>JavaScript</b>{" "}
          developer to create new features on the <b>ServiceNow</b> platform,
          contributing to enhanced efficiency in asset and investment
          management.
        </div>
      </div>
      <div className="my-20 ml-auto flex w-5/6 flex-col items-end">
        <div className="flex items-center">
          <p className="text-7xl font-medium uppercase">Beijaflore</p>
          <span className="block h-px w-[32rem] bg-black transition-colors duration-[2000ms] dark:bg-white"></span>
        </div>
        <div className="flex items-center gap-3 self-start">
          <p>07/2021 - 11/2021</p>
          <p className="text-2xl">Rio de Janeiro, Brazil</p>
        </div>
        <div className="mt-5 w-11/12 self-start text-xl">
          &nbsp;&nbsp;&nbsp;&nbsp;• <b>Served</b> as the lead <b>frontend</b>{" "}
          developer on the team responsible for the creation and maintenance of
          the Spazio project: a web application for antenna management developed
          for TIM Brasil. <br className="mb-3 mt-1" />
          &nbsp;&nbsp;&nbsp;&nbsp;• <b>Contributed</b> to the migration of a
          <b> Ruby</b> monolithic application to a modern architecture using{" "}
          <b>Vue.js</b> with
          <b> Bootstrap</b>, <b>Kotlin</b>, and <b>Java</b> with{" "}
          <b>Spring Boot</b>, resulting in significant improvements in
          performance and scalability.
        </div>
      </div>
    </RouteContainer>
  );
}
