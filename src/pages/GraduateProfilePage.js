import React, { useState, useEffect } from "react";
import { GraduateContext } from "../context/graduate-context";
import { PageHeader, Button, Descriptions } from "antd";
import GraduateProfile from "../components/gradProfile";

const { useContext } = React;

const GraduateProfilePage = ({ match }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(GraduateContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { _id } = match.params; // Grab URL _id

    if (_id) {
      const graduateProfile = state.graduates.find((graduate) => {
        return graduate._id === _id;
      });
      dispatch({
        type: "FETCH_GRADUATE",
        payload: graduateProfile,
      });
      setLoading(false);
    }
  }, [match.params, dispatch]);
  if (!state.graduate) return "...loading";

  console.log(state.graduate);
  return (
    // <div className="site-page-header-ghost-wrapper">
    //   <PageHeader
    //     ghost={false}
    //     onBack={() => window.history.back()}
    //     title={graduate.fullname}
    //     subTitle="This is a subtitle"
    //     extra={[
    //       <Button key="3">Operation</Button>,
    //       <Button key="2">Operation</Button>,
    //       <Button key="1" type="primary">
    //         Primary
    //       </Button>,
    //     ]}
    //   >
    //     <Descriptions size="small" column={3}>
    //       <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
    //       <Descriptions.Item label="Association">
    //         <a href="http:/google.com">421421</a>
    //       </Descriptions.Item>
    //       <Descriptions.Item label="Creation Time">
    //         2017-01-10
    //       </Descriptions.Item>
    //       <Descriptions.Item label="Effective Time">
    //         2017-10-10
    //       </Descriptions.Item>
    //       <Descriptions.Item label="Remarks">
    //         Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
    //       </Descriptions.Item>
    //     </Descriptions>
    //   </PageHeader>
    // </div>
    <GraduateProfile graduate={state.graduate} />
  );
};

export default GraduateProfilePage;
