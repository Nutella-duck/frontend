
export const getGraph2Results = () => (state) => {
  const data = state.model.graphData;
  const selected = state.model.selectedModel;
  console.log('data', data, selected);
  let result = [];
  let graph = [];
  // if(selected.length>1)
  // {
  //   data.filter(v=>v)
  // }
  if (data.length > 0) {
    const indicators = Object.keys(JSON.parse(data[0][0].indicator));

    //indicators : ['accuracy']
    indicators.forEach((indi) => {
      result = [];
      data.forEach((item) => {
        let temp = [];
        item.forEach((v) => {
          if (v.indicator) {
            let a = JSON.parse(v.indicator);

            temp.push({
              x: v.stepNumber,
              y: a[indi],
            });
          }
        });
        result.push(temp);
      });
      graph.push(result);
    });
  }
  console.log('!!!!', graph);
  return graph;
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
