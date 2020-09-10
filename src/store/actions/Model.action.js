import axios from "axios";

export const FETCH_ALL_MODEL_DATA = "Model/FETCH_ALL_MODEL_DATA";
export const ADD_MODEL = "Model/ADD_MODEL";
export const FETCH_NUMBER_OF_MODEL = "Model/FETCH_NUMBER_OF_MODEL";

export const fetchAllModelData = (modelData) => {
  return {
    type: FETCH_ALL_MODEL_DATA,
    modelData,
  };
};
export const fetchNumberOfModel = (totalRun) => {
  return {
    type: FETCH_NUMBER_OF_MODEL,
    totalRun,
  };
};
export const getAllModelData = () => {
  return (dispatch) => {
    return axios
      .get("http://localhost:7000/admin/run", {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        dispatch(fetchAllModelData(response.data));
      })
      .catch((error) => {
        console.log("error read model");
        throw error;
      });
  };
};

export const getNumberOfModel = () =>
{
  return (dispatch) => {
    return axios
      .get("http://localhost:7000/admin/project/1", {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        dispatch(fetchNumberOfModel(response.data));
      })
      .catch((error) => {
        console.log("error read model's count");
        throw error;
      });
  };
}
