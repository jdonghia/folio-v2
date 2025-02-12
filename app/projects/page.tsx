"use client";

import { motion } from "motion/react";

export default function Home() {
  return (
    <motion.div
      className="overflow-scroll w-full"
      initial={{ transition: { duration: 0.4, ease: "easeInOut" }, opacity: 0 }}
      animate={{ transition: { duration: 0.4, ease: "easeInOut" }, opacity: 1 }}
    >
      <div className="flex flex-col  mt-20 ml-auto items-center">
        <div className="flex items-center mb-10">
          <p className="text-7xl uppercase font-medium">Claro S.A</p>
          <span className="h-px w-[35.5rem] bg-black block"></span>
        </div>
        <div className="w-8/12 m-auto bg-red-500 h-[40rem]">
          <img
            className="w-full h-full"
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExankzdG01MG5jd3V1MWZ4aHRsdnppaGg0MDM5MXI2cml3czcxcXp2MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/g8V3ttTYJW2tQQyGKL/giphy.gif"
          />
        </div>
      </div>
      <div className="flex flex-col  mt-20 ml-auto items-center">
        <div className="flex items-center">
          <p className="text-7xl uppercase font-medium">JiveMauá</p>
          <span className="h-px w-[36.5rem] bg-black block"></span>
        </div>
        <div className="w-8/12 m-auto bg-red-500 h-[40rem]">
          <img
            className="w-full h-full"
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExankzdG01MG5jd3V1MWZ4aHRsdnppaGg0MDM5MXI2cml3czcxcXp2MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/g8V3ttTYJW2tQQyGKL/giphy.gif"
          />
        </div>
      </div>
      <div className="flex flex-col  mb-20 mt-20 ml-auto items-center">
        <div className="flex items-center">
          <p className="text-7xl uppercase font-medium">Beijaflore</p>
          <span className="h-px w-[32rem] bg-black block"></span>
        </div>
        <div className="w-8/12 m-auto bg-red-500 h-[40rem]">
          <img
            className="w-full h-full"
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExankzdG01MG5jd3V1MWZ4aHRsdnppaGg0MDM5MXI2cml3czcxcXp2MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/g8V3ttTYJW2tQQyGKL/giphy.gif"
          />
        </div>
      </div>
    </motion.div>
  );
}
