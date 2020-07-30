import React,{useState} from "react";
import './ProjectLayout.css';
import { Card,Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";


import Activity from './Activity/ActivityMain';
import Project from './Project/ProjectMain';
import Run from './Run/RunMain';
import Team from './Team/TeamMain';
import Profile from './Profile';


const ProjectPage = () => {
    return(
      <div className = "projectMainLayout">
          <Profile></Profile>
          <Activity></Activity>
          <Project></Project>
          <Team></Team>
          <Run></Run>
      </div>
    )
  };
  
  export default ProjectPage;
  