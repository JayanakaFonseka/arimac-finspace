export type Feature = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export type Benefit = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export type OurCustomers = {
  id: number;
  feedback: Feedback[];
  images: string[];
};

export type Feedback = {
  id: number;
  comment: string;
  company: string;
  designation: string;
  image: string;
};

export type Product = {
  id: number;
  identifier: string;
  name: string;
  description: string;
  image: string;
  logo: string;
  features: Feature[];
  benefits: Benefit[];
  ourCustomers: OurCustomers;
};
