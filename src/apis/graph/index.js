import { apiClient } from '../clients';

export const api = {
  async fetchChartGraph(id,index) {
    const { data } = await apiClient.get(`/graph/${id}/?index=${index}`);
    return data;
  },
};
