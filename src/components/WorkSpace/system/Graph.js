import React, { Component, PureComponent } from 'react';
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

class Graph extends PureComponent {
  state = {
    crosshairValues: [],
  };
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

    const mapToComponent = (data) => {
      return graph.map((data, i) => {
        return <Line key={i} onNearestX={this._onNearestX} data={data} />;
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
