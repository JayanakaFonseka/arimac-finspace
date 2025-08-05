"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const slides = [
  // Frame 1
  <div className="flex flex-col p-4 rounded-3xl">
    <p className="text-[18px] font-semibold text-[#2F323A]">
      Why the Time is Now?
    </p>
    <p className="text-[12px] font-normal text-[#74767B]">
      The Big Shift in Customer Behavior
    </p>
    <div className="flex flex-row mt-6 gap-3">
      <Image
        src="/mobile/home/carousel-frames/icons/slide-1-icon-1.svg"
        alt="frame1"
        width={24}
        height={24}
      />
      <p className="text-[12px] font-medium text-[#2F323A]">
        Trust is earned through experience, not ads
      </p>
    </div>
    <div className="flex flex-row mt-4 gap-3">
      <Image
        src="/mobile/home/carousel-frames/icons/slide-1-icon-2.svg"
        alt="frame1"
        width={24}
        height={24}
      />
      <p className="text-[12px] font-medium text-[#2F323A]">
        Digital-first customers are no longer just urban – they’re everywhere
      </p>
    </div>
    <div className="flex flex-row mt-4 gap-3">
      <Image
        src="/mobile/home/carousel-frames/icons/slide-1-icon-3.svg"
        alt="frame1"
        width={24}
        height={24}
      />
      <p className="text-[12px] font-medium text-[#2F323A]">
        Gen Z expects instant, intuitive, mobile-first banking
      </p>
    </div>
    <Image
      src="/mobile/home/carousel-frames/frame-1.png"
      alt="frame1"
      width={311}
      height={207}
      className="w-[311px] h-[207px] object-cover rounded-3xl mt-[39px]"
    />
  </div>,
  // Frame 2
  <div className="flex flex-col p-4 rounded-3xl">
    <p className="text-[18px] font-semibold text-[#2F323A]">
      AI - More Than a Buzzword. At FinSpace, It’s the Backbone.
    </p>
    <p className="text-[12px] font-normal text-[#74767B]">
      We embed AI into design, decisions, and delivery to:
    </p>
    <div className="flex flex-row mt-6 gap-3">
      <Image
        src="/mobile/home/carousel-frames/icons/slide-2-icon-1.svg"
        alt="frame1"
        width={24}
        height={24}
      />
      <p className="text-[12px] font-medium text-[#2F323A]">
        Understand customers deeply
      </p>
    </div>
    <div className="flex flex-row mt-4 gap-3">
      <Image
        src="/mobile/home/carousel-frames/icons/slide-2-icon-2.svg"
        alt="frame1"
        width={24}
        height={24}
      />
      <p className="text-[12px] font-medium text-[#2F323A]">
        Power real-time insights
      </p>
    </div>
    <div className="flex flex-row mt-4 gap-3">
      <Image
        src="/mobile/home/carousel-frames/icons/slide-2-icon-3.svg"
        alt="frame1"
        width={24}
        height={24}
      />
      <p className="text-[12px] font-medium text-[#2F323A]">
        Personalize experiences securely
      </p>
    </div>
    <Image
      src="/mobile/home/carousel-frames/frame-2.jpg"
      alt="frame2"
      width={311}
      height={207}
      className="rounded-3xl mt-6"
    />
  </div>,
  // Frame 3
  <div className="flex flex-col p-4 rounded-3xl">
    <p className="text-[18px] font-semibold text-[#2F323A]">
      Fraud Doesn’t Stand a Chance
    </p>
    <p className="text-[12px] font-normal text-[#74767B]">
      Powered by Smart AI, Protected by FinSpace
    </p>
    <div className="flex flex-row mt-6 gap-3">
      <div className="min-w-4 max-h-4 bg-[#CFCFCF] rounded-full" />
      <p className="text-[12px] font-medium text-[#2F323A]">
        Our AI watches every transaction, spotting the unusual, stopping
        threats, and keeping your customers safe 24/7.
      </p>
    </div>
    <div className="flex flex-row mt-4 gap-3">
      <div className="min-w-4 max-h-4 bg-[#CFCFCF] rounded-full" />
      <p className="text-[12px] font-medium text-[#2F323A]">
        It learns, adapts, and gets smarter, so fraudsters stay one step behind,
        always.
      </p>
    </div>
    <Image
      src="/mobile/home/carousel-frames/frame-3.png"
      alt="frame3"
      width={311}
      height={207}
      className="rounded-3xl mt-[49px]"
    />
  </div>,
  // Frame 4
  <div className="flex flex-col p-4 rounded-3xl">
    <p className="text-[18px] font-semibold text-[#2F323A] text-wrap">
      Security & Compliance by Design Trust isn’t optional - it’s foundational
    </p>
    <div className="flex flex-row mt-6 gap-3">
      <Image
        src="/mobile/home/carousel-frames/icons/slide-2-icon-1.svg"
        alt="frame1"
        width={24}
        height={24}
      />
      <p className="text-[12px] font-medium text-[#2F323A]">
        Biometric login with FIDO standards
      </p>
    </div>
    <div className="flex flex-row mt-4 gap-3">
      <Image
        src="/mobile/home/carousel-frames/icons/slide-2-icon-2.svg"
        alt="frame1"
        width={24}
        height={24}
      />
      <p className="text-[12px] font-medium text-[#2F323A]">
        Role-based access and audit logs
      </p>
    </div>
    <div className="flex flex-row mt-4 gap-3">
      <Image
        src="/mobile/home/carousel-frames/icons/slide-2-icon-2.svg"
        alt="frame1"
        width={24}
        height={24}
      />
      <p className="text-[12px] font-medium text-[#2F323A]">
        Enterprise-grade encryption
      </p>
    </div>
    <Image
      src="/mobile/home/carousel-frames/frame-4.png"
      alt="frame4"
      width={311}
      height={207}
      className="rounded-3xl mt-[15px]"
    />
  </div>,
];

export default function SolutionCarouselMobile() {
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
    <div className="flex flex-col w-full mt-8 items-center">
      <div
        className="overflow-hidden relative rounded-3xl shadow-xl max-w-[343px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
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
                ? "bg-[#059350] w-[32px] h-[4px]"
                : "bg-[#a5dd8e59] w-[4px] h-[4px]"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
}
