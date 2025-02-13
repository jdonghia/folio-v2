"use client";

import { RouteContainer } from "@/app/components/shared/route-container";

export default function Projects() {
  return (
    <RouteContainer>
      <div className="ml-auto mt-20  flex flex-col items-center">
        <div className="mb-10 flex items-center">
          <p className="text-7xl font-medium uppercase">Claro S.A</p>
          <span className="block h-px w-[35.5rem] bg-black"></span>
        </div>
        <div className="m-auto h-[40rem] w-8/12 bg-red-500">
          <img
            className="size-full"
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExankzdG01MG5jd3V1MWZ4aHRsdnppaGg0MDM5MXI2cml3czcxcXp2MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/g8V3ttTYJW2tQQyGKL/giphy.gif"
          />
        </div>
      </div>
      <div className="ml-auto mt-20  flex flex-col items-center">
        <div className="flex items-center">
          <p className="text-7xl font-medium uppercase">JiveMauá</p>
          <span className="block h-px w-[36.5rem] bg-black"></span>
        </div>
        <div className="m-auto h-[40rem] w-8/12 bg-red-500">
          <img
            className="size-full"
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExankzdG01MG5jd3V1MWZ4aHRsdnppaGg0MDM5MXI2cml3czcxcXp2MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/g8V3ttTYJW2tQQyGKL/giphy.gif"
          />
        </div>
      </div>
      <div className="my-20 ml-auto  flex flex-col items-center">
        <div className="flex items-center">
          <p className="text-7xl font-medium uppercase">Beijaflore</p>
          <span className="block h-px w-[32rem] bg-black"></span>
        </div>
        <div className="m-auto h-[40rem] w-8/12 bg-red-500">
          <img
            className="size-full"
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExankzdG01MG5jd3V1MWZ4aHRsdnppaGg0MDM5MXI2cml3czcxcXp2MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/g8V3ttTYJW2tQQyGKL/giphy.gif"
          />
        </div>
      </div>
    </RouteContainer>
  );
}
