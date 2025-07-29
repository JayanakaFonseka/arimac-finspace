"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DropdownIcon from "@/public/icons/dropdown-icon.svg";
import GreenDropdownIcon from "@/public/icons/green-dropdown-icon.svg";
import DropdownContent from "./DropdownContent";
import DropdownPortal from "./DropdownPortal";
import { company, products, solutions } from "@/data/navigation";
import CompanyDropdown from "./CompanyDropdown";
import SolutionsDropdown from "./SolutionsDropdown";
import { LetsTalkButton } from "../common/LetsTalkButton";

const menuItems = ["Products", "Solutions", "Company"];

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [dropdownRect, setDropdownRect] = useState<{
    width: number;
    left: number;
    top: number;
  } | null>(null);

  const headerRef = useRef<HTMLDivElement | null>(null);

  const updateDropdownRect = () => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      setDropdownRect({
        width: rect.width,
        left: rect.left,
        top: rect.bottom,
      });
    }
  };

  useEffect(() => {
    updateDropdownRect();
    window.addEventListener("resize", updateDropdownRect);
    return () => window.removeEventListener("resize", updateDropdownRect);
  }, []);

  const handleCloseDropdown = () => setHoveredItem(null);

  const renderDropdown = () => {
    const items =
      hoveredItem === "Products"
        ? products
        : hoveredItem === "Solutions"
        ? solutions
        : company;
    if (!dropdownRect) return null;

    if (hoveredItem === "Company") {
      return (
        <CompanyDropdown
          items={company}
          onClose={handleCloseDropdown}
          style={{
            position: "fixed",
            top: dropdownRect.top,
            left: dropdownRect.left,
            width: dropdownRect.width,
            zIndex: 100,
          }}
        />
      );
    } else if (hoveredItem === "Solutions") {
      return (
        <SolutionsDropdown
          items={solutions}
          onClose={handleCloseDropdown}
          style={{
            position: "fixed",
            top: dropdownRect.top,
            left: dropdownRect.left,
            width: dropdownRect.width,
            zIndex: 100,
          }}
        />
      );
    } else {
      return (
        <DropdownContent
          items={products}
          onClose={handleCloseDropdown}
          style={{
            position: "fixed",
            top: dropdownRect.top,
            left: dropdownRect.left,
            width: dropdownRect.width,
            zIndex: 100,
          }}
        />
      );
    }
  };

  return (
    <div
      ref={headerRef}
      className="sticky top-0 z-20 bg-[#D8D8D833] backdrop-blur-lg rounded-2xl"
    >
      <div className="flex items-center justify-between px-6 py-4 w-full">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/logos/arimac-finspace-logo.svg"
              alt="Logo"
              width={179}
              height={38}
              className="min-w-[179px]"
            />
          </Link>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <div
              key={item}
              className="relative flex flex-row gap-2 min-w-[110px]"
              onMouseEnter={() => {
                setHoveredItem(item);
                updateDropdownRect();
              }}
            >
              <button
                className={`text-base font-medium text-[#2c2c2c] ${
                  hoveredItem === item && "text-[#158D54] font-semibold"
                }`}
              >
                {item}
              </button>
              <Image
                src={hoveredItem === item ? GreenDropdownIcon : DropdownIcon}
                alt="Dropdown"
                width={24}
                height={24}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <LetsTalkButton btnStyle="px-4 py-2 bg-[#158D54] text-white rounded-full text-sm" />
      </div>

      {/* Portal Dropdown */}
      {hoveredItem && dropdownRect && (
        <DropdownPortal>{renderDropdown()}</DropdownPortal>
      )}
    </div>
  );
}
