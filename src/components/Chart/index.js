import React from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Bar, Tooltip } from 'recharts';

const Chart = (data, xkey, ykey, color) => (
  <BarChart sycId='areaChart' data={data} width={400} height={200}>
    <XAxis dataKey={xkey}/>
    <YAxis/>
    <CartesianGrid strokeDasharray='3 3'/>
    <Tooltip/>
    <Bar dataKey={ykey} fill={color}/>
  </BarChart>
);

export default Chart;
