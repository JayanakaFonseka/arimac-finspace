"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LetsTalkButton } from "../../common/LetsTalkButton";
import SlideFadeWrapper from "../../common/SlideFadeWrapper";

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

export default function FintechHeroMobile() {
  const router = useRouter();
  return (
    <div
      id="content"
      className="flex flex-col justify-center text-center mx-auto mt-10"
    >
      {/* Typing Heading */}
      <TypeAnimation
        sequence={[
          "How do you build your\nperfect FinTech\nstack?", // text
          1000, // wait before looping again
        ]}
        wrapper="p"
        speed={50}
        repeat={Infinity}
        className="text-[32px] font-bold leading-[41px]  text-transparent bg-clip-text bg-gradient-to-r from-[#3B36AB] from-0% to-[#1EC677] to-80%"
      />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="text-base font-normal text-[#74767B] m-2"
      >
        Select from our range of innovative products and customizable solutions
        designed for your growth
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.6 }}
        className="flex-row mt-6"
      >
        <LetsTalkButton btnStyle="px-4 py-3 bg-gradient-to-r from-[#3B36AB] to-[#1EC677] text-white font-normal text-[14px] rounded-full w-full mb-4 cursor-pointer" />
        <button
          onClick={() => router.push("/contact-us")}
          className="relative inline-block w-full px-4 py-3 text-[14px] font-normal rounded-full z-10 cursor-pointer
              before:content-[''] before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-[#3B36AB] before:to-[#1EC677] before:z-[-2]
              after:content-[''] after:absolute after:inset-[2px] after:rounded-full after:bg-[#F8FAFC] after:z-[-1]"
        >
          <span className="bg-gradient-to-r from-[#3B36AB] to-[#1EC677] text-transparent bg-clip-text">
            Book a demo
          </span>
        </button>
      </motion.div>
    </div>
  );
}
