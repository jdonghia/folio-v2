"use client";

import { RouteContainer } from "../components/shared/route-container";

export default function Home() {
  return (
    <RouteContainer>
      <div className="mt-80 flex flex-col gap-10">
        <div className="relative   ml-auto text-7xl uppercase">
          <div className="flex items-center">
            <p>Hello, i am</p>
            <span className="block h-px w-96 bg-black"></span>
          </div>
          <p className="text-sm">João Donghia</p>
        </div>
        <p className="me-5 ml-auto w-8/12 text-xl leading-7 tracking-wide">
          &nbsp;&nbsp;&nbsp;&nbsp;Software Engineer specialized in front-end,
          focusing on web application development using JavaScript.
          <br className="my-1" />
          &nbsp;&nbsp;&nbsp;&nbsp;I have experience in consulting, in the asset
          and investment management sector, and currently in the streaming
          industry with Claro Brasil.
          <br className="my-1" />
          &nbsp;&nbsp;&nbsp;&nbsp;I have a solid foundation in modern frameworks
          like React, Next.js, and supersets like Typescript.
          <br className="my-1" />
          &nbsp;&nbsp;&nbsp;&nbsp;I strive to develop my applications using best
          coding practices and versioning, while ensuring full fidelity to the
          application’s design.{" "}
        </p>
      </div>
    </RouteContainer>
  );
}
