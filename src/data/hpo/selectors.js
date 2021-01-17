export const getHPOResult = () => (state) => {
  const data = state.hpo.hpoConfig;
  console.log('~!~!~!', data);
  let result = [];

  data.forEach((item) => {
    let temp = [];
    item.forEach((v) => {
      if (v.indicator) {
        // console.log(`const${v.indicator}${typeof v.indicator}`);
        let a = JSON.parse(v.indicator);
        temp.push({
          x: v.stepNumber,
          y: a.accuracy,
        });
      }
    });
    result.push(temp);
  });
  console.log('!!!!', result);
  return result;
};

export const getHPOTarget = () => (state) => {
  const data = state.hpo.hpoConfig;
  let result = [];
  data.forEach((item) => {
    let temp = [];
    item.forEach((v) => {
      if (v.indicator) {
        // console.log(`const${v.indicator}${typeof v.indicator}`);
        let a = JSON.parse(v.indicator);
        temp.push({
          x: v.stepNumber,
          y: a.accuracy,
        });
      }
    });
    result.push(temp);
  });
  console.log('!!!!', result);
  return result;
};
export const getHPOImportance = () => (state) => {
  const data = state.hpo.hpoImportance;
  let result = [];
  data.forEach((item, index) => {
    let temp = new Object();
    temp.y = index;
    temp.x = item.importance;

    result.push(temp);
  });

  const name = data.map((v) => v.configParameter);
  const importance = [result, name];

  return importance;
};
