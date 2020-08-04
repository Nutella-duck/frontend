import React from "react";
import HomeComponent from "../components/HomeComponent";
import LoginPage from "../components/LoginPage";
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
    path: "/workspace",
    exact: true,
    component: () => <WorkSpaceComponent></WorkSpaceComponent>,
  },
];
