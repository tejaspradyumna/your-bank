import React from "react";
import OurTestimonialsSection from "./our-testimonials-section";

export default function OurTestimonials() {
  return (
    <div className="p-6">
      <h3 className="text-[38px] text-white font-medium">
        Our <span className="text-[#caff34]">Testimonials</span>
      </h3>
      <div className="flex items-center justify-between">
        <p className="font-light text-[#B3B3B3] w-[60%]">
          Discover how YourBank has transformed lives with innovative digital
          solutions and personalized customer service. See why our clients trust
          us for a secure and prosperous financial journey
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
      <OurTestimonialsSection />
    </div>
  );
}
