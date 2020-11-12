import React from "react";

import { Navbar, Nav, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import profileImage from "../ProjectPage/profile.png";
const Profile = () => {
  return (
    <>
            <Image
              src={profileImage}
              width="70rem"
              height="auto"
              className="d-inline-block align-top"
            />
        
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
     
      
  </>
  );
};

export default Profile;
