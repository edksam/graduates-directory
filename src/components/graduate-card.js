import React from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { GraduateContext } from "../context/graduate-context";
// import { flashErrorMessage } from "./flash-message";
import { Card, Space, Tag, Collapse } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import { GithubFilled } from "@ant-design/icons";

const { useContext } = React;

const GraduateCard = ({ graduate }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(GraduateContext);
  const { Meta } = Card;
  const { Panel } = Collapse;

  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
  });

  return (
    <div className="site-card-wrapper">
      <Card
        hoverable
        title={graduate.fullname}
        bordered={false}
        style={{ width: 560, float: "left", margin: 15 }}
        extra={
          <Link to={`/graduates/${graduate._id}/profile`}>
            <IconFont type="icon-tuichu" />
          </Link>
        }
      >
        <Meta
          title={graduate.headline}
          description={graduate.current_location}
        />
        <hr />
        <p>{graduate.languages} </p>
        <Space>
          <p>
            {graduate.willing_remote ? (
              <Tag color={"volcano"}>Can Work Remote</Tag>
            ) : (
              <Tag color={"geekblue"}>Can't Work Remote</Tag>
            )}
          </p>
          <p>
            {graduate.willing_locate ? (
              <Tag color={"volcano"}>Can Work Remote</Tag>
            ) : (
              <Tag color={"geekblue"}>Can't Work Remote</Tag>
            )}
          </p>
        </Space>
        <Space>
          <Tag color={"green"}>{graduate.full_time ? "Full Time" : ""}</Tag>
          <Tag color={"green"}>{graduate.part_time ? "Part Time" : ""}</Tag>
          <Tag color={"green"}>
            {graduate.willing_relocate ? "Open to Relocate" : ""}
          </Tag>
          <Tag color={"green"}>
            {graduate.willing_remote ? "Open to Remote" : ""}
          </Tag>
        </Space>
        <Space>
          <Link to={graduate.linkedin}>
            <GithubFilled />
          </Link>
        </Space>
        <Collapse ghost>
          <Panel header="Read Resume" key="1">
            <p>{graduate.resume_text}</p>
          </Panel>
        </Collapse>
      </Card>
    </div>
  );
};
export default GraduateCard;
