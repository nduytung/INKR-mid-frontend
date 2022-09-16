import { Avatar, Col, Row, Tag } from "antd";
import React from "react";
import { GENRE_LIST } from "../constance/dataContances";
import Heading from "./elements/Heading";
import SectionWrapper from "./layout-components/SectionWrapper";
import Image from "next/image";
import { Comment } from "antd";

const AboutThis = () => {
  return (
    <SectionWrapper>
      <Heading type="medium" classname="mb-4">
        About This{" "}
      </Heading>
      <Heading type="small">Genres</Heading>
      {GENRE_LIST.map((genre, index) => {
        <Tag
          color="black"
          style={{
            backgroundColor: "transparent",
            borderColor: "gray",
          }}
          key={index}
        >
          {genre}
        </Tag>;
      })}
      <Heading type="small" classname="my-4">
        Summary
      </Heading>
      <p>
        Kasane is an ugly girl who is severely bullied by her classmates because
        of her appearance; making things worse, Kasane's mother was a beautiful
        actress to whom Kasane is a dark contrast, even though she is as
        talented as her mother. However, there is nothing to do with this.
      </p>
      <Row>
        <Col span={4}>
          <Image src={"/img/kasane.svg"} width={200} height={150} />
        </Col>
        <Col span={4}>
          <Image src={"/img/kasane.svg"} width={200} height={150} />
        </Col>
        <Col span={4}>
          <Image src={"/img/kasane.svg"} width={200} height={150} />
        </Col>
        <Col span={4}>
          <Image src={"/img/kasane.svg"} width={200} height={150} />
        </Col>
        <Col span={4}>
          <Image src={"/img/kasane.svg"} width={200} height={150} />
        </Col>
      </Row>

      <Heading type="small">Credits </Heading>
      <article>
        <Comment
          actions={undefined}
          author={<p>Han Solo</p>}
          avatar={
            <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
          }
          content={<p>Publisher</p>}
        />
        <Comment
          actions={undefined}
          author={<p>Han Solo</p>}
          avatar={
            <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
          }
          content={<p>Publisher</p>}
        />
        <Comment
          actions={undefined}
          author={<p>Han Solo</p>}
          avatar={
            <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
          }
          content={<p>Publisher</p>}
        />
      </article>
      <Heading type="small">Other Facts </Heading>
      <div className="flex gap-3 text-white">
        <section>
          <p>Last Updated</p>
          <p>Age Rating</p>
          <p>Color</p>
          <p>Origin Media</p>
          <p>Style Origin</p>
          <p>Copyright</p>
          <p>Other Names</p>
        </section>
        <section>
          <p>2 days ago</p>
          <p>Mature (18+)</p>
          <p>Black & White</p>
          <p>Print</p>
          <p>Japanese Comics (Manga)</p>
          <p>© Daruma Matsuura / Kodansha Ltd.</p>
          <p>Kasane -voleuse de visage</p>
        </section>
      </div>
    </SectionWrapper>
  );
};

export default AboutThis;
