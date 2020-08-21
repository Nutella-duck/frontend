import React from "react";
import { Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useSelector} from "react-redux";
import "./TableComponent.css";
import { Resizable, ResizableBox } from 'react-resizable';
const TableComponent = () => {
 
const ResizableBox = require('react-resizable').ResizableBox;
  const tableHeads = [
    "NAME",
    "STATE",
    "CREATED",
    "CREATEDBY",
    "RUNTIME",
    "ACCURACY",
    "HPO",
    "COMPRESSED",
    "EPOCH",
   
    
  ];
  const tableRows = useSelector(state =>state.model.models);
  return (
    
    <ResizableBox handleStyle={"bottom"} style={{width:"fit-content" }} axis="y">
    
  
    <Table className="workspaceTable"  striped  hover borderless style={{textAlign:"center" }}>
      <thead >
        <tr>
          <th style={{ width: "1.5rem" }}>
            <Form.Check type="checkbox" />
          </th>
          {tableHeads.map((tableHead, index) => (
            <th key={index}>{tableHead}</th>
          ))}
        </tr>
      </thead>
      <tbody  >
        {tableRows.map((tableRow, index) => (
          <tr key={index}>
            <td>
              <Form.Check type="checkbox" />
            </td>
            <td>{tableRow.NAME}</td>
            <td style={tableRow.STATE ==="Crashed" ? {color:"red"} : {color:"blue"} }>{tableRow.STATE}</td>
            <td>{tableRow.CREATED}</td>
            <td>{tableRow.CREATEDBY}</td>
            <td>{tableRow.RUNTIME}</td>
            <td>{tableRow.ACCURACY}</td>
            <td>{tableRow.HPO}</td>
            <td>{tableRow.COMPRESSED}</td>
            <td>{tableRow.EPOCH}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </ResizableBox>
    
  );
};

export default TableComponent;
