import React from 'react';

import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-bootstrap4';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';

const data = [
    { year: '1950', population: 2.525 },
    { year: '1960', population: 3.018 },
    { year: '1970', population: 3.682 },
    { year: '1980', population: 4.440 },
    { year: '1990', population: 5.310 },
    { year: '2000', population: 6.127 },
    { year: '2010', population: 6.930 },
  ];

const DexChart = ({dark}) => {
    return (
        <div className="card">
        <Chart
          data={data}
        >
          <ArgumentAxis />
          <ValueAxis />
    
          <LineSeries valueField="population" argumentField="year" color={dark? "red":"blue"} />
        </Chart>
      </div>

    );
}

export default DexChart;
