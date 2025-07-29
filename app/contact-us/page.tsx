import { ContactUsForm } from "../components/common/ContactUsForm";

export default async function ContactUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex flex-col mt-10">
        <p className="text-black font-bold text-4xl">
          Let’s get you{" "}
          <span className="bg-gradient-to-r from-[#1EC677] to-[#79CC56] bg-clip-text text-transparent font-bold text-4xl">
            set up.
          </span>
        </p>
        <p className="text-black font-normal text-base mt-6">
          Connect with us now for fast and effective solutions—submit the form
          below.
        </p>
        <p className="text-3xl text-black font-normal mt-14">
          Finspace powers businesses globally with{" "}
          <span className="text-green-600 text-3xl font-normal">
            cutting-edge
          </span>{" "}
          solutions tailored to drive success.
        </p>
      </div>

      <ContactUsForm />
    </div>
  );
}
