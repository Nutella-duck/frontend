import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeft,ChevronRight } from 'react-bootstrap-icons';
//import "./pageRoot.css"
const PageRoot = ()=>{
    return (
        <>
       <div className = "backArrow"><ArrowLeft size={30}/></div>
       <div className="projectName">NutellaProject</div>
       <div className="ChevronRight"><ChevronRight size={30}/></div>
       <div className="HPO">HPO</div>
       <div className="ChevronRight"><ChevronRight size={30}/></div>
       <div className="HPODropDown">hpo1</div>
       </>
    );
};
export default PageRoot;