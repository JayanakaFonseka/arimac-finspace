import { Step } from "@/types/solutions";
import GradiantBorderTag from "../common/GradiantBorderTag";
import SlideFadeWrapper from "../common/SlideFadeWrapper";
import Image from "next/image";
import FadeInTextBlock from "../common/FadeInTextBlock";

type Props = {
  steps: Step[];
};

export const SolutionSteps = ({ steps }: Props) => {
  return (
    <div className="w-full">
      {steps.map((step, index) => {
        const isOdd = index % 2 !== 0;
        return (
          <div
            key={step.id}
            className={`grid grid-cols-1 md:grid-cols-2 gap-2 items-center mt-10 ${
              isOdd ? "md:[&>*:first-child]:order-2" : ""
            } ${index > 0 && "md:-mt-20"}`}
          >
            <div>
              <GradiantBorderTag title={step.tagName} />
              <FadeInTextBlock
                title={step.title}
                description={step.description}
                titleStyle="text-4xl font-bold mt-5"
              />
            </div>
            <SlideFadeWrapper
              keyId={step.id}
              className={`w-full flex justify-center ${
                index % 2 !== 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <Image
                src={step.image}
                alt="Logo"
                width={675}
                height={680}
                className="w-auto max-h-[680px] mt-10 md:mt-0"
              />
            </SlideFadeWrapper>
          </div>
        );
      })}
    </div>
  );
};
