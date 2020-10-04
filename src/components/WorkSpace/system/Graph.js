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
  state = {
    crosshairValues: [],
  };

  render() {
<<<<<<< HEAD
=======

    console.log('시스템 2렌더링 중...');
>>>>>>> 5389c4edb8a17bf1c7caad118c6c71190c1106fb
    const Line = LineSeries;

    const { models, graph } = this.props;
    const model_name = models;
    const _onMouseLeave = () => {
      this.setState({ crosshairValues: [] });
    };
    const _onNearestX = (value, { index }) => {
      this.setState({ crosshairValues: graph.map((d) => d[index]) });
    };

    const mapToComponent = (data) => {
      return graph.map((data, i) => {
        return <Line key={i} onNearestX={_onNearestX} data={data} />;
      });
    };
    return (
      <div>
        <FlexibleWidthXYPlot onMouseLeave={_onMouseLeave} height={250}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis />
          <YAxis />
<<<<<<< HEAD

          {mapToComponent(this.state.graph)}
=======
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

>>>>>>> 5389c4edb8a17bf1c7caad118c6c71190c1106fb
          <DiscreteColorLegend orientation="horizontal" items={model_name} />
          <Crosshair
            values={this.state.crosshairValues}
            className={'test-class-name'}
            // itemsFormat={(d) => [
            //   { title: model_name[0], value: d[0].y },
            //   // { title: model_name[1], value: d[1].y },
            //   // { title: model_name[2], value: d[2].y },
            // ]}
          />
        </FlexibleWidthXYPlot>
      </div>
    );
  }
}

export default Graph;
