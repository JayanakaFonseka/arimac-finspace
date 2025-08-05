"use client";

import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const feedback = [
  {
    id: 1,
    comment:
      "VISA Global Innovation has been working with Arimac since June of 2019 as part of an important new product development initiative. We have valid MSA and maintenance agreement with Arimac. During this time Arimac has been a flexible partner, enabling us to achieve our targets in a timely manner. I'd also like to note that they go above and beyond to help us maneuver through complex issues during the product development and delivery process.",
    stars: 5,
    name: "Nicholas Kurlas",
    designation: "Senior Director - ",
    company: "Product Innovation, Visa",
    image: "/images/company-customers/visa/nicholas-kurlas.png",
    logo: "/home/clients/logos/visa.png",
  },
  {
    id: 2,
    comment:
      "They have successfully developed the wallet app solution for People's Bank and is currently engaged in various projects including developing of the online account opening solution for People's Bank. It is observed that the said company employs a dynamic architecture and multi-functional capabilities and has succeeded in delivering a comprehensive set of services throughout the project to ensure fruitful and effective delivery of the projects.",
    stars: 5,
    name: "Mangala Kariyawasam",
    designation: "Chief Digital Officer,",
    company: "People’s Bank",
    image: "/images/company-customers/peoples-bank/mangala-kariyawasam.png",
    logo: "/home/clients/logos/peoples-bank.png",
  },
  {
    id: 3,
    comment:
      "We're delighted to announce Arimac as our new digital partner for the next five years, leveraging their proven track record in executing major digital initiatives globally and locally. Collaborating with Softlogic, Arimac is spearheading the establishment of an integrated digital platform accessible through Softlogic's Super App - Softlogic One, facilitating seamless customer interactions and enabling a multi-loyalty program across all Softlogic Group Companies.",
    stars: 5,
    name: "Ashok Pathirage",
    designation: "Chairman,",
    company: "Softlogic Holdings . PLC",
    image: "/images/company-customers/softlogic/ashok-pathirage.png",
    logo: "/home/clients/logos/softlogic.png",
  },
  {
    id: 4,
    comment:
      "The AIA Customer Portal, developed by Arimac takes our valued customers on a secure and cohesive service experience journey. AIA globally and locally is focused on consistently seeking out digitization innovations and leveraging on technological advancements to stay ahead of competition and provide our customers with novel and pioneering levels of service. AIA chose to partner with Arimac, out of a host of providers who pitched for our bid to create the Customer Portal. Arimac won this project as they were the only Tech Company with the knowhow and expertise to build the software using Adobe Experience Manager which was a mandatory requirement for AIA.",
    stars: 5,
    name: "Umeshi De Fonseka",
    designation: "Director IT and ​Chief Technology Officer,",
    company: " AIA Sri Lanka",
    image: "/images/company-customers/aia/umeshi-fonseka.png",
    logo: "/home/clients/logos/aia.png",
  },
];

export default function FeedbackCardCarouselMobile() {
  // const duplicated = [...feedback, ...feedback]; // for looping

  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % feedback.length);
    setActiveIndex((prev) => (prev + 1) % feedback.length);
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + feedback.length) % feedback.length);
    setActiveIndex((prev) => (prev - 1) % feedback.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 10000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
  };

  const handleViewMore = (url: string) => {
    router.push(url);
  };

  return (
    <div className="w-full overflow-hidden relative mt-8">
      <div
        className="overflow-hidden relative rounded-3xl shadow-xl max-w-[343px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {feedback.map((item, index) => (
            <div key={index} className="w-full max-w-[343px] flex-shrink-0">
              <div
                key={index}
                className="relative bg-gradient-to-tl from-[#3c36ab25] from-0% to-[#3c36ab05] to-80% rounded-xl flex-shrink-0"
                style={{ width: 343, height: 500 }}
              >
                {/* Quotation */}
                <div className="absolute top-5 left-5 text-gray-300 text-4xl">
                  <FaQuoteLeft />
                </div>

                {/* Comment */}
                <p
                  className="px-6 pt-16 text-[12px] text-gray-700 leading-relaxed break-words overflow-hidden"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 15,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item.comment}
                </p>

                {/* Bottom section */}
                <div className="absolute bottom-5 left-5 right-5 flex gap-4 items-start">
                  {/* Profile Image */}
                  <div className="w-12 h-12 rounded-full overflow-hidden border">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col text-sm">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={64}
                      height={24}
                      className="my-2 h-[24px] w-fit"
                    />
                    <div className="flex mb-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <FaStar
                          key={i}
                          className={`mr-1 ${
                            i < item.stars ? "text-[#6EBA4E]" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-gray-600">{item.designation}</p>
                    <p className="text-gray-500">{item.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicator bar */}
      <div className="flex items-center justify-center mt-4 gap-2">
        {feedback.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`rounded-full cursor-pointer ${
              current === index
                ? "bg-[#059350] w-[32px] h-[4px]"
                : "bg-[#a5dd8e59] w-[4px] h-[4px]"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
}
