import React from 'react';

import {ParallelCoordinates} from 'react-vis';
import IrisData from './iris.json';
import {curveCatmullRom} from 'd3';
// {"sepal length": 5.1, "sepal width": 3.5, "petal length": 1.4, "petal width": 0.2, "species": "setosa"},

const SPECIES_COLORS = { // 안의 내용에 따라 컬러 바뀌게~~ 
  setosa: '#f5af19',
  virginica: '#f12711',
  versicolor: '#f4791f'
};

const domainStructure = Object.keys(IrisData[0]) 
  .filter(name => name !== 'species')
  .map(name => ({name, domain: [Infinity, -Infinity]}));
 
//domainStructure = [{name:epoch domain:[infinity,-infinity]}]

const domains = IrisData.reduce((acc, row) => {
  console.log("acc",acc,"row",row)
  return acc.map(d => {
    return {
      name: d.name,
      domain: [
        Math.min(d.domain[0], row[d.name]),
        Math.max(d.domain[1], row[d.name])
      ]
    };
  });
}, domainStructure);
console.log(domains);
export default function BrushedParallelCoordinates(props) {
  return (
    <ParallelCoordinates
    
      animation
      brushing
      data={IrisData.map(d => ({...d, color: SPECIES_COLORS[d.species]}))}
      domains={domains}
      margin={60}
      width={1500}
      height={400}
     
    />
  );
}