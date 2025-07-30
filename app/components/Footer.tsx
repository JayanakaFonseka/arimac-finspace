import Image from "next/image";
import { LetsTalkButton } from "./common/LetsTalkButton";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#F5F5FF] p-10 w-full mx-auto">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-6 border-b border-[#c4c4c4] pb-20">
        <div className="flex flex-col">
          <p className="text-base font-semibold text-black">Arimac Finspace</p>
          <p className="text-base font-normal text-[#74767B] mt-2">
            (+94) 115 219 554
          </p>
          <p className="text-base font-normal text-[#74767B] mt-2">
            Arimac Digital
          </p>
          <p className="text-base font-normal text-[#74767B]">
            No 02, 6 th Lane,
          </p>
          <p className="text-base font-normal text-[#74767B]">Colombo 03,</p>
          <p className="text-base font-normal text-[#74767B]">Sri Lanka.</p>
        </div>
        <div className="flex flex-col">
          <p className="text-base font-semibold text-black">Products</p>
          <Link
            href="/products/pay-now"
            className="text-base font-normal text-[#74767B] mt-2"
          >
            PayNow
          </Link>
          <Link
            href="/products/sherlock"
            className="text-base font-normal text-[#74767B] mt-2"
          >
            Sherlock
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="text-base font-semibold text-black">Company</p>
          <Link
            href="/company/about-finspace"
            className="text-base font-normal text-[#74767B] mt-2"
          >
            About Finspace
          </Link>
          {/* <Link
            href="/company/partners"
            className="text-base font-normal text-[#74767B] mt-2"
          >
            Partners
          </Link> */}
          <Link
            href="/company/customers"
            className="text-base font-normal text-[#74767B] mt-2"
          >
            Customers
          </Link>
          {/* <Link
            href="/company/resources"
            className="text-base font-normal text-[#74767B] mt-2"
          >
            Resources
          </Link> */}
        </div>
        <div className="flex flex-col">
          <p className="text-base font-semibold text-black">Solution</p>
          <Link
            href="/solutions/digital-wallet"
            className="text-base font-normal text-[#74767B] mt-2"
          >
            Digital wallet
          </Link>
          <Link
            href="/solutions/digital-kyc"
            className="text-base font-normal text-[#74767B] mt-2"
          >
            Digital KYC
          </Link>
          <Link
            href="/solutions/internet-banking"
            className="text-base font-normal text-[#74767B] mt-2"
          >
            Internet banking
          </Link>
          <Link
            href="/solutions/merchant-portal"
            className="text-base font-normal text-[#74767B] mt-2"
          >
            Merchant portal
          </Link>
          <Link
            href="/solutions/buy-now-pay-later"
            className="text-base font-normal text-[#74767B] mt-2"
          >
            Buy now and pay later
          </Link>
          <Link
            href="/solutions/fraud-management-system"
            className="text-base font-normal text-[#74767B] mt-2"
          >
            Fraud management system
          </Link>
          <Link
            href="/solutions/remittance"
            className="text-base font-normal text-[#74767B] mt-2"
          >
            Remittance
          </Link>
          <Link
            href="/solutions/loan-originated-system"
            className="text-base font-normal text-[#74767B] mt-2"
          >
            Loan originated system
          </Link>
          <Link
            href="/solutions/cooperate-management-solution"
            className="text-base font-normal text-[#74767B] mt-2"
          >
            Cooperate management solution
          </Link>
        </div>
        <div className="flex flex-col">
          <p className="text-base font-semibold text-black">Contact Us</p>
          <p className="text-base font-normal text-[#74767B] mt-2">
            Contact our team for tailored solutions and support. We're here to
            assist you.
          </p>
          <LetsTalkButton btnStyle="px-4 py-2 bg-[#158D54] text-white rounded-full text-sm max-w-[186px] mt-6 cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center justify-between pt-6 w-full gap-6">
        <div className="flex items-center gap-2">
          <Image
            src="/logos/arimac-finspace-logo.svg"
            alt="Logo"
            width={242}
            height={48}
          />
        </div>
        {/* <div className="flex flex-row gap-10">
          <p className="font-normal text-sm text-black">Terms</p>
          <p className="font-normal text-sm text-black">Privacy</p>
          <p className="font-normal text-sm text-black">Cookies</p>
        </div> */}
        {/* <div className="flex flex-row gap-4">
          <Image src="/social/Linkedin.svg" alt="Logo" width={35} height={35} />
          <Image src="/social/Facebook.svg" alt="Logo" width={35} height={35} />
          <Image src="/social/Youtube.svg" alt="Logo" width={35} height={35} />
          <Image src="/social/Twitter.svg" alt="Logo" width={35} height={35} />
        </div> */}
        <p className="text-sm font-normal text-[#0A142F]">
          © 2025 FinSpace. All rights reserved.
        </p>
      </div>
    </div>
  );
}
