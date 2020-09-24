import React, { useEffect } from 'react';
import RunTableComponent from './table/RunTableComponent';
import Header from './WorkSpaceHeader';
import SectionsComponent from './sections/SectionsComponent';
import SystemComponent from './system/SystemComponent';
import { useDispatch, useSelector } from 'react-redux';

import * as Actions from '../../data/model/actions.js';

import { useParams } from 'react-router-dom';

const WorkSpaceComponent = () => {
  console.log('워크스페이스 렌더링 중...');
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();
  const modelOfTheProject = useSelector((state) => state.model.totalRun);
  const graph = useSelector((state) => state.model.graphData);
  const model = useSelector((state) => state.model.models);
  const totalRun = modelOfTheProject[0].totalRun;
  const ProjectName = modelOfTheProject[0].projectName;
  const chartIndicators = useSelector((state) => state.model.chartIndicators);

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
    }, 30000);
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
        const one = [];
        for (let k = 0; k < 3; k++) {
          console.log('i', i, 'j', j, 'k', k, 'graph', graph[3 * i + j][k]);
          one.push({
            x: graph[3 * i + j][k].stepNumber,
            y: graph[3 * i + j][k][chartIndicators[i]],
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
        // graph={result.length >= chartIndicators.length ? result : sample}
        graph={result.length >= chartIndicators.length ? result : sample}
      ></SectionsComponent>
      <SystemComponent
        models={model}
        graph={result.length >= chartIndicators.length ? result : sample}
      ></SystemComponent>
    </div>
  );
};

export default WorkSpaceComponent;
