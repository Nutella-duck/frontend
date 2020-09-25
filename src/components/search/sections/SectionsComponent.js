import React from "react";
import SectionHeadComponent from "./SectionHeadComponent";
import SectionComponents from "./SectionComponents";
import { useSelector } from "react-redux";

const SectionsComponent = ({models,graph}) => {
  const sectoions = useSelector((state) => state.section.cards);
  console.log("차트 렌더링 중...")
  return (
    <div style={{ paddingBottom: "3rem" }}>
      <SectionHeadComponent></SectionHeadComponent>

      {sectoions.map((section, index) => (
        <SectionComponents models={models} key={index} graph={graph}></SectionComponents>
      ))}
    </div>
  );
};

export default SectionsComponent;
