import React, { useState, useEffect } from 'react';
import './page.css';
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
  Dropdown,
} from 'react-bootstrap';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import * as Actions from '../../data/hpo/actions.js';
import * as Selectors from '../../data/hpo/selectors.js';
import Label from './labelSeries.js';
import HPOGraph from '../HPOSpace/graph.js';
import Parallel2 from './parallelGraph.js';
import { useParams } from 'react-router-dom';
import PageRoot from './pageRoot';
import SideMenu from './sideMenu';
import Profile from './profile';
import Importance from './importance';
const HPOSpace = () => {
  const { id } = useParams();
  const rowData = useSelector((state) => state.hpo.hpoConfig);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Actions.hpoConfig());
  }, [dispatch]);
  //let arr = JSON.parse(rowData);

  //console.log(arr);

  // const data = {

  //   "epoch": {
  //     "scope": [1, 10]
  //   },
  //   "learning_rate": {
  //     "value": [0.1, 0.05, 0.01]
  //   },
  //   "max_depth": {
  //     "value": [4, 5, 6, 7]
  //   }
  // }

  // const jsondata = Object.keys(data)

  // console.log(jsondata)
  // rowData?console.log(rowData[0].config):console.log(rowData)

  const data = '"method":"tpe","epoch":10,"learning_rate":0.05';
  let datasplice = data.replace('"', '');
  datasplice = '"' + datasplice;
  console.log(datasplice);

  return (
    <>
      <div className="header">
        <div className="rootbox">
          <PageRoot className="pageroot"></PageRoot>
        </div>
        <div className="profile">
          <Profile></Profile>
        </div>
      </div>
      <div className="body">
        <div className="sidebar">
          <SideMenu />
        </div>
        <div className="contents">
          <div className="eval">
            <div>eval_loss</div>
            <Label></Label>
          </div>
          <div className="importance">
            <div>Importance</div>
            <Importance className="importaceContents"></Importance>
          </div>
          <div className="graph">
            <Parallel2 className="grph-content"></Parallel2>
          </div>
        </div>
      </div>
    </>
  );
};

export default HPOSpace;
