"use client";

import { AnimatePresence, motion, useAnimate } from "motion/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { CircleBackground } from "@/app/components/circle-background";
import { TransitionLink } from "@/app/components/utils/transition-link/transition-link";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { RouteContainer } from "../components/shared/route-container";
import { Circle, CrystalBackground } from "../components/crystal-background";
import { ReactBackground } from "../components/react-background";
import textureMask from "@/app/assets/imgs/texture.png";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [scope, animate] = useAnimate();
  const { theme, setTheme } = useTheme();

  const backgroundSvg = {
    "/": <CircleBackground />,
    "/experience": <CrystalBackground />,
    "/projects": <CircleBackground />,
    "/expertise": <ReactBackground />,
    "/contact": <CircleBackground />,
  };

  const menuItems = [
    { id: "home", path: "/", name: "Home" },
    { id: "experience", path: "/experience", name: "Experience" },
    { id: "projects", path: "/projects", name: "Projects" },
    { id: "expertise", path: "/expertise", name: "Expertise" },
    { id: "contact", path: "/contact", name: "Contact" },
  ];

  useEffect(() => {
    if (pathname) {
      handleMenuRouteChangeAnimation();
    }
  }, [pathname]);

  const handleMenuRouteChangeAnimation = () => {
    let routeMenuSize = "35%";

    if (pathname === "/projects" || pathname === "/" || pathname === "/contact")
      routeMenuSize = "60%";

    animate("#menu", { width: routeMenuSize }, { ease: "easeInOut", delay: 0 });
  };

  const handleMenuItemAnimation = ({ currentItem, hovered }) => {
    let itemMenuSize = "0";

    if (hovered) {
      itemMenuSize = "5rem";
    }

    animate(`#${currentItem}`, { width: itemMenuSize });
  };

  return (
    <div className="fixed h-screen w-full p-10">
      <div
        className="relative flex h-full border border-eerie transition-colors duration-[1500ms] dark:border-powder"
        ref={scope}
      >
        {/* <div className="absolute z-50 size-full bg-texture"></div> */}
        <div className="absolute right-0 z-50 m-3 flex gap-2">
          <div
            className="flex items-center gap-1"
            onClick={() => {
              setTheme("light");
            }}
          >
            <button
              className={`transition-colors duration-[1500ms] ${theme === "light" ? "border-eerie bg-black" : ""} border-powde size-4 border`}
            ></button>
            <p>vivace</p>
          </div>
          <div
            onClick={() => setTheme("dark")}
            className="flex items-center gap-1"
          >
            <button
              className={`transition-colors duration-[1500ms] ${theme === "dark" ? "border-powder bg-powder" : ""} size-4 border border-black`}
            ></button>
            <p>adagio</p>
          </div>
        </div>
        <motion.div
          id="menu"
          className="flex h-full w-3/5 flex-col gap-36 overflow-hidden  border-e border-eerie bg-powder bg-texture transition-colors duration-[1500ms] dark:border-powder dark:bg-eerie"
        >
          <div className="ms-20 mt-10 uppercase text-kakhi transition-colors duration-[1500ms]">
            <p className="text-6xl">
              <span className="font-light">João</span> Donghia
            </p>
            <div className="absolute left-0 mt-2 flex items-center gap-1">
              <span className="block h-px w-[21rem] bg-kakhi dark:bg-powder"></span>
              <p>Frontend Engineer</p>
            </div>
          </div>

          <ol
            ref={scope}
            className="z-50 ms-8 text-7xl font-bold uppercase text-eerie"
          >
            {menuItems.map(({ id, path, name }) => (
              <TransitionLink key={id} href={path}>
                <motion.li
                  onHoverStart={() =>
                    handleMenuItemAnimation({
                      currentItem: id,
                      hovered: true,
                    })
                  }
                  onHoverEnd={() =>
                    handleMenuItemAnimation({
                      currentItem: id,
                      hovered: false,
                    })
                  }
                  className={`left-0 mt-2 flex w-fit items-center gap-1 transition-colors duration-[1500ms]`}
                >
                  <motion.span
                    id={id}
                    className={`block h-px bg-eerie dark:bg-powder ${pathname == path && { width: "5rem" }}`}
                  ></motion.span>
                  <p
                    className={`${pathname == path && "text-kakhi"} inline-block cursor-pointer transition-colors duration-500 hover:text-kakhi dark:text-powder dark:hover:text-kakhi`}
                  >
                    {name}
                  </p>
                </motion.li>
              </TransitionLink>
            ))}
          </ol>
          <div className="w-[40rem]">
            <AnimatePresence>{backgroundSvg[pathname] || null}</AnimatePresence>
          </div>
        </motion.div>
        <div
          // id="routes"
          className="flex w-[65%] bg-powder text-eerie dark:bg-eerie dark:text-powder"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
