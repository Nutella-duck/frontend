import React from "react";
import SectionHeadComponent from "./SectionHeadComponent";
import SectionsComponents from "./SectionComponents";

const SectionsComponent = () => {
  const sectoions = [];
  return (
    <div>
      <SectionHeadComponent></SectionHeadComponent>
      <SectionsComponents></SectionsComponents>
    </div>
  );
};

export default SectionsComponent;
