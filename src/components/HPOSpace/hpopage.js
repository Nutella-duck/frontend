import React, {useState, useEffect } from 'react';

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
} from 'react-bootstrap';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import * as Actions from '../../data/hpo/actions.js';
import * as Selectors from '../../data/hpo/selectors.js';
import HPOGraph from '../HPOSpace/graph.js';
import { useParams } from 'react-router-dom';

const HPOSpace=()=>{
  const {id} = useParams();
  return (
      <HPOGraph></HPOGraph>
  );
};

export default HPOSpace;
