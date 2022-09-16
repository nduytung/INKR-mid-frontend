import React from "react";
import { IHeading1 } from "../../interface/element.interface";

const Heading = ({ children, classname, type }: IHeading1) => {
  return (
    <h1
      className={`text-gray-300 font-medium mb-1 ${classname} ${
        type === "large" && "text-3xl"
      } ${type === "medium" && "text-xl"} ${type === "small" && "text-base"}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
