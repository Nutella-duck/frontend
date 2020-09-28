import React, { useEffect } from 'react';
import RunTableComponent from './table/RunTableComponent';
import Header from './WorkSpaceHeader';
import SectionsComponent from './sections/SectionsComponent';
import SystemComponent from './system/SystemComponent';
import { useDispatch, useSelector } from 'react-redux';

import * as Actions from '../../data/model/actions.js';
<<<<<<< Updated upstream

=======
import * as Selectors from '../../data/model/selectors.js';
import { getchartIndicators } from '../../data/chartCards/selectors.js';
>>>>>>> Stashed changes
import { useParams } from 'react-router-dom';

const WorkSpaceComponent = () => {
  console.log('워크스페이스 렌더링 중...');
  const { id } = useParams();
  console.log(id);

  // const dispatch = useDispatch();
  // const modelOfTheProject = useSelector(Selectors.modelOfTheProject);
  // console.log('modelOfTheProject', modelOfTheProject);

  // const model = useSelector(Selectors.getModels);
  // const totalRun = modelOfTheProject[0].totalRun;
  // const ProjectName = modelOfTheProject[0].projectName;
  // console.log('ProjectName', ProjectName);
  // const chartIndicators = useSelector(getchartIndicators);
  const isGraphLoading = useSelector(Selectors.getLoading);

  // const result = useSelector(Selectors.getResult(chartIndicators, totalRun));

  // useEffect(() => {
  //   dispatch(Actions.getResult(id));
  //   dispatch(Actions.getIndicators);
  // }, []);
  // useEffect(() => {
  //   if (totalRun > 0) {
  //     const time = setInterval(function () {
  //       console.log('30초!', totalRun);
  //       dispatch(Actions.getGraphs(id, chartIndicators, totalRun));
  //     }, 5000);
  //   }
  // }, [totalRun]);
  const dispatch = useDispatch();
  const modelOfTheProject = useSelector((state) => state.model.totalRun);
  const graph = useSelector((state) => state.model.graphData);
  const model = useSelector((state) => state.model.models);
  const totalRun = modelOfTheProject[0].totalRun;
  const ProjectName = modelOfTheProject[0].projectName;
  const chartIndicators = useSelector((state) => state.model.chartIndicators);
<<<<<<< Updated upstream
=======
  // const isGraphLoading = useSelector((state) => state.model.isGraphLoading);
>>>>>>> Stashed changes

  const systemIndicators = [
    {
      cpu: null,
      gpu: null,
      net: null,
      disk: null,
    },
  ];

  useEffect(() => {
    dispatch(Actions.getResult(id));
    dispatch(Actions.getIndicators);
  }, []);
  useEffect(() => {
    dispatch(Actions.getGraphs(id, chartIndicators, totalRun));
    const time = setInterval(function () {
      console.log('30초!', totalRun);
      dispatch(Actions.getGraphs(id, chartIndicators, totalRun));
<<<<<<< Updated upstream
    }, 30000);
=======
      const time = setInterval(function () {
        console.log('30초!', totalRun);
        dispatch(Actions.getGraphs(id, chartIndicators, totalRun));
      }, 5000);
    }
>>>>>>> Stashed changes
  }, [totalRun]);

  console.log(
    'model',
    model,
    'modelOfTheProject',
    modelOfTheProject,
    'maingraph',
    graph,
  );
  var a = 'accuracy';

  const result = [];
  if (graph.length > 1) {
    console.log('hi', graph[0][0].stepNumber);
    for (let i = 0; i < chartIndicators.length; i++) {
      const data = [];
      for (let j = 0; j < totalRun; j++) {
        console.log(i, totalRun);
        const one = [];
        for (let k = 0; k < 3; k++) {
          console.log(
            'i',
            i,
            'j',
            j,
            'k',
            k,
            'graph',
            graph[totalRun * i + j][k],
          );
          one.push({
            x: graph[totalRun * i + j][k].stepNumber,
            y: graph[totalRun * i + j][k][chartIndicators[i]],
          });
        }
        data.push(one);
      }
      result.push(data);
    }
  }
  console.log('result', result);

  const sample = [
    [
      [
        { x: 1, y: 0.7 },
        { x: 2, y: 0.75 },
        { x: 3, y: 0.79 },
      ],
      [
        { x: 1, y: 0.7 },
        { x: 2, y: 0.75 },
        { x: 3, y: 0.79 },
      ],
      [
        { x: 1, y: 0.7 },
        { x: 2, y: 0.75 },
        { x: 3, y: 0.79 },
      ],
    ],
    [
      [
        { x: 1, y: 0.7 },
        { x: 2, y: 0.75 },
        { x: 3, y: 0.79 },
      ],
      [
        { x: 1, y: 0.7 },
        { x: 2, y: 0.75 },
        { x: 3, y: 0.79 },
      ],
      [
        { x: 1, y: 0.9 },
        { x: 2, y: 0.95 },
        { x: 3, y: 0.99 },
      ],
    ],
  ];

  return (
    <div>
      <Header projectId={id} ProjectName={ProjectName}></Header>
      <RunTableComponent
        totalRuns={totalRun}
        models={model}
      ></RunTableComponent>
      <SectionsComponent
        models={model}
<<<<<<< Updated upstream
        // graph={result.length >= chartIndicators.length ? result : sample}
        graph={result.length >= chartIndicators.length ? result : sample}
=======
        isLoading={isGraphLoading}
        graph={result}
>>>>>>> Stashed changes
      ></SectionsComponent>
      <SystemComponent
        models={model}
        graph={result.length >= chartIndicators.length ? result : sample}
      ></SystemComponent>
    </div>
  );
};

export default WorkSpaceComponent;
