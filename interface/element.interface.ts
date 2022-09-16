import { ISectionWrapper } from "./components.interface";

export interface IHeading1 extends ISectionWrapper {
  type: "large" | "medium" | "small";
}

export interface IVerticalCard {
  children: React.ReactNode;
  imgWidth: number;
  imgHeight: number;
  image: string;
  classname?: string;
}
