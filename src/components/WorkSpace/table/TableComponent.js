import React from "react";
import { Table, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import "./TableComponent.css";

const TableComponent = () => {
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

  const tableRows = useSelector((state) => state.model.models);

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
            <td>{tableRow.NAME}</td>
            <td
              style={
                tableRow.STATE === "Crashed"
                  ? { color: "red" }
                  : { color: "blue" }
              }
            >
              {tableRow.STATE}
            </td>
            <td>{tableRow.CREATED}</td>
            <td>{tableRow.CREATEDBY}</td>
            <td>{tableRow.RUNTIME}</td>
            <td>{tableRow.ACCURACY}</td>
            <td>{tableRow.LOSS}</td>
            <td>{tableRow.VAL_ACCURACY}</td>
            <td>{tableRow.EPOCH}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
