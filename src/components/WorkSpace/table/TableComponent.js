import React from "react";
import { Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const TableComponent = () => {
  const tableHeads = [
    "NAME",
    "STATE",
    "CREATED",
    "CREATEDBY",
    "RUNTIME",
    "ACCURACY",
    "HPO",
    "COMPRESSED",
    "EPOCH"
    
  ];
  const tableRows = [
    {
      NAME: "MODEL 1",
      STATE: "Finished",
      CREATED: "3 m ago",
      CREATEDBY: "User A",
      RUNTIME: "11s",
      ACCURACY: "0.293",
      HPO:"dkanakf",
    COMPRESSED:"cnrth",
    EPOCH:"10"
    },
    {
      NAME: "MODEL 2",
      STATE: "Crashed",
      CREATED: "5 m ago",
      CREATEDBY: "User A",
      RUNTIME: "11s",
      ACCURACY: "0.293",
      HPO:"dkanakf",
    COMPRESSED:"cnrth",
    EPOCH:"10"
    },
    {
      NAME: "MODEL 3",
      STATE: "Finished",
      CREATED: "7 m ago",
      CREATEDBY: "User A",
      RUNTIME: "11s",
      ACCURACY: "0.293",
      HPO:"dkanakf",
    COMPRESSED:"cnrth",
    EPOCH:"10"
    },
    {
      NAME: "MODEL 4",
      STATE: "Crashed",
      CREATED: "3 m ago",
      CREATEDBY: "User A",
      RUNTIME: "11s",
      ACCURACY: "0.293",
      HPO:"dkanakf",
    COMPRESSED:"cnrth",
    EPOCH:"10"
    },
    {
      NAME: "MODEL 5",
      STATE: "Crashed",
      CREATED: "3 m ago",
      CREATEDBY: "User A",
      RUNTIME: "11s",
      ACCURACY: "0.293",
      HPO:"dkanakf",
    COMPRESSED:"cnrth",
    EPOCH:"10"
    },
  ];
  return (
    <Table responsive striped hover borderless style={{textAlign:"center"}}>
      <thead>
        <tr>
          <th style={{ width: "1.5rem" }}>
            <Form.Check type="checkbox" />
          </th>
          {tableHeads.map((tableHead, index) => (
            <th key={index}>{tableHead}</th>
          ))}
        </tr>
      </thead>
      <tbody>
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
  );
};

export default TableComponent;
