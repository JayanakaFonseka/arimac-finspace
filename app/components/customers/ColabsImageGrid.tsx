import Image from "next/image";

type Colab = {
  id: number;
  title: string;
  image: string;
};

type Props = {
  colabs: Colab[];
};

export default function ColabsImageGrid({ colabs }: Props) {
  // Group colabs in chunks of 2 for each row
  const grouped = [];
  for (let i = 0; i < colabs.length; i += 2) {
    grouped.push(colabs.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col w-full mt-4 md:mt-10">
      {grouped.map((pair, rowIndex) => {
        const isEvenRow = rowIndex % 2 === 0;

        return (
          <div
            key={rowIndex}
            className="flex flex-col md:flex-row w-full gap-4 md:gap-10 pt-4 md:pt-10"
          >
            {pair.map((colab, colIndex) => {
              // For each row:
              // even row => [60%, 40%]
              // odd row  => [40%, 60%]
              const widthClass =
                (isEvenRow && colIndex === 0) || (!isEvenRow && colIndex === 1)
                  ? "md:w-[40%]"
                  : "md:w-[60%]";

              return (
                <div
                  key={colab.id}
                  className={`relative w-full h-[300px] md:h-[376px] ${widthClass}`}
                >
                  <Image
                    src={colab.image}
                    alt={colab.title}
                    fill
                    className="object-cover rounded-3xl"
                  />

                  {/* Text + fade */}
                  <div className="absolute bottom-0 left-0 w-full p-4 z-10">
                    <div className="text-white relative p-2 z-20">
                      <h3 className="text-base md:text-2xl font-semibold text-white">
                        {colab.title}
                      </h3>
                      {/* <p className="text-base font-normal text-[#EAEBEB] mt-1">
                        {colab.description}
                      </p> */}
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
