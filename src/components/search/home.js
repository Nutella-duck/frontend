import React from "react";
// import logo from "./logo-nutella-s@3x.jpg";
import { Navbar, Nav, Image, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import profileImage from "../ProjectPage/profile.png";
// import "./navbar.css";
import Main from "./main"
const Home = () => {
  const [title, setTitle] = React.useState();
  const menu = [
    {
      "projectId": 1,
      "projectName": "pj1",
      "description": null,
      "privacy": null,
      "created_at": "2020-09-11T10:22:43.000Z",
      "totalRun": 3
    },
    {
      "projectId": 2,
      "projectName": "pj2",
      "description": null,
      "privacy": null,
      "created_at": "2020-09-11T10:22:43.000Z",
      "totalRun": 0
    },
    {
      "projectId": 3,
      "projectName": "pj3",
      "description": null,
      "privacy": null,
      "created_at": "2020-09-11T10:22:43.000Z",
      "totalRun": 0
    }
  ]
  const selectProject = (projectId) => {
    console.log(projectId)
    const title = menu.find(v => v.projectId === Number(projectId))
    
    setTitle(title.projectName)
   
    console.log(title.projectName)
    
  }
  return (
    <>
    <Navbar style={{ backgroundColor: "white" }} onSelect={selectProject}>
      <Navbar.Brand href="/"></Navbar.Brand>

      <Image
        // src={logo}
        width="45rem"
        height="auto"
        className="d-inline-block align-top"
      />
      
      <NavDropdown title={"title"} id="nav-dropdown">
        
        {
          menu.map(v => (<NavDropdown.Item key={v.projectId} eventKey={v.projectId}href={`/workspace/${v.projectId}`}>{v.projectName} </NavDropdown.Item>))
        }
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
             // src={profileImage}
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
    
    </>
  );
};

export default Home;
