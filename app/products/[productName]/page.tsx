import { notFound } from "next/navigation";
import { getProductByName } from "@/lib/products";
import Image from "next/image";
import GradiantTag from "@/app/components/common/GradiantTag";
import FeaturesSlider from "@/app/components/products/FeaturesSlider";
import FadeInTextBlock from "@/app/components/common/FadeInTextBlock";
import SlideFadeWrapper from "@/app/components/common/SlideFadeWrapper";
import { FeedbackCard } from "@/app/components/products/FeedbackCard";
import ClusteredImageDisplay from "@/app/components/products/ClusteredImageDisplay";
import { ContactUsForm } from "@/app/components/common/ContactUsForm";
import { LetsTalkButton } from "@/app/components/common/LetsTalkButton";
import { BookADemoButton } from "@/app/components/common/BookADemoButton";
import ScrollReveal from "@/app/components/common/ScrollReveal";
import FeaturesSliderMobile from "@/app/components/mobile/products/FeaturesSliderMobile";

type Props = {
  params: Promise<{
    productName: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  // Await params before accessing properties
  const resolvedParams = await params;
  const product = await getProductByName(resolvedParams.productName);

  if (!product) return notFound();

  return (
    <div className="flex flex-col">
      <div className="hidden md:flex flex-row sticky top-0 z-30 bg-[#ffffff] justify-between items-center mb-6 px-6 py-4">
        <Image src={product.logo} alt="Logo" width={158} height={56} />
        {/* Navigation */}
        <div className="flex flex-wrap space-x-2 justify-center">
          <a
            href="#overview"
            className="px-4 py-2 bg-white text-[#333333] font-medium text-base"
          >
            Overview
          </a>
          <a
            href="#features"
            className="px-4 py-2 bg-white text-[#333333] font-medium text-base"
          >
            Features
          </a>
          <a
            href="#benefits"
            className="px-4 py-2 bg-white text-[#333333] font-medium text-base"
          >
            Benefits
          </a>
          <a
            href="#our-customers"
            className="px-4 py-2 bg-white text-[#333333] font-medium text-base"
          >
            Our Customers
          </a>
        </div>
      </div>

      {/* Overview */}
      <div
        id="overview"
        className="grid grid-cols-1 md:grid-cols-2 items-center justify-between md:scroll-mt-20 mt-6 md:mt-0"
      >
        <div className="flex flex-col">
          <FadeInTextBlock
            title={product.name}
            description={product.description}
            titleStyle="text-2xl md:text-4xl font-bold text-center md:text-start"
            descStyle="text-center md:text-start"
          />
          <div className="flex-row mt-8">
            <LetsTalkButton btnStyle="px-4 py-3 bg-[#158D54] text-white font-normal text-[14px] md:text-lg rounded-full w-full md:w-[227px] md:max-w-[227px] mr-4 mb-4 cursor-pointer" />
            <BookADemoButton btnStyle="px-4 py-3 bg-white text-[#158D54] font-normal text-[14px] md:text-lg rounded-full w-full md:w-[227px] md:max-w-[227px] border-1 border-[#158D54] cursor-pointer -mt-1 md:mt-0" />
          </div>
        </div>
        <SlideFadeWrapper keyId={product.id} className="hidden md:block w-full">
          <Image
            src={product.image}
            alt="Logo"
            width={987}
            height={740}
            className="w-full h-auto scale-125 translate-x-0 md:-translate-x-16"
          />
        </SlideFadeWrapper>
      </div>

      {/* Features */}
      <ScrollReveal>
        <div
          id="features"
          className="flex flex-col items-center mt-8 md:mt-32 md:scroll-mt-32"
        >
          <GradiantTag title="Core features" />
          <p className="font-bold text-[22px] md:text-4xl text-black mt-3 md:mt-5 text-center">
            Discover the Key Features
          </p>
          <div className="hidden md:block">
            <FeaturesSlider features={product.features} />
          </div>
          <div className="md:hidden flex w-[100vw]">
            <FeaturesSliderMobile features={product.features} />
          </div>
        </div>
      </ScrollReveal>

      {/* Benefits */}
      <ScrollReveal>
        <div
          id="benefits"
          className="flex flex-col items-center mt-8 md:mt-32 md:bg-radial-[at_50%_75%] from-[#DAE2FF] from-0% to-white to-60% md:scroll-mt-32"
        >
          <GradiantTag title="Our benefits" />
          <p className="font-semibold md:font-bold text-[22px] md:text-4xl text-black mt-5">
            Why Choose Us?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-20">
            {product.benefits.map((benefit, index) => {
              const isLast = index === product.benefits.length - 1;
              const isEven = product.benefits.length % 2 === 0;
              return (
                <div
                  key={`benefits_` + index}
                  className={`flex flex-col rounded-4xl bg-white/60 relative border md:border-0 ${
                    isLast && !isEven ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="mt-4 px-4 w-[100%] md:mt-5 md:ml-7 md:w-[60%]">
                    <FadeInTextBlock
                      title={benefit.name}
                      description={benefit.description}
                      titleStyle="text-base md:text-2xl mb-1 md:mb-4"
                      descStyle="text-[14px] md:text-base"
                    />
                  </div>
                  <SlideFadeWrapper
                    keyId={benefit.id}
                    className={`relative mt-4 md:mt-0 ${
                      isLast && !isEven
                        ? "min-h-20 md:min-h-60"
                        : "min-h-20 md:min-h-52"
                    } `}
                  >
                    <Image
                      src={benefit.image}
                      alt="Logo"
                      width={isLast && !isEven ? 350 : 260}
                      height={260}
                      className="h-auto max-w-[86px] md:max-w-[350px] max-h-[80px] md:max-h-[320px] absolute bottom-0 right-0"
                    />
                  </SlideFadeWrapper>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* Our customers */}
      <ScrollReveal>
        <div id="our-customers" className="flex flex-col scroll-mt-20">
          <div className="grid grid-col-1 md:grid-cols-2 items-center mt-10 gap-10 ">
            <div className="flex flex-col h-full justify-between">
              <div className="flex flex-col my-10 h-full justify-center items-center md:items-start text-center md:text-start">
                <GradiantTag title="The Minds Behind the Magic" />
                <p className="font-semibold md:font-bold text-[22px] md:text-4xl text-black mt-3 md:mt-8">
                  Built by Fintech Innovators
                </p>
                <p className="hidden md:block font-normal text-base text-[#74767B] mt-3">
                  Our experienced product, security, and engineering teams are
                  dedicated to building secure, scalable, and future-ready
                  payment systems for modern businesses.
                </p>
              </div>
              {/* For Mobile */}
              <div className="md:hidden">
                <ClusteredImageDisplay images={product.ourCustomers.images} />
              </div>
              <div className="h-fit">
                <FeedbackCard
                  key={product.ourCustomers.feedback[0].id}
                  {...product.ourCustomers.feedback[0]}
                />
              </div>
            </div>
            {/* For Web */}
            <div className="hidden md:block">
              <ClusteredImageDisplay images={product.ourCustomers.images} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10">
            {product.ourCustomers?.feedback?.slice(1).map((feedback) => (
              <FeedbackCard key={feedback.id} {...feedback} />
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Contact us */}
      <ScrollReveal>
        <div className="flex flex-col items-center mt-8 md:mt-32">
          <GradiantTag title="Contact us" />
          <p className="font-semibold md:font-bold text-[22px] md:text-4xl text-black mt-3 md:mt-8 text-center md:text-start">
            Lets's Chat, Reach Out to Us
          </p>
          <div className="flex flex-col rounded-4xl p-4 md:p-8 md:min-w-[660px] shadow-md my-8 md:my-16">
            <p className="text-base md:text-2xl font-semibold text-black">
              Get in touch
            </p>
            <p className="text-sm md:text-base font-normal text-[#74767B] mt-1 md:mt-2">
              You can reach us anytime
            </p>
            <ContactUsForm />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
