"use client";

import { Feature } from "@/types/products";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SlideFadeWrapper from "../../common/SlideFadeWrapper";
import FadeInTextBlock from "../../common/FadeInTextBlock";

type Props = {
  features: Feature[];
};

export default function FeaturesSliderMobile({ features }: Props) {
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
                  ? "border-b-[#158D54] border-b-2 text-[#158D54]"
                  : "bg-white text-[#5C5C5C]"
              }`}
            >
              {feature.name}
            </button>
          ))}
        </div>
      </div>

      {/* Feature content */}
      <div className="flex flex-col items-center px-4 mt-8">
        <FadeInTextBlock
          title={current.name}
          description={current.description}
          titleStyle="text-base"
          descStyle="text-[14px]"
        />
        <SlideFadeWrapper
          keyId={current.id}
          className="w-full flex justify-center px-6 min-h-[257px]"
          xValue={0}
          yValue={10}
        >
          <Image
            src={current.image}
            alt={current.name}
            width={343}
            height={257}
            className="object-contain w-full scale-110"
          />
        </SlideFadeWrapper>
      </div>
    </div>
  );
}
