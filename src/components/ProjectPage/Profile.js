import React from "react";
import profileImage from './profile.png';
import './ProjectLayout.css'
const Profile = () => {
  return (
    <div className = "projectMainLayout">
          <>
          <div >
              
            <img
                src={ profileImage}
                width='80'
                height='80'
                //align = "middle"
            />
            <div className = "profileLayout">
                <text >이해인   @아이디 </text>
                <div> <text>한줄자기소개</text></div>
                <div><text>Team : Nutella  location : Korea  email : leehaein0164@gmail.com</text> </div>
            </div>
        </div>
        </>
        </div>
  );
};

export default Profile;
