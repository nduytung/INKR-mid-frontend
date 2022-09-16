import { CrownFilled } from "@ant-design/icons";
import React from "react";
import Heading from "./elements/Heading";
import VerticalCard from "./elements/VerticalCard";
import SectionWrapper from "./layout-components/SectionWrapper";

const SuggestedTitle = () => {
  return (
    <SectionWrapper>
      <Heading type="medium">Related Titles </Heading>
      {new Array(3).fill(0).map(() => {
        return (
          <main className="mb-2 mt-3">
            <VerticalCard
              image="/img/related-cover.png"
              imgHeight={120}
              imgWidth={80}
            >
              <section className="flex-1  text-gray-500">
                <p className="text-white text-base mb-1" role="button">
                  Title Name
                </p>
                <p className=" text-[#844cff] text-sm mb-0 flex items-center gap-1">
                  <CrownFilled /> EXCLUSIVE
                </p>
                <p className="mb-0">PREQUEL</p>
                <p>45.6K reads</p>
              </section>
            </VerticalCard>
            <hr className=" absolute left-0 right-0 border-t border-gray-700" />
          </main>
        );
      })}
    </SectionWrapper>
  );
};

export default SuggestedTitle;
