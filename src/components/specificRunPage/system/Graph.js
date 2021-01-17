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
import { curveCatmullRom } from 'd3-shape';

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crosshairValues: [],
    };
  }
  
  render() {
    
    const { models, graph } = this.props;
    const model_name = models.map((model) => model.runName);
    const mapToComponent = (data) => {
      return graph.map((data, i) => {
        return <LineSeries key={i} curve={curveCatmullRom.alpha(0.5)} data={data} />;
      });
    };
    return (
      <div>
        <FlexibleWidthXYPlot onMouseLeave={this._onMouseLeave} height={250}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis />
          <YAxis />
          {mapToComponent(this.state.graph)}
          <DiscreteColorLegend orientation="horizontal" items={model_name} />
        </FlexibleWidthXYPlot>
      </div>
    );
  }
}

export default Graph;
