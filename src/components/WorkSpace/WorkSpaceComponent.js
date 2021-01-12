import React, { useEffect } from 'react';
import RunTableComponent from './table/RunTableComponent';
import Header from './WorkSpaceHeader';
import SectionsComponent from './sections/SectionsComponent';
import SystemComponent from './system/SystemComponent';
import { useDispatch, useSelector } from 'react-redux';

import * as Actions from '../../data/model/actions.js';
import * as Selectors from '../../data/model/selectors.js';

import { useParams } from 'react-router-dom';

const WorkSpaceComponent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const model = useSelector((state) => state.model.models);
  const runs = model.map((v) => v.runId);
  const totalRun = useSelector((state) => state.model.totalRun);
  const projectName = useSelector((state) => state.model.projectName);
  const isGraphLoading = useSelector((state) => state.model.isGraphLoading);
  const graph2 = useSelector(Selectors.getGraph2Results());
  console.log(model);
  const haein = model;
  let system = [];
  if (model.length > 0) {
    system = Object.keys(JSON.parse(haein[0].system));
  }
  console.log(system, haein);
  let systemData = [];

  system.forEach((indi) => {
    let temp = [];
    model.forEach((item, index) => {
      console.log(item);
      if (item.system) {
        let a = JSON.parse(item.system);
        let b = '';
        console.log(Array.isArray(a[indi]), a[indi]);
        if (Array.isArray(a[indi])) {
          b = a[indi][0];
          console.log(a[indi], a[indi][0]);
        } else b = a[indi];
        temp.push({
          x: b,
          y: index,
        });
        console.log(temp);
      }

      console.log(systemData);
    });
    systemData.push(temp);
  });

  
  const selected = useSelector((state) => state.model.selectedModel);
  const modelName = useSelector(Selectors.getSelectedModelName());
  useEffect(() => {
    dispatch(Actions.getModelsInfo(id));
  }, [dispatch, id]);
  useEffect(() => {
  
    if (totalRun > 0) {
      dispatch(Actions.getGraph(runs, selected));
    }
  }, [dispatch, totalRun, selected]);
  console.log(systemData, graph2);
  return (
    <div>
    
      <Header projectId={id} ProjectName={projectName}></Header>
      <RunTableComponent
        totalRuns={totalRun}
        models={model}
      ></RunTableComponent>
      <SectionsComponent
        models={modelName}
        isLoading={isGraphLoading}
        graph={graph2}
      ></SectionsComponent>
      <SystemComponent
        models={modelName}
        isLoading={isGraphLoading}
        graph={systemData}
        cards={system}
      ></SystemComponent>
    </div>
  );
};

export default WorkSpaceComponent;
