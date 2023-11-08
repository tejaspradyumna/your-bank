import React from "react";
import OurProductsSection from "./our-products-section";
import UseCasesSection from "./use-cases-section";

export default function UseCases() {
  return (
    <div className="p-6">
      <h3 className="text-[38px] text-white font-medium">
        <span className="text-[#caff34]">Use Cases</span>
      </h3>
      <div className="flex items-center justify-between">
        <p className="font-light text-[#B3B3B3]">
          At YourBank, we cater to the diverse needs of individuals and
          businesses alike, offering a wide range of financial solutions
        </p>
      </div>
      <UseCasesSection />
    </div>
  );
}
