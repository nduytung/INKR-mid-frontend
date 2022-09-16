import { Col, Row } from "antd";
import React from "react";
import Heading from "./elements/Heading";
import SectionWrapper from "./layout-components/SectionWrapper";

const Pricing = () => {
  return (
    <SectionWrapper>
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
            <p>Instant access to all chapters • No Ad • Extra saving</p>
          </Col>
        </Row>
      </div>

      <p className="text-gray-400 text-center">
        Want to read for free? <a href="#">Learn more</a>{" "}
      </p>
    </SectionWrapper>
  );
};

export default Pricing;
