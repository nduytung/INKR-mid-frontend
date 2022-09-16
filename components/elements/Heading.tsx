import React from "react";
import { IHeading1 } from "../../interface/element.interface";

const Heading = ({ children, classname, type }: IHeading1) => {
  return (
    <h1
      className={`text-white font-medium} ${classname} ${
        type === "large" && "text-3xl"
      } ${type === "medium" && "text-3xl"} ${type === "small" && "text-xl"}`}
    >
      {children}
    </h1>
  );
};

export default Heading;
