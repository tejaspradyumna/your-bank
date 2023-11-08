import React from "react";
import OurProductsSection from "./our-products-section";
import UseCasesSection from "./use-cases-section";
import OurFeaturesSection from "./our-features-section";

export default function OurFeatures() {
  return (
    <div className="p-6">
      <h3 className="text-[38px] text-white font-medium">
        Our <span className="text-[#caff34]">Features</span>
      </h3>
      <div className="flex items-center justify-between">
        <p className="font-light text-[#B3B3B3]">
          Experience a host of powerful features at YourBank, including seamless
          online banking, secure transactions, and personalized financial
          insights, all designed to enhance your banking experience
        </p>
      </div>
      <OurFeaturesSection />
    </div>
  );
}
