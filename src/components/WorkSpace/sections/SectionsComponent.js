import React from "react";
import SectionHeadComponent from "./SectionHeadComponent";
import SectionsComponents from "./SectionComponents";
import { useSelector } from "react-redux";

const SectionsComponent = () => {
  const sectoions = useSelector((state) => state.section.cards);
  return (
    <div>
      <SectionHeadComponent></SectionHeadComponent>
      {sectoions.map((section, index) => (
        <SectionsComponents key={index}></SectionsComponents>
      ))}
    </div>
  );
};

export default SectionsComponent;
