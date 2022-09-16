import React from "react";
import { IVerticalCard } from "../../interface/element.interface";
import Image from "next/image";
const VerticalCard = ({
  image,
  imgWidth,
  imgHeight,
  children,
  classname = "",
}: IVerticalCard) => {
  return (
    <article className={`flex gap-4 p-3 ${classname}`}>
      <div
        className={`h-[${imgHeight}px] w-[${imgWidth}px] overflow-hidden rounded-md`}
      >
        <Image src={image} height={imgHeight} width={imgWidth} />
      </div>
      {children}
    </article>
  );
};

export default VerticalCard;
