import React, { Component } from 'react';

import 'react-vis/dist/style.css';
import {
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  FlexibleWidthXYPlot,
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

    const model_name = models.map((model) => model.runName);

    console.log('graph system ', graph);

    return (
      <div>
        <FlexibleWidthXYPlot onMouseLeave={this._onMouseLeave} height={250}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis />
          <YAxis />
          <Line
            onNearestX={this._onNearestX}
            data={
              graph
                ? graph[0]
                : [
                    { x: 1, y: 3 },
                    { x: 2, y: 3 },
                  ]
            }
          />
          <Line onNearestX={this._onNearestX} data={graph[1]} />
          <Line onNearestX={this._onNearestX} data={graph[2]} />

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
