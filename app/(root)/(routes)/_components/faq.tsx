import React from "react";
import OurProductsSection from "./our-products-section";
import UseCasesSection from "./use-cases-section";
import OurFeaturesSection from "./our-features-section";
import FAQSection from "./faq-section";

export default function FAQ() {
  return (
    <div className="p-6">
      <h3 className="text-[38px] text-white font-medium">
        <span className="text-[#caff34]">Frequently</span> Asked Questions
      </h3>
      <div className="flex items-center justify-between">
        <p className="font-light text-[#B3B3B3]">
          Still you have any questions? Contact our Team via
          support@yourbank.com
        </p>
      </div>
      <FAQSection />
    </div>
  );
}
