export type NavItem = {
  name: string;
  route: string;
  image: string;
  logo?: string;
  heading: string;
  description: string;
};

// export type CompanyNavItem = {
//   name: string;
//   route: string;
//   heading: string;
//   description: string;
// };

export const products: NavItem[] = [
  {
    name: "PayNow",
    route: "/products/pay-now",
    image: "/header/paynow.png",
    logo: "/logos/paynow-logo.svg",
    heading: "PayNow",
    description: "Empower Your Customers. Strengthen Your Cash Flow",
  },
  {
    name: "Sherlock",
    route: "/products/sherlock",
    image: "/header/frauxai.png",
    logo: "/logos/sherlock-logo.svg",
    heading: "Sherlock",
    description:
      "Start your path to protecting your finances with our innovative fraud management tools.",
  },
];

export const solutions: NavItem[] = [
  {
    name: "Digital wallet",
    route: "/solutions/digital-wallet",
    image: "/header/digital-wallet.png",
    heading: "Digital wallet",
    description: "Secure, seamless transactions at your customer’s fingertips.",
  },
  {
    name: "Digital KYC",
    route: "/solutions/digital-kyc",
    image: "/header/digital-kyc.png",
    heading: "Digital KYC",
    description:
      "Start your path to protecting your finances with our innovative fraud management tools.",
  },
  {
    name: "Internet banking",
    route: "/solutions/internet-banking",
    image: "/header/internet-banking.png",
    heading: "Internet banking",
    description: "Modern banking made accessible—anytime, anywhere",
  },
  {
    name: "Merchant management portal",
    route: "/solutions/merchant-portal",
    image: "/header/merchant-portal.png",
    heading: "Merchant management portal",
    description:
      "One dashboard for merchants to manage sales, payments, and insights",
  },
  {
    name: "Buy now and pay later",
    route: "/solutions/buy-now-pay-later",
    image: "/header/buy-now-pay-later.png",
    heading: "Buy now and pay later",
    description: "Empower Your Customers. Strengthen Your Cash Flow",
  },
  {
    name: "Fraud management system",
    route: "/solutions/fraud-management-system",
    image: "/header/fraud-management-system.png",
    heading: "Fraud management system",
    description:
      "Detect, prevent, and respond to threats with real-time intelligence.",
  },
  {
    name: "Remittance",
    route: "/solutions/remittance",
    image: "/header/remittance.png",
    heading: "Remittance",
    description:
      "Fast, secure, and cost-efficient cross-border money transfers.",
  },
  {
    name: "Loan originated system",
    route: "/solutions/loan-originated-system",
    image: "/header/loan-originated-system.png",
    heading: "Loan originated system",
    description: "Digitize and streamline your entire loan approval lifecycle",
  },
  {
    name: "Cooperate management solution",
    route: "/solutions/cooperate-management-solution",
    image: "/header/cooperate-management-solution.png",
    heading: "Cooperate management solution",
    description:
      "Centralize enterprise operations with scalable digital oversight tools",
  },
];

export const company: NavItem[] = [
  {
    name: "About Finspace",
    route: "/company/about-finspace",
    image: "/header/about-finspace.png",
    heading: "About Finspace",
    description: "Building real FinTech solutions—not just buzzwords",
  },
  // {
  //   name: "Partners",
  //   route: "/company/partners",
  //   image: "/header/paynow.png",
  //   heading: "Partners",
  //   description: "",
  // },
  {
    name: "Customers",
    route: "/company/customers",
    image: "/header/customers.png",
    heading: "Customers",
    description: "Our clients, our shared success in seamless digital finance",
  },
];
