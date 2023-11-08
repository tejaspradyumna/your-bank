import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#1C1C1C] mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center p-[60px]">
          <div className="relative h-[34px] w-[132px]">
            <Image
              className="absolute"
              src="/assets/logo.png"
              alt="Logo"
              fill
            />
          </div>
          <ul className="flex items-center gap-x-4 mt-10 text-white font-light mb-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Careers</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Security</Link>
            </li>
          </ul>
          <div className="py-[40px] border-y border-[#262626] w-full flex items-center justify-center gap-x-10 text-white font-light">
            <p className="flex items-center">
              <div className="relative h-[20px] w-[20px] mr-2">
                <Image
                  className="absolute"
                  fill
                  src="/assets/icons/mail.png"
                  alt="Mail"
                />
              </div>
              hello@skillbirdge.com
            </p>
            <p className="flex items-center">
              <div className="relative h-[20px] w-[20px] mr-2">
                <Image
                  className="absolute"
                  fill
                  src="/assets/icons/phone.png"
                  alt="Phone"
                />
              </div>
              +91 91813 23 2309
            </p>
            <p className="flex items-center">
              <div className="relative h-[20px] w-[20px] mr-2">
                <Image
                  className="absolute"
                  fill
                  src="/assets/icons/location.png"
                  alt="Location"
                />
              </div>
              Somewhere in the World
            </p>
          </div>
          <div className="flex items-center justify-between bg-[#1C1C1C] py-[12px] pr-[24px] pl-3 rounded-full border border-[#262626] gap-x-2 mt-10 w-full">
            <div className="flex items-center gap-x-2">
              <div className="relative h-[44px] w-[44px]">
                <Image
                  src="/assets/icons/facebook.png"
                  alt="FaceBook"
                  fill
                  className="absolute"
                />
              </div>
              <div className="relative h-[44px] w-[44px]">
                <Image
                  src="/assets/icons/twitter.png"
                  alt="Twitter"
                  fill
                  className="absolute"
                />
              </div>
              <div className="relative h-[44px] w-[44px]">
                <Image
                  src="/assets/icons/linkedin.png"
                  alt="LinkedIn"
                  fill
                  className="absolute"
                />
              </div>
            </div>
            <div>
              <p className="font-light text-[#B3B3B3] text-[14px]">
                YourBank All Rights Reserved
              </p>
            </div>
            <div>
              <p className="font-light text-[#B3B3B3] text-[14px]">
                Privacy Policy | Terms of Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
