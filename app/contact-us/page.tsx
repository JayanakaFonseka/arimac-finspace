import { ContactUsForm } from "../components/common/ContactUsForm";

export default async function ContactUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 bg-radial-[at_0%_100%] md:bg-radial-[at_50%_50%] from-[#4844c927] from-30% md:from-10% to-[#1ec6780a] md:to-[#ffffff] to-80% md:to-80% -m-4 p-4 pb-12 -mb-13">
      <div className="flex flex-col mt-10">
        <p className="text-black font-bold text-[32px] md:text-4xl">
          Let’s get you{" "}
          <span className="bg-gradient-to-r from-[#1EC677] to-[#79CC56] bg-clip-text text-transparent font-bold text-[32px] md:text-4xl">
            set up.
          </span>
        </p>
        <p className="text-black font-normal text-[12px] md:text-base mt-1 md:mt-6">
          Connect with us now for fast and effective solutions—submit the form
          below.
        </p>
        <p className="text-[18px] md:text-3xl text-black font-normal mt-8 md:mt-14">
          Finspace powers businesses globally with{" "}
          <span className="text-green-600 text-[18px] md:text-3xl font-normal">
            cutting-edge
          </span>{" "}
          solutions tailored to drive success.
        </p>
      </div>

      <ContactUsForm buttonStyle="!bg-[#158D54] !border-0 text-white" />
    </div>
  );
}
