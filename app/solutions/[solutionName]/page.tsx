import { notFound } from "next/navigation";
import { getSolutionByName } from "@/lib/solutions";
import Image from "next/image";
import GradiantTag from "@/app/components/common/GradiantTag";
import FadeInTextBlock from "@/app/components/common/FadeInTextBlock";
import SlideFadeWrapper from "@/app/components/common/SlideFadeWrapper";
import { ContactUsForm } from "@/app/components/common/ContactUsForm";
import GradiantBorderTag from "@/app/components/common/GradiantBorderTag";
import { SolutionSteps } from "@/app/components/solutions/SolutionSteps";
import BenefitImageGrid from "@/app/components/solutions/BenefitImageGrid";
import FeedbackCardCarousel from "@/app/components/solutions/FeedbackCardCarousel";
import { LetsTalkButton } from "@/app/components/common/LetsTalkButton";
import { BookADemoButton } from "@/app/components/common/BookADemoButton";
import ScrollReveal from "@/app/components/common/ScrollReveal";
import FeedbackCardCarouselMobile from "@/app/components/mobile/solutions/FeedbackCardCarouselMobile";

type Props = {
  params: Promise<{
    solutionName: string;
  }>;
};

export default async function SolutionPage({ params }: Props) {
  // Await params before accessing properties
  const resolvedParams = await params;
  const solution = await getSolutionByName(resolvedParams.solutionName);

  if (!solution) return notFound();

  return (
    <div className="flex flex-col">
      {/* Overview */}
      <div
        id="overview"
        className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-6 mt-6"
      >
        <div className="flex flex-col items-center md:items-start text-center md:text-start">
          <GradiantBorderTag title={solution.name} />
          <FadeInTextBlock
            title={solution.title}
            description={solution.description}
            titleStyle="text-[32px] md:text-5xl font-bold text-black mt-3 md:mt-6"
          />
          <div className="flex-row mt-8 w-full">
            <LetsTalkButton btnStyle="px-4 py-3 bg-[#158D54] text-white font-normal text-[14px] md:text-lg rounded-full w-full md:w-[227px] md:max-w-[227px] md:mr-4 mb-4 cursor-pointer" />
            <BookADemoButton btnStyle="px-4 py-3 bg-white text-[#158D54] font-normal text-[14px] md:text-lg rounded-full w-full md:w-[227px] md:max-w-[227px] border-1 border-[#158D54] cursor-pointer -mt-1 md:mt-0" />
          </div>
        </div>
        <SlideFadeWrapper
          keyId={solution.id}
          className="hidden md:block w-full mt-10"
        >
          <Image
            src={solution.image}
            alt="Logo"
            width={750}
            height={500}
            className="w-full h-auto"
          />
        </SlideFadeWrapper>
      </div>

      {/* How it works */}
      <ScrollReveal>
        <div id="features" className="flex flex-col items-center mt-8 md:mt-32">
          <GradiantTag title={solution.stepsData.tagName} />
          <p className="text-center md:text-start font-bold text-[22px] md:text-4xl text-black mt-3 md:mt-5">
            {solution.stepsData.title}
          </p>
          <SolutionSteps steps={solution.stepsData.steps} />
        </div>
      </ScrollReveal>

      {/* Benefits */}
      <ScrollReveal>
        <div id="benefits" className="flex flex-col items-center mt-8 md:mt-32">
          <GradiantTag title={solution.benefitsData.tagName} />
          <p className="text-center md:text-start font-bold text-[22px] md:text-4xl text-black mt-3 md:mt-5">
            {solution.benefitsData.title}
          </p>
          <BenefitImageGrid benefits={solution.benefitsData.benefits} />
        </div>
      </ScrollReveal>

      {/* Clients */}
      <ScrollReveal>
        <div id="clients" className="flex flex-col items-center mt-8 md:mt-32">
          <GradiantTag title={solution.ourCustomers.tagName} />
          <p className="text-center md:text-start font-bold text-[22px] md:text-4xl text-black mt-3 md:mt-5">
            {solution.ourCustomers.title}
          </p>
          <div className="hidden md:block">
            <FeedbackCardCarousel />
          </div>
          <div className="md:hidden">
            <FeedbackCardCarouselMobile />
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
