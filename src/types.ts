export interface Person {
    id: number;
    image: string;
    name: string;
    title: string;
    quote: string;
  }
  
  export type Review = {
    id: number;
    name: string;
    text: string;
    rating: number;
    avatar: string;
  };
  
  export type AppUsageSteps = {
    id: number;
    title: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    description: string;
  };
  
  export type HowToPlayStep = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    title: string;
    description: string;
  };
  
  export type BenefitCardType = {
    id: number;
    title: string;
    icon: string;
  };
  
  export type SocialItem = {
    id: string;
    component: React.ElementType;
    icon: React.ElementType;
    props: Record<string, unknown>;
  };
  
  export type FeatureCardType = {
    title: string;
    description: string;
    icon?: string;
  };
  
  export type FAQItem = {
    id: number;
    question: string;
    answer: string;
  };
  