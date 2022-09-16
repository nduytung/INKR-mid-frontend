import { Avatar, Col, Row, Tag } from "antd";
import React, { useState } from "react";
import { GENRE_LIST } from "../constance/dataContances";
import Heading from "./elements/Heading";
import SectionWrapper from "./layout-components/SectionWrapper";
import Image from "next/image";
import { Comment } from "antd";

const AboutThis = () => {
  const [isHiding, setIsHiding] = useState(true);

  return (
    <SectionWrapper>
      <Heading type="medium" classname="mb-4">
        About This{" "}
      </Heading>
      <Heading type="small">Genres</Heading>

      <div className="my-2">
        {GENRE_LIST.map((tag, index) => (
          <Tag
            color="black"
            style={{
              backgroundColor: "transparent",
              borderColor: "gray",
              color: "gray",
              fontSize: 12,
            }}
            key={index}
          >
            {tag}
          </Tag>
        ))}
      </div>
      <Heading type="small" classname="my-4">
        Summary
      </Heading>
      <p
        className={`text-sm font-light text-[#8e8e8e] ${
          isHiding && "line-clamp-4"
        } `}
      >
        Kasane is an ugly girl who is severely bullied by her classmates because
        of her appearance; making things worse, Kasane's mother was a beautiful
        actress to whom Kasane is a dark contrast, even though she is as
        talented as her mother. However, there is nothing to do with this.
      </p>
      {!isHiding && (
        <section>
          <div className="flex gap-2">
            {new Array(5).fill(0).map((item, index) => {
              return (
                <Image
                  width={84}
                  height={126}
                  src={`/img/suggest-cover-${index + 1}.svg`}
                />
              );
            })}
          </div>
          <Heading type="small" classname="mt-5">
            Credits
          </Heading>
          <article>
            <Comment
              actions={undefined}
              author={
                <p style={{ color: "#f3f3f3" }} className="text-sm mb-0">
                  Han Solo
                </p>
              }
              avatar={
                <Avatar
                  src="https://joeschmoe.io/api/v1/random"
                  alt="Han Solo"
                />
              }
              content={<p>Publisher</p>}
            />
          </article>
          <Heading type="small" classname="mt-5">
            Other Facts{" "}
          </Heading>
          <div className="flex gap-3 text-white font-light mt-2">
            <section className="text-gray-500 ">
              <p>Last Updated</p>
              <p>Age Rating</p>
              <p>Color</p>
              <p>Origin Media</p>
              <p>Style Origin</p>
              <p>Copyright</p>
              <p>Other Names</p>
            </section>
            <section>
              <p>: 2 days ago</p>
              <p>: Mature (18+)</p>
              <p>: Black & White</p>
              <p>: Print</p>
              <p>: Japanese Comics (Manga)</p>
              <p>: © Daruma Matsuura / Kodansha Ltd.</p>
              <p>: Kasane -voleuse de visage</p>
            </section>
          </div>
        </section>
      )}

      {isHiding && (
        <p
          onClick={() => setIsHiding((state) => !state)}
          className="mx-auto text-center"
          role={"button"}
        >
          Show More
        </p>
      )}
    </SectionWrapper>
  );
};

export default AboutThis;
