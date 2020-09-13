import React, { useState, useEffect} from "react";
import {
 Pagination
  } from "react-bootstrap";
  import * as Actions from "../../../store/actions";
  import { useSelector, useDispatch } from "react-redux";
  
const TeamFooter = () =>
{
  
  const [select,setSelect] = useState(1);
  const handleClick=(id)=>{
    
    setSelect(id)
  }

 
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === select} onClick={()=>handleClick(number)}>
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
export default TeamFooter;
