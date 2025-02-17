"use client";

import { RouteContainer } from "@/app/components/shared/route-container";
import Image from "next/image";
import pokedexImage from "@/app/assets/imgs/pokedex.png";
import vscodeImage from "@/app/assets/imgs/vscode.png";
import websiteImage from "@/app/assets/imgs/website.png";

export default function Projects() {
  const stacks = [
    { title: "Motion", subtitle: "Next.js | Tailwind | Framer Motion" },
    { title: "Folio V1", subtitle: "Next.js | Typescript | Tailwind" },
    { title: "Pokédex", subtitle: "Next.js | React.js | Tailwind" },
  ];
  return (
    <RouteContainer>
      {stacks.map((stack, index) => (
        <div
          key={index}
          className={`${index % 2 === 0 ? "ml-auto" : "mr-auto"} mb-20 mt-10 flex w-full flex-col text-end`}
        >
          <div className={`${index % 2 === 0 ? "ml-auto" : "mr-auto"} w-11/12`}>
            <div className="flex items-center">
              {index % 2 !== 0 && (
                <span className="me-10 block h-px w-full bg-kakhi transition-colors duration-500"></span>
              )}
              <p className="whitespace-nowrap text-6xl font-bold uppercase">
                {stack.title}
              </p>

              {index % 2 === 0 && (
                <span className="ms-10 block h-px w-full bg-kakhi transition-colors duration-500"></span>
              )}
            </div>
          </div>
          <Image
            width={0}
            height={0}
            className="m-auto mt-10 w-10/12"
            alt=""
            src={vscodeImage}
          />
        </div>
      ))}
    </RouteContainer>
  );
}
