import React from "react";
import Heading from "./elements/Heading";
import SectionWrapper from "./layout-components/SectionWrapper";
import Image from "next/image";
const CTA = () => {
  return (
    <SectionWrapper classname="flex items-center justify-between">
      <section>
        <Heading type="medium">Get The App</Heading>
        <p>
          Love this title? Scan the QR code to continue reading right on your
          mobile devices.
        </p>
      </section>

      <Image src="/img/qrcode.svg" height={250} width={250} />
    </SectionWrapper>
  );
};

export default CTA;
