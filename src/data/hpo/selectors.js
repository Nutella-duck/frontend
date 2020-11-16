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
