import React, { Component } from 'react';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Navbar, Form, FormControl } from 'react-bootstrap';
function isFirstColumn(params) {
  var displayedColumns = params.columnApi.getAllDisplayedColumns();
  var thisIsFirstColumn = displayedColumns[0] === params.column;
  return thisIsFirstColumn;
}
function getSelectedRows() {
  let rowsSelection = this.gridOptions.api.getSelectedRows();
  console.info(rowsSelection);
}
class table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quickFilterText: null,
      totalRuns: 0,
      columnDefs: [
        { headerName: 'NAME', field: 'runName', sortable: true, filter: true },
        { headerName: 'STATE', field: 'state', sortable: true, filter: true },
        {
          headerName: 'CREATED',
          field: 'created_at',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'CREATEDBY',
          field: 'created_by',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'RUNTIME',
          field: 'runTime',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'ACCURACY',
          field: 'accuracy',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'LOSS',
          field: 'loss',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'PRECISION',
          field: 'precision',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'CPU',
          field: 'cpu',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'GPU',
          field: 'gpu',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'NET',
          field: 'net',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'DISK',
          field: 'disk',
          sortable: true,
          filter: true,
        },
      ],

      rowSelection: 'multiple',
      rowData: [],
      getSelectedRows: getSelectedRows,
      onCellEditingStarted: function (event) {
        console.log('cellEditingStarted');
      },
    };
    this.gridOptions = {
      //We register the react date component that ag-grid will use to render
      //dateComponentFramework: DateComponent,
      // this is how you listen for events using gridOptions
      onModelUpdated: function () {
        console.log('event onModelUpdated received');
      },
      defaultColDef: {
        flex: 1,
        minWidth: 100,
        resizable: true,
        headerCheckboxSelection: isFirstColumn,
        checkboxSelection: isFirstColumn,
      },
      // this is a simple property
      rowBuffer: 10, // no need to set this, the default is fine for almost all scenarios,
      floatingFilter: true,
    };
    // this.onGridReady = this.onGridReady.bind(this);
    this.onRowSelected = this.onRowSelected.bind(this);
    this.onCellClicked = this.onCellClicked.bind(this);
  }
  onCellClicked(event) {
    console.log(
      'onCellClicked: ' + event.data.runId + ', col ' + event.colIndex,
    );
    window.location.href = `/run/system/${event.data.runId}`;
  }
  onRowSelected(event) {
    console.log('onRowSelected: ' + event.node.data.runName);
  }

  onQuickFilterText = (event) => {
    this.setState({ quickFilterText: event.target.value });
  };
  onSelectionChanged = (event) => {
    // var rowCount = event.api.getSelectedNodes()
    // console.log('selection changed, ' + rowCount + ' rows selected');
    // var selectedRows = this.mgrid.ag.this.gridOptions.getSelectedRows();
    // console.log(selectedRows);
  };

  render() {
    console.log('테이블2 렌더링 중...');
    const { tableRows, totalRuns } = this.props;
    console.log(tableRows);

    return (
      <>
        <Navbar bg="light" variant="light" style={{ borderRadius: '0.7rem' }}>
          <Navbar.Brand style={{ fontWeight: 'bold' }}>
            {totalRuns} Runs
          </Navbar.Brand>
          <Form inline>
            <FormControl
              type="text"
              id="quickFilter"
              onChange={this.onQuickFilterText}
              placeholder="Search"
              className="mr-sm-2"
            />
          </Form>
        </Navbar>
        <div
          className="ag-theme-alpine"
          style={{ height: '100%', width: '100%' }}
        >
          {/* <p>{data[0].runName.isSelected() ? "true" : "false"}</p>                     */}

          <AgGridReact
            modules={this.state.modules}
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            suppressRowClickSelection={true}
            rowSelection={this.state.rowSelection}
            onGridReady={this.onGridReady}
            quickFilterText={this.state.quickFilterText}
            onSelectionChanged={this.onSelectionChanged.bind(this)}
            onCellEditingStarted={this.onCellEditingStarted}
            onCellClicked={this.onCellClicked}
            rowData={tableRows}
            // enableColResize={true}
            // angularCompileRows={true}
            // angularCompileHeaders={true}
          ></AgGridReact>
        </div>
      </>
    );
  }
}

export default table;
