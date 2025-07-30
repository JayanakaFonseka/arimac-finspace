import ClientShowcase from "./components/home/ClientShowcase";
import FintechHero from "./components/home/FintechHero";
import SolutionCarousel from "./components/home/SolutionCarousel";
import { LetsTalkButton } from "./components/common/LetsTalkButton";
import ScrollReveal from "./components/common/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex max-[1200px]:flex-col flex-row pl-6 rounded-3xl bg-gradient-to-bl from-[#3c36ab25] from-0% to-[#3c36ab05] to-80%">
        <FintechHero />
      </div>

      <ScrollReveal>
        <div className="flex flex-col items-center mt-32 w-full">
          <p className="text-5xl font-semibold text-black text-center">
            Want to upgrade your FinTech capabilities without hassle?
          </p>
          {/* <SolutionSlider /> */}
          <SolutionCarousel />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex flex-col items-center mt-32 w-full">
          <p className="text-5xl font-semibold text-black">
            Our Work. Their Wins.
          </p>
          <p className="text-lg font-normal text-[#74767B] mt-6">
            Discover the stories behind smarter systems and scalable growth.
          </p>
          <ClientShowcase />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex flex-col items-center p-36 rounded-3xl bg-gradient-to-bl from-[#3c36ab25] from-0% to-[#3c36ab05] to-80% mt-32 my-20">
          <p className="text-5xl font-semibold text-black">Contact Us</p>
          <p className="text-2xl font-normal text-[#74767B] text-center mt-10 md:px-16">
            We’re here to assist with your financial needs. Our innovative
            fintech platform provides the tools and insights for smooth
            management and growth. Have questions or need support? Contact us to
            explore how we can help.
          </p>
          <LetsTalkButton btnStyle="p-4 bg-[#158D54] text-white rounded-full text-lg font-normal w-[290px] mt-10 cursor-pointer" />
        </div>
      </ScrollReveal>
    </div>
  );
}
