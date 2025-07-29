export interface Highlight {
  id: number;
  title: string;
  subTitle?: string;
  description: string;
}

export interface Step {
  id: number;
  title: string;
}

export interface StepsData {
  title: string;
  description: string;
  innerColor: string;
  outerColor: string;
  steps: Step[];
}

export interface Colab {
  id: number;
  title: string;
  image: string;
}

export interface ColabsData {
  title: string;
  description: string;
  colabs: Colab[];
}

export interface Feature {
  id: number;
  label: string;
  style: string;
  delay: number;
  xValue: number;
  yValue: number;
}

export interface FeaturesData {
  title: string;
  description: string;
  frame: string;
  image: string;
  features: Feature[];
}

export interface LetsTalk {
  title: string;
  description: string;
}

export interface Customer {
  id: number;
  identifier: string;
  name: string;
  title: string;
  description: string;
  image: string;
  logo: string;
  logoDesc: string;
  highlights?: Highlight[];
  stepsData: StepsData;
  colabsData: ColabsData;
  featuresData?: FeaturesData;
  letsTalk: LetsTalk;
}
