import React from "react";
import logo from "./logo-nutella-s@3x.jpg";
import { Navbar, Nav, Image, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from "../ProjectPage/profile.png";
import "./navbar.css";

const WorkSpaceHeader = () => {
  return (
    <Navbar style={{ backgroundColor: "white" }}>
      <Navbar.Brand href="/"></Navbar.Brand>

      <Image
        src={logo}
        width="45rem"
        height="auto"
        className="d-inline-block align-top"
      />
      <NavDropdown title="Nutella Project" id="nav-dropdown">
        <NavDropdown.Item></NavDropdown.Item>
        <NavDropdown.Item>Another action</NavDropdown.Item>
        <NavDropdown.Item>Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>Separated link</NavDropdown.Item>
      </NavDropdown>

      <Nav
        className="topnav col-sm-9 justify-content-center"
        activeKey="/workspace"
        style={{ fontWeight: "bold" }}
      >
        <Nav.Item>
          <Nav.Link eventKey="link-1" href="/home">
            OVERVIEW
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/workspace">WORKSPACE</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/chart">REPORTS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">HPO</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">COMPRESSION</Nav.Link>
        </Nav.Item>
      </Nav>

      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Link
            href="/project"
            style={{
              fontWeight: "bold",
              color: "#000000",
              marginRight: "0.2rem",
            }}
          >
            <Image
              src={profileImage}
              width="40rem"
              height="auto"
              className="d-inline-block align-top"
            />
          </Nav.Link>
          <Nav.Link
            href="/project"
            style={{
              fontWeight: "bold",
              color: "black",
              marginTop: "0.7rem",
            }}
          >
            이해인{" "}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default WorkSpaceHeader;
