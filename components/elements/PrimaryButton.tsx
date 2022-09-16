import { Button } from "antd";
import React from "react";
import { IPrimaryButton } from "../../interface/element.interface";

const PrimaryButton = ({ children }: IPrimaryButton) => {
  return (
    <Button
      style={{
        backgroundColor: "#ffd608",
        color: "black",
        borderRadius: 8,
      }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
