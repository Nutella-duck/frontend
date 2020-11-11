import React from 'react';

import { ParallelCoordinates } from 'react-vis';
import IrisData from './iris.json';
import { curveCatmullRom } from 'd3';
// {"sepal length": 5.1, "sepal width": 3.5, "petal length": 1.4, "petal width": 0.2, "species": "setosa"},

const SPECIES_COLORS = {
  // 안의 내용에 따라 컬러 바뀌게~~
  setosa: '#f5af19',
  virginica: '#f12711',
  versicolor: '#f4791f',
};
function unitssolve(a) {
  return a * a + (3817 / 15) * a - 314609 / 300;
}
function dropoutsolve(a) {
  return Math.exp(0.134765 * a) - 1.05935;
}
IrisData.forEach((v) => (v.units = unitssolve(v.units)));
console.log(dropoutsolve(2.5));
IrisData.forEach((v) => (v.dropout = dropoutsolve(v.dropout)));

const domainStructure = Object.keys(IrisData[0])
  .filter((name) => name !== 'species')
  .map((name) => ({ name, domain: [Infinity, -Infinity] }));

//domainStructure = [{name:epoch domain:[infinity,-infinity]}]

const domains = IrisData.reduce((acc, row) => {
  console.log('acc', acc, 'row', row);
  return acc.map((d) => {
    return {
      name: d.name,
      domain: [
        Math.min(d.domain[0], row[d.name]),
        Math.max(d.domain[1], row[d.name]),
      ],
    };
  });
}, domainStructure);
console.log('domain', domains);
var x_format = function (num) {
  console.log('하이염', num);
  if (num === 2.3) return 'A';
  else if (num === 5.6) return 'B';
  else if (num === 45.2) return 'C';
};
export default function BrushedParallelCoordinates(props) {
  return (
    <ParallelCoordinates
      animation
      brushing
      data={IrisData.map((d) => ({ ...d, color: SPECIES_COLORS[d.species] }))}
      domains={domains}
      margin={60}
      width={1500}
      height={400}
    />
  );
}
