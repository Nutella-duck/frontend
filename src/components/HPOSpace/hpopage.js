import React, { useState, useEffect } from 'react';
import './page.css';

import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../data/hpo/actions.js';
import Label from './labelSeries.js';
import HPOGraph from '../HPOSpace/graph.js';
import Parallel2 from './parallelGraph.js';
import { useParams } from 'react-router-dom';
import PageRoot from './pageRoot';
import SideMenu from './sideMenu';
import Profile from './profile';
import Importance from './importance';
import * as Selectors from '../../data/hpo/selectors.js';

import Best from './best';
const HPOSpace = () => {
  const { id } = useParams();
  const rowData = useSelector((state) => state.hpo.hpoConfig);
  const importance = useSelector(Selectors.getHPOImportance());
  const best = useSelector((state) => state.hpo.best);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Actions.hpoConfig(id));
    dispatch(Actions.getHPOList());
    dispatch(Actions.getHPOImportance(id));
    dispatch(Actions.getBestParameter(id));
  }, [dispatch]);
  console.log(importance);
  const iris = [
    {
      target: 0.3,
      config: {
        units: 5.1,
        dropout: 3.5,
        batch_size: 1.4,
        eval_loss: 0.2,
        optimizer: 'adam',
        species: 'setosa',
      },
    },
    {
      target: 0.4,
      config: {
        units: 4.9,
        dropout: 3.0,
        batch_size: 1.4,
        eval_loss: 0.2,
        optimizer: 'adam',
        species: 'setosa',
      },
    },
  ];


  let data = [];
  for (let i = 0; i < rowData.length; i++) {
    data.push({
      target: rowData[i].target,
      config: rowData[i].config,
    });
  }

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
            <div style={{ marginBottom: '10px' }}>eval_loss v. created</div>
            <Label data={data ? data : iris}></Label>
          </div>
          <div className="importance">
            <div style={{ marginLeft: '70px' }}>
              parameter importance with respect to eval_loss
            </div>
            <Importance
              className="importaceContents"
              data={importance}
            ></Importance>
          </div>
          <div className="bestComponents">
            <div className="best">
              <Best best={best} data={data}></Best>
            </div>

            <div className="graph">
              <Parallel2
                data={data ? data : iris}
                className="grph-content"
              ></Parallel2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HPOSpace;
