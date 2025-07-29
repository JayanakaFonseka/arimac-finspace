"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const LogosGrid = ({ clients }: any) => {
  const router = useRouter();
  const handleViewMore = (url: string) => {
    router.push(url);
  };

  return (
    <>
      {clients.map((client: any, index: any) => (
        <Image
          key={index}
          src={client.clientLogo}
          alt={`Client ${client.id}`}
          width={80}
          height={72}
          className="w-fit min-w-[120px] max-h-[72px] object-contain mt-10 cursor-pointer"
          onClick={() => handleViewMore(client.redirectURL)}
        />
      ))}
    </>
  );
};
