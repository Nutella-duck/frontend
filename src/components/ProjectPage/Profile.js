import React, { useEffect } from "react";
import profileImage from "./profile.png";
import "./ProjectLayout.css";
import Axios from "axios";
import { Col, Image, Row, Container, Media } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";
import { GrMapLocation, GrMailOption } from "react-icons/gr";
import apis from '../../apis/index';
const Profile = () => {
  let user ={
    userId: "string",
    nickname: "string",
    email: "string",
    company: "string",
    location: "string",
    introduction: "string"
  }
  let token = localStorage.getItem("token");
  useEffect(() => {
    
    Axios.get("http://localhost:7000/admin/user",{
      
        headers:{'access-token':token}
       }).then(res => {
      user = res.data[0]
    }).catch(err => {
      console.log(token)
      alert('실패')
    })
     console.log(user)
  }, []);
  return (
    

    <div className="profileContainer">
      <div className="imageContainer">
      <Image className="profileImage"src={profileImage} />
      </div>
      <div className="profileContents">
        <div className="profileName">
          <div className="hiname">
            {user.nickname}
          </div>
          <div className="hiid">
            {user.userId}
          </div>
        </div>
        <div className="profileDescription">
        {user.introduction}
        </div>
        <div className="profileContact">
        
                <div style={{display:"flex", marginRight:"20px"}}>
                  <BsFillPersonFill style={{ marginRight: "7px" ,marginTop:"5px" }} />
                  {user.company}
                </div>
                <div style={{display:"flex",marginRight:"20px"}}>
                  <GrMapLocation style={{ marginRight: "7px" ,marginTop:"5px"}} />
                  {user.location}
                </div>
                <div style={{display:"flex"}}>
                  <GrMailOption style={{ marginRight: "7px"  ,marginTop:"5px"}} />
                  {user.email}
                </div>
              
        </div>
      </div>
    </div>
  );
};

export default Profile;
