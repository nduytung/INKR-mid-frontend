import { LikeOutlined, MessageOutlined, SendOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Tooltip, Comment, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { createElement } from "react";
import Heading from "./elements/Heading";
import PrimaryButton from "./elements/PrimaryButton";
import SectionWrapper from "./layout-components/SectionWrapper";

const CommentList = () => {
  return (
    <SectionWrapper>
      <Heading type="medium"> 12 Comments</Heading>
      <section>
        <Comment
          actions={[
            <Tooltip key="comment-basic-like" title="Like">
              <span
                style={{ color: "#7e7e7e" }}
                className="flex items-center gap-1"
                onClick={() => {}}
              >
                <LikeOutlined className="text-white" />
                <span className="comment-action">{20}</span>
              </span>
            </Tooltip>,
            <Tooltip key="comment-basic-like" title="See comments">
              <span
                style={{ color: "#7e7e7e" }}
                className="flex items-center gap-1"
                onClick={() => {}}
              >
                <MessageOutlined className="text-white" />
                <span className="comment-action">{12}</span>
              </span>
            </Tooltip>,

            <span style={{ color: "#7e7e7e" }} key="comment-basic-reply-to">
              Reply
            </span>,
          ]}
          author={
            <p style={{ color: "#7e7e7e" }} className="text-sm">
              Han Solo
            </p>
          }
          avatar={
            <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
          }
          content={
            <p className="-mt-3 text-white">
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime={
            <Tooltip title="2016-11-22 11:22:33">
              <span className="text-sm text-gray-600">
                Commented on Chapter 35 • 24 min. ago
              </span>
            </Tooltip>
          }
        />

        <Comment
          avatar={
            <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
          }
          content={
            <>
              <Form.Item>
                <Input
                  onChange={() => {}}
                  value={""}
                  placeholder="Add your comment"
                  style={{
                    backgroundColor: "transparent",
                    borderWidth: 1,
                    borderColor: "#5b5b5b",
                    borderRadius: 8,
                    color: "#5b5b5b",
                  }}
                />
              </Form.Item>
              <Form.Item>
                <PrimaryButton>
                  <article className="flex gap-2 items-center">
                    <SendOutlined />
                    Add Comment
                  </article>
                </PrimaryButton>
              </Form.Item>
            </>
          }
        />
      </section>
    </SectionWrapper>
  );
};

export default CommentList;
