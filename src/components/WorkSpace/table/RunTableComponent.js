
import React from 'react';
import TableComponent from './TableComponent';
import './TableComponent.css';


const RunTableComponent = ({ models, totalRuns }) => {
  return (
    <div
      className="scrollbar"
      style={{
        backgroundColor: 'white',
        marginTop: '2rem',
        marginLeft: '2rem',
        marginRight: '2rem',
        borderRadius: '0.7rem',
      }}
    >
      <TableComponent tableRows={models} totalRuns={totalRuns}></TableComponent>
    </div>
  );
};

export default RunTableComponent;
