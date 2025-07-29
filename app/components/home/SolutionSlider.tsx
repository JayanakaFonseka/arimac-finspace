"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SlideFadeWrapper from "../common/SlideFadeWrapper";

const data = [
  {
    id: 1,
    title: "E-KYC",
    description:
      "Simplify and secure user verification with FinSpace’s digital KYC solution. It ensures compliance while providing a seamless onboarding experience through automated identity checks.",
    redirectURL: "/products/e-kyc",
    image: "/home/fraud-detection-&-prevention.svg",
  },
  {
    id: 2,
    title: "Fraud detection & prevention",
    description:
      "FinSpace enables businesses to detect and prevent fraudulent activity in real time using AI-driven insights. This ensures secure transactions while maintaining a smooth user experience.",
    redirectURL: "/products/sherlock",
    image: "/home/fraud-detection-&-prevention.svg",
  },
  {
    id: 3,
    title: "E-Wallet",
    description:
      "FinSpace's E-Wallet: Secure, Convenient Digital Money Storage It supports seamless transactions, offers loyalty rewards, and provides personalized experiences.",
    redirectURL: "/products/e-wallet",
    image: "/home/fraud-detection-&-prevention.svg",
  },
];

export default function SolutionSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scrollToIndex = (index: number) => {
    const itemHeight = scrollRef.current?.firstElementChild?.clientHeight || 0;
    setActiveIndex(index);

    scrollRef.current?.scrollTo({
      top: index * itemHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setActiveIndex((prev) => {
          const next = prev + 1 >= data.length ? 0 : prev + 1;
          return next;
        });
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [paused]);

  useEffect(() => {
    const itemHeight = scrollRef.current?.firstElementChild?.clientHeight || 0;
    scrollRef.current?.scrollTo({
      top: activeIndex * itemHeight,
      behavior: "smooth",
    });
  }, [activeIndex]);

  const handleViewMore = (url: string) => {
    router.push(url);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 px-6">
      {/* Left Image */}
      <SlideFadeWrapper
        keyId={data[activeIndex]?.id}
        className="w-full flex justify-center px-8 max-h-[500px]"
        xValue={0}
        yValue={100}
      >
        <Image
          src={data[activeIndex]?.image}
          alt={data[activeIndex]?.title}
          width={400}
          height={400}
          className="transition-all duration-500 ease-in-out"
        />
      </SlideFadeWrapper>

      {/* Right Scrollable Content */}
      <div className="relative h-[450px] overflow-hidden">
        {/* Top and bottom fade overlay */}

        <div
          ref={scrollRef}
          className="h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {data.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={item.id}
                className={`flex flex-row snap-start px-2 py-4 min-h-[120px] transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-50"
                }`}
              >
                <div
                  className={`z-10 bg-white text-4xl mb-1 font-bold border-1 w-fit h-fit p-2 rounded-full ${
                    isActive ? "text-[#29266B]" : "text-gray-500"
                  }`}
                >
                  {String(item.id).padStart(2, "0")}
                </div>
                <div
                  className={`border-l-2 pl-16 -ml-[30px] ${
                    isActive ? "border-black" : "text-gray-500"
                  }`}
                >
                  <h3
                    className={`text-3xl font-bold mb-2 ${
                      isActive ? "text-[#29266B]" : "text-gray-500"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-base font-normal text-[#74767B] mt-4 line-clamp-3">
                    {item.description}
                  </p>
                  {isActive && (
                    <button
                      onClick={() => handleViewMore(item.redirectURL)}
                      className="flex flex-row text-[#158D54] text-base font-semibold gap-1 mt-4 cursor-pointer"
                    >
                      View more
                      <Image
                        src={"/icons/right-arrow.svg"}
                        alt="Logo"
                        width={24}
                        height={24}
                      />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
