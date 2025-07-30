"use client";

import { Feature } from "@/types/products";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import SlideFadeWrapper from "../common/SlideFadeWrapper";
import { motion } from "framer-motion";
import FadeInTextBlock from "../common/FadeInTextBlock";

type Props = {
  features: Feature[];
};

export default function FeaturesSlider({ features }: Props) {
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
                ? "bg-[#158D54] text-white"
                : "bg-white text-black"
            }`}
          >
            {feature.name}
          </button>
        ))}
      </div>

      {/* Feature content */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <SlideFadeWrapper
          keyId={current.id}
          className="w-full flex justify-center px-8 min-h-[557px]"
        >
          <Image
            src={current.image}
            alt={current.name}
            width={739}
            height={557}
            className="object-contain w-full scale-110"
          />
        </SlideFadeWrapper>
        <FadeInTextBlock
          title={current.name}
          description={current.description}
        />
      </div>
    </div>
  );
}
