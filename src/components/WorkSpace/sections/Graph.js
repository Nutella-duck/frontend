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
    console.log('차트2->1 렌더링 중...');
    const Line = LineSeries;

    const { models, graph } = this.props;

    const model_name = models.map((model) => model.runName);

    console.log('chart graph', graph);
    const sample = [
      [
        { x: 1, y: 0.7 },
        { x: 2, y: 0.75 },
        { x: 3, y: 0.79 },
      ],
      [
        { x: 1, y: 0.7 },
        { x: 2, y: 0.75 },
        { x: 3, y: 0.79 },
      ],
      [
        { x: 1, y: 0.7 },
        { x: 2, y: 0.75 },
        { x: 3, y: 0.79 },
      ],

      [
        [
          { x: 1, y: 0.7 },
          { x: 2, y: 0.75 },
          { x: 3, y: 0.79 },
        ],
        [
          { x: 1, y: 0.7 },
          { x: 2, y: 0.75 },
          { x: 3, y: 0.79 },
        ],
        [
          { x: 1, y: 0.7 },
          { x: 2, y: 0.75 },
          { x: 3, y: 0.79 },
        ],
      ],
    ];

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
          <Line
            onNearestX={this._onNearestX}
            data={
              graph
                ? graph[1]
                : [
                    { x: 1, y: 3 },
                    { x: 2, y: 3 },
                  ]
            }
          />
          <Line
            onNearestX={this._onNearestX}
            data={
              graph
                ? graph[2]
                : [
                    { x: 1, y: 3 },
                    { x: 2, y: 3 },
                  ]
            }
          />

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
