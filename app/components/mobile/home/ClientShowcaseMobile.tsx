"use client";

import Image from "next/image";
import clients from "@/data/clients.json";
import { useRouter } from "next/navigation";
import StatsPanel from "../../home/StatsPanel";
import SlideFadeWrapper from "../../common/SlideFadeWrapper";
import { useEffect, useState, useRef } from "react";

export default function ClientShowcaseMobile() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeClient = clients[activeIndex];
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % clients.length);
    setActiveIndex((prev) => (prev + 1) % clients.length);
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + clients.length) % clients.length);
    setActiveIndex((prev) => (prev - 1) % clients.length);
  };

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

  const handleViewMore = (url: string) => {
    router.push(url);
  };

  return (
    <div className="w-full mt-8 bg-white text-start">
      <StatsPanel keyId={activeClient.id} stats={activeClient.stats} />
      <div className="flex flex-col w-full mt-6 items-center">
        <div
          className="overflow-hidden relative rounded-3xl shadow-xl max-w-[343px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {clients.map((client, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={activeClient.image}
                    alt={activeClient.title}
                    width={343}
                    height={343}
                    className="w--[343px] h-[343px] object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 flex flex-col justify-end">
                    <div className="bg-[#F3F3F3A3] w-fit rounded-2xl px-4 py-3">
                      <Image
                        src={activeClient.clientLogo}
                        alt="Client Logo"
                        width={62}
                        height={32}
                      />
                    </div>
                    <h2 className="text-white text-base font-semibold mt-3">
                      {activeClient.title}
                    </h2>
                    <p className="text-white text-[12px] font-normal mt-2">
                      {activeClient.description}
                    </p>
                    <button
                      onClick={() => handleViewMore(activeClient.redirectURL)}
                      className="flex text-white text-[14px] font-medium mt-3 hover:opacity-80 items-center gap-1 cursor-pointer"
                    >
                      Read the story
                      <Image
                        src={"/icons/right-arrow-white.svg"}
                        alt="Logo"
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicator bar */}
        <div className="flex items-center justify-center mt-4 gap-2">
          {clients.map((_, index) => (
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
    </div>
  );
}
