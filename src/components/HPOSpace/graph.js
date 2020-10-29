import React from 'react';
import {scaleLinear} from 'd3-scale';
import { format } from 'd3';
import CarData from './car-data.json';

import {XYPlot, DecorativeAxis, LineSeries,XAxis} from 'react-vis';

const DEFAULT_DOMAIN = {min: Infinity, max: -Infinity};
// begin by figuring out the domain of each of the columns
const domains = CarData.reduce((res, row) => {
    //res : 아무것도 없는 res가 생김!! 
    // row :row에는 data 한개가 들어감
    //  0-60 mph (s): "11"
    // cylinders: "8"
    // displacement (cc): "360"
    // economy (mpg): "13"
    // name: "AMC Ambassador Brougham"
    // power (hp): "175"
    // weight (lb): "3821"
    // year: "73" 
   // console.log("res",res,"row",row)
  Object.keys(row).forEach(key => {  // Object.keys => 키가 담긴 배열을 반환한다.  값말고 이름 (키)만 반환하는ㄴ것임...! 그래서 foreach의 key가 하나하나 였던것...! 
      //console.log("key: ",key,"res[key]",res[key])
      //key는 row의 하나씩 행으로 들어감 name economy cylinders 등등
    if (!res[key]) {
      res[key] = {...DEFAULT_DOMAIN};
      //맨 처음에는 아무것도 없으니까 디폴트 값을 넣어준다. 
     // console.log("default")
    }
    //1번 이후에는 res에 값이 있어서 이걸 업뎃해주면서 min max 실행!!~
    res[key] = {
      min: Math.min(res[key].min, row[key]),
      max: Math.max(res[key].max, row[key])
    };
  });
  
  return res; // domains에는 res배열이 반환됨! 
}, {});

// use that to generate columns that map the data to a unit scale
const scales = Object.keys(domains).reduce((res, key) => {
  const domain = domains[key]; //key는 이름 하나! 키하나임 ? 근데 이게 reduce에서 key인게 의미가 있는건가? 
  console.log("key",key,"domain",domain);
  //d3.scaleLinear 는 선형적으로 나타내주는 함수를 뜻함 .domain([1,10])->10개로 나눔 .range([0,100])->범위가 0부터 100 즉 0부터 100을 10개로 나눈다. 선형적으로 
  res[key] = scaleLinear()
    .domain([domain.min, domain.max])
    .range([0, 1]);
console.log(res);
  return res;
}, {});
//console.log(scales);

// break each object into an array and rescale it
const mappedData = CarData.map(row => {
    console.log(scales);
  return Object.keys(row)
    .filter(key => key !== 'name')
    .map(key => ({
      x: key,
      y: scales[key](Number(row[key])) //scales가 함수다거기에 값 넣는것임..! 
    }));
});
// // mappedData[0] : 
// 0: {x: "economy (mpg)", y: 0}
// 1: {x: "cylinders", y: 1}
// 2: {x: "displacement (cc)", y: 0.8744769874476988}
// 3: {x: "power (hp)", y: 0.9210526315789473}
// 4: {x: "weight (lb)", y: 0.9644171779141104}
// 5: {x: "0-60 mph (s)", y: 0.20833333333333334}
// 6: {x: "year", y: 0.25}
console.log(mappedData)
const MARGIN = {
  left: 10,
  right: 10,
  top: 10,
  bottom: 10
};
var formatAsPercentage = format("M");
console.log(formatAsPercentage)
function ParallelCoordinatesExample(props) {
  return (
      
    <XYPlot
      width={500}
      height={300}
      xType="ordinal"
      margin={MARGIN}
      //tickFormat={d => !d ? '1st game' : (!(d % 10) ? `${d}th` : '')}/>
      
    >
       
      {mappedData.map((series, index) => {
        return <LineSeries data={series} key={`series-${index}`} />
      })}
      {mappedData[0].map((cell, index) => { // 각 세로축의 숫자 넣어주는 부분임 왜지..? ㅋㅋㅋㅋㅋㅋㅋ 
        return (
          <DecorativeAxis
            key={`${index}-axis`}
            axisStart={{x: cell.x, y: 0}}
            axisEnd={{x: cell.x, y: 1}}
            axisDomain={[domains[cell.x].min, domains[cell.x].max]}
            style={{
                line: {stroke: '#eb2723'},
                ticks: {stroke: "#eb2723"},
                text: {stroke: 'none', fill: '#eb2723', fontWeight: 600}
                
              }}
             // tickValue={formatAsPercentage}
          />
        );
      })}
       <XAxis 
        tickValues={[0, 1, 3, 4, 5]} title="X"/>
    </XYPlot>




  );
}

export default ParallelCoordinatesExample;