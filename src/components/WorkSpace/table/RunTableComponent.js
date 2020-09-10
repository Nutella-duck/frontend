import React,{useEffect} from "react";
import TableHeadComponent from "./TableHeadComponent";
import TableComponent from "./TableComponent";
import "./TableComponent.css";
import { useSelector, useDispatch } from "react-redux";

import * as Actions from "../../../store/actions";

const RunTableComponent = ({models,totalRuns}) => {
console.log(models);
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
       {/* <TableHeadComponent ></TableHeadComponent>  */}
      <TableComponent tableRows={models} totalRuns={totalRuns}></TableComponent>
    </div>
  );
};

export default RunTableComponent;
