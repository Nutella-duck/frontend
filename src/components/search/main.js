import React, { Component } from 'react';
//import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quickFilterText: null,
      columnDefs: [
        { headerName: "NAME", field: "run_name", sortable: true, filter: true},
        { headerName: "STATE", field: "state", sortable: true, filter: true},
        { headerName: "CREATED", field: "createdAt", sortable: true, filter: true},
        { headerName: "CREATEDBY", field: "created_by", sortable: true, filter: true},
        { headerName: "RUNTIME", field: "run_time", sortable: true, filter: true},
        
        ],
   
  }
}
  componentDidMount() {
    fetch('http://localhost:7000/admin/run')
  .then(result => result.json())
  .then(rowData => this.setState({rowData}))
  }
  onQuickFilterText = (event) => {
    this.setState({quickFilterText: event.target.value});
};
  render() {
    return (
      <div className="ag-theme-alpine" style={ {height: '600px', width: '1200px'} }>
       <div style={{float: "right", marginLeft: 20}}>
                            <label htmlFor="quickFilter">Quick Filter:&nbsp;</label>
                            <input type="text" id="quickFilter" onChange={this.onQuickFilterText}
                                   placeholder="Type text to filter..."/>
                        </div>

        <AgGridReact
           quickFilterText={this.state.quickFilterText}
        columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}>
        </AgGridReact>
      </div>
    );
  }
}

export default table;