import ClientShowcase from "./components/home/ClientShowcase";
import FintechHero from "./components/home/FintechHero";
import SolutionCarousel from "./components/home/SolutionCarousel";
import { LetsTalkButton } from "./components/common/LetsTalkButton";
import ScrollReveal from "./components/common/ScrollReveal";
import FintechHeroMobile from "./components/mobile/home/FintechHeroMobile";
import SolutionCarouselMobile from "./components/mobile/home/SolutionCarouselMobile";
import ClientShowcaseMobile from "./components/mobile/home/ClientShowcaseMobile";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="hidden md:flex max-[1200px]:flex-col flex-row pl-6 rounded-3xl bg-gradient-to-bl from-[#3c36ab25] from-0% to-[#3c36ab05] to-80%">
        <FintechHero />
      </div>
      <div className="md:hidden flex-col bg-gradient-to-bl from-[#3c36ab25] from-0% to-[#3c36ab05] to-80% -mx-4 px-4">
        <FintechHeroMobile />
      </div>

      <ScrollReveal>
        <div className="flex flex-col items-center mt-8 md:mt-32 w-full">
          <p className="text-[22px] md:text-5xl font-semibold text-black text-center">
            Want to upgrade your FinTech capabilities without hassle?
          </p>
          {/* <SolutionSlider /> */}
          <div className="hidden md:block">
            <SolutionCarousel />
          </div>
          <div className="md:hidden">
            <SolutionCarouselMobile />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="hidden md:flex flex-col items-center mt-32 w-full">
          <p className="text-5xl font-semibold text-black">
            Our Work. Their Wins.
          </p>
          <p className="text-lg font-normal text-[#74767B] mt-6">
            Discover the stories behind smarter systems and scalable growth.
          </p>
          <ClientShowcase />
        </div>
        <div className="md:hidden flex flex-col text-center mt-8 w-full">
          <p className="text-[22px] font-semibold text-black">
            Our Work. Their Wins.
          </p>
          <p className="text-[12px] font-normal text-[#74767B] mt-1">
            Discover the stories behind smarter systems and scalable growth.
          </p>
          <ClientShowcaseMobile />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex flex-col items-center mt-8 md:p-36 md:mt-32 md:my-20 md:rounded-3xl md:bg-gradient-to-bl from-[#3c36ab25] from-0% to-[#3c36ab05] to-80%">
          <p className="text-[18px] md:text-5xl font-semibold text-black">
            Contact Us
          </p>
          <p className="text-[12px] md:text-2xl font-normal text-[#74767B] text-center mt-1 md:mt-10 md:px-16">
            We’re here to assist with your financial needs. Our innovative
            fintech platform provides the tools and insights for smooth
            management and growth. Have questions or need support? Contact us to
            explore how we can help.
          </p>
          <LetsTalkButton btnStyle="py-2 md:p-4 bg-[#158D54] text-white rounded-full text-[14px] md:text-lg font-normal w-full md:w-[290px] mt-8 md:mt-10 cursor-pointer" />
        </div>
      </ScrollReveal>
    </div>
  );
}
