export const getGraphResults = () => (state) => {
  const data = state.model.graphData;
  const selected = state.model.selectedModel;
  let result = [];
  let graph = [];
  
  if (data.length > 0) {
    const indicators = Object.keys(JSON.parse(data[0][0].indicator));

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
 
  return graph;
};


export const getSelectedModelName = () => (state) => {
  const model = state.model.models;
  const selectedModel = state.model.selectedModel;
  if (selectedModel.length > 0) {
    const result = selectedModel.map((v) => v.runName);
    return result;
  } else {
    const result = model.map((v) => v.runName);
    return result;
  }
};

export const getSystemData = () =>(state)=>{
  const model = state.model.models;
  const system = state.model.systemCard;
  let systemData = [];
  system.forEach((indi) => {
    let temp = [];
    model.forEach((item, index) => {
      
      if (item.system) {
        let a = JSON.parse(item.system);
        let b = '';
        if (Array.isArray(a[indi])) {
          b = a[indi][0];
    
        } else b = a[indi];
        temp.push({
          x: b,
          y: index,
        });
      }

    });
    systemData.push(temp);
  });
  return systemData
}