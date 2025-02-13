"use client";

import { RouteContainer } from "@/app/components/shared/route-container";
import Image from "next/image";
import pokedexImage from "@/app/assets/imgs/pokedex.png";
import vscodeImage from "@/app/assets/imgs/vscode.png";
import websiteImage from "@/app/assets/imgs/website.png";

export default function Projects() {
  return (
    <RouteContainer>
      <div className="ml-auto mt-20  flex flex-col items-center  gap-2">
        <div className="h-82 m-auto w-11/12 bg-red-500">
          <Image
            width={0}
            height={0}
            className="size-full"
            alt=""
            src={vscodeImage}
          />
        </div>
        <div className="h-82 m-auto w-11/12 bg-red-500">
          <Image
            width={0}
            height={0}
            className="size-full"
            alt=""
            src={websiteImage}
          />
        </div>
        <div className="h-82 m-auto w-11/12 bg-red-500">
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
