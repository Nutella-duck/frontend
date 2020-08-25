import React from "react";
import TableHeadComponent from "./TableHeadComponent";
import TableComponent from "./TableComponent";
import "./TableComponent.css";

const RunTableComponent = () => {
  return (
    <div
      className="scrollbar"
      style={{
        backgroundColor: "white",
        marginTop: "2rem",
        marginLeft: "2rem",
        marginRight: "2rem",
        borderRadius: "0.7rem",
      }}
    >
      <TableHeadComponent></TableHeadComponent>
      <TableComponent></TableComponent>
    </div>
  );
};

export default RunTableComponent;
