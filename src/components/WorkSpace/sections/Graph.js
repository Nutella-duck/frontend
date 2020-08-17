import React, { Component } from 'react';

import 'react-vis/dist/style.css';
import {  XYPlot,
    XAxis,
    YAxis,
    ChartLabel,
    HorizontalGridLines,
    VerticalGridLines,FlexibleXYPlot,FlexibleWidthXYPlot ,Crosshair,
    LineSeries,MarkSeriesCanvas, DiscreteColorLegend} from 'react-vis';
    const data = [
        [ {x: 0, y: 8},
            {x: 1, y: 5},
            {x: 2, y: 4},
            {x: 3, y: 9},
            {x: 4, y: 1},
            {x: 5, y: 7},
            {x: 6, y: 6},
            {x: 7, y: 3},
            {x: 8, y: 2},
            {x: 9, y: 0}],
            [  {x: 0, y: 0},
              {x: 1, y: 1},
              {x: 2, y: 2},
              {x: 3, y: 3},
              {x: 4, y: 4},
              {x: 5, y: 5},
              {x: 6, y: 6},
              {x: 7, y: 7},
              {x: 8, y: 8},
              {x: 9, y: 9}],
              [  {x: 0, y: 5},
                {x: 1, y: 5},
                {x: 2, y: 5},
                {x: 3, y: 5},
                {x: 4, y: 5},
                {x: 5, y: 5},
                {x: 6, y: 5},
                {x: 7, y: 5},
                {x: 8, y: 5},
                {x: 9, y: 5}],
    ];
class Graph extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
          crosshairValues: []
        };
      }
      _onMouseLeave = () => {
        this.setState({crosshairValues: []});
      };
      _onNearestX = (value, {index}) => {
        this.setState({crosshairValues: data.map(d => d[index])});
      };
    
    render() {
       
        const Line = LineSeries;
        const modelName = ["Model-Name-A-002","Model-Name-A-003","Model-Name-A-004"]
       
       
        
        return (
          <div>
            
            <FlexibleWidthXYPlot onMouseLeave={this._onMouseLeave} height={250}>
              <HorizontalGridLines />
              <VerticalGridLines />
              <XAxis />
              <YAxis />
              
                <Line onNearestX={this._onNearestX} data={data[0]}/>
                <Line onNearestX={this._onNearestX} data={data[1]} />
                <Line onNearestX={this._onNearestX} data={data[2]} />
                <DiscreteColorLegend orientation="horizontal" items={modelName} />
                <Crosshair
          values={this.state.crosshairValues}
          className={'test-class-name'}
        />

              
            </FlexibleWidthXYPlot >
          </div>
    );
  }
}

export default Graph;