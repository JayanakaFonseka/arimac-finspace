// Individual step for a solution
export interface Step {
  id: number;
  tagName: string;
  title: string;
  description: string;
  image: string;
}

// Individual benefit for a solution
export interface Benefit {
  id: number;
  title: string;
  description: string;
  image: string;
}

// Customer testimonial
export interface Feedback {
  id: number;
  comment: string;
  stars: number;
  name: string;
  company: string;
  designation: string;
  image: string;
  logo: string;
}

// Grouped steps section
export interface StepsData {
  tagName: string;
  title: string;
  steps: Step[];
}

// Grouped benefits section
export interface BenefitsData {
  tagName: string;
  title: string;
  benefits: Benefit[];
}

// Grouped customer feedback
export interface CustomerSection {
  tagName: string;
  title: string;
  feedback: Feedback[];
}

// Main reusable type for each solution
export interface Solution {
  id: number;
  identifier: string;
  name: string;
  title: string;
  description: string;
  image: string;
  stepsData: StepsData;
  benefitsData: BenefitsData;
  ourCustomers: CustomerSection;
}
