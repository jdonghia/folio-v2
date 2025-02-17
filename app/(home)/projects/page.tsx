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
          className={`${index % 2 === 0 ? "ml-auto" : "mr-auto"} mb-20 mt-10 flex w-11/12 flex-col text-end`}
        >
          <div className="flex items-center">
            {index % 2 !== 0 && (
              <span className="block h-px w-full bg-kakhi transition-colors duration-1000"></span>
            )}
            <p className="whitespace-nowrap text-6xl font-bold uppercase">
              {stack.title}
            </p>

            {index % 2 === 0 && (
              <span className="block h-px w-full bg-kakhi transition-colors duration-1000"></span>
            )}
          </div>
          <Image
            width={0}
            height={0}
            className="m-auto size-10/12"
            alt=""
            src={vscodeImage}
          />
        </div>
      ))}
    </RouteContainer>
  );
}
