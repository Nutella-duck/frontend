import React from "react";
import RunTable from './RunTable';

import {
  Navbar,
  Form,
  FormControl,
  Nav,
  ButtonGroup,
  Button,
  Row,
  Col
} from "react-bootstrap";
import {
  BsFunnel,
  BsFillGridFill,
  BsArrowUpDown,
  BsColumnsGap,
} from "react-icons/bs";
const Run = () => {
  return (
      <div style={{marginLeft:"16rem",marginRight:"16rem",paddingBottom:"7rem" }}>
    <div className = "form">
    <Navbar style={{padding:"0"}} >
        <Navbar.Brand style={{ fontWeight: "bold",fontSize:"2rem",margin:"0" }}>Run</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Form inline>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
            <Button size="md" variant="dark" >
            <BsFunnel  />
            
          </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    
    
</div>
<RunTable ></RunTable>
</div>
  );
};

export default Run;
