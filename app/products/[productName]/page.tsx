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
      <div className="sticky top-0 z-30 flex flex-row bg-[#ffffff] justify-between items-center mb-6 px-6 py-4">
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
        className="grid grid-cols-1 md:grid-cols-2 items-center justify-between scroll-mt-20"
      >
        <div className="flex flex-col">
          <FadeInTextBlock
            title={product.name}
            description={product.description}
          />
          <div className="flex-row mt-8">
            <LetsTalkButton btnStyle="px-4 py-3 bg-[#158D54] text-white font-normal text-lg rounded-full w-[227px] max-w-[227px] mr-4 mb-4" />
            <BookADemoButton btnStyle="px-4 py-3 bg-white text-[#158D54] font-normal text-lg rounded-full w-[227px] max-w-[227px] border-1 border-[#158D54]" />
          </div>
        </div>
        <SlideFadeWrapper keyId={product.id} className="w-full">
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
          className="flex flex-col items-center mt-32 scroll-mt-32"
        >
          <GradiantTag title="Core features" />
          <p className="font-bold text-4xl text-black mt-5">
            Discover the Key Features
          </p>
          <FeaturesSlider features={product.features} />
        </div>
      </ScrollReveal>

      {/* Benefits */}
      <ScrollReveal>
        <div
          id="benefits"
          className="flex flex-col items-center mt-32 bg-radial-[at_50%_75%] from-[#DAE2FF] from-0% to-white to-60% scroll-mt-32"
        >
          <GradiantTag title="Our benefits" />
          <p className="font-bold text-4xl text-black mt-5">Why Choose Us?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            {product.benefits.map((benefit, index) => {
              const isLast = index === product.benefits.length - 1;
              const isEven = product.benefits.length % 2 === 0;
              return (
                <div
                  key={`benefits_` + index}
                  className={`flex flex-col rounded-4xl bg-white/60 relative ${
                    isLast && !isEven ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="mt-5 ml-7 w-[60%]">
                    <FadeInTextBlock
                      title={benefit.name}
                      description={benefit.description}
                    />
                  </div>
                  <SlideFadeWrapper
                    keyId={benefit.id}
                    className={`relative ${
                      isLast && !isEven ? "min-h-60" : "min-h-52"
                    } `}
                  >
                    <Image
                      src={benefit.image}
                      alt="Logo"
                      width={isLast && !isEven ? 350 : 260}
                      height={260}
                      className="h-auto max-h-[320px] absolute bottom-0 right-0"
                    />
                  </SlideFadeWrapper>
                  {/* <div className="bg-amber-300 min-h-20 absolute z-10"></div> */}
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      {/* Our customers */}
      <ScrollReveal>
        <div id="our-customers" className="flex flex-col scroll-mt-20">
          <div className="grid grid-col-1 md:grid-cols-2 items-center mt-10 gap-10">
            <div className="my-10">
              <GradiantTag title="Our customers" />
              <p className="font-bold text-4xl text-black mt-8">
                Don't Take Our Word For It. Customers Say It Best
              </p>
              <p className="font-normal text-base text-[#74767B] mt-3">
                Get to know the incredible businesses that have achieved success
                with Finspace
              </p>
              <button className="px-4 py-3 bg-white text-[#158D54] font-normal text-lg rounded-full w-[227px] max-w-[227px] border-1 border-[#158D54] my-10">
                View all
              </button>
              <FeedbackCard
                key={product.ourCustomers.feedback[0].id}
                {...product.ourCustomers.feedback[0]}
              />
            </div>
            <ClusteredImageDisplay images={product.ourCustomers.images} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {product.ourCustomers?.feedback?.slice(1).map((feedback) => (
              <FeedbackCard key={feedback.id} {...feedback} />
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Contact us */}
      <ScrollReveal>
        <div className="flex flex-col items-center mt-32">
          <GradiantTag title="Contact us" />
          <p className="font-bold text-4xl text-black mt-8">
            Lets's Chat, Reach Out to Us
          </p>
          <div className="flex flex-col rounded-4xl p-8 md:min-w-[660px] shadow-md my-16">
            <p className="text-2xl font-semibold text-black">Get in touch</p>
            <p className="text-base font-normal text-[#74767B] mt-2">
              You can reach us anytime
            </p>
            <ContactUsForm />
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
