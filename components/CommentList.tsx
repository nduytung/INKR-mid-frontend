import { LikeOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Tooltip, Comment } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { createElement } from "react";
import Heading from "./elements/Heading";
import SectionWrapper from "./layout-components/SectionWrapper";

const CommentList = () => {
  return (
    <SectionWrapper>
      <Heading type="medium"> 12 Comments</Heading>
      <section>
        <Comment
          actions={[
            <Tooltip key="comment-basic-like" title="Like">
              <span onClick={() => {}}>
                {createElement(LikeOutlined)}
                <span className="comment-action">{20}</span>
              </span>
            </Tooltip>,

            <span key="comment-basic-reply-to">Reply to</span>,
          ]}
          author={<a>Han Solo</a>}
          avatar={
            <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
          }
          content={
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime={
            <Tooltip title="2016-11-22 11:22:33">
              <span>8 hours ago</span>
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
                <TextArea rows={1} onChange={() => {}} value={""} />
              </Form.Item>
              <Form.Item>
                <Button
                  htmlType="submit"
                  loading={false}
                  onClick={() => {}}
                  type="primary"
                >
                  Add Comment
                </Button>
              </Form.Item>
            </>
          }
        />
      </section>
    </SectionWrapper>
  );
};

export default CommentList;
