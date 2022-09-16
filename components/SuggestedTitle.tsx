import { CrownFilled } from "@ant-design/icons";
import React from "react";
import Heading from "./elements/Heading";
import VerticalCard from "./elements/VerticalCard";
import SectionWrapper from "./layout-components/SectionWrapper";

const SuggestedTitle = () => {
  return (
    <SectionWrapper>
      <Heading type="medium">Related Titles </Heading>
      <VerticalCard
        classname="my-3"
        image="/img/related-cover.svg"
        imgHeight={70}
        imgWidth={40}
      >
        <div className="flex-1  text-gray-400">
          <p className="">Title Name 1</p>
          <p className=" text-[#844cff] font-semibold">
            <CrownFilled /> EXCLUSIVE
          </p>
          <p>PREQUEL</p>
          <p>45.6K reads</p>
        </div>
      </VerticalCard>
      <hr className="my-5" />
    </SectionWrapper>
  );
};

export default SuggestedTitle;
