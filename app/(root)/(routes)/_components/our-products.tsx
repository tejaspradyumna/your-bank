import React from "react";
import OurProductsSection from "./our-products-section";

export default function OurProducts() {
  return (
    <div className="p-6">
      <h3 className="text-[38px] text-white font-medium">
        Our <span className="text-[#caff34]">Products</span>
      </h3>
      <div className="flex items-center justify-between">
        <p className="font-light text-[#B3B3B3] w-[60%]">
          Discover a range of comprehensive and customizable banking products at
          YourBank, designed to suit your unique financial needs and aspirations
        </p>
        <div className="flex items-center bg-[#1C1C1C] p-[14px] rounded-full border border-[#262626] gap-x-2">
          <button className="px-[24px] py-[14px] rounded-full bg-[#caff34]">
            For Individuals
          </button>
          <button className="text-white px-[24px] py-[14px] rounded-full hover:bg-[#262626] transition">
            For Businesses
          </button>
        </div>
      </div>
      <OurProductsSection />
    </div>
  );
}
