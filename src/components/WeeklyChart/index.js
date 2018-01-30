import React from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';
import styled from 'styled-components';

const TooltipWrapper = styled.div`
  font-family: "Source Sans Pro", "Hiragino Sans GB", Arial, sans-serif;
  font-size: 0.9em;
  background-color: #FFFFFF;
  border: solid 1px #bdc3c7;
  padding: 8px;
`

const WeeklyChart = ({w, h, data, dataKey, leftDataKey, rightDataKey, leftColor, rightColor}) => (
  <BarChart width={w} height={h} data={data}>
    <XAxis dataKey={dataKey}/>
    <YAxis yAxisId='left' orientation='left' stroke={leftColor} tickFormatter={DateFormatter}/>
    <YAxis yAxisId='right' orientation='right' stroke={rightColor}/>
    <CartesianGrid strokeDasharray='3 3'/>
    <Tooltip content={CustomToolTip}/>
    <Legend/>
    <Bar yAxisId='left' dataKey={leftDataKey} fill={leftColor} name="Working Time"/>
    <Bar yAxisId='right' dataKey={rightDataKey} fill={rightColor} name="Commits"/>
  </BarChart>
);

const DateFormatter = (item) => `${Math.floor(item/60)}h ${item%60}m`

const CustomToolTip = ({ type, payload, label }) => {
  if (!payload || payload.length === 0) return null
  return(
    <TooltipWrapper className="custom-tooltip">
      <p className="label">{`${label}`}</p>
      <p style={{"color": payload[0].fill}}>{`${payload[0].name} : ${DateFormatter(payload[0].payload.working_time_min)}`}</p>
      <p style={{"color": payload[1].fill}}>{`${payload[1].name} : ${payload[1].payload.commits}`}</p>
      <p style={{"color": "#9b59b6"}}>{`Flips : ${payload[0].payload.flips}`}</p>
    </TooltipWrapper>
  )
}

export default WeeklyChart;
