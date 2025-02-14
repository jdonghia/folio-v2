"use client";

import { RouteContainer } from "@/app/components/shared/route-container";
import Image from "next/image";
import pokedexImage from "@/app/assets/imgs/pokedex.png";
import vscodeImage from "@/app/assets/imgs/vscode.png";
import websiteImage from "@/app/assets/imgs/website.png";

export default function Projects() {
  return (
    <RouteContainer>
      <div className="w-6/6 mb-10 ml-auto mt-20 flex flex-col items-center">
        <div className="mb-8 flex items-center">
          <p className="text-7xl font-medium uppercase">Motion</p>
          <span className="block h-px w-[28rem] bg-eerie transition-colors duration-[1500ms] dark:bg-eerie dark:bg-powder"></span>
        </div>

        <div className="h-82 m-auto w-9/12 bg-red-500">
          <Image
            width={0}
            height={0}
            className="size-full"
            alt=""
            src={vscodeImage}
          />
        </div>
      </div>
      <div className="w-6/6 mb-10 ml-auto mt-20 flex flex-col items-center">
        <div className="mb-8 flex items-center">
          <span className="block h-px w-[28rem] bg-eerie transition-colors duration-[1500ms] dark:bg-eerie dark:bg-powder"></span>
          <p className="text-7xl font-medium uppercase">Folio V1</p>
        </div>

        <div className="h-82 m-auto w-9/12 bg-red-500">
          <Image
            width={0}
            height={0}
            className="size-full"
            alt=""
            src={websiteImage}
          />
        </div>
      </div>
      <div className="w-6/6 mb-10 ml-auto mt-20 flex flex-col items-center">
        <div className="mb-8 flex items-center">
          <p className="text-7xl font-medium uppercase">Pokédex</p>
          <span className="block h-px w-[28rem] bg-eerie transition-colors duration-[1500ms] dark:bg-eerie dark:bg-powder"></span>
        </div>

        <div className="h-82 m-auto w-9/12 bg-red-500">
          <Image
            width={0}
            height={0}
            className="size-full"
            alt=""
            src={pokedexImage}
          />
        </div>
      </div>
    </RouteContainer>
  );
}
