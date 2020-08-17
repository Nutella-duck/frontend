import React from "react";
import { Navbar, Nav, Button, Card, Row, Col } from "react-bootstrap";
import{BsGear} from "react-icons/bs";
import Graph from "./Graph";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../../store/actions";
import 'react-vis/dist/style.css';



const ItemHead = () => {
  

  return (
    <div>
      <Navbar  style={{marginTop:"2rem" , backgroundColor:"white",marginLeft:"2rem",marginRight:"2rem",borderTopRightRadius:"0.7rem",borderTopLeftRadius:"0.7rem"}}>
        <Navbar.Brand style={{ fontWeight: "bold" }}>CHARTS</Navbar.Brand>
        <Button variant="light" ><BsGear/></Button>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Button variant="dark" >NEW PANEL</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const SectionsComponents = () => {
  const cards = [1, 2,3];
 

        
  return (
    <div style={{borderRadius:"0.7rem"}}>
      <ItemHead></ItemHead>
      <Row style={{marginLeft:"2rem",marginRight:"2rem", backgroundColor:"white",borderBottomLeftRadius:"0.7rem",borderBottomRightRadius:"0.7rem"}}>
        {cards.map((card, index) => (
          <Col key={index} sm={4} style={{ paddingTop: "1rem",paddingBottom:"1rem",}}>
            <Card style={{height:"20rem",width:"auto"}}>
              <h5>ACCURRUCY{card}</h5>
              <Graph/>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SectionsComponents;
