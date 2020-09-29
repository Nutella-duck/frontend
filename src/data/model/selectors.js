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
    console.log('dkdk', selectedModel);
    const filtered = result.map((v) =>
      v.map((d) => d.filter((g) => g.runName === selectedModel.runName)),
    );
    console.log('return', filtered);
    return filtered;
  } else {
    return result;
  }
  // if (selectedModel) {
  //   console.log('result', result);
  //   console.log(selectedModel);
  //   const toGraph = [];

  //   const filtered = result.map((v) =>
  //     v.map((d) => d.filter((g) => g.runName === selectedModel.runName)),
  //   );
  //   console.log(filtered);
  //   toGraph.push(filtered);
  //   console.log(toGraph);

  //   console.log('return', toGraph);
  //   return toGraph;
  // } else {
  //   return result;
  // }
};
