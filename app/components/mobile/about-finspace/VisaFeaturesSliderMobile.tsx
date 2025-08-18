"use client";

import { Feature } from "@/types/products";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeInTextBlock from "../../common/FadeInTextBlock";
import SlideFadeWrapper from "../../common/SlideFadeWrapper";

const features = [
  {
    id: 1,
    name: "Smart Payment Panel",
    description: "Visa Secure Checkout Enhancer",
    image: "/images/company-customers/visa/features/feature-1.png",
    challenge:
      "Improve conversion and reduce cart abandonment in high-volume e-commerce flows.",
    solution: [
      "Auto-detects best payment methods",
      "Integrates real-time fraud detection",
      "Enables one-click authentication",
    ],
    steps: [
      { id: 1, title: "20%", description: "faster transactions" },
      { id: 2, title: "15%", description: "higher conversion rates" },
      { id: 3, title: "Happier users", description: "every time" },
    ],
  },
  {
    id: 2,
    name: "AI-Driven Payment Panel Engine",
    description: "Visa’s Data Intelligence Hub",
    image: "/images/company-customers/visa/features/feature-2.png",
    challenge: "Turn raw user behavior into actionable business intelligence.",
    solution: [
      "Collects and links metadata, wallet, and user activity",
      "Delivers real-time insights via graphical dashboards",
      "Recommends strategic decisions for product growth",
    ],
    steps: [
      { id: 1, title: "Better", description: "leadership decisions" },
      { id: 2, title: "Improved", description: "platform usability" },
      {
        id: 3,
        title: "Discovery",
        description: "of every untapped markets and partners",
      },
    ],
  },
  {
    id: 3,
    name: "SAIV – Micro Lending Platform for Financial Inclusion",
    description: "Empowering Communities Across Africa",
    image: "/images/company-customers/visa/features/feature-3.png",
    challenge:
      "Digitize informal savings and lending systems for unbanked populations.",
    solution: [
      "Encrypted group chat and peer-to-peer lending",
      "Transparent group savings with automated tracking",
      "Fast, secure onboarding within 10 weeks",
    ],
  },
];

export default function VisaFeaturesSliderMobile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const switchFeature = (index: number) => {
    setActiveIndex(index);

    // Reset auto-slide timer on manual tab switch
    if (timerRef.current) clearInterval(timerRef.current);
    startAutoSlide();
  };

  const startAutoSlide = () => {
    timerRef.current = setInterval(() => {
      // setActiveIndex((prev) => (prev + 1) % features.length);
    }, 5000);
  };

  // Auto-scroll active tab into view
  useEffect(() => {
    tabRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex]);

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const current = features[activeIndex];

  return (
    <div className="flex flex-col items-center mt-6 overflow-x-hidden overflow-y-auto">
      {/* Tabs */}
      <div className="overflow-hidden w-full">
        {/* Scrollable Row */}
        <div className="flex flex-row gap-8 border-b rounded-lg overflow-x-auto no-scrollbar px-4">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              onClick={() => switchFeature(index)}
              className={`py-2 text-[14px] font-normal whitespace-nowrap transition cursor-pointer ${
                index === activeIndex
                  ? "border-b-[#152883] border-b-2 text-[#152883]"
                  : "bg-white text-[#5C5C5C]"
              }`}
            >
              {feature.name}
            </button>
          ))}
        </div>
      </div>

      {/* Feature content */}
      <div className="flex flex-col text-start px-4 mt-8">
        {/* <div> */}
        <FadeInTextBlock
          title={current.name}
          description={current.description}
          titleStyle="text-[18px]"
          descStyle="text-[14px] -mt-1"
        />

        {/* Main image */}
        <SlideFadeWrapper
          keyId={current.id}
          className="w-full flex justify-center px-8 mt-6 md:mt-0"
        >
          <Image
            src={current.image}
            alt={current.name}
            width={680}
            height={680}
            className="object-contain w-[680px] h-auto"
          />
        </SlideFadeWrapper>

        {/* Challenge */}
        <div className="flex flex-row border-1 border-[#C2CCFF] rounded-2xl p-4 mt-6 items-start">
          <Image
            src="/icons/challenge.svg"
            alt="challenge"
            width={24}
            height={24}
          />
          <div className="flex flex-col ml-3">
            <h2 className="text-base font-semibold text-black">Challenge</h2>
            <p className="text-sm font-normal text-[#74767B] mt-2">
              {current.challenge}
            </p>
          </div>
        </div>

        {/* Solution */}
        <div className="flex flex-row border-1 border-[#C2CCFF] rounded-2xl p-4 mt-6 items-start">
          <Image
            src="/icons/solution.svg"
            alt="solution"
            width={24}
            height={24}
          />
          <div className="flex flex-col ml-3">
            <h2 className="text-base font-semibold text-black">Solution</h2>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <div className="flex flex-row gap-2">
                <Image
                  src="/icons/banknote-arrow-up.svg"
                  alt="solution"
                  width={16}
                  height={16}
                />
                <p className="text-[12px] font-medium text-[#727272]">
                  {current.solution[0]}
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <Image
                  src="/icons/shield-alert.svg"
                  alt="solution"
                  width={16}
                  height={16}
                />
                <p className="text-[12px] font-medium text-[#727272]">
                  {current.solution[1]}
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <Image
                  src="/icons/key-round.svg"
                  alt="solution"
                  width={16}
                  height={16}
                />
                <p className="text-[12px] font-medium text-[#727272]">
                  {current.solution[2]}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* Steps */}
        {current.steps && (
          <div className="flex flex-row border-1 border-[#C2CCFF] justify-between p-4 mt-6 shadow-lg rounded-3xl">
            {current.steps.map((step) => (
              <div key={step.id} className="flex flex-col text-center w-[31%]">
                <h2 className="text-base font-semibold text-[#152883]">
                  {step.title}
                </h2>
                <p className="text-[14px] font-normal text-[#152883]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
