import React from 'react';
//import ShowcaseButton from '../showcase-components/showcase-button';
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

export default class Example extends React.Component {
  state = {
    useCanvas: false,
  };
  render() {
    const { useCanvas } = this.state;
    const BarSeries = HorizontalBarSeries;

    const { data } = this.props;
    const yAxisLabel = data[1];
    console.log(data[0]);
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
          <XAxis tickTotal={3} tickFormat={(v) => v * 100 + '%'} />
          <YAxis
            tickTotal={data[0].length}
            tickFormat={(v) => yAxisLabel[v]}
            style={{ fontWeight: 'bold' }}
          />
          <BarSeries data={data[0]} />
        </FlexibleWidthXYPlot>
      </div>
    );
  }
}
// import React from 'react';

// import {
//   XYPlot,
//   XAxis,
//   YAxis,
//   VerticalGridLines,
//   HorizontalGridLines,
//   VerticalBarSeries,
//   VerticalBarSeriesCanvas,
//   DiscreteColorLegend,
// } from 'react-vis';

// export default class Example extends React.Component {
//   state = {
//     useCanvas: false,
//   };
//   render() {
//     const { useCanvas } = this.state;
//     const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
//     const content = useCanvas ? 'TOGGLE TO SVG' : 'TOGGLE TO CANVAS';

//     return (
//       <div>
//         <XYPlot
//           className="clustered-stacked-bar-chart-example"
//           xType="ordinal"
//           stackBy="y"
//           width={300}
//           height={300}
//         >
//           <DiscreteColorLegend
//             style={{ position: 'absolute', left: '50px', top: '10px' }}
//             orientation="horizontal"
//             items={[
//               {
//                 title: 'Apples',
//                 color: '#12939A',
//               },
//               {
//                 title: 'Oranges',
//                 color: '#79C7E3',
//               },
//             ]}
//           />
//           <VerticalGridLines />
//           <HorizontalGridLines />
//           <XAxis />
//           <YAxis />
//           <BarSeries
//             cluster="2015"
//             color="#12939A"
//             data={[
//               { x: 'Q1', y: 10 },
//               { x: 'Q2', y: 5 },
//               { x: 'Q3', y: 15 },
//               { x: 'Q4', y: 20 },
//             ]}
//           />
//           <BarSeries
//             cluster="2015"
//             color="#79C7E3"
//             data={[
//               { x: 'Q1', y: 3 },
//               { x: 'Q2', y: 7 },
//               { x: 'Q3', y: 2 },
//               { x: 'Q4', y: 1 },
//             ]}
//           />
//           <BarSeries
//             cluster="2016"
//             color="#12939A"
//             data={[
//               { x: 'Q1', y: 3 },
//               { x: 'Q2', y: 8 },
//               { x: 'Q3', y: 11 },
//               { x: 'Q4', y: 19 },
//             ]}
//           />
//           <BarSeries
//             cluster="2016"
//             color="#79C7E3"
//             data={[
//               { x: 'Q1', y: 22 },
//               { x: 'Q2', y: 2 },
//               { x: 'Q3', y: 22 },
//               { x: 'Q4', y: 18 },
//             ]}
//           />
//         </XYPlot>
//       </div>
//     );
//   }
// }
