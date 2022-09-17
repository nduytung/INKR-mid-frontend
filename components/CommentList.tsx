import { LikeOutlined, MessageOutlined, SendOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Tooltip, Comment, Input } from "antd";
import React from "react";
import { GET_RANDOM_IMG } from "../constance/dataContances";
import CommentInput from "./elements/CommentInput";
import Heading from "./elements/Heading";
import PrimaryButton from "./elements/PrimaryButton";
import SectionWrapper from "./layout-components/SectionWrapper";

export const COMMENT_ACTION_LIST = [
  <Tooltip key="comment-basic-like" title="Like">
    <span style={{ color: "#7e7e7e" }} className="flex items-center gap-1">
      <LikeOutlined className="text-white" />
      <span className="comment-action">{20}</span>
    </span>
  </Tooltip>,
  <Tooltip key="comment-basic-like" title="See comments">
    <span style={{ color: "#7e7e7e" }} className="flex items-center gap-1">
      <MessageOutlined className="text-white" />
      <span className="comment-action">{12}</span>
    </span>
  </Tooltip>,
  <a className="text-gray-500 font-medium text-xs">Reply</a>,
];

const CommentList = () => {
  return (
    <SectionWrapper>
      <Heading type="medium"> 12 Comments</Heading>
      <Comment
        actions={COMMENT_ACTION_LIST}
        author={
          <span style={{ color: "#7e7e7e" }} className="text-sm">
            Han Solo
          </span>
        }
        avatar={<Avatar src={GET_RANDOM_IMG} alt="Han Solo" />}
        content={
          <p className=" text-white">
            We supply a series of design principles, practical patterns and high
            quality design resources
          </p>
        }
        datetime={
          <Tooltip title="2016-11-22 11:22:33">
            <span className="text-xs text-gray-600">
              Commented on Chapter 35 • 24 min. ago
            </span>
          </Tooltip>
        }
      />

      <Comment
        avatar={<Avatar src={GET_RANDOM_IMG} alt="Han Solo" />}
        content={<CommentInput />}
      />
    </SectionWrapper>
  );
};

export default CommentList;
