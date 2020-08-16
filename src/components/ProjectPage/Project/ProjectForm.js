import React,{useState} from 'react';
import './ProjectForm.css';
import { Modal,Button, Container,Col,Row,Nav,Navbar,Form,FormControl} from "react-bootstrap";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

const ProjectForm = ({value,onChange,  onCreate}) => {
  const [show, setShow] = useState(false);
  const [show2,setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShow2 =() => setShow2(true);
  const handleClose2 = () =>{ setShow2(false); setShow(false);onCreate();}

  return (
    
     
      
     <>

      <Navbar style={{marginLeft:"16rem",marginRight:"16rem",padding:"0" }}>
        <Navbar.Brand style={{ fontWeight: "bold",fontSize:"2rem" }}>Project</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Form inline>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
            <Button variant="dark" onClick={handleShow}>
              New Project
            </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
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
             <p>project Name</p>
            </Col>
            <Col>
              <input onChange={onChange} value={value} />
            </Col>
          </Row>
          <Row>
            <Col>
             <p>Description</p>
            </Col>
            <Col>
              <input  />
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
              <p>key</p>
            </Col>
          
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose2}>
          DONE
        </Button>
        
      </Modal.Footer>

    </Modal>
    
      </>
      
   
  );
};

export default ProjectForm;