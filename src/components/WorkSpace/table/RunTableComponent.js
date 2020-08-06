import React from "react";
import TableHeadComponent from "./TableHeadComponent";
import TableComponent from "./TableComponent";

const RunTableComponent = () => {
  return (
    <div className="border-top border-bottom border-grey">
      <TableHeadComponent></TableHeadComponent>
      <TableComponent></TableComponent>
    </div>
  );
};

export default RunTableComponent;
