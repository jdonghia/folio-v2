"use client";

import { RouteContainer } from "@/app/components/shared/route-container";

const experiences = [
  {
    company: "Claro S.A",
    period: "11/2024 - current",
    location: "Rio de Janeiro, Brazil",
    details: [
      "Member of iMusica, part of the América Móvil group, working on the development of <b>Claro Música</b>.",
      "Working on the development team for <b>Claro Música TV</b> and <b>Claro Música WEB</b> in collaboration with the team from Mexico.",
    ],
  },
  {
    company: "JiveMauá",
    period: "12/2021 - 10/2024",
    location: "São Paulo, Brazil",
    details: [
      "<b>Led</b> the frontend development in migrating the stack to <b>React.js</b> with <b>TypeScript</b>, <b>Node.js</b> with <b>Express</b>, <b>PostgreSQL</b>, and <b>AWS</b> services (Cognito, Amplify, S3, Dynamo), resulting in a reduction of <b>over R$1 million</b> in user license costs on <b>ServiceNow</b>.",
      "<b>Designed</b> and presented a proposal to restructure the MVP using <b>Next.js</b>, <b>Prisma</b>, and <b>shadcn/ui</b>, focusing on improvements in performance, scalability, and user experience.",
      "<b>Developed</b> frontend solutions for the Background Check automation project, creating intuitive and optimized interfaces to streamline internal processes.",
      "<b>Presented</b> improvements in versioning practices (<b>Git Flow</b> and <b>Conventional Commits</b>) and coding standards (<b>Clean Code</b> and <b>SOLID</b> principles), promoting better organization, collaboration, and quality within the development team.",
      "<b>Developed</b> and documented embedded solutions with <b>React.js</b> integrated into <b>ServiceNow</b>, focusing on meeting business needs and improving user experience.",
      "<b>Presented</b> boilerplate-based solutions with <b>React.js</b> to the development team on <b>ServiceNow</b>, enabling the use of <b>SPAs</b> and <b>npm</b> packages, overcoming platform limitations, and expanding development possibilities.",
      "<b>Developed</b> a <b>frontend</b> application for external clients, featuring a modern interface and integration with the <b>ServiceNow API</b>, aimed at reducing user license costs on the platform.",
      "<b>Worked</b> as a <b>JavaScript</b> developer to create new features on the <b>ServiceNow</b> platform, contributing to enhanced efficiency in asset and investment management.",
    ],
  },
  {
    company: "Beijaflore",
    period: "07/2021 - 11/2021",
    location: "Rio de Janeiro, Brazil",
    details: [
      "<b>Served</b> as the lead <b>frontend</b> developer on the team responsible for the creation and maintenance of the Spazio project: a web application for antenna management developed for TIM Brasil.",
      "<b>Contributed</b> to the migration of a <b>Ruby</b> monolithic application to a modern architecture using <b>Vue.js</b> with <b>Bootstrap</b>, <b>Kotlin</b>, and <b>Java</b> with <b>Spring Boot</b>, resulting in significant improvements in performance and scalability.",
    ],
  },
];

export default function Experience() {
  return (
    <RouteContainer>
      {experiences.map((exp, index) => (
        <div
          key={exp.company}
          className={`my-10 flex w-full flex-col items-start`}
        >
          <div className="ml-auto w-11/12">
            <div className="flex w-full items-center">
              <p className="w-5/12 whitespace-nowrap text-6xl font-bold uppercase max-[1536px]:text-5xl">
                {exp.company}
              </p>
              <span className="ms-10 block h-px w-full bg-kakhi transition-colors duration-500"></span>
            </div>
            <div className="flex items-center gap-3 self-start text-xl max-[1536px]:text-lg max-[1536px]:text-lg">
              <p>{exp.period}</p>
              <span className="mt-1 inline-block size-2 bg-eerie transition-colors duration-500 dark:bg-powder"></span>
              <p className="text-xl max-[1536px]:text-lg uppercase">{exp.location}</p>
            </div>
          </div>
          <div className="m-auto mt-5 w-9/12 self-start text-justify uppercase text-eerie transition-colors duration-500 dark:text-powder">
            {exp.details.map((detail, idx) => (
              <p
                key={idx}
                className="my-8"
                dangerouslySetInnerHTML={{
                  __html: `<span class='mb-px me-2 inline-block transition-colors duration-500 size-2 bg-eerie dark:bg-powder'></span>${detail}`,
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </RouteContainer>
  );
}
