import React from "react";
import GraduatePortal from "./GraduatePortal";
import { Row } from "antd";

const GraduatePortalList = ({ graduates }) => {
  const cards = () => {
    return graduates.map((graduate) => {
      return <GraduatePortal key={graduate._id} graduate={graduate} />;
    });
  };
  return (
    <>
      <Row display="flex" justify="start">
        {cards()}
      </Row>
    </>
  );
};

export default GraduatePortalList;
