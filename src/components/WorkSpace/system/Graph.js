import React, { Component } from 'react';

import 'react-vis/dist/style.css';
import {
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  FlexibleWidthXYPlot,
  Crosshair,
  LineSeries,
  DiscreteColorLegend,
} from 'react-vis';

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crosshairValues: [],
    };
  }
  // _onMouseLeave = () => {
  //   this.setState({ crosshairValues: [] });
  // };
  // _onNearestX = (value, { index }) => {
  //   this.setState({ crosshairValues: data.map((d) => d[index]) });
  // };

  render() {
    console.log('시스템 2렌더링 중...');
    const Line = LineSeries;

    const { models, graph } = this.props;

    //const modelName = models.map(model=>model.runName);
    // console.log("models", models)
    const model_name = models.map((model) => model.runName);

    // for(let i= 0;i<10;i++)
    // graph.push({x: i, y: 1.2})

    console.log('graph system ', graph);

    // const arr=[{title:"r1"}];
    // for(let i = 0;i<1;i++)
    // {
    //   arr.push({title:model_name[i]})
    // }
    // console.log(typeof arr[1].title)
    return (
      <div>
        <FlexibleWidthXYPlot onMouseLeave={this._onMouseLeave} height={250}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis />
          <YAxis />

          <Line onNearestX={this._onNearestX} data={graph[0]} />
          <Line onNearestX={this._onNearestX} data={graph[1]} />
          <Line onNearestX={this._onNearestX} data={graph[2]} />
          {/* <Line onNearestX={this._onNearestX} data={graph.length>=2 ? graph[1]:graph[0]} />
          <Line onNearestX={this._onNearestX} data={graph.length>2 ? graph[2]:graph[0]} /> */}
          {/* <Line onNearestX={this._onNearestX} data={data[3]} />
          <Line onNearestX={this._onNearestX} data={data[4]} /> */}
          <DiscreteColorLegend orientation="horizontal" items={model_name} />
          {/* <Crosshair
            values={this.state.crosshairValues}
            className={"test-class-name"}
          /> */}
        </FlexibleWidthXYPlot>
      </div>
    );
  }
}

export default Graph;
