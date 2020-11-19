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
  console.log('work', id);
  const dispatch = useDispatch();

  const modelOfTheProject = useSelector((state) => state.model.totalRun);
  const graphdata2 = useSelector((state) => state.model.graph2Data);

  const model = useSelector((state) => state.model.models);
  const runs = model.map((v) => v.runId);

  const totalRun = modelOfTheProject[0].totalRun;
  const ProjectName = modelOfTheProject[0].projectName;
  //const chartIndicators = useSelector((state) => state.model.chartIndicators);
  const isGraphLoading = useSelector((state) => state.model.isGraphLoading);

  //console.log(system);
  //const result = useSelector(Selectors.getResult(chartIndicators, totalRun));

  const graph2 = useSelector(Selectors.getGraph2Results());
  console.log(model);
  let system = [];
  if (model.length > 0) {
    system = Object.keys(JSON.parse(model[0].system));
  }
  console.log(system);
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
    //graph.push(result);
    systemData.push(temp);
  });

  //console.log(result[0].y.replace('"', ''));
  const selected = useSelector((state) => state.model.selectedModel);
  const modelName = useSelector(Selectors.getSelectedModelName());
  useEffect(() => {
    dispatch(Actions.getResult(id));
    // dispatch(Actions.getIndicators()); // 약간 의미없는거인듯..?
  }, [dispatch, id]);
  useEffect(() => {
    // if (totalRun > 0) {
    //   dispatch(Actions.getGraphs(id, chartIndicators, totalRun));
    //   // const time = setInterval(function () {
    //   //   dispatch(Actions.getGraphs(id, chartIndicators, totalRun));
    //   // }, 5000);
    // }
    if (totalRun > 0) {
      // dispatch(Actions.getGraphs(id));
      dispatch(Actions.testGraphs(runs, selected));
      console.log('여기렌더링중');
      // const time = setInterval(function () {
      //   dispatch(Actions.getGraphs(id));
      //   dispatch(Actions.testGraphs(runs));
      // }, 10000);
    }
  }, [dispatch, totalRun, selected]);
  console.log(systemData, graph2);
  return (
    <div>
      {/* <div>{graphdata2}</div> */}
      <Header projectId={id} ProjectName={ProjectName}></Header>
      <RunTableComponent
        totalRuns={totalRun}
        models={model}
      ></RunTableComponent>
      <SectionsComponent
        models={modelName}
        isLoading={isGraphLoading}
        // graph={result.length >= chartIndicators.length ? result : sample}
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
