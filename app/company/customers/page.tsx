"use client";

import { useRef } from "react";
import FadeInTextBlock from "@/app/components/common/FadeInTextBlock";
import SlideFadeWrapper from "@/app/components/common/SlideFadeWrapper";
import Image from "next/image";
import clients from "@/data/clients.json";
import GradiantTag from "@/app/components/common/GradiantTag";
import CustomerShowcase from "@/app/components/customers/CustomerShowcase";
import { LogosGrid } from "@/app/components/customers/LogosGrid";
import ScrollReveal from "@/app/components/common/ScrollReveal";
import GradiantBorderTag from "@/app/components/common/GradiantBorderTag";
import { LetsTalkButton } from "@/app/components/common/LetsTalkButton";
import { BookADemoButton } from "@/app/components/common/BookADemoButton";
// import { useRouter } from "next/navigation";

export default function Customers() {
  // const router = useRouter();
  // const handleViewMore = (url: string) => {
  //   router.push(url);
  // };

  const customerStoriesRef = useRef<HTMLDivElement>(null);

  const scrollToCustomerStories = () => {
    customerStoriesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col">
      {/* Overview */}
      <div
        id="overview"
        className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-6"
      >
        <div className="flex flex-col md:mr-8 items-center md:items-start mt-6 md:mt-0">
          <GradiantBorderTag title={"Customers"} />
          <FadeInTextBlock
            title="Our clients, our shared success in seamless digital finance"
            description="We offer digital solutions to enhance financial experiences for startups and established institutions, seeking current and potential partners to contribute to our future."
            titleStyle="text-[32px] md:text-5xl font-bold text-black mt-3 md:mt-6 text-center md:text-start"
            descStyle="text-center md:text-start -mt-3 md:mt-0"
          />
          <div className="hidden md:block flex-row mt-8">
            <button
              onClick={scrollToCustomerStories}
              className="px-4 py-3 bg-[#158D54] text-white font-normal text-lg rounded-full w-[227px] max-w-[227px] mr-4 mb-4"
            >
              Read customer stories
            </button>
          </div>
          <div className="md:hidden flex-row mt-8 w-full">
            <LetsTalkButton btnStyle="px-4 py-3 bg-[#158D54] text-white font-normal text-[14px] md:text-lg rounded-full w-full md:w-[227px] md:max-w-[227px] md:mr-4 mb-4 cursor-pointer" />
            <BookADemoButton btnStyle="px-4 py-3 bg-white text-[#158D54] font-normal text-[14px] md:text-lg rounded-full w-full md:w-[227px] md:max-w-[227px] border-1 border-[#158D54] cursor-pointer -mt-1 md:mt-0" />
          </div>
        </div>
        <SlideFadeWrapper
          keyId="company-customers"
          className="hidden md:block w-full mt-10 min-h-[500px]"
        >
          <Image
            src="/images/company-customers/customers-overview.png"
            alt="Logo"
            width={987}
            height={740}
            className="w-full min-h-[500px] rounded-4xl object-cover"
          />
        </SlideFadeWrapper>
      </div>

      {/* Logos */}
      <ScrollReveal>
        <div className="flex flex-wrap justify-between md:gap-x-[131px] mt-0 md:mt-32">
          <LogosGrid clients={clients} />
        </div>
      </ScrollReveal>

      {/* Customer Stories */}
      <ScrollReveal>
        <div
          id="features"
          ref={customerStoriesRef}
          className="flex flex-col items-center mt-8 md:my-32 md:scroll-m-20"
        >
          <GradiantTag title="Customer stories" />
          <p className="font-semibold md:font-bold text-[22px] md:text-4xl text-black mt-3 md:mt-5">
            Stories that speaks results
          </p>
          <CustomerShowcase />
        </div>
      </ScrollReveal>
    </div>
  );
}
