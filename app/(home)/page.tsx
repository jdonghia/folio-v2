"use client";

import { RouteContainer } from "../components/shared/route-container";

export default function Home() {
  return (
    <RouteContainer>
      <div className="mt-80 flex flex-col gap-10 uppercase text-kakhi transition-colors duration-1000">
        <div className="ml-auto w-9/12">
          <div className="relative mb-10 text-6xl uppercase">
            <div className="flex items-center">
              <p className="w-7/12 text-6xl font-bold">About Me</p>
              <span className="block h-px w-7/12 bg-eerie transition-colors duration-1000 dark:bg-powder"></span>
            </div>
          </div>
          <p className="me-10 w-10/12 text-justify leading-7 tracking-wide text-eerie dark:text-powder">
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
