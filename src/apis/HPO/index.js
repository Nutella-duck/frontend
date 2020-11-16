import { apiClient } from '../clients';

export const api = {
  async getHPOProjectList() {
    const { data } = await apiClient.get(`/hpo/hpoProject`, {
      params: {
        isNewArrival: true,
      },
    });
    console.log('rhdwn', data);
    return data;
  },
  async getHPOResult(id) {
    const { data } = await apiClient.get(`/hpo/result/${id}`, {
      params: {
        isNewArrival: true,
      },
    });
    console.log('rhdwn', data);
    return data;
  },

  //   async getNumberOfModel(modelId) {
  //     const { data } = await apiClient.get(`/project/${modelId}`);
  //     return data;
  //   },

  //   async fetch10model(modelId) {
  //     const { data } = await apiClient.get(`/run?page=${modelId}`);
  //     return data;
  //   },
  //  async getGraphData(id,index) {
  //    const {data} = await apiClient.get(`/graph/${id}/?index=${index}`);
  //    return data
  //  }
};
