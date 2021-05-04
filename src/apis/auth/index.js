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
  async getUserInfo() {
    const { data } = await apiClient.get(`/admin/user`);
    return data;
  },
  async fetchAllProject(projectId) {
    const { data } = await apiClient.get(`/project?page=${projectId}`)
    
    return data;
  },
};
