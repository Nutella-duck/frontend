import React from "react";
import logo from "./logo-nutella-s@3x.png";
import { Navbar, Nav, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from "./profile.png";
const ProjectPageHeader = () => {
  return (
    <Navbar style={{ backgroundColor: "white" }}>
      <Navbar.Brand href="/">
        {" "}
        <Image
          src={logo}
          width="90rem"
          height="auto"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
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

export default ProjectPageHeader;
