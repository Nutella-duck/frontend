import { apiClient } from '../clients';

export const api = {
 
  async login(user) {
    const { data } = await apiClient.post(`/auth/login`, user);
    return data;
  },
  async addHPOConfig(HPOConfig) {
    const { data } = await apiClient.post(`/hpo/config`, HPOConfig);
    return data;
  },
};
