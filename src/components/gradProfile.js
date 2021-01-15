// import React from "react";
// import "../App.less";
// import { Link } from "react-router-dom";
// import { GraduateContext } from "../context/graduate-context";
// import {
//   PageHeader,
//   Collapse,
//   Divider,
//   Button,
//   Tag,
//   Space,
//   Typography,
//   Row,
// } from "antd";
// import { EllipsisOutlined } from "@ant-design/icons";

// const { useContext } = React;
// const { Paragraph } = Typography;

// const GraduateProfile = ({ graduate }) => {
//   //   eslint-disable-next-line no-unused-vars
//   const [state, dispatch] = useContext(GraduateContext);

//   const { Panel } = Collapse;

//   const Content = ({ children, extraContent }) => (
//     <Row>
//       <div style={{ flex: 1 }}>{children}</div>
//       <div className="image">{extraContent}</div>
//     </Row>
//   );
//   const IconLink = ({ src, text }) => (
//     <a className="example-link">
//       <img className="example-link-icon" src={src} alt={text} />
//       {text}
//     </a>
//   );
//   const content = (
//     <>
//       <Space>{graduate.Headline}</Space>
//       <Paragraph>
//         Ant Design&#x27;s design team preferred to design with the HSB color
//         model, which makes it easier for designers to have a clear psychological
//         expectation of color when adjusting colors, as well as facilitate
//         communication in teams.
//       </Paragraph>

//       <div>
//         <IconLink
//           src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
//           text="Linkedin"
//         />
//         <IconLink
//           src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
//           text=" Github"
//         />
//         <IconLink
//           src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
//           text="Website"
//         />
//       </div>
//       <Divider orientation="left">Resume Text</Divider>
//       <Collapse ghost>
//         <Panel header="Read Resume" key="1">
//           <p>{graduate.resume_text}</p>
//         </Panel>
//       </Collapse>
//     </>
//   );

//   return (
//     <>
//       <PageHeader
//         title={graduate.fullname}
//         className="site-page-header-ghost-wrapper"
//         onBack={() => window.history.back()}
//         subTitle={graduate.current_location}
//         tags={<Tag color="blue">Running</Tag>}
//         extra={[
//           <Link to={`/graduates/edit/${graduate._id}`}><Button key="2">Edit</Button></Link>,
//           <Button key="1" type="primary">
//             Delete
//           </Button>,
//         ]}
//       >
//         <Content>{content}</Content>
//       </PageHeader>
//     </>
//   );
// };

// export default GraduateProfile;


import React from "react";
import { Link } from "react-router-dom";
import { GraduateContext } from "../context/graduate-context";
import { Card, Space, Tag, Collapse, Row, Divider, Typography } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import {
  GithubOutlined,
  LinkedinOutlined,
  FilePdfOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const { useContext } = React;

const GraduateProfile = ({ graduate }) => {
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
        style={{ width: 800, float: "left", margin: 15 }}
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
              {graduate.willing_remote ? "Open to Remote" : ""}
            </Tag>
          </p>

          <p>
            <Tag color={"volcano"}>
              {graduate.willing_relocate ? "Open to Relocate" : ""}
            </Tag>
          </p>
        </Space>
        <Space>
          <Tag color={"green"}>{graduate.full_time ? "Full Time" : null}</Tag>
          <Tag color={"green"}>{graduate.part_time ? "Part Time" : null}</Tag>
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
            <p>{graduate.resume_text}</p>
          </Panel>
        </Collapse>
      </Card>
    </div>
  );
};
export default GraduateProfile;
