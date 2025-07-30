"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const slides = [
  <div className="flex flex-row w-full md:grid-cols-2">
    <div className="w-[40%] ">
      <Image
        src="/about-finspace/ceo-image.png"
        alt="frame1"
        width={418}
        height={547}
        className="object-cover h-auto"
      />
    </div>
    <div className="flex flex-col justify-center w-[60%]">
      <Image src="/icons/quote-1.svg" alt="quote" width={65} height={48} />
      <p className="text-black font-normal text-base mt-8">
        In a world full of tech buzzwords, we stand for real expertise,
        meaningful results, and trusted partnerships. For{" "}
        <span className="text-black font-bold text-base">over 14 years,</span>{" "}
        we’ve led FinTech innovation — not by watching trends, but by shaping
        them. With products like{" "}
        <span className="text-[#158D54] font-bold text-base">Sherlock</span> and{" "}
        <span className="text-[#158D54] font-bold text-base">PayNow</span>,
        we’re delivering future-ready solutions that are already making an
        impact. Backed by a passionate team and a proven track record, we invite
        you to explore what we’ve built and imagine what we can create together.
        We’re not just ready for the future — we’re building it. Let’s win it
        together.
      </p>
      <div className="flex flex-row mt-4">
        <div className="flex flex-col justify-end mr-5">
          <p className="text-black font-bold text-3xl">
            Kapila Shantha Rajapaksa
          </p>
          <p className="text-[#74767B] font-normal text-base mt-2">
            CEO, Finspace
          </p>
        </div>
        <Image src="/icons/quote-2.svg" alt="quote" width={130} height={96} />
      </div>
    </div>
  </div>,
  <div className="flex flex-row w-full md:grid-cols-2">
    <div className="w-[40%] ">
      <Image
        src="/about-finspace/coo-image.png"
        alt="frame1"
        width={418}
        height={547}
        className="object-cover h-auto"
      />
    </div>
    <div className="flex flex-col justify-center w-[60%]">
      <Image src="/icons/quote-1.svg" alt="quote" width={65} height={48} />
      <p className="text-black font-normal text-base mt-8">
        At our core, we focus on delivering ; with precision, speed, and
        purpose. With over 14 years in the FinTech industry, we’ve transformed
        bold ideas into scalable, high-impact solutions for global brands. Our
        products,{" "}
        {/* <span className="text-black font-bold text-base">over 14 years,</span>{" "}
        we’ve led FinTech innovation — not by watching trends, but by shaping
        them. With products like{" "} */}
        <span className="text-[#158D54] font-bold text-base">Sherlock</span> and{" "}
        <span className="text-[#158D54] font-bold text-base">PayNow</span>, are
        not just concepts; they’re live, proven platforms born from operational
        excellence and execution-driven culture. Behind every milestone is a
        team that’s agile, accountable, and committed to doing things right. We
        don’t just talk about the future; we build it, one solution at a time.
      </p>
      <div className="flex flex-row mt-4">
        <div className="flex flex-col justify-end mr-5">
          <p className="text-black font-bold text-3xl">Gayan Kalinga</p>
          <p className="text-[#74767B] font-normal text-base mt-2">
            COO, Finspace
          </p>
        </div>
        <Image src="/icons/quote-2.svg" alt="quote" width={130} height={96} />
      </div>
    </div>
  </div>,
];

export default function MessageCarousel() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 10000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
  };

  return (
    <div className="flex flex-col w-full mt-32 items-center">
      <div
        className="overflow-hidden relative rounded-lg"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out text-black"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Indicator bar */}
      <div className="flex items-center justify-center mt-4 gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`rounded-full cursor-pointer ${
              current === index
                ? "bg-[#059350] w-[100px] h-[10px]"
                : "bg-[#a5dd8e59] w-[10px] h-[10px]"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
}
