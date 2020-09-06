import React from "react";
import { Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import "./TableComponent.css";

const TableComponent = ({tableRows}) => {
  const tableHeads = [
    "NAME",
    "STATE",
    "CREATED",
    "CREATEDBY",
    "RUNTIME",
    "ACCURACY",
    "LOSS",
    "VAL_ACCURACY",
    "EPOCH",
  ];

  

  return (
    <Table striped hover borderless style={{ textAlign: "center" }}>
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
            <td>{tableRow.run_name}</td>
            <td
              style={
                tableRow.state === "Crashed"
                  ? { color: "red" }
                  : { color: "blue" }
              }
            >
              {tableRow.state}
            </td>
            <td>{tableRow.createdAt}</td>
            <td>{tableRow.created_by}</td>
            <td>{tableRow.run_time}</td>
            <td>ACCURACY</td>
            <td>LOSS</td>
            <td>VAL_ACCURACY</td>
            <td>EPOCH</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
