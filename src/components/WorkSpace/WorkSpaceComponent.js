import React, { useEffect } from 'react';
import RunTableComponent from './table/RunTableComponent';
import Header from './WorkSpaceHeader';
import SectionsComponent from './indicators/IndicatorsComponent';
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
  const isGraphLoading = useSelector((state) => state.model.isGraphLoading);
  const system = useSelector((state) => state.model.systemCard);
  const selected = useSelector((state) => state.model.selectedModel);
  const modelName = useSelector(Selectors.getSelectedModelName());
  const systemData = useSelector(Selectors.getSystemData());
  const graph = useSelector(Selectors.getGraphResults());
  useEffect(() => {
    dispatch(Actions.getModelsInfo(id));
  }, [dispatch, id]);
  useEffect(() => {
    if (totalRun > 0) {
      dispatch(Actions.getGraph(runs, selected));
    }
  }, [dispatch, totalRun, selected]);
  return (
    <div>
    
      <Header projectId={id} ></Header>
      <RunTableComponent
        totalRuns={totalRun}
        models={model}
      ></RunTableComponent>
      <SectionsComponent
        models={modelName}
        isLoading={isGraphLoading}
        graph={graph}
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
