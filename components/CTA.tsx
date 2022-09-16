import React from "react";
import Heading from "./elements/Heading";
import SectionWrapper from "./layout-components/SectionWrapper";
import Image from "next/image";
const CTA = () => {
  return (
    <SectionWrapper classname="flex items-center justify-between">
      <section>
        <Heading type="small">Get The App</Heading>
        <p className="text-sm w-4/5 font-light text-gray-500">
          Love this title? Scan the QR code to continue reading right on your
          mobile devices.
        </p>
      </section>

      <Image src="/img/qrcode.svg" height={100} width={100} />
    </SectionWrapper>
  );
};

export default CTA;
