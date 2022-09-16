import { Col } from "antd";
import React from "react";
import { IPromotionBlock } from "../../interface/element.interface";

const PromotionBlock = ({ span, children }: IPromotionBlock) => {
  return (
    <Col span={span}>
      <div className="p-5 border border-black">{children}</div>
    </Col>
  );
};

export default PromotionBlock;
