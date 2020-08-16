import React from "react";
import RunTableComponent from "./table/RunTableComponent";
import Header from "./WorkSpaceHeader";
import SectionsComponent from "./sections/SectionsComponent";
const WorkSpaceComponent = () => {
  return (
    <div>
      <Header></Header>
      <RunTableComponent ></RunTableComponent>
      <SectionsComponent></SectionsComponent>
    </div>
  );
};

export default WorkSpaceComponent;
