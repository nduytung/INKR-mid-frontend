import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import Heading from "./elements/Heading";
import PromotionBlock from "./elements/PromotionBlock";
import SectionWrapper from "./layout-components/SectionWrapper";

const Pricing = () => {
  return (
    <SectionWrapper>
      <Heading type="medium"> Pricing & Promotion</Heading>
      <div className="rounded-md overflow-hidden bg-[#1f1f1f] text-gray-500 mt-5">
        <Row>
          <PromotionBlock span={12}>
            <p className="mb-0">FREE</p>
            <Heading type="small"> 3 chapters </Heading>
          </PromotionBlock>

          <PromotionBlock span={12}>
            <p className="mb-0">LOCKED</p>
            <Heading type="small" classname="flex items-center">
              7 chapters ({" "}
              <Image src="/icon/coin.svg" height={18} width={18} alt="coin" /> 5
              / chapter)
            </Heading>
          </PromotionBlock>

          <PromotionBlock span={24}>
            <div className="flex items-center justify-between">
              <article>
                <Heading type="small">Total price</Heading>
                <p>Instant access to all chapters • No Ad </p>
              </article>
              <div className="rounded-md bg-[#313131] text-gray-200  flex gap-2 items-center text-lg py-2 px-3">
                <Image src="/icon/coin.svg" height={18} width={18} alt="coin" />
                35
              </div>
            </div>
          </PromotionBlock>

          <PromotionBlock span={24}>
            <section className="flex items-center justify-between ">
              <div>
                <Heading type="small">
                  <p className="text-[#a379ff] m-0">
                    Save money with INKR Extra
                  </p>
                </Heading>
                <p>Instant access to all chapters • No Ad • Extra saving</p>
              </div>
              <div>
                <div className="flex rounded-md overflow-hidden">
                  <div className=" bg-[#6525fc] text-white  text-lg py-2 px-3">
                    -50%
                  </div>
                  <div className=" bg-[#313131] text-gray-200  flex gap-2 items-center text-lg py-2 px-3">
                    <Image
                      src="/icon/coin.svg"
                      height={18}
                      width={18}
                      alt="coin"
                    />
                    <span className="line-through text-gray-500 text-sm">
                      35
                    </span>
                    18
                  </div>
                </div>
                <p className="italic text-gray-500 text-xs text-end mt-2">
                  Saving rates may vary
                </p>
              </div>
            </section>
          </PromotionBlock>
        </Row>
      </div>

      <p className="text-gray-500 mt-4 text-center mb-0">
        Want to read for free?
        <a className="text-gray-400" href="#">
          {" "}
          Learn more
        </a>
      </p>
    </SectionWrapper>
  );
};

export default Pricing;
