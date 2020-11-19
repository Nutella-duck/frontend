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

    return data;
  },
  async getHPOImportance(id) {
    const { data } = await apiClient.get(`/hpo/importances/${id}`, {
      params: {
        isNewArrival: true,
      },
    });

    return data;
  },
  async getBestParameter(id) {
    const { data } = await apiClient.get(`/hpo/bestResult/${id}`, {
      params: {
        isNewArrival: true,
      },
    });

    return data;
  },
  async addHPOProject(HPOProject) {
    const { data } = await apiClient.post(`/hpo/hpoProject`, HPOProject);
    return data;
  },
  async addHPOConfig(HPOConfig) {
    const { data } = await apiClient.post(`/hpo/config`, HPOConfig);
    return data;
  },
};
