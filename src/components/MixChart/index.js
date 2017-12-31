import React from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';

const MixChart = ({w, h, data, dataKey, leftDataKey, rightDataKey, leftColor, rightColor}) => (
  <BarChart width={w} height={h} data={data}>
    <XAxis dataKey={dataKey}/>
    <YAxis yAxisId='left' orientation='left' stroke={leftColor}/>
    <YAxis yAxisId='right' orientation='right' stroke={rightColor}/>
    <CartesianGrid strokeDasharray='3 3'/>
    <Tooltip/>
    <Legend/>
    <Bar yAxisId='left' dataKey={leftDataKey} fill={leftColor}/>
    <Bar yAxisId='right' dataKey={rightDataKey} fill={rightColor}/>
  </BarChart>
);

export default MixChart;
