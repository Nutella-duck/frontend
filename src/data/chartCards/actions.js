import apis from '../../apis/index';

import * as AT from './actionTypes';

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
export const addSystemChart = (card) => {
  return {
    type: AT.ADD_SYSTEM_CARDS,
    card,
  };
};
export const addChartCard = (card) => {
  return {
    type: AT.ADD_CHART_CARD,
    card,
  };
};
