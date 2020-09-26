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
  console.log('워크스페이스 렌더링 중...');
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();
  const selectedModel = useSelector((state) => state.model.selectedModel);
  const modelOfTheProject = useSelector((state) => state.model.totalRun);

  const model = useSelector((state) => state.model.models);
  const totalRun = modelOfTheProject[0].totalRun;
  const ProjectName = modelOfTheProject[0].projectName;
  const chartIndicators = useSelector((state) => state.model.chartIndicators);
  const isGraphLoading = useSelector((state) => state.model.isGraphLoading);

  const systemIndicators = [
    {
      cpu: null,
      gpu: null,
      net: null,
      disk: null,
    },
  ];

  const result = useSelector(Selectors.getResult(chartIndicators, totalRun));

  // const resultOneGraph = (graph) => {
  //   const result = [];
  //   console.log('hi', graph[0][0].stepNumber);
  //   for (let i = 0; i < chartIndicators.length; i++) {
  //     const data = [];

  //     console.log(i, totalRun);
  //     const one = [];
  //     for (let k = 0; k < graph[i].length; k++) {
  //       one.push({
  //         x: graph[i][k].stepNumber,
  //         y: graph[i][k][chartIndicators[i]],
  //       });
  //     }
  //     data.push(one);

  //     result.push(data);
  //   }
  //   return result;
  // };
  // const resultAllGraphs = (graph) => {
  //   const result = [];
  //   console.log('hi', graph[0][0].stepNumber);
  //   for (let i = 0; i < chartIndicators.length; i++) {
  //     const data = [];
  //     for (let j = 0; j < totalRun; j++) {
  //       console.log(i, totalRun);
  //       const one = [];
  //       for (let k = 0; k < 3; k++) {
  //         console.log(
  //           'i',
  //           i,
  //           'j',
  //           j,
  //           'k',
  //           k,
  //           'graph',
  //           graph[totalRun * i + j][k],
  //         );
  //         one.push({
  //           x: graph[totalRun * i + j][k].stepNumber,
  //           y: graph[totalRun * i + j][k][chartIndicators[i]],
  //         });
  //       }
  //       data.push(one);
  //     }
  //     result.push(data);
  //   }
  //   return result;
  // };
  useEffect(() => {
    dispatch(Actions.getResult(id));
    dispatch(Actions.getIndicators);
  }, []);
  useEffect(() => {
    if (totalRun > 0) {
      dispatch(Actions.getGraphs(id, chartIndicators, totalRun));
      // const time = setInterval(function () {
      //   dispatch(Actions.getGraphs(id, chartIndicators, totalRun));
      // }, 5000);
    }
  }, [totalRun]);

  console.log('isLoading', isGraphLoading);
  var a = 'accuracy';
  // if(selectedModel) {
  //   graph.filter((v)=>v.)
  // }

  console.log('result', result);

  return (
    <div>
      <Header projectId={id} ProjectName={ProjectName}></Header>
      <RunTableComponent
        totalRuns={totalRun}
        models={model}
      ></RunTableComponent>
      <SectionsComponent
        models={model}
        isLoading={isGraphLoading}
        // graph={result.length >= chartIndicators.length ? result : sample}
        graph={result}
      ></SectionsComponent>
      <SystemComponent
        models={model}
        isLoading={isGraphLoading}
        graph={result}
      ></SystemComponent>
    </div>
  );
};

export default WorkSpaceComponent;
