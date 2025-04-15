"use client";

import { RouteContainer } from "@/app/components/shared/route-container";

const experiences = [
  {
    company: "Claro S.A",
    period: "11/2024 - current",
    location: "Rio de Janeiro",
    details: [
      "Part of the Claro Música development team, working as a technical lead on the Claro Música TV project.",
    ],
  },
  {
    company: "JiveMauá",
    period: "12/2021 - 10/2024",
    location: "São Paulo",
    details: [
      "Reduced annual costs by over R$1 million in user licenses by proposing a new front-end solution in React.js to replace ServiceNow. The success of the project led to its acquisition by Apex Group and the termination of the contract with ServiceNow.",
      "Proposed and led the main project update, presenting improvements with Next.js, Prisma, and shadcn. The solution consisted of performance improvements, encapsulation of requests through Server Side Rendering, and flexible customization.",
      "Significantly reduced compliance service contract costs by implementing a React.js interface on AWS, integrated with third-party Restful APIs. The project automated and internalized the process.",
      "Led and coordinated front-end applications on AWS, ensuring semantic versioning with Git Flow, acting as reviewer and approver of Pull Requests, and being responsible for deployments in the production environment.",
      "Reduced costs with external user licenses in ServiceNow by more than 40% by implementing an independent front-end integrated via Restful API. The project initiated the process of definitively replacing the contract with ServiceNow.",
      "Pioneered the development of React.js applications in the company, creating boilerplates integrated with ServiceNow. This initiative contributed to the strategic decision to migrate to an independent front-end solution.",
    ],
  },
  {
    company: "Beijaflore",
    period: "07/2021 - 11/2021",
    location: "Rio de Janeiro",
    details: [
      "Migrated a monolithic Ruby application by implementing a modern architecture with Vue.js and Java with Spring Boot, which strengthened the partnership with TIM Brasil and enabled the closing of new contracts with the operator.",
    ],
  },
];

export default function Experience() {
  return (
    <RouteContainer>
      {experiences.map((exp) => (
        <div
          key={exp.company}
          className={`my-10 max-sm:my-5 flex w-full flex-col items-start`}
        >
          <div className="ml-auto w-11/12">
            <div className="flex w-full items-center">
              <p className="w-5/12 whitespace-nowrap text-6xl font-bold uppercase max-sm:text-3xl max-xl:text-[2.5rem] max-2xl:text-5xl max-lg:text-4xl max-lg:text-4xl">
                {exp.company}
              </p>
              <span className="ms-10 block h-px w-full bg-kakhi transition-colors duration-500"></span>
            </div>
            <div className="flex items-center gap-3 self-start text-xl max-xl:text-[1rem] max-sm:text-sm max-2xl:text-lg">
              <p>{exp.period}</p>
              <span className="mt-1 inline-block size-2 bg-eerie transition-colors duration-500 dark:bg-powder"></span>
              <p className="uppercase max-xl:text-xsm max-2xl:text-sm">{exp.location}</p>
            </div>
          </div>
          <div className="max-sm:w-10/12 m-auto mt-5 w-9/12 max-xl:text-sm self-start text-justify text-eerie dark:text-powder">
            {exp.details.map((detail, idx) => (
              <p
                key={idx}
                style={{ transition: "color 150ms" }}
                className="my-8"
                dangerouslySetInnerHTML={{
                  __html: `<span class='mb-px me-2 inline-block size-2 bg-eerie transition-colors duration-500 dark:bg-powder'></span>${detail}`,
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </RouteContainer>
  );
}
