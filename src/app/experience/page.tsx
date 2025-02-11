"use client";
import SVGPath from "@/app/components/svg";
import {
  useMotionValueEvent,
  motion,
  useScroll,
  useAnimate,
} from "motion/react";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const pathName = usePathname();

  console.log(pathName);

  const { scrollY } = useScroll();

  const [scope, animate] = useAnimate();

  const increaseBar = (id) => {
    animate(`#${id}`, { width: "5rem" });
  };

  const decreaseBar = (id) => {
    animate(`#${id}`, { width: "0rem" });
  };

  // fix content with fixed variable, and simulate a scroll in the parent, passing a 200vh for example

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest == 96) {
      console.log("Page scroll: ", latest);
    }
  });

  return (
    <motion.div
      initial={{ transition: { duration: 2 }, opacity: 0 }}
      exit={{ transition: { duration: 5 }, opacity: 0 }}
      animate={{ transition: { duration: 2 }, opacity: 1 }}
      className="bg-white flex w-3/5"
    >
      <div className="flex flex-col mt-80 gap-10">
        <div className="text-7xl   relative ml-auto uppercase">
          <div className="flex items-center">
            <p>Hello, i am</p>
            <span className="h-px bg-black block w-96"></span>
          </div>
          <p className="text-sm">João Donghia</p>
        </div>
        <p className="tracking-wide leading-7 w-8/12 ml-auto me-5 text-xl">
          Software Engineer specialized in front-end, focusing on web
          application development using JavaScript. I have experience in
          consulting, in the asset and investment management sector, and
          currently in the streaming industry with Claro Brasil.
          <br /> I have a solid foundation in modern frameworks like React,
          Next.js, and supersets like Typescript.
          <br />I strive to develop my applications using best coding practices
          and versioning, while ensuring full fidelity to the application’s
          design.{" "}
        </p>
      </div>
    </motion.div>
  );
}
