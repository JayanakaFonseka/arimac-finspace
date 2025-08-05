"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import SlideFadeWrapper from "../common/SlideFadeWrapper";
import Image from "next/image";
import { LetsTalkButton } from "../common/LetsTalkButton";
import { useRouter } from "next/navigation";

const tags = [
  {
    label: "E-wallet",
    icon: "/home/hero/icons/e-wallet.svg",
    style: "top-[3%] left-[30%]",
    delay: 0.5,
    xValue: 20,
    yValue: 20,
  },
  {
    label: "Mobile Banking",
    icon: "/home/hero/icons/mobile-banking.svg",
    style: "top-[10%] right-[2%]",
    delay: 1,
    xValue: -30,
    yValue: 30,
  },
  {
    label: "Internet banking",
    icon: "/home/hero/icons/internet-banking.svg",
    style: "bottom-[30%] right-[2%]",
    delay: 1.5,
    xValue: -30,
    yValue: -5,
  },
  {
    label: "Remittance",
    icon: "/home/hero/icons/remittance.svg",
    style: "bottom-[3%] right-[30%]",
    delay: 2,
    xValue: -30,
    yValue: -30,
  },
  {
    label: "Fraud detection",
    icon: "/home/hero/icons/fraud-detection.svg",
    style: "bottom-[6%] left-[3%]",
    delay: 2.5,
    xValue: 30,
    yValue: -30,
  },
  {
    label: "EKYC",
    icon: "/home/hero/icons/ekyc.svg",
    style: "top-[45%] left-[5%]",
    delay: 3,
    xValue: 30,
    yValue: 0,
  },
  {
    label: "Buy now pay later",
    icon: "/home/hero/icons/buy-now-pay-later.svg",
    style: "top-[17%] left-[0%]",
    delay: 3.5,
    xValue: 30,
    yValue: 30,
  },
];

export default function FintechHero() {
  const router = useRouter();
  return (
    <>
      <div
        id="content"
        className="flex flex-col justify-center max-[1200px]:text-center max-[1200px]:mx-auto w-[450px] md:min-w-[355px] md:max-w-[450px] pl-10 mt-10"
      >
        {/* Typing Heading */}
        <TypeAnimation
          sequence={[
            "How do you\nbuild your\nperfect\nFinTech stack?", // text
            1000, // wait before looping again
          ]}
          wrapper="p"
          speed={50}
          repeat={Infinity}
          className="text-5xl font-bold leading-[62px] md:min-w-[355px] min-h-[186px] text-transparent bg-clip-text bg-gradient-to-r from-[#3B36AB] from-0% to-[#1EC677] to-80%"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="text-base font-normal text-[#74767B] md:min-w-[355px] mt-6"
        >
          Select from our range of innovative products and customizable
          solutions designed for your growth
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="flex-row mt-8 md:min-w-[355px]"
        >
          <LetsTalkButton btnStyle="px-4 py-3 bg-gradient-to-r from-[#3B36AB] to-[#1EC677] text-white font-normal text-lg rounded-full w-[169px] max-w-[169px] mr-4 mb-4 cursor-pointer" />
          <button
            onClick={() => router.push("/contact-us")}
            className="relative inline-block w-[169px] max-w-[169px] px-4 py-3 text-lg font-normal rounded-full z-10 cursor-pointer
              before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-[#3B36AB] before:to-[#1EC677] before:z-[-2]
              after:content-[''] after:absolute after:inset-[2px] after:rounded-full after:bg-[#F8FAFC] after:z-[-1]"
          >
            <span className="bg-gradient-to-r from-[#3B36AB] to-[#1EC677] text-transparent bg-clip-text">
              Book a demo
            </span>
          </button>
        </motion.div>
      </div>

      {/* Image */}
      <div id="image" className="relative p-10 md:max-w-[827px]">
        <SlideFadeWrapper keyId={123} className="pl-8" xValue={50} yValue={0}>
          <Image
            src="/home/hero/main.png"
            alt="Logo"
            width={827}
            height={594}
            className="w-full h-auto min-h-[470px] object-cover rounded-4xl"
          />
        </SlideFadeWrapper>
        {tags.map((tag) => (
          <SlideFadeWrapper
            key={tag.label}
            keyId={tag.label}
            className={`absolute ${tag.style} z-10`}
            xValue={tag.xValue}
            yValue={tag.yValue}
            delay={tag.delay}
          >
            <div
              className="transform scale-[0.9] sm:scale-[1] md:scale-[1.05] transition-transform duration-300
                 flex flex-row gap-2 p-3 rounded-full items-center max-w-fit shadow-lg
                 before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-[#FFFFFF] before:to-[#C9C9C9] before:z-[-2]
                 after:content-[''] after:absolute after:inset-[2px] after:rounded-full after:bg-[#a8bcfc3b] after:z-[-1]"
            >
              <Image src={tag.icon} alt={tag.label} width={32} height={32} />
              <p className="font-bold text-sm text-[#2F323A] mr-2">
                {tag.label}
              </p>
            </div>
          </SlideFadeWrapper>
        ))}
      </div>
    </>
  );
}
