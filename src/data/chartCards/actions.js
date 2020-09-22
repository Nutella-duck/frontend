import apis from '../../apis/index';

import * as AT from './actionTypes';
import { createAction } from 'redux-actions';

export const getSystemCards = () => {
  return {
    type: AT.GET_SYSTEM_CARDS,
  };
};

export const getChartCards = () => {
  return {
    type: AT.GET_CHART_CARDS,
  };
};
