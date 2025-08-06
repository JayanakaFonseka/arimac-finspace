"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LetsTalkButton } from "../common/LetsTalkButton";
import { products, solutions, company } from "@/data/navigation";

const mainMenu = [
  { id: 1, name: "Products", direction: "" },
  { id: 2, name: "Solutions", direction: "" },
  { id: 1, name: "Company", direction: "" },
];

export default function MobileMenu() {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [subMenuType, setSubMenuType] = useState("");
  const router = useRouter();

  // Disable scroll when menu is open
  useEffect(() => {
    if (isMainMenuOpen || isSubMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMainMenuOpen, isSubMenuOpen]);

  return (
    <div className="w-full px-4">
      <div className="flex flex-row justify-between py-2.5 w-full">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            onClick={() => {
              setIsMainMenuOpen(false);
              setIsSubMenuOpen(false);
            }}
          >
            <Image
              src="/logos/arimac-finspace-logo.svg"
              alt="Logo"
              width={121}
              height={24}
              className="min-w-[121px] md:min-w-[179px]"
            />
          </Link>
        </div>
        <Image
          src="/mobile/icons/menu.svg"
          alt="Menu"
          width={24}
          height={24}
          onClick={() => setIsMainMenuOpen(true)}
        />
      </div>

      {/* Main menu */}
      {isMainMenuOpen && (
        <div className="absolute flex flex-col inset-0 bg-white z-[999] px-4">
          <div className="flex justify-between py-2.5">
            <Link
              href="/"
              onClick={() => {
                setIsMainMenuOpen(false);
                setIsSubMenuOpen(false);
              }}
            >
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
              alt="close"
              width={24}
              height={24}
              onClick={() => {
                setIsMainMenuOpen(false);
                setIsSubMenuOpen(false);
              }}
            />
          </div>
          <div className="flex flex-col justify-between h-[90vh] mt-2">
            <div className="flex flex-col">
              {mainMenu.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-row justify-between mt-7 cursor-pointer"
                  onClick={() => {
                    setIsSubMenuOpen(true);
                    setIsMainMenuOpen(false);
                    setSubMenuType(item.name);
                  }}
                >
                  <p className="text-base font-medium text-[#333333]">
                    {item.name}
                  </p>
                  <Image
                    src="/mobile/icons/navigate_next.svg"
                    alt="next"
                    width={24}
                    height={24}
                    // onClick={() => setIsMainMenuOpen(false)}
                  />
                </div>
              ))}
            </div>
            <Link href="/contact-us" onClick={() => setIsMainMenuOpen(false)}>
              <LetsTalkButton btnStyle="flex-end px-4 py-3 bg-[#158D54] text-white font-normal text-[14px] rounded-full w-full mb-8 cursor-pointer" />
            </Link>
          </div>
        </div>
      )}
      {/* Sub menu */}
      {isSubMenuOpen && (
        <div className="absolute flex flex-col inset-0 bg-white z-[999] px-4">
          <div className="flex justify-between py-2.5">
            <div className="flex flex-row">
              <Image
                src="/mobile/icons/arrow_back.svg"
                alt="back"
                width={24}
                height={24}
                onClick={() => {
                  setIsSubMenuOpen(false);
                  setIsMainMenuOpen(true);
                }}
              />
              <p className="text-[17px] font-bold text-[#333333] ml-4">
                {subMenuType}
              </p>
            </div>
            <Image
              src="/mobile/icons/close.svg"
              alt="close"
              width={24}
              height={24}
              onClick={() => {
                setIsMainMenuOpen(false);
                setIsSubMenuOpen(false);
              }}
            />
          </div>
          <div className="flex flex-col justify-between h-[90vh] mt-2">
            <div className="flex flex-col">
              {(subMenuType === "Solutions"
                ? solutions
                : subMenuType === "Products"
                ? products
                : company
              ).map((item) => (
                <div
                  key={item.name}
                  className="flex flex-row justify-between mt-7 cursor-pointer"
                  onClick={() => {
                    router.push(item.route);
                    setIsMainMenuOpen(false);
                    setIsSubMenuOpen(false);
                  }}
                >
                  {subMenuType !== "Products" ? (
                    <div className="flex flex-row justify-between w-full">
                      <p className="text-base font-medium text-[#333333]">
                        {item.name}
                      </p>
                      <Image
                        src="/mobile/icons/navigate_next.svg"
                        alt="next"
                        width={24}
                        height={24}
                        onClick={() => () => setIsMainMenuOpen(false)}
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col w-full">
                      <div className="flex flex-row justify-between">
                        <Image
                          src={item.logo!}
                          alt="logo"
                          width={114}
                          height={24}
                          className="w-auto max-h-[24px] object-fill"
                          onClick={() => () => setIsMainMenuOpen(false)}
                        />
                        <Image
                          src="/mobile/icons/navigate_next.svg"
                          alt="next"
                          width={24}
                          height={24}
                          onClick={() => () => setIsMainMenuOpen(false)}
                        />
                      </div>
                      <div className="pr-8">
                        <p className="text-base font-semibold text-black mt-3">
                          {item.name}
                        </p>
                        <p className="text-[14px] font-normal text-[#74767B] mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Link
              href="/contact-us"
              onClick={() => {
                setIsMainMenuOpen(false);
                setIsSubMenuOpen(false);
              }}
            >
              <LetsTalkButton btnStyle="flex-end px-4 py-3 bg-[#158D54] text-white font-normal text-[14px] rounded-full w-full mb-8 cursor-pointer" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
