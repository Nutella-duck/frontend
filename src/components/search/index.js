import React from "react";
import Home from "./home";

import {
  useParams
 } from "react-router-dom";
const Main=()=>
{
  const {id} =useParams()
  return (
  <Home projectId="0"/>
  )
}

export default Main;