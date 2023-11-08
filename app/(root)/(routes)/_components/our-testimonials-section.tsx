import Image from "next/image";
import React from "react";

export default function OurTestimonialsSection() {
  return (
    <div className="mt-10 relative">
      <div className="absolute left-0 top-[50%]">
        <button className="relative h-[52px] w-[52px]">
          <Image
            src="/assets/icons/arrow-button.png"
            alt="Arrow"
            fill
            className="absolute rotate-180"
          />
        </button>
      </div>
      <div className="absolute right-0 top-[50%]">
        <button className="relative h-[52px] w-[52px]">
          <Image
            src="/assets/icons/arrow-button.png"
            alt="Arrow"
            fill
            className="absolute"
          />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-x-[40px] px-16">
        <div className="flex flex-col items-center justify-center gap-y-[40px]">
          <div className="relative h-[44px] w-[44px]">
            <Image
              src="/assets/icons/testi.png"
              alt="Icon"
              fill
              className="absolute"
            />
          </div>
          <p className="text-white text-center">
            YourBank has been my trusted financial partner for years. Their
            personalized service and innovative digital banking solutions have
            made managing my finances a breeze.
          </p>
          <h5 className="text-center text-[#caff34]">Sara T</h5>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-[40px]">
          <div className="relative h-[44px] w-[44px]">
            <Image
              src="/assets/icons/testi.png"
              alt="Icon"
              fill
              className="absolute"
            />
          </div>
          <p className="text-white text-center">
            I recently started my own business, and YourBank has been
            instrumental in helping me set up my business accounts and secure
            the financing I needed. Their expert guidance and tailored solutions
            have been invaluable.
          </p>
          <h5 className="text-center text-[#caff34]">John D</h5>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-[40px]">
          <div className="relative h-[44px] w-[44px]">
            <Image
              src="/assets/icons/testi.png"
              alt="Icon"
              fill
              className="absolute"
            />
          </div>
          <p className="text-white text-center">
            I love the convenience of YourBank&apos;s mobile banking app. It
            allows me to stay on top of my finances and make transactions on the
            go. The app is user-friendly and secure, giving me peace of mind.
          </p>
          <h5 className="text-center text-[#caff34]">Emily G</h5>
        </div>
      </div>
    </div>
  );
}
