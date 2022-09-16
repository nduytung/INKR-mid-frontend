import React from "react";
import { ISectionWrapper } from "../../interface/components.interface";

const SectionWrapper = ({ classname = "", children }: ISectionWrapper) => {
  return (
    <section className={`bg-[#141414] rounded-md p-5 w-full ${classname}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
