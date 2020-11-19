import React, { useEffect } from 'react';
import Header from '../RunsHeader';
import SectionsComponent from './SectionsComponent';
import { useDispatch, useSelector } from 'react-redux';

import * as Actions from '../../../data/model/actions.js';
import * as Selectors from '../../../data/model/selectors.js';
import { useParams } from 'react-router-dom';

const MatrixsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const graph = useSelector((state) => state.model.graph2Data);
  const model = useSelector((state) => state.model.models);
  const runs = model.map((v) => v.runId);

  const chartIndicators = useSelector((state) => state.model.chartIndicators);
  const isGraphLoading = useSelector((state) => state.model.isGraphLoading);
  const graph2 = useSelector(Selectors.getGraph2Results(runs));
  const selected = model.filter((v) => v.runId === id);
  useEffect(() => {
    dispatch(Actions.getResult(id));
    if (runs.length > 0) dispatch(Actions.testGraphs(runs, selected));
    // const time = setInterval(function () {
    //   dispatch(Actions.getOneGraph(id, chartIndicators));
    // }, 30000);
  }, [dispatch, id, selected]);
  console.log('model', model, runs, selected);
  const name = model.find((item) => item.runId === Number(id));
  const legend = model.filter((item) => item.runId === Number(id));
  console.log(graph2);
  return (
    <div>
      <Header title={name ? name.runName : name} id={id} navId={2}></Header>\
      <SectionsComponent
        models={legend ? legend : model}
        isLoading={isGraphLoading}
        graph={graph2}
      ></SectionsComponent>
    </div>
  );
};

export default MatrixsPage;
