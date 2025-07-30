"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { NavItem } from "@/data/navigation";
import { useState } from "react";

type Props = {
  items: NavItem[];
  onClose: () => void;
  style?: React.CSSProperties;
};

export default function DropdownContent({ items, onClose, style }: Props) {
  const [selectedItem, setSelectedItem] = useState<NavItem>(items[0]);
  const router = useRouter();

  const handleExplore = () => {
    onClose();
    router.push(selectedItem.route);
  };

  return (
    <div
      style={style}
      className="fixed top-[90px] left-[4vw] w-full max-w-[1296px] px-6 py-6 bg-white shadow-xl rounded-2xl border-t z-[100] flex flex-row justify-between"
      onMouseLeave={onClose}
    >
      {/* Left List */}
      <div className="w-[50%]">
        {items.map((item) => (
          <p
            key={item.name}
            onClick={() => setSelectedItem(item)}
            className={`w-[50%] text-lg text-gray-700 font-normal p-4 mt-2 rounded-2xl cursor-pointer
                        ${
                          selectedItem.name === item.name
                            ? "bg-[#E0E0FF] font-semibold"
                            : "hover:bg-[#EFEFFF]"
                        }`}
          >
            {item.name}
          </p>
        ))}
      </div>

      {/* Right Content */}
      <div className="relative w-[50%]">
        <Image
          src={selectedItem.image}
          alt={selectedItem.name}
          width={578}
          height={287}
          className="w-full rounded-t-2xl max-h-[287px] object-cover"
        />
        {selectedItem.logo && (
          <div className="absolute p-4 right-4 top-6 bg-white rounded-2xl">
            <Image
              src={selectedItem.logo}
              alt={`${selectedItem.name} Logo`}
              width={90}
              height={32}
            />
          </div>
        )}
        <div className="p-4 bg-[#635bff10] rounded-b-2xl">
          <p className="text-[26px] font-semibold text-black">
            {selectedItem.heading}
          </p>
          <p className="text-sm font-normal text-[#74767B] mt-2">
            {selectedItem.description}
          </p>
          <button
            onClick={handleExplore}
            className="bg-transparent text-[#158D54] font-medium text-base rounded-full w-fit border-1 border-[#158D54] px-6 py-2 mt-4 cursor-pointer"
          >
            Explore now
          </button>
        </div>
      </div>
    </div>
  );
}
