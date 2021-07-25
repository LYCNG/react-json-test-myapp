import React from 'react'
import Loading from '../Loading/Loading'
import {ArgumentAxis,ValueAxis,Chart,LineSeries} from '@devexpress/dx-react-chart-bootstrap4';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';

const datas = [
    { argument: 1, value: 10 },
    { argument: 2, value: 20 },
    { argument: 3, value: 30 },
  ];
  
export default function ChartStyle() {

    return (

        <div className="card">
            <Chart
            data={datas}
            >
            <ArgumentAxis />
            <ValueAxis />

            <LineSeries valueField="value" argumentField="argument" />
            </Chart>
        </div>

    )
}
