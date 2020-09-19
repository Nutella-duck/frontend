import * as AT from './actionTypes';

export const getUser = (state) => state.user[AT.LOG_IN];

export const getLoginError = (state) => state.user.error;

export const getWhoAmI = (state) => state?.user[AT.WHO_AM_I];
