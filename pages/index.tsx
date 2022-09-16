import React from "react";
import "antd/dist/antd.css";
import { Col, Layout, Row } from "antd";
import { NextPage } from "next";

import BookOvrall from "../components/BookOvrall";
import AboutThis from "../components/AboutThis";
import Pricing from "../components/Pricing";
import ChapterDisplay from "../components/ChapterDisplay";
import SuggestedTitle from "../components/SuggestedTitleList";
import CommentList from "../components/CommentList";
import CTA from "../components/CTA";

const { Content } = Layout;

const Home: NextPage = () => (
  <Layout className="layout text-gray-400">
    <Content className="py-10 bg-black">
      <main className="site-layout-content text-gray-400 container mx-auto">
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
            <Row gutter={[0, 24]}>
              <Col span={24}>
                <AboutThis />
              </Col>
              <Col span={24}>
                <SuggestedTitle />
              </Col>
              <Col span={24}>
                <CommentList />
              </Col>
              <Col span={24}>
                <CTA />
              </Col>
            </Row>
          </Col>
        </Row>
      </main>
    </Content>
  </Layout>
);

export default Home;
