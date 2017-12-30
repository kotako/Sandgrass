import React from 'react';
import styled from 'styled-components';
import { Card, Statistic } from 'semantic-ui-react';
import MixChart from '../MixChart';

const Wrapper = styled.div`
  display: inline-box;
`

const AnalyzerCard = () => (
  <Card fluid>
    <Card.Content>
      <Card.Header>
        Analyze
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Wrapper>
        {MixChart(400, 200, [{name: '12/1', uv: 50, pv: 9000},
        {name: '12/2', commits: 25, work: 7222},
        {name: '12/3', commits: 120, work: 6222},
        {name: '12/4', commits: 240, work: 5400},
        {name: '12/5', commits: 25, work: 3200},
        {name: '12/6', commits: 50, work: 2500},
        {name: '12/7', commits: 120, work: 1209},], 'name', 'work', 'commits', '#8848d8', '#82ca9d' )}
        <Statistic size='small'>
          <Statistic.Value>12</Statistic.Value>
          <Statistic.Label>commits / day</Statistic.Label>
        </Statistic>
      </Wrapper>
    </Card.Content>
  </Card>
);

export default AnalyzerCard;
