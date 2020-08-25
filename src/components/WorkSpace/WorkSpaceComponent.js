import React from "react";
import RunTableComponent from "./table/RunTableComponent";
import Header from "./WorkSpaceHeader";
import SectionsComponent from "./sections/SectionsComponent";
import SystemComponent from "./system/SystemComponent";
const WorkSpaceComponent = () => {
  return (
    <div>
      <Header></Header>
      <RunTableComponent></RunTableComponent>
      <SectionsComponent></SectionsComponent>
      <SystemComponent></SystemComponent>
    </div>
  );
};

export default WorkSpaceComponent;
