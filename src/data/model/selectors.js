import { select } from 'd3';

export const getResult = (chartIndicators, totalRun) => (state) => {
  const graph = JSON.stringify(state.model.graphData);

  const selectedModel = state.model.selectedModel;
  console.log('graph selectro', JSON.stringify(graph));
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

export const getSystemGraph = () => (state) => {
  const data = state.model.graphData;
  const selected = state.model.selectedModel;
  console.log('여기들어오나요?');
  console.log('data', data, selected);
  let result = [];
  let graph = [];
  // if(selected.length>1)
  // {
  //   data.filter(v=>v)
  // }

  if (data.length > 0) {
    const system = Object.keys(JSON.parse(data[0][0].system));

    //indicators : ['accuracy']
    system.forEach((indi) => {
      result = [];
      data.forEach((item) => {
        let temp = [];
        item.forEach((v) => {
          if (v.system) {
            let a = JSON.parse(v.system);

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
  console.log('????', graph);
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
