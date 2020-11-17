import React from 'react';
// import ShowcaseButton from '../showcase-components/showcase-button';
import Data from './iris.json';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries,
  MarkSeriesCanvas,
  Hint,
} from 'react-vis';
import { gray } from 'd3';

function getRandomData() {
  return new Array(100).fill(0).map((row) => ({
    x: Math.random() * 10,
    y: Math.random() * 20,
    size: 1,
    color: gray,
    // opacity: Math.random() * 0.5 + 0.5, //투명도
  }));
}

const randomData = getRandomData();
// const nextType = {
//   typeA: 'typeB',
//   typeB: 'typeA'
// };

// const nextModeContent = {
//   canvas: 'SWITCH TO SVG',
//   svg: 'SWITCH TO CANVAS'
// };

const drawModes = ['canvas', 'svg'];

export default class Example extends React.Component {
  state = {
    drawMode: 0,
    data1: randomData,
    colorType: 'typeA',
    value: false,
  };

  render() {
    const { drawMode, data1, colorType } = this.state;
    const { data } = this.props;
    let target = data.map((v) => v.target);
    for (let i = 0; i < target.length; i++) {
      target[i] = JSON.parse(target[i]);
    }
    console.log('target', target);
    let result = [];
    for (let i = 0; i < target.length; i++) {
      result.push({
        x: i,
        y: target[i].eval_loss,
        size: 1,
      });
    }
    console.log('result', result);
    const markSeriesProps = {
      animation: true,
      className: 'mark-series-example',
      sizeRange: [1, 5],
      seriesId: 'my-example-scatterplot',

      // opacityType: 'literal',
      data: result,
      onNearestXY: (value) => this.setState({ value }),
    };

    const mode = drawModes[drawMode];
    return (
      <div className="canvas-wrapper">
        <XYPlot
          onMouseLeave={() => this.setState({ value: false })}
          width={600}
          height={300}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          {mode === 'canvas' && <MarkSeriesCanvas {...markSeriesProps} />}
          {/* {this.state.value ? <Hint value={this.state.value} /> : null} */}
        </XYPlot>
      </div>
    );
  }
}
