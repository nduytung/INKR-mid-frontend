import React from "react";
import Heading from "./elements/Heading";
import VerticalCard from "./elements/VerticalCard";
import SectionWrapper from "./layout-components/SectionWrapper";

const ChapterDisplay = () => {
  return (
    <SectionWrapper>
      <Heading type="medium">Last read</Heading>
      <VerticalCard
        classname="bg-[#1f1f1f] rounded-md my-5"
        image="/img/chapter-cover.svg"
        imgHeight={60}
        imgWidth={70}
      >
        <div className="text-gray-400">
          <p>Chapter 1</p>
          <p>Last read 2 days ago</p>
        </div>
      </VerticalCard>

      <section className="flex items-center justify-between">
        <Heading type="medium"> 10 chapters </Heading>
        <p className="text-gray-400">New chapter every Thursday </p>
      </section>

      {new Array(10).fill(0).map((item, index) => {
        return (
          <VerticalCard
            classname="hover:bg-[#1f1f1f] rounded-md my-5"
            image="/img/chapter-cover.svg"
            imgHeight={40}
            imgWidth={50}
          >
            <div className="flex-1 flex justify-between">
              <p className="text-gray-400">Chapter {index + 1}</p>
              <p className=" text-gray-400 font-semibold">FREE</p>
            </div>
          </VerticalCard>
        );
      })}
    </SectionWrapper>
  );
};

export default ChapterDisplay;
