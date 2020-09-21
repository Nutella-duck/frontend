import React,{useEffect} from "react";
import RunTable from './RunTable';
import {
  Navbar,
  Form,
  FormControl,
  Nav,
  Button,

} from "react-bootstrap";
import { BsFunnel,} from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import Footer from "./RunFooter";
import * as Actions from "../../../data/model/actions.js";
import axios from "axios";

const Run = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.model.models);

  useEffect(() => {
    dispatch(Actions.getAllModelData());
  }, []);

  console.log(state)
  return (
    <>
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
<RunTable tableRows={state}></RunTable>
</div>
<Footer/>
</>
  );
};

export default Run;