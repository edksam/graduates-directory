import React from "react";
import { Link } from "react-router-dom";
import { GraduateContext } from "../context/graduate-context";
import {
  Card,
  Space,
  Tag,
  Collapse,
  Row,
  Divider,
  Typography,
  Button,
} from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import {
  GithubOutlined,
  LinkedinOutlined,
  FilePdfOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import parse from "html-react-parser";

const { useContext } = React;

const GraduateCard = ({ graduate }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(GraduateContext);
  const { Meta } = Card;
  const { Panel } = Collapse;

  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
  });
  const { Title } = Typography;

  return (
    <div className="site-card-wrapper">
      <Card
        hoverable
        title={<Title level={3}>{graduate.fullname}</Title>}
        bordered={false}
        style={{ width: 560, float: "left", margin: 15 }}
        extra={
          <Link to={`/graduates/${graduate._id}`}>
            <IconFont type="icon-tuichu" style={{ width: "40px" }} />
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
            {/* {graduate.willing_remote ? (
              <Tag color={"volcano"}>Can't Work Remote</Tag>
            ) : (
              <Tag color={"geekblue"}>Can Work Remote</Tag>
            )} */}
            <Tag color={"geekblue"}>
              {graduate.willing_remote && "Open to Remote"}
            </Tag>
          </p>

          <p>
            <Tag color={"volcano"}>
              {graduate.willing_relocate && "Willing to relocate"}
            </Tag>
          </p>
        </Space>
        <Space>
          <Tag color={"green"}>{graduate.full_time && "Full Time"}</Tag>
          <Tag color={"green"}>{graduate.part_time && "Part Time"}</Tag>
        </Space>
        <Divider orientation="left"></Divider>
        <Row>
          <Space>
            <a href={graduate.githubId}>
              <GithubOutlined
                style={{ FontSize: "60px", color: "black", width: "10rem" }}
              />
            </a>

            <LinkedinOutlined
              style={{ FontSize: "60px", color: "black", width: "10rem" }}
            />
          </Space>
        </Row>
        <br />
        <Row>
          <Space>
            <FilePdfOutlined
              label="CV"
              style={{ fontSize: "40px", color: "black", width: "10rem" }}
            />

            <GlobalOutlined
              label="Website"
              style={{ fontSize: "40px", color: "black", width: "10rem" }}
            />
          </Space>
        </Row>
        <br />
        <Collapse ghost>
          <Panel header="Read Resume" key="1">
            <p>{parse(graduate.resume_text)}</p>
          </Panel>
        </Collapse>
        <Space>
          <>
            <Link to="/contact">
              <Button type="primary">Email CYF</Button>
            </Link>
          </>
        </Space>
      </Card>
    </div>
  );
};
export default GraduateCard;
