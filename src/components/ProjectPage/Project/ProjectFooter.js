import React, { useState, useEffect} from "react";
import {
 Pagination
  } from "react-bootstrap";
  import * as Actions from "../../../store/actions";
  import { useSelector, useDispatch } from "react-redux";
  
const ProjectFooter = () =>
{
  const dispatch = useDispatch();
  const state = useSelector((state) => state.project.projects);

  const handleClick=(id)=>{
    dispatch(Actions.getAllPorject(id));
  }

  let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active} onClick={()=>handleClick(number)}>
      {number}
    </Pagination.Item>,
  );
}
    return(
        <Pagination  className="ml-auto">
     {items}
     
    
      </Pagination>
    )

};
export default ProjectFooter;
