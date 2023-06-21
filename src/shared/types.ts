export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  Sports = "sports",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface SportType {
  name: string;
  description?: string;
  image: string;
}

export interface MockupType {
  image: string;
}
