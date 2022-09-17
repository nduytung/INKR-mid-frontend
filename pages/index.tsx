import React, { Suspense } from "react";
import "antd/dist/antd.css";
import { Col, Layout, Row } from "antd";
import { NextPage } from "next";

import BookOvrall from "../components/BookOvrall";
import AboutThis from "../components/AboutThis";
import Pricing from "../components/Pricing";
import Head from "next/head";
import dynamic from "next/dynamic";

const CTA = dynamic(() => import("../components/CTA"));
const CommentList = dynamic(() => import("../components/CommentList"));
const ChapterDisplay = dynamic(() => import("../components/ChapterDisplay"));
const SuggestedTitle = dynamic(
  () => import("../components/SuggestedTitleList")
);

const { Content } = Layout;

const Home: NextPage = () => (
  <>
    <Head>
      <title>Duy Tung | INKR Comics </title>
    </Head>
    <Layout className="layout text-gray-400">
      <Content className="py-10 bg-black">
        <main className="site-layout-content text-gray-400 container mx-auto">
          <Row gutter={{ lg: 32, xxl: 24 }}>
            <Col lg={{ span: 15 }} xl={{ span: 16 }}>
              <Row gutter={[0, { lg: 32, xxl: 24 }]}>
                <Col span={24}>
                  <BookOvrall />
                </Col>
                <Col span={24}>
                  <Pricing />
                </Col>
                <Col span={24}>
                  <Suspense fallback={<p>Loading...</p>}>
                    <ChapterDisplay />
                  </Suspense>
                </Col>
              </Row>
            </Col>
            <Col lg={{ span: 9 }} xl={{ span: 8 }}>
              <Row gutter={[0, { lg: 32, xxl: 24 }]}>
                <Col span={24}>
                  <AboutThis />
                </Col>
                <Col span={24}>
                  <Suspense fallback={<p>Loading...</p>}>
                    <SuggestedTitle />
                  </Suspense>
                </Col>
                <Col span={24}>
                  <Suspense fallback={<p>Loading...</p>}>
                    <CommentList />
                  </Suspense>
                </Col>
                <Col span={24}>
                  <Suspense fallback={<p>Loading...</p>}>
                    <CTA />
                  </Suspense>
                </Col>
              </Row>
            </Col>
          </Row>
        </main>
      </Content>
    </Layout>
  </>
);

export default Home;
