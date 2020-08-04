import React from "react";
import { Table } from "react-bootstrap";

const TableComponent = () => {
  const tableHeads = ["STATE", "CREATED", "CREATEDBY", "RUNTIME", "ACCURACY"];
  const tableRows = [
    {
      STATE: "Finished",
      CREATED: "3 m ago",
      CREATEDBY: "User A",
      RUNTIME: "11s",
      ACCURACY: "0.293",
    },
    {
      STATE: "Crashed",
      CREATED: "5 m ago",
      CREATEDBY: "User A",
      RUNTIME: "11s",
      ACCURACY: "0.293",
    },
    {
      STATE: "Finished",
      CREATED: "7 m ago",
      CREATEDBY: "User A",
      RUNTIME: "11s",
      ACCURACY: "0.293",
    },
    {
      STATE: "Crashed",
      CREATED: "3 m ago",
      CREATEDBY: "User A",
      RUNTIME: "11s",
      ACCURACY: "0.293",
    },
    {
      STATE: "Crashed",
      CREATED: "3 m ago",
      CREATEDBY: "User A",
      RUNTIME: "11s",
      ACCURACY: "0.293",
    },
  ];
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {tableHeads.map((tableHead, index) => (
            <th key={index}>{tableHead}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableRows.map((tableRow, index) => (
          <tr key={index}>
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
