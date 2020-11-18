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
  AreaSeries,
} from 'react-vis';
import { curveCatmullRom } from 'd3-shape';
class Graph extends Component {
  state = {
    crosshairValues: [],
  };

  render() {
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
        return (
          <Line
            curve={curveCatmullRom.alpha(0.5)}
            key={i}
            onNearestX={_onNearestX}
            data={data}
          />
        );
      });
    };

    return (
      <div>
        <FlexibleWidthXYPlot onMouseLeave={_onMouseLeave} height={250}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis />
          <YAxis />

          {mapToComponent(this.state.graph)}
          {/* <Line
            curve={curveCatmullRom.alpha(0.5)}
            onNearestX={_onNearestX}
            data={graph}
          /> */}
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
