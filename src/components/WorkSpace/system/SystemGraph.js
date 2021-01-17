import React, { Component } from 'react';

import 'react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries,
  HorizontalBarSeriesCanvas,
  DiscreteColorLegend,
  FlexibleWidthXYPlot,
} from 'react-vis';
import { curveCatmullRom } from 'd3-shape';
class Graph extends Component {
  state = {
    crosshairValues: [],
  };

  render() {
    const { useCanvas } = this.state;
    const BarSeries = HorizontalBarSeries;

    const { models, graph } = this.props;
    const yAxisLabel = models;
    console.log(models, graph);

    const _onMouseLeave = () => {
      this.setState({ crosshairValues: [] });
    };
    const _onNearestX = (value, { index }) => {
      this.setState({ crosshairValues: graph.map((d) => d[index]) });
    };

    return (
      <div>
        <FlexibleWidthXYPlot
          width={500}
          height={300}
          margin={{ left: 100 }}
          stackBy="x"
          onMouseLeave={() => this.setState({ value: false })}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis tickTotal={3} tickFormat={(v) => v} />
          <YAxis
            tickTotal={graph.length}
            tickFormat={(v) => yAxisLabel[v]}
            style={{ fontWeight: 'bold' }}
          />
          <BarSeries data={graph} />
        </FlexibleWidthXYPlot>
      </div>
    );
  }
}

export default Graph;
