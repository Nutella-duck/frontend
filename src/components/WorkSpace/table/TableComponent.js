import React, { Component } from 'react';
//import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {
  Navbar,
  Form,
  FormControl,
  Nav,
  ButtonGroup,
  Button,
} from "react-bootstrap";
class table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quickFilterText: null,
      totalRuns:0,
      columnDefs: [
        {hederName:" ",field:" ",checkboxSelection: true },
        { headerName: "NAME", field: "runName", sortable: true, filter: true,},
        { headerName: "STATE", field: "state", sortable: true, filter: true},
        { headerName: "CREATED", field: "updated_at", sortable: true, filter: true},
        { headerName: "CREATEDBY", field: "created_by", sortable: true, filter: true},
        { headerName: "RUNTIME", field: "run_time", sortable: true, filter: true},
        
        ],
   
  }
}
  //   componentDidMount() {
  //     fetch('http://localhost:7000/admin/project/key')
  //   .then(result => result.json())
  //   .then(totalRuns => this.setState({totalRuns}))
  //  }
  onQuickFilterText = (event) => {
    this.setState({quickFilterText: event.target.value});
};

  render() {
    const {tableRows,totalRuns} = this.props;
    console.log(tableRows);
    const data = tableRows.models;
    return (
      <>
       <Navbar bg="light" variant="light" style={{ borderRadius: "0.7rem" }}>
       <Navbar.Brand href="#home" style={{ fontWeight: "bold" }}>
        {totalRuns} Runs
        </Navbar.Brand>
      <Form inline>
      
      <FormControl type="text" id="quickFilter" onChange={this.onQuickFilterText}
                                   placeholder="Search" className="mr-sm-2" />
    </Form>
    </Navbar>
      <div className="ag-theme-alpine"  style={ {height: '600px', width: '1200px'} }>
     
                           

        <AgGridReact 
           quickFilterText={this.state.quickFilterText}
        columnDefs={this.state.columnDefs}
            rowData={tableRows}>
        </AgGridReact>
      </div>
      </>
    );
  }
}

export default table;