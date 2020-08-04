import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import logo from "../../../logo.svg";

const ItemHead = () => {
  return (
    <div>
      <Navbar className="border-bottom border-grey">
        <Navbar.Brand style={{ fontWeight: "bold" }}>CHARTS</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Button variant="primary">NEW PANEL</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const SectionsComponents = () => {
  const cards = [1, 2, 3, 4, 5];

  return (
    <div>
      <ItemHead></ItemHead>
      <Row>
        {cards.map((card, index) => (
          <Col key={index} md={4} style={{ marginTop: "1.5rem" }}>
            <Card>
              <h5>ACCURRUCY{card}</h5>
              <Card.Img variant="bottom" src={logo} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SectionsComponents;
