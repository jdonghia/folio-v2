"use client";

import { RouteContainer } from "../components/shared/route-container";

export default function Home() {
  return (
    <RouteContainer>
      <div className="mt-72 flex flex-col gap-10 text-kakhi transition-colors duration-500 max-2xl:mt-40 max-sm:mt-7">
        <div className="w-full">
          <div className="ml-auto w-11/12">
            <div className="relative mb-10 text-6xl uppercase max-2xl:text-5xl max-xl:text-[2.5rem] max-lg:text-4xl">
              <div className="flex items-center">
                <p className="max-sm:text-3xl whitespace-nowrap text-6xl font-bold max-2xl:text-5xl max-xl:text-[2.5rem] max-lg:text-4xl">
                  About Me
                </p>
                <span className="ms-10 block h-px w-full  bg-kakhi transition-colors duration-500"></span>
              </div>
            </div>
          </div>
          <div
            className="m-auto w-9/12 text-justify leading-7 tracking-wide text-eerie dark:text-powder max-xl:text-sm max-sm:w-10/12"
            style={{ transition: "color 150ms" }}
          >
            <p className="mb-3 mt-1">
              Hi, there! I&apos;m a Software Engineer specialized in frontend
              development, crafting immersive websites with fluid motions and
              exceptional rendering performance.
            </p>
            <p className="mb-3 mt-1">
              With over 4 years of experience across diverse market sectors, I
              leverage modern frameworks like Next and React to create
              high-performance interfaces that make an impact.{" "}
            </p>
            <p className="mb-3 mt-1">
              I craft exclusive digital experiences through minimalist design
              and cutting-edge technology.{" "}
            </p>
          </div>
        </div>
      </div>
    </RouteContainer>
  );
}
