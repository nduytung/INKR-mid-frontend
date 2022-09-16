import React from "react";
import "antd/dist/antd.css";
import { Button, Col, Layout, Menu, Row, Tag, Comment, Avatar } from "antd";
import { NextPage } from "next";
import SectionWrapper from "../components/layout-components/SectionWrapper";
import Image from "next/image";
import Heading from "../components/elements/Heading";
import {
  BookOutlined,
  LikeOutlined,
  MoreOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import VerticalCard from "../components/elements/VerticalCard";

const { Header, Content, Footer } = Layout;

const TAG_LIST = ["18+", "new", "trending", "bestseller", "manga"];
const GENRE_LIST = ["Horror", "Psychological", "Seinen"];
const Home: NextPage = () => (
  <Layout className="layout ">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={new Array(3).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
    <Content className="py-10 bg-black">
      <main className="site-layout-content text-red-500 container mx-auto">
        <Row>
          <Col span={16}>
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
                  <Button
                    style={{ backgroundColor: "#ffd608", color: "black" }}
                  >
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
          </Col>
          <Col span={8}>
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
                Kasane is an ugly girl who is severely bullied by her classmates
                because of her appearance; making things worse, Kasane's mother
                was a beautiful actress to whom Kasane is a dark contrast, even
                though she is as talented as her mother. However, there is
                nothing to do with this.
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
                    <Avatar
                      src="https://joeschmoe.io/api/v1/random"
                      alt="Han Solo"
                    />
                  }
                  content={<p>Publisher</p>}
                />
                <Comment
                  actions={undefined}
                  author={<p>Han Solo</p>}
                  avatar={
                    <Avatar
                      src="https://joeschmoe.io/api/v1/random"
                      alt="Han Solo"
                    />
                  }
                  content={<p>Publisher</p>}
                />
                <Comment
                  actions={undefined}
                  author={<p>Han Solo</p>}
                  avatar={
                    <Avatar
                      src="https://joeschmoe.io/api/v1/random"
                      alt="Han Solo"
                    />
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
          </Col>
        </Row>
        <Col span={16}>
          <Row>
            <SectionWrapper>
              <div>
                <Heading type="medium"> Pricing & Promotion</Heading>
                <div className="rounded-md overflow-hidden bg-[#1f1f1f] text-gray-400">
                  <Row>
                    <Col span={12}>
                      <h3>FREE</h3>
                      <Heading type="small"> 3 chapters </Heading>
                    </Col>
                    <Col span={12}>
                      <h3>LOCKED</h3>
                      <Heading type="small">7 chapters (5/chapter)</Heading>
                    </Col>
                    <Col span={24}>
                      <div className="flex items-center-justify-between">
                        <article>
                          <Heading type="small">Total price</Heading>
                          <p>Instant access to all chapters • No Ad </p>
                        </article>
                        <div className="rounded-md bg-gray-300 text-white font-semibold text-xl">
                          35
                        </div>
                      </div>
                    </Col>
                    <Col span={24}>
                      <Heading type="small" classname="text-[#a379ff]">
                        Save money with INKR Extra
                      </Heading>
                      <p>
                        Instant access to all chapters • No Ad • Extra saving
                      </p>
                    </Col>
                  </Row>
                </div>

                <p className="text-gray-400 text-center">
                  Want to read for free? <a href="#">Learn more</a>{" "}
                </p>
              </div>
            </SectionWrapper>
          </Row>
          <Row>
            <SectionWrapper>
              <div>
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
              </div>
            </SectionWrapper>
          </Row>
        </Col>
      </main>
    </Content>
  </Layout>
);

export default Home;
