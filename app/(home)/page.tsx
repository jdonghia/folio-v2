"use client";

import { RouteContainer } from "../components/shared/route-container";

export default function Home() {
  return (
    <RouteContainer>
      <div className="mt-80 flex flex-col gap-10 transition-colors duration-[2000ms] dark:text-white">
        <div className="relative ml-auto text-5xl uppercase">
          <div className="flex items-center">
            <p>
              Web <b>Development</b>
            </p>
            <span className="block h-px w-96 bg-black transition-colors duration-[2000ms] dark:bg-white"></span>
          </div>
        </div>
        <p className="me-10 ml-auto w-8/12 text-xl leading-7 tracking-wide">
          &nbsp;&nbsp;&nbsp;&nbsp;Converting concepts to reality .Dedicated to
          crafting exceptional digital experiences. <br className="mb-3 mt-1" />
          &nbsp;&nbsp;&nbsp;&nbsp;<b>Software Engineer</b> specialized in
          <b> front-end</b>, focusing on web application development.
          <br className="mb-3 mt-1" />
          &nbsp;&nbsp;&nbsp;&nbsp;Experience in <b>consulting</b>, in the{" "}
          <b> asset </b>
          and <b>investment</b> management sector, and currently in the{" "}
          <b> streaming industry </b>
          at Claro Brasil.
          <br className="mb-3 mt-1" />
          &nbsp;&nbsp;&nbsp;&nbsp;Solid foundation in modern frameworks like
          <b> React.js</b>, <b>Next.js</b>, and supersets like <b>Typescript</b>
          .
        </p>
      </div>
    </RouteContainer>
  );
}
