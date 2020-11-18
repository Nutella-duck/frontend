import React, { useEffect } from 'react';
import Header from '../RunsHeader';
import SectionsComponent from './SectionsComponent';
import { useDispatch, useSelector } from 'react-redux';

import * as Actions from '../../../data/model/actions.js';

import { useParams } from 'react-router-dom';

const MatrixsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const graph = useSelector((state) => state.model.graphData);
  const model = useSelector((state) => state.model.models);
  console.log('model', model);
  const chartIndicators = useSelector((state) => state.model.chartIndicators);
  const isGraphLoading = useSelector((state) => state.model.isGraphLoading);
  useEffect(() => {
    dispatch(Actions.getIndicators);
    dispatch(Actions.getAllModelData());
    dispatch(Actions.getOneGraph(id, chartIndicators));
    // const time = setInterval(function () {
    //   dispatch(Actions.getOneGraph(id, chartIndicators));
    // }, 30000);
  }, [chartIndicators, dispatch, id]);

  const result = [];
  if (graph.length > 1) {
    for (let i = 0; i < chartIndicators.length; i++) {
      const data = [];

      const one = [];
      for (let k = 0; k < graph[i].length; k++) {
        one.push({
          x: graph[i][k].stepNumber,
          y: graph[i][k][chartIndicators[i]],
        });
      }
      data.push(one);

      result.push(data);
    }
  }

  const name = model.find((item) => item.runId === Number(id));
  const legend = model.filter((item) => item.runId === Number(id));

  return (
    <div>
      <Header title={name ? name.runName : name} id={id} navId={2}></Header>\
      <SectionsComponent
        models={legend ? legend : model}
        isLoading={isGraphLoading}
        graph={result}
      ></SectionsComponent>
    </div>
  );
};

export default MatrixsPage;
