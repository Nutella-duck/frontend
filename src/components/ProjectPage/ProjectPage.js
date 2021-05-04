import React from "react";
import './ProjectLayout.css';

import "bootstrap/dist/css/bootstrap.min.css";



import Header from './ProjectPageHeader';
import Project from './Project/ProjectMain';
import Run from './Run/RunMain';
import Team from './Team/TeamMain';
import Profile from './Profile';


const ProjectPage = () => {
    return(
      <div className = "projectMainLayout">
        <div className = "projectHeader">
          <Header></Header>
        </div>
        <div className ="projectProfile">
          <Profile></Profile>
        </div>
        <div className ="projectCard">
          <Project></Project>
        </div>
        <div className ="teamCard">
           <Team></Team> 
        </div>
        <div className ="runCard">
          <Run></Run>
        </div>
      </div>
    )
  };
  
  export default ProjectPage;
  