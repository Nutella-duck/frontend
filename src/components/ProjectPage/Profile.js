import React from "react";
import profileImage from './bitmap-big@3x.png';
import './ProjectLayout.css'
import { Col,Image,Row,Container,Media} from "react-bootstrap";
import {BsFillPersonFill} from "react-icons/bs"
import{GrMapLocation,GrMailOption}from "react-icons/gr"
const Profile = () => {
  return (
    
          
          
           
        
        <Media style={{marginLeft:"16rem"}}>
        <Image className="profileImage"
          src={profileImage}
          
        />
        <Media.Body style={{marginTop:"3rem"}}>
        <Container className = "col-sm-6 nopadding">
              <Row className="nopadding" >
                 <Col className="col-sm-2 nopadding" style={{width:"fit-content",fontSize:"2.5rem",fontWeight:"bold"}}>
         이해인
                 </Col>
                 <Col  className="col-sm-1 nopadding" style={{fontSize:"1.5rem", paddingTop:"1.2rem",paddingLeft:"0rem"}}>                  
                @leehaeina
                 </Col>
                 </Row>
                 <Row>
                 <p className="text" style={{marginTop:"0.3rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit! </p>
                 </Row>
                 <Row>
                 <Container>
                 <Row style={{marginTop:"0rem", padding:"0",justifyContent:"flex-start "}}>
               
                 <Col className=" col-md-auto nopadding" style={{marginRight:"2rem"}}>
                  <BsFillPersonFill style={{marginRight:"0.3rem"}}/>
                  Nutella
                 </Col>
                 <Col className="col-md-auto nopadding" style={{marginRight:"2rem"}}>
                  <GrMapLocation style={{marginRight:"0.3rem"}}/>
                  Korea
                 </Col>
                 <Col className="nopadding" >
                  <GrMailOption style={{marginRight:"0.3rem"}}/>
                  leehaein0164@gmail.com
                 </Col>
                  
                  
                 </Row>
                 </Container>
                 </Row>
                 </Container>
        </Media.Body>
      </Media>
     
        
  );
};

export default Profile;
