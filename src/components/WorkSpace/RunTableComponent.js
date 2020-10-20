import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Navbar, Form, FormControl, Button,Modal,Col,Container,Row } from 'react-bootstrap';

import React, { useState } from 'react';
import { render } from 'react-dom';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { RowNodeCache } from 'ag-grid-community';
import * as Actions from '../../data/hpo/actions';
import { useSelector, useDispatch } from 'react-redux';
import HpoReducer from '../../data/hpo/reducers';
const App = () => {
  const dispatch = useDispatch();
  const rowData = useSelector((state)=>state.hpo.hpoData)
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [inputs, setInputs] = useState({
    HPOName: '',
    description: '',
  });
  const { HPOName, description } = inputs;
  const [apiKey,setApiKey]=useState();
const getKey=()=>{
 setApiKey(100);
}
const onCreate=()=>{
  setInputs({
    HPOName: '',
    description: '',
  });
  console.log("setinputs",inputs);
  let HPOInfoData = {
    name: inputs.HPOName,
    state: inputs.description,
    runCount: apiKey,
    created: 35000, computedTime: '1hours',createdBy:'leehaein'
  };
  // setRowData(rowData.concat(HPOInfoData));


   dispatch(Actions.addHpo(HPOInfoData));

  // state.push(projectInfoData);
  
}
const onChange = (e) => {
  const { name, value } = e.target;
  setInputs({
    ...inputs,
    [name]: value,
  });
};
  const handleShow2 = () => {
    getKey();
    setShow2(true);
  };

  const handleClose2 = () => {
    setShow2(false);
    setShow(false);
    onCreate();
  };

  // const [rowData, setRowData] = useState([
  //   { name: 'hpo1', state: 'running', created: 35000, computedTime: '1hours', runCount: 115,createdBy:'leehaein' },{computedTime: "1hours"
  //   ,created: 35000,
  //   createdBy: "leehaein",
  //   name: "dfwe",
  //   runCount: 100,
  //   state: "gewg"},
  //   { name: 'hpo1', state: 'running', created: 35000, computedTime: '1hours', runCount: 115,createdBy:'leehaein'  },{ name: 'hpo1', state: 'running', created: 35000, computedTime: '1hours', runCount: 115,createdBy:'leehaein'  },
  // ]);

  function onGridReady(params) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }
const columnDef =[
  {
    headerName: '#',

    sortable: true,
    filter: true,
    checkboxSelection: true,
  },
  { headerName: 'NAME', field: 'name', sortable: true, filter: true },
  { headerName: 'STATE', field: 'state', sortable: true, filter: true },
  {
    headerName: 'CREATED',
    field: 'created',
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
    headerName: 'COMPUTEDTIME',
    field: 'computedTime',
    sortable: true,
    filter: true,
  },
  {
    headerName: 'RUNCOUNT',
    field: 'runCount',
    sortable: true,
    filter: true,
  },
  
]
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
        <Navbar.Brand style={{ fontWeight: 'bold' }}>{rowData.length} Runs</Navbar.Brand>
        <Form inline>
          <FormControl
            type="text"
            id="quickFilter"
            placeholder="Search"
            className="mr-sm-2"
          />
        </Form>
        <Button onClick={handleShow}>New HPO</Button>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Container>
            <Col>
              <Modal.Title>New Project</Modal.Title>
            </Col>
            <Col>
              <p>Create a New Project</p>
            </Col>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <p>Project Name</p>
              </Col>
              <Col>
                <input
                  name="HPOName"
                  onChange={onChange}
                  value={HPOName}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Description</p>
              </Col>
              <Col>
                <input
                  name="description"
                  onChange={onChange}
                  value={description}
                />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleShow2}>
            CREATE
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Container>
            <Col>
              <Modal.Title>New Project</Modal.Title>
            </Col>
            <Col>
              <p>New Project Created!</p>
            </Col>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Col>
              <p>Your API Key is</p>
            </Col>
            <Col>
              <p>{apiKey}</p>
            </Col>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            DONE
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        className="ag-theme-alpine"
        style={{ height: '1600px', width: '2000px' }}
      >
        {/* <p>{data[0].runName.isSelected() ? "true" : "false"}</p>                     */}

        <AgGridReact onGridReady={onGridReady} rowData={rowData} columnDefs={columnDef}>
         
        </AgGridReact>
      </div>
    </>
  );
};

export default App;
