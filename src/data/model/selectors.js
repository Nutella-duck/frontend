export const getResult = (chartIndicators, totalRun) => (state) => {
  const graph = state.model.graphData;
  const selectedModel = state.model.selectedModel;
  console.log(selectedModel);
  const result = [];
  if (graph.length > 1) {
    console.log('hi', graph[0][0].stepNumber);
    for (let i = 0; i < chartIndicators.length; i++) {
      const data = [];
      for (let j = 0; j < totalRun; j++) {
        console.log(i, totalRun);
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
  console.log('result', result);
  if (selectedModel) {
    const filtered = result.map((v) =>
      v.map((d) => d.filter((g) => g.runName === selectedModel.runName)),
    );
    console.log('filtered', filtered);
    return filtered;
  } else {
    return result;
  }
};
