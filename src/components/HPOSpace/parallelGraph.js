import React from 'react';

import { ParallelCoordinates } from 'react-vis';
import IrisData from './iris.json';
import { curveCatmullRom } from 'd3';

const BrushedParallelCoordinates = ({ data }) => {
  console.log('datalog', data);
  let target = data.map((v) => v.target);
  console.log(target);
  let config = data.map((v) => v.config);
  for (let i = 0; i < config.length; i++) {
    config[i] = JSON.parse(config[i]);
    target[i] = JSON.parse(target[i]);
    config[i] = { ...config[i], ...target[i] };
  }
  let domains = [];

  const SPECIES_COLORS = {
    // 안의 내용에 따라 컬러 바뀌게~~
    tpe: '#f12711', //bottom
    virginica: '#f5af19', //top
    versicolor: '#f4791f', //middle
  };
  const optimizer = ['tpe', 'rmsprop', 'adadelta'];

  config.forEach((v) => {
    switch (v.method) {
      case 'tpe': {
        v.method = 0;
        break;
      }

      default: {
        v.method = 0;
        break;
      }
    }
  });
  if (config.length > 1) {
    console.log(config[0], typeof config[0]);
    const domain = Object.keys(config[0])
      .filter((name) => name !== 'species')
      .map((name) => ({ name, domain: [Infinity, -Infinity] }));
    console.log(domain);
    // domainStructure = [{ name: epoch, domain: [infinity, -infinity] }];

    domains = config.reduce((acc, row) => {
      return acc.map((d) => {
        console.log('row', d.name, row[d.name]);
        return {
          name: d.name,
          domain: [
            Math.min(d.domain[0], row[d.name]),
            Math.max(d.domain[1], row[d.name]),
          ],
        };
      });
    }, domain);
    console.log('domain', domains);
    // let temp = {
    //   name: domains[4].name,
    //   domain: domains[4].domain,
    //   tickFormat: (3, (v) => optimizer[v]),
    // };
    // const result = domains[3];

    // domains[3] = temp;
    // domains[4] = result;
  }
  return (
    <ParallelCoordinates
      style={{ line: { curve: curveCatmullRom.alpha(0.5) } }}
      animation
      brushing
      data={config.map((d) => ({ ...d, color: SPECIES_COLORS[d.method] }))}
      domains={domains ? domains : { name: 'method', domain: Array(2) }}
      margin={60}
      width={1500}
      height={400}
    />
  );
};
export default BrushedParallelCoordinates;
