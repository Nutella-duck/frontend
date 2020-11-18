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
  const data = state.model.graph2Data;
  console.log('~!~!~!', data, typeof data);

  console.log(data);
  let result = [];
  let graph = [];

  if (data.length > 1) {
    const indicators = Object.keys(JSON.parse(data[0][0].indicator));
    console.log(indicators);
    //indicators : ['accuracy']
    indicators.forEach((indi) => {
      data.forEach((item) => {
        let temp = [];
        item.forEach((v) => {
          if (v.indicator) {
            // console.log(`const${v.indicator}${typeof v.indicator}`);
            let a = JSON.parse(v.indicator);
            console.log('여기!!! indicator:', v.indicator, a);
            console.log('indicator[arr[0]]', a[indi]);
            console.log('arr[0]', indi);
            console.log(
              'typeof indicator',
              typeof v.indicators,
              'typeof arr[0]',
              typeof indi,
            );
            temp.push({
              x: v.stepNumber,
              y: a[indi],
            });
          }
        });
        result.push(temp);
        console.log('result', result);
      });
      graph.push(result);
    });
  }
  console.log('!!!!', graph);
  return graph;
};
export const getGraphResults = (totalRun) => (state) => {
  const data = state.model.graphData;

  let result = [];
  data.forEach((v) => {
    if (v.indicator) {
      // console.log(`const${v.indicator}${typeof v.indicator}`);
      let temp = JSON.parse(v.indicator);
      result.push({
        x: v.stepNumber,
        y: temp.accuracy,
      });
    }
  });
  return result;
  // if (graph.length > 2) {
  //   graph.forEach((v) => {
  //     let indicator = v.indicator.replace('"', '');
  //     data.push({
  //       x: v.stepNumber,
  //       y: indicator.accuracy,
  //     });
  //   });
  //   console.log(`tempdata${data}`);
  // }

  // if (graph.length > 1) {
  //   for (let i = 0; i < chartIndicators.length; i++) {
  //     const data = [];
  //     for (let j = 0; j < totalRun; j++) {
  //       const one = [];
  //       for (let k = 0; k < 3; k++) {
  //         one.push({
  //           x: graph[totalRun * i + j][k].stepNumber,
  //           y: graph[totalRun * i + j][k][chartIndicators[i]],
  //           runName: graph[totalRun * i + j][k].runName,
  //         });
  //       }
  //       data.push(one);
  //     }
  //     result.push(data);
  //   }
  // }
  // if (selectedModel.length > 0) {
  //   console.log(selectedModel.length);
  //   console.log('selectedModle', selectedModel);
  //   console.log('result', result);
  //   const filtered = result.map((v) =>
  //     v.map((d) =>
  //       d.filter((g, index) =>
  //         selectedModel.some((item) => item.runName === g.runName),
  //       ),
  //     ),
  //   );
  //   console.log('filterd', filtered);
  //   return filtered;
  // } else {
  //   return result;
  // }
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
