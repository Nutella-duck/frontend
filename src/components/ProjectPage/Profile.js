import React from "react";
import profileImage from './profile.png';
import './ProjectLayout.css'
import { Col,Image} from "react-bootstrap";
const Profile = () => {
  return (
    
          
          <div >
              
           
            <div>
            <Col >
                <Image src={profileImage} width="100" height="100" roundedCircle />
            </Col>
            </div>
            <div className = "profileLayout">
                <p >이해인   @아이디 </p>
                <div> <p>한줄자기소개</p></div>
                <div><p>Team : Nutella  location : Korea  email : leehaein0164@gmail.com</p> </div>
            </div>
        </div>
        
        
  );
};

export default Profile;
