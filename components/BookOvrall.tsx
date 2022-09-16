import React from "react";
import Heading from "./elements/Heading";
import SectionWrapper from "./layout-components/SectionWrapper";
import Image from "next/image";
import {
  BookOutlined,
  LikeOutlined,
  MoreOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { TAG_LIST } from "../constance/dataContances";
import PrimaryButton from "./elements/PrimaryButton";
import TagList from "./layout-components/TagList";
import OutlineButton from "./elements/OutineButton";

const BookOvrall = () => {
  const handleShare = async () => {
    (await navigator) &&
      navigator?.share({
        title: "INRK Comics | Duy Tung",
        text: "Hire me!",
        url: "https://github.com/nduytungs",
      });
  };

  return (
    <SectionWrapper classname="flex justify-between">
      <div className="flex gap-6 ">
        <article className="flex items-center">
          <Image
            src={"/img/kasane.svg"}
            width={190}
            height={270}
            alt="cover_img"
          />
        </article>
        <article className="text-gray-400 flex flex-col justify-between items-start h-full">
          <section>
            <Heading type="large"> Kasane</Heading>
            <p className="text-base">By Kodansha</p>
            <p>Drama • 10 Chapters</p>
            <div className="flex gap-2 text-sm">
              <span className="flex items-center gap-1">
                <BookOutlined /> 74,483
              </span>
              <span className="flex items-center gap-1">
                <LikeOutlined /> 15,863
              </span>
            </div>
            <div className="mt-6">
              <TagList tagList={TAG_LIST} />
            </div>
          </section>

          <PrimaryButton>Read First Chapter For FREE</PrimaryButton>
        </article>
      </div>
      <article className="flex gap-4 items-start">
        <OutlineButton callback={handleShare}>
          <ShareAltOutlined />
        </OutlineButton>
        <OutlineButton>
          <MoreOutlined />
        </OutlineButton>
      </article>
    </SectionWrapper>
  );
};

export default BookOvrall;
