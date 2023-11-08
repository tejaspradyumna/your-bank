import Image from "next/image";
import React from "react";

export default function UseCasesSection() {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-2 gap-x-10">
        <div className="relative p-[40px] bg-[#1C1C1C] rounded-[20px]">
          <div className="grid grid-cols-2 gap-3">
            <div
              className="bg-[#1A1A1A] border border-[#262626] rounded-[12px]"
              style={{ zIndex: 10 }}
            >
              <div className="flex flex-col items-center p-[24px] gap-y-2">
                <div className="relative h-[64px] w-[64px]">
                  <Image
                    src="/assets/icons/managing.png"
                    alt="Checking Account Icon"
                    fill
                  />
                </div>
                <h5 className="text-[16px] text-white w-[90%] text-center">
                  Managing Personal Finances
                </h5>
              </div>
            </div>
            <div
              className="bg-[#1A1A1A] border border-[#262626] rounded-[12px]"
              style={{ zIndex: 10 }}
            >
              <div className="flex flex-col items-center p-[24px] gap-y-2">
                <div className="relative h-[64px] w-[64px]">
                  <Image
                    src="/assets/icons/save.png"
                    alt="Checking Account Icon"
                    fill
                  />
                </div>
                <h5 className="text-[16px] text-white w-[90%] text-center">
                  Saving for the Future
                </h5>
              </div>
            </div>
            <div
              className="bg-[#1A1A1A] border border-[#262626] rounded-[12px]"
              style={{ zIndex: 10 }}
            >
              <div className="flex flex-col items-center p-[24px] gap-y-2">
                <div className="relative h-[64px] w-[64px]">
                  <Image
                    src="/assets/icons/home.png"
                    alt="Checking Account Icon"
                    fill
                  />
                </div>
                <h5 className="text-[16px] text-white w-[90%] text-center">
                  Homeownership
                </h5>
              </div>
            </div>
            <div
              className="bg-[#1A1A1A] border border-[#262626] rounded-[12px]"
              style={{ zIndex: 10 }}
            >
              <div className="flex flex-col items-center p-[24px] gap-y-2">
                <div className="relative h-[64px] w-[64px]">
                  <Image
                    src="/assets/icons/education.png"
                    alt="Checking Account Icon"
                    fill
                  />
                </div>
                <h5 className="text-[16px] text-white w-[90%] text-center">
                  Education Funding
                </h5>
              </div>
            </div>
          </div>
          <div style={{ zIndex: 9 }} className="absolute top-0 left-0">
            <div className="relative h-[200px] w-[200px]">
              <Image
                src="/assets/abstract_design2.png"
                alt="Abstract Design"
                fill
                className="absolute"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <h6 className="text-[26px] font-medium text-white">
              For Individuals
            </h6>
            <p className="font-light text-[#B3B3B3]">
              For individuals, our mortgage services pave the way to
              homeownership, and our flexible personal loans provide vital
              support during various life milestones. We also prioritize
              retirement planning, ensuring a financially secure future for our
              customers
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-4 divide-x divide-[#262626] mt-10">
            <div className="flex flex-col items-start pl-5">
              <p className="text-[#caff34] text-[48px]">78%</p>
              <p className="font-light text-[#B3B3B3]">
                Secure Retirement Planning
              </p>
            </div>
            <div className="flex flex-col items-start pl-5">
              <p className="text-[#caff34] text-[48px]">63%</p>
              <p className="font-light text-[#B3B3B3]">
                Manageable Debt Consolidation
              </p>
            </div>
            <div className="flex flex-col items-start pl-5">
              <p className="text-[#caff34] text-[48px]">91%</p>
              <p className="font-light text-[#B3B3B3]">
                Reducing financial burdens
              </p>
            </div>
          </div>
          <button className="px-5 py-3 rounded-full bg-[#1C1C1C] border border-[#262626] mt-10 text-white">
            Learn more
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-10 mt-5">
        <div>
          <div className="flex flex-col">
            <h6 className="text-[26px] font-medium text-white">For Business</h6>
            <p className="font-light text-[#B3B3B3]">
              For businesses, we empower growth with working capital solutions
              that optimize cash flow, and our tailored financing options fuel
              business expansion. Whatever your financial aspirations, YourBank
              is committed to providing the right tools and support to achieve
              them
            </p>
          </div>
          <div className="grid grid-cols-3 gap-x-4 divide-x divide-[#262626] mt-10">
            <div className="flex flex-col items-start pl-5">
              <p className="text-[#caff34] text-[48px]">65%</p>
              <p className="font-light text-[#B3B3B3]">Cash Flow Management</p>
            </div>
            <div className="flex flex-col items-start pl-5">
              <p className="text-[#caff34] text-[48px]">70%</p>
              <p className="font-light text-[#B3B3B3]">
                Drive Business Expansion
              </p>
            </div>
            <div className="flex flex-col items-start pl-5">
              <p className="text-[#caff34] text-[48px]">45%</p>
              <p className="font-light text-[#B3B3B3]">
                Streamline payroll processing
              </p>
            </div>
          </div>
          <button className="px-5 py-3 rounded-full bg-[#1C1C1C] border border-[#262626] mt-10 text-white">
            Learn more
          </button>
        </div>
        <div className="relative p-[40px] bg-[#1C1C1C] rounded-[20px]">
          <div className="grid grid-cols-2 gap-3">
            <div
              className="bg-[#1A1A1A] border border-[#262626] rounded-[12px]"
              style={{ zIndex: 10 }}
            >
              <div className="flex flex-col items-center p-[24px] gap-y-2">
                <div className="relative h-[64px] w-[64px]">
                  <Image
                    src="/assets/icons/managing.png"
                    alt="Checking Account Icon"
                    fill
                  />
                </div>
                <h5 className="text-[16px] text-white w-[90%] text-center">
                  Managing Personal Finances
                </h5>
              </div>
            </div>
            <div
              className="bg-[#1A1A1A] border border-[#262626] rounded-[12px]"
              style={{ zIndex: 10 }}
            >
              <div className="flex flex-col items-center p-[24px] gap-y-2">
                <div className="relative h-[64px] w-[64px]">
                  <Image
                    src="/assets/icons/save.png"
                    alt="Checking Account Icon"
                    fill
                  />
                </div>
                <h5 className="text-[16px] text-white w-[90%] text-center">
                  Saving for the Future
                </h5>
              </div>
            </div>
            <div
              className="bg-[#1A1A1A] border border-[#262626] rounded-[12px]"
              style={{ zIndex: 10 }}
            >
              <div className="flex flex-col items-center p-[24px] gap-y-2">
                <div className="relative h-[64px] w-[64px]">
                  <Image
                    src="/assets/icons/home.png"
                    alt="Checking Account Icon"
                    fill
                  />
                </div>
                <h5 className="text-[16px] text-white w-[90%] text-center">
                  Homeownership
                </h5>
              </div>
            </div>
            <div
              className="bg-[#1A1A1A] border border-[#262626] rounded-[12px]"
              style={{ zIndex: 10 }}
            >
              <div className="flex flex-col items-center p-[24px] gap-y-2">
                <div className="relative h-[64px] w-[64px]">
                  <Image
                    src="/assets/icons/education.png"
                    alt="Checking Account Icon"
                    fill
                  />
                </div>
                <h5 className="text-[16px] text-white w-[90%] text-center">
                  Education Funding
                </h5>
              </div>
            </div>
          </div>
          <div style={{ zIndex: 9 }} className="absolute top-0 right-0">
            <div className="relative h-[200px] w-[200px]">
              <Image
                src="/assets/abstract_design2.png"
                alt="Abstract Design"
                fill
                className="absolute rotate-90"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
