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
import { Button, Tag } from "antd";
import PrimaryButton from "./elements/PrimaryButton";

const BookOvrall = () => (
  <SectionWrapper classname="flex justify-between">
    <div className="flex gap-6 ">
      <article className="flex items-center">
        <Image src={"/img/kasane.svg"} width={190} height={270} />
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
            {TAG_LIST.map((tag, index) => (
              <Tag
                color="black"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "gray",
                  textTransform: "uppercase",
                  color: "gray",
                  fontSize: 12,
                  marginBottom: 8,
                }}
                key={index}
              >
                {tag}
              </Tag>
            ))}
          </div>
        </section>

        <PrimaryButton>Read First Chapter For FREE</PrimaryButton>
      </article>
    </div>
    <article className="flex gap-4 items-start">
      <button className="border border-gray-400 rounded-md p-2 flex items-center">
        <ShareAltOutlined />
      </button>
      <button className="border border-gray-400 rounded-md p-2 flex items-center">
        <MoreOutlined />
      </button>
    </article>
  </SectionWrapper>
);

export default BookOvrall;
