"use client";

import Image from "next/image";
import clients from "@/data/clients.json";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SlideFadeWrapper from "../common/SlideFadeWrapper";
import StatsPanel from "./StatsPanel";

export default function ClientShowcase() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeClient = clients[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clients.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleViewMore = (url: string) => {
    router.push(url);
  };

  return (
    <div className="w-full px-4 py-10 bg-white">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left - Stats */}
        <StatsPanel keyId={activeClient.id} stats={activeClient.stats} />

        {/* Right - Image & Text */}
        <div className="md:w-[85%] relative overflow-hidden rounded-4xl">
          <SlideFadeWrapper keyId={activeClient.id}>
            <Image
              src={activeClient.image}
              alt={activeClient.title}
              width={1052}
              height={610}
              className="w-full h-[610px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-14 flex flex-col justify-end">
              <div className="bg-[#F3F3F3A3] p-6 w-fit rounded-3xl mb-6">
                <Image
                  src={activeClient.clientLogo}
                  alt="Client Logo"
                  width={139}
                  height={72}
                />
              </div>
              <h2 className="text-white text-4xl font-bold">
                {activeClient.title}
              </h2>
              <p className="text-white text-base font-normal mt-4">
                {activeClient.description}
              </p>
              <button
                onClick={() => handleViewMore(activeClient.redirectURL)}
                className="flex text-white text-[16px] font-medium mt-3 hover:opacity-80 items-center gap-1 cursor-pointer"
              >
                Read the story
                <Image
                  src={"/icons/right-arrow-white.svg"}
                  alt="Logo"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </SlideFadeWrapper>
        </div>
      </div>

      {/* Bottom Logos */}
      <div className="mt-10 flex items-center flex-wrap gap-10 justify-center max-h-[75px]">
        {clients.map((client, index) => (
          <button
            key={client.id}
            onClick={() => setActiveIndex(index)}
            className={`grayscale transition cursor-pointer hover:grayscale-0 ${
              index === activeIndex ? "grayscale-0" : "opacity-50"
            }`}
          >
            <Image
              src={client.clientLogo}
              alt={`Client ${client.id}`}
              width={80}
              height={72}
              className="w-auto"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
