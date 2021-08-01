import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip } from 'recharts';
const ChartSimple = ({data}) => {

    const step_data = data.filter((item,key)=>key <= 50-1)
    return (
        <div>
        <LineChart width={1200} height={600} data={step_data}>
            <Line type="monotone" dataKey="VALUE" stroke="RED" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="PIECEID" />
            <YAxis />
            <Tooltip />
        </LineChart>
        </div>
    );
}

export default ChartSimple;
