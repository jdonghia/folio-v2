"use client";

import { RouteContainer } from "@/app/components/shared/route-container";

export default function Contact() {
  return (
    <RouteContainer>
      <div className="mt-72 flex flex-col gap-10 uppercase text-kakhi transition-colors duration-500 max-[1378px]:mt-40">
        <div className="w-full">
          <div className="ml-auto w-11/12">
            <div className="relative mb-10 text-6xl max-[1378px]:text-5xl uppercase">
              <div className="flex items-center">
                <p className="whitespace-nowrap text-6xl max-[1378px]:text-5xl font-bold">Find me</p>
                <span className="ms-10 block h-px w-full  bg-kakhi transition-colors duration-500"></span>
              </div>
            </div>
          </div>
          <p className="m-auto w-9/12 text-justify leading-7 tracking-wide text-eerie transition-colors duration-500 dark:text-powder">
            More about my career linkedin
            <br className="mb-3 mt-1" />
            check my repos GitHub
            <br className="mb-3 mt-1" />
            send me a message Gmail
            <br className="mb-3 mt-1" />
          </p>
        </div>
      </div>
    </RouteContainer>
  );
}
