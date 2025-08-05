"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LetsTalkButton } from "../common/LetsTalkButton";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Disable scroll when menu is open
  //   useEffect(() => {
  //     if (isOpen) {
  //       document.body.classList.add("overflow-hidden");
  //     } else {
  //       document.body.classList.remove("overflow-hidden");
  //     }

  //     // Cleanup on unmount
  //     return () => {
  //       document.body.classList.remove("overflow-hidden");
  //     };
  //   }, [isOpen]);

  const handleExplore = (url: string) => {
    router.push(url);
  };

  return (
    <div>
      <Image
        src="/mobile/icons/menu.svg"
        alt="Menu"
        width={24}
        height={24}
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div className="absolute flex flex-col top-0 left-0 w-full h-[100vh] bg-amber-300 z-50">
          <div className="flex justify-between py-2.5">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src="/logos/arimac-finspace-logo.svg"
                alt="Logo"
                width={121}
                height={24}
                className="min-w-[121px]"
              />
            </Link>
            <Image
              src="/mobile/icons/close.svg"
              alt="Close"
              width={24}
              height={24}
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className="flex flex-col justify-between h-[90vh]">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between mt-5 cursor-pointer">
                <p className="text-base font-medium text-[#333333]">Products</p>
                <Image
                  src="/mobile/icons/navigate_next.svg"
                  alt="Close"
                  width={24}
                  height={24}
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <div className="flex flex-row justify-between mt-5 cursor-pointer">
                <p className="text-base font-medium text-[#333333]">
                  Solutions
                </p>
                <Image
                  src="/mobile/icons/navigate_next.svg"
                  alt="Close"
                  width={24}
                  height={24}
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <div className="flex flex-row justify-between mt-5 cursor-pointer">
                <p className="text-base font-medium text-[#333333]">Company</p>
                <Image
                  src="/mobile/icons/navigate_next.svg"
                  alt="Close"
                  width={24}
                  height={24}
                  onClick={() => setIsOpen(false)}
                />
              </div>
            </div>
            <LetsTalkButton btnStyle="flex-end px-4 py-3 bg-[#158D54] text-white font-normal text-[14px] rounded-full w-full mb-4 cursor-pointer" />
          </div>
        </div>
      )}
    </div>
  );
}
