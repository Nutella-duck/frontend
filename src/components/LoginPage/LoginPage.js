import React from "react";
import './LoginLayout.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";


const LoginPage = () => {
  return (
  <>
  <div className  = "middleLocation">
  <h1 className = "heading">Nutella</h1>
  
  <div className = "welcometosignin" >
    welcome back! and sign in our page!! plz!~~
  </div>
    
  <div>
      <input
        type = "text"
        className = "userinput"
        placeholder = "username"
        
      />
   </div>
      <input
        type = "password"
       className = "passwordinput"
        placeholder = "password"
        name = "pass"
        />
        <div>
          <Link to ="/project">
      <button> Sign in </button>
      </Link>
    </div>
    </div>
    
   
  </>
  )
};

export default LoginPage;
