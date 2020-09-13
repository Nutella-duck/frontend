import React ,{useState} from 'react'
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Home = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    //  const [rowData, setRowData] = useState([]);
     const onButtonClick = e => {
      const selectedNodes = gridApi.getSelectedNodes()
      const selectedData = selectedNodes.map( node => node.data )
      const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ')
      alert(`Selected nodes: ${selectedDataStringPresentation}`)
  }
  const [rowData, setRowData] = useState([
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxter", price: 72000}
]);
    
    return (
        <div className="ag-theme-alpine" style={ {height: '200px', width: '600px'} }>
          <button onClick={onButtonClick}>Get selected rows</button>
            <AgGridReact rowSelection="multiple"
                rowData={rowData}>
               <AgGridColumn field="make" sortable={true} filter={true} checkboxSelection={true} ></AgGridColumn>
<AgGridColumn field="model" sortable={true} filter={true} ></AgGridColumn>
<AgGridColumn field="price" sortable={true} filter={true} ></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

export default Home;