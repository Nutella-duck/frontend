import React from "react";

import { Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const RunTable = () => {
  const tableHeads = [
    "NAME",
    "PROJECT",
    "STATE",
    "CREATED",
  
  ];
  const tableRows = [
    {
      NAME: "Model-Name-A-002",
      PROJECT: "NutellaCoder",
      STATE: "Crashed",
      CREATED: "3 m ago",
      
    },
    {
      NAME: "Model-Name-A-003",
      PROJECT: "NutellaCoder",
      STATE: "Finished",
      CREATED: "8 hours ago",
      
    },
    {
      NAME: "Model-Name-A-004",
      PROJECT: "NutellaCoder",
      STATE: "Crashed",
      CREATED: "3 m ago",
      
    },
    {
      NAME: "Model-Name-A-005",
      PROJECT: "NutellaCoder",
      STATE: "Finished",
      CREATED: "8 hours ago",
      
    },
  ];
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
