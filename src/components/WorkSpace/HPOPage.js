import React, { useEffect } from 'react';
import RunTableComponent from './RunTableComponent';
import Header from './WorkSpaceHeader';

import { useDispatch, useSelector } from 'react-redux';

import * as Actions from '../../data/model/actions.js';
import * as Selectors from '../../data/model/selectors.js';

import { useParams } from 'react-router-dom';

const HPOListComponents = () => {
  const { id } = useParams(); 
  const model = useSelector((state) => state.model.models);
  const totalRun = useSelector((state) => state.model.totalRun);

  useEffect(() => {}, []);

  return (
    <div>
      <Header projectId={id} ></Header>
      <RunTableComponent
        totalRuns={totalRun}
        models={model}
      ></RunTableComponent>
    </div>
  );
};

export default HPOListComponents;
