import { notFound } from "next/navigation";
import { getCustomerByName } from "@/lib/customers";
import Image from "next/image";
import GradiantTag from "@/app/components/common/GradiantTag";
import FadeInTextBlock from "@/app/components/common/FadeInTextBlock";
import SlideFadeWrapper from "@/app/components/common/SlideFadeWrapper";
import { ContactUsForm } from "@/app/components/common/ContactUsForm";
import { FaCheckCircle } from "react-icons/fa";
import ColabsImageGrid from "@/app/components/customers/ColabsImageGrid";
import VisaFeaturesSlider from "@/app/components/customers/VisaFeaturesSlider";
import { LetsTalkButton } from "@/app/components/common/LetsTalkButton";
import ScrollReveal from "@/app/components/common/ScrollReveal";

type Props = {
  params: Promise<{
    customerName: string;
  }>;
};

export default async function CustomerPage({ params }: Props) {
  // Await params before accessing properties
  const resolvedParams = await params;
  const visa = resolvedParams.customerName.toLowerCase() === "visa";
  const customer = await getCustomerByName(resolvedParams.customerName);
  if (!customer) return notFound();

  return (
    <div className="flex flex-col">
      {/* Overview */}
      <div id="overview" className="relative overflow-hidden rounded-4xl">
        <SlideFadeWrapper keyId={customer.id}>
          <Image
            src={customer.image}
            alt={customer.title}
            width={1282}
            height={699}
            className="w-full h-[699px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/30 to-transparent p-14 flex flex-col justify-end">
            <h2 className="text-black text-4xl font-bold md:w-[40%]">
              {customer.title}
            </h2>
            <p className="text-[#2F323A] text-base font-normal mt-4">
              {customer.description}
            </p>
          </div>
        </SlideFadeWrapper>
      </div>

      {/* Logo and description */}
      <ScrollReveal>
        <div id="logo-desc" className="flex flex-row items-center gap-16 mt-32">
          <Image
            src={customer.logo}
            alt={customer.title}
            width={232}
            height={120}
            className="w-auto h-[80px] md:h-[72px]"
          />
          <p className="text-black font-semibold text-2xl">
            {customer.logoDesc}
          </p>
        </div>
      </ScrollReveal>

      {/* Highlights */}

      {customer.highlights && (
        <ScrollReveal>
          <div
            id="highlights"
            className="flex flex-row gap-8 justify-between mt-32"
          >
            {customer.highlights?.map((highlight) => (
              <div
                key={highlight.id}
                className="flex flex-col text-center w-[33%] px-10"
              >
                <p
                  className={`${
                    visa ? "text-[#152883]" : "text-[#D71A21]"
                  } font-bold text-3xl`}
                >
                  {highlight.title}
                </p>
                {highlight.subTitle && (
                  <p
                    className={`${
                      visa ? "text-[#152883]" : "text-[#D02148]"
                    } font-normal text-base mt-2`}
                  >
                    {highlight.subTitle}
                  </p>
                )}
                <p className="text-[#2F323A] font-normal text-base">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      )}

      {/* Steps */}
      <ScrollReveal>
        <div id="steps" className="flex flex-row justify-center md:px-20 mt-32">
          <div className="flex flex-col w-full md:w-[34%] justify-center px-10 pr-[120px]">
            <p className="text-black font-bold text-4xl">
              {customer.stepsData.title}
            </p>
            <p className="text-[#2F323A] font-normal text-base mt-4">
              {customer.stepsData.description}
            </p>
          </div>
          <div className="md:w-[66%]">
            {customer.stepsData.steps.map((step) => (
              <div key={step.id} className="flex flex-row items-center gap-4">
                <div
                  className={`p-4 ${customer.stepsData.outerColor} rounded-full my-5`}
                >
                  <FaCheckCircle
                    size={24}
                    className={`${customer.stepsData.innerColor}`}
                  />
                </div>
                <p className="text-black font-semibold text-xl">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Special features for VISA */}
      {visa && (
        <ScrollReveal>
          <div id="visa-features" className="flex flex-col items-center mt-32">
            <GradiantTag title="Project Modules Delivered" />
            <p className="font-bold text-4xl text-black mt-5">
              Tailored Fintech Solutions Designed for Visa USA
            </p>
            <VisaFeaturesSlider />
          </div>
        </ScrollReveal>
      )}

      {/* Colabs */}
      <ScrollReveal>
        <div id="colabs" className="flex flex-col items-center mt-32">
          <p className="font-bold text-4xl text-black">
            {customer.colabsData.title}
          </p>
          <p className="font-normal text-base text-[#2F323A] mt-2">
            {customer.colabsData.description}
          </p>
          <ColabsImageGrid colabs={customer.colabsData.colabs} />
        </div>
      </ScrollReveal>

      {/* Features */}
      {!visa && customer.featuresData && (
        <ScrollReveal>
          <div
            id="features"
            className="flex flex-col items-center text-center mt-32"
          >
            <p className="font-bold text-4xl text-black">
              {customer.featuresData.title}
            </p>
            <p className="font-normal text-base text-[#2F323A] mt-2">
              {customer.featuresData.description}
            </p>
            <div className="relative w-full h-[1000px]">
              <Image
                src={customer.featuresData.frame}
                alt={customer.featuresData.title}
                width={232}
                height={120}
                className="absolute left-1/2 -translate-x-1/2 -top-40 w-[90%]"
              />
              <Image
                src={customer.featuresData.image}
                alt={customer.featuresData.title}
                width={716}
                height={824}
                className="absolute left-1/2 -translate-x-1/2 min-h-[850px] object-cover w-auto"
              />
              {customer.featuresData.features.map((tag) => (
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
                    <p className="font-bold text-base text-[#2F323A] mx-3">
                      {tag.label}
                    </p>
                  </div>
                </SlideFadeWrapper>
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Lets talk */}
      <ScrollReveal>
        <div className="flex flex-col items-center text-center p-32 my-32">
          <p className="text-black font-bold text-4xl">
            {customer.letsTalk.title}
          </p>
          <p className="text-[#636363] font-normal text-base mt-4">
            {customer.letsTalk.description}
          </p>
          <LetsTalkButton btnStyle="p-4 bg-[#158D54] text-white rounded-full text-lg font-normal w-[290px] mt-10 cursor-pointer" />
        </div>
      </ScrollReveal>
    </div>
  );
}
