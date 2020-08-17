import React, { Component } from 'react';

import 'react-vis/dist/style.css';
import {  XYPlot,
    XAxis,
    YAxis,
    ChartLabel,
    HorizontalGridLines,
    VerticalGridLines,
    LineSeries,MarkSeriesCanvas} from 'react-vis';

class Reactvistest extends Component {
 
    
    render() {
       
        const Line = LineSeries;

        const data = [
            [  {x: 0, y: 8},
                {x: 1, y: 5},
                {x: 2, y: 4},
                {x: 3, y: 9},
                {x: 4, y: 1},
                {x: 5, y: 7},
                {x: 6, y: 6},
                {x: 7, y: 3},
                {x: 8, y: 2},
                {x: 9, y: 0}],
                [  {x: 10, y: 0},
                    {x: 5, y: 5},
                    {x: 8, y: 4},
                    {x: 4, y: 9},
                    {x: 4, y: 1},
                    {x: 5, y: 7},
                    {x: 6, y: 6},
                    {x: 3, y: 3},
                    {x: 2, y: 2},
                    {x: 9, y: 0}]
        ]
        return (
          <div>
            
            <XYPlot width={900} height={300}>
              <HorizontalGridLines />
              <VerticalGridLines />
              <XAxis />
              <YAxis />
              <ChartLabel 
                text="X Axis"
                className="alt-x-label"
                includeMargin={false}
                xPercent={0.5}
                yPercent={1}
                />
    
              <ChartLabel 
                text="Y Axis"
                className="alt-y-label"
                includeMargin={false}
                xPercent={0.06}
                yPercent={0.06}
                style={{
                  transform: 'rotate(-90)',
                  textAnchor: 'end'
                }}
                />
                <Line data={data[0]} color="black"/>
                <Line data={data[1]} color="red"/>

            

              
            </XYPlot>
          </div>
    );
  }
}

export default Reactvistest;