import { apiClient } from '../clients';

export const api = {
  async getSelectedModelData(modelId) {
    const { data } = await apiClient.get(`/run/${modelId}`, {
      params: {
        isNewArrival: true,
      },
    });
    return data;
  },
  async getNumberOfModel(modelId) {
    const { data } = await apiClient.get(`/project/${modelId}`);
    return data;
  },

  async fetch10model(modelId) {
    const { data } = await apiClient.get(`/run?page=${modelId}`);
    return data;
  },
  async getGraphData(id) {
    const { data } = await apiClient.get(`/graph/${id}`);
    console.log(`getGraph${data}`);
    return data;
  },
};
