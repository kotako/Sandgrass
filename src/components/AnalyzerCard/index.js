import React from 'react';
import styled from 'styled-components';
import { Card, Statistic } from 'semantic-ui-react';
import MixChartContainer from '../../containers/MixChartContainer';

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
        <MixChartContainer/>
        <Statistic size='small'>
          <Statistic.Value>12</Statistic.Value>
          <Statistic.Label>commits / day</Statistic.Label>
        </Statistic>
      </Wrapper>
    </Card.Content>
  </Card>
);

export default AnalyzerCard;
