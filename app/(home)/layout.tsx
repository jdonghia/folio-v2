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
    <div className="relative size-full">
      <div className="absolute left-7 top-0 z-50 m-3 flex gap-2 uppercase tracking-widest">
        <div className="flex items-center gap-1">
          <button
            onClick={() => {
              setTheme("light");
            }}
            className={`size-4 border border-eerie bg-black dark:border-powder`}
          ></button>
          <p>vivace</p>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setTheme("dark")}
            className={`size-4 border border-black dark:bg-powder`}
          ></button>
          <p>adagio</p>
        </div>
      </div>
      <div className="fixed h-screen w-full p-10">
        <div
          className="relative flex h-full border border-eerie transition-colors duration-1000 dark:border-powder"
          ref={scope}
        >
          {/* <div className="absolute z-50 size-full bg-texture"></div> */}
          <motion.div
            id="menu"
            className="flex h-full w-3/5 flex-col gap-36 overflow-hidden  border-e border-eerie bg-powder bg-texture transition-colors duration-1000 dark:border-powder dark:bg-eerie"
          >
            <div className="mr-auto mt-10 flex w-[35rem] flex-col items-end  uppercase text-kakhi transition-colors duration-1000">
              <p className="ps-20 text-6xl font-bold">
                <span className="font-medium">João</span> Donghia
              </p>
              <div className="mt-2 flex w-full items-center gap-1 text-end">
                <span className="block h-px w-7/12  bg-kakhi transition-colors duration-1000"></span>
                <p className="trasition-colors w-5/12 text-xl text-eerie duration-[1500ms] dark:text-powder">
                  Frontend Engineer
                </p>
              </div>
            </div>

            <ol
              ref={scope}
              className="z-50 ms-8 text-6xl font-bold uppercase text-eerie"
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
                    className={`left-0 mt-2 flex w-fit items-center gap-1 transition-colors duration-1000`}
                  >
                    <motion.span
                      id={id}
                      className={`me-5 block h-px bg-kakhi ${pathname == path && { width: "5rem" }}`}
                    ></motion.span>
                    <p
                      className={`inline-block cursor-pointer transition-colors duration-500 hover:text-kakhi dark:text-powder dark:hover:text-kakhi ${pathname == path && "text-kakhi dark:text-kakhi"}`}
                    >
                      {name}
                    </p>
                  </motion.li>
                </TransitionLink>
              ))}
            </ol>
            <div className="w-[40rem]">
              <AnimatePresence>
                {backgroundSvg[pathname] || null}
              </AnimatePresence>
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
    </div>
  );
}
