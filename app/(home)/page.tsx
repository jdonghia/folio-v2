"use client";

import { RouteContainer } from "../components/shared/route-container";

export default function Home() {
  return (
    <RouteContainer>
      <div className="mt-72 flex flex-col gap-10 uppercase text-kakhi transition-colors duration-500 max-[1378px]:mt-40">
        <div className="w-full">
          <div className="ml-auto w-11/12">
            <div className="relative mb-10 text-6xl max-[1378px]:text-5xl uppercase">
              <div className="flex items-center">
                <p className="whitespace-nowrap text-6xl max-[1378px]:text-5xl font-bold">About Me</p>
                <span className="ms-10 block h-px w-full  bg-kakhi transition-colors duration-500"></span>
              </div>
            </div>
          </div>
          <p className="m-auto w-9/12 text-justify leading-7 tracking-wide text-eerie transition-colors duration-500 dark:text-powder">
            Hi, there! I'm a <b>Software Engineer</b> specialized in{" "}
            <b>frontend </b>
            development, crafting immersive websites with fluid motions and
            exceptional rendering performance. <br className="mb-3 mt-1" />
            With 4 years of experience across diverse market sectors, I leverage
            modern frameworks like <b>Next</b> and <b>React</b> to create
            high-performance interfaces that make an impact.{" "}
            <br className="mb-3 mt-1" />I craft exclusive digital experiences
            through minimalist design and cutting-edge technology.{" "}
          </p>
        </div>
      </div>
    </RouteContainer>
  );
}
