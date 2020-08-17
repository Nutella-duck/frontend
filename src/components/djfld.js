// import React from 'react';
// import {curveCatmullRom} from 'd3-shape';


// import {
//   XYPlot,
//   XAxis,
//   YAxis,
//   ChartLabel,
//   HorizontalGridLines,
//   VerticalGridLines,
//   LineSeries,
 
// } from 'index';

// export default class Example extends React.Component {
  
//   render() {
    
//     const Line = LineSeries;

//     return (
//       <div>
        
//         <XYPlot width={300} height={300}>
//           <HorizontalGridLines />
//           <VerticalGridLines />
//           <XAxis />
//           <YAxis />
//           <ChartLabel 
//             text="X Axis"
//             className="alt-x-label"
//             includeMargin={false}
//             xPercent={0.025}
//             yPercent={1.01}
//             />

//           <ChartLabel 
//             text="Y Axis"
//             className="alt-y-label"
//             includeMargin={false}
//             xPercent={0.06}
//             yPercent={0.06}
//             style={{
//               transform: 'rotate(-90)',
//               textAnchor: 'end'
//             }}
//             />
//           <Line
//             className="first-series"
//             data={[{x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 15}, {x: 4, y: 12}]}
//           />
//           <Line className="second-series" data={null} />
//           <Line
//             className="third-series"
//             curve={'curveMonotoneX'}
//             data={[{x: 1, y: 10}, {x: 2, y: 4}, {x: 3, y: 2}, {x: 4, y: 15}]}
         
//           />
//           <Line
//             className="fourth-series"
//             curve={curveCatmullRom.alpha(0.5)}
//             style={{
//               // note that this can not be translated to the canvas version
//               strokeDasharray: '2 2'
//             }}
//             data={[{x: 1, y: 7}, {x: 2, y: 11}, {x: 3, y: 9}, {x: 4, y: 2}]}
//           />
//         </XYPlot>
//       </div>
//     );
//   }
// }


// ------------------------
// import React, { Component } from 'react';

// import 'react-vis/dist/style.css';
// import {XYPlot, LineSeries} from 'react-vis';

// class Reactvistest extends Component {
//   render() {
//     const data = [
//       {x: 0, y: 8},
//       {x: 1, y: 5},
//       {x: 2, y: 4},
//       {x: 3, y: 9},
//       {x: 4, y: 1},
//       {x: 5, y: 7},
//       {x: 6, y: 6},
//       {x: 7, y: 3},
//       {x: 8, y: 2},
//       {x: 9, y: 0}
//     ];
//     return (
//       <div className="App">
//         <XYPlot height={300} width={300}>
//           <LineSeries data={data} />
//         </XYPlot>
//       </div>
//     );
//   }
// }

// export default Reactvistest;