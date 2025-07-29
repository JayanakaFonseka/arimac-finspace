import { Feedback } from "@/types/products";
import Image from "next/image";

type Props = Feedback;

export const FeedbackCard = ({
  id,
  comment,
  company,
  designation,
  image,
}: Props) => {
  return (
    <div
      key={`customer-feedback-${id}`}
      className="p-6 rounded-4xl shadow-md bg-white border-1 border-[#5953E8] mt-10"
    >
      <p className="text-base font-normal text-gray-700">{comment}</p>
      {/* <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={`${company} - ${designation}`}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <p className="text-base font-semibold text-black">{company}</p>
          <p className="text-sm font-normal text-[#74767B]">{designation}</p>
        </div>
      </div> */}
    </div>
  );
};
