import { apiClient } from '../clients';

export const api = {
  //run/{projectid} projectid에 맞는 모든 run 가져옴 table 그릴때 쓰면 될듯? 
  async getModelsThisProject(projectid) {
    const { data } = await apiClient.get(`/run/${projectid}`, { 
      params: {
        isNewArrival: true,
      },
    });
    return data;
  },

  //project 1개 정보라서 projectId, projectName,totalRun 을 알 수 있다.
  async getNumberOfModel(modelId) {
    const { data } = await apiClient.get(`/project/${modelId}`);
    return data;
  },

  //run 10개씩 보여주는거 
  async fetch10model(modelId) {
    const { data } = await apiClient.get(`/run?page=${modelId}`);
    return data;
  },

  //runid별로 가져옴 stepNumber, indicator, system 이렇게 있다. 
  async getGraphData(runId) {
    const { data } = await apiClient.get(`/graph/${runId}`);
    return data;
  },
};
