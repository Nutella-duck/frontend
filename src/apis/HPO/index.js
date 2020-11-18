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
  async addHPOProject(HPOProject) {
    const { data } = await apiClient.post(`/hpo/hpoProject`, HPOProject);
    return data;
  },
  async addHPOConfig(HPOConfig) {
    const { data } = await apiClient.post(`/hpo/config`, HPOConfig);
    return data;
  },
};
