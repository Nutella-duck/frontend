import React from 'react';

import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

const RunTable = ({ tableRows }) => {
  const tableHeads = ['NAME', 'PROJECT', 'STATE', 'CREATED'];

  return (
    <Table
      striped
      borderless
      hover
      size="sm"
      style={{
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: '0.7rem',
      }}
    >
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
            <td>{tableRow.runName}</td>
            <td>{tableRow.projectName}</td>
            <td
              style={
                tableRow.state === 'Crashed'
                  ? { color: 'red' }
                  : { color: '#1ddd89' }
              }
            >
              {tableRow.state}
            </td>
            <td>{tableRow.updated_at}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default RunTable;
