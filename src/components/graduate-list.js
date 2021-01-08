import React from "react";
import GraduateCard from "./graduate-card";

const GraduateList = ({ graduates }) => {
  const cards = () => {
    return graduates.map((graduate) => {
      return <GraduateCard key={graduate._id} graduate={graduate} />;
    });
  };
  return <>{cards()}</>;
};

export default GraduateList;
