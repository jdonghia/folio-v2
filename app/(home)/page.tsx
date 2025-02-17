"use client";

import { RouteContainer } from "../components/shared/route-container";

export default function Home() {
  return (
    <RouteContainer>
      <div className="mt-72 flex flex-col gap-10 uppercase text-kakhi transition-colors duration-500">
        <div className="w-full">
          <div className="ml-auto w-11/12">
            <div className="relative mb-10 text-6xl uppercase">
              <div className="flex items-center">
                <p className="whitespace-nowrap text-6xl font-bold">About Me</p>
                <span className="ms-10 block h-px w-full  bg-kakhi transition-colors duration-500"></span>
              </div>
            </div>
          </div>
          <p className="m-auto w-9/12 text-justify leading-7 tracking-wide text-eerie transition-colors duration-500 dark:text-powder">
            Converting concepts to reality .Dedicated to crafting exceptional
            digital experiences. <br className="mb-3 mt-1" />
            <b>Software Engineer</b> specialized in
            <b> front-end</b>, focusing on web application development.
            <br className="mb-3 mt-1" />
            Experience in <b>consulting</b>, in the <b> asset </b>
            and <b>investment</b> management sector, and currently in the{" "}
            <b> streaming industry </b>
            at Claro Brasil.
            <br className="mb-3 mt-1" />
            Solid foundation in modern frameworks like
            <b> React.js</b>, <b>Next.js</b>, and supersets like{" "}
            <b>Typescript</b>.
          </p>
        </div>
      </div>
    </RouteContainer>
  );
}
