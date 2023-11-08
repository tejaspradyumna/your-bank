import Image from "next/image";
import React from "react";

export default function OurFeaturesSection() {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-12 gap-x-4">
        <div className="col-span-3 bg-[#1C1C1C] flex flex-col items-center justify-center w-full px-14 gap-y-4 py-4  rounded-[10px]">
          <button className="px-5 py-3 rounded-full bg-[#1A1A1A] border border-[#262626] text-[#caff34] w-full">
            Online Banking
          </button>
          <button className="px-5 py-3 rounded-full bg-[#1C1C1C] border border-[#262626] text-white w-full">
            Financial Tools
          </button>
          <button className="px-5 py-3 rounded-full bg-[#1C1C1C] border border-[#262626] text-white w-full">
            Customer Support
          </button>
        </div>
        <div className="col-span-9 grid grid-cols-2 gap-4">
          <div className="bg-[#1C1C1C] p-[40px] border border-[#262626] rounded-[10px]">
            <div className="flex items-center justify-between">
              <p className="text-[18px] text-white">24/7 Account Access</p>
              <div className="relative h-[24px] w-[24px]">
                <Image
                  src="/assets/icons/external.png"
                  alt="External"
                  fill
                  className="absolute"
                />
              </div>
            </div>
            <p className="font-light text-[#B3B3B3] mt-10">
              Enjoy the convenience of accessing your accounts anytime, anywhere
              through our secure online banking platform. Check balances,
              transfer funds, and pay bills with ease.
            </p>
          </div>
          <div className="bg-[#1C1C1C] p-[40px] border border-[#262626] rounded-[10px]">
            <div className="flex items-center justify-between">
              <p className="text-[18px] text-white">Mobile Banking App</p>
              <div className="relative h-[24px] w-[24px]">
                <Image
                  src="/assets/icons/external.png"
                  alt="External"
                  fill
                  className="absolute"
                />
              </div>
            </div>
            <p className="font-light text-[#B3B3B3] mt-10">
              Stay connected to your finances on the go with our user-friendly
              mobile banking app. Easily manage your accounts, deposit checks,
              and make payments from your smartphone or tablet.
            </p>
          </div>
          <div className="bg-[#1C1C1C] p-[40px] border border-[#262626] rounded-[10px]">
            <div className="flex items-center justify-between">
              <p className="text-[18px] text-white">Secure Transactions</p>
              <div className="relative h-[24px] w-[24px]">
                <Image
                  src="/assets/icons/external.png"
                  alt="External"
                  fill
                  className="absolute"
                />
              </div>
            </div>
            <p className="font-light text-[#B3B3B3] mt-10">
              Rest assured knowing that your transactions are protected by
              industry-leading security measures. We employ encryption and
              multi-factor authentication to safeguard your financial
              information.
            </p>
          </div>
          <div className="bg-[#1C1C1C] p-[40px] border border-[#262626] rounded-[10px]">
            <div className="flex items-center justify-between">
              <p className="text-[18px] text-white">Bill Pay and Transfers</p>
              <div className="relative h-[24px] w-[24px]">
                <Image
                  src="/assets/icons/external.png"
                  alt="External"
                  fill
                  className="absolute"
                />
              </div>
            </div>
            <p className="font-light text-[#B3B3B3] mt-10">
              Save time and avoid late fees with our convenient bill pay
              service. Set up recurring payments or make one-time transfers
              between your accounts with just a few clicks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
