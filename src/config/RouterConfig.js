import React from "react";
import HomeComponent from "../components/HomeComponent";
import LoginPage from "../components/LoginPage";

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
];
