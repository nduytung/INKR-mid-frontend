import React from "react";
import { IVerticalCard } from "../../interface/element.interface";
import Image from "next/image";
import { LockFilled } from "@ant-design/icons";

const VerticalCard = ({
  image,
  imgWidth,
  imgHeight,
  children,
  classname = "",
  isLocked = false,
}: IVerticalCard) => {
  return (
    <article className={`flex gap-4 p-3 items-center ${classname}`}>
      <div
        className={`h-[${imgHeight}px] w-[${imgWidth}px] overflow-hidden rounded-md relative`}
      >
        <Image
          src={image}
          height={imgHeight}
          width={imgWidth}
          alt="img_holder"
        />

        {isLocked && (
          <div className="absolute p-2 flex items-center shrink-0 bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <LockFilled />
          </div>
        )}
      </div>

      {children}
    </article>
  );
};

export default VerticalCard;
