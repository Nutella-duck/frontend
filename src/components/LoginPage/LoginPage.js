import React,{useState} from "react";
import "./LoginLayout.css";
import logo from "./logo@3x.png";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image,Button } from "react-bootstrap";
import { apiClient } from "../../apis/clients";
import axios from 'axios';
const LoginPage = () => {

  const [user,setUser] = useState({username:'',password:''});

  const onChange=(e)=>{
    const {name,value} = e.target;
    setUser({...user,[name]:value});
  }
  const handleLogin=()=>{
    console.log(user);
    axios
    .post('http://localhost:7000/auth/login',{params:{userId:user.username,password:user.password}})
    .then((res)=>{console.log(res)})
    .catch((error)=>console.log('error'));
  
}

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
          <input className="userinput" type="text" placeholder="username" name="username" onChange={onChange}/>
        </div>
        <input
          type="password"
          className="passwordinput"
          placeholder="password"
          name="password"
          onChange={onChange}
        />
        <div>
          <Link to="/login">
            <Button type="button"className="SigninButton" font-color="#fffffff" onClick={handleLogin}>
              {" "}
              Sign in{" "}
            </Button>
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
