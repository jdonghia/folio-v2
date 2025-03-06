"use client";

import { AnimatePresence, motion, useAnimate } from "motion/react";
import { usePathname } from "next/navigation";
import { CircleBackground } from "@/app/components/circle-background";
import { TransitionLink } from "@/app/components/utils/transition-link/transition-link";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { CrystalBackground } from "../components/crystal-background";
import { ReactBackground } from "../components/react-background";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [scope, animate] = useAnimate();
  const { setTheme } = useTheme();

  const backgroundSvg = {
    "/": <CircleBackground />,
    "/experience/": <CrystalBackground />,
    "/projects/": <CircleBackground />,
    "/expertise/": <ReactBackground />,
    "/contact/": <CircleBackground />,
  };

  const menuItems = [
    { id: "home", path: "/", name: "Home" },
    { id: "experience", path: "/experience/", name: "Experience" },
    { id: "projects", path: "/projects/", name: "Projects" },
    { id: "expertise", path: "/expertise/", name: "Expertise" },
    { id: "contact", path: "/contact/", name: "Contact" },
  ];

  useEffect(() => {
    console.log(pathname);
    if (pathname) {
      handleMenuRouteChangeAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleMenuRouteChangeAnimation = () => {
    if (window.innerWidth <= 640) return;
    let routeMenuSize = "35%";

    if (
      pathname === "/projects/" ||
      pathname === "/" ||
      pathname === "/contact/"
    )
      routeMenuSize = "60%";

    animate("#menu", { width: routeMenuSize }, { ease: "easeInOut", delay: 0 });
  };

  const handleMenuItemAnimation = ({
    currentItem,
    hovered,
  }: {
    hovered: boolean;
    currentItem: string;
  }) => {
    let itemMenuSize = "0";

    if (hovered) {
      itemMenuSize = "5rem";
    }

    animate(`#${currentItem}`, { width: itemMenuSize });
  };

  return (
    <div className="z-50 size-full">
      <div className="absolute bottom-0 right-7 z-50 m-3 flex gap-2 text-sm uppercase">
        <div className="flex items-center gap-1">
          <p className="">João Donghia</p>

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 15.5H14C14.142 15.5 14.2607 15.452 14.356 15.356C14.4513 15.26 14.4993 15.1413 14.5 15V13.5H13.5V14.5H10.5V9.5H13.5V10.5H14.5V9C14.5 8.85733 14.452 8.73833 14.356 8.643C14.26 8.54767 14.1413 8.5 14 8.5H10C9.858 8.5 9.73933 8.548 9.644 8.644C9.54867 8.74 9.50067 8.85867 9.5 9V15C9.5 15.142 9.548 15.2607 9.644 15.356C9.74 15.4513 9.85867 15.4993 10 15.5ZM12.003 21C10.7583 21 9.58833 20.764 8.493 20.292C7.39767 19.8193 6.44467 19.178 5.634 18.368C4.82333 17.558 4.18167 16.606 3.709 15.512C3.23633 14.418 3 13.2483 3 12.003C3 10.7577 3.23633 9.58767 3.709 8.493C4.181 7.39767 4.82133 6.44467 5.63 5.634C6.43867 4.82333 7.391 4.18167 8.487 3.709C9.583 3.23633 10.753 3 11.997 3C13.241 3 14.411 3.23633 15.507 3.709C16.6023 4.181 17.5553 4.82167 18.366 5.631C19.1767 6.44033 19.8183 7.39267 20.291 8.488C20.7637 9.58333 21 10.753 21 11.997C21 13.241 20.764 14.411 20.292 15.507C19.82 16.603 19.1787 17.556 18.368 18.366C17.5573 19.176 16.6053 19.8177 15.512 20.291C14.4187 20.7643 13.249 21.0007 12.003 21ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
              fill="black"
              className="fill-eerie transition-colors duration-500 dark:fill-powder"
            />
          </svg>
        </div>
      </div>
      <div className="absolute left-7 top-0 z-50 m-3 flex gap-2 uppercase tracking-wider">
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
      <div className="fixed h-screen w-full p-10 max-sm:p-5">
        <div
          className="relative flex h-full border border-eerie transition-colors duration-500 dark:border-powder max-[640px]:flex-col"
          ref={scope}
        >
          {/* <div className="absolute z-50 size-full bg-texture"></div> */}
          <motion.div
            id="menu"
            className={`relative flex h-full max-[640px]:h-1/3 max-[640px]:w-full max-[640px]:border-b ${pathname == "/experience/" || pathname == "/expertise/" ? "w-[35%]" : "w-3/5"} flex-col gap-36 overflow-hidden border-e  border-eerie bg-powder bg-texture transition-colors duration-500 dark:border-powder dark:bg-eerie max-[640px]:gap-0`}
          >
            <div className="mt-10 flex w-11/12 flex-col items-end uppercase  text-kakhi transition-colors duration-500 max-[640px]:mt-4">
              <p className="text-6xl font-bold max-[1536px]:text-5xl max-[640px]:text-3xl">
                <span className="font-medium">João</span> Donghia
              </p>
              <div className="mt-2 flex w-full items-center gap-1 text-end">
                <span className="me-10 block h-px w-full  bg-kakhi transition-colors duration-500"></span>
                <p
                  style={{ transition: "color 150ms" }}
                  className="w-5/12 whitespace-nowrap text-xl text-eerie dark:text-powder max-[1536px]:text-lg max-[640px]:text-sm"
                >
                  Frontend Engineer
                </p>
              </div>
            </div>

            <ol
              ref={scope}
              className="z-50 text-6xl font-bold uppercase text-eerie max-[1536px]:text-5xl max-[640px]:text-3xl"
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
                    className={`left-0 mt-2 flex w-fit items-center gap-1 transition-colors duration-500 max-[640px]:mt-0`}
                  >
                    <motion.span
                      id={id}
                      className={`me-5 block h-px bg-kakhi`}
                    ></motion.span>
                    <p
                      className={`inline-block cursor-pointer transition-colors duration-500 hover:text-kakhi  dark:hover:text-kakhi ${pathname == path ? "text-kakhi dark:text-kakhi" : "dark:text-powder"}`}
                    >
                      {name}
                    </p>
                  </motion.li>
                </TransitionLink>
              ))}
            </ol>
            <div className="size-full">
              <AnimatePresence>
                {backgroundSvg[pathname as keyof typeof backgroundSvg] || null}
              </AnimatePresence>
            </div>
          </motion.div>
          <div className="flex w-[65%] bg-powder text-eerie dark:bg-eerie dark:text-powder max-[640px]:h-2/3 max-[640px]:w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
