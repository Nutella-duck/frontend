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

  useEffect(() => {
    dispatch(Actions.getResult(id));
    dispatch(Actions.getIndicators);
  }, []);
  useEffect(() => {
    if (totalRun > 0) {
      dispatch(Actions.getGraphs(id, chartIndicators, totalRun));
    }
  }, [totalRun]);

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
