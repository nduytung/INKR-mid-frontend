import { BellOutlined, SortAscendingOutlined } from "@ant-design/icons";
import React from "react";
import { CHAPTER_LIST } from "../constance/dataContances";
import Heading from "./elements/Heading";
import VerticalCard from "./elements/VerticalCard";
import SectionWrapper from "./layout-components/SectionWrapper";
import Image from "next/image";

const ChapterDisplay = () => {
  return (
    <SectionWrapper>
      <section>
        <Heading type="medium">Last read</Heading>
        <VerticalCard
          classname="bg-[#1f1f1f] rounded-lg my-5"
          image="/img/chapter-cover.svg"
          imgHeight={62}
          imgWidth={78}
        >
          <div className="text-gray-400">
            <p className="mb-0">Chapter 1</p>
            <p className="font-thin text-sm">Last read 2 days ago</p>
          </div>
        </VerticalCard>
      </section>

      <section className="flex items-center justify-between">
        <div>
          <Heading type="medium"> 10 chapters </Heading>
          <p className="text-gray-400">New chapter every Thursday </p>
        </div>
        <div className="flex gap-3">
          <button className="border border-gray-400 rounded-md p-2 flex items-center">
            <BellOutlined />
          </button>
          <button className="border border-gray-400 rounded-md p-2 flex items-center">
            <SortAscendingOutlined />
          </button>
        </div>
      </section>

      {CHAPTER_LIST.map((item) => {
        return (
          <VerticalCard
            classname="hover:bg-[#1f1f1f] rounded-md pyy-3"
            image="/img/chapter-cover.svg"
            imgHeight={62}
            imgWidth={78}
            isLocked={item.isLocked}
          >
            <div className="flex-1 flex justify-between">
              <p className="text-gray-400 hover:text-white" role={"button"}>
                {item.name}
              </p>
              {item.isLocked ? (
                <div className="text-gray-200  flex gap-2 items-center text-lg">
                  <span className="">
                    <Image src="/icon/coin.svg" height={18} width={18} />
                  </span>
                  5
                </div>
              ) : (
                <p className=" text-gray-400 font-semibold">FREE</p>
              )}
            </div>
          </VerticalCard>
        );
      })}
    </SectionWrapper>
  );
};

export default ChapterDisplay;
