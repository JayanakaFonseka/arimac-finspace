"use client";

import { useState } from "react";
import CustomerCard from "./CustomerCard";
import { Checkbox } from "@mui/material";

const filters = [
  "People's Bank",
  "AIA",
  "Qatar Pay Later",
  "Visa",
  "Softlogic",
  "Cashew",
  "Riyad Bank",
  "Asia Securities",
  "Friendi Pay",
];

const customers = [
  {
    title: "How People’s Bank App Became Sri Lanka’s No. 1",
    image: "/images/company-customers/peoples-bank/peoples-bank.jpg",
    tags: ["People's Bank"],
    url: "/company/customers/peoples-bank",
  },
  {
    title: "Visa USA Is Powering the Future of Global Payments",
    image: "/images/company-customers/visa/visa.png",
    tags: ["Visa"],
    url: "/company/customers/visa",
  },
  {
    title: "Softlogic’s Super App Is Redefining Everyday Life in Sri Lanka",
    image: "/images/company-customers/softlogic/softlogic.jpg",
    tags: ["Softlogic"],
    url: "/company/customers/softlogic",
  },
  {
    title: "How AIA Revolutionized Customer Experience Across Asia",
    image: "/images/company-customers/aia/aia.jpg",
    tags: ["AIA"],
    url: "/company/customers/aia",
  },
  {
    title: "Cashew Is Changing the Game in Everyday Fintech",
    image: "/images/company-customers/cashew/cashew.jpg",
    tags: ["Cashew"],
    url: "/company/customers/cashew",
  },
  {
    title: "Qatar PayLater Makes Halal Payments Simple, Smart, and Seamless",
    image: "/images/company-customers/qpl/qpl.png",
    tags: ["Qatar Pay Later"],
    url: "/company/customers/paylater",
  },
  {
    title: "FriendyPay Turns Your Phone into Kuwait’s Most Trusted Wallet",
    image: "/images/company-customers/friendi-pay/friendi-pay.jpg",
    tags: ["Friendi Pay"],
    url: "/company/customers/friendi-pay",
  },
  {
    title: "Inside Riyad Bank’s Bold Leap into Smart Banking Innovation",
    image: "/images/company-customers/riyad-bank/riyad-bank.jpg",
    tags: ["Riyad Bank"],
    url: "/company/customers/riyad-bank",
  },
  {
    title:
      "Expert takes on emerging trends and evolving tech in digital finance.",
    image: "/images/company-customers/asia-securities/asia-securities.png",
    tags: ["Asia Securities"],
    url: "/company/customers/asia-securities",
  },
];

export default function CustomerShowcase() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["All"]);

  const toggleFilter = (filter: string) => {
    if (filter === "All") {
      setSelectedFilters(["All"]);
    } else {
      setSelectedFilters((prev) => {
        const updated = prev.includes(filter)
          ? prev.filter((f) => f !== filter)
          : [...prev.filter((f) => f !== "All"), filter];
        return updated.length === 0 ? ["All"] : updated;
      });
    }
  };

  const filteredResults = selectedFilters.includes("All")
    ? customers
    : customers.filter((c) =>
        c.tags.some((tag) => selectedFilters.includes(tag))
      );

  return (
    // <div className="flex flex-wrap lg:flex-nowrap gap-6">
    <div className="flex flex-row gap-6 w-full mt-14">
      {/* Filters */}
      {/* <div className="w-full lg:w-2/5"> */}
      <div className="w-[30%]">
        <h2 className="text-2xl font-semibold mb-4 text-black">Customers</h2>
        <div className="flex flex-col">
          <label className="flex items-center text-base font-normal gap-2 text-[#74767B]">
            {/* <input
              type="checkbox"
              checked={selectedFilters.includes("All")}
              onChange={() => toggleFilter("All")}
            /> */}
            <Checkbox
              checked={selectedFilters.includes("All")}
              onChange={() => toggleFilter("All")}
              name="all"
              sx={{
                color: "#000000",
                "&.Mui-checked": {
                  color: "#3B36AB",
                },
                "& .MuiSvgIcon-root": {
                  fontSize: 24,
                },
              }}
            />
            All
          </label>
          {filters.map((filter) => (
            <label
              key={filter}
              className="flex items-center  text-base font-normal gap-2 text-[#74767B]"
            >
              {/* <input
                type="checkbox"
                checked={selectedFilters.includes(filter)}
                onChange={() => toggleFilter(filter)}
              /> */}
              <Checkbox
                checked={selectedFilters.includes(filter)}
                onChange={() => toggleFilter(filter)}
                name={filter}
                sx={{
                  color: "#000000",
                  "&.Mui-checked": {
                    color: "#3B36AB",
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: 24,
                  },
                }}
              />
              {filter}
            </label>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="w-[70%] grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredResults.map((item) => (
          <CustomerCard
            key={item.title}
            title={item.title}
            image={item.image}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
}
