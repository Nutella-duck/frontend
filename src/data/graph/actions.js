import apis from '../../apis/index';

import * as AT from './actionTypes';
import { createAction } from 'redux-actions';

export const getGraphSuccess = createAction(AT.GET_GRAPH_SUCCESS);

export const getGraphs = (id, indicator, totalRun) => async (
  dispatch,
  getState,
) => {
  const graphPromise = [];
  for (let i = 0; i < indicator.length; i++) {
    for (let j = 0; j < totalRun; j++)
      graphPromise.push(apis.modelApi.getGraphData(j + 1, indicator[i]));
  }
  console.log('graphPromise', graphPromise);
  const graph = await Promise.all(graphPromise);
  console.log('그래프 받음');
  dispatch(getGraphSuccess(graph));
};
export const getIndicators = () => {
  return {
    type: AT.FETCH_GRAPH_DATA,
  };
};
