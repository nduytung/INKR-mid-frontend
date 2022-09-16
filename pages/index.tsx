import React, { createElement } from "react";
import "antd/dist/antd.css";
import {
  Button,
  Col,
  Layout,
  Menu,
  Row,
  Tag,
  Comment,
  Avatar,
  Tooltip,
  Form,
  Space,
} from "antd";
import { NextPage } from "next";
import SectionWrapper from "../components/layout-components/SectionWrapper";
import Image from "next/image";
import Heading from "../components/elements/Heading";
import {
  BookOutlined,
  CrownFilled,
  LikeFilled,
  LikeOutlined,
  MoreOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import VerticalCard from "../components/elements/VerticalCard";
import TextArea from "antd/lib/input/TextArea";
import BookOvrall from "../components/BookOvrall";
import AboutThis from "../components/AboutThis";
import Pricing from "../components/Pricing";
import ChapterDisplay from "../components/ChapterDisplay";
import SuggestedTitle from "../components/SuggestedTitle";
import CommentList from "../components/CommentList";
import CTA from "../components/CTA";

const { Header, Content, Footer } = Layout;

const TAG_LIST = ["18+", "new", "trending", "bestseller", "manga"];
const GENRE_LIST = ["Horror", "Psychological", "Seinen"];
const actions = [
  <Tooltip key="comment-basic-like" title="Like">
    <span onClick={() => {}}>
      {createElement(LikeOutlined)}
      <span className="comment-action">{20}</span>
    </span>
  </Tooltip>,

  <span key="comment-basic-reply-to">Reply to</span>,
];

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
        <Row gutter={24}>
          <Col span={16}>
            <Row gutter={[0, 24]}>
              <Col span={24}>
                <BookOvrall />
              </Col>
              <Col span={24}>
                <Pricing />
              </Col>
              <Col span={24}>
                <ChapterDisplay />
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              <AboutThis />
            </Row>
            <Row>
              <SuggestedTitle />
            </Row>
            <Row>
              <CommentList />
            </Row>
            <Row>
              <CTA />
            </Row>
          </Col>
        </Row>
      </main>
    </Content>
  </Layout>
);

export default Home;
