import React from 'react';

import { ParallelCoordinates } from 'react-vis';
import IrisData from './iris.json';
import { curveCatmullRom } from 'd3';
// {"sepal length": 5.1, "sepal width": 3.5, "petal length": 1.4, "petal width": 0.2, "species": "setosa"},

const SPECIES_COLORS = {
  // 안의 내용에 따라 컬러 바뀌게~~
  setosa: '#f12711', //bottom
  virginica: '#f5af19', //top
  versicolor: '#f4791f', //middle
};
const optimizer = ['adam', 'rmsprop', 'adadelta'];
function unitssolve(a) {
  return a * a + (3817 / 15) * a - 314609 / 300;
}
function dropoutsolve(a) {
  return Math.exp(0.134765 * a) - 1.05935;
}
function batch_sizeSolve(a) {
  return a > 2.2 ? 512 : 128;
}
IrisData.forEach((v) => (v.batch_size = batch_sizeSolve(v.batch_size)));
IrisData.forEach((v) => (v.units = unitssolve(v.units)));
console.log(dropoutsolve(2.5));
IrisData.forEach((v) => (v.dropout = dropoutsolve(v.dropout)));
IrisData.forEach((v) => {
  switch (v.optimizer) {
    case 'adam': {
      v.optimizer = 0;
      break;
    }
    case 'rmsprop': {
      v.optimizer = 1;
      break;
    }
    case 'adadelta': {
      v.optimizer = 2;
      break;
    }
    default: {
      v.optimizer = 0;
      break;
    }
  }
});
const domainStructure = Object.keys(IrisData[0])
  .filter((name) => name !== 'species')
  .map((name) => ({ name, domain: [Infinity, -Infinity] }));

//domainStructure = [{name:epoch domain:[infinity,-infinity]}]

let domains = IrisData.reduce((acc, row) => {
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
let temp = {
  name: domains[4].name,
  domain: domains[4].domain,
  tickFormat: (3, (v) => optimizer[v]),
};
const result = domains[3];

domains[3] = temp;
domains[4] = result;

export default function BrushedParallelCoordinates(props) {
  return (
    <ParallelCoordinates
      style={{ line: { curve: curveCatmullRom.alpha(0.5) } }}
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
