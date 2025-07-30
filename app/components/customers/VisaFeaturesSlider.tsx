"use client";

import { Feature } from "@/types/products";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import SlideFadeWrapper from "../common/SlideFadeWrapper";
import { motion } from "framer-motion";
import FadeInTextBlock from "../common/FadeInTextBlock";

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

export default function VisaFeaturesSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const switchFeature = (index: number) => {
    setActiveIndex(index);

    // Reset auto-slide timer on manual tab switch
    if (timerRef.current) clearInterval(timerRef.current);
    startAutoSlide();
  };

  const startAutoSlide = () => {
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const current = features[activeIndex];

  return (
    <div className="flex flex-col items-center mt-14">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 border p-1.5 rounded-lg w-fit">
        {features.map((feature, index) => (
          <button
            key={feature.id}
            onClick={() => switchFeature(index)}
            className={`px-4 py-2 rounded-lg text-base font-normal transition cursor-pointer ${
              index === activeIndex
                ? "bg-[#152883] text-white"
                : "bg-white text-black"
            }`}
          >
            {feature.name}
          </button>
        ))}
      </div>

      {/* Feature content */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <FadeInTextBlock
            title={current.name}
            description={current.description}
            titleStyle="text-4xl font-bold"
          />

          {/* Challenge */}
          <div className="flex flex-col shadow-lg rounded-3xl p-6 mt-12 max-w-[538px]">
            <Image
              src="/icons/challenge.svg"
              alt="challenge"
              width={68}
              height={68}
              className="mb-6"
            />
            <p className="text-2xl font-semibold text-black">Challenge</p>
            <p className="text-sm font-normal text-[#74767B] mt-2">
              {current.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="flex flex-col shadow-lg rounded-3xl p-6 mt-12">
            <Image
              src="/icons/solution.svg"
              alt="solution"
              width={68}
              height={68}
              className="mb-6"
            />
            <p className="text-2xl font-semibold text-black">Solution</p>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <div className="flex flex-row gap-2">
                <Image
                  src="/icons/banknote-arrow-up.svg"
                  alt="solution"
                  width={24}
                  height={24}
                  className="mb-6"
                />
                <p className="text-base font-medium text-[#727272]">
                  {current.solution[0]}
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <Image
                  src="/icons/shield-alert.svg"
                  alt="solution"
                  width={24}
                  height={24}
                  className="mb-6"
                />
                <p className="text-base font-medium text-[#727272]">
                  {current.solution[1]}
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <Image
                  src="/icons/key-round.svg"
                  alt="solution"
                  width={24}
                  height={24}
                  className="mb-6"
                />
                <p className="text-base font-medium text-[#727272]">
                  {current.solution[2]}
                </p>
              </div>
            </div>
          </div>
        </div>

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
      </div>

      {/* Steps */}
      {current.steps && (
        <div className="flex flex-col md:flex-row w-full justify-between p-6 mt-10 shadow-lg rounded-3xl">
          {current.steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col min-w-[25%] text-center mt-6 md:mt-0"
            >
              <p className="text-3xl font-bold text-[#152883]">{step.title}</p>
              <p className="text-base font-normal text-[#152883]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
