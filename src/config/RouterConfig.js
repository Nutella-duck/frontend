import React from "react";
import HomeComponent from "../components/HomeComponent";

import LoginPage from "../components/LoginPage/LoginPage";
import ProjectPage from "../components/ProjectPage/ProjectPage";
import Table from "../components/search/home";
import API from "../components/search/main";

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
  

  {
    path: "/api",
    exact: true,
    component: () => <API></API>,
  },
  {
    path: "/table",
    exact: true,
    component: () => <Table></Table>,
  },
 
];
