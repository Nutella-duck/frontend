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
  console.log('runs!!!', runs);
  console.log(
    `model${JSON.stringify(model)}${JSON.stringify(modelOfTheProject)}`,
  );
  const totalRun = modelOfTheProject[0].totalRun;
  const ProjectName = modelOfTheProject[0].projectName;
  //const chartIndicators = useSelector((state) => state.model.chartIndicators);
  const isGraphLoading = useSelector((state) => state.model.isGraphLoading);

  //const result = useSelector(Selectors.getResult(chartIndicators, totalRun));
  const result = useSelector(Selectors.getGraphResults());
  const graph2 = useSelector(Selectors.getGraph2Results(runs));

  //console.log(result[0].y.replace('"', ''));
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
      dispatch(Actions.getGraphs(id));
      dispatch(Actions.testGraphs(runs));
      console.log('여기렌더링중');
      // const time = setInterval(function () {
      //   dispatch(Actions.getGraphs(id));
      //   dispatch(Actions.testGraphs(runs));
      // }, 10000);
    }
  }, [dispatch, totalRun]);
  console.log(`????????${graph2}`);
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
        graph={graph2}
      ></SystemComponent>
    </div>
  );
};

export default WorkSpaceComponent;
