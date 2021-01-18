import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';
import * as Actions from '../../../data/model/actions.js';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Navbar, Form, FormControl } from 'react-bootstrap';

function isFirstColumn(params) {
  var displayedColumns = params.columnApi.getAllDisplayedColumns();
  var thisIsFirstColumn = displayedColumns[0] === params.column;
  return thisIsFirstColumn;
}

class table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quickFilterText: null,
      totalRuns: 0,
      columnDefs: [
        {
          headerName: '#',
          sortable: true,
          filter: true,
          checkboxSelection: true,
        },
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
          field: 'createdBy',
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
          headerName: 'CPU',
          field: 'cpu',
          sortable: true,
          filter: true,
        },
        {
          headerName: 'MEMORY',
          field: 'memory',
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
      rowData: [],
      rowSelection: 'multiple',
      onCellEditingStarted: function (event) {},
      defaultColDef: {
        flex: 1,
        minWidth: 100,
        resizable: true,
        headerCheckboxSelection: isFirstColumn,
      },
    };
    this.gridOptions = {
      //We register the react date component that ag-grid will use to render
      //dateComponentFramework: DateComponent,
      // this is how you listen for events using gridOptions
      onModelUpdated: function () {},

      // this is a simple property
      rowBuffer: 10, // no need to set this, the default is fine for almost all scenarios,
      floatingFilter: true,
    };
    this.onGridReady = this.onGridReady.bind(this);
  }

  onGridReady(params) {
    this.gridApi = params.api;
  }

  onQuickFilterText = (event) => {
    this.setState({ quickFilterText: event.target.value });
  };

  onSelectionChanged = ({ event, inputSelectedModel }) => {
    const selectedRows = this.gridApi.getSelectedRows();
    console.log(selectedRows);
    inputSelectedModel(selectedRows);
  };
  onCellClicked(event) {
    console.log('onCellClicked: ' + event.data.runName);
    window.location.href = `/run/matrixs/${event.data.runId}`;
  };
  render() {
    const {
      selectedModel,
      tableRows,
      totalRuns,
      inputSelectedModel,
    } = this.props;
    if (tableRows.length > 0) {
      const indicator = Object.keys(JSON.parse(tableRows[0].indicator));
      const system = Object.keys(JSON.parse(tableRows[0].system));

      tableRows.forEach((v) => {
        indicator.forEach((i) => {
          let a = JSON.parse(v.indicator);
          v[i] = a[i];
        });
        system.forEach((i) => {
          let a = JSON.parse(v.system);
          v[i] = a[i];
        });
      });
    }

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
          <AgGridReact
            rowDeselection={true}
            rowSelection={this.state.rowSelection}
            modules={this.state.modules}
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            onGridReady={this.onGridReady}
            quickFilterText={this.state.quickFilterText}
            onSelectionChanged={this.onSelectionChanged.bind(this, {
              inputSelectedModel,
            })}
            onCellEditingStarted={this.onCellEditingStarted}
            onCellClicked={this.onCellClicked}
            rowData={tableRows}
            selectAll={false}
          ></AgGridReact>
        </div>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  inputSelectedModel: (model) => dispatch(Actions.getSelectedModel(model)),
});
const mapStateToProps = (state) => ({
  selectedModel: state.model.selectedModel,
});
export default connect(mapStateToProps, mapDispatchToProps)(table);
