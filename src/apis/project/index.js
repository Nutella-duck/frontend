import { apiClient } from '../clients';

export const api = {


  async fetchAllProject(projectId) {
    const { data } = await apiClient.get(`/project?page=${projectId}`);
    return data;
  },

  async addProject(projectData) {
    const { data } = await apiClient.post(`/project`,projectData);
    return data;
  },
}
//   async fetchProjectList(categoryId, { sortBy, gtePrice, ltePrice } = {}) {
//     const headers = categoryId ? { Prefer: `example=${categoryId}` } : {};
//     const { data } = await apiClient.get(`/project`, {
//       params: {
//         categoryId,
//         sortBy,
//         gtePrice,
//         ltePrice,
//       },
//       headers,
//     });
//     return data;
//   },
// };
