import React from "react";
import SectionHeadComponent from "./SectionHeadComponent";
import SectionComponents from "./SectionComponents";
import { useSelector } from "react-redux";



const SectionsComponent = () => {
  const sectoions = useSelector((state) => state.section.cards);
  
  return (
    <div style={{paddingBottom:"3rem"}}> 
      <SectionHeadComponent></SectionHeadComponent>
    
      {sectoions.map((section, index) => (
        <SectionComponents key={index} ></SectionComponents>
      ))}
      
      
    
    </div>
  );
};

export default SectionsComponent;
