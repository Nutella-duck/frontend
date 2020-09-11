import React, { Component } from "react";

import "react-vis/dist/style.css";
import {
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  FlexibleWidthXYPlot,
  Crosshair,
  LineSeries,
  DiscreteColorLegend,
} from "react-vis";

const data = [
  [
    { x: 1, y: 80.503808 },
    { x: 2, y: 80.66784 },
    { x: 3, y: 82.772867 },
    { x: 4, y: 85.488935 },
    { x: 5, y: 87.417615 },
    { x: 6, y: 87.586675 },
    { x: 7, y: 91.09568 },
    { x: 8, y: 91.302217 },
    { x: 9, y: 92.551648 },
    { x: 10, y: 97.978953 },
  ],
  [
    { x: 0, y: 67.8 },
    { x: 1, y: 74.031472 },
    { x: 2, y: 78.326123 },
    { x: 3, y: 82.254379 },
    { x: 4, y: 85.002944 },
    { x: 5, y: 87.347595 },
    { x: 6, y: 87.982246 },
    { x: 7, y: 89.569101 },
    { x: 8, y: 91.084415 },
    { x: 9, y: 91.115851 },
    { x: 10, y: 97.455851 },
  ],
  [
    { x: 0, y: 65.93 },
    { x: 1, y: 74.24434 },
    { x: 2, y: 76.262654 },
    { x: 3, y: 80.10868 },
    { x: 4, y: 85.547974 },
    { x: 5, y: 88.516993 },
    { x: 6, y: 91.165307 },
    { x: 7, y: 91.853877 },
    { x: 8, y: 94.172314 },
    { x: 9, y: 94.603019 },
    { x: 10, y: 97.455851 },
  ],
  [
    { x: 0, y: 78.465736 },
    { x: 1, y: 84.368797 },
    { x: 2, y: 84.66 },
    { x: 3, y: 86.123061 },
    { x: 4, y: 87.437208 },
    { x: 5, y: 87.659551 },
    { x: 6, y: 88.481472 },
    { x: 7, y: 91.67719 },
    { x: 8, y: 92.936123 },
    { x: 9, y: 94.519476 },
    { x: 10, y: 96.072925 },
  ],
  [
    { x: 0, y: 65.02 },
    { x: 1, y: 72.807336 },
    { x: 2, y: 77.882425 },
    { x: 3, y: 78.644673 },
    { x: 4, y: 79.977282 },
    { x: 5, y: 81.839762 },
    { x: 6, y: 81.854618 },
    { x: 7, y: 84.852009 },
    { x: 8, y: 85.44653 },
    { x: 9, y: 85.455266 },
    { x: 10, y: 85.49485 },
  ],
];
class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crosshairValues: [],
    };
  }
  _onMouseLeave = () => {
    this.setState({ crosshairValues: [] });
  };
  _onNearestX = (value, { index }) => {
    this.setState({ crosshairValues: data.map((d) => d[index]) });
  };

  render() {
    const Line = LineSeries;
   const modelName = ["run1","run2"]; 
    const {models,graph} = this.props
    console.log(modelName);
    //const modelName = models.map(model=>model.runName);
    console.log(models)
    const modelname = models.map(model=>model.runName);
    console.log(modelname)
    console.log(modelName.constructor)
    console.log(models.constructor)
    console.log(modelname.constructor)
    console.log(typeof modelname[0])

///////////////////////////////////////////////////////////////////
 
console.log(graph[0])




    const arr=[{title:"r1"}];
    for(let i = 0;i<1;i++)
    {
      arr.push({title:modelname[i]})
    }
    console.log(typeof arr[1].title)
    return (
      <div>
        <FlexibleWidthXYPlot onMouseLeave={this._onMouseLeave} height={250}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis />
          <YAxis />

          <Line onNearestX={this._onNearestX} data={data[0]} />
          {/* <Line onNearestX={this._onNearestX} data={data[1]} />
          <Line onNearestX={this._onNearestX} data={data[2]} />
          <Line onNearestX={this._onNearestX} data={data[3]} />
          <Line onNearestX={this._onNearestX} data={data[4]} /> */}
          <DiscreteColorLegend orientation="horizontal" items={modelName} />
          <Crosshair
            values={this.state.crosshairValues}
            className={"test-class-name"}
          />
        </FlexibleWidthXYPlot>
      </div>
    );
  }
}

export default Graph;
