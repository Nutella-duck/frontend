import React, { useEffect } from 'react';
import Header from '../RunsHeader';
import SectionsComponent from './SectionsComponent';
import { useDispatch, useSelector } from 'react-redux';

import * as Actions from '../../../data/model/actions.js';

import { useParams } from 'react-router-dom';

const MatrixsPage = () => {
  console.log('워크스페이스 렌더링 중...');
  const { id } = useParams();
  const dispatch = useDispatch();

  const graph = useSelector((state) => state.model.graphData);
  const model = useSelector((state) => state.model.models);

  const chartIndicators = useSelector((state) => state.model.chartIndicators);
  const totalRun = 1;
  const systemIndicators = [
    {
      cpu: null,
      gpu: null,
      net: null,
      disk: null,
    },
  ];

  useEffect(() => {
    dispatch(Actions.getIndicators);
    dispatch(Actions.getOneGraph(id, chartIndicators));
    const time = setInterval(function () {
      console.log('30초!', 1);
      dispatch(Actions.getOneGraph(id, chartIndicators));
    }, 30000);
  }, []);

  console.log(
    'model',
    model,

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
      <Header id={id}></Header>
      {/* <RunTableComponent
        totalRuns={totalRun}
        models={model}
      ></RunTableComponent> */}
      <SectionsComponent
        models={model}
        // graph={result.length >= chartIndicators.length ? result : sample}
        graph={result.length >= chartIndicators.length ? result : sample}
      ></SectionsComponent>
      {/* <SystemComponent
        models={model}
        graph={result.length >= chartIndicators.length ? result : sample}
      ></SystemComponent> */}
    </div>
  );
};

export default MatrixsPage;
