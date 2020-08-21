import React from "react";
import TableHeadComponent from "./TableHeadComponent";
import TableComponent from "./TableComponent";
import "./TableComponent.css";
const RunTableComponent = () => {
  return (
    <div  style={{backgroundColor:"white",marginTop:"2rem",marginLeft:"2rem",marginRight:"2rem",borderRadius:"0.7rem" ,resize:"vertical"}} >
      <TableHeadComponent></TableHeadComponent>
     
    </div>
  );
};

export default RunTableComponent;
