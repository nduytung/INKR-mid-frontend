import { SendOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import React from "react";
import PrimaryButton from "./PrimaryButton";

const CommentInput = () => {
  return (
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
  );
};

export default CommentInput;
