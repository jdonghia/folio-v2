"use client";

import { RouteContainer } from "@/app/components/shared/route-container";
import Link from "next/link";

export default function Contact() {
  return (
    <RouteContainer>
      <div className="mt-72 flex flex-col gap-10 uppercase text-kakhi transition-colors duration-500 max-[1536px]:mt-40">
        <div className="w-full">
          <div className="ml-auto w-11/12">
            <div className="relative mb-10 text-6xl uppercase max-[1536px]:text-5xl">
              <div className="flex items-center">
                <p className="whitespace-nowrap text-6xl font-bold max-[1536px]:text-5xl">
                  Find me
                </p>
                <span className="ms-10 block h-px w-full  bg-kakhi transition-colors duration-500"></span>
              </div>
            </div>
          </div>
          <div className="m-auto w-9/12 text-justify text-xl leading-7 tracking-wide text-eerie dark:text-powder">
            <p className="mb-3 mt-1">
              Connect with me on
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/joao-donghia/"
              >
                <b
                  style={{ transition: "color 150ms" }}
                  className="underline hover:text-kakhi"
                >
                  {" "}
                  Linkedin
                </b>
              </Link>
            </p>
            <p className="mb-3 mt-1">
              Check out my work on
              <Link target="_blank" href="https://github.com/jdonghia">
                <b
                  style={{ transition: "color 150ms" }}
                  className="underline hover:text-kakhi"
                >
                  {" "}
                  GitHub
                </b>
              </Link>
            </p>

            <p className="mb-3 mt-1">
              Drop me a message via
              <Link
                target="_blank"
                href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcRwQnZwvgglgSvJGtQXlfhWtXLvHPLXNZDJFhtjCnVHVGwzgCCWXNvmPpLQPXnvzWdRRzrhS"
              >
                <b
                  style={{ transition: "color 150ms" }}
                  className="underline hover:text-kakhi"
                >
                  {" "}
                  Email
                </b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </RouteContainer>
  );
}
