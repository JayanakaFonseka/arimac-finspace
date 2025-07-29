"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const slides = [
  <div className="flex justify-center items-center">
    <Image
      src="/home/carousel-frames/frame-1.png"
      alt="frame1"
      width={1280}
      height={852}
    />
  </div>,
  <div className="flex justify-center items-center">
    <Image
      src="/home/carousel-frames/frame-2.png"
      alt="frame2"
      width={1280}
      height={852}
    />
  </div>,
  <div className="flex justify-center items-center">
    <Image
      src="/home/carousel-frames/frame-3.png"
      alt="frame3"
      width={1280}
      height={852}
    />
  </div>,
  <div className="flex justify-center items-center">
    <Image
      src="/home/carousel-frames/frame-4.png"
      alt="frame4"
      width={1280}
      height={852}
    />
  </div>,
];

export default function SolutionCarousel() {
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
    <div className="flex flex-col w-full mx-auto mt-10 items-center">
      <div
        className="overflow-hidden relative rounded-lg w-[80%]"
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
