"use client";

import { AnimatePresence, motion, useAnimate } from "motion/react";
import "./globals.css";
import localFont from "next/font/local";
import { useRouter, usePathname } from "next/navigation";
import SVGPath from "./components/svg";

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
  const router = useRouter();
  const pathname = usePathname();

  const [scope, animate] = useAnimate();

  const increaseBar = (id) => {
    animate(`#${id}`, { width: "5rem" });
  };

  const decreaseBar = (id) => {
    animate(`#${id}`, { width: "0rem" });
  };
  return (
    <html lang="en">
      <body className={NeueMontreal.className}>
        <motion.main className="h-[200vh]">
          <div className="h-screen p-10 fixed">
            <div className="flex h-full border border-black">
              <div className="bg-black flex flex-col overflow-hidden gap-36 relative h-full w-2/5">
                <div className="text-white ms-20 mt-10">
                  <p className="text-6xl">
                    <span className="font-light">João</span> Donghia
                  </p>
                  <div className="flex items-center gap-1 absolute left-0 mt-2">
                    <motion.span
                      animate={{ width: "15rem" }}
                      transition={{ ease: "easeInOut", duration: 0.5 }}
                      className="h-px bg-white block"
                    ></motion.span>
                    <p>Frontend Engineer</p>
                  </div>
                </div>
                <ol
                  ref={scope}
                  className="text-7xl text-white ms-8 uppercase font-bold  z-50"
                >
                  <motion.li
                    onHoverStart={() => increaseBar("bar1")}
                    onHoverEnd={() => decreaseBar("bar1")}
                    className={`flex cursor-pointer items-center gap-1 left-0 mt-2 ${pathname === "/" ? "text-gray-600" : ""} hover:text-gray-600 transition-colors`}
                    onClick={() => router.push("/")}
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
                  <motion.li
                    onHoverStart={() => increaseBar("bar2")}
                    onHoverEnd={() => decreaseBar("bar2")}
                    className="flex cursor-pointer items-center gap-1 left-0 mt-2 hover:text-gray-600 transition-colors"
                    onClick={() => router.push("experience")}
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
                  <motion.li
                    onClick={() => {}}
                    onHoverStart={() => increaseBar("bar3")}
                    onHoverEnd={() => decreaseBar("bar3")}
                    className="flex cursor-pointer items-center gap-1 left-0 mt-2 hover:text-gray-600 transition-colors"
                    onClick={() => router.push("/projects")}
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
                  <motion.li
                    onClick={() => {}}
                    onHoverStart={() => increaseBar("bar4")}
                    onHoverEnd={() => decreaseBar("bar4")}
                    className="flex cursor-pointer items-center gap-1 left-0 mt-2 hover:text-gray-600 transition-colors"
                    onClick={() => router.push("expertise")}
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
                  <motion.li
                    onClick={() => {}}
                    onHoverStart={() => increaseBar("bar5")}
                    onHoverEnd={() => decreaseBar("bar5")}
                    className="flex cursor-pointer items-center gap-1 left-0 mt-2 hover:text-gray-600 transition-colors"
                    onClick={() => router.push("contact")}
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
                </ol>
                <SVGPath />
              </div>
              <AnimatePresence>{children}</AnimatePresence>
            </div>
          </div>
        </motion.main>
      </body>
    </html>
  );
}
