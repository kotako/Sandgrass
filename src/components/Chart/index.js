import React from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Area, Tooltip } from 'recharts';

const Chart = (data, xkey, ykey, color) => (
  <AreaChart sycId='areaChart' data={data} width={300} height={200}>
    <XAxis dataKey={xkey}/>
    <YAxis/>
    <CartesianGrid strokeDasharray='3 3'/>
    <Tooltip/>
    <Area type='monotone' dataKey={ykey} stroke={color} fill={color}/>
  </AreaChart>
);

export default Chart;
