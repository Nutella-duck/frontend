import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const SectionHeadComponent = () => {
  return (
    <div>
      <Navbar className="border-bottom border-grey">
        <Navbar.Brand style={{ fontWeight: "bold" }}>SECTIONS</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Button variant="primary">NEW SECTION</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default SectionHeadComponent;
