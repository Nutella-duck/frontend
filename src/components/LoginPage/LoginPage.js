import React from "react";
import "./LoginLayout.css";
import logo from "./logo@3x.png";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";

const LoginPage = () => {
  return (
    <>
      <div className="middleLocation">
        <Col>
          <Image
            className="logo"
            src={logo}
            width="127"
            height="140"
            thumbnail
            style={{ marginRight: "4.8rem", marginLeft: "4.8rem" }}
          />
        </Col>

        <div className="welcometosignin">
          - Welcom back! Sign in to access the Nutella Web. Did you forget your
          password?
        </div>

        <div>
          <input className="userinput" type="text" placeholder="username" />
        </div>
        <input
          type="password"
          className="passwordinput"
          placeholder="password"
          name="pass"
        />
        <div>
          <Link to="/project">
            <button className="SigninButton" font-color="#fffffff">
              {" "}
              Sign in{" "}
            </button>
          </Link>
        </div>
      </div>

      <Container>
        <Row></Row>
      </Container>
    </>
  );
};

export default LoginPage;
