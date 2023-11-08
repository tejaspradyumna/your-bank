import Image from "next/image";
import React from "react";

export default function OurProductsSection() {
  return (
    <div className="flex gap-x-3 divide-x divide-[#262626] mt-10">
      <div className="flex flex-col items-center gap-y-4 p-4">
        <div className="relative h-[72px] w-[72px]">
          <Image
            src="/assets/icons/checking_accounts.png"
            alt="Checking Account Icon"
            fill
          />
        </div>
        <h4 className="text-[20px] text-white">Checking Accounts</h4>
        <p className="font-light text-[#B3B3B3] text-center">
          Enjoy easy and convenient access to your funds with our range of
          checking account options. Benefit from features such as online and
          mobile banking, debit cards, and free ATM access.
        </p>
      </div>
      <div className="flex flex-col items-center gap-y-4 p-4">
        <div className="relative h-[72px] w-[72px]">
          <Image
            src="/assets/icons/savings_account.png"
            alt="Checking Account Icon"
            fill
          />
        </div>
        <h4 className="text-[20px] text-white">Savings Accounts</h4>
        <p className="font-light text-[#B3B3B3] text-center">
          Build your savings with our competitive interest rates and flexible
          savings account options. Whether you're saving for a specific goal or
          want to grow your wealth over time, we have the right account for you.
        </p>
      </div>
      <div className="flex flex-col items-center gap-y-4 p-4">
        <div className="relative h-[72px] w-[72px]">
          <Image
            src="/assets/icons/loans.png"
            alt="Checking Account Icon"
            fill
          />
        </div>
        <h4 className="text-[20px] text-white">Loans and Mortgages</h4>
        <p className="font-light text-[#B3B3B3] text-center">
          Realize your dreams with our flexible loan and mortgage options. From
          personal loans to home mortgages, our experienced loan officers are
          here to guide you through the application process and help you secure
          the funds you need.
        </p>
      </div>
    </div>
  );
}
