import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex items-center p-6">
      <div className="flex flex-col items-start gap-y-2">
        <div className="bg-[#262626] flex items-center rounded-full px-[16px] py-[8px]">
          <div className="relative h-[20px] w-[20px]">
            <Image src="/assets/icons/check.png" alt="Check Icon" fill />
          </div>
          <p className="text-white ml-2">No LLC Required, No Credit Check.</p>
        </div>
        <div className="w-[80%]">
          <h1 className="text-[38px] text-white font-medium">
            Welcome to YourBank Empowering Your{" "}
            <span className="text-[#caff34]">Financial Journey</span>
          </h1>
          <p className="font-light text-[#B3B3B3]">
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers&apos; needs.
          </p>
        </div>
        <div className="mt-10">
          <button className="px-5 py-3 rounded-full bg-[#caff34]">
            Open Account
          </button>
        </div>
      </div>
      <div>
        <div className="relative h-[606px] w-[501px]">
          <Image src="/assets/hero_section.png" alt="Hero Section Image" fill />
        </div>
      </div>
    </div>
  );
}
