import React, {useState, useEffect } from 'react';
import "./page.css"
import { useDispatch, useSelector } from 'react-redux';
import {
  Navbar,
  Form,
  FormControl,
  Button,
  Modal,
  Col,
  Container,
  Row,
  Dropdown
} from 'react-bootstrap';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import * as Actions from '../../data/hpo/actions.js';
import * as Selectors from '../../data/hpo/selectors.js';
import Label from './labelSeries.js'
import HPOGraph from '../HPOSpace/graph.js';
import Parallel2 from './tickValue.js'
import { useParams } from 'react-router-dom';

const HPOSpace=()=>{
  const {id} = useParams();
  return (
    < >
<div className="header">
<div className="rootbox">page root</div>
<div className="profile">profile</div>
</div>
<div className="body">
  <div className="sidebar">sidebar</div>
  <div className="contents">
  <div className="eval"><Label></Label></div>
  <div className="importance">importance</div>
  <div className="graph"><Parallel2 className="grph-content"/></div>
  </div>

</div>
    </>
  
  );
};

export default HPOSpace;
