import React, { useEffect } from 'react';
import RunTableComponent from './RunTableComponent';
import Header from './WorkSpaceHeader';
import SectionsComponent from './sections/SectionsComponent';
import SystemComponent from './system/SystemComponent';
import { useDispatch, useSelector } from 'react-redux';

import * as Actions from '../../data/model/actions.js';
import * as Selectors from '../../data/model/selectors.js';

import { useParams } from 'react-router-dom';

const HPOListComponents = () => {
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();

  const modelOfTheProject = useSelector((state) => state.model.totalRun);

  const model = useSelector((state) => state.model.models);
  const totalRun = modelOfTheProject[0].totalRun;
  const ProjectName = modelOfTheProject[0].projectName;
  const chartIndicators = useSelector((state) => state.model.chartIndicators);

  useEffect(() => {}, []);

  return (
    <div>
      <Header projectId={id} ProjectName={'nutella'}></Header>
      <RunTableComponent
        totalRuns={totalRun}
        models={model}
      ></RunTableComponent>
    </div>
  );
};

export default HPOListComponents;
