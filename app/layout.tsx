"use client";

import { motion, useAnimate } from "motion/react";
import "./globals.css";
import localFont from "next/font/local";
import { useRouter, usePathname } from "next/navigation";
import SVGPath from "./components/svg";
import { TransitionLink } from "@/app/components/utils/transition-link";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@/app/components/theme-provider";
import { useTheme } from "next-themes";

const NeueMontreal = localFont({
  src: [
    {
      path: "./assets/fonts/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./assets/fonts/NeueMontreal-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./assets/fonts/NeueMontreal-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./assets/fonts/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./assets/fonts/NeueMontreal-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./assets/fonts/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./assets/fonts/NeueMontreal-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./assets/fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { themes, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  console.log(themes);

  useEffect(() => {
    handleAnimation();
  }, [pathname]);

  const handleAnimation = () => {
    console.log("chamei");
    if (pathname === "/experience")
      animate("#divisor", { width: "35%" }, { ease: "easeInOut", delay: 0 });
    if (pathname === "/projects")
      animate("#divisor", { width: "35%" }, { ease: "easeInOut", delay: 0 });
    if (pathname === "/")
      animate("#divisor", { width: "60%" }, { ease: "easeInOut", delay: 0 });
    if (pathname === "/expertise")
      animate("#divisor", { width: "60%" }, { ease: "easeInOut", delay: 0 });
    if (pathname === "/contact")
      animate("#divisor", { width: "60%" }, { ease: "easeInOut", delay: 0 });
  };

  const [scope, animate] = useAnimate();

  const increaseBar = (id) => {
    animate(`#${id}`, { width: "5rem" });
  };
  const [mode, setMode] = useState("light");

  const decreaseBar = (id) => {
    animate(`#${id}`, { width: "0rem" });
  };
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body className={NeueMontreal.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute z-50 flex bg-red-500  dark:bg-blue-500 items-center gap-2 right-7 top-7">
            {/* <div */}
            {/*   onClick={() => { */}
            {/*     console.log("chamei"); */}
            {/*     setTheme("light"); */}
            {/*   }} */}
            {/*   className={`${mode === "light" ? "bg-black" : "bg-white"} dark:text-red-500 border border-black w-4 h-4`} */}
            {/* ></div> */}
            {/* <p>light</p> */}

            {/* <div */}
            {/*   onClick={() => { */}
            {/*     console.log("chamei"); */}
            {/*     setTheme("dark"); */}
            {/*   }} */}
            {/*   className={`${mode !== "light" ? "bg-black" : "bg-white"} border border-black w-4 h-4`} */}
            {/* ></div> */}
            {/* <p>dark</p> */}
          </div>
          <div className="h-screen p-5 fixed w-full">
            <div className="flex h-full border border-black" ref={scope}>
              <motion.div
                // initial={{ width: "33.333%" }}
                // animate={{ width: "60%" }}
                id="divisor"
                className="bg-black flex flex-col overflow-hidden gap-36 relative h-full w-6/12"
              >
                <div className="text-white ms-20 mt-10">
                  <p className="text-6xl">
                    <span className="font-light">João</span> Donghia
                  </p>
                  <div className="flex items-center gap-1 absolute left-0 mt-2">
                    <span className="h-px w-80 bg-white block"></span>
                    <p>Frontend Engineer</p>
                  </div>
                </div>
                <ol
                  ref={scope}
                  className="text-7xl text-white ms-8 uppercase font-bold  z-50"
                >
                  <TransitionLink href="/">
                    <motion.li
                      onHoverStart={() => increaseBar("bar1")}
                      onHoverEnd={() => decreaseBar("bar1")}
                      className={`flex cursor-pointer items-center gap-1 left-0 mt-2 ${pathname === "/" ? "text-gray-600" : ""} hover:text-gray-600 transition-colors`}
                    >
                      <motion.span
                        id="bar1"
                        animate={{ width: "5rem" }}
                        transition={{
                          delay: 2,
                          ease: "easeInOut",
                          duration: 0.5,
                        }}
                        className={`h-px bg-white block ${pathname === "/" ? "w-20" : ""}`}
                      ></motion.span>
                      <p>About</p>
                    </motion.li>
                  </TransitionLink>
                  <TransitionLink href="experience">
                    <motion.li
                      onHoverStart={() => increaseBar("bar2")}
                      onHoverEnd={() => decreaseBar("bar2")}
                      className="flex cursor-pointer items-center gap-1 left-0 mt-2 hover:text-gray-600 transition-colors"
                    >
                      <motion.span
                        id="bar2"
                        transition={{
                          delay: 2,
                          ease: "easeInOut",
                          duration: 0.5,
                        }}
                        className="h-px bg-white block"
                      ></motion.span>
                      <p>Experience</p>
                    </motion.li>
                  </TransitionLink>
                  <TransitionLink href="projects">
                    <motion.li
                      onClick={() => {}}
                      onHoverStart={() => increaseBar("bar3")}
                      onHoverEnd={() => decreaseBar("bar3")}
                      className="flex cursor-pointer items-center gap-1 left-0 mt-2 hover:text-gray-600 transition-colors"
                    >
                      <motion.span
                        id="bar3"
                        transition={{
                          delay: 2,
                          ease: "easeInOut",
                          duration: 0.5,
                        }}
                        className="h-px bg-white block"
                      ></motion.span>
                      <p>Projects</p>
                    </motion.li>
                  </TransitionLink>
                  <TransitionLink href="expertise">
                    <motion.li
                      onClick={() => {}}
                      onHoverStart={() => increaseBar("bar4")}
                      onHoverEnd={() => decreaseBar("bar4")}
                      className="flex cursor-pointer items-center gap-1 left-0 mt-2 hover:text-gray-600 transition-colors"
                    >
                      <motion.span
                        id="bar4"
                        transition={{
                          delay: 2,
                          ease: "easeInOut",
                          duration: 0.5,
                        }}
                        className="h-px bg-white block"
                      ></motion.span>
                      <p>Expertise</p>
                    </motion.li>
                  </TransitionLink>
                  <TransitionLink href="contact">
                    <motion.li
                      onClick={() => {}}
                      onHoverStart={() => increaseBar("bar5")}
                      onHoverEnd={() => decreaseBar("bar5")}
                      className="flex cursor-pointer items-center gap-1 left-0 mt-2 hover:text-gray-600 transition-colors"
                    >
                      <motion.span
                        id="bar5"
                        transition={{
                          delay: 2,
                          ease: "easeInOut",
                          duration: 0.5,
                        }}
                        className="h-px bg-white block"
                      ></motion.span>
                      <p>Contact</p>
                    </motion.li>
                  </TransitionLink>
                </ol>
                <SVGPath />
              </motion.div>
              <div
                className="dark:text-white text-black bg-white flex w-[65%]"
                id="routes"
              >
                {children}
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
