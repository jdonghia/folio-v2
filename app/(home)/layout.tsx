"use client";

import { motion, useAnimate } from "motion/react";
import { usePathname } from "next/navigation";
import { CircleBackground } from "@/app/components/circle-background";
import { TransitionLink } from "@/app/components/utils/transition-link/transition-link";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { RouteContainer } from "../components/shared/route-container";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [scope, animate] = useAnimate();
  const { theme, setTheme } = useTheme();

  const backgroundSvg = {
    home: <CircleBackground />,
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

    if (
      pathname === "/expertise" ||
      pathname === "/projects" ||
      pathname === "/"
    )
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
    <div className="fixed h-screen w-full p-5">
      <div className="relative flex h-full border border-black" ref={scope}>
        <div className="absolute right-0 z-50 m-3 flex gap-2">
          <div
            className="flex items-center gap-1"
            onClick={() => {
              console.log("chamei");
              setTheme("light");
            }}
          >
            <button
            // className={`${theme === "light" ? "border-black bg-black" : ""} size-4 border border-white`}
            ></button>
            <p>light</p>
          </div>
          <div
            onClick={() => setTheme("dark")}
            className="flex items-center gap-1"
          >
            <button
            // className={`${theme === "dark" ? "border-white bg-white" : ""} size-4 border border-black`}
            ></button>
            <p>dark</p>
          </div>
        </div>
        <motion.div
          id="menu"
          className="flex h-full w-6/12 flex-col gap-36 overflow-hidden bg-black transition-colors duration-[2000ms] dark:bg-white"
        >
          <div className="ms-20 mt-10 text-white dark:text-black">
            <p className="text-6xl">
              <span className="font-light">João</span> Donghia
            </p>
            <div className="absolute left-0 mt-2 flex items-center gap-1">
              <span className="block h-px w-80 bg-white"></span>
              <p>Frontend Engineer</p>
            </div>
          </div>

          <ol
            ref={scope}
            className="z-50 ms-8 text-7xl font-bold uppercase text-white dark:text-black"
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
                  className={`left-0 mt-2 flex cursor-pointer items-center gap-1 transition-colors hover:text-gray-600`}
                >
                  <motion.span
                    id={id}
                    className={`block h-px bg-white ${pathname == path && { width: "5rem" }}`}
                  ></motion.span>
                  <p>{name}</p>
                </motion.li>
              </TransitionLink>
            ))}
          </ol>
          <div className="relative w-[40rem]">
            {backgroundSvg[pathname]}
            <CircleBackground />
          </div>
        </motion.div>
        <div
          id="routes"
          className="flex w-[65%] bg-white text-black dark:text-white"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
