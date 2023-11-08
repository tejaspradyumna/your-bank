import Image from "next/image";
import React from "react";

export default function GetStarted() {
  return (
    <div className="mt-10">
      <div className="bg-[#1C1C1C] rounded-[20px] p-[60px] relative border border-[#262626]">
        <div className="absolute top-0 left-0">
          <div className="relative h-[200px] w-[200px]">
            <Image
              src="/assets/abstract_design2.png"
              alt="Abstract Design"
              fill
              className="absolute"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            <h4 className="text-[30px] text-white">
              Start your financial journey with
              <span className="text-[#caff34]"> YourBank today!</span>
            </h4>
            <p className="font-light text-[#B3B3B3] w-[80%]">
              Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus
              pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus.
              Nascetur viverra arcu sed amet cursus purus.
            </p>
          </div>
          <div className="w-[20%]">
            <button className="px-5 py-3 rounded-full bg-[#caff34]">
              Open Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
