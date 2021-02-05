import React from "react";
import profileImage from "./profile.png";
import "./ProjectLayout.css";
import { Col, Image, Row, Container, Media } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";
import { GrMapLocation, GrMailOption } from "react-icons/gr";
const Profile = () => {
  return (
    // <Media >
    //   <Image className="profileImage" src={profileImage} />
    //   <Media.Body >
    //     <Container className="col-sm-6 nopadding container">
    //       <Row className="nopadding row">
    //         <Col
    //           className="col-sm-2 nopadding"
    //           style={{
    //             width: "fit-content",
    //             fontSize: "26px",
    //             fontWeight: "bold",
    //             border : "red 3px solid"
    //           }}
    //         >
    //           이해인
    //         </Col>
    //         <Col
    //           className="col-sm-1 nopadding"
    //           style={{
    //             fontSize: "1.5rem",
    //             paddingTop: "1.2rem",
    //             paddingLeft: "0rem",
    //           }}
    //         >
    //           @leehaeina
    //         </Col>
    //       </Row>
    //       <Row>
    //         <p className="text" style={{ marginTop: "0.3rem" }}>
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit!{" "}
    //         </p>
    //       </Row>
    //       <Row>
    //         <Container>
    //           <Row
    //             style={{
    //               marginTop: "0rem",
    //               padding: "0",
    //               justifyContent: "flex-start ",
    //             }}
    //           >
    //             <Col
    //               className=" col-md-auto nopadding"
    //               // style={{ marginRight: "2rem" }}
    //             >
    //               <BsFillPersonFill style={{ marginRight: "0.3rem" }} />
    //               Nutella
    //             </Col>
    //             <Col
    //               className="col-md-auto nopadding"
    //               style={{ marginRight: "2rem" }}
    //             >
    //               <GrMapLocation style={{ marginRight: "0.3rem" }} />
    //               Korea
    //             </Col>
    //             <Col className="nopadding">
    //               <GrMailOption style={{ marginRight: "0.3rem" }} />
    //               leehaein0164@gmail.com
    //             </Col>
    //           </Row>
    //         </Container>
    //       </Row>
    //     </Container>
    //   </Media.Body>
    // </Media>

    <div className="profileContainer">
      <div className="imageContainer">
      <Image className="profileImage"src={profileImage} />
      </div>
      <div className="profileContents">
        <div className="profileName">
          <div className="hiname">
            이해인
          </div>
          <div className="hiid">
            @leehaeina
          </div>
        </div>
        <div className="profileDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit! 
        </div>
        <div className="profileContact">
        
                <div style={{display:"flex", marginRight:"20px"}}>
                  <BsFillPersonFill style={{ marginRight: "7px" ,marginTop:"5px" }} />
                  Nutella
                </div>
                <div style={{display:"flex",marginRight:"20px"}}>
                  <GrMapLocation style={{ marginRight: "7px" ,marginTop:"5px"}} />
                  Korea
                </div>
                <div style={{display:"flex"}}>
                  <GrMailOption style={{ marginRight: "7px"  ,marginTop:"5px"}} />
                  leehaein0164@gmail.com
                </div>
              
        </div>
      </div>
    </div>
  );
};

export default Profile;
