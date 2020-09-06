import React from "react";
import { Navbar, Nav, Button, Card, Row, Col } from "react-bootstrap";
import { BsGear } from "react-icons/bs";
import Graph from "./Graph";

import "react-vis/dist/style.css";

const ItemHead = () => {
  return (
    <div>
      <Navbar
        style={{
          marginTop: "2rem",
          backgroundColor: "white",
          marginLeft: "2rem",
          marginRight: "2rem",
          borderTopRightRadius: "0.7rem",
          borderTopLeftRadius: "0.7rem",
        }}
      >
        <Navbar.Brand style={{ fontWeight: "bold" }}>CHARTS</Navbar.Brand>
        <Button variant="light">
          <BsGear />
        </Button>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Button variant="dark">NEW PANEL</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const SectionsComponents = (models) => {
  const cards = [1, 2, 3];
  const name = ["accuracy", "loss", "val_acc"];

  return (
    <div style={{ borderRadius: "0.7rem" }}>
      <ItemHead></ItemHead>
      <Row
        style={{
          marginLeft: "2rem",
          marginRight: "2rem",
          backgroundColor: "white",
          borderBottomLeftRadius: "0.7rem",
          borderBottomRightRadius: "0.7rem",
        }}
      >
        {cards.map((card, index) => (
          <Col
            key={index}
            sm={4}
            style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
          >
            <Card
              style={{ height: "20rem", width: "auto", borderColor: "white" }}
            >
              <h5>{name[index]}</h5>
              <Graph index={index} models={models}/>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SectionsComponents;
