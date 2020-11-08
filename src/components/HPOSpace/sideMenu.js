import React, {useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Display,GraphUp,Table } from 'react-bootstrap-icons';
import {Nav} from 'react-bootstrap'
//import "./pageRoot.css"
const SideMenu = ()=>{
    return (
        <>
     <Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/home"><div><Display/><div>OVERVIEW</div></div></Nav.Link>
  <Nav.Link eventKey="link-1"><div><GraphUp/><div>CHARTS</div></div></Nav.Link>
  <Nav.Link eventKey="link-2"><div><Table/><div>RUNS</div></div></Nav.Link>

</Nav>
       </>
    );
};
export default SideMenu;