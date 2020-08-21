import React from "react";

import SystemComponents from "./SystemComponents";
import { useSelector } from "react-redux";



const SystemComponent = () => {
  const systems = useSelector((state) => state.system.cards);
  return (
    <div style={{paddingBottom:"3rem"}}> 
     
    
      {systems.map((system, index) => (
        <SystemComponents key={index} ></SystemComponents>
      ))}
      
      
    
    </div>
  );
};

export default SystemComponent;
