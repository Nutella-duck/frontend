import React from "react";

import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

const RunTable = () => {
  const tableHeads = [
    "NAME",
    "PROJECT",
    "STATE",
    "CREATED",
  
  ];
  // state.model.NAME,state.model.PROJECT,state.model.STATE,state.model.CREATED
  const tableRows = useSelector((state) =>state.model.models );
  return (
    <Table striped borderless hover size="sm" style={{textAlign:"center",backgroundColor:"white",borderRadius:"0.7rem"}}>
      <thead >
        <tr >
          
          {tableHeads.map((tableHead, index) => (
            <th key={index}>{tableHead}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableRows.map((tableRow, index) => (
          <tr key={index}>
            
            <td>{tableRow.NAME}</td>
            <td>{tableRow.PROJECT}</td>
            <td style={tableRow.STATE ==="Crashed" ? {color:"red"} : {color:"#1ddd89"} }>{tableRow.STATE}</td>
            <td>{tableRow.CREATED}</td>
    
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default RunTable;