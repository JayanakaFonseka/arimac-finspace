import MessageCarousel from "@/app/components/about-finspace/MessageCarousel";
import FadeInTextBlock from "@/app/components/common/FadeInTextBlock";
import GradiantBorderTag from "@/app/components/common/GradiantBorderTag";
import { LetsTalkButton } from "@/app/components/common/LetsTalkButton";
import ScrollReveal from "@/app/components/common/ScrollReveal";
import SlideFadeWrapper from "@/app/components/common/SlideFadeWrapper";
import Image from "next/image";

export default async function AboutFinspace() {
  return (
    <div className="flex flex-col">
      {/* Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <GradiantBorderTag title="About Finspace" />
          <FadeInTextBlock
            title="We are the next-generation FinTech builders, creating real, scalable solutions where others offer only buzzwords."
            titleStyle="text-4xl font-bold text-black mt-6"
          />
        </div>
        <SlideFadeWrapper keyId="finspace-overview" className="w-full">
          <Image
            src="/about-finspace/overview.png"
            alt="Logo"
            width={625}
            height={522}
            className="max-w-[625px] object-cover rounded-4xl"
          />
        </SlideFadeWrapper>
      </div>

      {/* Messages */}
      <ScrollReveal>
        <MessageCarousel />
      </ScrollReveal>

      {/* Mission */}
      <ScrollReveal>
        <div className="flex flex-col mt-32 bg-[radial-gradient(ellipse_at_center,_#4944C959_0%,_transparent_60%)]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-10">
              <p className="text-black font-bold text-4xl">
                Our mission is clear to empower businesses with powerful,
                scalable FinTech platforms
              </p>
              <p className="text-[#4F4F4F] font-normal text-base mt-10">
                With over 14 years of industry expertise, we develop custom
                platforms, innovative products, and end-to-end solutions that
                help companies innovate faster, grow smarter, and deliver
                seamless payment and financial experiences. Our flagship
                products like{" "}
                <span className="text-[#4F4F4F] font-bold text-base">
                  Sherlock
                </span>{" "}
                and{" "}
                <span className="text-[#4F4F4F] font-bold text-base">
                  Sherlock
                </span>
                , combined with our expert solutions , are transforming the
                FinTech landscape. Partner with us to build the technology and
                solutions that power tomorrow’s financial services.
              </p>
            </div>
            <Image
              src="/about-finspace/group-image-1.png"
              alt="frame1"
              width={717}
              height={546}
              className="object-cover h-auto"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-20">
            <Image
              src="/about-finspace/group-image-2.png"
              alt="frame1"
              width={717}
              height={546}
              className="object-cover h-auto md:pr-10"
            />
            <div className="flex flex-col justify-center">
              <p className="text-black font-bold text-4xl">
                Our mission is clear to empower businesses with powerful,
                scalable FinTech platforms
              </p>
              <p className="text-[#4F4F4F] font-normal text-base mt-10">
                With over 14 years of industry expertise, we develop custom
                platforms, innovative products, and end-to-end solutions that
                help companies innovate faster, grow smarter, and deliver
                seamless payment and financial experiences. Our flagship
                products like{" "}
                <span className="text-[#4F4F4F] font-bold text-base">
                  Sherlock
                </span>{" "}
                and{" "}
                <span className="text-[#4F4F4F] font-bold text-base">
                  Sherlock
                </span>
                , combined with our expert solutions , are transforming the
                FinTech landscape. Partner with us to build the technology and
                solutions that power tomorrow’s financial services.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Lets talk */}
      <ScrollReveal>
        <div className="flex flex-col items-center text-center p-32 my-32">
          <p className="text-black font-bold text-4xl">
            Let’s Shape the Future of Fintech — Together
          </p>
          <p className="text-[#636363] font-normal text-base mt-4">
            Have a vision or challenge in digital finance? Whether you’re a
            startup exploring new ideas or an enterprise scaling fast, we’re
            here to help. Reach out to explore how Finspace can turn your goals
            into impactful solutions.
          </p>
          <LetsTalkButton btnStyle="p-4 bg-[#158D54] text-white rounded-full text-lg font-normal w-[290px] mt-10" />
        </div>
      </ScrollReveal>
    </div>
  );
}
