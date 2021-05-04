import React, { useEffect } from 'react';
import Header from '../RunsHeader';
import SectionsComponent from '../../WorkSpace/indicators/IndicatorsComponent.js';
import { useDispatch, useSelector } from 'react-redux';

import * as Actions from '../../../data/model/actions.js';
import * as Selectors from '../../../data/model/selectors.js';
import { useHistory, useLocation, useParams } from 'react-router-dom';

const MatrixsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
 const location= useLocation();
 const history = useHistory();
 console.log("location",location,history)
  const model = useSelector((state) => state.model.models);
  const runs = model.map((v) => v.runId);
  const totalRun = useSelector((state) => state.model.totalRun);
  const isGraphLoading = useSelector((state) => state.model.isGraphLoading);
  const selected = model.filter(v=>v.runId===id);
  const modelName = useSelector(Selectors.getSelectedModelName());
  const graph = useSelector(Selectors.getGraphResults());
  useEffect(() => {
    dispatch(Actions.getModelsInfo(id));
    console.log("hihi",id,totalRun)
  }, [dispatch, id]);
  useEffect(() => {
    if (totalRun > 0) {
      dispatch(Actions.getGraph(runs, selected));
    }
  }, [dispatch, totalRun, selected]);
  // useEffect(() => {
  //   dispatch(Actions.getModelsInfo(id));
  //   if (runs.length > 0) dispatch(Actions.getGraph(runs, selected));
  //   // const time = setInterval(function () {
  //   //   dispatch(Actions.getOneGraph(id, chartIndicators));
  //   // }, 30000);
  // }, [dispatch]);
  
  console.log(model,runs,selected,graph)
 
  return (
    <div>
      <Header projectId={id}navId={2}></Header>
      <SectionsComponent
      models={modelName}
      isLoading={isGraphLoading}
      graph={graph}
      ></SectionsComponent>
    </div>
  );
};

export default MatrixsPage;
