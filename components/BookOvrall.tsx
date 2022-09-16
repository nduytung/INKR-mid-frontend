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
const BookOvrall = () => (
  <SectionWrapper>
    <div className="flex gap-6 items-start">
      <article>
        <Image src={"/img/kasane.svg"} width={200} height={150} />
      </article>
      <article className="text-gray-400">
        <Heading type="large"> Kasane</Heading>
        <p>By Kodansha</p>
        <p>Drama • 10 Chapters</p>
        <div className="flex gap-2">
          <span>
            <BookOutlined /> 74,483
          </span>
          <span>
            <LikeOutlined /> 15,863
          </span>
        </div>
        <div>
          {TAG_LIST.map((tag, index) => (
            <Tag
              color="black"
              style={{
                backgroundColor: "transparent",
                borderColor: "gray",
              }}
              key={index}
            >
              {tag}
            </Tag>
          ))}
        </div>
        <Button style={{ backgroundColor: "#ffd608", color: "black" }}>
          Read the first chapter for free
        </Button>
      </article>
      <article className="absolute float-right flex gap-4">
        <Button>
          <ShareAltOutlined />
        </Button>
        <Button>
          <MoreOutlined />
        </Button>
      </article>
    </div>
  </SectionWrapper>
);

export default BookOvrall;
