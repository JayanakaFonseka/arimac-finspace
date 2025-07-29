import Image from "next/image";
import SlideFadeWrapper from "../common/SlideFadeWrapper";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  image: string;
  url: string;
};

export default function CustomerCard({ title, image, url }: Props) {
  const router = useRouter();
  const handleViewMore = (url: string) => {
    router.push(url);
  };

  return (
    <div
      className="relative overflow-hidden rounded-4xl max-h-[340px] hover:shadow-2xl cursor-pointer"
      onClick={() => handleViewMore(url)}
    >
      <SlideFadeWrapper keyId={title}>
        <Image
          src={image}
          alt={image}
          width={380}
          height={340}
          className="w-full h-[340px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-5 flex flex-col justify-end">
          <p className="text-white text-base font-semibold">{title}</p>
          <button className="flex text-white text-base font-normal mt-3 cursor-pointer">
            Read now
          </button>
        </div>
      </SlideFadeWrapper>
    </div>
  );
}
