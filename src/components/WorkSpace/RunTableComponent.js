import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

const App = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const [rowData, setRowData] = useState([
    { name: 'Toyota', state: 'Celica', created: 35000, computedTime: '1hours' },
    { name: 'Ford', state: 'Mondeo', created: 32000, computedTime: '1hours' },
    {
      name: 'Porsche',
      state: 'Boxter',
      created: 72000,
      computedTime: '1hours',
    },
  ]);

  function onGridReady(params) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }

  return (
    // <div
    //   className="ag-theme-alpine"
    //   style={{ height: '1600px', width: 'px' }}
    // >
    //   <AgGridReact onGridReady={onGridReady} rowData={rowData}>
    //     <AgGridColumn field="name"></AgGridColumn>
    //     <AgGridColumn field="state"></AgGridColumn>
    //     <AgGridColumn field="created"></AgGridColumn>
    //   </AgGridReact>
    // </div>
    <>
      <Navbar bg="light" variant="light" style={{ borderRadius: '0.7rem' }}>
        <Navbar.Brand style={{ fontWeight: 'bold' }}>7 Runs</Navbar.Brand>
        <Form inline>
          <FormControl
            type="text"
            id="quickFilter"
            placeholder="Search"
            className="mr-sm-2"
          />
        </Form>
        <Button>New HPO</Button>
      </Navbar>
      <div
        className="ag-theme-alpine"
        style={{ height: '1600px', width: '2000px' }}
      >
        {/* <p>{data[0].runName.isSelected() ? "true" : "false"}</p>                     */}

        <AgGridReact onGridReady={onGridReady} rowData={rowData}>
          <AgGridColumn field="name"></AgGridColumn>
          <AgGridColumn field="state"></AgGridColumn>
          <AgGridColumn field="created"></AgGridColumn>
        </AgGridReact>
      </div>
    </>
  );
};

export default App;
