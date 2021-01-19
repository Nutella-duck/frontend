import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeComponent = () => {
  return (
    <>
      <Navbar style={{backgroundColor:"white"}}>
        <Navbar.Brand href="/">NutellaCoder</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link
              style={{
                fontWeight: "bold",
                color: "#000000",
                marginRight: "5rem",
              }}
              href="signup"
            >
              SIGN UP
            </Nav.Link>
            <Nav.Link
              href="login"
              style={{
                fontWeight: "bold",
                color: "blue",
                marginRight: "2.5rem",
              }}
            >
              SIGN IN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
    
      <h1>홈페이지</h1>
    </>
  );
};

export default HomeComponent;
