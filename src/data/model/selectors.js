export const getResult = (chartIndicators, totalRun) => (state) => {
  const graph = state.model.graphData;
  const selectedModel = state.model.selectedModel;
  console.log('graph selectro', graph);
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
  if (selectedModel.length > 0) {
    console.log(selectedModel.length);
    console.log('selectedModle', selectedModel);
    console.log('result', result);
    const filtered = result.map((v) =>
      v.map((d) =>
        d.filter((g, index) =>
          selectedModel.some((item) => item.runName === g.runName),
        ),
      ),
    );
    console.log('filterd', filtered);
    return filtered;
  } else {
    return result;
  }
};
export const getSelectedModelName = () => (state) => {
  const model = state.model.models;
  const selectedModel = state.model.selectedModel;
  console.log(selectedModel);
  if (selectedModel.length > 0) {
    const result = selectedModel.map((v) => v.runName);
    console.log('selec', result);
    return result;
  } else {
    const result = model.map((v) => v.runName);
    console.log('total', result);
    return result;
  }
};
