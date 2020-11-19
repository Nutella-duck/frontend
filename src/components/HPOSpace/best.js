import React from 'react';

import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

const RunTable = ({ best, data }) => {
  console.log(best);

  //target=target.map(v=>v[loss])
  let configObj = new Object();
  if ('bestParameter' in best) configObj = JSON.parse(best.bestParameter);
  console.log(configObj);
  let bestObj = new Object();
  if ('bestResult' in best) bestObj = JSON.parse(best.bestResult);

  let tableHeads = Object.keys(configObj);
  let tableRows = configObj;
  let bestHeads = Object.keys(bestObj);
  let bestRows = bestObj;
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
          <th>{bestHeads[0]}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {tableHeads.map((tableRow, index) => (
            <td key={index}>{tableRows[tableRow]}</td>
          ))}
          <td>{bestRows[0]}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default RunTable;
