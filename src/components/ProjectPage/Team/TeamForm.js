import React,{useState} from 'react';

import { Modal,Button, Container,Col,Row,Nav,Navbar,Form,FormControl} from "react-bootstrap";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

const TeamForm = ({value,onChange,  onCreate}) => {
  const [show, setShow] = useState(false);
  

  const handleClose = () => {setShow(false);onCreate();}
  const handleShow = () =>setShow(true);
  return (
    
     
      
     <>

      <Navbar  style={{marginLeft:"16rem",marginRight:"16rem",padding:"0"}}>
        <Navbar.Brand style={{ fontWeight: "bold",fontSize:"2rem" }}>Team</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Form inline>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
            <Button variant="dark" onClick={handleShow}>
              New Team
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
             <p>Team Name</p>
            </Col>
            <Col>
              <input onChange={onChange} value={value} />
            </Col>
          </Row>
          
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          CANCEL
        </Button>
        <Button variant="primary" onClick={handleClose}>
          CREATE
        </Button>
      </Modal.Footer>
    </Modal>


      
    
      </>
      
   
  );
};

export default TeamForm;