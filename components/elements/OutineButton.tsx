import React from "react";
import { IOutlineButton } from "../../interface/element.interface";

const OutlineButton = ({ children, callback }: IOutlineButton) => {
  return (
    <button
      onClick={callback}
      className="border border-gray-400 rounded-md p-2 flex items-center"
    >
      {children}
    </button>
  );
};

export default OutlineButton;
