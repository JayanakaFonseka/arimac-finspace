import Image from "next/image";

type Benefit = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type Props = {
  benefits: Benefit[];
};

export default function BenefitImageGrid({ benefits }: Props) {
  // Group benefits in chunks of 2 for each row
  const grouped = [];
  for (let i = 0; i < benefits.length; i += 2) {
    grouped.push(benefits.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col w-full mt-10">
      {grouped.map((pair, rowIndex) => {
        const isEvenRow = rowIndex % 2 === 0;

        return (
          <div
            key={rowIndex}
            className="flex flex-col md:flex-row w-full gap-10 pt-10"
          >
            {pair.map((benefit, colIndex) => {
              // For each row:
              // even row => [60%, 40%]
              // odd row  => [40%, 60%]
              const widthClass =
                (isEvenRow && colIndex === 0) || (!isEvenRow && colIndex === 1)
                  ? "md:w-[60%]"
                  : "md:w-[40%]";

              return (
                <div
                  key={benefit.id}
                  className={`relative w-full h-[300px] md:h-[500px] ${widthClass}`}
                >
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover rounded-3xl"
                  />

                  {/* Text + fade */}
                  <div className="absolute bottom-0 left-0 w-full p-4 z-10">
                    <div className="text-white relative p-2 z-20">
                      <h3 className="text-4xl font-bold text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-base font-normal text-[#EAEBEB] mt-1">
                        {benefit.description}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black/100 from-0% to-transparent to-100% z-10 rounded-b-3xl" />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
