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
  ];
  const tableRows = [
    {
      NAME: "MODEL 1",
      STATE: "Finished",
      CREATED: "3 m ago",
      CREATEDBY: "User A",
      RUNTIME: "11s",
      ACCURACY: "0.293",
    },
    {
      NAME: "MODEL 2",
      STATE: "Crashed",
      CREATED: "5 m ago",
      CREATEDBY: "User A",
      RUNTIME: "11s",
      ACCURACY: "0.293",
    },
    {
      NAME: "MODEL 3",
      STATE: "Finished",
      CREATED: "7 m ago",
      CREATEDBY: "User A",
      RUNTIME: "11s",
      ACCURACY: "0.293",
    },
    {
      NAME: "MODEL 4",
      STATE: "Crashed",
      CREATED: "3 m ago",
      CREATEDBY: "User A",
      RUNTIME: "11s",
      ACCURACY: "0.293",
    },
    {
      NAME: "MODEL 5",
      STATE: "Crashed",
      CREATED: "3 m ago",
      CREATEDBY: "User A",
      RUNTIME: "11s",
      ACCURACY: "0.293",
    },
  ];
  return (
    <Table bordered hover size="sm">
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
            <td>{tableRow.STATE}</td>
            <td>{tableRow.CREATED}</td>
            <td>{tableRow.CREATEDBY}</td>
            <td>{tableRow.RUNTIME}</td>
            <td>{tableRow.ACCURACY}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
