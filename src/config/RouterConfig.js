import React from "react";
import HomeComponent from "../components/HomeComponent";

import LoginPage from "../components/LoginPage/LoginPage";
import ProjectPage from "../components/ProjectPage/ProjectPage";



import WorkSpaceComponent from "../components/WorkSpace/WorkSpaceComponent";

export const RouterConfig = [
  {
    path: "/",
    exact: true,
    component: () => <HomeComponent></HomeComponent>,
  },

  {
    path: "/login",
    exact: true,
    component: () => <LoginPage></LoginPage>,
  },

  
  {
    path: "/project",
    exact: true,
    component: () => <ProjectPage></ProjectPage>,
  },
  


  {
    path: "/workspace",
    exact: true,
    component: () => <WorkSpaceComponent></WorkSpaceComponent>,
  },
  


 
];
