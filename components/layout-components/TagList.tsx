import { Tag } from "antd";
import React from "react";
import { ITagList } from "../../interface/components.interface";

const TagList = ({ tagList }: ITagList) => {
  return (
    <>
      {tagList?.map((tag, index) => (
        <Tag
          color="black"
          style={{
            backgroundColor: "transparent",
            borderColor: "gray",
            color: "gray",
            fontSize: 12,
          }}
          key={index}
        >
          {tag}
        </Tag>
      ))}
    </>
  );
};

export default TagList;
