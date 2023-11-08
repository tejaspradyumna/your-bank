import Image from "next/image";
import React from "react";

export default function FAQSection() {
  return (
    <div className="mt-10">
      <div className="col-span-9 grid grid-cols-2 gap-4">
        <div className="bg-[#1A1A1A] p-[40px] border border-[#262626] rounded-[10px] flex flex-col divide-y divide-[#262626]">
          <div className="flex items-center justify-between pb-5">
            <p className="text-[18px] text-white">
              How do I open an account with YourBank?
            </p>
          </div>
          <p className="font-light text-[#B3B3B3] pt-5">
            Opening an account with YourBank is easy. Simply visit our website
            and click on the &quot;Open an Account&quot; button. Follow the
            prompts, provide the required information, and complete the
            application process. If you have any questions or need assistance,
            our customer support team is available to help.
          </p>
        </div>
        <div className="bg-[#1A1A1A] p-[40px] border border-[#262626] rounded-[10px] flex flex-col divide-y divide-[#262626]">
          <div className="flex items-center justify-between pb-5">
            <p className="text-[18px] text-white">
              What documents do I need to provide to apply for a loan?
            </p>
          </div>
          <p className="font-light text-[#B3B3B3] pt-5">
            The documents required for a loan application may vary depending on
            the type of loan you are applying for. Generally, you will need to
            provide identification documents (such as a passport or
            driver&apos;s license), proof of income (such as pay stubs or tax
            returns), and information about the collateral (if applicable). Our
            loan officers will guide you through the specific requirements
            during the application process.
          </p>
        </div>
        <div className="bg-[#1A1A1A] p-[40px] border border-[#262626] rounded-[10px] flex flex-col divide-y divide-[#262626]">
          <div className="flex items-center justify-between pb-5">
            <p className="text-[18px] text-white">
              How can I access my accounts online?
            </p>
          </div>
          <p className="font-light text-[#B3B3B3] pt-5">
            Accessing your accounts online is simple and secure. Visit our
            website and click on the &quot;Login&quot; button. Enter your
            username and password to access your accounts. If you haven&apos;t
            registered for online banking, click on the &quot;Enroll Now&quot;
            button and follow the registration process. If you need assistance,
            our customer support team is available to guide you.
          </p>
        </div>
        <div className="bg-[#1A1A1A] p-[40px] border border-[#262626] rounded-[10px] flex flex-col divide-y divide-[#262626]">
          <div className="flex items-center justify-between pb-5">
            <p className="text-[18px] text-white">
              Are my transactions and personal information secure?
            </p>
          </div>
          <p className="font-light text-[#B3B3B3] pt-5">
            At YourBank, we prioritize the security of your transactions and
            personal information. We employ industry-leading encryption and
            multi-factor authentication to ensure that your data is protected.
            Additionally, we regularly update our security measures to stay
            ahead of emerging threats. You can bank with confidence knowing that
            we have robust security systems in place.
          </p>
        </div>
      </div>
      <div className="flex items-center w-full justify-center">
        <button className="px-5 py-3 rounded-full bg-[#1C1C1C] border border-[#262626] mt-10 text-white flex items-center gap-x-2">
          Learn All FAQ&apos;s
          <div className="relative h-[18px] w-[18px]">
            <Image
              src="/assets/icons/chevron-down.png"
              alt="Chevron Down"
              fill
              className="absolute"
            />
          </div>
        </button>
      </div>
    </div>
  );
}
