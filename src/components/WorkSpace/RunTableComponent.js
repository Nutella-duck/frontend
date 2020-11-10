import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {
  Navbar,
  Form,
  FormControl,
  Button,
  Modal,
  Col,
  Container,
  Row,
  NavDropdown
} from 'react-bootstrap';
import {Trash} from "react-bootstrap-icons"
import React, { useState, useEffect } from 'react';
import './HpoList.css';
import { render } from 'react-dom';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { RowNodeCache } from 'ag-grid-community';
import * as Actions from '../../data/hpo/actions';
import { useSelector, useDispatch } from 'react-redux';
import HpoReducer from '../../data/hpo/reducers';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Actions.getAllModelData());
  }, []);
  const rowData = useSelector((state) => state.hpo.hpoData);
  console.log(rowData);
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3 , setShow3] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [filterText, setFilterText] = useState(null);
  const [inputs, setInputs] = useState({
    HPOName: '',
    description: '',
  });
  const { HPOName, description } = inputs;
  const [apiKey, setApiKey] = useState();
  const getKey = () => {
    setApiKey(100);
  };
  const onCreate = () => {
    setInputs({
      HPOName: '',
      description: '',
    });

    let HPOInfoData = {
      name: inputs.HPOName,
      state: inputs.description,
      runCount: apiKey,
      created: 35000,
      computedTime: '1hours',
      createdBy: 'leehaein',
    };
    // setRowData(rowData.concat(HPOInfoData));

    dispatch(Actions.addHpo(HPOInfoData));

    // state.push(projectInfoData);
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const handleShow2 = () =>{
    setShow(false);
    setShow2(true);
  }
  const handleShow3 = () => {
    getKey();
    setShow3(true);
  };

  const handleClose2 = () => {
    setShow2(false);
    setShow(false);
    
  };
  const handleClose3 = () => {
    setShow(false);
    setShow2(false);
    setShow3(false);
    onCreate();
  }

  
  function onQuickFilterText(event) {
    setFilterText(event.target.value);
    console.log(filterText);
  }
  function onGridReady(params) {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  }
  function onCellClicked(event){
    console.log(event.data)
    window.location.href=`/hpo/${event.data.runId}`;
  }

  const columnDef = [
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
  ];
  function Table(){
    return (<div className="addTable"><div className="Config"><input
    className="ConfigInputbox"
    placeholder="epoch"
   
  /></div>
    <div className="Type"> <NavDropdown title="Range" id="nav-dropdown">
           
           <NavDropdown.Item key={0}>Range</NavDropdown.Item>
           <NavDropdown.Item key={1}>Specific</NavDropdown.Item>
          
                    </NavDropdown></div>
    <div className="Value"><input
    placeholder=""
   
  /></div>
    <div className="Trash"><Trash/></div></div>)
  }
  return (
    
    <>
      <Navbar bg="light" variant="light" style={{ borderRadius: '0.7rem' }}>
        <Navbar.Brand style={{ fontWeight: 'bold' }}>
          {rowData.length} Runs
        </Navbar.Brand>
        <Form inline>
          <FormControl
            type="text"
            id="quickFilter"
            placeholder="Search"
            className="mr-sm-2"
            onChange={onQuickFilterText}
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
                <input name="HPOName" onChange={onChange} value={HPOName} />
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
            NEXT
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Container>
            <Col>
              <Modal.Title>New HPO</Modal.Title>
            </Col>
            <Col>
              <p>Select the method and config parameters</p>
            </Col>
          </Container>
        </Modal.Header>
        <Modal.Body>
        
          {/*<Row> <p>Method : </p>
          <NavDropdown title="TPE" id="nav-dropdown">
            {/* {cards.map((v, index) => (
              <NavDropdown.Item key={index}>{v[index]}</NavDropdown.Item>
            ))} 
 <NavDropdown.Item key={0}>TPE</NavDropdown.Item>
 <NavDropdown.Item key={1}>Grid</NavDropdown.Item>
 <NavDropdown.Item key={2}>Range</NavDropdown.Item>
          </NavDropdown>
          </Row>*/}
          <>
          <div className="Method">
          <div className="MethodName">Method</div>
          <div className="MethodDropdown"> <NavDropdown title="TPE" id="nav-dropdown">
           
 <NavDropdown.Item key={0}>TPE</NavDropdown.Item>
 <NavDropdown.Item key={1}>Grid</NavDropdown.Item>
 <NavDropdown.Item key={2}>Range</NavDropdown.Item>
          </NavDropdown></div>
          </div>
          <div className="NewHPOtitle">
          <div className="addTable"><div className="Config">Config</div>
    <div className="Type">Type</div>
    <div className="Value">Value</div>
    <div className="Trash"></div></div>
         <Table />
          </div>
          </>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow3}>
            SKIP
          </Button>
          <Button variant="primary" onClick={handleClose2}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleShow3}>
            CREATE
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show3} onHide={handleClose3}>
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
          <Button variant="secondary" onClick={handleClose3}>
            DONE
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        className="ag-theme-alpine"
        style={{ height: '1600px', width: '2000px' }}
      >
                           

        <AgGridReact
          onGridReady={onGridReady}
          rowData={rowData}
          columnDefs={columnDef}
          quickFilterText={filterText} 
          onCellClicked={onCellClicked}
        ></AgGridReact>
      </div>
    </>
  );
};

export default App;
