<<<<<<< Updated upstream
=======
export const getResult = (chartIndicators, totalRun) => (state) => {
  const graph = state.model.graphData;
  const selectedModel = state.model.selectedModel;
  const result = [];
  if (graph.length > 1) {
    for (let i = 0; i < chartIndicators.length; i++) {
      const data = [];
      for (let j = 0; j < totalRun; j++) {
        const one = [];
        for (let k = 0; k < 3; k++) {
          one.push({
            x: graph[totalRun * i + j][k].stepNumber,
            y: graph[totalRun * i + j][k][chartIndicators[i]],
            runName: graph[totalRun * i + j][k].runName,
          });
        }
        data.push(one);
      }
      result.push(data);
    }
  }
  if (selectedModel) {
    const filtered = result.map((v) =>
      v.map((d) => d.filter((g) => g.runName === selectedModel.runName)),
    );
    return filtered;
  } else {
    return result;
  }
};
export const getModels = (state) => state.model.models;

export const modelOfTheProject = (state) => state.model.totalRun;
export const getLoading = (state) => state.model.isGraphLoading;
>>>>>>> Stashed changes
