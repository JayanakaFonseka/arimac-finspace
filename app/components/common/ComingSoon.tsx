import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* <Image
          src={coming_soon_avatar}
          alt="thumbnail"
          style={{
            objectFit: "fill",
            width: "35%",
            height: "35%",
          }}
        /> */}
      <h2
        className="font-bold text-[3.75rem] leading-[4.2rem] my-3"
        style={{
          background: "linear-gradient(95.61deg, #E63C2E 0%, #9747FF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Coming Soon!
      </h2>
      <p className="text-[#9F9F9F] font-normal text-[1rem]">
        Something awesome is on the way!
      </p>
      <p className="text-[#9F9F9F] font-normal text-[1rem]">Stay tuned</p>
    </div>
  );
}
